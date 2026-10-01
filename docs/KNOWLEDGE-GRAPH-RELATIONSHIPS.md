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
2. **Type match** — named fields must point at the expected `entityType` (e.g. `relatedJudgments` → judgment).
3. **ID prefix** — `topic:…` IDs must belong to `entityType: topic`, etc.
4. **Duplicate IDs** — fatal.
5. **Soft reciprocal `relatedTopics`** — if topic A lists B, B should list A (**warning** by default; `--strict-reciprocal` promotes to error).
6. **Manifest consistency** — published/review-due/archived entities must appear in the full manifest.

Flags:

```bash
npm run validate
node scripts/validate.mjs --graph-report
node scripts/validate.mjs --strict-reciprocal
```

## Reciprocity rules

| Relationship | Reciprocity |
|--------------|-------------|
| `relatedTopics` ↔ `relatedTopics` | **Recommended**; soft-checked |
| `relatedJudgments` → judgment | **One-way** unless judgment lists topics |
| collection `members` → entity | **One-way** (collection owns membership) |
| entity → `sources` | **One-way** (sources are leaves) |
| doctrine → provisions/judgments | **One-way** preferred |

Do not auto-invent inverse edges.

## Status / published targets

- App consumers of **published** content should resolve targets with `status ∈ {published, review-due, archived}`.
- References to `draft` / `research` targets should not be required for publish of the source entity until those targets are published (authors may use `review` status while wiring the graph).
- Archived targets remain valid IDs for historical navigation; UI must label archived.

## Performance

- Store **IDs only**.
- Resolve via manifest index + single-entity fetch.
- Do not load the full graph into memory for ordinary page views.

## Pilot graph (PIL)

Representative connected set (all IDs real):

```text
collection:india:pil-complete
  → topic:india:pil-locus-standi
  → topic:india:pil-art-32
  → topic:india:pil-art-226
  → topic:india:pil-epistolary-jurisdiction
  → topic:india:pil-limits-and-costs

pil-art-32 → constitution-art-32, pil-locus-standi, pil-art-226, pil-limits-and-costs
pil-art-226 → constitution-art-226, pil-locus-standi, pil-art-32, pil-limits-and-costs
pil-locus-standi ↔ pil-art-32, pil-art-226, pil-limits-and-costs, pil-epistolary-jurisdiction
```

Sources: `source:india:india-pil-practice`, `source:india:india-code-constitution` where applicable.

## Non-goals (this package)

- Full bidirectional enforcement for all edge types
- Embedding judgment decoder bodies inside topics
- Redesigning ContentGateway in codepackr-law
- Replacing the full repository manifest with a pilot-only manifest
