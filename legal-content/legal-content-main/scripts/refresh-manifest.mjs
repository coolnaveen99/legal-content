#!/usr/bin/env node
/**
 * Full regenerates manifests/content-manifest.json by scanning all entity directories.
 * (Previously only refreshed sha256 for entries already listed — which left the
 * manifest stuck at a pilot subset while hundreds of published entities existed on disk.)
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { REPO_ROOT, collectEntities, sha256Canonical } from "./lib.mjs";

const entities = collectEntities()
  .filter((entity) => entity.data && entity.data.id)
  .sort((a, b) => a.data.id.localeCompare(b.data.id))
  .map((entity) => ({
    id: entity.data.id,
    entityType: entity.data.entityType,
    path: entity.relPath,
    version: entity.data.version,
    status: entity.data.status,
    sha256: sha256Canonical(entity.data),
  }));

const manifest = {
  manifestVersion: "v1",
  generatedAt: new Date().toISOString(),
  repository: "coolnaveen99/legal-content",
  entities,
};

const out = join(REPO_ROOT, "manifests/content-manifest.json");
writeFileSync(out, JSON.stringify(manifest, null, 2) + "\n");
console.log(`Wrote ${entities.length} entities to manifests/content-manifest.json`);
