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
    // Used only for LocalBusiness JSON-LD; leave unset fields out until confirmed.
    addressLine: undefined as string | undefined,
    postcode: undefined as string | undefined,
    geo: undefined as { lat: number; lng: number } | undefined,
  },

  contact: {
    // PLACEHOLDER — confirm real enquiry email if she wants one alongside WhatsApp.
    email: "hello@divinealignhealing.co.uk",
  },

  // WhatsApp click-to-chat is the primary CTA sitewide. Number is env-configurable
  // (NEXT_PUBLIC_WHATSAPP_NUMBER, E.164 digits only e.g. "447123456789", no "+")
  // so it can be swapped without a code change once Izzy supplies it.
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "447000000000",
    isPlaceholder: !process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
    defaultMessage: "Hi Izzy, I'd like to book a free consultation.",
  },

  social: {
    // PLACEHOLDER handles — swap for Izzy's real profiles before launch.
    instagram: {
      handle: "@divinealignhealing",
      url: "https://www.instagram.com/divinealignhealing",
    },
    facebook: {
      handle: "Divine Align Healing",
      url: "https://www.facebook.com/divinealignhealing",
    },
  },

  // Live "read all reviews" / "leave a review" link — this one is real, given in the brief.
  googleReviewsUrl: "https://maps.google.com/?cid=10103428655800774869",

  // Google Places API wiring for the live aggregate rating — parked to a later
  // phase (Reviews page). Set GOOGLE_MAPS_API_KEY and GOOGLE_PLACE_ID in the
  // environment, then flip this on.
  googlePlacesEnabled: false,

  // Shown wherever a static trust line is needed until the live rating is wired in.
  // PLACEHOLDER figures — confirm exact count with Izzy.
  fallbackRating: {
    value: 5.0,
    count: 36,
  },
} as const;
