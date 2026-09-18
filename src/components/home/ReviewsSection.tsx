import Image from "next/image";
import { homeCopy } from "@/content/copy/home";
import { siteConfig } from "@/content/site-config";
import { testimonials } from "@/content/testimonials";
import { getAggregateRating, getLatestReviews } from "@/lib/google-reviews";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { StarRating } from "@/components/ui/StarRating";
import { PlaceholderCopy } from "@/components/ui/PlaceholderCopy";
import { Button } from "@/components/ui/Button";

export async function ReviewsSection() {
  const { reviews } = homeCopy;
  const [rating, googleReviews] = await Promise.all([getAggregateRating(), getLatestReviews(3)]);

  // Prefer live Google reviews; fall back to hand-curated ones, then to
  // clearly-labelled placeholders rather than inventing quotes.
  const placeholderSlots = [1, 2, 3];

  return (
    <Section bg="cream" grain>
      <div className="mx-auto max-w-2xl text-center">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {reviews.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base font-light text-earthy-green/80">
            {reviews.body}
          </p>

          <div className="mt-6 flex flex-col items-center gap-2">
            <StarRating value={rating.value} animate />
            <p className="text-sm text-earthy-green/70">
              {rating.value.toFixed(1)} from {rating.count} Google reviews
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {googleReviews.length > 0
          ? googleReviews.map((r, i) => (
              <Reveal key={r.id} delay={i * 0.1}>
                <a href={r.googleMapsUri} target="_blank" rel="noopener noreferrer" className="block h-full">
                  <HoverLift className="flex h-full flex-col bg-white p-8">
                    <StarRating value={r.rating} />
                    <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-earthy-green/85">
                      “{r.text}”
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      {r.authorPhotoUrl && (
                        <Image
                          src={r.authorPhotoUrl}
                          alt=""
                          width={32}
                          height={32}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <p className="text-xs uppercase tracking-wide text-green">{r.authorName}</p>
                        <p className="text-xs text-earthy-green/50">{r.relativeTime} on Google</p>
                      </div>
                    </div>
                  </HoverLift>
                </a>
              </Reveal>
            ))
          : testimonials.length > 0
            ? testimonials.map((t, i) => (
                <Reveal key={t.name} delay={i * 0.1}>
                  <HoverLift className="bg-white p-8">
                    <StarRating value={5} />
                    <p className="mt-4 text-sm leading-relaxed text-earthy-green/85">
                      “{t.quote}”
                    </p>
                    <p className="mt-6 text-xs uppercase tracking-wide text-green">{t.name}</p>
                  </HoverLift>
                </Reveal>
              ))
            : placeholderSlots.map((slot, i) => (
                <Reveal key={slot} delay={i * 0.1}>
                  <HoverLift className="bg-white p-8">
                    <StarRating value={5} />
                    <div className="mt-4">
                      <PlaceholderCopy compact>
                        This is where one of your curated Google reviews will go, Izzy
                      </PlaceholderCopy>
                    </div>
                  </HoverLift>
                </Reveal>
              ))}
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Button href={siteConfig.googleReviewsUrl} variant="outline">
          {reviews.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
