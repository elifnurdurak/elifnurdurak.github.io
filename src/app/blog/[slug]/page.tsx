/**
 * Blog post page (`/blog/<slug>/`).
 *
 * Purpose: one article. Pages are generated at build time for every post; unknown slugs return 404
 * because static hosting has no server to render them on demand.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/ui/page-shell";
import { blogPosts } from "@/content/posts";
import { sectionCopy } from "@/content/sections";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const post = blogPosts.find((candidate) => candidate.slug === slug);
  if (!post) notFound();

  return (
    <PageShell>
      <article>
        <time dateTime={post.publishedAt} className="text-glow text-sm">
          {post.publishedAt}
        </time>
        <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">{post.title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <Link
        href="/blog/"
        className="text-glow focus-visible:outline-glow mt-12 inline-block underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
      >
        {sectionCopy.blog.backToList}
      </Link>
    </PageShell>
  );
}
