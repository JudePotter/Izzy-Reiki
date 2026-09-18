/**
 * Real, priced treatments and packages, verbatim from Divine-Align-Healing-Copy.md.
 * This is the source of truth for the Services page. `treatments.ts` is a
 * separate, deliberately simpler list of the three broad categories
 * (Reflexology / Massage / Reiki) used for the hero strip and home teaser.
 */

export type ServiceItem = {
  name: string;
  duration: string;
  price: string;
  /** Extra detail shown under the name, e.g. what a package includes. */
  note?: string;
};

export const serviceTreatments: ServiceItem[] = [
  { name: "Deep Healing Reiki", duration: "60 min", price: "£50" },
  { name: "Reflexology", duration: "60 min", price: "£60" },
  {
    name: "Head-to-Toe Ritual",
    duration: "90 min",
    price: "£84",
    note: "Full body massage incl. face & scalp",
  },
  { name: "Full Body Massage", duration: "60 min", price: "£70" },
  { name: "Back, Neck & Shoulders Massage", duration: "30 min", price: "£45" },
];

export const servicePackages: ServiceItem[] = [
  { name: "Sole to Soul", duration: "1.5 hr", price: "£95", note: "Reflexology + Reiki" },
  {
    name: "Breathe & Release",
    duration: "1.5 hr",
    price: "£89",
    note: "Back, Neck & Shoulders + Reiki",
  },
  {
    name: "Mind & Body Reset",
    duration: "1.5 hr",
    price: "£95",
    note: "Back, Neck & Shoulders + face, scalp + Reiki",
  },
  {
    name: "Exclusive Healing Package",
    duration: "2 hr",
    price: "£120",
    note: "90-min Full Body Massage + Reiki",
  },
];
