import type { Metadata } from "next";
import { AboutContent } from "@/components/about/AboutContent";
import { siteConfig } from "@/content/site-config";

export const metadata: Metadata = {
  title: "About me",
  description: `I'm ${siteConfig.practitionerName}, the complementary therapist and reiki master behind ${siteConfig.businessName} in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
};

export default function AboutPage() {
  return <AboutContent />;
}
