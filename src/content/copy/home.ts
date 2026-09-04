/**
 * Structural / UI copy for the home page — headings, labels, CTAs. This is
 * Jude's copy, not Izzy's, so it's written out properly rather than
 * placeholdered. Anywhere Izzy's own words are needed (the intro paragraph),
 * the component renders a <PlaceholderCopy /> block instead of text from
 * this file — see components/home/IntroSection.tsx.
 */

export const homeCopy = {
  hero: {
    eyebrow: "Clophill, Bedfordshire, UK",
    headingLine1: "Your local space for",
    headingLine2: "mind, body & soul",
    subhead: "Complementary therapist and reiki master",
    primaryCta: "Book a free consultation",
    secondaryCta: "Learn more",
  },
  intro: {
    heading: "A moment, just for you",
  },
  servicesTeaser: {
    heading: "Treatments",
    body: "Three ways to slow down and be looked after.",
    ctaLabel: "View all treatments",
  },
  gallery: {
    heading: "Gallery of work",
    tagline: "Healing at a glimpse",
    ctaLabel: "See full gallery",
  },
  reviews: {
    heading: "Loved, locally",
    body: "Kind words from clients who've spent time in Izzy's care.",
    ctaLabel: "Read all reviews on Google",
  },
  social: {
    heading: "Follow along",
    body: "Gentle reminders, session insights and behind-the-scenes moments, over on Instagram and Facebook.",
  },
  closingBand: {
    heading: "Elevate your wellbeing",
    body: "Book a free consultation and find out which treatment is right for you.",
    ctaLabel: "Book a free consultation",
  },
} as const;
