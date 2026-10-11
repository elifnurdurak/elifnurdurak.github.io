/**
 * BlogSection and FaqSection (midnight zone, 800 m).
 *
 * Purpose: latest posts as glowing cards, followed by the FAQ. The FAQ uses native <details>
 * elements, so it is keyboard accessible and works without JavaScript.
 */
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { depthZones } from "@/content/depth-zones";
import { faqItems } from "@/content/faq";
import { blogPosts } from "@/content/posts";
import { sectionCopy } from "@/content/sections";

export function BlogAndFaqSection() {
  const zone = depthZones[5];
  const blogCopy = sectionCopy.blog;
  const faqCopy = sectionCopy.faq;

  return (
    <>
      <Eyebrow>
        {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
      </Eyebrow>
      <SectionHeading id="blog-heading" intro={blogCopy.intro}>
        {blogCopy.heading}
      </SectionHeading>

      <ul className="grid gap-6 md:grid-cols-2">
        {blogPosts.map((post) => (
          <li key={post.slug}>
            <Reveal className="h-full">
              <GlassCard floatOnHover className="h-full shadow-[0_0_24px_rgb(124_224_211/0.18)]">
                <time dateTime={post.publishedAt} className="text-glow text-xs">
                  {post.publishedAt}
                </time>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{post.title}</h3>
                <p className="mt-3 leading-relaxed">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="text-glow focus-visible:outline-glow mt-6 inline-block underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {blogCopy.readMore}
                  <span className="sr-only"> : {post.title}</span>
                </Link>
              </GlassCard>
            </Reveal>
          </li>
        ))}
      </ul>

      <div className="mt-24 max-w-3xl">
        <h3 className="mb-6 font-serif text-3xl font-semibold">{faqCopy.heading}</h3>
        <div className="space-y-3">
          {faqItems.map((item) => (
            <Reveal key={item.id}>
              <details className="group border-glow/25 bg-water-abyss/60 open:border-glow/60 rounded-2xl border p-5 backdrop-blur-md">
                <summary className="focus-visible:outline-glow cursor-pointer list-none font-medium focus-visible:outline-2 focus-visible:outline-offset-4">
                  {item.question}
                </summary>
                <p className="mt-3 leading-relaxed">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  );
}
