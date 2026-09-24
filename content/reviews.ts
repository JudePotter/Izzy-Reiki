/**
 * Curated reviews for the home page marquee (Fixes Round 1 §9). Jude edits
 * this file directly and redeploys — add, remove or reorder entries as
 * Izzy hand-picks more from Google, no code changes needed elsewhere.
 *
 * Seeded with 5 of Izzy's real, live Google reviews (pulled verbatim via the
 * Places API on 2026-09-23 — same source the site's live star rating uses).
 * Google's Places API only ever returns a place's 5 most relevant reviews,
 * so it can't supply the 8+ the brief asks for on its own. To reach 8,
 * Izzy needs to copy-paste 3+ more of her favourites straight from her
 * Google Business listing and add them below in the same shape — nothing
 * fabricated here, same as testimonials.ts before it.
 */

export type CuratedReview = {
  name: string;
  rating: number;
  text: string;
};

export const curatedReviews: CuratedReview[] = [
  {
    name: "Craig C",
    rating: 5,
    text: "I had the 1-hour Swedish massage with Izzy, and it was excellent from start to finish. Izzy was professional, welcoming, and immediately made me feel at ease. She took the time to understand what I wanted from the treatment and adjusted the pressure perfectly throughout. The massage was incredibly relaxing while also working on the areas that needed the most attention. I left feeling refreshed, much less tense, and noticeably better than when I arrived.",
  },
  {
    name: "Eliza Kincaid",
    rating: 5,
    text: "I experienced Reiki for the first time and with Izzy. I have been intrigued by what benefits can be gained from having a Reiki session. I experienced better sleep, a deeper sleep than usual accompanied by pleasant dreams. I also had the feeling of being grounded and just slowing down and stopping. The session that I had really made me think about the benefits of taking time for yourself, which is priceless.",
  },
  {
    name: "drisna gorasia",
    rating: 5,
    text: "This was my first Reiki experience, so I really didn't know what to expect. Izzy explained everything clearly before we started, which helped me feel completely at ease. The whole experience was incredibly calming, and afterwards I felt deeply relaxed, while also feeling refreshed, uplifted, and full of positive energy. I'm so glad I gave it a try and would highly recommend Izzy to anyone considering Reiki.",
  },
  {
    name: "Claire Dodd",
    rating: 5,
    text: "I've had both Reiki and Reflexology treatments with Izzy. She took the time to make me feel comfortable in her space and created a wonderfully peaceful atmosphere. She has a professional and friendly approach and was able to feel where I had been holding tension, leaving me feeling much lighter and balanced. Both treatments were incredibly calming and I could feel the stress melting away almost immediately.",
  },
  {
    name: "Chloe Wilson",
    rating: 5,
    text: "I came into the session with Izzy feeling a bit stressed and emotionally heavy, but she instantly made me feel calm and safe. Her energy was so warm and grounding. During the session, I felt gentle waves of emotion and release. Afterwards, I felt lighter, clearer, and more at peace. Izzy has such a calming presence and clearly holds space with care. I'd 100% recommend her to anyone looking for a reset.",
  },
];
