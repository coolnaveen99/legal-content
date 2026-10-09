# BNS derived-text corrections — sections 106 and 120

Date: 2026-10-09

Status: targeted derived-content corrections committed to `main`; subject remains OPEN.

## Scope and method

Reviewed the current canonical topic files `topics/bns/s-106.json` and `topics/bns/s-120.json`, their operative `content.sections` blocks, derived study text, current repository governance, and open BNS pull requests. No open BNS pull request was returned by the repository search. The operative statutory-rule blocks were not edited.

## Findings and changes

### Section 106 — causing death by negligence

- The introductory study summary and punishment summary incorrectly said the registered-medical-practitioner proviso carries up to **8 years**.
- The same topic's reproduced section 106(1) text states the proviso carries up to **2 years**.
- Corrected both derived summaries to state the two-year maximum, while retaining the five-year general maximum.
- Kept section 106(2) marked as not in force on the commencement evidence currently recorded in the topic. This targeted edit does not certify that no later commencement notification exists; current-law verification remains open.

Commit: https://github.com/coolnaveen99/legal-content/commit/bf86e72e8614ea5444ab576494072147f20a628b

### Section 120 — voluntarily causing hurt or grievous hurt to extort confession or compel restoration

- Removed a duplicated IPC 330/331 historical-concordance sentence from the introductory study text and clarified that IPC references are historical concordance.
- Rejoined a split cross-reference in the derived essential-ingredients text so “sub-section (1)” reads continuously.
- The operative statutory-rule text was left unchanged.

Commit: https://github.com/coolnaveen99/legal-content/commit/a6eb4369c9f891bf59ac519f17524c1b0c5a19a0

## Validation and limits

- Both topic files were parsed as JSON before the edits; edits were applied to the fetched current-main blob SHAs.
- Post-edit assertions confirmed the incorrect “8 if” summary and duplicated IPC concordance phrase were removed, and the selected split cross-reference was repaired.
- This was a focused content consistency check, not full statutory word-by-word reconciliation, current-law certification, case-law verification, full-catalog CI, product/SEO/production validation, or qualified human legal sign-off.
- Both topics remain `review`; BNS remains OPEN. Do not promote either topic or the subject to COMPLETE_LOCKED based on this batch alone.
