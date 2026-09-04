import Image from "next/image";
import { aboutCopy } from "@/content/copy/about";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Highlight } from "@/components/ui/Highlight";
import { PlaceholderCopy } from "@/components/ui/PlaceholderCopy";
import { Button } from "@/components/ui/Button";

export function AboutContent() {
  return (
    <>
      <Section bg="white" innerClassName="pb-20 pt-16 sm:pb-28 sm:pt-24">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="text-sm uppercase tracking-[0.25em] text-green">
                {aboutCopy.eyebrow}
              </p>
            </Reveal>
            <BrushReveal delay={0.1} className="mt-4">
              <h1 className="font-display text-5xl font-light leading-[1.1] text-earthy-green sm:text-6xl">
                <Highlight>Izzy&rsquo;s</Highlight> story
              </h1>
            </BrushReveal>
            <Reveal delay={0.3} className="mt-6">
              <PlaceholderCopy />
            </Reveal>
            <Reveal delay={0.4} className="mt-8">
              <Button href={whatsAppUrl()}>Book a free consultation</Button>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/portrait-1.jpeg"
                alt="Izzy, founder of Divine Align Healing"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Section bg="cream" grain>
        <div className="grid gap-14 md:grid-cols-[3fr_2fr]">
          <div>
            <BrushReveal>
              <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
                {aboutCopy.approachHeading}
              </h2>
            </BrushReveal>
            <Reveal delay={0.15} className="mt-6">
              <PlaceholderCopy />
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <HoverLift className="bg-white p-8">
              <p className="font-display text-xl text-earthy-green">
                {aboutCopy.credentialsHeading}
              </p>
              <div className="mt-4">
                <PlaceholderCopy>
                  This is where Izzy&rsquo;s qualifications and credentials
                  will go
                </PlaceholderCopy>
              </div>
            </HoverLift>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
