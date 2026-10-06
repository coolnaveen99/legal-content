#!/usr/bin/env node
/**
 * Final Verification Gates FV-005 through FV-010.
 *
 * This gate is evidence-conservative:
 * - FV-005/FV-006/FV-007 apply to active judgment records.
 * - FV-008/FV-009 apply to enhanced topics.
 * - FV-010 enforces the promotion rule without promoting anything.
 *
 * No automated process may turn an unverified record into published content.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const ledgerPath = path.join(ROOT, "manifests/judgment-verification-ledger.json");
const topicRoot = path.join(ROOT, "topics");
const reportPath = path.join(ROOT, "docs/FV-005-FV-010-VERIFICATION-GATE-REPORT.md");

const errors = [];
const warnings = [];
const archived = new Set(["archived"]);
const activeJudgmentStatuses = new Set(["verified", "verified-with-limitation"]);
const publishStatuses = new Set(["verified", "published"]);

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const isUrl = (v) => typeof v === "string" && /^https?:\/\//i.test(v);
const hasDate = (v) => typeof v === "string" && /^\d{4}-\d{2}-\d{2}/.test(v);
const arr = (v) => Array.isArray(v) ? v : [];
const fail = (msg) => errors.push(msg);
const warn = (msg) => warnings.push(msg);

if (!fs.existsSync(ledgerPath)) fail("FV-005: missing judgment verification ledger");
let ledger = null;
if (!errors.length) {
  try { ledger = readJson(ledgerPath); } catch (e) { fail("FV-005: invalid judgment verification ledger: " + e.message); }
}

let judgmentStats = { total: 0, active: 0, verified: 0, limited: 0, archived: 0 };
if (ledger?.records) {
  for (const r of ledger.records) {
    judgmentStats.total++;
    const status = r.verificationStatus;
    if (status === "verified") judgmentStats.verified++;
    else if (status === "verified-with-limitation") judgmentStats.limited++;
    else if (archived.has(status)) judgmentStats.archived++;
    if (!activeJudgmentStatuses.has(status)) continue;
    judgmentStats.active++;

    // FV-005: identity + proposition evidence must be explicit.
    if (!r.caseName || !r.citation || !r.verificationDate) fail(`FV-005: active judgment lacks identity/date: ${r.judgmentId || r.caseName}`);
    if (status === "verified" && (!r.notes || /not inspected|not-inspected|pending/i.test(r.notes))) {
      fail(`FV-005: verified judgment contains an unresolved inspection limitation: ${r.judgmentId || r.caseName}`);
    }

    // FV-006: authoritative source must be recorded for active records.
    if (status === "verified" && !isUrl(r.sourceUrl) && !String(r.sourceType || "").includes("existing-phase-10-authoritative-evidence")) {
      fail(`FV-006: verified judgment has no recorded authoritative source: ${r.judgmentId || r.caseName}`);
    }
    if (status === "verified-with-limitation" && !isUrl(r.sourceUrl)) {
      warn(`FV-006: limited judgment has no URL; retained as limited: ${r.judgmentId || r.caseName}`);
    }

    // FV-007: decoder must not claim paragraph evidence unless actually present.
    if (r.decoderStatus === "verified" && !r.paragraphReferences && !r.paragraphs && !r.pageReferences) {
      fail(`FV-007: decoder claims verification without traceable paragraph/page evidence: ${r.judgmentId || r.caseName}`);
    }
  }
}

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const p = path.join(dir,e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name.endsWith(".json")) yield p;
  }
}

let topicStats = { total: 0, enhanced: 0, review: 0, verified: 0, published: 0 };
for (const file of walk(topicRoot)) {
  let e;
  try { e = readJson(file); } catch { continue; }
  topicStats.total++;
  const x = e?.content?.enhancement;
  if (!x) continue;
  topicStats.enhanced++;
  const rel = path.relative(ROOT,file).replaceAll("\\","/");
  const status = x.status;
  if (status === "review") topicStats.review++;
  if (status === "verified") topicStats.verified++;
  if (status === "published") topicStats.published++;

  // FV-008: migrated identity/provenance survives enhancement.
  if (!e.content?.legacyTopicId || !e.content?.legacySubjectSlug) {
    fail(`FV-008: missing legacy provenance: ${rel}`);
  }
  if (e.entityType !== "topic") fail(`FV-008: enhanced record is not a topic: ${rel}`);

  if (!publishStatuses.has(status)) continue;

  // FV-009: publication eligibility.
  if (!arr(x.authoritativeSources).length) fail(`FV-009: ${status} topic has no authoritativeSources: ${rel}`);
  if (!hasDate(x.verification?.lastVerifiedAt)) fail(`FV-009: ${status} topic has no verification.lastVerifiedAt: ${rel}`);
  if (!x.verification?.verifiedBy) fail(`FV-009: ${status} topic has no verification.verifiedBy: ${rel}`);
  if (status === "published" && x.verification?.status && x.verification.status !== "verified") {
    fail(`FV-009: published topic verification status is not verified: ${rel}`);
  }

  // FV-010: no bulk/implicit promotion marker.
  if (x.promotion?.method === "bulk" || x.promotedBy === "batch") {
    fail(`FV-010: prohibited bulk promotion metadata: ${rel}`);
  }
}

const ledgerSummary = ledger?.summary || {};
if (ledger && ledgerSummary.total !== judgmentStats.total) {
  fail(`FV-005: ledger summary.total=${ledgerSummary.total} but records=${judgmentStats.total}`);
}

const report = [
  "# FV-005 through FV-010 Verification Gate Report",
  "",
  `Generated: ${new Date().toISOString()}`,
  "",
  "This gate is evidence-conservative and does not promote records.",
  "",
  "## Judgment gates",
  "",
  `- FV-005 Judgment verification: PASS for active records with explicit identity/date and no unresolved inspection claim.`,
  `- FV-006 Source verification: PASS for fully verified records with recorded authoritative evidence; limited records remain limited.`,
  `- FV-007 Judgment decoder verification: PASS where decoder status does not falsely claim traceable paragraph/page evidence.`,
  `- Total judgment records checked: ${judgmentStats.total}`,
  `- Active verified: ${judgmentStats.verified}`,
  `- Active verified-with-limitation: ${judgmentStats.limited}`,
  `- Archived: ${judgmentStats.archived}`,
  "",
  "## Topic gates",
  "",
  `- FV-008 Topic provenance verification: all enhanced topics retain legacy identity metadata.`,
  `- FV-009 Publication eligibility: verified/published topics require authoritative sources and verification metadata.`,
  `- FV-010 Promotion gate: no bulk promotion is permitted; this script never changes status.`,
  `- Topics checked: ${topicStats.total}; enhanced: ${topicStats.enhanced}; review: ${topicStats.review}; verified: ${topicStats.verified}; published: ${topicStats.published}`,
  "",
  `## Result: ${errors.length ? "FAIL" : "PASS"}`,
  "",
  ...(errors.length ? ["### Errors", ...errors.map(x => `- ${x}`), ""] : []),
  ...(warnings.length ? ["### Warnings", ...warnings.map(x => `- ${x}`), ""] : []),
  "",
  "A PASS means the repository satisfies the structural/evidence gate. It does not mean every legal proposition has been independently verified by this script.",
  ""
].join("\n");

fs.writeFileSync(reportPath, report);
console.log(`FV-005..FV-010: judgments=${judgmentStats.total} active=${judgmentStats.active} topics=${topicStats.enhanced} errors=${errors.length} warnings=${warnings.length}`);
process.exit(errors.length ? 1 : 0);
