#!/usr/bin/env node
/**
 * Build a lightweight directed edge index for the knowledge graph.
 * Does NOT replace the content manifest. Output: manifests/relationship-index.json
 *
 * Run: npm run graph:index
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const CONTENT_DIRS = [
  "topics", "provisions", "judgments", "doctrines", "comparisons",
  "illustrations", "sources", "sanhita-mappings", "collections", "seo",
];
const CANONICAL_ID_RE = /^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/;
const RELATION_FIELDS = [
  "relatedTopics", "relatedJudgments", "relatedProvisions", "relatedDoctrines",
  "illustrations", "members", "lawsInvolved", "precedentsReliedUpon", "laterJudgments",
];

function walkJsonFiles(dir) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) return [];
  const out = [];
  const stack = [abs];
  while (stack.length) {
    const cur = stack.pop();
    for (const name of fs.readdirSync(cur)) {
      const p = path.join(cur, name);
      const st = fs.statSync(p);
      if (st.isDirectory()) stack.push(p);
      else if (name.endsWith(".json")) out.push(p);
    }
  }
  return out;
}

const byFrom = {};
const byTo = {};
let edgeCount = 0;

for (const dir of CONTENT_DIRS) {
  for (const filePath of walkJsonFiles(dir)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (!data.id) continue;
    const content = data.content || {};
    const push = (field, to) => {
      if (typeof to !== "string" || !CANONICAL_ID_RE.test(to) || to === data.id) return;
      edgeCount += 1;
      (byFrom[data.id] ||= []).push({ to, field });
      (byTo[to] ||= []).push({ from: data.id, field });
    };
    if (Array.isArray(data.sources)) {
      for (const s of data.sources) push("sources", s);
    }
    for (const field of RELATION_FIELDS) {
      const arr = content[field];
      if (!Array.isArray(arr)) continue;
      for (const id of arr) push(field, id);
    }
  }
}

const index = {
  schemaVersion: "v1",
  generatedAt: new Date().toISOString(),
  repository: "coolnaveen99/legal-content",
  edgeCount,
  outbound: byFrom,
  inbound: byTo,
};

const outPath = path.join(ROOT, "manifests", "relationship-index.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(index) + "\n");
console.log(`Wrote ${outPath} edges=${edgeCount} nodes(out)=${Object.keys(byFrom).length}`);
