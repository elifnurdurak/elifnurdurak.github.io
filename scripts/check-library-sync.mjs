/**
 * Library documentation sync check.
 *
 * Purpose: guarantee that `library.md` documents exactly the packages declared in
 * `package.json` (same names, same pinned versions). Run via `npm run check:library`
 * and as part of `npm run verify`.
 *
 * Expected `library.md` format, one block per package:
 *
 *   ### `package-name`
 *   - **Version:** 1.2.3
 *
 * Exit code 0 = in sync, 1 = drift detected (details are printed).
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const rootDir = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Reads direct dependencies (runtime + dev) from package.json as a name -> version map. */
function readDeclaredPackages() {
  const pkg = JSON.parse(readFileSync(join(rootDir, "package.json"), "utf8"));
  return { ...pkg.dependencies, ...pkg.devDependencies };
}

/** Parses `library.md` into a name -> documented version map. */
function readDocumentedPackages() {
  const markdown = readFileSync(join(rootDir, "library.md"), "utf8");
  const documented = {};
  let currentName = null;

  for (const line of markdown.split(/\r?\n/)) {
    const heading = line.match(/^### `([^`]+)`/);
    if (heading) {
      currentName = heading[1];
      documented[currentName] = null;
      continue;
    }
    const version = line.match(/^- \*\*Version:\*\* (\S+)/);
    if (version && currentName) {
      documented[currentName] = version[1];
    }
  }
  return documented;
}

const declared = readDeclaredPackages();
const documented = readDocumentedPackages();
const problems = [];

for (const [name, version] of Object.entries(declared)) {
  if (!(name in documented)) {
    problems.push(`Missing in library.md: ${name}@${version}`);
  } else if (documented[name] !== version) {
    problems.push(
      `Version mismatch for ${name}: package.json=${version}, library.md=${documented[name]}`,
    );
  }
}

for (const name of Object.keys(documented)) {
  if (!(name in declared)) {
    problems.push(`Documented but not in package.json: ${name}`);
  }
}

if (problems.length > 0) {
  console.error("library.md is out of sync with package.json:\n");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`library.md is in sync (${Object.keys(declared).length} packages).`);
