"use client";

/**
 * DepthGauge.
 *
 * Purpose: fixed side indicator that shows how deep the visitor is (0 m -> 1000 m) and which
 * zone they are in. It is purely informational (hidden from screen readers; every section has its
 * own heading) and it never animates anything: it only writes the current number, label and
 * marker position into the DOM as the page scrolls.
 *
 * Why refs instead of state: the values change on every scroll frame; updating the DOM directly
 * avoids re-rendering React sixty times a second.
 */
import { useEffect, useRef } from "react";
import { depthWithinZone, type DepthZone } from "@/lib/depth";

interface DepthGaugeProps {
  zones: readonly DepthZone[];
  /** Unit label, e.g. "m". */
  unit: string;
  /** Accessible name for the whole gauge. */
  label: string;
}

export function DepthGauge({ zones, unit, label }: DepthGaugeProps) {
  const meterRef = useRef<HTMLSpanElement>(null);
  const zoneNameRef = useRef<HTMLSpanElement>(null);
  const markerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const maxDepth = zones[zones.length - 1].depthMeters;
    let frameId = 0;

    function render() {
      frameId = 0;
      const viewportMiddle = window.innerHeight / 2;

      // Find the last zone whose section top has passed the middle of the viewport.
      let activeIndex = 0;
      let localProgress = 0;
      for (let index = 0; index < zones.length; index += 1) {
        const section = document.querySelector<HTMLElement>(
          `[data-depth-zone="${zones[index].id}"]`,
        );
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top > viewportMiddle && index > 0) break;
        activeIndex = index;
        localProgress = (viewportMiddle - rect.top) / Math.max(rect.height, 1);
      }
      const depth = depthWithinZone(activeIndex, localProgress, zones);

      if (meterRef.current) meterRef.current.textContent = String(Math.round(depth));
      if (zoneNameRef.current) zoneNameRef.current.textContent = zones[activeIndex].label;
      if (markerRef.current) markerRef.current.style.top = `${(depth / maxDepth) * 100}%`;
    }

    // Coalesce bursts of scroll events into one update per animation frame.
    function scheduleRender() {
      if (frameId === 0) frameId = window.requestAnimationFrame(render);
    }

    render();
    window.addEventListener("scroll", scheduleRender, { passive: true });
    window.addEventListener("resize", scheduleRender);
    return () => {
      window.removeEventListener("scroll", scheduleRender);
      window.removeEventListener("resize", scheduleRender);
      if (frameId !== 0) window.cancelAnimationFrame(frameId);
    };
  }, [zones]);

  return (
    <aside
      aria-hidden="true"
      data-testid="depth-gauge"
      className="pointer-events-none fixed right-3 bottom-4 z-40 flex items-center gap-3 lg:top-1/2 lg:bottom-auto lg:-translate-y-1/2"
    >
      <span className="sr-only">{label}</span>
      <div className="bg-water-abyss/75 text-sand rounded-xl px-3 py-2 text-right backdrop-blur">
        <p className="font-serif text-2xl leading-none tabular-nums">
          <span ref={meterRef}>0</span>
          <span className="ml-1 text-sm">{unit}</span>
        </p>
        <p className="text-glow mt-1 text-xs">
          <span ref={zoneNameRef}>{zones[0].label}</span>
        </p>
      </div>
      {/* The vertical track only fits on large screens; phones show just the compact readout. */}
      <div className="relative hidden h-64 w-1 rounded-full bg-white/30 lg:block">
        <span
          ref={markerRef}
          className="bg-coral absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-[0_0_12px_2px_rgb(255_111_97/0.7)]"
          style={{ top: "0%" }}
        />
      </div>
    </aside>
  );
}
