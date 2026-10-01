import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { galleryImages } from "@/content/gallery";
import { getAllPosts } from "@/lib/blog";

const abs = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  return [
    {
      url: siteConfig.url,
      changeFrequency: "weekly",
      priority: 1,
      images: [abs("/images/og/home.jpg")],
    },
    {
      url: abs("/about"),
      changeFrequency: "monthly",
      priority: 0.8,
      images: [abs("/images/about/izzy-treatment-room.jpg")],
    },
    { url: abs("/services"), changeFrequency: "monthly", priority: 0.8 },
    { url: abs("/corporate"), changeFrequency: "monthly", priority: 0.6 },
    {
      url: abs("/gallery"),
      changeFrequency: "monthly",
      priority: 0.5,
      // Every gallery photo, so they can surface in image search for local queries.
      images: galleryImages.map((image) => abs(image.src)),
    },
    {
      url: abs("/contact"),
      changeFrequency: "monthly",
      priority: 0.7,
      images: [abs("/images/location/renume-wellness.webp")],
    },
    { url: abs("/blog"), changeFrequency: "weekly", priority: 0.6 },
    ...posts.map((post) => ({
      url: abs(`/blog/${post.slug}`),
      lastModified: post.date,
      changeFrequency: "monthly" as const,
      priority: 0.5,
      ...(post.coverImage ? { images: [abs(post.coverImage)] } : {}),
    })),
  ];
}
