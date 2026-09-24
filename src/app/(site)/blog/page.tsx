import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/content/site-config";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/blog/BlogCard";

export const metadata: Metadata = {
  title: "Journal",
  description: `Reiki, rest and wellbeing notes from ${siteConfig.practitionerName} at ${siteConfig.businessName}.`,
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <Section bg="white" innerClassName="pb-20 pt-16 sm:pb-28 sm:pt-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.25em] text-green">
          Notes
        </p>
        <h1 className="mt-4 font-display text-5xl font-light text-earthy-green sm:text-6xl">
          Journal
        </h1>
        <p className="mt-6 text-base font-light leading-relaxed text-earthy-green/80">
          Reflections on reiki, rest and wellbeing — added to gently over
          time.
        </p>
      </Reveal>

      {posts.length > 0 ? (
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-earthy-green/60">
          New posts are on their way — check back soon.
        </p>
      )}
    </Section>
  );
}
