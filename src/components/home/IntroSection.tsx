import { homeCopy } from "@/content/copy/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";

/** The five-second pitch from the copy doc — Izzy's own words, verbatim. */
export function IntroSection() {
  const { intro } = homeCopy;

  return (
    <Section bg="cream" grain>
      <div className="mx-auto max-w-2xl text-center">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {intro.heading}
          </h2>
        </BrushReveal>
        <Reveal delay={0.2} className="mt-8">
          <p className="text-base font-light leading-relaxed text-earthy-green/85">
            {intro.pitch}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
