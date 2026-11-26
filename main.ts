// Five Seconds to Explain the Glass — entry program (Node 22, no dependencies).
// Prints the cat's single-sentence defence to stdout and, when the grading
// sandbox provides it, writes the same text to /output/entry.txt.
// Gate: the entry must be UTF-8 text of 1 to 200 characters.
import { existsSync, writeFileSync } from "node:fs";

const SENTENCE =
  // v2: opens with a courtroom address instead of "In my defence" — the cat
  // is already on the stand, no throat-clearing, and the "stare is a
  // challenge" logic (fresh, not the gravity/slippery-edge cliche) lands
  // sooner and harder in the five-second window.
  "Your Honour, the glass stared at me first, and in this house a stare is a challenge, so I answered it the only way a cat can.";

const length = [...SENTENCE].length;
if (length === 0 || length > 200) {
  throw new Error(`entry is ${length} characters, over the 200-character limit`);
}

process.stdout.write(SENTENCE + "\n");

if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", SENTENCE, "utf8");
}
