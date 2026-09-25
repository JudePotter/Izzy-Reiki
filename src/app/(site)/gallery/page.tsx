import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { galleryImages } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Botanical } from "@/components/ui/Botanical";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look at the space and work behind ${siteConfig.businessName}, ${siteConfig.location.town}.`,
};

export default function GalleryPage() {
  return (
    <Section
      bg="white"
      innerClassName="pb-20 pt-16 sm:pb-28 sm:pt-24"
      className="relative isolate overflow-x-clip"
    >
      {/* Four pieces threading through the grid's own column gaps, so each
          reads as weaving behind one tile and back out from behind the
          next, rather than just framing the margins. */}
      <Botanical
        src="vine-minimal-02.svg"
        left="170px"
        top="-40px"
        width="210px"
        opacity={0.55}
        colorToken="rose"
      />
      <Botanical
        src="vine-minimal-01.svg"
        left="520px"
        top="120px"
        width="200px"
        opacity={0.55}
        colorToken="rose"
        flip
      />
      <Botanical
        src="vine-minimal-03.svg"
        left="880px"
        top="260px"
        width="210px"
        opacity={0.55}
        colorToken="rose"
        flip
      />
      <Botanical
        src="vine-minimal-02.svg"
        left="1220px"
        top="-60px"
        width="190px"
        opacity={0.55}
        colorToken="rose"
        flip
      />
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-green">
            Healing at a glimpse
          </p>
        </Reveal>
        <BrushReveal delay={0.1} className="mt-4">
          <h1 className="font-display text-5xl font-light text-earthy-green sm:text-6xl">
            Gallery of work
          </h1>
        </BrushReveal>
      </div>

      <div className="mt-14">
        <GalleryGrid images={galleryImages} />
      </div>
    </Section>
  );
}
