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

/** Small line icons for each credential — order matches `aboutCopy.credentials`. */
function MassageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-earthy-green" aria-hidden fill="none">
      <path
        d="M7 13V7a1.5 1.5 0 0 1 3 0v4M10 12V5.5a1.5 1.5 0 0 1 3 0V12M13 12V6.5a1.5 1.5 0 0 1 3 0V13M16 13v-3a1.5 1.5 0 0 1 3 0v5c0 3-2 6-5.5 6h-1C9 21 7 19 7 16v-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FootIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-earthy-green" aria-hidden fill="none">
      <path
        d="M9.5 21c-1.7 0-2.8-1.1-2.8-2.7 0-2 1.1-3.3 1.1-5.8 0-2.1-1.1-3.2-1.1-5.2A4.2 4.2 0 0 1 11 3.2c2 0 3 1.5 3.4 3.4.5 2 .4 4.1 1.9 5.6 1.1 1.1 2.2 2.2 2.2 4.2 0 2.5-2 4.6-4.7 4.6Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="5.6" r="0.6" fill="currentColor" />
      <circle cx="11.3" cy="4.6" r="0.6" fill="currentColor" />
    </svg>
  );
}

function ReikiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-earthy-green" aria-hidden>
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
  );
}

const credentialIcons = [MassageIcon, FootIcon, ReikiIcon];

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
                <Highlight>My</Highlight> story
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
              <Button href={whatsAppUrl()}>Book on WhatsApp</Button>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem]">
              <Image
                src="/images/F4DC7E20-3502-4012-9B15-FF3472DB27AA_1_201_a.jpeg"
                alt="Izzy in her treatment room"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover object-[52%_center]"
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
            <HoverLift className="relative overflow-hidden border border-espresso-light/20 bg-gradient-to-b from-white to-sage/15 p-8">
              <svg
                viewBox="0 0 100 100"
                aria-hidden
                className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 text-espresso-light/10"
              >
                <circle cx="50" cy="50" r="48" fill="currentColor" />
              </svg>

              <p className="relative text-center font-display text-xl text-earthy-green">
                {aboutCopy.credentialsHeading}
              </p>
              <ul className="relative mt-7 space-y-5">
                {aboutCopy.credentials.map((credential, i) => {
                  const Icon = credentialIcons[i];
                  return (
                    <li
                      key={credential}
                      className="flex items-start gap-4 border-t border-espresso-light/15 pt-5 first:border-t-0 first:pt-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sage/40 shadow-sm shadow-earthy-green/10">
                        <Icon />
                      </span>
                      <p className="pt-2 text-sm leading-relaxed text-earthy-green/85">
                        {credential}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </HoverLift>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
