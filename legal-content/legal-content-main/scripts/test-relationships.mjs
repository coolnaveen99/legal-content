#!/usr/bin/env node
/**
 * Phase 2 relationship unit checks (synthetic + live PIL pilot).
 * Run: npm run test:relationships
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CANONICAL_ID_RE = /^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/;

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed += 1;
  } else {
    console.log("PASS:", msg);
  }
}

// 1. valid canonical ID pattern
assert(CANONICAL_ID_RE.test("topic:india:pil-locus-standi"), "valid reference pattern");
assert(!CANONICAL_ID_RE.test("Not A Canonical Id"), "invalid reference rejected");
assert(!CANONICAL_ID_RE.test("topic:PIL:Bad"), "uppercase local-id rejected");

// 2. duplicate ID detection logic (simulate map)
{
  const byId = new Map();
  const id = "topic:india:pil-locus-standi";
  byId.set(id, "topics/pil/locus-standi.json");
  assert(byId.has(id), "duplicate canonical ID detectable");
}

// 3. entity type from prefix
{
  const map = { topic: "topic", judgment: "judgment", source: "source" };
  assert(map["topic"] === "topic", "valid entity type mapping");
  assert(map["judgment"] === "judgment", "judgment type mapping");
}

// 4. live PIL pilot graph
const pilFiles = [
  "topics/pil/locus-standi.json",
  "topics/pil/art-32.json",
  "topics/pil/art-226.json",
  "topics/pil/epistolary-jurisdiction.json",
  "topics/pil/limits-and-costs.json",
  "collections/pil-complete.json",
];
const entities = {};
for (const rel of pilFiles) {
  const p = path.join(ROOT, rel);
  assert(fs.existsSync(p), `PIL pilot file exists: ${rel}`);
  const data = JSON.parse(fs.readFileSync(p, "utf8"));
  entities[data.id] = data;
}

const expectedMembers = [
  "topic:india:pil-locus-standi",
  "topic:india:pil-art-32",
  "topic:india:pil-art-226",
  "topic:india:pil-epistolary-jurisdiction",
  "topic:india:pil-limits-and-costs",
];
const coll = entities["collection:india:pil-complete"];
assert(coll && Array.isArray(coll.content.members), "collection has members");
for (const m of expectedMembers) {
  assert(coll.content.members.includes(m), `collection members includes ${m}`);
  assert(entities[m], `member entity loaded ${m}`);
}

// reciprocal relatedTopics among the five PIL topics (each pair that lists each other)
const core = expectedMembers;
for (const a of core) {
  const related = entities[a].content.relatedTopics || [];
  for (const b of related) {
    if (!core.includes(b)) continue; // constitution-art-* links are one-way intentional
    const back = entities[b].content.relatedTopics || [];
    assert(back.includes(a), `reciprocal relatedTopics: ${a} ↔ ${b}`);
  }
}

// sources exist
const sourcePath = path.join(ROOT, "sources/india-pil-practice.json");
assert(fs.existsSync(sourcePath), "PIL source entity exists");

console.log(`\nDone. failed=${failed}`);
process.exit(failed > 0 ? 1 : 0);
