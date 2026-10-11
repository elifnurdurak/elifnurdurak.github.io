/**
 * Illustrations.
 *
 * Purpose: decorative SVG shapes for the concept's metaphors, animated with CSS only:
 *  - Kelp and coral: the reef (slow, sturdy organisational growth)
 *  - Iceberg: the visible behaviour versus the hidden dynamics (psychology)
 *  - Symbiosis: employee and organisation orbiting in harmony
 * All are `aria-hidden`; any meaning they carry is repeated in real text next to them.
 */

/** A strand of kelp. `delay` offsets the sway so neighbouring strands do not move in sync. */
export function Kelp({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 60 220"
      className={`sway ${className}`}
      style={{ "--sway-delay": `${delay}s` } as React.CSSProperties}
    >
      <path
        d="M30 220 C10 180 50 150 30 110 C12 75 48 50 30 5"
        fill="none"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A branching coral. */
export function Coral({ className = "", delay = 0 }: { className?: string; delay?: number }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 140"
      className={`sway ${className}`}
      style={{ "--sway-delay": `${delay}s`, "--sway-duration": "9s" } as React.CSSProperties}
    >
      <g fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round">
        <path d="M60 140 L60 70" />
        <path d="M60 100 L25 60 L20 25" />
        <path d="M60 85 L95 50 L100 18" />
        <path d="M60 70 L60 20" />
        <path d="M25 60 L45 40" />
      </g>
    </svg>
  );
}

interface IcebergProps {
  visibleLabel: string;
  hiddenLabel: string;
}

/** Iceberg split by a waterline. Labels are real text so the idea is not lost for screen readers. */
export function Iceberg({ visibleLabel, hiddenLabel }: IcebergProps) {
  return (
    <figure className="mx-auto w-full max-w-xs">
      <svg aria-hidden="true" viewBox="0 0 300 380" className="bob w-full">
        <polygon points="105,130 140,62 162,86 190,30 222,95 240,130" fill="#f0eee9" />
        <rect x="0" y="130" width="300" height="2" fill="#7ce0d3" opacity="0.8" />
        <polygon
          points="60,132 240,132 280,210 228,310 150,360 72,300 40,200"
          fill="#005a80"
          opacity="0.85"
        />
        <polygon
          points="105,150 200,150 232,215 190,290 140,320 96,262"
          fill="#00263e"
          opacity="0.6"
        />
      </svg>
      <figcaption className="mt-3 space-y-1 text-center text-sm">
        <span className="block font-medium">{visibleLabel}</span>
        <span className="block opacity-80">{hiddenLabel}</span>
      </figcaption>
    </figure>
  );
}

/** Two overlapping circles slowly orbiting each other: employee and organisation. */
export function Symbiosis({ caption }: { caption: string }) {
  return (
    <figure className="mx-auto w-48">
      <svg aria-hidden="true" viewBox="0 0 200 200" className="orbit w-full">
        <circle cx="75" cy="100" r="55" fill="#7ce0d3" opacity="0.55" />
        <circle cx="125" cy="100" r="55" fill="#ff6f61" opacity="0.5" />
      </svg>
      <figcaption className="mt-3 text-center text-sm">{caption}</figcaption>
    </figure>
  );
}

/** Wave line for the surface. The tile repeats, and `.wave-track` slides it sideways. */
export function Wave() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-16 overflow-hidden"
    >
      <div className="wave-track flex w-[200%]">
        {[0, 1].map((tile) => (
          <svg key={tile} viewBox="0 0 1200 60" preserveAspectRatio="none" className="h-16 w-1/2">
            <path
              d="M0 30 Q150 0 300 30 T600 30 T900 30 T1200 30 V60 H0 Z"
              fill="#7fcad8"
              opacity="0.7"
            />
          </svg>
        ))}
      </div>
    </div>
  );
}
