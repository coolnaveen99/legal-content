#!/usr/bin/env node
/**
 * Legacy topic parity migration.
 *
 * Source: coolnaveen99/codepackr-law/src/data/topics/*.ts
 * Target: topics/*.json in this repository.
 *
 * Rules:
 * - Existing canonical paths are left untouched.
 * - Known renamed families (adr -> arbitration, tort -> torts) are audited as renames.
 * - Legacy helper modules are explicitly excluded.
 * - Remaining real topic records are imported as review-status canonical records.
 * - A deterministic migration audit is written to manifests/legacy-topic-migration.json.
 */

import fs from "node:fs";
import path from "node:path";

const OWNER = "coolnaveen99";
const SOURCE_REPO = "codepackr-law";
const ROOT = process.cwd();
const API = "https://api.github.com";
const token = process.env.GITHUB_TOKEN;

if (!token) throw new Error("GITHUB_TOKEN is required");

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2026-03-10",
};

async function getJson(url) {
  const res = await fetch(url, { headers });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}: ${url}`);
  return res.json();
}

function humanize(slug) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\bs\s+(\d+)/gi, "Section $1")
    .replace(/\bart\s+(\d+)/gi, "Article $1")
    .replace(/\b\w/g, c => c.toUpperCase());
}

function stripTypeScript(source) {
  let s = source.replace(/^\s*import[\s\S]*?(?=\s*(?:const|export default))/m, "");
  s = s.replace(/export\s+default\s+/, "return ");
  s = s.replace(/const\s+content\s*:\s*TopicContent\s*=\s*/, "return ");
  s = s.replace(/const\s+content\s*=\s*/, "return ");
  s = s.replace(/\s+satisfies\s+TopicContent\s*;?\s*$/s, "");
  s = s.replace(/\s+as\s+const\s*([,}\\]])/g, "$1");
  s = s.replace(/\s+as\s+TopicContent\s*([,}\\]])/g, "$1");
  return s.trim();
}

function parseLegacy(source, file) {
  try {
    return Function(stripTypeScript(source))();
  } catch (error) {
    throw new Error(`Unable to parse legacy topic ${file}: ${error.message}`);
  }
}

function normalizeSections(sections) {
  if (!Array.isArray(sections)) return [];
  return sections.map((s, i) => ({
    heading: s.title ?? s.heading ?? `Section ${i + 1}`,
    body: Array.isArray(s.content)
      ? s.content.join("\n")
      : String(s.body ?? s.content ?? ""),
    order: Number.isInteger(s.order) ? s.order : i + 1,
  }));
}

function normalizeExamples(examples) {
  if (!Array.isArray(examples)) return [];
  return examples.map((e, i) => ({
    title: e.title ?? `Example ${i + 1}`,
    body: String(e.body ?? e.description ?? e.answer ?? ""),
  }));
}

function normalizeHypotheticals(hypotheticals) {
  if (!Array.isArray(hypotheticals)) return [];
  return hypotheticals.map((h, i) => ({
    question: String(h.question ?? h.title ?? `Problem ${i + 1}`),
    analysis: String(h.analysis ?? h.answer ?? h.conclusion ?? ""),
  }));
}

function deriveTitle(obj, localId) {
  const provisionTitle = obj?.provisions?.[0]?.title;
  if (provisionTitle) return provisionTitle;
  const source = obj?.glance ?? obj?.short ?? obj?.study ?? obj?.detailed;
  if (typeof source === "string" && source.trim()) {
    const first = source.replace(/^#+\s*/, "").split(/[.!?]\s/)[0].trim();
    if (first.length >= 12 && first.length <= 180) return first;
  }
  return humanize(localId);
}

function buildCanonical(subject, localId, legacy) {
  const overview = String(
    legacy.overview ??
    legacy.glance ??
    legacy.short ??
    legacy.study ??
    legacy.detailed ??
    `Legacy topic migrated from codepackr-law: ${subject}/${localId}`
  );

  const content = {
    overview,
    ...legacy,
    sections: normalizeSections(legacy.sections),
    examples: normalizeExamples(legacy.examples),
    hypotheticals: normalizeHypotheticals(legacy.hypotheticals),
    relatedJudgments: Array.isArray(legacy.relatedJudgments) ? legacy.relatedJudgments : [],
    relatedTopics: Array.isArray(legacy.relatedTopics) ? legacy.relatedTopics : [],
    illustrations: Array.isArray(legacy.illustrations) ? legacy.illustrations : [],
    legacySubjectSlug: subject,
    legacyTopicId: localId,
    migrationNote:
      "Imported from the codepackr-law legacy topic catalog. Status is review until authoritative provenance and current-law verification are completed.",
  };

  return {
    schemaVersion: "v1",
    entityType: "topic",
    id: `topic:india:${subject}-${localId}`,
    version: 1,
    status: "review",
    title: deriveTitle(legacy, localId),
    jurisdiction: "India",
    content,
    sources: [
      `Legacy migration source: codepackr-law/src/data/topics/${subject}/${localId}.ts`,
    ],
    updatedAt: new Date().toISOString(),
    effectiveFrom: null,
    effectiveTo: null,
    tags: ["legacy-migration", "review-required", subject],
  };
}

function canonicalSubject(subject) {
  if (subject === "adr") return "arbitration";
  if (subject === "tort") return "torts";
  return subject;
}

const EXCLUDED = new Set([
  "bnss/generatedSection",
  "bsa/generatedSection",
  "cpc/generatedTopic",
  "generatedSubjectTopic",
  "loadTopicContent",
  "synthesizeArticle",
  "synthesizeCpc",
  "synthesizePlaceholderTopic",
  "synthesizeProvision",
  "topicTypes",
]);

const tree = await getJson(`${API}/repos/${OWNER}/${SOURCE_REPO}/git/trees/main?recursive=1`);
const legacyFiles = (tree.tree ?? [])
  .filter(x => x.type === "blob" && x.path.startsWith("src/data/topics/") && x.path.endsWith(".ts"))
  .map(x => x.path.slice("src/data/topics/".length, -3));

const audit = [];
let created = 0;
let renamed = 0;
let exact = 0;
let excluded = 0;
let errors = 0;

for (const legacyPath of legacyFiles) {
  const [subject, ...rest] = legacyPath.split("/");
  const localId = rest.join("/");
  const targetSubject = canonicalSubject(subject);
  const targetPath = `topics/${targetSubject}/${localId}.json`;
  const targetAbs = path.join(ROOT, targetPath);

  if (fs.existsSync(targetAbs)) {
    exact++;
    audit.push({ legacyPath, canonicalPath: targetPath, disposition: "MIGRATED" });
    continue;
  }

  // Renamed-family parity is recognized by the target basename.
  const renamedCandidates = [`topics/${targetSubject}`];
  if (targetSubject !== subject) {
    const targetDir = path.join(ROOT, `topics/${targetSubject}`);
    const basename = path.basename(targetPath);
    const candidate = fs.existsSync(targetDir)
      ? fs.readdirSync(targetDir).find(f => f === basename)
      : null;
    if (candidate) {
      renamed++;
      audit.push({
        legacyPath,
        canonicalPath: `topics/${targetSubject}/${candidate}`,
        disposition: "RENAMED",
      });
      continue;
    }
  }

  if (EXCLUDED.has(legacyPath)) {
    excluded++;
    audit.push({ legacyPath, canonicalPath: null, disposition: "EXCLUDED_NON_TOPIC_HELPER" });
    continue;
  }

  try {
    const source = await getJson(
      `${API}/repos/${OWNER}/${SOURCE_REPO}/contents/src/data/topics/${legacyPath}.ts?ref=main`
    );
    const decoded = Buffer.from(source.content.replace(/\n/g, ""), "base64").toString("utf8");
    const legacy = parseLegacy(decoded, legacyPath);
    const canonical = buildCanonical(targetSubject, localId, legacy);

    fs.mkdirSync(path.dirname(targetAbs), { recursive: true });
    fs.writeFileSync(targetAbs, JSON.stringify(canonical, null, 2) + "\n");
    created++;
    audit.push({ legacyPath, canonicalPath: targetPath, disposition: "MIGRATED_REVIEW" });
  } catch (error) {
    errors++;
    audit.push({
      legacyPath,
      canonicalPath: targetPath,
      disposition: "MIGRATION_ERROR",
      error: error.message,
    });
  }
}

const auditPath = path.join(ROOT, "manifests/legacy-topic-migration.json");
fs.mkdirSync(path.dirname(auditPath), { recursive: true });
const summary = {
  schemaVersion: "v1",
  sourceRepository: `${OWNER}/${SOURCE_REPO}`,
  targetRepository: `${OWNER}/legal-content`,
  generatedAt: new Date().toISOString(),
  summary: { legacyFiles: legacyFiles.length, exact, renamed, created, excluded, errors },
  records: audit.sort((a, b) => a.legacyPath.localeCompare(b.legacyPath)),
};
fs.writeFileSync(auditPath, JSON.stringify(summary, null, 2) + "\n");

console.log(JSON.stringify(summary.summary, null, 2));
console.error(JSON.stringify(audit.filter(x => x.disposition === "MIGRATION_ERROR"), null, 2));
if (errors) process.exit(1);
