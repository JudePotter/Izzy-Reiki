/**
 * The three treatments. `shortLabel` is a plain category descriptor (not
 * Izzy's own words), used on the home teaser cards — full descriptions and
 * pricing are placeholdered on the Services page until she supplies them.
 */

export type Treatment = {
  slug: "reflexology" | "massage" | "reiki";
  name: string;
  shortLabel: string;
};

export const treatments: Treatment[] = [
  { slug: "reflexology", name: "Reflexology", shortLabel: "Foot & hand therapy" },
  { slug: "massage", name: "Massage", shortLabel: "Full body relaxation" },
  { slug: "reiki", name: "Reiki", shortLabel: "Energy healing" },
];
