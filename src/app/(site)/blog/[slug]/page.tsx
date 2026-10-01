import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/content/site-config";
import { buildArticleJsonLd, serializeJsonLd } from "@/lib/structured-data";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { mdxComponents } from "@/components/blog/mdx-components";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = safeGetPost(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${slug}`;
  // Posts without a cover fall back to the blog's share image.
  const images = [{ url: post.frontmatter.coverImage ?? "/images/og/blog.jpg", alt: post.frontmatter.title }];
  const shareTitle = `${post.frontmatter.title} — ${siteConfig.businessName}`;

  // Search results cut titles off at ~60 characters and descriptions at ~155,
  // so long post titles drop the "— Divine Align Healing" suffix and long
  // excerpts are trimmed for the meta description (the full text still shows
  // on the page and in the share card).
  const fullTitle = `${post.frontmatter.title} — ${siteConfig.businessName}`;
  const title = fullTitle.length > 65 ? { absolute: post.frontmatter.title } : post.frontmatter.title;
  const description = trimToLength(post.frontmatter.excerpt, 155);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: shareTitle,
      description,
      url,
      siteName: siteConfig.businessName,
      locale: "en_GB",
      images,
      type: "article",
      publishedTime: post.frontmatter.date,
      authors: [siteConfig.practitionerName],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description,
      images,
    },
  };
}

/** Trims at a word boundary and adds an ellipsis only if it had to cut. */
function trimToLength(text: string, max: number) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;
}

function safeGetPost(slug: string) {
  try {
    return getPostBySlug(slug);
  } catch {
    return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = safeGetPost(slug);

  if (!post || post.frontmatter.draft) {
    notFound();
  }

  const { frontmatter, content } = post;

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            buildArticleJsonLd({
              slug,
              title: frontmatter.title,
              excerpt: frontmatter.excerpt,
              date: frontmatter.date,
              coverImage: frontmatter.coverImage,
            }),
          ),
        }}
      />
      <Section bg="white" innerClassName="pb-0 pt-16 sm:pt-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Link
            href="/blog"
            className="text-sm text-earthy-green/60 hover:text-earthy-green"
          >
            ← Back to the blog
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.25em] text-green">
            {new Date(frontmatter.date).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <h1 className="mt-4 font-display text-4xl font-light leading-[1.15] text-earthy-green sm:text-5xl">
            {frontmatter.title}
          </h1>
        </Reveal>

        {frontmatter.coverImage && (
          <Reveal delay={0.15} className="mx-auto mt-12 max-w-4xl">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2rem]">
              <Image
                src={frontmatter.coverImage}
                alt={frontmatter.title}
                fill
                sizes="(min-width: 1024px) 60vw, 90vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        )}
      </Section>

      <Section bg="white" innerClassName="pb-20 pt-12 sm:pb-28 sm:pt-16">
        <Reveal className="mx-auto max-w-2xl">
          <MDXRemote source={content} components={mdxComponents} />
        </Reveal>
      </Section>

      <Section bg="cream" grain>
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-3xl font-light text-earthy-green">
            Curious what a session feels like?
          </h2>
          <p className="mt-4 text-base font-light text-earthy-green/80">
            Send a note — I reply personally to every enquiry.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-espresso px-7 py-3 text-sm text-white transition-colors hover:bg-espresso-light"
          >
            Enquire
          </a>
        </Reveal>
      </Section>
    </article>
  );
}
