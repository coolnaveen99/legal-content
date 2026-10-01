# Cross-Entity Reference Rules

## Purpose

Define how entities in `legal-content` may refer to one another so the Content Gateway and application can resolve, validate, and navigate relationships without broken links or ambiguous IDs.

See also: [KNOWLEDGE-GRAPH-RELATIONSHIPS.md](./KNOWLEDGE-GRAPH-RELATIONSHIPS.md) (Phase 2).

## Canonical ID form

All cross-entity references use the stable ID format:

```text
<entity-type>:<jurisdiction-or-domain>:<local-id>
```

Examples:

- `topic:india:bns-s23`
- `provision:india:bns-s23`
- `judgment:india:kesavananda-bharati-1973`
- `doctrine:india:res-judicata`
- `source:india:india-code-bns-2023`

Human-readable titles are never used as foreign keys.

## Allowed reference fields (by entity)

| Entity | May reference |
|--------|----------------|
| **topic** | `relatedTopics[]`, `relatedJudgments[]`, `illustrations[]`, `sources[]`, provision IDs in body metadata, doctrine IDs |
| **provision** | related topics, judgments, doctrines, illustrations, sources, Sanhita mapping IDs |
| **judgment** | `lawsInvolved[]` (provision IDs preferred), `precedentsReliedUpon[]` / `laterJudgments[]` (judgment IDs), related topics, sources |
| **doctrine** | topics, provisions, judgments, sources |
| **comparison** | left/right entity IDs (topic, provision, doctrine, judgment) |
| **illustration** | parent topic/provision IDs, sources |
| **collection** | ordered list of entity IDs of any published type |
| **sanhita-mapping** | old and new provision IDs |
| **seo** | target entity ID |
| **source** | (leaf) generally no outbound legal-entity refs; may cite other source IDs only for hierarchy |

Envelope-level `sources` is always an array of **source entity IDs** (or, until source entities are fully populated, URLs that will be migrated to source IDs).

## Resolution rules

1. **Published consumers** resolve only entities with `status` ∈ {`published`} unless the consumer explicitly requests draft/review modes (Admin only). Archived may be shown for historical navigation with a clear label.
2. **Missing target:** validation **fails** for publish if a reference points to an unknown ID. Optional related-* arrays must not invent targets.
3. **Type match:** `relatedJudgments` must reference `judgment` entities; `relatedTopics` must reference `topic` entities; `sources` must reference `source` entities. CI enforces this.
4. **Archived targets:** references to `archived` IDs remain valid for historical navigation; UI must label archived state.
5. **Version:** references point to the entity ID, not a specific version number. Consumers load the latest published version unless a snapshot pin is specified in a future manifest field.
6. **Bidirectional (`relatedTopics`):** if topic A lists B under `relatedTopics`, topic B **should** list A. CI emits a **warning** by default; `--strict-reciprocal` treats gaps as errors. Other fields remain intentionally one-way unless documented otherwise.

## Prohibitions

- Do not embed full nested entity bodies inside another entity except temporary authoring drafts that are expanded before publish.
- Do not use application-local paths (`src/data/topics/...`) as canonical references.
- Do not invent IDs for cases or sections that are not registered.

## Validation (CI — implemented)

- Every referenced canonical ID exists (error for published sources).
- Entity type prefix matches the referenced entity's `entityType`.
- Named relationship fields enforce expected target types.
- Soft reciprocal check for `relatedTopics`.
- Manifest includes all published / review-due / archived entities.
- No duplicate IDs.
