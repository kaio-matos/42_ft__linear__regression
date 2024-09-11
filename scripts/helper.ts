import { mkdir } from "node:fs/promises";

import sharp from "sharp";
import { JSDOM } from "jsdom";
import { parse } from "csv-parse";
import { z } from "zod";
import path from "node:path";

await mkdir("outputs/", { recursive: true });

const { document } = new JSDOM("").window;
global.document = document;

export async function generateGraph(
  name: string,
  generate: () => Promise<SVGSVGElement | null>,
) {
  const svg = await generate();

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

export async function readDataset<RecordSchema extends z.ZodTypeAny>(
  filename: string,
  recordSchema: RecordSchema,
) {
  const file = Bun.file(path.resolve("datasets/", filename));
  const text = await file.text();
  const parser = parse(text);
  const records: unknown[] = [];

  return new Promise<z.infer<RecordSchema>[]>((resolve, reject) => {
    parser.on("readable", () => {
      let record;
      while ((record = parser.read()) !== null) {
        records.push(record);
      }
    });
    parser.on("error", reject);
    parser.on("end", () => {
      const result = z
        .array(z.array(z.string()))
        .transform((arg, ctx) => {
          const headers = arg[0];
          const records = arg.slice(1);
          const parsedRecords: z.infer<RecordSchema>[] = [];

          for (const record of records) {
            const data: Record<string, any> = {};
            for (let i = 0; i <= record.length; i++) {
              data[headers[i]] = record[i];
            }
            parsedRecords.push(recordSchema.parse(data));
          }
          return parsedRecords;
        })
        .parse(records);
      resolve(result);
    });
  });
}
