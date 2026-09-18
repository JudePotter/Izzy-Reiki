import Image from "next/image";
import type { GalleryImage } from "@/content/gallery";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A fixed, symmetric bento layout for exactly one portrait + four landscape
 * images — one tall image on the left, a clean 2x2 of landscape crops on
 * the right. Deliberately not the generic masonry GalleryGrid (that's for
 * the full /gallery page, which takes an arbitrary number of images).
 */
export function FeaturedGalleryGrid({ images }: { images: GalleryImage[] }) {
  const portrait = images.find((img) => img.orientation === "portrait") ?? images[0];
  const landscape = images.filter((img) => img !== portrait).slice(0, 4);

  return (
    // The grid needs a real, non-content-derived height for the row-span
    // item to size against — hence the aspect-ratio on the container itself
    // rather than on individual cells (an absolutely-positioned `fill`
    // Image can't establish height for its own parent).
    <div className="grid grid-cols-2 gap-4 sm:aspect-[16/9] sm:grid-cols-4 sm:grid-rows-2 md:gap-6">
      <Reveal className="relative col-span-2 row-span-2 aspect-[3/4] overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full">
        <Image
          src={portrait.src}
          alt={portrait.alt}
          fill
          sizes="(min-width: 640px) 33vw, 90vw"
          className="object-cover"
        />
      </Reveal>

      {landscape.map((image, i) => (
        <Reveal
          key={image.src}
          delay={(i + 1) * 0.08}
          className="relative col-span-1 aspect-[4/3] overflow-hidden rounded-[1.5rem] sm:aspect-auto sm:h-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 640px) 20vw, 45vw"
            className="object-cover"
          />
        </Reveal>
      ))}
    </div>
  );
}
