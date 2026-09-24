import Image from "next/image";
import Link from "next/link";
import { homeCopy } from "@/content/copy/home";
import { treatments } from "@/content/treatments";
import { whatsAppUrl } from "@/lib/whatsapp";
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
            <HoverLift className="group overflow-hidden border border-earthy-green/10 bg-cream/60">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={treatment.image}
                  alt={treatment.name}
                  fill
                  sizes="(min-width: 640px) 33vw, 90vw"
                  style={treatment.imagePosition ? { objectPosition: treatment.imagePosition } : undefined}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col items-center p-7 text-center">
                <p className="font-display text-2xl font-light text-earthy-green">
                  {treatment.name}
                </p>
                <p className="mt-1 text-sm text-earthy-green/70">{treatment.shortLabel}</p>

                <div className="mt-6 flex w-full items-center justify-center gap-3">
                  <Button
                    href={whatsAppUrl(
                      `Hi, I would like to book ${treatment.name}. Please let me know your availability.`,
                    )}
                    icon={false}
                  >
                    Book on WhatsApp
                  </Button>
                  <Link
                    href="/services#treatments"
                    className="group inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-earthy-green/60 hover:text-earthy-green"
                  >
                    Details
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </HoverLift>
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
