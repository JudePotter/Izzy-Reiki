import { homeCopy } from "@/content/copy/home";
import { siteConfig } from "@/content/site-config";
import { curatedReviews } from "@content/reviews";
import { getAggregateRating } from "@/lib/google-reviews";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

export async function ReviewsSection() {
  const { reviews } = homeCopy;
  const rating = await getAggregateRating();

  return (
    <Section
      bg="cream"
      grain
      innerClassName="px-0 py-20 sm:py-28"
      className="relative isolate overflow-x-clip"
    >
      <div className="mx-auto max-w-2xl px-6 text-center md:px-10">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {reviews.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base font-light text-earthy-green/80">{reviews.body}</p>
          <div className="mt-6 flex flex-col items-center gap-2">
            <StarRating value={rating.value} animate />
            <p className="text-sm text-earthy-green/70">
              {rating.value.toFixed(1)} from {rating.count} Google reviews
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.25} className="mt-14">
        <ReviewsCarousel reviews={curatedReviews} />
      </Reveal>

      <Reveal delay={0.3} className="mt-12 px-6 text-center md:px-10">
        <Button href={siteConfig.googleReviewsUrl} variant="outline">
          {reviews.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
