import Image from "next/image";
import { homeCopy } from "@/content/copy/home";
import { siteConfig } from "@/content/site-config";
import { whatsAppUrl } from "@/lib/whatsapp";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/home/ContactForm";

/**
 * The dedicated free-consultation / "not sure yet" moment (Fixes Round 1
 * §1, §5) — WhatsApp leads as the big, obvious CTA; the contact form sits
 * below as the quiet backup route, not the main event.
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
          <p className="mt-4 text-base font-light text-white/80">{closingBand.body}</p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-8">
            <Button href={whatsAppUrl(siteConfig.whatsapp.consultationMessage)}>
              Book a free consultation
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.35} className="mt-12 border-t border-white/15 pt-10">
          <p className="text-sm text-white/70">{closingBand.formIntro}</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
