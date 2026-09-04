import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DraftNotice } from "@/components/layout/DraftNotice";
import { siteConfig } from "@/content/site-config";

// LocalBusiness + AggregateRating JSON-LD. Address/geo are left out until
// confirmed with Izzy — Google tolerates a partial LocalBusiness entry, and
// this is easy to extend once GOOGLE_PLACE_ID / GOOGLE_MAPS_API_KEY land.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.businessName,
  description: siteConfig.tagline,
  url: siteConfig.url,
  areaServed: siteConfig.location.town,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.town,
    addressRegion: siteConfig.location.region,
    addressCountry: siteConfig.location.country,
  },
  sameAs: [siteConfig.social.instagram.url, siteConfig.social.facebook.url],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.fallbackRating.value,
    reviewCount: siteConfig.fallbackRating.count,
  },
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DraftNotice />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
