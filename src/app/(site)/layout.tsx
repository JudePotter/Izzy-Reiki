import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { siteConfig } from "@/content/site-config";
import { getAggregateRating, type AggregateRating } from "@/lib/google-reviews";

// LocalBusiness + AggregateRating JSON-LD. Geo coordinates aren't confirmed
// yet, so left out — Google tolerates a partial LocalBusiness entry. This is
// structured data for search engines, not visible page text, so including
// the phone number here doesn't conflict with keeping it off the rendered
// page.
const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

/** Same live Places rating that feeds the homepage reviews trust line —
 * kept in sync here so the schema never quietly drifts from what's shown. */
function buildJsonLd(rating: AggregateRating) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.businessName,
    description: siteConfig.tagline,
    url: siteConfig.url,
    telephone: `+${siteConfig.whatsapp.number}`,
    email: siteConfig.contact.email,
    areaServed: siteConfig.location.town,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.addressLine,
      addressLocality: siteConfig.location.town,
      addressRegion: siteConfig.location.region,
      postalCode: siteConfig.location.postcode,
      addressCountry: siteConfig.location.country,
    },
    openingHoursSpecification: siteConfig.hours
      .filter((row) => row.hours !== "Closed")
      .map((row) => {
        const [opens, closes] = row.hours.split(/[–-]/).map((t) => t.trim());
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[row.day],
          opens: to24Hour(opens),
          closes: to24Hour(closes),
        };
      }),
    sameAs: [siteConfig.social.instagram.url, siteConfig.social.facebook.url],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      reviewCount: rating.count,
    },
  };
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

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  const rating = await getAggregateRating();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(rating)) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyWhatsApp />
    </>
  );
}
