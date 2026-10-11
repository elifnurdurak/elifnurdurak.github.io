/**
 * Case study page (`/case-studies/<slug>/`).
 *
 * Purpose: detail page for one highlight. Generated at build time for every entry.
 */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/ui/page-shell";
import { caseStudies } from "@/content/case-studies";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata(
  props: PageProps<"/case-studies/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const study = caseStudies.find((candidate) => candidate.slug === slug);
  return study ? { title: study.title, description: study.summary } : {};
}

export default async function CaseStudyPage(props: PageProps<"/case-studies/[slug]">) {
  const { slug } = await props.params;
  const study = caseStudies.find((candidate) => candidate.slug === slug);
  if (!study) notFound();

  return (
    <PageShell>
      <article>
        <p className="text-glow text-sm">{study.year}</p>
        <h1 className="mt-2 font-serif text-4xl font-semibold sm:text-5xl">{study.title}</h1>
        <div className="mt-8 space-y-5 text-lg leading-relaxed">
          {study.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </PageShell>
  );
}
