/**
 * Blog index page (`/blog/`).
 *
 * Purpose: list of all posts.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/ui/page-shell";
import { blogPosts } from "@/content/posts";
import { sectionCopy } from "@/content/sections";

export const metadata: Metadata = { title: sectionCopy.blog.heading };

export default function BlogIndexPage() {
  return (
    <PageShell>
      <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{sectionCopy.blog.heading}</h1>
      <ul className="mt-10 space-y-8">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <time dateTime={post.publishedAt} className="text-glow text-sm">
              {post.publishedAt}
            </time>
            <h2 className="mt-1 font-serif text-2xl font-semibold">
              <Link href={`/blog/${post.slug}/`} className="hover:text-glow">
                {post.title}
              </Link>
            </h2>
            <p className="mt-2 leading-relaxed">{post.excerpt}</p>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
