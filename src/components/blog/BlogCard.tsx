import Image from "next/image";
import Link from "next/link";
import type { PostSummary } from "@/lib/blog";

export function BlogCard({ post }: { post: PostSummary }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-earthy-green/10"
    >
      {post.coverImage && (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 90vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <p className="text-xs uppercase tracking-wide text-green">
          {new Date(post.date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          {" · "}
          {post.readingTime}
        </p>
        <h3 className="mt-2 font-display text-2xl font-light text-earthy-green">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-earthy-green/75">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
