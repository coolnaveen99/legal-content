# Knowledge Graph Relationships (Phase 2)

## Purpose

Define how `legal-content` entities form a **validated, ID-based relationship graph** that the Content Gateway and Research Workbench can traverse without embedding full entity bodies.

This document is the Phase 2 work-package for:

```text
Canonical Content → Stable IDs → Validated Relationships → Knowledge Graph
```

## Model found (existing)

Relationships are **lightweight directed references** stored as **canonical IDs** inside entity JSON:

| Field | Typical host | Expected target type |
|-------|--------------|----------------------|
| `sources[]` (envelope) | all entities | `source` |
| `content.relatedTopics[]` | topic | `topic` |
| `content.relatedJudgments[]` | topic, doctrine | `judgment` |
| `content.relatedProvisions[]` | doctrine, judgment | `provision` |
| `content.relatedDoctrines[]` | optional | `doctrine` |
| `content.illustrations[]` | topic | `illustration` |
| `content.members[]` | collection | any |
| `content.lawsInvolved[]` | judgment | `provision` |
| `content.precedentsReliedUpon[]` / `laterJudgments[]` | judgment | `judgment` |

IDs always use:

```text
<entity-type>:<jurisdiction-or-domain>:<local-id>
```

Titles are never foreign keys. Full entities are never nested inside other entities for publish.

## Validation (CI)

`scripts/validate.mjs` enforces:

1. **Existence** — published entities may not reference unknown canonical IDs (error). Non-published: warning.
2. **Type match** — named fields must point at the expected `entityType`.
3. **ID prefix** — `topic:…` IDs must belong to `entityType: topic`, etc.
4. **Duplicate IDs** — fatal.
5. **Same-family reciprocal `relatedTopics`** — if topic A lists B and they are in the **same family**, B should list A (**warning** by default; `--strict-reciprocal` → error).
6. **Manifest consistency** — published/review-due/archived entities must appear in the full manifest.

### Same-family rule

Two topics are same-family when either:

- they share a content directory (`topics/pil/`, `topics/constitution/`, …), or
- their local IDs share a family prefix (`pil-`, `constitution-art-`, `fundamental-rights-`, `dpsp-`, or the first hyphen segment).

**Cross-family** links (e.g. `pil-art-32` → `constitution-art-32`) are **intentionally one-way** and do **not** emit reciprocal warnings.

Flags:

```bash
npm run validate
npm run validate:graph
node scripts/validate.mjs --strict-reciprocal
npm run graph:index   # writes manifests/relationship-index.json (adjacency, not a second manifest)
```

## Relationship index

`scripts/build-relationship-index.mjs` builds `manifests/relationship-index.json`:

- `outbound[id]` → `[{ to, field }, …]`
- `inbound[id]` → `[{ from, field }, …]`

This is an **optional lookup aid** for Gateway/Workbench. It does **not** replace `manifests/content-manifest.json`.

## Reciprocity rules

| Relationship | Reciprocity |
|--------------|-------------|
| `relatedTopics` ↔ `relatedTopics` (same-family) | **Recommended**; soft-checked |
| `relatedTopics` across families | **One-way OK** |
| `relatedJudgments` → judgment | **One-way** unless judgment lists topics |
| collection `members` → entity | **One-way** |
| entity → `sources` | **One-way** |

## Status / published targets

- App consumers of **published** content should resolve targets with `status ∈ {published, review-due, archived}`.
- Archived targets remain valid IDs for historical navigation; UI must label archived.

## Performance

- Store **IDs only**.
- Resolve via manifest index + single-entity fetch; optional `relationship-index` for adjacency.
- Do not load the full graph into memory for ordinary page views.

## Pilot graph (PIL)

```text
collection:india:pil-complete
  → topic:india:pil-locus-standi
  → topic:india:pil-art-32
  → topic:india:pil-art-226
  → topic:india:pil-epistolary-jurisdiction
  → topic:india:pil-limits-and-costs

Among the five PIL topics: relatedTopics are reciprocal (same-family).
PIL → constitution-art-32 / art-226: intentional one-way (cross-family).
```

## Application note (codepackr-law)

ContentGateway should consume **canonical IDs** from entity fields and resolve via Manifest → ContentRepository. No raw GitHub fetches in UI. Relationship index is optional acceleration, not a required app dependency yet.

## Non-goals

- Full bidirectional enforcement for all edge types
- Redesigning ContentGateway in this package
- Replacing the full repository manifest with a pilot-only or graph-only manifest
