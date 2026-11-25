// The Tired Dark Lord — a 100-word villain monologue.
// Writes the entry to /output/entry.txt (or $OUTPUT_PATH when set, for local runs).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "You came for the crown, then. Sit. No—not the throne; the armrest is loose and the throne... leans. " +
  "I built this empire on three hours of sleep and a grudge against a wizard who once corrected my grammar in front of the court. " +
  "The dragon? Retired. The minions unionised—fair enough, I never learned their names, only their shift patterns. " +
  "Tonight I was meant to curse the northern harvest, but the northern harvest can wait; my knees cannot. " +
  "So take the sword. Take the crown. Leave the tea. It is the only thing in this castle that has never betrayed me.";

const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
