#!/usr/bin/env node
/**
 * Phase 4 — legal proposition and case-law verification audit.
 * This is a review/flagging audit, not a legal opinion. It never promotes
 * content to verified/published and does not silently rewrite propositions.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const topicRoot = path.join(ROOT, "topics");
const rows = [];

function walk(d) {
  if (!fs.existsSync(d)) return;
  for (const n of fs.readdirSync(d)) {
    const p = path.join(d, n);
    const s = fs.statSync(p);
    if (s.isDirectory()) walk(p);
    else if (n.endsWith(".json")) {
      try {
        const data = JSON.parse(fs.readFileSync(p, "utf8"));
        if (data.entityType === "topic" && Array.isArray(data.tags) && data.tags.includes("legacy-migration")) {
          rows.push({ data, path: path.relative(ROOT, p).replaceAll(path.sep, "/") });
        }
      } catch {}
    }
  }
}
walk(topicRoot);

const CURRENT_TRANSITION = {
  bns: { current: "Bharatiya Nyaya Sanhita, 2023", legacy: "Indian Penal Code, 1860", source: "source:india:india-code-bns-2023" },
  bnss: { current: "Bharatiya Nagarik Suraksha Sanhita, 2023", legacy: "Code of Criminal Procedure, 1973", source: "source:india:india-code-bnss-2023" },
  bsa: { current: "Bharatiya Sakshya Adhiniyam, 2023", legacy: "Indian Evidence Act, 1872", source: "source:india:india-code-bsa-2023" }
};

const findings = [];
function add(r, type, severity, message, evidence = "") {
  findings.push({ path: r.path, id: r.data.id, subject: r.path.split("/")[1] || "", type, severity, message, evidence });
}

for (const r of rows) {
  const d = r.data;
  const subject = (r.path.split("/")[1] || "").toLowerCase();
  const c = d.content || {};
  const text = JSON.stringify(c);
  const cases = Array.isArray(c.cases) ? c.cases : [];

  if (!Array.isArray(d.sources) || d.sources.length === 0) {
    add(r, "provenance", "high", "No canonical source attached.");
  }

  if (d.status !== "review") {
    add(r, "workflow-status", "medium", `Migrated topic has status ${d.status}; review status is expected until legal verification.`);
  }

  if (CURRENT_TRANSITION[subject]) {
    const t = CURRENT_TRANSITION[subject];
    if (text.includes(t.legacy) || new RegExp("\\b" + (subject === "bns" ? "IPC" : subject === "bnss" ? "CrPC" : "Evidence Act") + "\\b", "i").test(text)) {
      add(r, "transition-law", "high",
        `Legacy criminal-law terminology appears in a ${subject.toUpperCase()} topic; verify whether it is historical, comparative, or incorrectly presented as current law.`,
        t.legacy);
    }
  }

  const statuteRefs = text.match(/\\b(?:BNS|BNSS|BSA|IPC|CrPC|CPC|NI Act|Information Technology Act|Hindu Succession Act|Hindu Marriage Act|Special Marriage Act|Industrial Disputes Act|Industrial Relations Code|Income[- ]tax Act)\\b[^\\n,.;)]{0,80}/gi) || [];
  if (statuteRefs.length > 0 && (!Array.isArray(d.sources) || d.sources.length === 0)) {
    add(r, "statutory-reference", "high", "Statutory terminology is present but no source is attached.", statuteRefs.slice(0, 5).join(" | "));
  }

  for (const k of cases) {
    const name = String(k.name || "").trim();
    const year = Number(k.year);
    const citation = String(k.citation || "");
    if (!name) add(r, "case-metadata", "high", "Case record has no case name.");
    if (!citation) add(r, "case-metadata", "medium", `Case "${name || "(unnamed)"}" has no citation.`);
    if (!Number.isInteger(year) || year < 1500 || year > new Date().getFullYear()) {
      add(r, "case-year", "high", `Case "${name || "(unnamed)"}" has an implausible year value.`, String(k.year));
    }
    const citationYears = [...citation.matchAll(/\\b(1[5-9]\\d{2}|20\\d{2})\\b/g)].map(m => Number(m[1]));
    if (citationYears.length && Number.isInteger(year) && !citationYears.includes(year)) {
      add(r, "case-year-citation-mismatch", "high",
        `Case "${name}" year ${year} does not match year(s) embedded in its citation; verify the historical metadata.`,
        citation);
    }
    const boilerplate = "A legal right may be actionable without consequential loss, while lawful conduct causing loss is not necessarily a tort.";
    if (String(k.facts || "").trim() === boilerplate || String(k.ratioDecidendi || "").trim() === boilerplate) {
      add(r, "case-proposition-quality", "high",
        `Case "${name}" contains generic doctrinal boilerplate in its case-specific facts/ratio fields; verify against the authority.`);
    }
  }

  if (subject === "torts" && cases.length) {
    for (const k of cases) {
      if (k.name === "Ashby v White" && Number(k.year) === 1932)
        add(r, "known-case-metadata-risk", "high", "Ashby v White is recorded with year 1932 despite a citation containing 1703; authoritative verification required.", String(k.citation));
      if (k.name === "Gloucester Grammar School Case" && Number(k.year) === 1991)
        add(r, "known-case-metadata-risk", "high", "Gloucester Grammar School Case is recorded with year 1991 despite a medieval Year Book citation; authoritative verification required.", String(k.citation));
    }
  }

  const genericPlaceholders = ["What legal rule governs the doctrine?", "Use the case for its stated ratio and apply it to the proved facts."];
  for (const q of genericPlaceholders) {
    if (text.includes(q)) add(r, "placeholder-quality", "medium", `Generic migrated wording detected: "${q}"`);
  }

  if (d.effectiveFrom == null && d.effectiveTo == null && (subject === "bns" || subject === "bnss" || subject === "bsa")) {
    add(r, "temporal-status", "medium", "Criminal-law topic has no explicit effective date; verify current/historical applicability when publishing.");
  }
}

const byType = {};
for (const f of findings) byType[f.type] = (byType[f.type] || 0) + 1;
const report = {
  schemaVersion: "v1",
  phase: "Phase 4 — Legal Proposition & Case-Law Verification",
  generatedAt: new Date().toISOString(),
  scope: { migratedTopics: rows.length },
  policy: [
    "This phase flags legal propositions and metadata for authoritative review; it does not certify legal correctness.",
    "Case names, citations, years and ratios are not silently rewritten.",
    "Historical/current-law transitions are flagged where legacy terminology appears.",
    "No topic is promoted to verified/published by this audit."
  ],
  summary: {
    topicsAudited: rows.length,
    topicsWithFindings: new Set(findings.map(f => f.path)).size,
    totalFindings: findings.length,
    highSeverity: findings.filter(f => f.severity === "high").length,
    mediumSeverity: findings.filter(f => f.severity === "medium").length
  },
  byType,
  findings
};
const out = path.join(ROOT, "manifests", "phase-4-legal-verification.json");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ summary: report.summary, byType }, null, 2));
