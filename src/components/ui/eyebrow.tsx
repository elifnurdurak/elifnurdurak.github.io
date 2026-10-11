/**
 * Eyebrow.
 *
 * Purpose: small uppercase label above a heading (for example "40 m · Mercan Resifi").
 * It always sits on a dark pill so the tiny text keeps good contrast on any zone colour.
 */
import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="bg-water-abyss/75 text-glow mb-4 inline-flex rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.2em] uppercase backdrop-blur">
      {children}
    </p>
  );
}
