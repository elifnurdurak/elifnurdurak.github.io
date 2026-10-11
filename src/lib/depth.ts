/**
 * Depth math.
 *
 * Purpose: pure helpers that convert scroll progress into a depth in meters and find which
 * zone that depth belongs to. Kept free of React and the DOM so they are trivial to test.
 */

export interface DepthZone {
  /** Stable identifier used in code (never shown to users). */
  readonly id: string;
  /** Depth in meters at which this zone starts. */
  readonly depthMeters: number;
  /** Turkish name shown in the UI. */
  readonly label: string;
}

/** Restricts `value` to the inclusive range [min, max]. */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Converts overall scroll progress (0 = top, 1 = bottom) into a depth in meters.
 *
 * Why piecewise: zones are laid out with equal scroll length but their depths are not evenly
 * spaced (0, 10, 40, 200, ...). Interpolating between neighbouring zone depths makes the
 * gauge arrive exactly on each zone's depth as that section reaches the viewport.
 */
export function depthAtProgress(progress: number, zones: readonly DepthZone[]): number {
  if (zones.length === 0) {
    throw new Error("depthAtProgress requires at least one zone");
  }
  if (zones.length === 1) {
    return zones[0].depthMeters;
  }

  const lastZoneIndex = zones.length - 1;
  const position = clamp(progress, 0, 1) * lastZoneIndex;
  // Why Math.min: at progress = 1 the position equals lastZoneIndex, so we must still
  // interpolate inside the final segment instead of reading past the array.
  const fromIndex = Math.min(Math.floor(position), lastZoneIndex - 1);
  const segmentProgress = position - fromIndex;

  const from = zones[fromIndex].depthMeters;
  const to = zones[fromIndex + 1].depthMeters;
  return from + (to - from) * segmentProgress;
}

/**
 * Depth for a position *inside* a known zone.
 *
 * Purpose: the depth gauge watches each real section on the page, so it knows the active zone
 * index and how far through that section the viewport is (0..1). Interpolating toward the next
 * zone's depth keeps the gauge exact even when sections have very different heights.
 */
export function depthWithinZone(
  zoneIndex: number,
  localProgress: number,
  zones: readonly DepthZone[],
): number {
  const zone = zones[zoneIndex];
  if (!zone) {
    throw new Error(`depthWithinZone: no zone at index ${zoneIndex}`);
  }
  const next = zones[zoneIndex + 1];
  // The last zone has nothing below it, so it stays at its own depth.
  if (!next) {
    return zone.depthMeters;
  }
  return zone.depthMeters + (next.depthMeters - zone.depthMeters) * clamp(localProgress, 0, 1);
}

/** Returns the deepest zone whose start depth is at or above the given depth. */
export function zoneAtDepth(depthMeters: number, zones: readonly DepthZone[]): DepthZone {
  if (zones.length === 0) {
    throw new Error("zoneAtDepth requires at least one zone");
  }

  let active = zones[0];
  for (const zone of zones) {
    if (zone.depthMeters <= depthMeters) {
      active = zone;
    }
  }
  return active;
}
