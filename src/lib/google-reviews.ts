import { siteConfig } from "@/content/site-config";

export type AggregateRating = {
  value: number;
  count: number;
  live: boolean;
};

/**
 * Live "trust line" rating only — the review *cards* on the homepage are
 * curated in `content/reviews.ts` per the brief (§9), not pulled from this
 * API. Places API (New): the legacy `maps/api/place/details` endpoint
 * Google's older docs point to is deprecated and returns REQUEST_DENIED for
 * new projects, hence the `/v1/` host and header-based auth/field mask here.
 */
async function fetchAggregateRating(): Promise<{ rating: number; count: number } | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

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

    return { rating, count };
  } catch {
    return null;
  }
}

/**
 * Behind `siteConfig.googlePlacesEnabled` so the site ships with the static
 * fallback rating until GOOGLE_MAPS_API_KEY / GOOGLE_PLACE_ID are set in the
 * environment — flip the flag on once both are in place, no other code
 * changes needed.
 */
export async function getAggregateRating(): Promise<AggregateRating> {
  if (!siteConfig.googlePlacesEnabled) return { ...siteConfig.fallbackRating, live: false };

  const data = await fetchAggregateRating();
  if (!data) return { ...siteConfig.fallbackRating, live: false };

  return { value: data.rating, count: data.count, live: true };
}
