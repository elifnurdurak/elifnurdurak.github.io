/**
 * Bubbles.
 *
 * Purpose: ambient layer of bubbles rising through the viewport. Pure CSS animation (`.bubble` in
 * globals.css); this component only places the bubbles.
 *
 * Why a fixed list instead of Math.random(): random values would differ between the server render
 * and the browser and cause a hydration mismatch. Hidden on phones and for reduced motion via CSS.
 */

interface BubbleSpec {
  /** Horizontal position in percent of the viewport width. */
  left: number;
  /** Diameter in pixels. */
  size: number;
  /** Seconds for one trip from bottom to top. */
  duration: number;
  /** Negative delay starts the bubble mid-journey, so the screen is never empty on load. */
  delay: number;
}

const BUBBLES: readonly BubbleSpec[] = [
  { left: 4, size: 10, duration: 22, delay: -3 },
  { left: 11, size: 18, duration: 30, delay: -14 },
  { left: 19, size: 8, duration: 19, delay: -7 },
  { left: 27, size: 14, duration: 26, delay: -20 },
  { left: 35, size: 22, duration: 34, delay: -9 },
  { left: 43, size: 9, duration: 21, delay: -16 },
  { left: 51, size: 16, duration: 28, delay: -2 },
  { left: 58, size: 12, duration: 24, delay: -11 },
  { left: 66, size: 20, duration: 32, delay: -25 },
  { left: 73, size: 8, duration: 18, delay: -5 },
  { left: 81, size: 15, duration: 27, delay: -18 },
  { left: 88, size: 11, duration: 23, delay: -8 },
  { left: 94, size: 19, duration: 31, delay: -22 },
];

export function Bubbles() {
  return (
    <div
      aria-hidden="true"
      className="bubbles-layer pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {BUBBLES.map((bubble) => (
        <span
          key={`${bubble.left}-${bubble.size}`}
          className="bubble"
          style={
            {
              "--left": `${bubble.left}%`,
              "--size": `${bubble.size}px`,
              "--duration": `${bubble.duration}s`,
              "--delay": `${bubble.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
