import { homeCopy } from "@/content/copy/home";
import { servicePackages } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { Botanical } from "@/components/ui/Botanical";

/**
 * Packages are Izzy's main selling point and highest-value offering, so per
 * the brief they get real room directly under the treatments teaser, not a
 * cut-down version — reuses the same full ServiceCard used on the Services
 * page (name, price, duration, description, Book-on-WhatsApp button).
 */
export function PackagesTeaser() {
  const { packagesTeaser } = homeCopy;

  return (
    <Section bg="cream" grain className="relative isolate overflow-x-clip">
      {/*
        Attached here (not IntroSection above) even though it reads as
        belonging to that section — IntroSection is short (~390px) and its
        own painted background would silently truncate anything taller once
        it bleeds past that boundary, since Packages (much taller) paints
        over it next in DOM order. Anchoring to the taller section and
        pulling up with a large negative `top` keeps the full artwork
        visible.
      */}
      <Botanical
        src="vine-02.svg"
        left="-47px"
        top="-262px"
        width="260px"
        opacity={0.55}
        colorToken="rose"
      />
      <div className="mx-auto max-w-2xl text-center">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {packagesTeaser.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base font-light leading-relaxed text-earthy-green/80">
            {packagesTeaser.body}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-6">
        {servicePackages.map((item, i) => (
          <ServiceCard key={item.name} item={item} delay={(i % 2) * 0.1} />
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Button href="/services#packages" variant="outline">
          {packagesTeaser.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
