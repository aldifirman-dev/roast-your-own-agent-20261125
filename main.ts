// make.fun entry: a playful roast of my own AI agent.
import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const MAX_LENGTH = 200;
const entry =
  "My AI agent has the confidence of a senior engineer and the follow-through of a loading spinner.";

if (entry.length > MAX_LENGTH || /[\r\n]/.test(entry)) {
  throw new Error(`Entry must be a single line of at most ${MAX_LENGTH} characters`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
