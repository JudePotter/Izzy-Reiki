import Image from "next/image";
import { aboutCopy } from "@/content/copy/about";
import { homeCopy } from "@/content/copy/home";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HoverLift } from "@/components/ui/HoverLift";
import { Highlight } from "@/components/ui/Highlight";
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
            <Reveal delay={0.3} className="mt-6 space-y-4">
              {aboutCopy.story.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-base font-light leading-relaxed text-earthy-green/85"
                >
                  {paragraph}
                </p>
              ))}
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
        <div className="grid gap-14 md:grid-cols-[3fr_2fr] md:items-start">
          <div>
            <BrushReveal>
              <h2 className="font-display text-3xl font-light text-earthy-green sm:text-4xl">
                {aboutCopy.approachHeading}
              </h2>
            </BrushReveal>
            <div className="mt-8 space-y-6">
              {homeCopy.whyChooseUs.items.map((item, i) => (
                <Reveal key={item.title} delay={0.1 + i * 0.1}>
                  <p className="font-display text-lg font-light text-earthy-green">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-earthy-green/75">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.15}>
            <HoverLift className="border border-espresso-light/20 bg-white p-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/40">
                <svg viewBox="0 0 24 24" className="h-7 w-7 text-earthy-green" aria-hidden>
                  <path
                    d="M12 3c1.8 2 3 4.2 3 6.5A3 3 0 0 1 12 12.5a3 3 0 0 1-3-3C9 7.2 10.2 5 12 3Z"
                    fill="currentColor"
                    opacity="0.8"
                  />
                  <path
                    d="M12 12.5v8M8 21h8M6.5 16c1.5 1 3.5 1 5.5-.5M17.5 16c-1.5 1-3.5 1-5.5-.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="mt-5 font-display text-xl text-earthy-green">
                {aboutCopy.credentialsHeading}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-earthy-green/80">
                {aboutCopy.credential}
              </p>
            </HoverLift>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
