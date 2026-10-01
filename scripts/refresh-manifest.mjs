#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = path.join(ROOT, "manifests", "content-manifest.json");
const m = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function sha256File(rel) {
  const raw = fs.readFileSync(path.join(ROOT, rel));
  return crypto.createHash("sha256").update(raw).digest("hex");
}

let n = 0;
for (const e of m.entities) {
  const abs = path.join(ROOT, e.path);
  if (!fs.existsSync(abs)) continue;
  const parsed = JSON.parse(fs.readFileSync(abs, "utf8"));
  e.version = parsed.version;
  e.status = parsed.status;
  e.entityType = parsed.entityType;
  e.id = parsed.id;
  e.sha256 = sha256File(e.path);
  n++;
}
m.generatedAt = new Date().toISOString();
m.entities.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(manifestPath, JSON.stringify(m, null, 2) + "\n");
console.log(`Refreshed ${n} manifest entries`);
