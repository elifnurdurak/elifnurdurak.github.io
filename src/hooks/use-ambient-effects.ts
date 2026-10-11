/**
 * Ambient effects gate.
 *
 * Purpose: single decision point for decorative effects (bubbles, cursor trail, parallax).
 * Effects run only on wide screens with a precise pointer and when the visitor has NOT asked
 * for reduced motion. Phones and reduced-motion users get the calm, static version.
 */
import { useMediaQuery } from "@/hooks/use-media-query";

export function useAmbientEffects(): boolean {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const isDesktop = useMediaQuery("(min-width: 768px) and (pointer: fine)");
  return isDesktop && !prefersReducedMotion;
}

/** True when the visitor prefers reduced motion. Use this to disable non-essential animation. */
export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
