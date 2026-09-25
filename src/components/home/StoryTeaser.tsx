import Image from "next/image";
import { homeCopy } from "@/content/copy/home";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { Botanical } from "@/components/ui/Botanical";

/** A short pull from Izzy's story, with a link through to the full About page. */
export function StoryTeaser() {
  const { storyTeaser } = homeCopy;

  return (
    <Section bg="white" className="relative isolate overflow-x-clip">
      <Botanical
        src="vine-03.svg"
        left="560px"
        top="-390px"
        width="320px"
        rotate={78}
        opacity={0.55}
        colorToken="rose"
      />
      <div className="grid items-center gap-12 md:grid-cols-[2fr_3fr]">
        <Reveal>
          <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-[2rem] md:mx-auto">
            <Image
              src="/images/portrait-1.jpeg"
              alt="Izzy, the practitioner behind Divine Align Healing"
              fill
              sizes="(min-width: 768px) 33vw, 90vw"
              className="object-cover object-[62%_55%]"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-green">
              {storyTeaser.eyebrow}
            </p>
          </Reveal>
          <BrushReveal delay={0.1} className="mt-4">
            <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
              {storyTeaser.heading}
            </h2>
          </BrushReveal>
          <Reveal delay={0.25} className="mt-6">
            <p className="max-w-xl text-base font-light leading-relaxed text-earthy-green/80">
              {storyTeaser.excerpt}
            </p>
          </Reveal>
          <Reveal delay={0.35} className="mt-8">
            <Button href="/about" variant="outline">
              {storyTeaser.ctaLabel}
            </Button>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
