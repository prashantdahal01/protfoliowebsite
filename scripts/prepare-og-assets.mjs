import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourceDirectory = path.join(root, "public", "sequence");
const assets = {
  projects: {
    "scrollytelling-product-launch": "frame_08_delay-0.066s.webp",
    "realtime-design-system": "frame_22_delay-0.066s.webp",
    "interactive-case-study": "frame_36_delay-0.066s.webp",
    "editorial-portfolio": "frame_50_delay-0.066s.webp"
  },
  blog: {
    "designing-for-scroll": "frame_24_delay-0.066s.webp",
    "small-systems": "frame_54_delay-0.066s.webp"
  }
};

for (const [section, entries] of Object.entries(assets)) {
  for (const [slug, source] of Object.entries(entries)) {
    const destinationDirectory = path.join(root, "public", section, slug);
    fs.mkdirSync(destinationDirectory, { recursive: true });
    fs.copyFileSync(path.join(sourceDirectory, source), path.join(destinationDirectory, "opengraph-image.webp"));
  }
}

console.log("Prepared static Open Graph assets:");
for (const [section, entries] of Object.entries(assets)) {
  for (const slug of Object.keys(entries)) console.log(`  public/${section}/${slug}/opengraph-image.webp`);
}
