import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { galleryImages } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description: `A look at the space and work behind ${siteConfig.businessName}, ${siteConfig.location.town}.`,
};

export default function GalleryPage() {
  return (
    <Section bg="white" innerClassName="pb-20 pt-16 sm:pb-28 sm:pt-24">
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
