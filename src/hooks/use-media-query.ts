/**
 * Media query hook.
 *
 * Purpose: subscribe a component to a CSS media query (for example reduced motion or screen
 * width) and re-render when it changes. Uses `useSyncExternalStore`, the React-recommended way
 * to read browser state, which avoids hydration mismatches.
 */
import { useSyncExternalStore } from "react";

/** Server and first-render fallback. `false` means "feature not detected" (safe, effects stay off). */
const SERVER_SNAPSHOT = false;

export function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const mediaQueryList = window.matchMedia(query);
      mediaQueryList.addEventListener("change", onChange);
      return () => mediaQueryList.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    () => SERVER_SNAPSHOT,
  );
}
