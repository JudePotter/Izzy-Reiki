import Link from "next/link";
import { homeCopy } from "@/content/copy/home";
import { treatments } from "@/content/treatments";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Button } from "@/components/ui/Button";

export function ServicesTeaser() {
  const { servicesTeaser } = homeCopy;

  return (
    <Section bg="white">
      <div className="mx-auto max-w-2xl text-center">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {servicesTeaser.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base font-light text-earthy-green/80">
            {servicesTeaser.body}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-3">
        {treatments.map((treatment, i) => (
          <Reveal key={treatment.slug} delay={i * 0.1}>
            <Link href={`/services#${treatment.slug}`} className="block h-full">
              <HoverLift className="border border-earthy-green/10 bg-cream/60 p-8 text-center">
                <p className="font-display text-2xl font-light text-earthy-green">
                  {treatment.name}
                </p>
                <p className="mt-2 text-sm text-earthy-green/70">
                  {treatment.shortLabel}
                </p>
              </HoverLift>
            </Link>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-12 text-center">
        <Button href="/services" variant="outline">
          {servicesTeaser.ctaLabel}
        </Button>
      </Reveal>
    </Section>
  );
}
