/**
 * Image preparation script.
 *
 * Purpose: turn a raw photo into a web-ready file before it is committed:
 *   - applies the camera's rotation, then DROPS all metadata (GPS location, device info, dates)
 *   - optionally crops (for example to remove screenshot borders)
 *   - shrinks the longest side to a maximum and re-encodes for a small file size
 *
 * Usage:
 *   node scripts/optimize-images.mjs <input> <output> [--crop left,top,width,height] [--max 2000]
 *
 * The output format follows the output extension (.jpg or .webp). Prints the final size so the
 * caller can add `width`/`height` to `src/content/gallery.ts`.
 */
import { statSync } from "node:fs";
import { extname } from "node:path";
import sharp from "sharp";

const DEFAULT_MAX_SIDE = 2000;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 80;

/** Reads `--name value` from argv, or returns undefined. */
function readOption(args, name) {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
}

async function main() {
  const args = process.argv.slice(2);
  const [input, output] = args;
  if (!input || !output) {
    console.error(
      "Usage: node scripts/optimize-images.mjs <input> <output> [--crop l,t,w,h] [--max 2000]",
    );
    process.exit(1);
  }

  const maxSide = Number(readOption(args, "--max") ?? DEFAULT_MAX_SIDE);
  const cropValue = readOption(args, "--crop");

  // `.rotate()` with no argument applies the EXIF orientation so the photo is upright after the
  // metadata is removed. Output encoders do not write metadata unless asked to.
  let pipeline = sharp(input, { failOn: "error" }).rotate();

  if (cropValue) {
    const [left, top, width, height] = cropValue.split(",").map(Number);
    if ([left, top, width, height].some((part) => !Number.isInteger(part) || part < 0)) {
      throw new Error(`Invalid --crop value "${cropValue}". Expected four whole numbers.`);
    }
    pipeline = pipeline.extract({ left, top, width, height });
  }

  pipeline = pipeline.resize({
    width: maxSide,
    height: maxSide,
    fit: "inside",
    withoutEnlargement: true,
  });

  const extension = extname(output).toLowerCase();
  if (extension === ".webp") {
    pipeline = pipeline.webp({ quality: WEBP_QUALITY });
  } else if (extension === ".jpg" || extension === ".jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else {
    throw new Error(`Unsupported output extension "${extension}". Use .jpg or .webp.`);
  }

  const info = await pipeline.toFile(output);
  const sizeKb = Math.round(statSync(output).size / 1024);
  console.log(`${output}: ${info.width}x${info.height}, ${sizeKb} KB`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
