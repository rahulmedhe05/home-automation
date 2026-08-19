// Scans the source `products/` folder (CREATED IMAGES + REAL IMAGES), copies
// usable assets into `public/images/products/...`, and writes a generated
// TypeScript data file (`lib/data/product-catalog.generated.ts`) that the
// site's collection pages consume. Re-run this script whenever new product
// photos/renders are dropped into the `products/` folder.
//
// Usage: node scripts/build-product-catalog.mjs

import fs from "fs";
import path from "path";
import { execFileSync } from "child_process";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SRC = path.join(ROOT, "products");
const PUBLIC_IMG = path.join(ROOT, "public", "images", "products");
const OUT_FILE = path.join(ROOT, "lib", "data", "product-catalog.generated.ts");

const IMG_EXT = [".png", ".jpg", ".jpeg"];

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function listImages(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => IMG_EXT.includes(path.extname(f).toLowerCase()))
    .sort();
}

// Source photos/renders come straight off a phone camera or a design tool
// export (multi-MB, several-thousand-px-wide). Downsize + recompress with
// `sips` (macOS built-in) at copy time so the site doesn't ship ~450MB of
// images. PNG renders keep their alpha channel (resized only); JPEG photos
// get re-encoded at a web-friendly quality.
function copyFile(src, destRelative) {
  const dest = path.join(PUBLIC_IMG, destRelative);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const ext = path.extname(dest).toLowerCase();
  try {
    if (ext === ".png") {
      execFileSync("sips", ["-Z", "900", src, "--out", dest], { stdio: "ignore" });
    } else {
      execFileSync(
        "sips",
        ["-Z", "1400", "-s", "formatOptions", "75", src, "--out", dest],
        { stdio: "ignore" }
      );
    }
  } catch {
    fs.copyFileSync(src, dest);
  }
  return "/images/products/" + destRelative.split(path.sep).join("/");
}

// Categorize a studio-render filename into a browsing category, mirroring
// how the module is actually used (fan/dimmer control, socket combo, plain
// switch panel, or an accessory like curtain/doorbell).
function categorize(title) {
  const t = title.toLowerCase();
  if (t.includes("fan") || t.includes("dimmer")) return "Fan & Dimmer Controls";
  if (t.includes("curtain") || t.includes("bell") || t.includes("sensor") || t.includes("usb"))
    return "Accessories";
  if (/^\d+\s*socket/.test(t) || (t.includes("socket") && !t.includes("switch")))
    return "Sockets";
  if (t.includes("socket")) return "Switch & Socket Combos";
  return "Switch Panels";
}

// "12M - 8 Switch 2 Fan.png" -> { module: "12M", title: "8 Switch 2 Fan" }
// "12M_8 Switch 2 Fan.jpg"   -> same
function parseStudioName(filename) {
  const base = path.basename(filename, path.extname(filename));
  const m = base.match(/^([A-Za-z0-9]+M(?:Sq)?)\s*[-_]\s*(.+)$/i);
  if (m) return { module: m[1].toUpperCase(), title: m[2].trim() };
  return { module: null, title: base.trim() };
}

// e.g. "Edge 12M - 8 Switch 2 Fan.png" studio filenames sometimes include
// the series name as a prefix; strip a leading series word if present.
function stripSeriesPrefix(title, seriesWords) {
  let t = title;
  for (const w of seriesWords) {
    const re = new RegExp("^" + w + "\\s+", "i");
    t = t.replace(re, "");
  }
  return t.trim();
}

