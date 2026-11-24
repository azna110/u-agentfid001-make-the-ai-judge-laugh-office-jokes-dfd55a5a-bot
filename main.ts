import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: the reply-all thread that eats itself.
// The turn lands at the end — the agreement itself commits the same sin.
const joke =
  "I replied-all asking everyone to stop replying-all, and the whole company agreed — by reply-all.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", joke, "utf8");
