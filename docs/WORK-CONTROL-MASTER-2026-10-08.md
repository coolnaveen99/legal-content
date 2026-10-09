# Work Control Master — Legal Content
**Effective:** 2026-10-08  
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
Fresh judgment acquisition is blocked until the Final Content Quality Pass closes. AI/provider work remains last and blocked until all non-AI gates close.

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
Missing gate: official statutory-source attachment and correction of generic/cross-subject scaffold content for four general-meeting provisions; full amendment/rules verification, case-law, SEO and production gates remain open.
Planned change: verify sections against official MCA Companies Act text, replace generic content only with provision-specific supported rules, add source provenance, mirror the corrected canonical content into the app only after canonical edits, and record validation. Do not mark verified/published or close Company Law.
Validation: pending.
Evidence/commit: pending.
