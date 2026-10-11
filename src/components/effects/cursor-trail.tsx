"use client";

/**
 * CursorTrail.
 *
 * Purpose: a small trail of bubbles that follows the pointer. The animation is CSS
 * (`.trail-bubble`); JavaScript only creates a bubble element at the pointer position and removes
 * it when its animation ends. Active only on wide screens with a precise pointer and when the
 * visitor has not requested reduced motion (see `useAmbientEffects`).
 */
import { useEffect, useRef } from "react";
import { useAmbientEffects } from "@/hooks/use-ambient-effects";

/** Minimum time between two bubbles, so fast mouse moves do not flood the page. */
const SPAWN_INTERVAL_MS = 70;
/** Hard cap on simultaneous bubbles. */
const MAX_BUBBLES = 14;

export function CursorTrail() {
  const enabled = useAmbientEffects();
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!enabled || !layer) return;

    let lastSpawn = 0;

    function handlePointerMove(event: PointerEvent) {
      const now = performance.now();
      if (!layer || now - lastSpawn < SPAWN_INTERVAL_MS) return;
      if (layer.childElementCount >= MAX_BUBBLES) return;
      lastSpawn = now;

      const bubble = document.createElement("span");
      bubble.className = "trail-bubble";
      bubble.style.left = `${event.clientX}px`;
      bubble.style.top = `${event.clientY}px`;
      bubble.style.setProperty("--size", `${4 + Math.random() * 6}px`);
      bubble.addEventListener("animationend", () => bubble.remove(), { once: true });
      layer.appendChild(bubble);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      layer.replaceChildren();
    };
  }, [enabled]);

  return (
    <div ref={layerRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-50" />
  );
}
