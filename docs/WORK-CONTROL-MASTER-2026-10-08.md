# Work Control Master — Legal Content
**Effective:** 2026-10-09  
**Status:** AUTHORITATIVE / ACTIVE

This is the only active work-selection and ownership control. Older sprint, roadmap, queue, subject-by-subject and phase documents are historical evidence only.

## Mandatory pre-work gate
1. Read this file, AGENTS.md and .github/copilot-instructions.md.
2. Identify the smallest practical subject/topic/section.
3. Check current status, owner, latest main commit, recent commits/PRs and latest evidence.
4. Identify only the missing gate.
5. If CLAIMED, IN_PROGRESS or COMPLETE_LOCKED by another/current work, stop.
6. Claim the exact range before editing.
7. Validate and record evidence after editing.

## Gate lifecycle
INVENTORY → MAPPED → ENHANCEMENT → STATUTORY_VERIFY → CASE_VERIFY → VALIDATION → INTEGRATION → SEO → PRODUCTION → COMPLETE_LOCKED

States: AVAILABLE, CLAIMED, IN_PROGRESS, BLOCKED, VERIFIED, VALIDATED, INTEGRATED, SEO_READY, PUBLISHED, COMPLETE_LOCKED, REOPENED.

Do not use one generic “complete” label for all gates.

## Lock rule
COMPLETE_LOCKED applies only to the exact topic/section after all applicable gates have evidence. Reopening requires a documented trigger: law/current-law change, authoritative correction, legal defect, case-law defect, schema migration, product regression, SEO/canonical defect, or explicit owner instruction.

## Content rules
No invented legal authority. No destructive shortening. Verify before enhancement. AI review is not authoritative verification. Preserve provenance and baseline content. Depth is complexity-driven; there is no artificial word-count target.

## Canonical statutory architecture
One independently identifiable operative statutory provision = one canonical topic/page. Grouped comparison/doctrinal/practical topics may remain supplementary but cannot replace canonical provision topics. Separate Acts require separate inventories. Repealed provisions must be explicitly handled. Filename patterns alone do not establish statutory boundaries.

## SEO gate
Canonical provision work must ultimately verify: stable route, correct title/H1, description, internal links, sitemap inclusion, crawl/index controls, canonical metadata, production resolution, and no duplicate/grouped page competing with the canonical provision page. Google ranking position is not a repository completion criterion.

## Subject closure
Enhancement-complete != legally verified. Verified != published. A subject is COMPLETE_LOCKED only when every applicable inventory item passes all required gates and evidence is recorded.

## Current control
The Final Content Quality Pass remains OPEN corpus-wide. Use current main and section evidence for exact counts. Torts and other locked subjects must not be reopened without a documented trigger. Contract must be controlled by its current section-wise ledger, not older queues.

## Sequencing
Fresh judgment acquisition remains deferred until the comprehensive enhancement/current-law work and required integrated validation gates pass; then complete section-/subject-wise judgment enrichment followed by the dedicated Supreme Court coverage pass. AI/provider remains last and blocked until the existing non-AI gates close. SEO, production and legal sign-off remain mandatory for COMPLETE_LOCKED.

## Work claim record
Subject:
Topic/section range:
Current main commit:
Current status:
Current owner:
Latest evidence:
Missing gate:
Planned change:
Validation:
Evidence/commit:

If any field cannot be established, STOP.


