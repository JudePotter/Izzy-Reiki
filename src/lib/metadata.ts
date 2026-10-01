import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

/**
 * Share images are purpose-cropped 1200×630 versions of real site photos
 * (public/images/og/) — several of the originals are tall portraits that
 * social sites would otherwise crop badly. Falls back to the homepage one.
 */
const DEFAULT_OG_IMAGE = "/images/og/home.jpg";

/**
 * Per-page title/description alone (what every route had before) means every
 * page shares the root layout's generic OpenGraph/Twitter/canonical data —
 * so a shared link to /about or /services looks identical to the homepage
 * when posted anywhere. This fills in the rest from the same title/
 * description/path every page already has.
 *
 * `title` goes through the root layout's "%s — Divine Align Healing"
 * template; pass `{ absolute }` (the homepage does) to skip it.
 */
export function buildMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
}: {
  title: string | { absolute: string };
  description: string;
  /** Route path from the site root, e.g. "/about" ("/" for the homepage). */
  path: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const url = path === "/" ? siteConfig.url : `${siteConfig.url}${path}`;

  // Shared links need the full brand-suffixed title, since OG/Twitter don't
  // go through the layout's title template.
  const shareTitle =
    typeof title === "string" ? `${title} — ${siteConfig.businessName}` : title.absolute;

  const shareImage = {
    url: image,
    alt: imageAlt ?? shareTitle,
    // Only claim dimensions for the images we cropped ourselves.
    ...(image.startsWith("/images/og/") ? { width: 1200, height: 630 } : {}),
  };

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: siteConfig.businessName,
      locale: "en_GB",
      type: "website",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images: [shareImage],
    },
  };
}
