#!/usr/bin/env node
/**
 * legal-content validation gate (Section 10)
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

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

const args = new Set(process.argv.slice(2));
const schemasOnly = args.has("--schemas-only");
const manifestOnly = args.has("--manifest-only");

let errors = 0;
let warnings = 0;

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
      if (st.isDirectory()) stack.push(p);
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
  if (data.id && !/^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/.test(data.id)) {
    fail(`${relPath}: id '${data.id}' does not match canonical pattern`);
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
        sha256: sha256(raw),
        sources: data.sources,
        content: data.content,
      });
    }
  }

  ok(`scanned ${entities.length} entity file(s), ${byId.size} unique id(s)`);
  return { byId, entities };
}

function collectRefs(value, out) {
  if (typeof value === "string") {
    if (/^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/.test(value)) out.push(value);
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

function validateReferences(entities, byId) {
  for (const e of entities) {
    const refs = [];
    collectRefs(e.sources, refs);
    collectRefs(e.content, refs);
    for (const ref of refs) {
      if (ref === e.id) continue;
      if (/^https?:\/\//i.test(ref)) continue;
      if (!/^[a-z0-9-]+:[a-z0-9-]+:[a-z0-9._-]+$/.test(ref)) continue;
      if (!byId.has(ref)) {
        if (e.status === "published") {
          fail(`${e.path}: published entity references missing id '${ref}'`);
        } else {
          warn(`${e.path}: references missing id '${ref}'`);
        }
      }
    }
  }
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
        warn(`manifest sha256 mismatch for ${entry.path} (run npm run manifest:refresh)`);
      }
    }
  }

  for (const e of entities) {
    if ((e.status === "published" || e.status === "review-due" || e.status === "archived") && !seenIds.has(e.id)) {
      fail(`published/review-due/archived entity missing from manifest: ${e.id} (${e.path})`);
    }
  }

  ok(`manifest entities: ${m.entities.length}`);
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
  finish();
}

function finish() {
  console.log(`\nDone. errors=${errors} warnings=${warnings}`);
  process.exit(errors > 0 ? 1 : 0);
}

main();
