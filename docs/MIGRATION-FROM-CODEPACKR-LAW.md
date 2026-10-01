# Migration from codepackr-law → legal-content

Checklist **Section 11**. Controlled migration only — no uncontrolled bulk dump.

## Inventory (legacy sources in codepackr-law)

| Legacy location | Content kind | Canonical target |
|-----------------|--------------|------------------|
| `src/data/topics/<subject>/<id>.ts` | Topic treatises (TopicContent) | `topics/` entities `topic:india:<subject>-<id>` |
| `src/data/subjects.ts` | Subject/topic catalog metadata | Manifest + collection entities; app keeps catalog UX |
| `src/data/bns`, `bnss`, `bsa`, `cpc`, `constitution` | Subject-specific data modules | provisions / topics / mappings |
| `src/data/sections/` | Section-oriented data | `provisions/` |
| `src/data/judgments/` | Case notes | `judgments/` |
| `src/data/knowledge/` | Reusable doctrines/maxims | `doctrines/` (+ knowledge graph IDs) |
| `src/data/primarySources.ts` | Source list | `sources/` |
| `src/data/transitionHighlights.ts` | BNS/BNSS/BSA transition | `sanhita-mappings/` + topics |
| `src/data/questions/` | MCQ / practice | **Stay in app** (tooling, not library corpus) |
| `src/data/draft-templates.ts`, legal-template-catalog | Draft studio | **Stay in app** (scaffolds, not canonical law) |
| `src/data/tools.ts`, courtProfiles, filingChecklists | Product tools | **Stay in app** |

Approximate scale (code search, 2026-09-30): thousands of topic `.ts` modules under `src/data/topics` (e.g. BNS/BSA/CPC samples verified). Full file count must be re-run with `find src/data/topics -name '*.ts' | wc -l` at migration start.

## ID mapping rules

| Legacy | Canonical ID |
|--------|----------------|
| Topic file `topics/bns/s-3.ts` | `topic:india:bns-s3` |
| Provision sense of BNS s. 3 | `provision:india:bns-s3` |
| Knowledge `TYPE:CATEGORY:SLUG` | Prefer preserving slug inside `doctrine:india:<slug>` or map explicitly in a registry table |
| Judgment modules | `judgment:india:<stable-slug>` |

Registry file (to be maintained during migration): `manifests/legacy-id-map.json` (optional; add when first batch lands).

```json
{
  "legacyPath": "src/data/topics/bns/s-3.ts",
  "canonicalId": "topic:india:bns-s3",
  "entityType": "topic"
}
```

## Field mapping (TopicContent → topic entity)

| Legacy TopicContent | Canonical topic `content` |
|---------------------|---------------------------|
| `glance` | fold into `overview` or leading section |
| `study` | `overview` and/or sections |
| `sections[]` | `sections[]` (`heading` ← title, `body` ← joined content) |
| `examples` | `examples[]` |
| provisions / case lists | `relatedTopics` / `relatedJudgments` / provision IDs |
| (often missing) sources | create `source:*` entities; status ≤ `review` until filled |

Initial migration status: **`draft` or `review`**, never `published`, until source verification.

## Duplicate & missing-source policy

1. Inventory may find multiple files for the same section — keep one canonical ID; archive or merge duplicates.
2. Missing sources → tag `needs-review`; do not publish.
3. Boilerplate-only modules may be deferred or upgraded before convert.

## Conversion waves (order)

1. **Wave A — Sources & primary statutes metadata** (`primarySources.ts` → `sources/`)
2. **Wave B — Knowledge/doctrines** (`src/data/knowledge`)
3. **Wave C — Pilot topics** (e.g. CPC s. 32 benchmark + one BNS + one BSA topic)
4. **Wave D — Subject-by-subject topics** (constitution, contract, torts, family, petition-formats, …)
5. **Wave E — Judgments**
6. **Wave F — Sanhita mappings**
7. **Parity tests** in app (ContentRepository dual-read)
8. **Switch default read** to legal-content; keep legacy adapter
9. **Remove legacy** only after verified parity + explicit decision

## Application integration

```text
TopicDetail → ContentRepository → Canonical (legal-content)
                              ↘ Legacy adapter (topics/*.ts)
```

Legacy adapter remains until parity. Do not delete `src/data/topics` in the app until Section 11 checklist items for parity and removal are verified.

## Validation after each wave

```bash
# in legal-content
npm run validate
```

Manifest must list every published entity; CI must be green.

## Status of checklist items

| Item | Status |
|------|--------|
| Inventory existing legal content | **Done** (this document) |
| Map legacy → canonical entities / IDs | **Rules done**; row-level map grows per wave |
| Identify duplicates / missing sources | **Policy done**; execution per wave |
| Convert topics/provisions/judgments/… | **Not done** (progressive waves) |
| Parity / switch / remove legacy | **Not done** (requires app Gateway work) |
