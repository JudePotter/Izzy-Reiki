import { Hero } from "@/components/home/Hero";
import { IntroSection } from "@/components/home/IntroSection";
import { ServicesTeaser } from "@/components/home/ServicesTeaser";
import { GallerySection } from "@/components/home/GallerySection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { SocialSection } from "@/components/home/SocialSection";
import { ClosingCtaBand } from "@/components/home/ClosingCtaBand";
import { BrushDivider } from "@/components/ui/BrushDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <BrushDivider into="cream" />
      <IntroSection />
      <ServicesTeaser />
      <BrushDivider into="cream" />
      <GallerySection />
      <ReviewsSection />
      <SocialSection />
      <BrushDivider into="dark" />
      <ClosingCtaBand />
    </>
  );
}
