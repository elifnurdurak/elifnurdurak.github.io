# Library Reference

Every direct dependency of this project, why it exists, and what to watch out for.

**Sync rule:** whenever a package is added, upgraded or removed in `package.json`, update this file in the
same change. `npm run check:library` fails if names or versions drift apart.

**Install policy:** exact versions only (no `^` / `~`), verified with `npm view <pkg> version license peerDependencies engines`
before install, then `npm audit` and `npm ls` after install.

## Licensing and review policy (owner decision, 2026-10-11)

Applies to **fonts, icons, animations and animation libraries** (and to npm packages in general).

1. **Free and open-source licenses only.** Allowed: OFL-1.1 (fonts), MIT, Apache-2.0, ISC, BSD-2/3-Clause,
   CC0, and CC-BY (only with attribution recorded here). **Not allowed:** paid or trial assets, "free for
   personal use" licenses, and "no charge but not open source" licenses (this is why GSAP was removed).
2. **Owner review before use.** Nothing in these categories is installed, downloaded or added to the site
   until the owner has seen the proposal (name, license, source link, preview or description) and approved it.
3. **Record every asset here** in the same change that adds it: name, version, license, source URL, where it
   is used. Fonts and icons are not npm packages, so they are listed in
   [Fonts, icons and animation assets](#fonts-icons-and-animation-assets) instead of being checked by
   `npm run check:library`.
4. **Self-host where possible** (no runtime requests to third-party servers): `next/font` downloads fonts at
   build time and serves them from our own domain.
5. **Verify the license at the source** (the project's own `LICENSE`/`OFL.txt`), not only a website listing.

Last audit: 2026-10-11. Production dependencies: **0 vulnerabilities**.
Dev dependencies: 5 advisories, all one chain (see [Known advisories](#known-advisories)).

Contents: [Runtime](#runtime-dependencies) · [Development](#development-dependencies) · [Known advisories](#known-advisories)

---

## Runtime dependencies

### `next`

- **Version:** 16.4.0
- **Purpose:** React framework: App Router, build pipeline and static export (`output: "export"`).
- **Why:** The requested routing solution. Static export lets us host on GitHub Pages with no server.
- **License:** MIT
- **Compatibility:** Node >= 20.9 (we run 24.x); peer React ^18.2 or ^19.
- **Used in:** `next.config.ts`, everything under `src/app/`.
- **Added:** 2026-10-11

### `react`

- **Version:** 19.3.0
- **Purpose:** UI library for components and hooks.
- **Why:** The requested UI library; required by Next.js.
- **License:** MIT
- **Used in:** all `.tsx` files.
- **Added:** 2026-10-11

### `react-dom`

- **Version:** 19.3.0
- **Purpose:** Renders React components in the browser and during static HTML generation.
- **Why:** Required peer of React for web apps. Must always match the `react` version.
- **License:** MIT
- **Used in:** loaded implicitly by Next.js.
- **Added:** 2026-10-11

> **Animation policy (owner decision, 2026-10-11):** no animation library. GSAP and Motion were
> evaluated and removed before use. All animation is plain CSS (keyframes, transitions and CSS
> scroll-driven animations). Small bits of JavaScript only update state (for example the depth
> gauge number) and never animate anything themselves.

---

## Development dependencies

### `typescript`

- **Version:** 5.9.3
- **Purpose:** Static typing for all source files.
- **Why:** Requested. Catches errors at build time and documents data shapes.
- **License:** Apache-2.0
- **Compatibility note:** Pinned to the 5.x line used by the Next.js template. TypeScript 7.0.2 exists; evaluate it only after confirming Next.js, ESLint and Vitest support it.
- **Used in:** `tsconfig.json`, `npm run typecheck`.
- **Added:** 2026-10-11

### `@types/node`

- **Version:** 24.19.2
- **Purpose:** Type definitions for Node.js APIs used in config files and scripts.
- **Why:** Matches the Node 24 runtime. Vitest 5 and jsdom 30 require `@types/node` ^22 or >=24.
- **License:** MIT
- **Used in:** `next.config.ts`, `vitest.config.ts`, `scripts/`.
- **Added:** 2026-10-11

### `@types/react`

- **Version:** 19.3.0
- **Purpose:** Type definitions for React.
- **Why:** Required for typed components; kept in step with `react`.
- **License:** MIT
- **Used in:** all `.tsx` files.
- **Added:** 2026-10-11

### `@types/react-dom`

- **Version:** 19.3.0
- **Purpose:** Type definitions for React DOM.
- **Why:** Required for typed DOM rendering APIs; kept in step with `react-dom`.
- **License:** MIT
- **Used in:** typing only.
- **Added:** 2026-10-11

### `tailwindcss`

- **Version:** 4.3.3
- **Purpose:** Utility-first CSS framework; design tokens are defined in `@theme` inside `src/app/globals.css`.
- **Why:** Requested utility-class approach; gives a consistent, reviewable styling vocabulary.
- **License:** MIT
- **Used in:** `src/app/globals.css`, class names across all components.
- **Added:** 2026-10-11

### `@tailwindcss/turbopack`

- **Version:** 4.3.3
- **Purpose:** Compiles Tailwind CSS inside Next.js's Turbopack bundler.
- **Why:** Installed and configured by the official `create-next-app` template; must match `tailwindcss`.
- **License:** MIT (published by tailwindlabs, repository `tailwindlabs/tailwindcss`)
- **Used in:** `next.config.ts` (`turbopack.rules`).
- **Added:** 2026-10-11

### `eslint`

- **Version:** 9.39.5
- **Purpose:** Static analysis to enforce code quality rules.
- **Why:** Code review quality; catches bugs and style drift automatically.
- **License:** MIT
- **Security note:** npm reports this 9.x release as deprecated (end of support). ESLint 10.12.0 exists, but `eslint-config-next` 16.4.0 declares support for `>=9`; upgrade after verifying `npm run lint` still passes.
- **Used in:** `eslint.config.mjs`, `npm run lint`.
- **Added:** 2026-10-11

### `eslint-config-next`

- **Version:** 16.4.0
- **Purpose:** Official Next.js lint rules (core web vitals, TypeScript).
- **Why:** Enforces React and Next.js best practices; must match the `next` version.
- **License:** MIT
- **Security note:** Source of the dev-only advisory chain described under [Known advisories](#known-advisories).
- **Used in:** `eslint.config.mjs`.
- **Added:** 2026-10-11

### `sharp`

- **Version:** 0.35.5
- **Purpose:** Fast image processing used by `scripts/optimize-images.mjs`: resize, crop, re-encode and strip metadata (GPS location, device info) from photos before they are committed.
- **Why:** The static export has no image optimizer, so photos must be prepared by hand. Also removes private metadata from public photos.
- **License:** Apache-2.0. The bundled libvips binaries (`@img/sharp-libvips-*`) are LGPL-3.0, which is fine for a build-time tool whose binaries are not shipped with the site.
- **Compatibility:** Node >= 20.9; prebuilt native binaries for Windows, macOS and Linux install automatically as optional dependencies.
- **Used in:** `scripts/optimize-images.mjs` only. It is a development tool and never reaches the published site.
- **Added:** 2026-10-11

### `prettier`

- **Version:** 3.9.10
- **Purpose:** Automatic code formatter.
- **Why:** One consistent style removes formatting noise from code reviews.
- **License:** MIT
- **Used in:** `.prettierrc.json`, `npm run format`.
- **Added:** 2026-10-11

### `prettier-plugin-tailwindcss`

- **Version:** 0.8.1
- **Purpose:** Sorts Tailwind utility classes in a canonical order.
- **Why:** Keeps long class lists predictable and diffs small.
- **License:** MIT
- **Compatibility:** peer Prettier ^3; Node >= 20.19.
- **Used in:** `.prettierrc.json`.
- **Added:** 2026-10-11

### `vitest`

- **Version:** 5.0.3
- **Purpose:** Test runner for unit and component tests.
- **Why:** Fast, TypeScript-native, works with the Vite ecosystem.
- **License:** MIT
- **Compatibility:** requires Node ^22.12 or ^24 or >=26; peer `vite` ^6.4, ^7 or ^8.
- **Used in:** `vitest.config.ts`, `src/**/*.test.ts(x)`, `npm run test`.
- **Added:** 2026-10-11

### `vite`

- **Version:** 8.3.4
- **Purpose:** Bundler used internally by Vitest for tests (not used for the production build; Next.js uses Turbopack).
- **Why:** Required peer of Vitest and of `@vitejs/plugin-react` 6 (which needs Vite ^8).
- **License:** MIT
- **Used in:** `vitest.config.ts`.
- **Added:** 2026-10-11

### `@vitejs/plugin-react`

- **Version:** 6.1.2
- **Purpose:** Lets Vitest compile JSX/TSX in tests.
- **Why:** Needed to test React components.
- **License:** MIT
- **Compatibility:** peer `vite` ^8.
- **Used in:** `vitest.config.ts`.
- **Added:** 2026-10-11

### `jsdom`

- **Version:** 30.1.2
- **Purpose:** Simulated browser DOM so component tests can run in Node.
- **Why:** Required by Testing Library under Vitest.
- **License:** MIT
- **Compatibility:** requires Node ^24.15 or newer (project `engines` enforces >= 24.15.0).
- **Used in:** `vitest.config.ts` (`environment: "jsdom"`).
- **Added:** 2026-10-11

### `@testing-library/react`

- **Version:** 16.3.3
- **Purpose:** Renders components in tests and queries them the way users see them.
- **Why:** Tests behaviour and accessibility instead of implementation details.
- **License:** MIT
- **Compatibility:** peers React ^18 or ^19, `@testing-library/dom` ^10.
- **Used in:** `src/**/*.test.tsx`.
- **Added:** 2026-10-11

### `@testing-library/dom`

- **Version:** 10.4.2
- **Purpose:** Core DOM query utilities used by Testing Library.
- **Why:** Required peer of `@testing-library/react` and `@testing-library/jest-dom`.
- **License:** MIT
- **Used in:** indirectly, through the other Testing Library packages.
- **Added:** 2026-10-11

### `@testing-library/jest-dom`

- **Version:** 7.0.1
- **Purpose:** Readable DOM assertions such as `toBeInTheDocument()`.
- **Why:** Clearer test failures and accessible-state checks.
- **License:** MIT
- **Compatibility:** requires Node >= 22.
- **Used in:** `vitest.setup.ts`.
- **Added:** 2026-10-11

---

## Fonts, icons and animation assets

### Fonts in use

Loaded through `next/font/google` in `src/app/layout.tsx` (downloaded at build time, self-hosted).

| Font     | Role             | License     | Source                                    |
| -------- | ---------------- | ----------- | ----------------------------------------- |
| Fraunces | Headings (serif) | SIL OFL 1.1 | https://github.com/undercasetype/Fraunces |
| Inter    | Body text (sans) | SIL OFL 1.1 | https://github.com/rsms/inter             |

### Fonts proposed, awaiting owner review

License verified against each project's `OFL.txt` in the `google/fonts` repository on 2026-10-11, and
confirmed available in `next/font/google`. **Not installed or used yet.**

| Font                | Suggested role                           | License     | Source                                         |
| ------------------- | ---------------------------------------- | ----------- | ---------------------------------------------- |
| Instrument Serif    | Headings (modern, elegant display serif) | SIL OFL 1.1 | https://github.com/Instrument/instrument-serif |
| Bricolage Grotesque | Headings (expressive modern sans)        | SIL OFL 1.1 | https://github.com/ateliertriay/bricolage      |
| Geist               | Body text (clean, modern sans)           | SIL OFL 1.1 | https://github.com/vercel/geist-font           |
| Plus Jakarta Sans   | Body text (friendly, modern sans)        | SIL OFL 1.1 | https://github.com/tokotype/PlusJakartaSans    |

### Icons

None from third parties. The decorative illustrations (kelp, coral, iceberg, symbiosis, wave) are original inline SVG
written for this project in `src/components/effects/illustrations.tsx`.

### Animation

No animation library. All motion is plain CSS in `src/app/globals.css`. If a library is ever considered, it
needs a proposal and owner approval under the policy above first.

---

## CI/CD actions

Used only in `.github/workflows/deploy.yml`. All are official GitHub actions pinned to commit SHAs.
Verified 2026-10-11 against the latest release tags.

| Action                          | Version | Purpose                                      |
| ------------------------------- | ------- | -------------------------------------------- |
| `actions/checkout`              | v7.0.1  | Fetches the repository code                  |
| `actions/setup-node`            | v7.1.0  | Installs Node.js 24 and caches npm downloads |
| `actions/configure-pages`       | v6.0.0  | Prepares the GitHub Pages deployment         |
| `actions/upload-pages-artifact` | v5.0.0  | Packages `out/` for Pages                    |
| `actions/deploy-pages`          | v5.0.1  | Publishes the package to GitHub Pages        |

When updating an action, look up the new tag's commit SHA (`git ls-remote --tags <repo-url>`), update the pin and this table together.

---

## Known advisories

| Advisory                                                                                                                                      | Package chain                                                                                   | Scope                                                                                                | Status                                                                                                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) (high): `braces` stack-exhaustion DoS on deeply nested glob patterns | `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces@3.0.3` | **Development only** (lint tooling). Not part of the shipped site; `npm audit --omit=dev` reports 0. | No patched `braces` release exists (3.0.3 is the latest). `npm audit fix --force` would downgrade `eslint-config-next` to v14 and is **not** applied. Re-check on each dependency update. |

Run `npm audit --omit=dev` before every release; it must report 0 vulnerabilities.
