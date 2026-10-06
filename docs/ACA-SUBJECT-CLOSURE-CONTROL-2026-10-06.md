# ACA Subject Closure Control — 2026-10-06

## Scope
Arbitration and Conciliation Act, 1996 (Act 26 of 1996), ACA corpus: 84 canonical section-topic files under `topics/arbitration/aca-s-*.json`.

## Current statutory baseline
The official India Code text identifies the 2015, 2019 and 2021 amending Acts. Current-law verification must also account for the Mediation Act, 2023 where it amends the Arbitration and Conciliation Act.

## Closure gates
- [x] All 84 ACA section-topic files identified.
- [x] All 84 files entered into controlled verification.
- [x] Current statutory baseline identified from India Code.
- [ ] Proposition-level statutory verification for every section.
- [ ] Section-specific authoritative case-law verification for every case entry.
- [ ] Removal/replacement of generic or mismatched authorities.
- [ ] Current 2026 Supreme Court doctrine sweep for material ACA provisions.
- [ ] Full repository validation/CI evidence.
- [ ] Final ACA COMPLETE_LOCKED status.

## Lock rule
ACA must not be marked COMPLETE_LOCKED until every unchecked gate above has actual evidence. Merely touching all files or changing their workflow status is not sufficient.

## Known quality blocker
The present ACA files contain repeated generic case sets across multiple unrelated sections (including sections 1, 2, 11, 34 and 81). These authorities cannot be treated as section-specific verification evidence without a proposition-level relevance review.

## Current 2026 developments requiring incorporation where applicable
Recent Supreme Court decisions continue to clarify Sections 11, 16 and 34. These developments must be reflected only in the relevant section files after verification.

## Status
VERIFICATION_IN_PROGRESS — ACA remains the sole active subject until all closure gates are evidenced.
