# Portfolio: "Derinlere Dalış"

Personal portfolio built as an underwater scroll journey: the deeper you scroll, the deeper you dive.
Static site built with Next.js (App Router), React, TypeScript and Tailwind CSS.

## Requirements

- Node.js >= 24.15
- npm >= 11

## Commands

| Command                 | What it does                                                    |
| ----------------------- | --------------------------------------------------------------- |
| `npm install`           | Installs dependencies (exact versions from `package-lock.json`) |
| `npm run dev`           | Starts the local dev server at http://localhost:3000            |
| `npm run build`         | Builds the static site into `out/`                              |
| `npm run lint`          | Checks code quality with ESLint                                 |
| `npm run typecheck`     | Checks types with TypeScript                                    |
| `npm run test`          | Runs the unit and component tests                               |
| `npm run format`        | Formats all files with Prettier                                 |
| `npm run check:library` | Verifies `library.md` matches `package.json`                    |
| `npm run verify`        | Runs all of the above checks and the build                      |

## Project structure

```
src/
  app/          Next.js routes and global styles (design tokens live in globals.css)
  components/   Reusable UI (ui/), depth system (depth/), visual effects (effects/)
  features/     One folder per page section (hero, about, services, ...)
  hooks/        Reusable React hooks
  lib/          Pure helpers (framework-free, unit tested)
  content/      All user-facing copy and data (Turkish); code stays English
public/images/  Photos by category, see docs/images.md
scripts/        Maintenance scripts
```

## Conventions

- **Language:** all code, identifiers, file names, paths and comments are English. Only visitor-facing
  text (kept in `src/content/`) is Turkish.
- **Comments:** every file starts with a header comment explaining its purpose; inline comments
  explain _why_, not _what_.
- **Dependencies:** pinned to exact versions and documented in [library.md](library.md). Update that
  file in the same change as `package.json` (`npm run check:library` enforces it).
- **Security:** run `npm audit --omit=dev` before each release; it must report 0 vulnerabilities.
