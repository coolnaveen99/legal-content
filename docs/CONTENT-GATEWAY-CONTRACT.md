# Content Gateway — Repository Read & Integration Contract

Checklist **Section 8** (legal-content side). Application implementation lives in `coolnaveen99/codepackr-law` (ContentRepository abstraction). This document is the **canonical read contract** consumers must implement against.

Repository: `coolnaveen99/legal-content`

## 1. Repository API / read contract

### Transport (v1)

Content is **Git-backed JSON files** discovered via the manifest. Supported read modes:

| Mode | Description |
|------|-------------|
| **Raw GitHub** | `GET` raw file URLs for `main` or a pinned commit/tag |
| **Cloned/vendored snapshot** | Application build copies or fetches a content ref |
| **Future Gateway service** | Authenticated API that returns the same shapes with validation |

Canonical identity of a library build is:

- `contentRef`: git commit SHA, tag, or branch
- `manifestPath`: default `manifests/content-manifest.json`

### Read operations (logical)

| Operation | Input | Output |
|-----------|-------|--------|
| `getManifest` | contentRef | Manifest object (schema v1) |
| `listEntities` | optional filters (type, status) | Entity index entries |
| `getEntity` | canonical `id` | Full entity JSON |
| `getEntityByPath` | repo-relative path | Full entity JSON |
| `getEntitiesByType` | entityType | Array of entities or index stubs |

Production default filter: `status ∈ { published, review-due }` (archived optional for research UI).

### ID resolution

1. Load manifest.
2. Find entry where `id` matches.
3. Fetch `path`.
4. Verify envelope `id` / `version` / `status` match manifest (integrity).
5. Optionally verify `sha256`.

## 2. Manifest loading contract

- Schema: `schemas/manifest.schema.json`
- `repository` must equal `coolnaveen99/legal-content`
- `entities[]` sorted by `id` in generated manifests
- Empty `entities` is valid for bootstrap
- Consumers must tolerate unknown optional fields only after a manifest version bump policy; v1 is closed (`additionalProperties: false`)

Failure modes: invalid JSON, schema failure, wrong repository field → **hard error**, do not serve partial production library silently.

## 3. Content shard loading contract

- **Shard** = one entity JSON file at manifest `path`
- Path pattern: `<domain>/<jurisdiction-or-group>/<local-file>.json` (conventional, not enforced by schema)
- Load only paths listed in the manifest for production
- Do not scan the whole repo in production if a manifest is present (avoids draft leakage)
- Lazy-load entity bodies by route/ID; do not bundle the entire corpus into the first paint unless the app consciously vendors a small subset

## 4. Schema validation before publication

Publish path (Admin → PR → main) **must**:

1. Validate entity against the matching `schemas/*.schema.json` for `entityType`
2. Validate envelope required fields and status enum
3. Validate manifest after update

Consumers **should** validate on ingest in CI; runtime may use lighter checks (required fields + ID match) for performance.

## 5. Reference validation before publication

Per [MANIFEST-AND-VERSIONING.md](MANIFEST-AND-VERSIONING.md) and [CROSS-ENTITY-REFERENCE-RULES.md](CROSS-ENTITY-REFERENCE-RULES.md):

- No orphan hard references
- Type prefix consistency
- Sanhita mappings resolve both ends

## 6. Source validation before publication

Per [SOURCE-AND-VERIFICATION.md](SOURCE-AND-VERIFICATION.md):

- `published` entities require non-empty adequate `sources`
- No invented citations

## 7. Version / hash validation

- Manifest `version` must equal entity `version`
- If `sha256` present, must match file bytes
- Client cache keys should include `contentRef` + `id` + `version` (and hash if present)

## 8. Error handling contract

| Condition | Consumer behavior |
|-----------|---------------------|
| Manifest missing/invalid | Fail closed; show error; optional legacy adapter only if explicitly configured |
| Entity not in manifest | Treat as not published |
| Entity fetch 404 | Not found UI; do not invent content |
| ID mismatch file vs manifest | Integrity error; skip entity; report |
| Hash mismatch | Integrity error; skip or hard fail in strict mode |
| Unpublished status requested in prod | Deny unless Admin mode |

Never invent missing legal content to “fill” a gap.

## 9. Cache / invalidation strategy

- Cache key: `legal-content:{contentRef}:{id}:{version}`
- Invalidate when `contentRef` changes (new deploy / settings)
- Short-term HTTP cache allowed for raw public JSON; prefer revalidate on ref change
- Service worker / local persistence must not present stale law as current after a known ref bump without user-visible update path

## 10. Backward compatibility strategy

- Entity `schemaVersion` and manifest `manifestVersion` evolve per [SCHEMA-VERSIONING-POLICY.md](SCHEMA-VERSIONING-POLICY.md)
- Gateway/app dual-read old and new majors during migration windows
- Legacy content adapter in `codepackr-law` may run in parallel until parity; it must not block canonical architecture
- Removing a published ID is forbidden; use `archived` and optional replacement pointer in content

## 11. Security / privacy boundary

- This repository is public library data, not user case files
- Gateway must not require users to upload confidential facts to read published content
- Admin write path is separate (authz, PR, validation) — not part of anonymous read contract
