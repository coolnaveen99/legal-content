# Manifests

Publication, discovery, relationship, and audit verification manifests for canonical legal content.

## Manifest Inventory

### Production & Discovery Catalogs

| File | Purpose | Generator Script | Schema / Spec |
|------|---------|------------------|---------------|
| `content-manifest.json` | Production discovery catalog indexing all 4,172 canonical entities | `scripts/refresh-manifest.mjs` | `schemas/manifest.schema.json` |
| `relationship-index.json` | Bidirectional knowledge-graph index (5,085 edges across 4,019 nodes) | `scripts/build-relationship-index.mjs` | [docs/KNOWLEDGE-GRAPH-RELATIONSHIPS.md](../docs/KNOWLEDGE-GRAPH-RELATIONSHIPS.md) |
| `legacy-topic-migration.json` | Legacy topic gap migration inventory from `codepackr-law` | `scripts/migrate-legacy-topics.mjs` | [docs/MIGRATION-FROM-CODEPACKR-LAW.md](../docs/MIGRATION-FROM-CODEPACKR-LAW.md) |

### Phase Verification & Audit Reports

| File | Phase | Scope & Purpose |
|------|-------|-----------------|
| `phase-2-quality-audit.json` | Phase 2 | Canonical content quality and structural audit report |
| `phase-3-provenance-audit.json` | Phase 3 | Primary statutory source and legal provenance audit report |
| `phase-3b-topic-verification.json` | Phase 3B | Topic-to-primary-source verification and citation mapping |
| `phase-4-legal-verification.json` | Phase 4 | Legal proposition and case-law verification audit |
| `phase-6-statutory-verification.json` | Phase 6 | Statutory section and provision reference consistency audit |
| `phase-7-statutory-deep-verification.json` | Phase 7 | Statutory provision deep verification and cross-sanhita alignment |
| `phase-8-judgment-verification.json` | Phase 8 | Judgment metadata and case-law deep verification audit |
| `phase-9-judgment-registry.json` | Phase 9 | Canonical judgment registry and topic linkage index |
| `phase-10-authoritative-judgment-verification.json` | Phase 10 | Authoritative Supreme Court judgment verification manifest (29 verified, 95 deferred) |
| `phase-11-proposition-verification.json` | Phase 11 | Proposition-level case-law enrichment report (10 Priority-1 review set) |
| `phase-12-judgment-completeness.json` | Phase 12 | Priority-1 judgment completeness and context reconciliation (10/10 complete) |
| `phase-13-final-acceptance-readiness.json` | Phase 13 | Final acceptance readiness audit gate summary (6/6 gates passed) |

### Chunked Archival Storage

- `content-manifest.json.z64.*`: Compressed base64 chunked parts for Git LFS/payload size optimization.

## Rules & Standards

See [docs/MANIFEST-AND-VERSIONING.md](../docs/MANIFEST-AND-VERSIONING.md) for:

- Generation algorithm (canonical ID sort, UTC timestamp, SHA-256 calculation)
- Entity versioning (`version >= 1`)
- Lifecycle status rules (`published`, `review`, `archived`)
- Graph integrity, ID collision prevention, orphan-reference detection, and missing-source validation
- Publication snapshot strategy (Git SHA + manifest pairing)

## Repository Identity

- `repository`: must remain `coolnaveen99/legal-content`.
- Schema: [schemas/manifest.schema.json](../schemas/manifest.schema.json).
