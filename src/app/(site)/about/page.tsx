import { AboutContent } from "@/components/about/AboutContent";
import { siteConfig } from "@/content/site-config";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Izzy, Reiki Master in Clophill",
  description: `Meet ${siteConfig.practitionerName}, a Reiki Master with Level 3 diplomas in body massage and reflexology, offering gentle, restorative treatments in ${siteConfig.location.town}, ${siteConfig.location.region}.`,
  path: "/about",
  image: "/images/og/about.jpg",
  imageAlt: "Izzy in her treatment room at Renume Wellness, Clophill",
});

export default function AboutPage() {
  return <AboutContent />;
}
