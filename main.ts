import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Six words, one complete story: the sale is done, yet what
// mattered most was never for sale — a whole life implied
// in the thing kept behind.
const STORY = "Sold the house. Kept the ghosts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
