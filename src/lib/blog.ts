import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  draft?: boolean;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

function readPostFile(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, "utf8");
  return matter(raw);
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getAllPosts({
  includeDrafts = false,
}: { includeDrafts?: boolean } = {}): PostSummary[] {
  const posts = getAllPostSlugs()
    .map((slug) => {
      const { data, content } = readPostFile(slug);
      const frontmatter = data as PostFrontmatter;
      return {
        ...frontmatter,
        slug,
        readingTime: readingTime(content).text,
      };
    })
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1));

  return posts;
}

export function getPostBySlug(slug: string) {
  const { data, content } = readPostFile(slug);
  return {
    frontmatter: data as PostFrontmatter,
    content,
  };
}