## Company Law claim — 2026-10-09
Subject: Company Law
Topic/section range: ca-s-2, ca-s-6, ca-s-63, ca-s-66, ca-s-67, ca-s-68, ca-s-71, ca-s-73, ca-s-76a, ca-s-77, ca-s-90, ca-s-123, ca-s-128, ca-s-139, ca-s-149, ca-s-164, ca-s-166, ca-s-173, ca-s-177, ca-s-188, ca-s-196, ca-s-230, ca-s-248, ca-s-253, ca-s-447, and company-*.json doctrinal topics
Current main commit at claim: 15e4392ded402cd3a26583948f2246abc0394a1b
Current status: IN_PROGRESS — not COMPLETE_LOCKED
Current owner: company-closure-batch-2026-10-09
Latest evidence: docs/COMPANY-LAW-CLOSURE-AUDIT-2026-10-09.md and docs/batches/company-law-task-inventory-2026-10-09.json
Missing gate: India Code source attachment, case-law verification, 438 remaining scaffolds, SEO and production gates
Planned change: section-specific enhancement only; no verified/published mark
Validation: JSON structural check of upgraded files; full validate.mjs not run (dependencies absent)


## Company Law claim — batch 2 — 2026-10-09
Subject: Company Law
Topic/section range: ca-s-64, 65, 69, 70, 72, 74, 75, 76, 78, 79, 80, 82, 86, 87, 88, 89, 91, 92, 96, 114, 117, 118, 124, 125, 127, 129, 134, 135, 137, 140, 141, 143, 152, 161, 165, 167, 174, 179, 180, 184, 185, 186, 197, 203, 232, 245, 271, 454
Current status: IN_PROGRESS — not COMPLETE_LOCKED
Latest evidence: docs/COMPANY-LAW-BATCH-2-2026-10-09.md
Missing gate: 384 scaffolds, case-law verification, India Code source attachment, SEO and production


## Company Law source-and-illustration claim — 2026-10-09
Subject: Company Law
Topic/section range: ca-s-104 and ca-s-105 only
Current main commit at claim: cc15b04eeaa1f46ed9c504977f2af609439655bf
Current status: IN_PROGRESS — not COMPLETE_LOCKED
Current owner: current assistant batch
Latest evidence: docs/batches/company-law-task-inventory-2026-10-09.json; entries ca-s-104 and ca-s-105 have bot=null and verification=null; current topic files remain generic scaffold content.
Missing gate: topic-specific statutory-source attachment and separately labelled educational illustration entities; statutory text/current-law verification remains open.
Planned change: attach verified official India Code section URLs, add two clearly educational illustration entities for each section, and link them from the canonical topic JSON. Do not mark verified/published or close case-law/SEO/production gates.
Validation: focused JSON/reference integrity checks passed for all eight changed/new JSON entities. GitHub Actions repository-wide enhancement validation failed with 4,299 missing-field errors across 3,678 topics (log examples are unrelated Constitution topics); not a clean validator pass.
Evidence/commit: docs/COMPANY-LAW-S104-S105-REMEDIATION-2026-10-09.md; evidence refresh commit: a27372882f00c4f1299b135dbbc25abb7b9a3608; canonical tracking commit: 85bd8bebda592dc21bad41475297d82f5e3610a9; app mirrors initially: 469cdbb184e85133ee61667d42a103a400a14e50 and f05adb3cde422ad8a89bb95941233dcd342d5448; type-corrected mirrors: f8d81182ba72049529e28e2c1cf8b54a59a2a7e5 and ee0418c82ff366f1399cb17ff27e786a178c68ad. Repository-wide validator failure recorded; app CI for the type-corrected s. 104/105 modules failed due 57 TypeScript errors in other `company-*.ts` doctrinal modules; the CI log contained no s. 104/105 TypeScript errors after correction. Repository-wide validator and app CI are not passing; gates remain open.


