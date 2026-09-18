import Image from "next/image";
import { homeCopy } from "@/content/copy/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { ConsultationForm } from "@/components/home/ConsultationForm";

/**
 * The big closing "book here" moment — full-width, warm, hero-energy band
 * with the primary WhatsApp CTA directly beneath the heading.
 */
export function ClosingCtaBand() {
  const { closingBand } = homeCopy;

  return (
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
            {closingBand.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.15}>
          <p className="mt-4 text-base font-light text-white/80">
            {closingBand.body}
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <ConsultationForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
