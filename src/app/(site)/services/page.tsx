import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { serviceTreatments, servicePackages } from "@/content/services";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { ServiceCard } from "@/components/services/ServiceCard";

export const metadata: Metadata = {
  title: "Services",
  description: `Reflexology, massage and reiki with ${siteConfig.practitionerName} at ${siteConfig.businessName}, ${siteConfig.location.town}.`,
};

export default function ServicesPage() {
  return (
    <>
      <Section bg="white" innerClassName="pb-16 pt-16 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-green">What I offer</p>
          </Reveal>
          <BrushReveal delay={0.1} className="mt-4">
            <h1 className="font-display text-5xl font-light text-earthy-green sm:text-6xl">
              Services
            </h1>
          </BrushReveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base font-light leading-relaxed text-earthy-green/80">
              Every price is here so booking is one tap away. Not sure what&rsquo;s
              right for you? Book a free consultation and I&rsquo;ll talk it
              through first.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section id="treatments" bg="cream" grain className="scroll-mt-20">
        <BrushReveal>
          <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
            Treatments
          </h2>
        </BrushReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {serviceTreatments.map((item, i) => (
            <ServiceCard key={item.name} item={item} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </Section>

      <Section id="packages" bg="white" className="scroll-mt-20">
        <BrushReveal>
          <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
            Packages
          </h2>
        </BrushReveal>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {servicePackages.map((item, i) => (
            <ServiceCard key={item.name} item={item} delay={(i % 2) * 0.1} />
          ))}
        </div>
      </Section>
    </>
  );
}