## Company Law source-remediation claim — 2026-10-09 (sections 100–103)
Subject: Company Law
Topic/section range: ca-s-100, ca-s-101, ca-s-102, ca-s-103 only
Current main commit at claim: e69ea2da0ec614022eb4af5913d93bcbdb799ce3
Current status: IN_PROGRESS — not COMPLETE_LOCKED
Current owner: current-assistant-company-s100-s103
Latest evidence: docs/batches/company-law-task-inventory-2026-10-09.json; entries ca-s-100 through ca-s-103 had bot=null and SOURCE_CHECK_REQUIRED; no open Company Law PR was found in either repository.
Initial statutory-source attachment and section-specific content cleanup completed for sections 100–103. Follow-up official amendment reconciliation corrected section 101’s 2017 shorter-notice tests and section 102’s related-company disclosure, inspection and 2019 penalty details. Remaining gates: full applicable meeting-rule/exemption verification, independent case-law review, repository-wide validation/build/E2E, SEO and production.
Next work within this claim: continue checking the current Act and applicable rules/exemptions, then run the available full validators/build/E2E when the deployment rate limit permits. Canonical edits are mirrored to the app after each update. Do not mark verified/published or close Company Law.
Validation: focused post-write checks passed for all four topic/source JSON pairs and app mirrors: valid JSON, official MCA host, source references attached, provision-specific study/modules present, unrelated BSA material removed from these provisions, no invented cases, review status retained, and app glance parity confirmed. This is not a repository-wide validator/build/E2E pass.
Evidence/commit: docs/COMPANY-LAW-S100-S103-REMEDIATION-2026-10-09.md; canonical topics 6ed90ad3ac98b2da154b3ee9ca7abf70b076cac0, 3d7b55993ad46a41ea1ec64a2ca9a622d30c93e6, cedc721e4e2dff25e4146f6d350dad99ff244dff, d60d1c9086f6bd849535eccceed97d7452bfe974; app mirrors 5a4770d00f39209df922ec048d471e3037cd3ef2, 45d8bf80f2273d563588059fbda0e3f5bb6949f9, 1a3f035759496d06e3d011cd796bd7007041a8d5, b332c2110c058644acf197c688abb412d7596865.


Amendment reconciliation follow-up (sections 101–102): official amendment sources added and focused checks passed for all four topic JSONs plus app mirrors. Section 101 corrected to the 2017 distinct AGM/other-meeting shorter-notice tests and resolution-specific entitlement proviso; section 102 corrected to include the 2% related-company shareholding disclosure, document inspection details, benefit/compensation and the 2019 penalty wording. Evidence: docs/COMPANY-LAW-S100-S103-REMEDIATION-2026-10-09.md. Commits: canonical s.101 4ad412cd69ec3e20df20ee4948fd592dc194fd49; canonical s.102 de1a32c7b937311210969422b5ff2d216d3a3124; amendment sources c1ee496b7033b04f57cee5faf025b7bd61f794a3 and fa94128e8714ac2fca23280a4b0b7d8f1a24e307; app mirrors 1134b2224201ddd86c5fa58d30dc887036786a23 and 7cd216a4c833a32cc5a863ad8462cd3b4879e74d. Focused checks passed; full repo-wide validator/build/E2E and legal sign-off remain open. Vercel status for the s.102 mirror commit is failure with build-rate-limit; no successful build is claimed.


Applicability follow-up (2026-10-09): Company Law sections 100–103 were updated with the section 122(1) OPC disapplication and the separate section 122(2)–(3) procedure. Official source record `sources/companies-act-2013-s-122-opc-exemption.json`; evidence `docs/COMPANY-LAW-S100-S103-REMEDIATION-2026-10-09.md`. Canonical commits: `9d25a1c08af3a5844b886df985ee169913153bfa`, `562ee02f278d9ab404104f73eea792628b776259`, `68973cf449bec23c1b60ddc7600626f3a4b5c7f2`, `0aa110abc69895a0634773e4f5d06a2b502b6970`; app mirrors: `6dff3d3ef372e5c3f93bd2b4aa328b2db64ceeca`, `bc5fdac7f41ce695137dd3992c735ac3862c3fb2`, `ca1fd0ae283c61f616c5ebe96ddfb1f1c5e9f7fd`, `d875daf538f371df6bda658e217f9f4f20b285dc`. Remains in progress; full rule/exemption and case-law checks and repository-wide CI are outstanding.




