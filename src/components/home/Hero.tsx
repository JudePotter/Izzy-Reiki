import { homeCopy } from "@/content/copy/home";
import { treatments } from "@/content/treatments";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { HeroParallaxImage } from "@/components/home/HeroParallaxImage";

export function Hero() {
  const { hero } = homeCopy;

  return (
    <section className="relative overflow-hidden bg-earthy-green text-white">
      <HeroParallaxImage />
      <div className="absolute inset-0 bg-gradient-to-t from-earthy-green via-earthy-green/60 to-earthy-green/20" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-4xl flex-col items-center justify-center px-6 py-28 text-center sm:min-h-[90vh]">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.25em] text-sage">
            {hero.eyebrow}
          </p>
        </Reveal>

        <BrushReveal delay={0.15} className="mt-6">
          <h1 className="font-display text-5xl font-light leading-[1.15] sm:text-6xl md:text-7xl">
            {hero.headingLine1}
            <br />
            <em className="italic">{hero.headingLine2}</em>
          </h1>
        </BrushReveal>

        <Reveal delay={0.35}>
          <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/85 sm:text-lg">
            {hero.subhead}
          </p>
        </Reveal>

        <Reveal delay={0.45}>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm uppercase tracking-[0.2em] text-sage">
            {treatments.map((treatment, i) => (
              <span key={treatment.slug} className="flex items-center gap-3">
                {i > 0 && <span className="text-white/30">|</span>}
                {treatment.name}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={whatsAppUrl()}>{hero.primaryCta}</Button>
            <Button href="/about" variant="outlineLight">
              {hero.secondaryCta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
