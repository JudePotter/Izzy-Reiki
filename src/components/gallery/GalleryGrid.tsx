import Image from "next/image";
import type { GalleryImage } from "@/content/gallery";
import { Reveal } from "@/components/ui/Reveal";

/**
 * A tidy grid with a little rhythm: portrait photos get tall (two-row) tiles
 * and landscape ones get single-row tiles, so nothing is cropped harder than
 * it has to be. The order and `tile` shapes in `content/gallery.ts` are
 * arranged so `dense` packing leaves no gaps and the bottom edge sits flush
 * at both the 2-column (phone) and 3-column (laptop) layouts.
 *
 * Rows are shorter on phones so a tall tile there is roughly a 9:16 photo's
 * own shape (otherwise its sides get chopped off in the narrow columns).
 */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid auto-rows-[10rem] grid-cols-2 gap-4 [grid-auto-flow:dense] sm:auto-rows-[14rem] sm:grid-cols-3 md:gap-6">
      {images.map((image, i) => (
        <Reveal
          key={image.src}
          delay={(i % 6) * 0.08}
          className={`group relative overflow-hidden rounded-[1.5rem] ${
            image.tile === "single" ? "" : "row-span-2"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            style={image.focus ? { objectPosition: image.focus } : undefined}
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
