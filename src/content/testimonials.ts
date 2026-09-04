/**
 * PLACEHOLDER TESTIMONIALS — don't worry, these aren't real reviews.
 * Written in the voice of typical Google reviews for a reiki practitioner,
 * purely to prove out the testimonial card design. Once the real Google
 * profile is accessible, hand-pick and swap in Izzy's actual best reviews —
 * curated by hand here, not pulled live, per the brief.
 */

export type Testimonial = {
  name: string;
  quote: string;
  context?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    quote:
      "I went in feeling completely wired and left an hour later feeling like myself again. Izzy has such a calming presence — I've never relaxed so quickly.",
  },
  {
    name: "James T.",
    quote:
      "Genuinely one of the most restorative hours of my week. Beautifully held space, no rushing, and I always sleep well afterwards.",
  },
  {
    name: "Priya K.",
    quote:
      "I was sceptical about reiki before my first session. Izzy explained everything gently and I came away feeling lighter than I have in months.",
  },
];
