/**
 * Central, typed business info. Jude edits this file directly and redeploys —
 * no CMS for site-wide config, per the brief. Everything marked PLACEHOLDER
 * is real-looking but not confirmed and must be swapped before launch.
 */

export const siteConfig = {
  businessName: "Divine Align Healing",
  practitionerName: "Izzy",
  tagline: "Complementary therapist and reiki master",

  // PLACEHOLDER — real domain not assigned yet.
  url: "https://www.divinealignhealing.co.uk",

  location: {
    town: "Clophill",
    region: "Bedfordshire",
    country: "GB",
    addressLine: "2–3 Sycamore Barn, Northfield Farm, Great Lane",
    postcode: "MK45 4DD",
    // Not supplied — leave out of JSON-LD until Izzy confirms exact coordinates.
    geo: undefined as { lat: number; lng: number } | undefined,
  },

  // Weekly opening hours, from the copy doc — shown in the footer and wired
  // into the LocalBusiness `openingHoursSpecification`.
  hours: [
    { day: "Monday", hours: "2:00pm – 6:30pm" },
    { day: "Tuesday", hours: "Closed" },
    { day: "Wednesday", hours: "12:00pm – 8:00pm" },
    { day: "Thursday", hours: "3:30pm – 8:00pm" },
    { day: "Friday", hours: "2:00pm – 6:30pm" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "Closed" },
  ],

  contact: {
    email: "doddizz21@hotmail.com",
    // Public Web3Forms access key for the backup contact form (Fixes Round 1
    // §10) — Web3Forms keys are designed to be exposed client-side, rate-
    // limited per domain on their end. Get Izzy's own key free at
    // https://web3forms.com (enter her email, they send the key — no
    // account needed), then set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in
    // .env.local (and again in Vercel's env vars for production). Left
    // blank until then — the form shows a "still being wired up" note and
    // falls back to the WhatsApp button instead of submitting nowhere.
    web3formsAccessKey: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "",
  },

  // WhatsApp click-to-chat is the primary CTA sitewide (Fixes Round 1, §1 —
  // it now carries more weight than the contact form, which is a backup).
  // The number itself is never printed as visible text anywhere on the site
  // (per Jude — only "WhatsApp" / "Book" labels are shown); it only ever
  // appears inside a wa.me link. Overridable via NEXT_PUBLIC_WHATSAPP_NUMBER
  // (E.164 digits, no "+") if the number ever needs to change without a
  // code deploy.
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447908142122",
    // Generic sitewide message (header, hero, sticky button, footer) — kept
    // treatment-neutral and deliberately doesn't say "free consultation",
    // since the brief reserves that phrasing for the dedicated consultation
    // CTA below, not every button on the site.
    defaultMessage: "Hi, I'd like to book a session with you. Please let me know your availability.",
    // Exact wording from the brief §5 — used only by the dedicated
    // free-consultation CTA (closing band) and the "not sure yet" contact
    // form option, never as a generic button label sitewide.
    consultationMessage:
      "Hi, I'd like to book a free consultation to chat through which treatment is right for me. Please let me know your availability.",
    // Used only by the Corporate Wellness page's CTAs.
    corporateMessage:
      "Hi, I'd like to book a corporate wellness day for my team. Please let me know your availability.",
  },

  social: {
    instagram: {
      handle: "@divinealignhealing",
      url: "https://www.instagram.com/divinealignhealing",
    },
    facebook: {
      handle: "Divine Align Healing",
      url: "https://www.facebook.com/divinealignhealing/",
    },
  },

  // Live "read all reviews" / "leave a review" link — this one is real, given in the brief.
  googleReviewsUrl: "https://maps.google.com/?cid=10103428655800774869",

  // Google Places API (New) wiring for the live aggregate rating.
  // GOOGLE_MAPS_API_KEY / GOOGLE_PLACE_ID are set in .env.local (and need
  // setting again in Vercel's env vars for production).
  googlePlacesEnabled: true,

  // Used only if the live Places fetch fails (network hiccup, key/billing
  // issue) — kept roughly in sync with reality so the fallback never looks
  // wildly wrong. Last checked live: 5.0 from 37 reviews.
  fallbackRating: {
    value: 5.0,
    count: 37,
  },
} as const;
