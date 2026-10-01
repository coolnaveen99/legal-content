# Research Maps & Entity Relationships

Checklist **Section 6**. Builds on [CROSS-ENTITY-REFERENCE-RULES.md](CROSS-ENTITY-REFERENCE-RULES.md).

## 1. Research-map model

A **research map** is a structured navigation aid over related legal entities for a study or practice problem. It is not a substitute for primary sources.

### Representation options

| Form | When to use |
|------|-------------|
| **Collection entity** (`entityType: collection`) | Curated ordered set of topic/provision/judgment/doctrine IDs under `content.members[]` |
| **Topic-local map** | Optional `content.researchMap` object on a topic (allowed via content `additionalProperties`) |
| **Comparison entity** | Side-by-side statutory or doctrinal contrasts |

### Recommended `researchMap` shape (topic content)

```json
{
  "researchMap": {
    "focus": "topic:india:example",
    "nodes": [
      { "id": "provision:india:bns-s23", "role": "primary-statute" },
      { "id": "judgment:india:sc-example", "role": "leading-case" },
      { "id": "doctrine:india:example", "role": "doctrine" }
    ],
    "edges": [
      { "from": "provision:india:bns-s23", "to": "judgment:india:sc-example", "relation": "interpreted-by" }
    ]
  }
}
```

### Relation vocabulary (non-exhaustive)

`primary-statute` · `interpreted-by` · `distinguishes` · `overrules` · `applies` · `contrasts-with` · `procedure-for` · `evidence-for` · `historical-concordance` · `sanhita-maps-to`

Edges are soft documentation; publish validation still uses hard ID existence rules.

---

## 2. Related-topic references

- Field: topic `content.relatedTopics[]` — array of canonical topic IDs.
- Use for syllabus adjacency, prerequisite topics, and “see also”.
- Prefer stable IDs; never titles alone.

## 3. Related-judgment references

- Topic: `content.relatedJudgments[]`
- Doctrine: `content.relatedJudgments[]`
- Judgment: `precedentsReliedUpon[]`, `laterJudgments[]`, `precedentsDistinguishedOrChallenged[]`

All values should be `judgment:…` IDs when the judgment entity exists.

## 4. Doctrine relationships

Doctrine `content` may include:

- `relatedProvisions[]` — provision IDs
- `relatedJudgments[]` — judgment IDs
- Optional related topics via tags or future `relatedTopics[]`

Doctrines are reusable; topics should **reference** doctrine IDs rather than copy full essays.

## 5. Provision relationships

Provisions may reference topics, judgments, doctrines, illustrations, Sanhita mappings, and sources per cross-entity rules. Prefer explicit ID arrays in content metadata over free-text-only links.

## 6. Comparison relationships

Comparison `content.left` / `content.right` should identify the compared entities (IDs preferred). `rows[]` hold point-by-point contrasts. Comparisons do not replace primary entities.

## 7. Collection relationships

- `content.members[]` — ordered list of any published entity IDs.
- Collections are the preferred durable research-map container for multi-entity curricula (e.g. “Bail under BNSS”).

## 8. Bidirectional-reference validation

| Link type | Bidirectional required? |
|-----------|-------------------------|
| Soft `relatedTopics` / `relatedJudgments` | **No** — one-way allowed; symmetry recommended for UX |
| Collection membership | **No** — member need not list the collection |
| Hard statutory “see section X” in published body | Target ID should exist |
| Sanhita mapping old↔new | **Yes** — both provision IDs should resolve |

**Publish rules:**

1. Every referenced ID must exist (or be an allowed transitional URL under source policy).
2. Entity-type prefix must match target `entityType`.
3. CI (Section 10) will enforce orphan and type checks; until then, manual PR review.
4. Optional future: `relationStrength: soft | hard` on edges.
