import { mkdir } from "node:fs/promises";

import sharp from "sharp";
import { JSDOM } from "jsdom";

await mkdir("outputs/", { recursive: true });

const { document } = new JSDOM("").window;
global.document = document;

export function generateGraph(
  name: string,
  generate: () => SVGSVGElement | null,
) {
  const svg = generate();

  if (svg) {
    sharp(Buffer.from(svg.outerHTML))
      .png()
      .toFile("outputs/" + name + ".png", (err, info) => {
        if (err) {
          console.log(`Sharp Error:\n\n ${err}`);
        } else {
          console.log("Generated " + name, info);
        }
      });
  }
}
