#!/usr/bin/env node
/**
 * ENH-007: fail if an enhancement shortens or removes baseline substantive fields.
 * Baseline: 8c635aa8b7d350c801e49dc632ad31d3684a55b2
 * Compared fields: content.overview and content.sections body text.
 * Enhancement objects are ignored. A field may grow. It may not shrink below 90% of the baseline text.
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const BASELINE = "8c635aa8b7d350c801e49dc632ad31d3684a55b2";
const topicRoot = path.join(ROOT, "topics");
const reportPath = path.join(ROOT, "docs/ENH-007-BASELINE-PROTECTION-REPORT.md");

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield p;
  }
}

function substantiveText(entity) {
  const content = entity?.content || {};
  const parts = [];
  if (typeof content.overview === "string") parts.push(content.overview);
  if (typeof content.glance === "string") parts.push(content.glance);
  if (typeof content.study === "string") parts.push(content.study);
  for (const section of content.sections || []) {
    if (!section || typeof section !== "object") continue;
    if (typeof section.heading === "string") parts.push(section.heading);
    if (typeof section.title === "string") parts.push(section.title);
    if (typeof section.body === "string") parts.push(section.body);
    if (Array.isArray(section.content)) parts.push(section.content.map(String).join("\n"));
  }
  return parts.join("\n").replace(/\s+/g, " ").trim();
}

const failures = [];
let checked = 0;
let absentAtBaseline = 0;

for (const file of walk(topicRoot)) {
  const rel = path.relative(ROOT, file);
  let baselineRaw;
  try {
    baselineRaw = execFileSync("git", ["show", `${BASELINE}:${rel}`], { cwd: ROOT, encoding: "utf8", maxBuffer: 20_000_000 });
  } catch {
    absentAtBaseline++;
    continue;
  }
  checked++;
  const before = substantiveText(JSON.parse(baselineRaw));
  const after = substantiveText(JSON.parse(fs.readFileSync(file, "utf8")));
  if (!before) continue;
  if (!after || after.length < Math.floor(before.length * 0.9)) {
    failures.push({ rel, before: before.length, after: after.length });
  }
}

const lines = [
  "# ENH-007 baseline protection report",
  "",
  `Baseline commit: \`${BASELINE}\`.`,
  "",
  "The gate compares overview, glance, study, and section text. Enhancement fields are not part of the comparison.",
  "A topic fails if that baseline text is missing or shorter than 90 percent of the baseline.",
  "",
  `| Metric | Count |`,
  `|---|---:|`,
  `| Topics compared with baseline | ${checked} |`,
  `| Topics absent at baseline | ${absentAtBaseline} |`,
  `| Shortened or removed | ${failures.length} |`,
  "",
];
if (failures.length) {
  lines.push("| Topic | Baseline chars | Current chars |");
  lines.push("|---|---:|---:|");
  for (const row of failures.slice(0, 50)) lines.push(`| ${row.rel} | ${row.before} | ${row.after} |`);
  if (failures.length > 50) lines.push("", `Further failures omitted: ${failures.length - 50}.`);
}
lines.push("");
fs.writeFileSync(reportPath, lines.join("\n"));
console.log(`ENH-007: checked=${checked} absent=${absentAtBaseline} failures=${failures.length}`);
process.exit(failures.length ? 1 : 0);