const SERIES_SOURCES = [
  {
    slug: "touch-panel",
    name: "Touch Panel",
    tagline: "Acrylic & Toughened Glass Faceplate",
    seriesWords: ["Touch"],
    studioDirs: [
      { material: "Acrylic", dir: path.join(SRC, "CREATED IMAGES", "TOUCH PANEL SERIES", "TOUCH - Acrylic Black with Socket") },
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "TOUCH PANEL SERIES", "TOUCH - Glass Black with Socket") },
    ],
    realDirs: [
      { material: "Acrylic", dir: path.join(SRC, "REAL IMAGES", "TOUCH PANEL SERIES", "ACRYLIC") },
      { material: "Glass", dir: path.join(SRC, "REAL IMAGES", "TOUCH PANEL SERIES", "GLASS") },
    ],
    catalogueFile: "https://drive.google.com/file/d/16-mlMLWV7xt3stQx_ilXMA19nAlW0cpE/view?usp=drive_link",
    catalogueName: "Touch Panel Series Catalogue",
  },
  {
    slug: "edge",
    name: "Edge",
    tagline: "Acrylic & Glass with Chrome/Metallic Finish Border",
    seriesWords: ["Edge"],
    studioDirs: [
      { material: "Acrylic", dir: path.join(SRC, "CREATED IMAGES", "EDGE SERIES", "EDGE - Acrylic Black with Socket") },
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "EDGE SERIES", "EDGE - Glass Black with Socket") },
    ],
    realDirs: [
      { material: "Acrylic", dir: path.join(SRC, "REAL IMAGES", "EDGE SERIES", "ACRYLIC") },
      { material: "Glass", dir: path.join(SRC, "REAL IMAGES", "EDGE SERIES", "GLASS") },
    ],
    catalogueFile: "https://drive.google.com/file/d/1Cnqg5WoOp1gRq1VZh6oMiHQVOiyYl2rk/view?usp=drive_link",
    catalogueName: "Edge Series Catalogue",
  },
  {
    slug: "color",
    name: "Color",
    tagline: "Premium Glass & Acrylic Faceplate with RGB Backlight",
    seriesWords: ["Color", "Colour"],
    studioDirs: [
      { material: "Acrylic", dir: path.join(SRC, "CREATED IMAGES", "COLOR EDGE SERIES", "COLOR - Acrylic Black with Socket") },
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "COLOR EDGE SERIES", "COLOR - Glass Black with Socket") },
      { material: "Acrylic", dir: path.join(SRC, "CREATED IMAGES", "COLOR TOUCH PANEL SERIES", "COLOR TOUCH - Acrylic Black with Socket") },
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "COLOR TOUCH PANEL SERIES", "COLOR TOUCH - Glass Black with Socket") },
    ],
    realDirs: [
      { material: "Acrylic", dir: path.join(SRC, "REAL IMAGES", "COLOR EDGE SERIES", "ACRYLIC") },
      { material: "Glass", dir: path.join(SRC, "REAL IMAGES", "COLOR EDGE SERIES", "GLASS") },
    ],
    catalogueFile: "https://drive.google.com/file/d/1bQbLWPmHG7mQg1Dpg1vb_G0w-WJZLQtH/view?usp=drive_link",
    catalogueName: "Color Series Catalogue",
  },
  {
    slug: "royal-edge",
    name: "Royal Edge",
    tagline: "Toughened Glass & Acrylic with Metallic Bezel",
    seriesWords: ["Royal Color Edge", "Royal Edge"],
    studioDirs: [
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "ROYAL EDGE SERIES", "ROYAL EDGE - Glass Black with Socket") },
      { material: "Glass (Color)", dir: path.join(SRC, "CREATED IMAGES", "ROYAL EDGE SERIES", "ROYAL COLOR EDGE - Glass Black with Socket") },
    ],
    realDirs: [
      { material: "Acrylic", dir: path.join(SRC, "REAL IMAGES", "ROYAL EDGE SERIES", "ACRYLIC") },
      { material: "Glass", dir: path.join(SRC, "REAL IMAGES", "ROYAL EDGE SERIES", "GLASS") },
    ],
    catalogueFile: "https://drive.google.com/file/d/1gYh8MKCtOjn3CfYQxWhZXeFSFYxLSCSl/view?usp=drive_link",
    catalogueName: "VARNI Master Catalogue 2026",
  },
  {
    slug: "hotel-dnd",
    name: "Hotel DND",
    tagline: "Capacitive Glass & Acrylic Hospitality Panel",
    seriesWords: ["Hotel"],
    studioDirs: [
      { material: "Acrylic", dir: path.join(SRC, "CREATED IMAGES", "HOTEL DND SERIES", "Acrylic") },
      { material: "Glass", dir: path.join(SRC, "CREATED IMAGES", "HOTEL DND SERIES", "Glass") },
    ],
    realDirs: [
      { material: "Mixed", dir: path.join(SRC, "REAL IMAGES", "HOTEL DND SERIES") },
    ],
    catalogueFile: "https://drive.google.com/file/d/1gYh8MKCtOjn3CfYQxWhZXeFSFYxLSCSl/view?usp=drive_link",
    catalogueName: "VARNI Master Catalogue 2026",
  },
  {
    slug: "vintage",
    name: "Vintage",
    tagline: "Toughened Glass & Classic Heritage Frame",
    seriesWords: ["Vintage"],
    studioDirs: [],
    realDirs: [],
    catalogueFile: "https://drive.google.com/file/d/1gYh8MKCtOjn3CfYQxWhZXeFSFYxLSCSl/view?usp=drive_link",
    catalogueName: "VARNI Master Catalogue 2026",
    comingSoon: true,
    // From the printed Touch Panel / Master catalogue: "SMART RETRO SWITCHES"
    // product variant list (no photography shot yet).
    manualVariants: [
      "2 Switch", "4 Switch", "4 Switch 1 Fan", "6 Switch",
      "6 Switch 1 Fan", "8 Switch", "Curtain",
    ],
  },
];

