import { siteConfig } from "@/content/site-config";
import { serviceTreatments, servicePackages, type ServiceItem } from "@/content/services";
import type { AggregateRating } from "@/lib/google-reviews";

/**
 * Structured data (JSON-LD) for search engines — not visible page text, so
 * including the phone number here doesn't conflict with keeping it off the
 * rendered page. Everything is derived from `siteConfig` / `services.ts`, so
 * it can't drift from what the site actually says.
 */

const BUSINESS_ID = `${siteConfig.url}/#business`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

const absolute = (path: string) => (path.startsWith("http") ? path : `${siteConfig.url}${path}`);

/** JSON.stringify doesn't escape "<", so a stray "</script>" in a string
 * could break out of the tag — Next's JSON-LD guide recommends this scrub. */
export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/** "2:00pm" -> "14:00" for schema.org's expected time format. */
function to24Hour(time: string) {
  const match = time.match(/(\d+):(\d+)(am|pm)/i);
  if (!match) return time;
  const [, hourStr, minute, meridiem] = match;
  let hour = parseInt(hourStr, 10);
  if (meridiem.toLowerCase() === "pm" && hour !== 12) hour += 12;
  if (meridiem.toLowerCase() === "am" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${minute}`;
}

function offerFor(item: ServiceItem) {
  return {
    "@type": "Offer",
    priceCurrency: "GBP",
    price: item.price.replace(/[^\d.]/g, ""),
    itemOffered: {
      "@type": "Service",
      name: item.name,
      description: item.description,
      provider: { "@id": BUSINESS_ID },
    },
  };
}

const address = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.location.addressLine,
  addressLocality: siteConfig.location.town,
  addressRegion: siteConfig.location.region,
  postalCode: siteConfig.location.postcode,
  addressCountry: siteConfig.location.country,
};

/** The business (a health & beauty LocalBusiness) plus the WebSite it publishes. */
export function buildSiteJsonLd(rating: AggregateRating) {
  const { geo } = siteConfig.location;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HealthAndBeautyBusiness",
        "@id": BUSINESS_ID,
        name: siteConfig.businessName,
        description: `${siteConfig.tagline} offering Reiki, reflexology and holistic massage in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
        url: siteConfig.url,
        image: [absolute("/images/og/home.jpg"), absolute("/images/about/izzy-treatment-room.jpg")],
        logo: absolute("/images/logos/divine-align-logo.jpeg"),
        telephone: `+${siteConfig.whatsapp.number}`,
        email: siteConfig.contact.email,
        priceRange: siteConfig.priceRange,
        currenciesAccepted: "GBP",
        address,
        geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng },
        hasMap: siteConfig.googleReviewsUrl,
        // Izzy rents her room inside Renume Wellness, so say so — it ties the
        // listing to the building people will actually search for.
        containedInPlace: { "@type": "Place", name: "Renume Wellness", address },
        areaServed: [
          { "@type": "City", name: siteConfig.location.town },
          ...siteConfig.nearbyAreas.map((name) => ({ "@type": "Place", name })),
          { "@type": "AdministrativeArea", name: siteConfig.location.region },
        ],
        founder: {
          "@type": "Person",
          name: siteConfig.practitionerName,
          jobTitle: "Reiki Master and Complementary Therapist",
        },
        knowsAbout: ["Reiki", "Reflexology", "Holistic massage", "Sound healing"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Treatments and packages",
          itemListElement: [...serviceTreatments, ...servicePackages].map(offerFor),
        },
        openingHoursSpecification: siteConfig.hours
          .filter((row) => row.hours !== "Closed")
          .map((row) => {
            const [opens, closes] = row.hours.split(/[–-]/).map((t) => t.trim());
            return {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: row.day,
              opens: to24Hour(opens),
              closes: to24Hour(closes),
            };
          }),
        sameAs: [
          siteConfig.social.instagram.url,
          siteConfig.social.facebook.url,
          siteConfig.googleReviewsUrl,
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating.value,
          reviewCount: rating.count,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.businessName,
        inLanguage: "en-GB",
        publisher: { "@id": BUSINESS_ID },
      },
    ],
  };
}

export function buildArticleJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage?: string;
}) {
  const url = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    ...(post.coverImage ? { image: absolute(post.coverImage) } : {}),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "en-GB",
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Person", name: siteConfig.practitionerName },
    publisher: { "@id": BUSINESS_ID },
  };
}
