import { homeCopy } from "@/content/copy/home";
import { siteConfig } from "@/content/site-config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

/**
 * "Follow along" — deliberately just handles + follow buttons for this
 * iteration, no embedded feed yet. The brief allows a lazy-loaded Instagram
 * grid as an optional add later; keeping it out for now avoids a heavy
 * third-party script hurting Core Web Vitals before it's needed.
 */
export function SocialSection() {
  const { social } = homeCopy;

  return (
    <Section bg="white" className="relative isolate overflow-x-clip">
      <Reveal className="mx-auto max-w-xl text-center">
        <h2 className="font-display text-4xl font-light text-earthy-green sm:text-5xl">
          {social.heading}
        </h2>
        <p className="mt-4 text-base font-light text-earthy-green/80">
          {social.body}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={siteConfig.social.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-earthy-green/30 px-7 py-3 text-sm text-earthy-green transition-colors hover:border-earthy-green"
          >
            Follow on Instagram — {siteConfig.social.instagram.handle}
          </a>
          <a
            href={siteConfig.social.facebook.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-earthy-green/30 px-7 py-3 text-sm text-earthy-green transition-colors hover:border-earthy-green"
          >
            Follow on Facebook
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
