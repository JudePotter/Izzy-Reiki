import { siteConfig } from "@/content/site-config";

export type AggregateRating = {
  value: number;
  count: number;
  live: boolean;
};

export type GoogleReview = {
  id: string;
  authorName: string;
  authorPhotoUrl?: string;
  rating: number;
  text: string;
  relativeTime: string;
  /** Links back to the review on Google Maps — required by Places API attribution terms. */
  googleMapsUri: string;
};

type PlaceData = {
  rating: number;
  count: number;
  reviews: GoogleReview[];
};

/**
 * Single Places API (New) "Place Details" fetch, revalidated once a day,
 * that backs both `getAggregateRating` and `getLatestReviews` — one place
 * to change if the field mask or endpoint ever needs updating. The legacy
 * `maps/api/place/details` endpoint Google's older docs point to is
 * deprecated and returns REQUEST_DENIED for new projects, hence the `/v1/`
 * host and header-based auth/field mask here.
 *
 * Not behind `googlePlacesEnabled` itself (callers check that) so this stays
 * a pure "go fetch" function.
 */
async function fetchPlaceData(): Promise<PlaceData | null> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  if (!apiKey || !placeId) return null;

  try {
    const res = await fetch(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "rating,userRatingCount,reviews",
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

    type RawReview = {
      name?: string;
      rating?: number;
      text?: { text?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
      authorAttribution?: { displayName?: string; photoUri?: string };
      googleMapsUri?: string;
    };

    const reviews: GoogleReview[] = ((data?.reviews ?? []) as RawReview[])
      // Google returns these in relevance order, not date order — sort so
      // "most recent" callers get an accurate answer.
      .slice()
      .sort((a, b) => Date.parse(b.publishTime ?? "") - Date.parse(a.publishTime ?? ""))
      .map((r) => ({
        id: r.name ?? `${r.authorAttribution?.displayName}-${r.publishTime}`,
        authorName: r.authorAttribution?.displayName ?? "Google user",
        authorPhotoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? "",
        relativeTime: r.relativePublishTimeDescription ?? "",
        googleMapsUri: r.googleMapsUri ?? siteConfig.googleReviewsUrl,
      }))
      .filter((r) => r.text.length > 0);

    return { rating, count, reviews };
  } catch {
    return null;
  }
}

/**
 * Behind `siteConfig.googlePlacesEnabled` so the site ships with curated
 * testimonials + the static fallback rating until GOOGLE_MAPS_API_KEY /
 * GOOGLE_PLACE_ID are set in the environment — flip the flag on once both
 * are in place, no other code changes needed.
 */
export async function getAggregateRating(): Promise<AggregateRating> {
  if (!siteConfig.googlePlacesEnabled) return { ...siteConfig.fallbackRating, live: false };

  const data = await fetchPlaceData();
  if (!data) return { ...siteConfig.fallbackRating, live: false };

  return { value: data.rating, count: data.count, live: true };
}

/** The `count` most recent Google reviews, newest first. Empty if live fetch is off/unavailable. */
export async function getLatestReviews(count: number): Promise<GoogleReview[]> {
  if (!siteConfig.googlePlacesEnabled) return [];

  const data = await fetchPlaceData();
  return data?.reviews.slice(0, count) ?? [];
}
