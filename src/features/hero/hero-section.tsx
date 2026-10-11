/**
 * HeroSection (surface, 0 m).
 *
 * Purpose: opening screen. Shows the name, the one-line pitch and the call to start the dive.
 * Light caustics and a drifting wave line make the surface feel alive (CSS animation only).
 */
import { Wave } from "@/components/effects/illustrations";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { depthZones } from "@/content/depth-zones";
import { heroCopy } from "@/content/site";
import { sectionCopy } from "@/content/sections";

export function HeroSection() {
  const surface = depthZones[0];

  return (
    <>
      <div
        aria-hidden="true"
        className="caustics pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="relative">
        <Eyebrow>
          {surface.depthMeters} {sectionCopy.common.meters} · {surface.label}
        </Eyebrow>
        <p className="mb-3 text-lg">{heroCopy.eyebrow}</p>
        <h1 className="max-w-3xl font-serif text-5xl leading-[1.05] font-semibold sm:text-7xl">
          {heroCopy.heading}
        </h1>
        <p className="mt-6 max-w-xl text-xl leading-relaxed">{heroCopy.tagline}</p>
        <div className="mt-10">
          <Button href="#about" glow>
            {heroCopy.primaryCta}
          </Button>
        </div>
      </div>
      <Wave />
    </>
  );
}
