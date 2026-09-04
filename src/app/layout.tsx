import type { Metadata } from "next";
import { cormorant, jost } from "@/lib/fonts";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} — ${siteConfig.tagline} in ${siteConfig.location.town}`,
    template: `%s — ${siteConfig.businessName}`,
  },
  description: `Reflexology, massage and reiki with ${siteConfig.practitionerName} at ${siteConfig.businessName} — your local space for mind, body & soul in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
  openGraph: {
    title: siteConfig.businessName,
    description: `${siteConfig.tagline} in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
    url: siteConfig.url,
    siteName: siteConfig.businessName,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.businessName,
    description: `${siteConfig.tagline} in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
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
      lang="en"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
