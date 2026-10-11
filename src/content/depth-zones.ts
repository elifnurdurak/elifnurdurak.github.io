/**
 * Depth zones of the "Dive" concept.
 *
 * Purpose: declares the ordered zones the visitor scrolls through, from the surface (0 m)
 * to the abyss (1000 m). Order matters: zones must be sorted by ascending `depthMeters`.
 * `label` is user-facing Turkish copy; `id` is the stable code identifier.
 */
import type { DepthZone } from "@/lib/depth";

export const depthZones: readonly DepthZone[] = [
  { id: "surface", depthMeters: 0, label: "Yüzey" },
  { id: "sunlight", depthMeters: 10, label: "Güneş Bölgesi" },
  { id: "reef", depthMeters: 40, label: "Mercan Resifi" },
  { id: "twilight", depthMeters: 200, label: "Alacakaranlık" },
  { id: "deep", depthMeters: 500, label: "Derin Su" },
  { id: "midnight", depthMeters: 800, label: "Gece Bölgesi" },
  { id: "abyss", depthMeters: 1000, label: "Dip" },
];
