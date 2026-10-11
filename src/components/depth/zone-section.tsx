/**
 * ZoneSection.
 *
 * Purpose: wraps one depth zone of the page. It paints the zone's slice of the water gradient and
 * exposes `data-depth-zone` so the depth gauge can find it. Each zone's gradient ends in the colour
 * the next zone starts with, which makes the whole page read as one continuous descent.
 */
import type { ReactNode } from "react";
import { depthZones } from "@/content/depth-zones";

/** Static class strings (Tailwind only generates classes it can see written out in full). */
const zoneStyles: Record<string, string> = {
  surface: "bg-linear-to-b from-water-surface to-water-shallow text-water-deep",
  sunlight: "bg-linear-to-b from-water-shallow to-water-mid text-water-deep",
  reef: "bg-linear-to-b from-water-mid to-water-twilight text-sand",
  twilight: "bg-linear-to-b from-water-twilight to-water-deep text-sand",
  deep: "bg-linear-to-b from-water-deep to-water-abyss text-sand",
  midnight: "bg-water-abyss text-sand",
  abyss: "bg-water-abyss text-sand",
};

interface ZoneSectionProps {
  zoneId: string;
  children: ReactNode;
  /** Extra classes for the inner content wrapper. */
  contentClassName?: string;
  /** Hero-style sections fill the screen instead of using standard vertical padding. */
  fullHeight?: boolean;
}

export function ZoneSection({
  zoneId,
  children,
  contentClassName = "",
  fullHeight = false,
}: ZoneSectionProps) {
  const zone = depthZones.find((candidate) => candidate.id === zoneId);
  if (!zone) {
    throw new Error(`ZoneSection: unknown zone "${zoneId}"`);
  }

  return (
    <section
      data-depth-zone={zone.id}
      className={`relative overflow-hidden ${zoneStyles[zone.id]} ${fullHeight ? "min-h-svh" : ""}`}
    >
      <div
        // `lg:pr-40` reserves room for the fixed depth gauge so it never covers content;
        // on very wide screens the side margin is already large enough.
        className={`relative z-10 mx-auto w-full max-w-6xl px-6 lg:pr-40 2xl:pr-6 ${
          fullHeight ? "flex min-h-svh flex-col justify-center py-24" : "py-24 sm:py-32"
        } ${contentClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
