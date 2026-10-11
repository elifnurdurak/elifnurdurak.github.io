/**
 * CasesSection (deep water, 500 m).
 *
 * Purpose: highlights ("deep stories") as cards linking to their own detail pages.
 */
import Link from "next/link";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/case-studies";
import { depthZones } from "@/content/depth-zones";
import { sectionCopy } from "@/content/sections";

export function CasesSection() {
  const zone = depthZones[4];
  const copy = sectionCopy.cases;

  return (
    <>
      <Eyebrow>
        {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
      </Eyebrow>
      <SectionHeading id="cases-heading" intro={copy.intro}>
        {copy.heading}
      </SectionHeading>

      <ul className="grid gap-6 md:grid-cols-3">
        {caseStudies.map((study, index) => (
          <li key={study.slug}>
            <Reveal delayMs={index * 120} className="h-full">
              <GlassCard floatOnHover className="flex h-full flex-col">
                <p className="text-glow text-xs">{study.year}</p>
                <h3 className="mt-2 font-serif text-2xl font-semibold">{study.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed">{study.summary}</p>
                <Link
                  href={`/case-studies/${study.slug}/`}
                  className="text-glow focus-visible:outline-glow mt-6 underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4"
                >
                  {copy.readMore}
                  <span className="sr-only"> : {study.title}</span>
                </Link>
              </GlassCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
