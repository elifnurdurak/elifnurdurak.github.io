/**
 * ProcessSection (twilight, 200 m).
 *
 * Purpose: the four-step way of working, shown as numbered bubbles on a vertical line, next to the
 * symbiosis illustration (employee and organisation in harmony).
 */
import { Symbiosis } from "@/components/effects/illustrations";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { depthZones } from "@/content/depth-zones";
import { processSteps } from "@/content/process";
import { sectionCopy } from "@/content/sections";

export function ProcessSection() {
  const zone = depthZones[3];
  const copy = sectionCopy.process;

  return (
    <>
      <Eyebrow>
        {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
      </Eyebrow>
      <SectionHeading id="process-heading" intro={copy.intro}>
        {copy.heading}
      </SectionHeading>

      <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <ol className="border-glow/40 relative space-y-10 border-l-2 pl-10">
          {processSteps.map((step, index) => (
            <li key={step.id} className="relative">
              <Reveal delayMs={index * 120}>
                {/* The numbered bubble sits on the line. */}
                <span
                  aria-hidden="true"
                  className="border-glow bg-water-abyss text-glow absolute top-0 -left-[3.6rem] flex size-9 items-center justify-center rounded-full border font-serif"
                >
                  {index + 1}
                </span>
                <h3 className="font-serif text-2xl font-semibold">{step.title}</h3>
                <p className="mt-2 max-w-lg leading-relaxed">{step.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <Reveal delayMs={200}>
          <Symbiosis caption={copy.symbiosisCaption} />
        </Reveal>
      </div>
    </>
  );
}
