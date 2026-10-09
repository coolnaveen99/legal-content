#!/usr/bin/env node
/**
 * FV-012 — Production readiness gate for the canonical content repository.
 * Verifies production-critical repository controls exist and are wired into CI.
 * It does not certify legal correctness or the companion application's deployment.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const requiredFiles = [
  "package.json",
  "scripts/validate.mjs",
  "scripts/validate-enhancements.mjs",
  "scripts/test-relationships.mjs",
  "scripts/refresh-manifest.mjs",
  "docs/PRODUCTION-READINESS.md",
  "docs/PRODUCTION-ACCEPTANCE.md",
  "schemas/manifest.schema.json",
  "schemas/content-envelope.schema.json",
  "manifests/content-manifest.json",
  "manifests/relationship-index.json",
  "manifests/fv-011-full-catalog-verification.json"
];
const errors = [], warnings = [];
for (const file of requiredFiles) if (!fs.existsSync(path.join(ROOT,file))) errors.push("Missing production control: " + file);

let pkg = {};
try { pkg = JSON.parse(fs.readFileSync(path.join(ROOT,"package.json"),"utf8")); }
catch { errors.push("package.json is not valid JSON"); }

const scripts = pkg.scripts || {};
for (const [name, command] of [
  ["validate","node scripts/validate.mjs"],
  ["validate:enhancements","node scripts/validate-enhancements.mjs"],
  ["test:relationships","node scripts/test-relationships.mjs"],
  ["manifest:refresh","node scripts/refresh-manifest.mjs"],
  ["verify:fv005-fv010","node scripts/verify-fv005-fv010.mjs"],
  ["verify:fv011","node scripts/verify-fv011-full-catalog.mjs"]
]) {
  if (scripts[name] !== command) errors.push("Required npm control missing or changed: " + name);
}

const workflowPath = path.join(ROOT,".github/workflows/validate.yml");
const workflow = fs.existsSync(workflowPath) ? fs.readFileSync(workflowPath,"utf8") : "";
for (const command of ["npm run manifest:refresh","npm run validate"]) {
  if (!workflow.includes(command)) errors.push("validate.yml does not execute " + command);
}
if (!workflow.includes("npm run verify:fv011")) warnings.push("FV-011 is not wired into validate.yml; confirm another main workflow executes it.");

const manifest = path.join(ROOT,"manifests/content-manifest.json");
try {
  const m = JSON.parse(fs.readFileSync(manifest,"utf8"));
  if (!Array.isArray(m.entities) && !m.entries && !m.records && !m) errors.push("Content manifest has no recognized entity collection.");
} catch { errors.push("Content manifest is not valid JSON."); }

const relationship = path.join(ROOT,"manifests/relationship-index.json");
try {
  const x = JSON.parse(fs.readFileSync(relationship,"utf8"));
  if (!x || typeof x !== "object") errors.push("Relationship index is not a JSON object.");
} catch { errors.push("Relationship index is not valid JSON."); }

const report = {
  schemaVersion:"v1", gate:"FV-012",
  generatedAt:new Date().toISOString(),
  repository:"coolnaveen99/legal-content", branch:"main",
  scope:"repository production-readiness controls",
  summary:{
    requiredControls:requiredFiles.length,
    presentControls:requiredFiles.length-errors.filter(e=>e.startsWith("Missing production control")).length,
    errors:errors.length, warnings:warnings.length,
    status:errors.length?"FAIL":"PASS"
  },
  controls:{
    validation:"required",
    manifestRefresh:"required",
    relationshipTests:"required",
    enhancementValidation:"required",
    verificationGates:"FV-005 through FV-011",
    legalCertification:"not provided by this gate",
    companionAppDeployment:"not certified by this gate"
  },
  errors,warnings
};
const out=path.join(ROOT,"manifests/fv-012-production-readiness.json");
const md=path.join(ROOT,"docs/FV-012-PRODUCTION-READINESS-REPORT.md");
fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
fs.writeFileSync(md,[
"# FV-012 Production Readiness Report","",
"Generated: "+report.generatedAt,"",
"## Result","",
"**"+report.summary.status+"** — "+(errors.length?"Production control defects require correction.":"Repository production-readiness controls are present and wired for validation."),"",
"## Scope","",
"This gate validates the canonical legal-content repository's production controls. It does not certify legal correctness, final publication eligibility, or the CodePackr Law application's deployment.","",
"## Controls","",
"- Manifest refresh and schema validation",
"- Core content validation",
"- Enhancement validation",
"- Relationship tests",
"- FV-005 through FV-011 verification gates",
"- Production-readiness and production-acceptance documentation",
"",
"## Important boundary","",
"FV-012 is an engineering readiness gate. It does not replace authoritative legal verification or final legal-quality sign-off.","",
...(errors.length?["","## Errors","",...errors.map(x=>"- "+x)]:[]),
...(warnings.length?["","## Warnings","",...warnings.map(x=>"- "+x)]:[])
].join("\n")+"\n");
console.log(JSON.stringify(report.summary,null,2));
process.exit(errors.length?1:0);
