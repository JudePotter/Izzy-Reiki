/**
 * The three broad treatment categories — used for the hero services strip
 * and the home teaser cards only. `shortLabel` is a plain category
 * descriptor (not Izzy's own words). Real, priced individual treatments and
 * packages live in `services.ts` and render on the Services page.
 */

export type Treatment = {
  slug: "reflexology" | "massage" | "reiki";
  name: string;
  shortLabel: string;
  image: string;
  imagePosition?: string;
};

export const treatments: Treatment[] = [
  {
    slug: "reflexology",
    name: "Reflexology",
    shortLabel: "Foot & hand therapy",
    image: "/images/gallery/reflexology-treatment.jpg",
  },
  {
    slug: "massage",
    name: "Massage",
    shortLabel: "Full body relaxation",
    image: "/images/gallery/massage-shoulder.jpeg",
  },
  {
    slug: "reiki",
    name: "Reiki",
    shortLabel: "Energy healing",
    image: "/images/gallery/hands-on-healing.jpeg",
    imagePosition: "center 65%",
  },
];
