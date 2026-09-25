import { homeCopy } from "@/content/copy/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Botanical } from "@/components/ui/Botanical";

/** Izzy's three differentiators, from the copy doc — a homepage trust block. */
export function WhyChooseUs() {
  const { whyChooseUs } = homeCopy;

  return (
    <Section bg="sage" className="relative isolate overflow-x-clip">
      <Botanical
        src="moon-stars-02.svg"
        left="2px"
        top="-120px"
        width="260px"
        opacity={0.55}
        colorToken="green"
      />
      <Botanical
        src="moon-stars-02.svg"
        left="1280px"
        top="-33px"
        width="150px"
        opacity={0.55}
        colorToken="green"
        flip
      />
      <div className="mx-auto max-w-2xl text-center">
        <BrushReveal>
          <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
            {whyChooseUs.heading}
          </h2>
        </BrushReveal>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {whyChooseUs.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <HoverLift className="h-full bg-white/70 p-8">
              <p className="font-display text-xl font-light leading-snug text-earthy-green">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-earthy-green/75">{item.body}</p>
            </HoverLift>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
