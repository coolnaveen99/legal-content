#!/usr/bin/env node
/**
 * Verify the migrated legacy catalog remains intact while allowing additive enhancement.
 *
 * This gate intentionally does NOT require enhanced topic JSON to remain byte-identical.
 * The immutable baseline is the migration commit recorded in docs/CONTENT-BASELINE.md.
 * It verifies that every real legacy migration record still resolves to a canonical topic
 * and that the topic retains its legacy migration provenance.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const manifestPath = path.join(ROOT, "manifests/legacy-topic-migration.json");
if (!fs.existsSync(manifestPath)) throw new Error("Missing manifests/legacy-topic-migration.json");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
const records = Array.isArray(manifest.records) ? manifest.records : [];
const real = records.filter(r => r.disposition === "REPLACED_FROM_LEGACY");

let errors = 0;
let checked = 0;

for (const record of real) {
  checked += 1;
  if (!record.canonicalPath) {
    console.error(`ERROR: legacy record has no canonicalPath: ${record.legacyPath}`);
    errors += 1;
    continue;
  }

  const filePath = path.join(ROOT, record.canonicalPath);
  if (!fs.existsSync(filePath)) {
    console.error(`ERROR: preserved legacy topic is missing: ${record.canonicalPath}`);
    errors += 1;
    continue;
  }

  let entity;
  try {
    entity = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`ERROR: invalid JSON in preserved topic ${record.canonicalPath}: ${error.message}`);
    errors += 1;
    continue;
  }

  const content = entity.content && typeof entity.content === "object" ? entity.content : {};
  const legacyParts = record.legacyPath.split("/");
  const expectedSubject = legacyParts[0] === "adr" ? "arbitration" : legacyParts[0] === "tort" ? "torts" : legacyParts[0];
  const expectedTopicId = legacyParts.slice(1).join("/");
  if (content.legacySubjectSlug !== expectedSubject || content.legacyTopicId !== expectedTopicId) {
    console.error(`ERROR: legacy identity metadata missing: ${record.canonicalPath}`);
    errors += 1;
  }

  if (entity.entityType !== "topic") {
    console.error(`ERROR: canonical entity is not a topic: ${record.canonicalPath}`);
    errors += 1;
  }
}

const expectedCount = Number(manifest.summary?.exact || 0);
if (expectedCount !== real.length) {
  console.error(`ERROR: migration summary exact=${expectedCount} but real preserved records=${real.length}`);
  errors += 1;
}

console.log(`Legacy preservation gate: checked=${checked}, errors=${errors}`);
process.exit(errors ? 1 : 0);
