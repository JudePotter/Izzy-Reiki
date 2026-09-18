/**
 * Structural / UI copy for the home page — headings, labels, CTAs. This is
 * Jude's copy, not Izzy's, so it's written out properly rather than
 * placeholdered. Anywhere Izzy's own words are needed (the intro paragraph),
 * the component renders a <PlaceholderCopy /> block instead of text from
 * this file — see components/home/IntroSection.tsx.
 *
 * `whyChooseUs` and `storyTeaser.excerpt` ARE Izzy's own words, copied
 * verbatim from Divine-Align-Healing-Copy.md, not placeholder or Jude copy.
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
    pitch:
      "I create a space for people to be held, healed and heard. Through Reiki, holistic massage and reflexology, I help people slow down, release physical and emotional tension, and create more space for rest, grounding and inner peace. Pause, switch off and let yourself be looked after.",
  },
  servicesTeaser: {
    heading: "Treatments",
    body: "Three ways to slow down and be looked after.",
    ctaLabel: "View all treatments",
  },
  whyChooseUs: {
    heading: "Why choose us",
    items: [
      {
        title: "We begin with intention, not just treatment.",
        body: "Right from the very beginning, we take a moment to turn inwards and connect with what you need.",
      },
      {
        title: "Permission to slow down.",
        body: "My treatments are designed to give you permission to slow down, soften and surrender to the experience.",
      },
      {
        title: "More than the physical.",
        body: "I combine my knowledge of holistic therapies with intuitive touch to create treatments that support more than just the physical body.",
      },
    ],
  },
  reviews: {
    heading: "Loved, locally",
    body: "Kind words from clients who've spent time in Izzy's care.",
    ctaLabel: "Read all reviews on Google",
  },
  storyTeaser: {
    eyebrow: "Our story",
    heading: "Izzy's story",
    excerpt:
      "From a young age, I've always felt that I have a healing presence within me, and I've always been deeply drawn to helping others reconnect with themselves. Reiki is the path that finally brought all of that together for me.",
    ctaLabel: "Read Izzy's story",
  },
  social: {
    heading: "Follow along",
    body: "Gentle reminders, session insights and behind-the-scenes moments, over on Instagram and Facebook.",
  },
  gallery: {
    heading: "Gallery of work",
    tagline: "Healing at a glimpse",
    ctaLabel: "See full gallery",
  },
  closingBand: {
    heading: "Elevate your wellbeing",
    body: "Leave your name and number below and Izzy will text you back to arrange a call — free, no pressure, just a chat about what might help.",
  },
} as const;
