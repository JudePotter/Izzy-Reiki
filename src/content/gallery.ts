/**
 * The image pool for the Gallery — everything supplied that isn't the hero
 * (fullbleed.webp) or the About portrait (portrait-1.jpeg). `featured: true`
 * marks the six shown on the home page teaser; the full set renders on
 * /gallery. Alt text is a reasonable guess from the filename — swap for
 * anything more specific Izzy gives us.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
  { src: "/images/massage-1.jpeg", alt: "A massage treatment in progress", featured: true },
  { src: "/images/placeofwork.jpeg", alt: "Izzy's treatment room", featured: true },
  { src: "/images/meditation-sunset.jpeg", alt: "A quiet moment of reflection at sunset", featured: true },
  { src: "/images/feet.jpeg", alt: "A reflexology treatment", featured: true },
  { src: "/images/trees.jpeg", alt: "Sunlight through the trees", featured: true },
  { src: "/images/portrait-2.jpeg", alt: "Izzy in her treatment space", featured: true },
  { src: "/images/portrait-3.jpeg", alt: "Izzy at work" },
  { src: "/images/workspace.jpeg", alt: "Inside the treatment space" },
  { src: "/images/hero-tree.jpeg", alt: "Palm trees against the sky" },
  { src: "/images/working.jpeg", alt: "Izzy at work" },
  { src: "/images/travelling-1.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-2.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-3.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-4.jpeg", alt: "A calming natural scene" },
];

export function getFeaturedGalleryImages() {
  return galleryImages.filter((img) => img.featured);
}
