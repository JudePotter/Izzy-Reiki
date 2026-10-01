/**
 * The image pool for the Gallery. `featured` marks the five shown on the
 * home page teaser — curated for quality and relevance (real treatment-room
 * shots of Izzy at work) rather than the full mixed set, which also
 * includes space/training photos. The full set renders on /gallery.
 *
 * Files live in `public/images/gallery/`. The array order is the display
 * order on /gallery, and it's deliberate: together with each image's `tile`
 * shape it makes the grid pack with no gaps at both the 2-column (phone) and
 * 3-column (laptop) layouts. If you add or remove a photo, check the end of
 * the grid still lines up flush.
 */

export type GalleryImage = {
  src: string;
  alt: string;
  featured?: boolean;
  /** Orientation the image was shot/composed for — used to lay out the featured bento grid. */
  orientation?: "portrait" | "landscape";
  /**
   * Shape of the tile on /gallery. Defaults to "tall" (a 2-row portrait
   * tile); "single" is a 1-row landscape tile, used for the landscape shots.
   */
  tile?: "tall" | "single";
  /** CSS object-position for the /gallery crop, when the default centre crop cuts out the subject. */
  focus?: string;
};

const gallery = (file: string) => `/images/gallery/${file}`;

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/about/izzy-treatment-room.jpg",
    alt: "Izzy in her treatment room at Renume Wellness",
    featured: true,
    orientation: "portrait",
  },
  {
    src: gallery("sound-healing-bowl.jpg"),
    alt: "A sound healing moment during a Reiki treatment",
    featured: true,
    orientation: "landscape",
  },
  {
    src: gallery("reflexology-treatment.jpg"),
    alt: "Izzy giving a reflexology treatment",
    featured: true,
    orientation: "landscape",
  },
  {
    src: gallery("crystal-healing.jpg"),
    alt: "Hands-on healing work with crystals during a treatment",
    featured: true,
    orientation: "landscape",
  },
  {
    src: gallery("treatment-room-candlelit.jpg"),
    alt: "Izzy's calm, candlelit treatment room",
    featured: true,
    orientation: "landscape",
    tile: "single",
  },
  { src: gallery("reflexology-close-up.jpg"), alt: "Izzy holding and massaging a client's foot during reflexology" },
  { src: gallery("reflexology-hands-on-foot.jpg"), alt: "Izzy applying reflexology pressure to the sole of the foot" },
  { src: gallery("reiki-crystals-session.jpg"), alt: "Izzy placing crystals on a client during a Reiki session" },
  { src: gallery("renume-entrance.jpeg"), alt: "The entrance to Renume Wellness in Clophill, where Izzy's treatment room is" },
  { src: gallery("hands-on-healing.jpeg"), alt: "A Reiki treatment in progress" },
  { src: gallery("waterfall-smile.jpeg"), alt: "Izzy smiling beside a jungle waterfall" },
  {
    src: gallery("treatment-couch.jpeg"),
    alt: "The treatment couch, ready for a session",
    tile: "single",
    focus: "center 40%",
  },
  { src: gallery("reflexology-mirror.jpg"), alt: "Izzy giving a reflexology treatment, seen in the mirror" },
  { src: gallery("meditation-sunset.jpeg"), alt: "A quiet moment of reflection at sunset" },
  {
    src: gallery("palm-grove.jpeg"),
    alt: "A peaceful palm grove under a blue sky",
    tile: "single",
    focus: "center 55%",
  },
  { src: gallery("waterfall-pool.jpeg"), alt: "A quiet moment beside a waterfall pool" },
  {
    src: gallery("sun-through-palms.jpeg"),
    alt: "Sunlight breaking through palm trees",
    tile: "single",
    focus: "center 30%",
  },
  { src: gallery("jungle-viewpoint.jpeg"), alt: "Looking out over a jungle valley" },
  { src: gallery("sun-through-leaves.jpeg"), alt: "Sunlight through leaves above a river" },
  { src: gallery("tingsha-bells-shelf.jpeg"), alt: "Tingsha bells used for sound healing" },
  {
    src: gallery("crystals-3.jpeg"),
    alt: "Crystals and a Buddha statue on the treatment room shelf",
    tile: "single",
  },
  { src: gallery("mala-hand-ornament.jpeg"), alt: "A mala bead necklace beside a gold hand ornament" },
  { src: gallery("tingsha-bells-izzy.jpg"), alt: "Izzy holding tingsha bells before a treatment" },
  {
    src: gallery("sage-crystal-tray.jpeg"),
    alt: "A sage smudge stick held over the crystal tray",
    tile: "single",
    focus: "center 55%",
  },
];

export function getFeaturedGalleryImages() {
  return galleryImages.filter((img) => img.featured);
}
