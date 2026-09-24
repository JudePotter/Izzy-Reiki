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
    image: "/images/0B370691-B23C-45D2-87ED-898823453585_1_201_a.jpeg",
  },
  {
    slug: "massage",
    name: "Massage",
    shortLabel: "Full body relaxation",
    image: "/images/massage-1.jpeg",
  },
  {
    slug: "reiki",
    name: "Reiki",
    shortLabel: "Energy healing",
    image: "/images/ECCA2D45-C0D0-4564-9482-02B06EAD5DC4_1_105_c.jpeg",
    imagePosition: "center 65%",
  },
];
