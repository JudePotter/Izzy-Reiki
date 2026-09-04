import { config, fields, collection } from "@keystatic/core";

/**
 * Local-mode Keystatic, scoped to the blog only. Everything else on the site
 * (services, testimonials, page copy, business info) is plain typed content
 * in src/content, edited directly in the repo — per the brief, Jude is the
 * sole editor and there's no hosted CMS. The admin UI runs locally at
 * /keystatic (npm run dev), posts save as real .mdx files into
 * content/blog/, committed to git and deployed by Vercel like any other
 * change.
 */
export default config({
  storage: {
    kind: "local",
  },
  collections: {
    posts: collection({
      label: "Blog posts",
      slugField: "title",
      path: "content/blog/*",
      format: { contentField: "content" },
      entryLayout: "content",
      columns: ["title", "date", "draft"],
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Publish date",
          defaultValue: { kind: "today" },
        }),
        excerpt: fields.text({
          label: "Excerpt",
          description: "Shown on the blog listing page and in meta descriptions.",
          multiline: true,
        }),
        coverImage: fields.image({
          label: "Cover image",
          directory: "public/images/blog",
          publicPath: "/images/blog/",
        }),
        draft: fields.checkbox({
          label: "Draft",
          description: "Draft posts are hidden from the live site.",
          defaultValue: true,
        }),
        content: fields.mdx({
          label: "Content",
        }),
      },
    }),
  },
});
