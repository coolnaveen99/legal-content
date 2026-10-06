#!/usr/bin/env node
/**
 * legal-content validation gate (Section 10) + Phase 2 relationship graph checks
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function stableStringify(value) {
  if (value === null || typeof value !== "object") return JSON.stringify(value);
  if (Array.isArray(value)) return `[${value.map(stableStringify).join(",")}]`;
  const keys = Object.keys(value).sort();
  return `{${keys.map((k) => `${JSON.stringify(k)}:${stableStringify(value[k])}`).join(",")}}`;
}

function sha256Canonical(value) {
  return crypto.createHash("sha256").update(stableStringify(value), "utf8").digest("hex");
}

const CONTENT_DIRS = [
  "topics",
  "provisions",
  "judgments",
  "doctrines",
  "comparisons",
  "illustrations",
  "sources",
  "sanhita-mappings",
  "collections",
  "seo",
];

const STATUS_ENUM = new Set([
  "draft",
  "research",
  "review",
  "verified",
  "approved",
  "published",
  "review-due",
  "update",
  "archived",
]);

const ENTITY_TYPES = new Set([
  "topic",
  "provision",
  "judgment",
  "doctrine",
  "comparison",
  "illustration",
  "source",
  "collection",
  "sanhitaMapping",
  "seoRecord",
]);

const ID_PREFIX_TO_TYPE = {
  topic: "topic",
  provision: "provision",
  judgment: "judgment",
  doctrine: "doctrine",
  comparison: "comparison",
  illustration: "illustration",
  source: "source",
  collection: "collection",
  "sanhita-mapping": "sanhitaMapping",
  seo: "seoRecord",
};

const RELATION_FIELD_TYPES = {
  relatedTopics: "topic",
  relatedJudgments: "judgment",
  relatedProvisions: "provision",
  relatedDoctrines: "doctrine",
  illustrations: "illustration",
  members: null,
  sources: "source",
  lawsInvolved: "provision",
  precedentsReliedUpon: "judgment",
  laterJudgments: "judgment",
};

const CANONICAL_ID_RE = /^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/;

const args = new Set(process.argv.slice(2));
const schemasOnly = args.has("--schemas-only");
const manifestOnly = args.has("--manifest-only");
const graphReport = args.has("--graph-report");
const strictReciprocal = args.has("--strict-reciprocal");

let errors = 0;
let warnings = 0;
let relationStats = { checked: 0, missing: 0, typeMismatch: 0, reciprocalGaps: 0 };

function fail(msg) {
  console.error(`ERROR: ${msg}`);
  errors += 1;
}

function warn(msg) {
  console.warn(`WARN: ${msg}`);
  warnings += 1;
}

function ok(msg) {
  console.log(`OK: ${msg}`);
}

function readJson(filePath) {
  const raw = fs.readFileSync(filePath, "utf8");
  try {
    return { raw, data: JSON.parse(raw) };
  } catch (e) {
    fail(`Invalid JSON: ${path.relative(ROOT, filePath)} — ${e.message}`);
    return null;
  }
}

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
      if (st.isDirectory() && name !== "archive") stack.push(p);
      else if (name.endsWith(".json")) out.push(p);
    }
  }
  return out;
}

function sha256(raw) {
  return crypto.createHash("sha256").update(raw, "utf8").digest("hex");
}

function validateSchemasPresent() {
  const schemaDir = path.join(ROOT, "schemas");
  const required = [
    "content-envelope.schema.json",
    "topic.schema.json",
    "judgment.schema.json",
    "manifest.schema.json",
    "provision.schema.json",
    "doctrine.schema.json",
    "comparison.schema.json",
    "illustration.schema.json",
    "source.schema.json",
    "sanhita-mapping.schema.json",
    "collection.schema.json",
    "seo.schema.json",
  ];
  for (const f of required) {
    const p = path.join(schemaDir, f);
    if (!fs.existsSync(p)) fail(`Missing schema: schemas/${f}`);
    else {
      const j = readJson(p);
      if (j) ok(`schema ${f}`);
    }
  }
}

function validateEntityEnvelope(relPath, data) {
  const req = [
    "schemaVersion",
    "entityType",
    "id",
    "version",
    "status",
    "title",
    "jurisdiction",
    "content",
    "sources",
    "updatedAt",
  ];
  for (const k of req) {
    if (!(k in data)) fail(`${relPath}: missing required field '${k}'`);
  }
  if (data.schemaVersion && !/^v[0-9]+$/.test(data.schemaVersion)) {
    fail(`${relPath}: schemaVersion must match ^v[0-9]+$`);
  }
  if (data.entityType && !ENTITY_TYPES.has(data.entityType)) {
    fail(`${relPath}: unknown entityType '${data.entityType}'`);
  }
  if (data.status && !STATUS_ENUM.has(data.status)) {
    fail(`${relPath}: invalid status '${data.status}'`);
  }
  if (data.version != null && (!Number.isInteger(data.version) || data.version < 1)) {
    fail(`${relPath}: version must be integer >= 1`);
  }
  if (data.id && !CANONICAL_ID_RE.test(data.id)) {
    fail(`${relPath}: id '${data.id}' does not match canonical pattern`);
  }
  if (data.id && data.entityType) {
    const prefix = data.id.split(":")[0];
    const expected = ID_PREFIX_TO_TYPE[prefix];
    if (expected && expected !== data.entityType) {
      fail(`${relPath}: id prefix '${prefix}' does not match entityType '${data.entityType}'`);
    }
  }
  if (
    Array.isArray(data.sources) &&
    data.status === "published" &&
    data.sources.length === 0 &&
    data.entityType !== "source"
  ) {
    fail(`${relPath}: published entity must not have empty sources[]`);
  }
}

function validateEntitiesAndIds() {
  const byId = new Map();
  const entities = [];

  for (const dir of CONTENT_DIRS) {
    for (const filePath of walkJsonFiles(dir)) {
      const rel = path.relative(ROOT, filePath).replace(/\\/g, "/");
      const parsed = readJson(filePath);
      if (!parsed) continue;
      const { raw, data } = parsed;
      validateEntityEnvelope(rel, data);
      if (data.id) {
        if (byId.has(data.id)) {
          fail(`Duplicate id '${data.id}': ${byId.get(data.id)} and ${rel}`);
        } else {
          byId.set(data.id, rel);
        }
      }
      entities.push({
        id: data.id,
        entityType: data.entityType,
        path: rel,
        version: data.version,
        status: data.status,
        sha256: sha256Canonical(data),
        sources: data.sources,
        content: data.content,
        rawData: data,
      });
    }
  }

  ok(`scanned ${entities.length} entity file(s), ${byId.size} unique id(s)`);
  return { byId, entities };
}

function collectRefs(value, out) {
  if (typeof value === "string") {
    if (CANONICAL_ID_RE.test(value)) out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) collectRefs(v, out);
    return;
  }
  if (value && typeof value === "object") {
    for (const v of Object.values(value)) collectRefs(v, out);
  }
}

function extractNamedRelations(entity) {
  const found = [];
  const content = entity.content || {};
  for (const [field, expectedType] of Object.entries(RELATION_FIELD_TYPES)) {
    let arr = null;
    if (field === "sources" && Array.isArray(entity.sources)) arr = entity.sources;
    else if (Array.isArray(content[field])) arr = content[field];
    else if (entity.rawData && Array.isArray(entity.rawData[field])) arr = entity.rawData[field];
    if (!arr) continue;
    for (const id of arr) {
      if (typeof id === "string" && CANONICAL_ID_RE.test(id)) {
        found.push({ field, id, expectedType });
      }
    }
  }
  return found;
}

/** Same-family topics share a content directory or a local-id family prefix. Cross-family links are intentionally one-way. */
function sameTopicFamily(a, b) {
  const dirA = a.path.split("/").slice(0, 2).join("/");
  const dirB = b.path.split("/").slice(0, 2).join("/");
  if (dirA === dirB && dirA.startsWith("topics/")) return true;
  const localA = a.id.split(":")[2] || "";
  const localB = b.id.split(":")[2] || "";
  const fam = (s) => {
    if (s.startsWith("pil-")) return "pil";
    if (s.startsWith("constitution-art-")) return "constitution-art";
    if (s.startsWith("fundamental-rights-")) return "fundamental-rights";
    if (s.startsWith("dpsp-")) return "dpsp";
    const i = s.indexOf("-");
    return i > 0 ? s.slice(0, i) : s;
  };
  return fam(localA) === fam(localB);
}

