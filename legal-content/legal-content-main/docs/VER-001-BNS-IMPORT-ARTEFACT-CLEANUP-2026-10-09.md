# BNS Imported Heading Artefact Cleanup — 2026-10-09

**Scope:** Five targeted BNS study-text editorial artefacts recorded in the closure audit. Changes were additive-preservation safe: only clearly imported neighboring chapter headings and their generated illustration scaffolding were removed. Operative statutory-rule and explanation blocks were not edited in this cleanup.

## Changes committed directly to `legal-content/main`

- `topics/bns/s-60.json`: removed the stray “Of criminal conspiracy” heading inserted after the section 60 rule in the study text.
- `topics/bns/s-62.json`: removed four corrupted illustration entries (c–f) whose bodies were neighboring chapter headings (“CHAPTER V…”, “Of sexual offences”) rather than section 62 illustrations. Kept the valid section 62 illustrations (a) and (b).
- `topics/bns/s-73.json`: removed the stray “Of criminal force and assault against woman” heading appended after the Explanation in study text.
- `topics/bns/s-307.json`: removed the false “Illustration (c). Of extortion” entry and its generated exam-use prompt; it was a neighboring heading, not a statutory illustration for section 307.
- `topics/bns/s-308.json`: removed the stray “Of robbery and dacoity” heading appended to the study text.

## Verification limits

- This was a targeted import-artefact cleanup, not a complete review of each topic’s study commentary, statutory wording, case law, or current-law status.
- The statutory `The legal rule` blocks were not changed in this batch.
- Topic statuses remain `review`; no topic is promoted to verified/published/`COMPLETE_LOCKED`.
- Run current CI after these direct commits. The latest known full validation has failed at `validate:enhancements` due to a wider Constitution enhancement backlog; do not claim full catalog validation until the current runs finish green.

## Commits

- s-60: `98c7906eff09bf85998373aa60ff35b65793ac18`
- s-62: `838ff0f6feaec5e018c478ee3b7dfdfac1808274`
- s-73: `4c9d4ec9c87c9ba1b13dfa3008d9d2b2f2375903`
- s-307: `bcabdbde1e061c79aefb9b63e6a0b7eeb0df0a83`
- s-308: `cb2042539149cde300c21f178d4b8eea12f4074e`