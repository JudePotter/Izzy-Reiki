import type { Metadata } from "next";
import { cormorant, jost } from "@/lib/fonts";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const { town, region, geo } = siteConfig.location;

const siteDescription = `Reiki, reflexology and holistic massage with ${siteConfig.practitionerName} in ${town}, ${region}. A calm, welcoming space to release tension and reset. Book on WhatsApp.`;

/**
 * Site-wide defaults. Every page overrides title/description/canonical/share
 * data through `buildMetadata()` (src/lib/metadata.ts) — nothing here should
 * set a canonical, or a page that forgot to would claim to be the homepage.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Reiki, Reflexology & Massage in ${town} — ${siteConfig.businessName}`,
    template: `%s — ${siteConfig.businessName}`,
  },
  description: siteDescription,
  applicationName: siteConfig.businessName,
  authors: [{ name: siteConfig.practitionerName }],
  creator: siteConfig.practitionerName,
  publisher: siteConfig.businessName,
  // The phone number is deliberately never shown as text, so stop mobile
  // browsers guessing at digits and turning them into stray call links.
  formatDetection: { telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Local-search hints (Google leans on the Business Profile + JSON-LD, but
  // Bing and others still read these).
  other: {
    "geo.region": "GB-BDF",
    "geo.placename": town,
    "geo.position": `${geo.lat};${geo.lng}`,
    ICBM: `${geo.lat}, ${geo.lng}`,
  },
  openGraph: {
    title: `Reiki, Reflexology & Massage in ${town} — ${siteConfig.businessName}`,
    description: siteDescription,
    siteName: siteConfig.businessName,
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/og/home.jpg", width: 1200, height: 630, alt: siteConfig.businessName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Reiki, Reflexology & Massage in ${town} — ${siteConfig.businessName}`,
    description: siteDescription,
    images: [{ url: "/images/og/home.jpg", alt: siteConfig.businessName }],
  },
};

/**
 * Bare root shell only — html/body, fonts, global styles. Header/Footer live
 * in app/(site)/layout.tsx instead of here, because /keystatic (the local
 * blog admin, outside the (site) group) needs to render full-screen without
 * the marketing site's chrome around it.
 */
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
