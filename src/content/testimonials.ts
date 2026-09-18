/**
 * Curated testimonials pulled from Izzy's real Google reviews. None are
 * supplied yet — the copy doc only confirms the aggregate rating (5.0), not
 * individual review text — so this stays empty and the Reviews section
 * renders clearly-labelled placeholder cards instead of inventing quotes.
 * Once Izzy's Google profile is accessible, hand-pick 3–6 of her best
 * reviews and add them here as { name, quote } (context optional).
 */

export type Testimonial = {
  name: string;
  quote: string;
  context?: string;
};

export const testimonials: Testimonial[] = [];
