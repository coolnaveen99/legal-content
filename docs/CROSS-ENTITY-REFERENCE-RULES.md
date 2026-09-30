# Cross-Entity Reference Rules

## Purpose

Define how entities in `legal-content` may refer to one another so the Content Gateway and application can resolve, validate, and navigate relationships without broken links or ambiguous IDs.

## Canonical ID form

All cross-entity references use the stable ID format:

```text
<entity-type>:<jurisdiction-or-domain>:<local-id>
```

Examples:

- `topic:india:bns-s23`
- `provision:india:bns-s23`
- `judgment:india:sc-kesavananda-1973`
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

1. **Published consumers** resolve only entities with `status` ∈ {`published`} unless the consumer explicitly requests draft/review modes (Admin only).
2. **Missing target:** validation fails for publish if a required reference points to an unknown ID. Optional related-* arrays may warn but must not invent targets.
3. **Archived targets:** references to `archived` IDs remain valid for historical navigation; UI must label archived state.
4. **Version:** references point to the entity ID, not a specific version number. Consumers load the latest published version unless a snapshot pin is specified in a future manifest field.
5. **Bidirectional:** collections and explicit relation maps may require inverse consistency (e.g. if A lists B as related, publication gate may require B to list A or an explicit one-way flag). Until bidirectional validation is implemented in CI, authors should keep relations consistent manually.

## Prohibitions

- Do not embed full nested entity bodies inside another entity except temporary authoring drafts that are expanded before publish.
- Do not use application-local paths (`src/data/topics/...`) as canonical references.
- Do not invent IDs for cases or sections that are not registered.

## Validation (target state for CI)

- Every referenced ID exists in the manifest or is an allowed external URI under source rules.
- Entity type prefix matches the referenced entity's `entityType`.
- No cycles required to be forbidden for related-* soft links; hard dependency cycles for publish order should be detected when publication snapshots are introduced.
