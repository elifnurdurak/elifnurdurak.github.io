/**
 * AboutSection (sunlight zone, 10 m).
 *
 * Purpose: who the owner is. Combines the about text, the key numbers, the career timeline and
 * the iceberg illustration (psychology: what we see versus what lies beneath).
 */
import { Iceberg } from "@/components/effects/illustrations";
import { GlassCard } from "@/components/ui/glass-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { stats } from "@/content/case-studies";
import { depthZones } from "@/content/depth-zones";
import { education, experience, profile } from "@/content/profile";
import { sectionCopy } from "@/content/sections";
import { formatDateRange } from "@/lib/format-date";

export function AboutSection() {
  const zone = depthZones[1];
  const copy = sectionCopy.about;

  return (
    <div id="about">
      <Eyebrow>
        {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
      </Eyebrow>
      <SectionHeading id="about-heading">{copy.heading}</SectionHeading>

      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed">{profile.about}</p>

          <ul className="mt-8 grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <li key={stat.label}>
                <GlassCard tone="light" className="p-4 text-center">
                  <p className="font-serif text-3xl font-semibold">{stat.value}</p>
                  <p className="mt-1 text-xs">{stat.label}</p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delayMs={150}>
          <Iceberg visibleLabel={copy.icebergVisible} hiddenLabel={copy.icebergHidden} />
        </Reveal>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <h3 className="mb-6 font-serif text-2xl font-semibold">{copy.experienceHeading}</h3>
          <ol className="space-y-4">
            {experience.map((entry) => (
              <li key={entry.id}>
                <GlassCard tone="light" className="p-5">
                  <p className="text-xs opacity-80">
                    {formatDateRange(entry.startDate, entry.endDate, copy.ongoing)}
                  </p>
                  <p className="mt-1 font-medium">{entry.role}</p>
                  <p className="text-sm opacity-90">
                    {entry.organization}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  {entry.summary ? <p className="mt-2 text-sm">{entry.summary}</p> : null}
                </GlassCard>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delayMs={150}>
          <h3 className="mb-6 font-serif text-2xl font-semibold">{copy.educationHeading}</h3>
          <ul className="space-y-4">
            {education.map((entry) => (
              <li key={entry.institution}>
                <GlassCard tone="light" className="p-5">
                  <p className="text-xs opacity-80">
                    {entry.startYear} – {entry.endYear}
                  </p>
                  <p className="mt-1 font-medium">{entry.institution}</p>
                  <p className="text-sm">{entry.degree}</p>
                </GlassCard>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
