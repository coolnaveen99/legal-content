#!/usr/bin/env node
/**
 * FV-011 — Full-catalog verification report.
 * Accounting gate only; never promotes or publishes content.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TOPICS = path.join(ROOT, "topics");
const LEDGER = path.join(ROOT, "manifests/judgment-verification-ledger.json");
const OUT_MD = path.join(ROOT, "docs/FV-011-FULL-CATALOG-VERIFICATION-REPORT.md");
const OUT_JSON = path.join(ROOT, "manifests/fv-011-full-catalog-verification.json");

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(file);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield file;
  }
}
const read = file => JSON.parse(fs.readFileSync(file, "utf8"));
const rel = file => path.relative(ROOT, file).replaceAll("\\\\", "/");

const topics = [];
for (const file of walk(TOPICS)) {
  let d;
  try { d = read(file); } catch { continue; }
  if (d?.entityType !== "topic") continue;
  const e = d.content?.enhancement || {};
  const status = e.status || "unclassified";
  const published = status === "published";
  topics.push({
    path: rel(file),
    topicId: d.content?.legacyTopicId || d.id || null,
    subjectSlug: d.content?.legacySubjectSlug || null,
    status,
    published,
    authoritativeSourceCount: Array.isArray(e.authoritativeSources) ? e.authoritativeSources.length : 0,
    verifiedAt: e.verification?.lastVerifiedAt || null,
    verifiedBy: e.verification?.verifiedBy || null,
    disposition: published ? "PUBLISHED" :
      status === "verified" ? "VERIFIED_NOT_PUBLISHED" :
      status === "review" ? "REVIEW_REQUIRES_FINAL_EVIDENCE" :
      "NON_PUBLISHED_STATUS_REQUIRES_REVIEW"
  });
}
topics.sort((a,b) => a.path.localeCompare(b.path));

let ledger = null;
try { ledger = read(LEDGER); } catch {}
const judgments = ledger?.records || [];
const judgmentCounts = judgments.reduce((m,r) => {
  const s = r.verificationStatus || "unclassified";
  m[s] = (m[s] || 0) + 1;
  return m;
}, {});
const topicCounts = topics.reduce((m,r) => {
  m[r.status] = (m[r.status] || 0) + 1;
  return m;
}, {});
const nonPublished = topics.filter(t => !t.published);
const errors = [];
for (const t of nonPublished) {
  if (!t.topicId || !t.subjectSlug) errors.push("FV-011: missing migrated identity: " + t.path);
}
if (topics.length === 0) errors.push("FV-011: no canonical topic records found");

const summary = {
  canonicalTopics: topics.length,
  publishedTopics: topics.filter(t => t.published).length,
  nonPublishedTopics: nonPublished.length,
  reviewTopics: topics.filter(t => t.status === "review").length,
  judgmentRecords: judgments.length,
  judgmentVerificationStatus: judgmentCounts,
  topicStatus: topicCounts
};
const report = {
  schemaVersion: "v1",
  gate: "FV-011",
  generatedAt: new Date().toISOString(),
  repository: "coolnaveen99/legal-content",
  branch: "main",
  purpose: "Explicit full-catalog accounting; no record is promoted by this report.",
  summary,
  exitCondition: errors.length === 0
    ? "PASS — every canonical non-published topic has an explicit disposition and migrated identity."
    : "FAIL — catalog accounting defects require correction.",
  errors,
  nonPublishedTopics: nonPublished
};
fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2) + "\n");

const lines = [
  "# FV-011 Full-Catalog Verification Report", "",
  "Generated: " + report.generatedAt, "",
  "## Result", "",
  "**" + (errors.length ? "FAIL" : "PASS") + "** — " + report.exitCondition, "",
  "This report accounts for the complete canonical topic catalog. It does not promote, publish, or rewrite legal content.", "",
  "## Catalog reconciliation", "",
  "- Canonical topic records: **" + summary.canonicalTopics + "**",
  "- Published topics: **" + summary.publishedTopics + "**",
  "- Non-published topics explicitly accounted for: **" + summary.nonPublishedTopics + "**",
  "- Review topics: **" + summary.reviewTopics + "**",
  "- Judgment records referenced by the verification ledger: **" + summary.judgmentRecords + "**", "",
  "## Topic status distribution", ""
];
for (const [status,count] of Object.entries(topicCounts).sort()) lines.push("- `" + status + "`: " + count);
lines.push("", "## Judgment verification distribution", "");
for (const [status,count] of Object.entries(judgmentCounts).sort()) lines.push("- `" + status + "`: " + count);
lines.push("", "## Publication rule", "",
  "- `review` remains non-published until FV-009 publication eligibility and FV-010 promotion requirements are satisfied.",
  "- `verified` is evidence state, not an instruction to publish.",
  "- This report never changes topic or judgment status.",
  "- Every non-published topic is represented in the machine-readable manifest at `manifests/fv-011-full-catalog-verification.json`.", "",
  "## Explicit non-published catalog", "",
  "| Topic | Status | Disposition | Sources | Verified at |",
  "|---|---|---|---:|---|"
);
for (const t of nonPublished) {
  lines.push("| `" + t.path + "` | `" + t.status + "` | " + t.disposition +
    " | " + t.authoritativeSourceCount + " | " + (t.verifiedAt || "—") + " |");
}
if (errors.length) lines.push("", "## Errors", "", ...errors.map(e => "- " + e));
fs.writeFileSync(OUT_MD, lines.join("\n") + "\n");
console.log(JSON.stringify(summary, null, 2));
process.exit(errors.length ? 1 : 0);
