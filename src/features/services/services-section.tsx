/**
 * ServicesSection (coral reef, 40 m).
 *
 * Purpose: areas of expertise as cards, with kelp and coral silhouettes swaying behind them.
 * The reef metaphor: strong organisations, like reefs, grow slowly and sturdily.
 */
import { Coral, Kelp } from "@/components/effects/illustrations";
import { Parallax } from "@/components/effects/parallax";
import { Eyebrow } from "@/components/ui/eyebrow";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { depthZones } from "@/content/depth-zones";
import { sectionCopy } from "@/content/sections";
import { services } from "@/content/services";

export function ServicesSection() {
  const zone = depthZones[2];
  const copy = sectionCopy.services;

  return (
    <>
      {/* Decorative reef layers behind the content; each moves at its own parallax speed. */}
      <Parallax from={90} to={-90} className="text-glow/30 absolute -bottom-4 left-[4%] w-24">
        <Kelp />
      </Parallax>
      <Parallax from={50} to={-50} className="text-coral/40 absolute -bottom-2 left-[12%] w-32">
        <Coral delay={1.5} />
      </Parallax>
      <Parallax from={120} to={-120} className="text-glow/25 absolute right-[6%] -bottom-6 w-28">
        <Kelp delay={2.5} />
      </Parallax>
      <Parallax from={70} to={-70} className="text-coral/35 absolute right-[16%] -bottom-2 w-36">
        <Coral delay={3} />
      </Parallax>

      <Eyebrow>
        {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
      </Eyebrow>
      <SectionHeading id="services-heading" intro={copy.intro}>
        {copy.heading}
      </SectionHeading>

      <ul className="grid gap-6 sm:grid-cols-2">
        {services.map((service, index) => (
          <li key={service.id}>
            <Reveal delayMs={index * 100}>
              <GlassCard floatOnHover className="h-full">
                <h3 className="font-serif text-2xl font-semibold">{service.title}</h3>
                <p className="mt-3 leading-relaxed">{service.description}</p>
              </GlassCard>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}
