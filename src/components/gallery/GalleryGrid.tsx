import Image from "next/image";
import type { GalleryImage } from "@/content/gallery";
import { Reveal } from "@/components/ui/Reveal";

/** A tasteful, slightly organic grid — every third tile runs tall for rhythm. */
export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid auto-rows-[12rem] grid-cols-2 gap-4 sm:auto-rows-[14rem] sm:grid-cols-3 md:gap-6">
      {images.map((image, i) => (
        <Reveal
          key={image.src}
          delay={(i % 6) * 0.08}
          className={`group relative overflow-hidden rounded-[1.5rem] ${
            i % 5 === 0 ? "row-span-2" : ""
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 33vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Reveal>
      ))}
    </div>
  );
}
