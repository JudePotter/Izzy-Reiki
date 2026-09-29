import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

/** Falls back to the homepage hero photo when a page has nothing more specific. */
const DEFAULT_OG_IMAGE = "/images/hero-crystals.jpeg";

/**
 * Per-page title/description alone (what every route had before) means every
 * page shares the root layout's generic OpenGraph/Twitter/canonical data —
 * so a shared link to /about or /services looks identical to the homepage
 * when posted anywhere. This fills in the rest from the same title/
 * description/path every page already has.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
}: {
  title: string;
  description: string;
  /** Route path from the site root, e.g. "/about" ("/" for the homepage). */
  path: string;
  image?: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.businessName,
      locale: "en_GB",
      type: "website",
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
