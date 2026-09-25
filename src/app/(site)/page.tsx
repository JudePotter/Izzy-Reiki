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

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <PackagesTeaser />
      <ServicesTeaser />
      <SectionSeam from="from-white" to="to-sage/30" variant="vine" />
      <WhyChooseUs />
      <ReviewsSection />
      <StoryTeaser />
      <SocialSection />
      <GallerySection />
      <ClosingCtaBand />
    </>
  );
}
