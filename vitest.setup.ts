/**
 * Vitest global setup.
 *
 * Purpose: registers jest-dom matchers (e.g. `toBeInTheDocument`) and unmounts rendered components
 * after every test. Why the manual cleanup: Testing Library only auto-cleans when Vitest globals are
 * enabled, and this project keeps them off for explicit imports.
 */
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
