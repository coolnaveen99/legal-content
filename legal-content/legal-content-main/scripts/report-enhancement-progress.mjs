#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const topicRoot = path.join(ROOT, "topics");
const totals = { realTopics: 0, enhanced: 0, planned: 0, inProgress: 0, verified: 0, published: 0 };
const bySubject = new Map();

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield p;
  }
}

for (const file of walk(topicRoot)) {
  let entity;
  try { entity = JSON.parse(fs.readFileSync(file, "utf8")); } catch { continue; }
  if (entity?.entityType !== "topic" || !entity?.content?.legacyTopicId) continue;
  totals.realTopics++;
  const subject = entity.content.legacySubjectSlug || "unknown";
  const bucket = bySubject.get(subject) || { total: 0, enhanced: 0, planned: 0, inProgress: 0, verified: 0, published: 0 };
  bucket.total++;
  const enhancement = entity.content.enhancement;
  if (enhancement) {
    totals.enhanced++;
    bucket.enhanced++;
    const key = enhancement.status === "in-progress" ? "inProgress" : enhancement.status;
    if (key in totals) totals[key]++;
    if (key in bucket) bucket[key]++;
  }
  bySubject.set(subject, bucket);
}

const report = {
  reportVersion: "v1",
  generatedAt: new Date().toISOString(),
  repository: "coolnaveen99/legal-content",
  policy: "Enhancement is additive; migrated baseline content must remain recoverable and must not be silently overwritten.",
  totals,
  subjects: Object.fromEntries([...bySubject.entries()].sort(([a], [b]) => a.localeCompare(b)))
};

console.log(JSON.stringify(report, null, 2));
