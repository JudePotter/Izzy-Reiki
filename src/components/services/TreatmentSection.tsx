import type { Treatment } from "@/content/treatments";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { PlaceholderCopy } from "@/components/ui/PlaceholderCopy";
import { Button } from "@/components/ui/Button";

export function TreatmentSection({
  treatment,
  bg,
}: {
  treatment: Treatment;
  bg: "white" | "cream";
}) {
  return (
    <Section id={treatment.slug} bg={bg} grain={bg === "cream"} className="scroll-mt-20">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-green">
            {treatment.shortLabel}
          </p>
        </Reveal>
        <BrushReveal delay={0.1} className="mt-4">
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {treatment.name}
          </h2>
        </BrushReveal>

        <Reveal delay={0.25} className="mt-8">
          <PlaceholderCopy />
        </Reveal>

        <Reveal delay={0.35} className="mt-6">
          <PlaceholderCopy className="not-italic">
            <span className="font-display text-lg not-italic text-terracotta-deep">
              Pricing
            </span>
            <span className="block italic">
              This is where your pricing will go, Izzy
            </span>
          </PlaceholderCopy>
        </Reveal>

        <Reveal delay={0.45} className="mt-8">
          <Button href={whatsAppUrl(`Hi Izzy, I'd like to book a free consultation about ${treatment.name.toLowerCase()}.`)}>
            Book a free consultation
          </Button>
        </Reveal>
      </div>
    </Section>
  );
}
