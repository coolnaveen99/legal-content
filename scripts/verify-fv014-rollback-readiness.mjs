#!/usr/bin/env node
/**
 * FV-014 — Rollback readiness gate.
 * Verifies that production recovery can be performed using immutable content refs.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const errors = [], warnings = [];
const required = [
  "docs/PRODUCTION-READINESS.md",
  "docs/MANIFEST-AND-VERSIONING.md",
  "manifests/content-manifest.json",
  "scripts/verify-fv013-release-snapshot.mjs"
];
for (const file of required) if (!fs.existsSync(path.join(ROOT, file))) errors.push("Missing rollback control: " + file);

let readiness = "";
let versioning = "";
try { readiness = fs.readFileSync(path.join(ROOT,"docs/PRODUCTION-READINESS.md"),"utf8"); } catch {}
try { versioning = fs.readFileSync(path.join(ROOT,"docs/MANIFEST-AND-VERSIONING.md"),"utf8"); } catch {}

for (const phrase of [
  "Pin production `contentRef`",
  "reset Gateway ref to last known good SHA",
  "do not rewrite published history"
]) if (!readiness.includes(phrase)) warnings.push("Production-readiness rollback contract is missing: " + phrase);

for (const phrase of [
  "Git commit SHA",
  "Rollback = point Gateway at previous `contentRef`"
]) if (!versioning.includes(phrase)) errors.push("Manifest/versioning rollback rule is missing: " + phrase);

const snapshotPath = path.join(ROOT,"manifests/fv-013-release-snapshot.json");
if (fs.existsSync(snapshotPath)) {
  try {
    const snapshot = JSON.parse(fs.readFileSync(snapshotPath,"utf8"));
    if (snapshot.status === "FAIL") errors.push("FV-013 release snapshot is FAIL");
    if (!snapshot.gitSha) errors.push("FV-013 snapshot has no gitSha");
    if (!snapshot.manifest?.sha256) warnings.push("FV-013 snapshot has no manifest SHA-256");
  } catch { errors.push("FV-013 release snapshot is invalid JSON"); }
} else {
  warnings.push("FV-013 release snapshot is not present yet; CI should generate it before release.");
}

const result = {
  schemaVersion:"v1",
  gate:"FV-014",
  generatedAt:new Date().toISOString(),
  repository:"coolnaveen99/legal-content",
  summary:{errors:errors.length,warnings:warnings.length,status:errors.length?"FAIL":"PASS"},
  recovery:{
    immutableRefRequired:true,
    rewriteHistory:false,
    consumerAction:"point contentRef to previous known-good Git SHA",
    legalPublicationStatusUnchanged:true
  },
  errors,warnings
};
const out=path.join(ROOT,"manifests/fv-014-rollback-readiness.json");
const md=path.join(ROOT,"docs/FV-014-ROLLBACK-READINESS.md");
fs.writeFileSync(out,JSON.stringify(result,null,2)+"\n");
fs.writeFileSync(md,[
"# FV-014 Rollback Readiness","",
`Status: **${result.summary.status}**`,"",
"## Recovery contract","",
"- Production consumers use an immutable content reference.",
"- Recovery changes the consumer reference to the previous known-good Git SHA.",
"- Published Git history is not rewritten.",
"- Rollback does not silently promote or demote legal content statuses.",
"- FV-014 is an engineering recovery gate, not a legal-quality certification.","",
...(errors.length?["## Errors","",...errors.map(x=>"- "+x),""]:[]),
...(warnings.length?["## Warnings","",...warnings.map(x=>"- "+x),""]:[])
].join("\n"));
console.log(JSON.stringify(result.summary,null,2));
process.exit(errors.length?1:0);
