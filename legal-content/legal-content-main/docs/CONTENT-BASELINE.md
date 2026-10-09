# Content Baseline & Enhancement Contract

## Immutable baseline

The complete legacy topic migration was persisted on **2026-10-02** from
`coolnaveen99/codepackr-law/main`.

Baseline commit in `coolnaveen99/legal-content`:

`8c635aa8b7d350c801e49dc632ad31d3684a55b2`

The migration manifest records **3,561 legacy files**, of which **3,551 are real topic records** and **10 are excluded helper/generator records**. The current migration summary also records **154 renamed-family mappings**.

The baseline commit is the recovery point for the complete migrated corpus. It must not be rewritten or force-pushed away.

## Enhancement rule

Future content work is **additive enhancement**, not replacement.

Allowed:
- Add new explanatory material.
- Expand existing sections.
- Add authoritative sources, verified case law, distinctions, examples, statutory context, and practical application.
- Improve structure and readability while retaining the migrated substance.
- Add new structured fields as the schema evolves.

Not allowed:
- Delete migrated topics.
- Replace migrated substantive content with shorter/generated summaries.
- Remove legacy provenance.
- Mark content published merely because it was enhanced.
- Treat AI-generated material as authoritative without the separate verification workflow.
- Implement the AI provider layer before all non-AI enhancement work is complete.

## Preservation gate

`scripts/verify-legacy-preservation.mjs` checks every real migration record on every content-validation run. It verifies that:
1. Every migrated canonical topic still exists.
2. The entity remains a `topic`.
3. Legacy identity metadata remains present.
4. Legacy source provenance remains present.
5. The migration record count remains consistent.

The gate intentionally permits additive enhancement, so it does not require enhanced topic files to remain byte-identical to the baseline.

## Recovery

If an enhancement is found to have damaged substantive legacy content, restore the affected topic from baseline commit
`8c635aa8b7d350c801e49dc632ad31d3684a55b2`, then reapply the enhancement additively.

## Quality direction

The next content phases should improve:
- clear legal concepts and definitions
- detailed doctrinal explanation
- statutory context and interpretation
- essential ingredients/elements
- practical examples and distinctions
- relevant and verified case law
- problem/application analysis
- authoritative source references
- current-law verification
- clear, student-friendly presentation

The project does **not** require a prescribed 10-mark/16-mark answer format.
