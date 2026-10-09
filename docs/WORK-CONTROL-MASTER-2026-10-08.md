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
