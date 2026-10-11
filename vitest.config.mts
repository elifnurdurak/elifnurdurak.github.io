/**
 * Vitest configuration.
 *
 * Purpose: run unit and component tests in a jsdom browser-like environment.
 * Path alias `@/*` mirrors tsconfig.json so tests import code the same way the app does.
 * (`.mts` extension: this file uses ES module syntax while package.json is CommonJS.)
 */
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    globals: false,
  },
});
