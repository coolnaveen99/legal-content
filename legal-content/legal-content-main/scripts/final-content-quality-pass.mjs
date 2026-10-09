#!/usr/bin/env node
/**
 * Final Content Quality Pass — QUAL-001 through QUAL-011.
 *
 * This is an evidence-preserving audit. It never rewrites legal content and
 * never promotes a topic. Findings are classified so legal verification
 * remains separate from editorial-quality remediation.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TOPIC_ROOT = path.join(ROOT, "topics");
const REPORT = path.join(ROOT, "docs/FINAL-CONTENT-QUALITY-PASS-2026-10-06.md");

const findings = [];
const stats = {
  topics: 0,
  scaffold: 0,
  substantive: 0,
  verifiedOrPublished: 0,
  weak: 0,
  boilerplate: 0,
  exampleIssues: 0,
  distinctionIssues: 0,
  applicationIssues: 0,
  mark10Issues: 0,
  mark16Issues: 0,
  relationshipIssues: 0,
  currentLawIssues: 0,
  baselineWarnings: 0,
};

const norm = (v) => String(v ?? "").replace(/\s+/g, " ").trim();
const arr = (v) => Array.isArray(v) ? v : [];
const text = (v) => {
  if (typeof v === "string") return v;
  if (Array.isArray(v)) return v.map(text).join("\n");
  if (v && typeof v === "object") return Object.values(v).map(text).join("\n");
  return "";
};
const hasMeaningful = (v, min = 20) => norm(text(v)).length >= min;

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(file);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield file;
  }
}

function issue(code, severity, file, message) {
  findings.push({ code, severity, file: path.relative(ROOT, file).replaceAll("\\", "/"), message });
  if (code === "QUAL-001") stats.weak++;
  if (code === "QUAL-002") stats.boilerplate++;
  if (code === "QUAL-004") stats.exampleIssues++;
  if (code === "QUAL-005") stats.distinctionIssues++;
  if (code === "QUAL-006") stats.applicationIssues++;
  if (code === "QUAL-007") stats.mark10Issues++;
  if (code === "QUAL-008") stats.mark16Issues++;
  if (code === "QUAL-009") stats.relationshipIssues++;
  if (code === "QUAL-010") stats.currentLawIssues++;
  if (code === "QUAL-011") stats.baselineWarnings++;
}

function isScaffold(e) {
  const x = e?.content?.enhancement;
  const notes = text(x?.verification?.notes);
  return (
    notes.includes("No case law invented") ||
    notes.includes("Existing migrated topic text only") ||
    notes.includes("Assembled from this topic") ||
    x?.coverage === "assembled-from-migrated" ||
    norm(x?.definition).includes("No additional legal rule was generated")
  );
}

function hasGenericPhrase(value, title) {
  const v = norm(value);
  const t = norm(title);
  if (!v) return true;
  if (v.includes("Complete ") && v.includes(" treatise with ")) return true;
  if (v.includes("recorded rule") && v.length < 220) return true;
  return t && v === t;
}

function hasMarkStructure(value, mark) {
  const v = norm(value).toLowerCase();
  if (!v || /not yet structured|none was invented|no answer outline/i.test(v)) return false;
  return v.includes("introduction") || v.includes("issue") || v.includes("rule") || v.includes("application") || v.includes("conclusion");
}

for (const file of walk(TOPIC_ROOT)) {
  let e;
  try { e = JSON.parse(fs.readFileSync(file, "utf8")); } catch { continue; }
  const c = e?.content || {};
  const x = c.enhancement;
  if (!x) continue;

  stats.topics++;
  if (x.status === "verified" || x.status === "published") stats.verifiedOrPublished++;
  const scaffold = isScaffold(e);
  if (scaffold) stats.scaffold++; else stats.substantive++;

  // QUAL-001 — weak/incomplete enhancement coverage.
  const required = ["learningObjectives","definition","legalPrinciple","statutoryFramework","essentialIngredients","detailedExplanation","examples","problemApplication","keyTakeaways","authoritativeSources","verification"];
  const missing = required.filter(k => !hasMeaningful(x[k], k === "verification" ? 10 : 20));
  if (missing.length) issue("QUAL-001", "P1", file, `missing/weak enhancement fields: ${missing.join(", ")}`);

  // QUAL-002 — duplicate boilerplate.
  const candidates = [x.definition, x.detailedExplanation, x.keyTakeaways, x.learningObjectives, x.examAnswerStructure];
  const generic = candidates.filter(v => hasGenericPhrase(v, e.title)).length;
  if (generic >= 2 || scaffold) issue("QUAL-002", scaffold ? "P1" : "P2", file, scaffold ? "scaffold-level enhancement requires substantive topic-specific rewrite" : "multiple enhancement fields contain generic/duplicative phrasing");

  // QUAL-003 — readability/legal terminology.
  const study = norm(c.study);
  if (study && /\b(act|section|article|rule)\b/i.test(study) && /\bidentify the source of power\b/i.test(study) && !/section|article|rule|act/i.test(norm(x.definition))) {
    issue("QUAL-003", "P2", file, "legal terminology/framework is generic relative to the topic; topic-specific terminology review required");
  }

  // QUAL-004 — examples must be rule-specific.
  const examples = arr(x.examples).concat(arr(c.examples));
  if (!examples.length || examples.every(v => /recorded ingredient|recorded rule|use only the law already recorded/i.test(text(v)))) {
    issue("QUAL-004", "P1", file, "examples are missing or generic rather than testing the actual rule");
  }

  // QUAL-005 — distinctions.
  const distinctions = arr(x.distinctions).concat(arr(c.distinctions));
  if (!distinctions.length && !/definition|introduction|meaning/i.test(e.title || "")) {
    issue("QUAL-005", "P2", file, "no topic-specific distinction recorded");
  } else if (distinctions.some(d => /connected legal concept|different facts or conditions|do not import/i.test(text(d)))) {
    issue("QUAL-005", "P2", file, "distinction contains generic comparison language");
  }

  // QUAL-006 — problem/application.
  if (!hasMeaningful(x.problemApplication, 60) || /none was invented|no problem question/i.test(text(x.problemApplication))) {
    issue("QUAL-006", "P1", file, "problem/application reasoning is absent or explicitly deferred");
  }

  // QUAL-007/008 — answer structures.
  if (!hasMarkStructure(x.examAnswerStructure, 10) || /16.?mark/i.test(text(x.examAnswerStructure)) === false) {
    issue("QUAL-007", "P1", file, "10-mark/short-answer structure is not clearly provision/topic-specific");
  }
  const answerText = text(x.examAnswerStructure) + " " + text(c.questionsAndAnswers);
  if (!hasMarkStructure(answerText, 16) || !/16.?mark|comprehensive|written submissions|long answer/i.test(answerText)) {
    issue("QUAL-008", "P1", file, "16-mark/comprehensive answer structure is not clearly represented");
  }

  // QUAL-009 — relationships.
  const relatedTopics = arr(c.relatedTopics);
  const relatedJudgments = arr(c.relatedJudgments);
  if (!relatedTopics.length && !relatedJudgments.length && !/introduction|overview|meaning|definition/i.test(e.title || "")) {
    issue("QUAL-009", "P2", file, "no related topic/judgment relationship recorded");
  }

  // QUAL-010 — current-law warnings.
  const lawText = text([c.study, x.statutoryFramework, x.verification?.notes, c.provisions]);
  const transitionSensitive = /BNS|BNSS|BSA|IPC|CrPC|Evidence Act|Code on Wages|Industrial Relations Code|commencement|repeal|transition|supersed/i.test(lawText);
  if (transitionSensitive && !/current|commencement|transition|repeal|supersed|saved|in force/i.test(lawText)) {
    issue("QUAL-010", "P1", file, "transition/current-law-sensitive terminology appears without an explicit current-law status statement");
  }

  // QUAL-011 — preservation/legal-validation evidence.
  if (!c.legacyTopicId || !c.legacySubjectSlug) {
    issue("QUAL-011", "P0", file, "legacy identity/provenance is missing");
  }
  if (!x.verification?.lastVerifiedAt || !x.verification?.verifiedBy) {
    stats.baselineWarnings++;
  }
}

const byCode = {};
for (const f of findings) (byCode[f.code] ||= []).push(f);

const lines = [
  "# Final Content Quality Pass — 2026-10-06",
  "",
  "Evidence-conservative editorial audit for QUAL-001 through QUAL-011. This audit does not promote, publish, or rewrite legal content.",
  "",
  "## Corpus snapshot",
  "",
  `| Metric | Count |`,
  `|---|---:|`,
  `| Topics with enhancement objects | ${stats.topics} |`,
  `| Scaffold-level enhancements | ${stats.scaffold} |`,
  `| Substantive enhancements | ${stats.substantive} |`,
  `| Verified/published enhancement statuses | ${stats.verifiedOrPublished} |`,
  `| Total findings | ${findings.length} |`,
  "",
  "## QUAL gate summary",
  "",
  `| Gate | Findings | Result |`,
  `|---|---:|---|`,
  ...Object.keys({ "QUAL-001":0,"QUAL-002":0,"QUAL-003":0,"QUAL-004":0,"QUAL-005":0,"QUAL-006":0,"QUAL-007":0,"QUAL-008":0,"QUAL-009":0,"QUAL-010":0,"QUAL-011":0 }).map(code => {
    const n = (byCode[code] || []).length;
    return `| ${code} | ${n} | ${n ? "OPEN — remediation required" : "PASS"} |`;
  }),
  "",
  "## Decision",
  "",
  findings.length
    ? "**NOT COMPLETE.** The pass is implemented and evidence is generated by CI, but open quality findings remain. No topic is promoted or relabelled merely to make the gate green."
    : "**PASS.** No QUAL-001–QUAL-011 findings were detected by the deterministic audit.",
  "",
  "## Primary remediation boundary",
  "",
  "- Scaffold enhancements must receive topic-specific substantive treatment before they can be considered quality-complete.",
  "- Legal verification/publication remains controlled separately by FV-002–FV-010.",
  "- Baseline preservation remains mandatory; this pass never shortens migrated substantive text.",
  "",
  "## Findings (first 500)",
  "",
  ...findings.slice(0, 500).map(f => `- **${f.code} [${f.severity}]** ${f.file} — ${f.message}`),
  ""
];

fs.writeFileSync(REPORT, lines.join("\n"));
console.log(`Final Content Quality Pass: topics=${stats.topics} scaffold=${stats.scaffold} substantive=${stats.substantive} findings=${findings.length}`);
console.log(`Report: ${path.relative(ROOT, REPORT)}`);
process.exit(0);
