"use client";

import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import type { CuratedReview } from "@content/reviews";
import { StarRating } from "@/components/ui/StarRating";

/**
 * Fixes Round 1 §9 — a continuous, always-moving right-to-left marquee of
 * Izzy's curated reviews. Embla + the AutoScroll plugin (rather than the
 * step-snapping Autoplay plugin) gives true continuous motion, pauses
 * smoothly on hover/touch, and resumes on its own — still the best fit for
 * this per the brief's §13 request to double-check before committing to it;
 * nothing lighter offers the same drag + continuous-scroll combination out
 * of the box.
 *
 * Slide width is tuned so three cards sit fully visible with a fourth
 * bleeding in at each edge on laptop, collapsing to one full card at a time
 * on mobile. The edge fade is a CSS mask on the viewport, not Embla itself.
 */
export function ReviewsCarousel({ reviews }: { reviews: CuratedReview[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", dragFree: true, containScroll: false },
    [AutoScroll({ speed: 0.6, stopOnInteraction: false, stopOnMouseEnter: true })],
  );

  // Reviews are static/short, so looping needs re-init once real widths are
  // known — otherwise Embla can under-estimate the loop point on first paint.
  useEffect(() => {
    emblaApi?.reInit();
  }, [emblaApi, reviews.length]);

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      ref={emblaRef}
    >
      <div className="flex">
        {reviews.map((review, i) => (
          <div
            key={`${review.name}-${i}`}
            className="shrink-0 grow-0 basis-[85%] px-3 sm:basis-[46%] lg:basis-[30%]"
          >
            <div className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm shadow-earthy-green/5">
              <StarRating value={review.rating} />
              <p className="mt-4 line-clamp-6 text-sm leading-relaxed text-earthy-green/85">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="mt-6 text-xs uppercase tracking-wide text-green">{review.name}</p>
              <p className="text-xs text-earthy-green/50">via Google</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
