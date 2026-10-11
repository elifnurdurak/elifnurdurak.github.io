/**
 * ContactSection (abyss, 1000 m).
 *
 * Purpose: the deepest point of the page and the final call to action. The main button pulses with
 * a bioluminescent glow (the concept's "finding your own light in the dark").
 */
import { Button } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { depthZones } from "@/content/depth-zones";
import { profile } from "@/content/profile";
import { sectionCopy } from "@/content/sections";

export function ContactSection() {
  const zone = depthZones[6];
  const copy = sectionCopy.contact;

  return (
    <div className="mx-auto max-w-2xl py-12 text-center">
      <div className="flex justify-center">
        <Eyebrow>
          {zone.depthMeters} {sectionCopy.common.meters} · {zone.label}
        </Eyebrow>
      </div>
      <h2 id="contact-heading" className="font-serif text-4xl font-semibold sm:text-6xl">
        {copy.heading}
      </h2>
      <p className="mt-6 text-lg leading-relaxed">{copy.body}</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Button href={profile.links.linkedin} glow>
          {copy.primaryCta}
        </Button>
        <Button href={profile.links.github} variant="ghost">
          {copy.secondaryCta}
        </Button>
      </div>
    </div>
  );
}
