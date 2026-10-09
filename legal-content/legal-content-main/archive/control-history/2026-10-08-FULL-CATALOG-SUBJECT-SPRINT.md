# Archived control document

> Archived on 2026-10-08 because it is superseded by the repository's current Work Control Master. Preserve for historical/audit reference only. **Do not use this file to select, assign, reopen, or close work.**

---

# Full-Catalog Subject Sprint — Active Execution Plan

**Status:** ACTIVE  
**Date:** 2026-10-03  
**Repositories:** `coolnaveen99/legal-content`, `coolnaveen99/codepackr-law`

## Objective

Complete the student-focused enhancement program across **all legal subject families** under one master sprint. Subject tracks are all opened now; execution may proceed continuously across the catalog, but every topic must retain its migrated baseline and pass validation.

This replaces the earlier interpretation that only one subject family could be planned at a time. It does **not** permit low-quality bulk boilerplate.

## Subject tracks

- [ ] BNS / Criminal Law
- [ ] BNSS / Criminal Procedure
- [ ] BSA / Evidence
- [ ] Constitutional Law
- [ ] Contract Law
- [ ] Commercial / Business Law
- [ ] CPC / Civil Procedure
- [ ] Torts
- [ ] Administrative Law
- [ ] Arbitration
- [ ] Company / Corporate Law
- [ ] Consumer Law
- [ ] Property Law
- [ ] Family Law
- [ ] Labour / Employment Law
- [ ] Intellectual Property
- [ ] Environmental Law
- [ ] Tax / Fiscal Law
- [ ] Cyber / Technology Law
- [ ] Human Rights
- [ ] Jurisprudence / Legal Theory
- [ ] International Law
- [ ] ADR / Mediation
- [ ] Banking / Financial Law
- [ ] Insolvency / Bankruptcy
- [ ] Other canonical subject families discovered in the repository

## Per-topic completion checklist

Every substantive topic must be assessed for:

- [ ] Existing migrated content retained
- [ ] Learning objectives
- [ ] Definition/core concept
- [ ] Legal principle/doctrine
- [ ] Statutory framework
- [ ] Essential ingredients/elements
- [ ] Detailed explanation
- [ ] Practical examples
- [ ] Distinctions/comparisons where appropriate
- [ ] Relevant case law only where genuinely applicable
- [ ] Case principle/ratio checked against an authoritative source
- [ ] Problem/application analysis
- [ ] Short-answer structure
- [ ] 10-mark answer structure
- [ ] 16-mark answer structure
- [ ] Key takeaways
- [ ] Authoritative sources
- [ ] Current-law verification metadata
- [ ] Enhancement remains additive
- [ ] No legacy provenance removed
- [ ] Repository validation passes

## Subject completion gate

A subject track is COMPLETE only when:

1. All real topics in that subject have been assessed.
2. Enhancement coverage is substantive rather than placeholder text.
3. Existing migrated material is preserved.
4. Current-law/source checks are complete for material being marked verified.
5. Manifest/entity/relationship validation passes.
6. Legacy preservation passes.
7. Enhancement validation passes.
8. Subject progress report is recorded.
9. No unresolved blocking regression remains.

## Status policy

- `in-progress` = enhancement work is underway or verification remains.
- `verified` = substantive legal/source verification completed.
- `published` = publication criteria completed.
- Never convert a topic to `verified` or `published` merely because an enhancement object exists.

## Execution order

All tracks are now part of the same sprint. Within the sprint, prioritize the canonical curriculum order:

1. Criminal law — BNS
2. Criminal procedure — BNSS
3. Evidence — BSA
4. Constitutional law
5. Contract/commercial law
6. Civil procedure
7. Torts
8. Administrative law
9. Arbitration/ADR
10. Remaining subject families

The order is a processing order, not a restriction on creating or tracking all subject backlogs simultaneously.

## Preservation gate

Recovery baseline:

`8c635aa8b7d350c801e49dc632ad31d3684a55b2`

Never delete or replace migrated substantive content. If enhancement damages baseline material, restore the affected topic from the recovery baseline and reapply the enhancement additively.

## Product integration gate

After the full catalog is enhanced:

- [ ] Topic renderer supports enhancement fields
- [ ] Search indexes enhanced content correctly
- [ ] Source/case-law links render correctly
- [ ] 10-mark/16-mark structures render correctly
- [ ] Mobile layout remains stable
- [ ] Canonical delivery remains fail-closed
- [ ] SEO/sitemap generation remains correct
- [ ] Accessibility regression passes
- [ ] Performance regression passes
- [ ] Security/privacy regression passes
- [ ] Production smoke test passes

## Final quality pass

After all subject tracks reach substantive completion:

- [ ] Detect weak/incomplete topics
- [ ] Remove accidental boilerplate duplication
- [ ] Improve student readability
- [ ] Check examples and distinctions
- [ ] Check application reasoning
- [ ] Check 10-mark answer completeness
- [ ] Check 16-mark answer completeness
- [ ] Check cross-topic relationships
- [ ] Check current-law warnings
- [ ] Re-run complete preservation and legal validation

## Final AI gate

AI implementation is **blocked** until every non-AI item in this document and the master backlog is complete.

Only then:

- [ ] Freeze non-AI release baseline
- [ ] Define AI safety/privacy requirements
- [ ] Define source grounding
- [ ] Define citation/provenance controls
- [ ] Define human verification
- [ ] Implement provider abstraction
- [ ] Implement provider
- [ ] Add privacy/cost/rate controls
- [ ] Add evaluation suite
- [ ] Security/privacy audit
- [ ] Production/rollback validation
- [ ] Final AI release audit
