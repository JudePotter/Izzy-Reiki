/**
 * The image pool for the Gallery. `featured` marks the five shown on the
 * home page teaser — curated for quality and relevance (real treatment-room
 * shots of Izzy at work) rather than the full mixed set, which also
 * includes space/training photos. The full set renders on /gallery.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  featured?: boolean;
  /** Orientation the image was shot/composed for — used to lay out the featured bento grid. */
  orientation?: "portrait" | "landscape";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/969100C0-56DB-484F-949D-40A2ECDABBDE_1_201_a.jpeg",
    alt: "Izzy in her treatment room at Renume Wellness",
    featured: true,
    orientation: "portrait",
  },
  {
    src: "/images/04B3BD65-99E8-45F7-AB31-7774FCB142C1_1_201_a.jpeg",
    alt: "A sound healing moment during a Reiki treatment",
    featured: true,
    orientation: "landscape",
  },
  {
    src: "/images/0B370691-B23C-45D2-87ED-898823453585_1_201_a.jpeg",
    alt: "A reflexology treatment in progress",
    featured: true,
    orientation: "landscape",
  },
  {
    src: "/images/227E2616-E979-4B25-B137-A878DCAEE22F_1_201_a.jpeg",
    alt: "Hands-on healing work with crystals during a treatment",
    featured: true,
    orientation: "landscape",
  },
  {
    src: "/images/72648117-A9CE-4521-946F-42EE754D1BAD_1_201_a.jpeg",
    alt: "Izzy's calm, candlelit treatment room",
    featured: true,
    orientation: "landscape",
  },
  { src: "/images/A58E85D9-D2C4-468C-B95A-2D0D20ED21CA_1_201_a.jpeg", alt: "A reflexology treatment, close up" },
  { src: "/images/8AC1ECAA-D53A-4CC0-A613-21467837F7CC_1_201_a.jpeg", alt: "A reflexology treatment in progress" },
  { src: "/images/9F49E45F-0153-4D2B-A418-2D19750DB611_1_201_a.jpeg", alt: "Tibetan singing bowls used in a Reiki session" },
  { src: "/images/F4DC7E20-3502-4012-9B15-FF3472DB27AA_1_201_a.jpeg", alt: "Izzy in her treatment room" },
  { src: "/images/8C1258BB-3E68-49A8-8DA9-F683241E4DD7_1_201_a.jpeg", alt: "Izzy in her treatment room" },
  { src: "/images/E22F0AF3-A215-4AAA-8D0B-D757D3EF7A89_1_201_a.jpeg", alt: "Izzy in her treatment room" },
  { src: "/images/placeofwork.jpeg", alt: "Izzy's treatment room" },
  { src: "/images/portrait-2.jpeg", alt: "Izzy in her treatment space" },
  { src: "/images/portrait-3.jpeg", alt: "Izzy at work" },
  { src: "/images/workspace.jpeg", alt: "Inside the treatment space" },
  { src: "/images/working.jpeg", alt: "Izzy at work" },
  { src: "/images/meditation-sunset.jpeg", alt: "A quiet moment of reflection at sunset" },
  { src: "/images/hero-tree.jpeg", alt: "Palm trees against the sky" },
  { src: "/images/travelling-1.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-2.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-3.jpeg", alt: "A calming natural scene" },
  { src: "/images/travelling-4.jpeg", alt: "A calming natural scene" },
  { src: "/images/crystals-1.jpeg", alt: "Crystals, oracle cards and a candle in the treatment room" },
  { src: "/images/crystals-2.jpeg", alt: "A crystal collection laid out on a brass tray" },
  { src: "/images/crystals-3.jpeg", alt: "Crystals and a Buddha statue on the treatment room shelf" },
  { src: "/images/crystals-4.jpeg", alt: "A candle and oracle cards in the treatment room" },
  { src: "/images/bells-1.jpeg", alt: "Tingsha bells used for sound healing" },
  { src: "/images/mala-1.jpeg", alt: "A mala bead necklace resting on a Buddha hand ornament" },
  { src: "/images/bells-2.jpeg", alt: "Izzy holding tingsha bells before a treatment" },
  { src: "/images/sage-1.jpeg", alt: "A sage smudge stick held over the crystal tray" },
];

export function getFeaturedGalleryImages() {
  return galleryImages.filter((img) => img.featured);
}
