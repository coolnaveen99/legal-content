#!/usr/bin/env node
/**
 * FV-013 — Release snapshot gate.
 * Records the exact repository ref and manifest identity used for a release.
 * This is an engineering/audit record; it does not certify legal correctness.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const errors = [], warnings = [];
const manifestPath = path.join(ROOT, "manifests/content-manifest.json");

function git(args) {
  try { return execSync(`git ${args}`, { cwd: ROOT, encoding: "utf8" }).trim(); }
  catch { return ""; }
}
function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

if (!fs.existsSync(manifestPath)) errors.push("Missing manifests/content-manifest.json");
let manifest = null;
if (fs.existsSync(manifestPath)) {
  try { manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")); }
  catch { errors.push("content-manifest.json is not valid JSON"); }
}
if (manifest && !Array.isArray(manifest.entities)) errors.push("Content manifest has no entities array");

const gitSha = process.env.GITHUB_SHA || git("rev-parse HEAD");
const branch = process.env.GITHUB_REF_NAME || git("branch --show-current") || "main";
const manifestHash = fs.existsSync(manifestPath) ? sha256(manifestPath) : null;
const generatedAt = manifest?.generatedAt || null;
const snapshotId = process.env.CONTENT_SNAPSHOT_ID || `content-${(gitSha || "unknown").slice(0, 12)}`;

if (!gitSha) errors.push("Unable to determine repository commit SHA");
if (branch !== "main" && process.env.RELEASE_STRICT === "true") errors.push(`Release snapshot must be created from main; got ${branch}`);
if (!generatedAt) warnings.push("Manifest generatedAt is unavailable");
if (!manifestHash) warnings.push("Manifest hash is unavailable");

const record = {
  schemaVersion: "v1",
  gate: "FV-013",
  snapshotId,
  repository: "coolnaveen99/legal-content",
  contentRef: gitSha ? `main@${gitSha}` : null,
  gitSha: gitSha || null,
  branch,
  manifest: {
    path: "manifests/content-manifest.json",
    generatedAt,
    sha256: manifestHash,
    entityCount: manifest?.entities?.length ?? null
  },
  createdAt: new Date().toISOString(),
  rollbackRule: "Rollback by changing the consumer contentRef to the previous known-good git SHA; never rewrite published history.",
  status: errors.length ? "FAIL" : "PASS",
  errors,
  warnings
};

const out = path.join(ROOT, "manifests/fv-013-release-snapshot.json");
const report = path.join(ROOT, "docs/FV-013-RELEASE-SNAPSHOT.md");
fs.writeFileSync(out, JSON.stringify(record, null, 2) + "\n");
fs.writeFileSync(report, [
"# FV-013 Release Snapshot","",
`Snapshot: **${snapshotId}**`,
`Status: **${record.status}**`,
`Git SHA: ${record.gitSha || "unavailable"}`,
`Manifest SHA-256: ${record.manifest.sha256 || "unavailable"}`,
`Manifest generatedAt: ${record.manifest.generatedAt || "unavailable"}`,
`Entity count: ${record.manifest.entityCount ?? "unavailable"}`,"",
"## Rollback contract","",
"- Production consumers pin an immutable Git commit SHA (or release tag resolving to one).",
"- Rollback points the consumer to the previous known-good SHA.",
"- Published history is never rewritten or deleted.",
"- This record is an engineering/audit artifact and is not legal certification.","",
...(errors.length ? ["## Errors","",...errors.map(x=>"- "+x),""] : []),
...(warnings.length ? ["## Warnings","",...warnings.map(x=>"- "+x),""] : [])
].join("\n"));
console.log(JSON.stringify({status:record.status,snapshotId,gitSha,manifestHash},null,2));
process.exit(errors.length ? 1 : 0);
