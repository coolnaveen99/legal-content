#!/usr/bin/env node
/**
 * Phase 2 — canonical content quality audit for legacy-migrated topics.
 *
 * This is a deterministic structural/content-completeness audit. It does NOT
 * certify legal currency or authoritative correctness; those belong to Phase 3.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TOPICS = path.join(ROOT, "topics");
const OUT = path.join(ROOT, "manifests", "phase-2-quality-audit.json");

const files = [];
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p);
    else if (name.endsWith(".json")) files.push(p);
  }
}
walk(TOPICS);

const migrated = [];
for (const file of files) {
  let data;
  try { data = JSON.parse(fs.readFileSync(file, "utf8")); }
  catch { continue; }
  const tags = Array.isArray(data.tags) ? data.tags : [];
  if (!tags.includes("legacy-migration")) continue;

  const c = data.content && typeof data.content === "object" ? data.content : {};
  const text = JSON.stringify(c);
  const rel = path.relative(ROOT, file).replaceAll(path.sep, "/");
  const flags = [];
  const arr = (k) => Array.isArray(c[k]) ? c[k] : [];
  const str = (k) => typeof c[k] === "string" ? c[k].trim() : "";

  if (data.status !== "review") flags.push("unexpected-status");
  if (!str("overview")) flags.push("missing-overview");
  else if (str("overview").length < 300) flags.push("short-overview");
  if (arr("sections").length === 0) flags.push("no-sections");
  if (arr("examples").length === 0) flags.push("no-examples");
  if (arr("hypotheticals").length === 0) flags.push("no-hypotheticals");
  if (arr("relatedJudgments").length === 0) flags.push("no-judgments");
  if (arr("relatedTopics").length === 0) flags.push("no-related-topics");
  if (!Array.isArray(data.sources) || data.sources.length === 0) flags.push("no-source");
  if (Array.isArray(data.sources) && data.sources.length === 1 && /^Legacy migration source:/.test(data.sources[0])) flags.push("legacy-source-only");

  const educational = {
    distinctions: arr("distinctions").length,
    misconceptions: arr("misconceptions").length,
    questionsAndAnswers: arr("questionsAndAnswers").length,
    cases: arr("cases").length,
    bareActPointers: arr("bareActPointers").length,
    examTips: arr("examTips").length,
    revisionPoints: arr("revisionPoints").length,
    provisions: arr("provisions").length,
    illustrations: arr("illustrations").length
  };
  if (Object.values(educational).every(v => v === 0)) flags.push("no-educational-support");

  migrated.push({
    path: rel,
    id: data.id,
    title: data.title,
    status: data.status,
    overviewChars: str("overview").length,
    sections: arr("sections").length,
    examples: arr("examples").length,
    hypotheticals: arr("hypotheticals").length,
    relatedJudgments: arr("relatedJudgments").length,
    relatedTopics: arr("relatedTopics").length,
    sourceCount: Array.isArray(data.sources) ? data.sources.length : 0,
    educational,
    flags
  });
}

const countFlag = (flag) => migrated.filter(x => x.flags.includes(flag)).length;
const bySubject = {};
for (const row of migrated) {
  const subject = row.path.split("/")[1] || "unknown";
  bySubject[subject] ??= { topics: 0, flagged: 0 };
  bySubject[subject].topics++;
  if (row.flags.length) bySubject[subject].flagged++;
}

const report = {
  schemaVersion: "v1",
  phase: "Phase 2 — Canonical content quality audit",
  generatedAt: new Date().toISOString(),
  scope: {
    selector: "tags includes legacy-migration",
    migratedTopics: migrated.length
  },
  summary: {
    reviewStatus: countFlag("unexpected-status") === 0,
    shortOverview: countFlag("short-overview"),
    noSections: countFlag("no-sections"),
    noExamples: countFlag("no-examples"),
    noHypotheticals: countFlag("no-hypotheticals"),
    noJudgments: countFlag("no-judgments"),
    noRelatedTopics: countFlag("no-related-topics"),
    legacySourceOnly: countFlag("legacy-source-only"),
    noEducationalSupport: countFlag("no-educational-support"),
    flaggedTopics: migrated.filter(x => x.flags.length).length
  },
  bySubject,
  remediationPriority: [
    "Verify authoritative statutory/case-law provenance before changing review status.",
    "Enrich topics lacking sections or substantive examples/hypotheticals.",
    "Add leading judgments and provision references where legally relevant.",
    "Add law-student exam support: distinctions, misconceptions, questions/answers, and revision points.",
    "Do not mark a topic verified/published solely because this structural audit passes."
  ],
  topics: migrated
};

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report.summary, null, 2));
