import Image from "next/image";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/metadata";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BrushReveal } from "@/components/ui/BrushReveal";
import { Botanical } from "@/components/ui/Botanical";
import { ClosingCtaBand } from "@/components/home/ClosingCtaBand";

export const metadata = buildMetadata({
  title: "Contact & Booking in Clophill",
  description: `Message ${siteConfig.practitionerName} on WhatsApp or use the enquiry form to book Reiki, reflexology or massage at ${siteConfig.businessName}, inside Renume Wellness, ${siteConfig.location.town}, ${siteConfig.location.region}.`,
  path: "/contact",
  image: "/images/og/contact.jpg",
  imageAlt: "Renume Wellness in Clophill, where Divine Align Healing is based",
});

export default function ContactPage() {
  return (
    <>
      <Section
        bg="white"
        innerClassName="pb-16 pt-10 sm:pb-20 sm:pt-14"
        className="relative isolate overflow-x-clip"
      >
        <Botanical
          src="flower-stem-01.svg"
          right="-40px"
          top="-60px"
          width="220px"
          rotate={12}
          opacity={0.55}
          colorToken="rose"
          hideOnMobile
        />
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-green">
            Get in touch
          </p>
          <BrushReveal delay={0.1} className="mt-4">
            <h1 className="font-display text-5xl font-light text-earthy-green sm:text-6xl">
              Contact
            </h1>
          </BrushReveal>
          <p className="mt-6 text-base font-light leading-relaxed text-earthy-green/80">
            Message me on WhatsApp or email me using the enquiry form below.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:aspect-auto md:h-[480px] lg:h-[560px]">
              <Image
                src="/images/location/renume-wellness.webp"
                alt="Renume Wellness, the space Izzy works from in Clophill"
                fill
                sizes="(min-width: 768px) 50vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] md:aspect-auto md:h-[480px] lg:h-[560px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.768760246091!2d-0.4144294227049854!3d52.047524371941186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4877b5cf9617d8d5%3A0x8c3696d50a81f0d5!2sDivine%20Align%20Healing!5e0!3m2!1sen!2suk!4v1790669850362!5m2!1sen!2suk"
                title="Map to Renume Wellness, Clophill"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <ClosingCtaBand />
    </>
  );
}
