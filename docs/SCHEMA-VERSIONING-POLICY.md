# Schema Versioning Policy

## Purpose

Evolve JSON Schema contracts without breaking published content or the Content Gateway.

## Version identifier

- Envelope field: `schemaVersion` pattern `^v[0-9]+$` (e.g. `v1`, `v2`).
- File identity: each schema file’s `$id` URI under `https://legal-content.codepackr.com/schemas/`.
- Manifest may declare the schema versions it was generated against.

## Compatibility classes

| Change class | Examples | Action |
|--------------|----------|--------|
| **Non-breaking** | Optional new properties; loosened constraints; new enum values that consumers can ignore | Keep same major `schemaVersion`; document in changelog |
| **Breaking** | Remove/rename required fields; change ID pattern; change meaning of status enum | Bump `schemaVersion` (vN → vN+1); provide migration notes; dual-read period if Gateway is live |

## Rules

1. Published entities must declare the `schemaVersion` they conform to.
2. Content Gateway validates each entity against the schema version it declares, if multiple versions are supported.
3. Authors must not change historical published blobs in place to a new schema without a version bump of the **entity** `version` integer and a migration path.
4. Deprecated schema majors remain readable until the checklist’s backward-compatibility strategy retires them.
5. Schema PRs require owner review (see change-approval policy).

## Changelog location

Until a dedicated `schemas/CHANGELOG.md` is added, schema-breaking PRs must describe the migration in the PR body and, when material, a short note under `docs/`.

## Current baseline

All initial schemas ship as **`v1`**.
