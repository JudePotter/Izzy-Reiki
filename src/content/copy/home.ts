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
    headingLine1: "Creating space for people",
    headingLine2: "to be held, healed and heard.",
    subhead: "Complementary therapist and reiki master",
    primaryCta: "Book on WhatsApp",
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
  packagesTeaser: {
    heading: "Signature Packages",
    body: "For the deepest reset, my packages weave two treatments into one unhurried session. They're the heart of what I do, more time, more care, and the space to fully let go. Book a single treatment when you need it, or a package when you want the full experience.",
    ctaLabel: "View all packages",
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
    body: "Kind words from clients who've spent time in my care.",
    ctaLabel: "Read all reviews on Google",
  },
  storyTeaser: {
    eyebrow: "A little about me",
    heading: "My story",
    excerpt:
      "From a young age, I've always felt that I have a healing presence within me, and I've always been deeply drawn to helping others reconnect with themselves. Reiki is the path that finally brought all of that together for me.",
    ctaLabel: "Read my story",
  },
  social: {
    heading: "Follow along",
    body: "I share gentle reminders, session insights and behind-the-scenes moments over on Instagram and Facebook.",
  },
  gallery: {
    heading: "Gallery of work",
    tagline: "Healing at a glimpse",
    ctaLabel: "See full gallery",
  },
  closingBand: {
    heading: "Elevate your wellbeing",
    body: "The fastest way to book is WhatsApp — message me directly and I'll reply with my availability. Not sure what's right for you? Book a free consultation and talk it through first.",
    formIntro: "Prefer to leave your details instead? A quick form, and I'll get back to you.",
  },
} as const;
