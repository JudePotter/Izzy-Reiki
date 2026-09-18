import { siteConfig } from "@/content/site-config";

export type AggregateRating = {
  value: number;
  count: number;
  live: boolean;
};

/**
 * Server-side aggregate rating fetch via Places API (New) — the legacy
 * `maps/api/place/details` endpoint Google's older docs point to is
 * deprecated and returns REQUEST_DENIED for new projects. Revalidated once
 * a day. Behind `siteConfig.googlePlacesEnabled` so the site ships with
 * curated testimonials + the static fallback rating until
 * GOOGLE_MAPS_API_KEY / GOOGLE_PLACE_ID are set in the environment — flip
 * the flag on once both are in place, no other code changes needed.
 */
export async function getAggregateRating(): Promise<AggregateRating> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!siteConfig.googlePlacesEnabled || !apiKey || !placeId) {
    return { ...siteConfig.fallbackRating, live: false };
  }

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount",
      },
      next: { revalidate: 60 * 60 * 24 },
    });

    if (!res.ok) throw new Error(`Places API responded ${res.status}`);

    const data = await res.json();
    const rating = data?.rating;
    const count = data?.userRatingCount;

    if (typeof rating !== "number" || typeof count !== "number") {
      throw new Error("Unexpected Places API response shape");
    }

    return { value: rating, count, live: true };
  } catch {
    // Live fetch failed — fall back quietly rather than breaking the page.
    return { ...siteConfig.fallbackRating, live: false };
  }
}
