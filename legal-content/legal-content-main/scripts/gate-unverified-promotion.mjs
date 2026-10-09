#!/usr/bin/env node
/** Fail if an enhancement is verified or published without a verification timestamp. */
import fs from "node:fs";
import path from "node:path";

const topicRoot = path.join(process.cwd(), "topics");
function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield p;
  }
}
let promoted = 0;
let errors = 0;
for (const file of walk(topicRoot)) {
  const entity = JSON.parse(fs.readFileSync(file, "utf8"));
  const enhancement = entity?.content?.enhancement;
  if (!enhancement) continue;
  if (enhancement.status !== "verified" && enhancement.status !== "published") continue;
  promoted++;
  if (!enhancement.verification?.lastVerifiedAt) {
    console.error(`ERROR: ${path.relative(process.cwd(), file)} is ${enhancement.status} without lastVerifiedAt`);
    errors++;
  }
}
console.log(`promotion gate: promoted=${promoted} errors=${errors}`);
process.exit(errors ? 1 : 0);