Rule 17 follow-up (2026-10-09, existing claim `current-assistant-company-s100-s103`): section 100 now distinguishes section 100’s requisition threshold/timetable from Rule 17’s requisitionists-meeting procedure. Canonical topic commit `091f6e3c248843f17b61267f085e55637ca5299f`; Rule 17 source record `84e9941f81c2210a852b46992edbd2477e469100`; app mirror `f411c78e948882b95e0ae5e08ed8c2b7fd81ee2e`. Source is an ICSI reproduction, not Gazette-primary; current official rule verification remains open. Do not mark verified/published or close the range.


Rule 17 source-link correction (2026-10-09): the canonical section 100 topic now attaches `source:india:companies-management-administration-rules-2014-rule-17` in the topic-level source array (commit `41fc0d96e0123b477cdd80dc69e021edd523d324`). Focused JSON/reference validation is required; the source remains a professional-institute reproduction, not Gazette-primary.




Rule 18 follow-up (2026-10-09, existing claim `current-assistant-company-s100-s103`): section 101 now distinguishes section 101’s notice period/recipient rules from Rule 18’s electronic-notice and proof-of-sending requirements. Canonical topic commit `4ba10b73bbec76948efac6d257e3ce3d2b915cc3`; source record `085f823a7e4b7577a3ab749fe7df9741f1217c82`; app mirror `c26c6a9337f0cfd00709f5aef73fbdda60c549a1`. Source is a secondary reproduction, not Gazette-primary; current official rule verification remains open.


## Company Law s. 102–103 private-company exemption follow-up — 2026-10-09
Subject: Company Law
Topic/section range: ca-s-102 and ca-s-103, within existing claim `current-assistant-company-s100-s103`
Current status: IN_PROGRESS — not COMPLETE_LOCKED
Owner: current-assistant-company-s100-s103
Source record: `sources/companies-act-2013-private-company-meeting-exemptions.json` (status review; official MCA notification material)
Change: clarified the section 462 private-company meeting modification for sections 101–107 under G.S.R. 464(E) (2015), read with G.S.R. 583(E) (2017), including the eligibility condition that the private company must not have defaulted in filing its annual return under section 92 or financial statements under section 137. Both topics retain the separate OPC section 122 caveat.
Canonical commits: s. 102 `dd1ab2c3b0d2a3d1909c317092a82b40fdd1640b`; s. 103 `44f73b7a90ce27ef202e746f5d9ebd2381c15500`.
App mirrors: s. 102 `d96bcfa456d0c265c1bd3a41103d65510c9eb54`; s. 103 `ece4b2e9fcff1d5262cb543007297ae20ae85506`.
Focused validation: canonical JSON parses; source is linked; topics remain `verification_in_progress`; inventory remains `SOURCE_CHECK_REQUIRED`; app glance/study parity and new module presence pass. This is not a full repository validator, TypeScript build/E2E, independent legal sign-off, SEO or production pass.
Next within claim: continue source-checking meeting rules and relevant class-specific exemptions; retain the source review caveat until notification/amendment scope and company eligibility are independently verified.


## Rule 17 official amendment evidence — 2026-10-09
Claim: `current-assistant-company-s100-s103` (continues; not closed).
Change: added official India Code-hosted Gazette evidence for G.S.R. 908(E), 23 September 2016, confirming the specific Rule 17(2) Explanation wording substitution from “on working day” to “on any day except national holiday”.
Source: `sources/companies-management-administration-amendment-rules-2016-rule-17.json`; existing Rule 17 reproduction source now links to it. Canonical section 100 topic links both sources and states the limited scope of confirmation.
Qualification: this does not verify all current Rule 17 sub-rules or all subsequent amendments. Section 100 remains `verification_in_progress`; inventory gate remains `SOURCE_CHECK_REQUIRED`; full official-rule reconciliation, case-law review, repository validator, app build/E2E and legal sign-off remain open.

