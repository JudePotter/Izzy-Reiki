import { homeCopy } from "@/content/copy/home";
import { getFeaturedGalleryImages } from "@/content/gallery";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { FeaturedGalleryGrid } from "@/components/home/FeaturedGalleryGrid";
import { Botanical } from "@/components/ui/Botanical";

export function GallerySection() {
  const { gallery } = homeCopy;
  const images = getFeaturedGalleryImages();

  return (
    <Section bg="cream" grain className="relative isolate overflow-x-clip">
      <Botanical
        src="vine-minimal-02.svg"
        left="880px"
        top="10px"
        width="240px"
        opacity={0.55}
        colorToken="rose"
        flip
      />
      <Botanical
        src="vine-minimal-03.svg"
        left="1300px"
        top="-100px"
        width="200px"
        opacity={0.55}
        colorToken="rose"
      />
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
        <FeaturedGalleryGrid images={images} />
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Button href="/gallery" variant="outline">
          {gallery.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
