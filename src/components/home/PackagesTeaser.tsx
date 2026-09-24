import { homeCopy } from "@/content/copy/home";
import { servicePackages } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { ServiceCard } from "@/components/services/ServiceCard";
import { PackageSpiralVine } from "@/components/home/PackageSpiralVine";

/**
 * Packages are Izzy's main selling point and highest-value offering, so per
 * the brief they get real room directly under the treatments teaser, not a
 * cut-down version — reuses the same full ServiceCard used on the Services
 * page (name, price, duration, description, Book-on-WhatsApp button).
 */
export function PackagesTeaser() {
  const { packagesTeaser } = homeCopy;

  return (
    <Section bg="cream" grain className="relative overflow-hidden">
      <PackageSpiralVine />
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
