import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";
import { treatments } from "@/content/treatments";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { BrushDivider } from "@/components/ui/BrushDivider";
import { TreatmentSection } from "@/components/services/TreatmentSection";

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
            <p className="text-sm uppercase tracking-[0.25em] text-green">
              What I offer
            </p>
          </Reveal>
          <BrushReveal delay={0.1} className="mt-4">
            <h1 className="font-display text-5xl font-light text-earthy-green sm:text-6xl">
              Services
            </h1>
          </BrushReveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base font-light leading-relaxed text-earthy-green/80">
              Three treatments, each held at an unhurried pace.
            </p>
          </Reveal>
        </div>
      </Section>

      {treatments.map((treatment, i) => (
        <TreatmentSection
          key={treatment.slug}
          treatment={treatment}
          bg={i % 2 === 0 ? "cream" : "white"}
        />
      ))}

      <BrushDivider into="dark" />
    </>
  );
}