Evidence commits for this follow-up:
- Official Rule 17(2) amendment source record: `a917555198a79c43d2e158c328cfe55e1f596316`.
- Canonical section 100 topic/source linkage: `b79ec261d00293fe664e9c03cbbc0a6b79c1799b`.
- Existing Rule 17 source qualification/link: `14642928306531159baf01d29fafc45c86af8e7b`.
- Inventory: `8a3443838756069269f6bba5433cd51f0ace2b21`.
- Remediation note: `addc114dc7140dccf4e2808b0d30747fb5aea1a3`.
- Work-control master: `abab2866f41268ec49f5bce0e8333a9d6e014c06`.
- App mirror section 100: `e004db150690c938da19c0553dccf9731c1d4e20`.


Rule 18 official amendment follow-up (2026-10-09, existing claim `current-assistant-company-s100-s103`): official MCA-hosted G.S.R. 560(E), 13 June 2018, confirms that the Explanation after Rule 18(3)(ix) was omitted. Added a source record, linked it from the Rule 18 reproduction and section 101 canonical topic, mirrored the scope note to the app, and updated inventory/remediation evidence. This verifies that deletion only; full current Rule 18 reconciliation remains open. Section 101 stays `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no legal sign-off, full validator/build/E2E, SEO or production completion is claimed. Evidence commits: source `af214d2335f632c47ac23db613cf689735188e13`; Rule 18 record `021e11079e951387dd752fe38a737b6df8289078`; canonical s.101 `cd55bc74a5f94c7bc893411492beffbe8f87046e`; app mirror `e2df6cb2353d579ac7be57e98d465375c1f9f440`; inventory `4480dd60c017a9f218acbd5150e83ef14b6b6049`; remediation `049a13e033169687c934d36afde2d58160317cd6`.


## Rule 18 amendment-history register follow-up — 2026-10-09

Within the existing claim `current-assistant-company-s100-s103`, added `sources/companies-management-administration-amendment-history-2020.json` from the official India Code-hosted 28 August 2020 Gazette notification. Its note lists the amendment notification sequence through G.S.R. 560(E), 13 June 2018, including G.S.R. 175(E), 16 February 2018; the operative 2020 change concerns Rule 12. The source is linked from the existing Rule 18 reproduction record. This improves the documented amendment chain through that instrument only; post-August-2020 amendments and full consolidated Rule 18 remain unverified. Keep section 101 `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no closure, legal sign-off or full validation/build claim.

Evidence: source record `0a19062ff8b11e1ebb575c30253a00def991e42d`; source linkage and tracking updates follow.


Rule 18 official amendment-chain follow-up (2026-10-09, existing claim `current-assistant-company-s100-s103`): added official Gazette G.S.R. 801(E), 27 October 2023, which amends Rule 9 rather than Rule 18 and prints an amendment-history note stating that the principal Rules were last amended by G.S.R. 44(E), 21 January 2023. Linked this limited-scope source to the Rule 18 register and canonical section 101 topic, mirrored the note to the app, and updated inventory/report. This does not establish a consolidated current Rule 18 or prove the absence of later amendments. Section 101 remains `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no legal sign-off or full build/validator completion is claimed.


Rule 18 amendment-chain follow-up (2026-10-09): added a review-only source record for G.S.R. 358(E), 30 May 2025, with the identified official Gazette PDF URL. Indexed secondary reproductions describe the instrument as substituting Annexure Forms MGT-7, MGT-7A and MGT-15 and cite G.S.R. 403(E), 15 July 2024, as the preceding amendment. The official PDF could not be independently retrieved in this pass, so the source is explicitly not treated as primary-text verified. Rule 18 and section 101 remain `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; full consolidated-rule verification, case-law, full validators/build/E2E, SEO and production remain open.


