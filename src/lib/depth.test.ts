/**
 * Tests for depth math helpers.
 *
 * Purpose: lock in the scroll-progress -> depth contract the depth gauge relies on.
 */
import { describe, expect, it } from "vitest";
import { depthZones } from "@/content/depth-zones";
import { clamp, depthAtProgress, depthWithinZone, zoneAtDepth } from "@/lib/depth";

describe("clamp", () => {
  it("keeps values inside the range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(42, 0, 10)).toBe(10);
  });
});

describe("depthAtProgress", () => {
  it("starts at the surface and ends at the abyss", () => {
    expect(depthAtProgress(0, depthZones)).toBe(0);
    expect(depthAtProgress(1, depthZones)).toBe(1000);
  });

  it("clamps out-of-range progress", () => {
    expect(depthAtProgress(-0.5, depthZones)).toBe(0);
    expect(depthAtProgress(3, depthZones)).toBe(1000);
  });

  it("lands exactly on a zone depth at that zone's scroll position", () => {
    // 7 zones -> 6 segments, so zone index 3 (twilight, 200 m) sits at progress 3/6.
    expect(depthAtProgress(3 / 6, depthZones)).toBeCloseTo(200);
  });

  it("interpolates linearly between two zones", () => {
    // Halfway between zone 2 (40 m) and zone 3 (200 m) is 120 m.
    expect(depthAtProgress(2.5 / 6, depthZones)).toBeCloseTo(120);
  });

  it("handles a single zone and rejects an empty list", () => {
    expect(depthAtProgress(0.7, [depthZones[2]])).toBe(40);
    expect(() => depthAtProgress(0.5, [])).toThrow();
  });
});

describe("depthWithinZone", () => {
  it("interpolates toward the next zone", () => {
    // reef (index 2) starts at 40 m, twilight (index 3) at 200 m.
    expect(depthWithinZone(2, 0, depthZones)).toBe(40);
    expect(depthWithinZone(2, 0.5, depthZones)).toBeCloseTo(120);
    expect(depthWithinZone(2, 1, depthZones)).toBe(200);
  });

  it("clamps progress and keeps the last zone fixed", () => {
    expect(depthWithinZone(2, 5, depthZones)).toBe(200);
    expect(depthWithinZone(depthZones.length - 1, 0.5, depthZones)).toBe(1000);
  });

  it("rejects an unknown zone index", () => {
    expect(() => depthWithinZone(99, 0, depthZones)).toThrow();
  });
});

describe("depthZones content", () => {
  it("is sorted by ascending depth with unique ids", () => {
    const depths = depthZones.map((zone) => zone.depthMeters);
    expect([...depths].sort((a, b) => a - b)).toEqual(depths);
    expect(new Set(depthZones.map((zone) => zone.id)).size).toBe(depthZones.length);
  });
});

describe("zoneAtDepth", () => {
  it("returns the matching zone for a depth", () => {
    expect(zoneAtDepth(0, depthZones).id).toBe("surface");
    expect(zoneAtDepth(45, depthZones).id).toBe("reef");
    expect(zoneAtDepth(799, depthZones).id).toBe("deep");
    expect(zoneAtDepth(1000, depthZones).id).toBe("abyss");
  });
});
