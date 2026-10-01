import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { PackagesTeaser } from "@/components/home/PackagesTeaser";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { StoryTeaser } from "@/components/home/StoryTeaser";
import { SocialSection } from "@/components/home/SocialSection";
import { GallerySection } from "@/components/home/GallerySection";
import { ClosingCtaBand } from "@/components/home/ClosingCtaBand";
import { SectionSeam } from "@/components/ui/SectionSeam";

export const metadata = buildMetadata({
  title: {
    absolute: `Reiki, Reflexology & Massage in ${siteConfig.location.town} — ${siteConfig.businessName}`,
  },
  description: `Reiki, reflexology and holistic massage with ${siteConfig.practitionerName} in ${siteConfig.location.town}, ${siteConfig.location.region}. A calm, welcoming space to release tension and reset. Book on WhatsApp.`,
  path: "/",
  imageAlt: "A candle, crystals and a Buddha statue in the Divine Align Healing treatment room",
});

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <SectionSeam from="from-cream" to="to-cream" variant="leaf" />
      <PackagesTeaser />
      <ServicesTeaser />
      <WhyChooseUs />
      <ReviewsSection />
      <StoryTeaser />
      <SocialSection />
      <GallerySection />
      <ClosingCtaBand />
    </>
  );
}
