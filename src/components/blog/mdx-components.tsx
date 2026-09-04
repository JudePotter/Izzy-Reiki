import type { MDXComponents } from "mdx/types";

/**
 * Maps raw MDX elements to the site's type system — generous, airy, brushed,
 * matching the rest of the design rather than default browser styles.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 font-display text-3xl font-light text-earthy-green sm:text-4xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 font-display text-2xl font-light text-earthy-green"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-5 text-base font-light leading-relaxed text-earthy-green/85"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-5 text-base font-light leading-relaxed text-earthy-green/85"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 text-base font-light leading-relaxed text-earthy-green/85"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="text-terracotta-deep underline decoration-terracotta/40 underline-offset-4 hover:decoration-terracotta"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-sage pl-6 font-display text-xl font-light italic text-earthy-green/80"
      {...props}
    />
  ),
};
