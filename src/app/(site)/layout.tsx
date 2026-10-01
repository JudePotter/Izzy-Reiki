import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyWhatsApp } from "@/components/layout/StickyWhatsApp";
import { getAggregateRating } from "@/lib/google-reviews";
import { buildSiteJsonLd, serializeJsonLd } from "@/lib/structured-data";

export default async function SiteLayout({ children }: { children: React.ReactNode }) {
  // Same live Places rating that feeds the homepage reviews trust line —
  // kept in sync here so the schema never quietly drifts from what's shown.
  const rating = await getAggregateRating();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildSiteJsonLd(rating)) }}
      />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyWhatsApp />
      {/* Vercel Web Analytics — lives here (not the root layout) so the local
          /keystatic admin isn't counted as a visitor. */}
      <Analytics />
    </>
  );
}
