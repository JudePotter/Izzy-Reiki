import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/content/site-config";
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

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.excerpt,
      images: post.frontmatter.coverImage ? [post.frontmatter.coverImage] : undefined,
      type: "article",
    },
  };
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
                alt=""
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
            Send a note — {siteConfig.practitionerName} replies personally to
            every enquiry.
          </p>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-terracotta-deep px-7 py-3 text-sm text-white transition-colors hover:bg-terracotta"
          >
            Enquire
          </a>
        </Reveal>
      </Section>
    </article>
  );
}
