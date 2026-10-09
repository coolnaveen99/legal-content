# Content Quality & Depth Standard

Checklist **Section 7**. Aligns with CodePackr Law dual-track (PhD + Senior Counsel) standards and the application doc `content-depth-and-judgment-decoder-standard.md`.

## 1. No artificial word-count limits

- Schemas and this repository **must not** encode minimum or maximum word counts as quality gates.
- Depth follows legal complexity, source material, and user value.
- Do not add filler to hit a length target; do not truncate necessary analysis to meet a cap.
- Sharding/file-size decisions are technical (performance), not pedagogical quotas.

Evidence: envelope and entity schemas have no `minLength`/`maxLength` on body prose beyond trivial non-empty titles where required.

## 2. Knowledge-completeness standard

A substantive topic or provision treatise should cover **applicable** dimensions, omitting only what is genuinely inapplicable:

- definition and scope
- legal source and provenance
- statutory deconstruction (ingredients, provisos, explanations)
- legal tests / rules
- procedure, jurisdiction, limitation
- remedies and defences
- counterarguments
- factual applications
- illustrations and hypotheticals
- distinctions and misconceptions
- authorities and judgment reasoning
- practical significance
- revision / learning aids

Teach **Rule → Facts → Inference → Counterargument → Court response → Finding → Conclusion** where case application is taught.

## 3. Book-reading structure

Supported via topic `content.sections[]` (`heading`, `body`, optional `order`) plus `overview` — sequential treatise chapters, not bullet digests only.

## 4. Research-mode structure

Supported via:

- ID-based cross-links (`relatedTopics`, `relatedJudgments`, illustrations)
- collections and research maps ([RESEARCH-AND-RELATIONSHIPS.md](RESEARCH-AND-RELATIONSHIPS.md))
- sources and verification metadata
- judgment decoder records

## 5. Examples and illustrations

- Topic: `content.examples[]` (`title`, `body`)
- Illustration entities under `illustrations/` with schema `illustration.schema.json`
- Prefer proving vs failing fact patterns for statutory ingredients where useful

## 6. Hypotheticals

- Topic: `content.hypotheticals[]` (`question`, `analysis`)
- IRAC-style analysis preferred for exam/practice training

## 7. Timelines

- Represent as a section body, example, or structured list under content `additionalProperties` (e.g. `timeline: [{ date, event }]`) until a dedicated schema is required
- Judgment procedural history is the primary timeline for cases

## 8. Flowcharts / decision trees

- Encode as structured steps in sections, or illustration entities describing node/edge logic in text/JSON
- Visual assets may be referenced by illustration records; binary assets policy remains conservative (prefer structured text + optional public URLs)

## 9. Concept maps

- Use research maps, collections, and doctrine/provision link graphs
- Optional `conceptMap` object in content for labelled nodes/edges

## 10. Visual study assets

- Illustration entity type + topic `illustrations[]` ID refs
- SEO/metadata may describe assets; do not embed copyrighted third-party figures wholesale

## 11. Content quality review checklist

Before `verified` / `published`:

- [ ] Legal accuracy checked against primary sources
- [ ] No invented citations, sections, holdings, or illustrations
- [ ] Historical vs current law labelled
- [ ] Sources listed and adequate for claims
- [ ] Cross-entity IDs resolve
- [ ] Information density high (no boilerplate-only pages)
- [ ] Dual-track value where applicable (doctrine + procedure/practice)
- [ ] Schema-valid envelope and entity body
- [ ] Status and version correct

Word count is **never** a pass/fail criterion. Hallucinated authority is always a fail.
