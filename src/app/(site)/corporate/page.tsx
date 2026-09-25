import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { whatsAppUrl } from "@/lib/whatsapp";
import {
  corporateOptions,
  corporatePackages,
  corporateOccasions,
  corporateSteps,
  corporateLogistics,
} from "@/content/corporate";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Button } from "@/components/ui/Button";
import { Highlight } from "@/components/ui/Highlight";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description: `Bring wellbeing to your workplace with on-site reflexology, massage and reiki from ${siteConfig.practitionerName} at ${siteConfig.businessName}.`,
};

const brochureHref = "/corporate/divine-align-corporate-wellness.pdf";

/** Matches Button's own `base` + `outline`/`outlineLight` classes — a plain
 * anchor so the PDF opens in a new tab instead of the Button component's
 * internal-link navigation, which would leave the page. */
function BrochureLink({ light = false }: { light?: boolean }) {
  return (
    <a
      href={brochureHref}
      target="_blank"
      rel="noopener noreferrer"
      className={
        light
          ? "inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-7 py-3 text-sm tracking-wide text-white transition-colors duration-300 hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          : "inline-flex items-center justify-center gap-2 rounded-full border border-earthy-green/40 px-7 py-3 text-sm tracking-wide text-earthy-green transition-colors duration-300 hover:border-earthy-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earthy-green"
      }
    >
      Download the brochure (PDF)
    </a>
  );
}

export default function CorporatePage() {
  return (
    <>
      <Section bg="white" innerClassName="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.25em] text-green">
                For workplaces
              </p>
            </Reveal>
            <BrushReveal delay={0.1} className="mt-4">
              <h1 className="font-display text-5xl font-light leading-[1.1] text-earthy-green sm:text-6xl">
                Bring <Highlight>wellbeing</Highlight> to your workplace
              </h1>
            </BrushReveal>
            <Reveal delay={0.3} className="mt-6">
              <p className="text-base font-light leading-relaxed text-earthy-green/85">
                Show your team appreciation with the gift of relaxation,
                recharge and renewal — tailored wellness sessions designed to
                support physical, mental and emotional health, delivered
                right at your workplace.
              </p>
            </Reveal>
            <Reveal delay={0.4} className="mt-8 flex flex-wrap gap-4">
              <Button href={whatsAppUrl(siteConfig.whatsapp.corporateMessage)}>
                Book a corporate wellness day
              </Button>
              <BrochureLink />
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/corporate/5F08753D-2114-4E8C-9918-B720E32B8E55_1_105_c.jpeg"
                alt="Izzy giving a reflexology treatment in an office setting"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream" grain>
        <div className="mx-auto max-w-2xl text-center">
          <BrushReveal>
            <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
              Your wellness options
            </h2>
          </BrushReveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base font-light leading-relaxed text-earthy-green/80">
              Book me for just one treatment for all your employees, or
              choose a mixed wellness day where your employees can pre-select
              which treatment they want. Every appointment is 30 minutes —
              valuable time for your team to truly unwind.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {corporateOptions.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <HoverLift className="h-full bg-white/70 p-8">
                <p className="font-display text-xl font-light leading-snug text-earthy-green">
                  {item.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-earthy-green/75">
                  {item.body}
                </p>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="sage">
        <div className="mx-auto max-w-2xl text-center">
          <BrushReveal>
            <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
              Packages &amp; pricing
            </h2>
          </BrushReveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {corporatePackages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={i * 0.1}>
              <HoverLift className="h-full border border-earthy-green/10 bg-white p-7 text-center">
                <p className="font-display text-lg font-light text-earthy-green">
                  {pkg.name}
                </p>
                <p className="mt-1 text-sm text-earthy-green/70">{pkg.employees}</p>
                <p className="mt-5 font-display text-3xl font-light text-espresso">
                  {pkg.price}
                </p>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid gap-14 md:grid-cols-[3fr_2fr] md:items-center">
          <div>
            <BrushReveal>
              <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
                Treat your staff with
              </h2>
            </BrushReveal>
            <Reveal delay={0.15} className="mt-8 space-y-3">
              {corporateOccasions.map((occasion) => (
                <p
                  key={occasion}
                  className="flex items-start gap-3 text-sm leading-relaxed text-earthy-green/85"
                >
                  <span aria-hidden className="mt-1 text-earthy-green/50">
                    ✓
                  </span>
                  {occasion}
                </p>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/corporate/F2F4A5F2-98D9-4E57-ACB9-21CB3B5B0EA5.png"
                alt="Izzy giving a massage treatment in an office setting"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream" grain>
        <div className="mx-auto max-w-2xl text-center">
          <BrushReveal>
            <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
              How it works
            </h2>
          </BrushReveal>
        </div>

        <Reveal delay={0.15}>
          <ol className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {corporateSteps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/50 font-display text-sm text-earthy-green">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-sm leading-relaxed text-earthy-green/85">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {corporateLogistics.map((row, i) => (
            <Reveal key={row.treatment} delay={i * 0.1}>
              <div className="h-full border border-earthy-green/10 bg-white p-7">
                <p className="font-display text-lg font-light text-earthy-green">
                  {row.treatment}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-earthy-green/75">
                  {row.provides}
                </p>
                <ul className="mt-4 space-y-1 border-t border-earthy-green/10 pt-4 text-xs uppercase tracking-[0.15em] text-earthy-green/60">
                  {row.timing.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section bg="dark" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/trees.jpeg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-15"
          />
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <BrushReveal>
            <h2 className="font-display text-4xl font-light sm:text-5xl">
              Invest in your team&rsquo;s wellbeing
            </h2>
          </BrushReveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-base font-light text-white/80">
              Because a happier workplace builds a brighter future.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                href={whatsAppUrl(siteConfig.whatsapp.corporateMessage)}
                variant="outlineLight"
              >
                Get in touch to book
              </Button>
              <BrochureLink light />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
