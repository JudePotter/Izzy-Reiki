import { homeCopy } from "@/content/copy/home";
import { getFeaturedGalleryImages } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export function GallerySection() {
  const { gallery } = homeCopy;
  const images = getFeaturedGalleryImages();

  return (
    <Section bg="cream" grain>
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-green">
            {gallery.tagline}
          </p>
        </Reveal>
        <BrushReveal delay={0.1} className="mt-4">
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {gallery.heading}
          </h2>
        </BrushReveal>
      </div>

      <div className="mt-14">
        <GalleryGrid images={images} />
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Button href="/gallery" variant="outline">
          {gallery.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