function validateReferences(entities, byId) {
  const entityById = new Map(entities.map((e) => [e.id, e]));

  for (const e of entities) {
    for (const rel of extractNamedRelations(e)) {
      relationStats.checked += 1;
      if (rel.id === e.id) continue;
      if (!byId.has(rel.id)) {
        relationStats.missing += 1;
        if (e.status === "published") {
          fail(`${e.path}: published entity ${rel.field} references missing id '${rel.id}'`);
        } else {
          warn(`${e.path}: ${rel.field} references missing id '${rel.id}'`);
        }
        continue;
      }
      const target = entityById.get(rel.id);
      if (rel.expectedType && target && target.entityType !== rel.expectedType) {
        relationStats.typeMismatch += 1;
        fail(
          `${e.path}: ${rel.field} '${rel.id}' has entityType '${target.entityType}', expected '${rel.expectedType}'`
        );
      }
      const prefix = rel.id.split(":")[0];
      const mapped = ID_PREFIX_TO_TYPE[prefix];
      if (mapped && target && mapped !== target.entityType) {
        relationStats.typeMismatch += 1;
        fail(`${e.path}: ref '${rel.id}' prefix maps to ${mapped} but target is ${target.entityType}`);
      }
    }

    const refs = [];
    collectRefs(e.sources, refs);
    collectRefs(e.content, refs);
    for (const ref of refs) {
      if (ref === e.id) continue;
      if (/^https?:\/\//i.test(ref)) continue;
      if (!CANONICAL_ID_RE.test(ref)) continue;
      if (!byId.has(ref)) {
        if (e.status === "published") {
          fail(`${e.path}: published entity references missing id '${ref}'`);
        } else {
          warn(`${e.path}: references missing id '${ref}'`);
        }
      }
    }
  }

  for (const e of entities) {
    if (e.entityType !== "topic") continue;
    const related = (e.content && e.content.relatedTopics) || [];
    for (const otherId of related) {
      if (typeof otherId !== "string" || !CANONICAL_ID_RE.test(otherId)) continue;
      const other = entityById.get(otherId);
      if (!other || other.entityType !== "topic") continue;
      if (!sameTopicFamily(e, other)) continue;
      const back = (other.content && other.content.relatedTopics) || [];
      if (!back.includes(e.id)) {
        relationStats.reciprocalGaps += 1;
        const msg = `${e.path}: relatedTopics includes '${otherId}' but inverse relatedTopics does not list '${e.id}' (same-family)`;
        if (strictReciprocal) fail(msg);
        else warn(msg);
      }
    }
  }

  ok(
    `relationship checks: ${relationStats.checked} named refs, missing=${relationStats.missing}, typeMismatch=${relationStats.typeMismatch}, reciprocalGaps=${relationStats.reciprocalGaps}`
  );
}

function validateManifest(byId, entities) {
  const manifestPath = path.join(ROOT, "manifests", "content-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    fail("Missing manifests/content-manifest.json");
    return;
  }
  const parsed = readJson(manifestPath);
  if (!parsed) return;
  const m = parsed.data;

  if (!m.manifestVersion || !/^v[0-9]+$/.test(m.manifestVersion)) {
    fail("manifest: invalid or missing manifestVersion");
  }
  if (!m.generatedAt) fail("manifest: missing generatedAt");
  if (m.repository !== "coolnaveen99/legal-content") {
    fail(`manifest: repository must be coolnaveen99/legal-content (got ${m.repository})`);
  }
  if (!Array.isArray(m.entities)) {
    fail("manifest: entities must be an array");
    return;
  }

  const seenIds = new Set();
  const seenPaths = new Set();
  const entityByPath = new Map(entities.map((e) => [e.path, e]));

  for (const entry of m.entities) {
    for (const k of ["id", "entityType", "path", "version", "status"]) {
      if (entry[k] == null) fail(`manifest entry missing '${k}': ${JSON.stringify(entry)}`);
    }
    if (seenIds.has(entry.id)) fail(`manifest duplicate id '${entry.id}'`);
    seenIds.add(entry.id);
    if (seenPaths.has(entry.path)) fail(`manifest duplicate path '${entry.path}'`);
    seenPaths.add(entry.path);

    const abs = path.join(ROOT, entry.path);
    if (!fs.existsSync(abs)) {
      fail(`manifest path does not exist: ${entry.path}`);
      continue;
    }
    const live = entityByPath.get(entry.path.replace(/\\/g, "/"));
    if (live) {
      if (live.id !== entry.id) fail(`manifest id mismatch for ${entry.path}`);
      if (live.entityType !== entry.entityType) fail(`manifest entityType mismatch for ${entry.path}`);
      if (live.version !== entry.version) fail(`manifest version mismatch for ${entry.path}`);
      if (live.status !== entry.status) fail(`manifest status mismatch for ${entry.path}`);
      if (entry.sha256 && entry.sha256 !== live.sha256) {
        fail(`manifest sha256 mismatch for ${entry.path} (run npm run manifest:refresh)`);
      }
    }
  }

  for (const e of entities) {
    if (seenIds.has(e.id)) continue;
    if (e.status === "published" || e.status === "review-due" || e.status === "archived") {
      fail(`published/review-due/archived entity missing from manifest: ${e.id} (${e.path})`);
    }
  }

  ok(`manifest entities: ${m.entities.length}`);
}

function printGraphReport(entities) {
  const edges = [];
  for (const e of entities) {
    for (const rel of extractNamedRelations(e)) {
      edges.push({ from: e.id, field: rel.field, to: rel.id });
    }
  }
  console.log(`\n--- graph report: ${edges.length} directed edges ---`);
  const byField = {};
  for (const ed of edges) {
    byField[ed.field] = (byField[ed.field] || 0) + 1;
  }
  for (const [f, n] of Object.entries(byField).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${f}: ${n}`);
  }
}

function validateSeoRecords(entities, byId) {
  const seenPaths = new Map();
  for (const entity of entities.filter((e) => e.entityType === 'seoRecord')) {
    const content = entity.content || {};
    const canonicalEntityId = content.canonicalEntityId;
    const canonicalPath = content.canonicalPath;
    const label = entity.path;

    if (typeof canonicalEntityId !== 'string' || !CANONICAL_ID_RE.test(canonicalEntityId)) {
      fail(`${label}: SEO record must declare a canonicalEntityId using canonical ID format`);
    } else if (!byId.has(canonicalEntityId)) {
      fail(`${label}: SEO canonicalEntityId does not resolve: ${canonicalEntityId}`);
    } else if (canonicalEntityId.startsWith('seo:')) {
      fail(`${label}: SEO canonicalEntityId must point to a legal content entity, not another seoRecord`);
    }

    if (typeof canonicalPath !== 'string' || !canonicalPath.startsWith('/') || canonicalPath.startsWith('//')) {
      fail(`${label}: canonicalPath must be an absolute site path beginning with '/'`);
    } else if (canonicalPath.includes('?') || canonicalPath.includes('#')) {
      fail(`${label}: canonicalPath must not contain query strings or URL fragments`);
    } else {
      const previous = seenPaths.get(canonicalPath);
      if (previous) {
        fail(`Duplicate SEO canonicalPath '${canonicalPath}': ${previous} and ${label}`);
      } else {
        seenPaths.set(canonicalPath, label);
      }
    }

    if (typeof content.title !== 'string' || content.title.trim().length === 0) {
      fail(`${label}: SEO content.title is required`);
    }
    if (typeof content.description === 'string' && content.description.length > 320) {
      fail(`${label}: SEO content.description exceeds 320 characters`);
    }
    if (content.noindex != null && typeof content.noindex !== 'boolean') {
      fail(`${label}: SEO content.noindex must be boolean when present`);
    }
  }
  ok(`SEO metadata checks: ${entities.filter((e) => e.entityType === 'seoRecord').length} record(s), ${seenPaths.size} canonical path(s)`);
}

function main() {
  console.log("legal-content validate — root:", ROOT);

  if (!manifestOnly) {
    validateSchemasPresent();
  }

  if (schemasOnly) {
    finish();
    return;
  }

  const { byId, entities } = validateEntitiesAndIds();

  if (!manifestOnly) {
    validateReferences(entities, byId);
  }

  validateManifest(byId, entities);
  validateSeoRecords(entities, byId);

  if (graphReport) printGraphReport(entities);

  finish();
}

function finish() {
  console.log(`\nDone. errors=${errors} warnings=${warnings}`);
  process.exit(errors > 0 ? 1 : 0);
}

main();