const collections = [];

for (const series of SERIES_SOURCES) {
  const studioModules = [];
  const seenTitles = new Set();
  const seenSlugs = new Set();

  for (const { material, dir } of series.studioDirs) {
    const files = listImages(dir);
    for (const file of files) {
      const { module: moduleSize, title: rawTitle } = parseStudioName(file);
      const title = stripSeriesPrefix(rawTitle, series.seriesWords);
      const dedupeKey = `${material}::${moduleSize}::${title}`.toLowerCase();
      if (seenTitles.has(dedupeKey)) continue;
      seenTitles.add(dedupeKey);

      const ext = path.extname(file);
      const destRel = path.join(series.slug, "studio", slugify(material), slugify(title) + ext);
      const publicPath = copyFile(path.join(dir, file), destRel);

      let moduleSlug = slugify(`${material}-${moduleSize || ""}-${title}`);
      while (seenSlugs.has(moduleSlug)) moduleSlug += "-2";
      seenSlugs.add(moduleSlug);

      studioModules.push({
        slug: moduleSlug,
        title,
        module: moduleSize,
        material,
        category: categorize(title),
        image: publicPath,
      });
    }
  }

  const realPhotos = [];
  for (const { material, dir } of series.realDirs) {
    // Some real-photo trees are flat (files directly in dir), others are
    // nested by module/color; walk recursively either way.
    const walk = (d, labelParts) => {
      if (!fs.existsSync(d)) return;
      const entries = fs.readdirSync(d, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.name.startsWith(".")) continue;
        const full = path.join(d, entry.name);
        if (entry.isDirectory()) {
          walk(full, [...labelParts, entry.name]);
        } else if (IMG_EXT.includes(path.extname(entry.name).toLowerCase())) {
          const ext = path.extname(entry.name);
          const label = [material, ...labelParts].filter(Boolean).join(" · ");
          const destRel = path.join(
            series.slug,
            "real",
            slugify(label || material || "photo"),
            slugify(path.basename(entry.name, ext)) + ext
          );
          const publicPath = copyFile(full, destRel);
          realPhotos.push({ label: label || "Installation Photo", image: publicPath });
        }
      }
    };
    walk(dir, []);
  }

  const materials = [...new Set(studioModules.map((m) => m.material))];
  const categories = [...new Set(studioModules.map((m) => m.category))];

  collections.push({
    slug: series.slug,
    name: series.name,
    tagline: series.tagline,
    catalogueFile: series.catalogueFile,
    catalogueName: series.catalogueName,
    materials,
    categories,
    comingSoon: !!series.comingSoon,
    manualVariants: series.manualVariants || [],
    heroImage: studioModules[0]?.image || realPhotos[0]?.image || null,
    studioModules,
    realPhotos,
  });
}

const header = `// AUTO-GENERATED by scripts/build-product-catalog.mjs — do not edit by hand.
// Re-run \`node scripts/build-product-catalog.mjs\` after adding/removing files
// in the \`products/\` source folder.

export interface StudioModule {
  slug: string;
  title: string;
  module: string | null;
  material: string;
  category: string;
  image: string;
}

export interface RealPhoto {
  label: string;
  image: string;
}

export interface ProductCollection {
  slug: string;
  name: string;
  tagline: string;
  catalogueFile: string;
  catalogueName: string;
  materials: string[];
  categories: string[];
  comingSoon: boolean;
  manualVariants: string[];
  heroImage: string | null;
  studioModules: StudioModule[];
  realPhotos: RealPhoto[];
}

export const productCollections: ProductCollection[] = `;

fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, header + JSON.stringify(collections, null, 2) + ";\n");

const totalStudio = collections.reduce((n, c) => n + c.studioModules.length, 0);
const totalReal = collections.reduce((n, c) => n + c.realPhotos.length, 0);
console.log(`Wrote ${OUT_FILE}`);
console.log(`Collections: ${collections.length}`);
for (const c of collections) {
  console.log(`  - ${c.name}: ${c.studioModules.length} studio modules, ${c.realPhotos.length} real photos`);
}
console.log(`Total studio modules: ${totalStudio}, total real photos: ${totalReal}`);