Private-company exemption provenance follow-up (2026-10-09; claim `current-assistant-company-s100-s103`): the section 462 source record now labels its verification basis precisely: India Code-recorded reproduction and secondary reproductions checked; official MCA primary PDFs not independently retrieved in this pass. Sections 102–103 and app mirrors carry the same caution; inventory remains `SOURCE_CHECK_REQUIRED` and topics remain `verification_in_progress`. Evidence: source `42e84ed852ececa788827f137ce6ca715297364c`; canonical topics `42913ed34426dd315c8fb2040b6769eb0017d991`, `6f223b060c4d4b8ec18725d338b419e435546524`; app mirrors `4ae001cf2047f728432306303748d850b6689420`, `d614fd5822ed3f5a4be4f07d48354c7e61cca50d`; inventory `6c30d36662424db5fe4df398fd1a2ae8737e92f4`; remediation note `f1d19eddca26253c557ef7001bc71f961bf69c98`. Full primary-source/current-law review, case-law, validators/build/E2E, SEO and production remain open.


Rule 18 2024 amendment-scope follow-up (2026-10-09, claim `current-assistant-company-s100-s103`): retrieved official MCA-hosted G.S.R. 403(E), 15 July 2024. The operative amendment substitutes Form MGT-6 in the Annexure and does not amend Rule 18. Added a limited-scope source record, linked it to the Rule 18 source register and section 101 topic, synchronized the app mirror study, and updated inventory. The 2025 G.S.R. 358(E) official Gazette text remains independently unretrieved. This does not establish the full consolidated Rule 18 or complete current amendment chain. Section 101 remains `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; case-law review, full validators/build/E2E, SEO and production remain open. Evidence: source `825acc439be2f78f1e088da3b326074b7efea81e`; Rule 18 register `2a80d6c9576e12d64588a6e74e5915243743b8f3`; canonical s.101 `e27554bf9eb09bbd2bce2f56ac1e2dffdb337f31`; app mirror `a5276205abb06ca9d985686b8e50670479b859fd`; inventory `2c3d4fd5ffc542d9ed3e13cd103633abb6f2c864`.


Rule 18 2025 scope-check follow-up (2026-10-09): the full notification text was checked through indexed secondary reproductions and the official Rajya Sabha laying record lists G.S.R. 358(E), 30 May 2025. Reproduced operative clauses substitute Annexure Forms MGT-7, MGT-7A and MGT-15 effective 14 July 2025; no Rule 18 amendment appears in that operative clause. The official Gazette PDF was not independently retrieved, so this is not primary-text verification. Section 101 stays `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no legal sign-off or consolidated Rule 18 verification is claimed. Evidence: source `b674b9af30f7e40d45e6df33e628f3637d4f212b`; Rule 18 register `7331506e7b8ea3b31845839497bebf1692a4d6dd`; inventory `76c47c0e19292f1c648a60b6567dd46b7b452e4c`; remediation report `ffd32deb394d84ba051dfacc0b8b9807f81d45a6`.


Private-company exemption Gazette-text follow-up (2026-10-09, existing claim `current-assistant-company-s100-s103`): inspected IndiaCode-hosted Gazette PDF copies of G.S.R. 464(E), 5 June 2015, and G.S.R. 583(E), 13 June 2017. Confirmed the 2015 table row for sections 101–107 and 109, and the 2017 insertion of paragraph 2A conditioning the section 462 adaptations on no filing default under sections 92/137. Source record, canonical s.102/s.103 notes, inventory and remediation report updated; app mirrors synchronized. The direct MCA-hosted PDFs and corrigendum S.O. 2218(E), 13 July 2017 remain unretrieved; company eligibility/articles, current-law, case-law, full validators/build/E2E, SEO and production remain open. Do not mark verified/published/locked.


