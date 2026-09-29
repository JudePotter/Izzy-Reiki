import { AboutContent } from "@/components/about/AboutContent";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About me",
  description: `I'm ${siteConfig.practitionerName}, the complementary therapist and reiki master behind ${siteConfig.businessName} in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
  path: "/about",
  image: "/images/F4DC7E20-3502-4012-9B15-FF3472DB27AA_1_201_a.jpeg",
});

export default function AboutPage() {
  return <AboutContent />;
}
