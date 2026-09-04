import { siteConfig } from "@/content/site-config";

export type AggregateRating = {
  value: number;
  count: number;
  live: boolean;
};

/**
 * Server-side aggregate rating fetch via the Places API "Place Details"
 * endpoint, revalidated once a day. Behind `siteConfig.googlePlacesEnabled`
 * so the site ships with curated testimonials + the static fallback rating
 * until GOOGLE_MAPS_API_KEY / GOOGLE_PLACE_ID are set in the environment —
 * flip the flag on once both are in place, no other code changes needed.
 */
export async function getAggregateRating(): Promise<AggregateRating> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!siteConfig.googlePlacesEnabled || !apiKey || !placeId) {
    return { ...siteConfig.fallbackRating, live: false };
  }

  try {
    const res = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&key=${apiKey}`,
      { next: { revalidate: 60 * 60 * 24 } },
    );

    if (!res.ok) throw new Error(`Places API responded ${res.status}`);

    const data = await res.json();
    const rating = data?.result?.rating;
    const count = data?.result?.user_ratings_total;

    if (typeof rating !== "number" || typeof count !== "number") {
      throw new Error("Unexpected Places API response shape");
    }

    return { value: rating, count, live: true };
  } catch {
    // Live fetch failed — fall back quietly rather than breaking the page.
    return { ...siteConfig.fallbackRating, live: false };
  }
}