S.O. 2218(E) corrigendum scope check (2026-10-09; claim `current-assistant-company-s100-s103`): retrieved and inspected the IndiaCode-hosted Gazette PDF copy of the 13 July 2017 corrigendum to G.S.R. 583(E). It replaces “statement or” with “statement and” in paragraph 5, table item (ii), concerning the section 143(3)(i) auditor-reporting exemption; on the inspected text it does not alter the section 101–107/109 exemption row or paragraph 2A filing-default eligibility condition. IndiaCode says the Department’s own PDF remains authoritative; direct MCA-hosted PDFs and later/current notification position remain unverified. Canonical source, s.102/s.103 topic notes, app mirrors, inventory and remediation report updated. Sections 100–103 remain `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no legal sign-off or closure.


Rule 17/18 original-text provenance check (2026-10-09; claim `current-assistant-company-s100-s103`): inspected a High Court-hosted PDF of the original 2014 Companies (Management and Administration) Rules. It contains Rule 17 and Rule 18 text, but labels itself “[To be Published in the Gazette]” and is dated 27 March 2014 without the final G.S.R. 260(E) number. Added it as a qualified court-hosted baseline cross-check only, not as the final Gazette instrument. The 2016 Rule 17 and 2018 Rule 18 notifications confirm limited changes only; full consolidated-current-rule reconciliation remains open. Source records, inventory, remediation report updated; no closure or legal sign-off.

Rule 18 amendment-chain check — G.S.R. 279(E), 6 April 2022 (2026-10-09; claim `current-assistant-company-s100-s103`): inspected the official Gazette PDF https://egazette.gov.in/WriteReadData/2022/234911.pdf. G.S.R. 279(E) inserts Rule 14(3), not Rule 17 or Rule 18; its amendment-history note lists prior instruments through G.S.R. 159(E), 5 March 2021. Added a review-only source record, linked it from the Rule 18 source register, and updated the section 101 inventory and remediation report. This confirms scope of that instrument only and does not establish a complete Rule 18 amendment chain or consolidated current text. Section 101 remains `verification_in_progress` / `SOURCE_CHECK_REQUIRED`; no closure or legal sign-off.


Rule 18 scope follow-up (2026-10-09): IndiaCode's reproduction of Gazette G.S.R. 175(E), 16 February 2018, shows that its operative amendment substitutes Annexure Forms MGT-6 and MGT-15, not Rule 18 on its face. Recorded in `sources/companies-management-administration-rules-2014-rule-18.json`, section 101 inventory, and the 100–103 remediation report. This is limited instrument-scope evidence; full consolidated Rule 18 and complete amendment-chain verification remain open. No verification/publishing gate is closed by this evidence.


Rule 18 amendment-scope follow-up (2026-10-09; claim `current-assistant-company-s100-s103`): inspected official MCA-hosted G.S.R. 159(E), 5 March 2021 (https://www.mca.gov.in/Ministry/pdf/CompaniesMgmtAdminAmndtRules_11032021.pdf); operative amendments substitute Rule 11(1) and Rule 12, not Rule 18. IndiaCode's reproduction of G.S.R. 44(E), 21 January 2023 (https://indiacode.ecourtsindia.com/rules/g-s-r-no-44-e-companies-management-and-administration-amendment-rules-3a85c8f3/) identifies Annexure substitutions for Forms MGT-3 and MGT-14, not Rule 18. Source register, section 101 inventory, and remediation report updated. These limited instrument checks do not close the Rule 18 primary-source/consolidated-text gate; s.101 remains `verification_in_progress` / `SOURCE_CHECK_REQUIRED`. No legal verification, case-law, validation, SEO, production or closure gate is marked complete.


## Official PDF manual-review validator claim — 2026-10-09
Subject: Cross-corpus validation infrastructure (Company Law closure dependency)
Topic/section range: PDF retrieval/format technical sub-gate only; no legal-content verification flags
Current main commit: 8b642bc25f2c18788875d778ffa8a40b965078a0
Current status: IN_PROGRESS
Current owner: current assistant — issue #40
Latest evidence: issue #40; docs/meetings/meeting-06-finalized/2026-10-09-sprint-review-pdf-manual-validation.md; inspected scripts/validate.mjs and scripts/validate-enhancements.mjs. No existing dedicated PDF validator or caller is present in the main tree.
Missing gate: auditable technical outcomes, bounded retries, pending manual-review queue, tests, CI integration and reviewer documentation.
Planned change: add a separate official-PDF technical validator; preserve FAIL for affirmative invalidity; allow MANUAL_REVIEW_REQUIRED only for technical retrieval/parse uncertainty; never mutate legal source verification or publication status.
Observed baseline failures: latest legal-content Validate legal content run 37952321464 fails enhancement validation with 4,299 missing-field errors across 3,678 topics (not PDF-specific); latest codepackr-law E2E run 37951837537 reports configured webServer exit code 2 (no PDF-specific diagnostic). No concrete PDF request failure log exists in repository history inspected; tests will use deterministic captured-response fixtures and this limitation will be documented rather than mislabelled as a production incident.
Validation: `npm run test:pdf-validation` passed in GitHub Actions on commit `209ec44bb010d031c290702436406808e0178345` (outcomes, bounded retries, manual-review closure, checksum-based queue preservation, and required-owner guard). Live official PDF workflow run `37958434725` completed successfully with `PASS_WITH_MANUAL_REVIEW_REQUIRED (6 pending)`: three MCA requests returned HTTP 403 HTML responses; one India Code request timed out after three attempts; two Gazette requests failed to connect after three attempts. These are access/retrieval limitations, not legal verification. Persistent evidence: `docs/pdf-manual-review-queue.json`; no checksum or document bytes were available for the blocked/failed responses. The full `Validate legal content` workflow still fails at the existing `validate:enhancements` gate with 4,299 missing-field errors across 3,678 topics; the new PDF tests run before that gate and pass.
Evidence/commit: validator `e42d74d29337e575b9f21f38273fb778e2d519e1`; tests `209ec44bb010d031c290702436406808e0178345`; PDF workflow `5609df02f0e54569ed542ea9925ff009fd42ccdf`; persistent queue `8b642bc25f2c18788875d778ffa8a40b965078a0`.


## 2026-10-09 Roadmap and core-content policy

## 2026-10-09 Roadmap and core-content policy

This section supplements—not replaces—the lifecycle and ownership controls above. See `docs/SPRINT-MEETING-2026-10-09-ROADMAP-AND-YIELD-POLICY.md`.

- Complete the registered legal-content inventory to topic-appropriate depth. No High/Medium/Low-Yield label may lower completeness, depth, verification, validation, or closure requirements for a core section, Article, provision, or doctrinal topic.
- Work priority may reflect risk, dependencies, source availability, and reviewer capacity; it must not reduce the quality required of any topic.
- Record an enhancement-baseline lock separately from `COMPLETE_LOCKED`. Baseline lock preserves the completed enhancement snapshot; it does not certify current-law verification, publication, integration, SEO, production, or legal sign-off.
- Use rolling subject publication only when that subject and its published content pass the applicable minimum legal/source, content-quality, technical and publication gates. Do not publish an unverified proposition as verified current law. Items not meeting the release gate remain staged/restricted.
- Continue full current-law verification after initial eligible releases, record authoritative evidence, and correct material verified defects promptly through the canonical content path and applicable focused checks.
- After current-law work and the required integrated validation/E2E gates pass, proceed to section-/subject-wise judgment enrichment, followed by a dedicated Supreme Court judgment coverage pass. Existing case references still must pass the current CASE_VERIFY gate before topic/subject closure; this later stage governs fresh acquisition and coverage expansion. Preserve existing judgment verification requirements and do not invent case details.
- The optional High-Yield Study Guide is final-stage supplementary learning material. It cannot replace, shorten, prioritize, or gate the core legal library.
- Preserve the existing lifecycle, topic IDs, schemas, ownership controls, source hierarchy, SEO/production gates, reopening triggers, and evidence requirements. AI/provider work remains subject to existing later-stage controls.
- Reviewer fatigue is a quality risk: use manageable non-overlapping batches, allow unresolved items to remain blocked/source-check-required, and never trade legal accuracy for a quota.
