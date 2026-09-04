import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";

// Blog/Reviews/Corporate/Contact routes are parked to a later phase (see the
// brief) and aren't linked from nav yet, so they're left out of the sitemap
// for now even where the code already exists.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/gallery`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
