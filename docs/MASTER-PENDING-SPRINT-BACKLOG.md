# Master Pending Sprint Backlog & Execution Checklist

**Date:** 2026-10-03  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Execution rule:** one backlog item at a time; direct commit to `main`; validate before marking complete.

**Section-level control standard:** `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md` is the mandatory checklist for every section/article/rule/topic. A subject cannot be considered complete from a partial working set.

## 1. Non-negotiable project rules

- [ ] **RULE-001 — Preserve migrated baseline.** Never delete migrated substantive content.
- [ ] **RULE-002 — Enhancement is additive.** Expand, verify and enrich; do not replace good existing material with shorter/generated text.
- [ ] **RULE-003 — Preserve provenance.** Legacy identity and migration metadata must remain intact.
- [ ] **RULE-004 — No silent baseline restore in normal CI.** Legacy restoration is recovery-only.
- [ ] **RULE-005 — Uncertain source files are archived, not deleted.**
- [ ] **RULE-006 — Every implementation must have validation evidence.**
- [ ] **RULE-007 — Never mark legal content `verified`/ `published` without substantive source verification.
- [ ] **RULE-008 — Do not fabricate case law, ratios, citations, statutory provisions or source claims.**
- [ ] **RULE-009 — AI-generated content is never authoritative by itself.**
- [ ] **RULE-010 — AI provider implementation is the final product phase.**
- [ ] **RULE-011 — Do not reopen closed Phases 0–32, PR-001–010 or UI-RD-01–10 unless new evidence identifies a regression.**
- [ ] **RULE-012 — Direct commits to `main` are the normal execution path for this backlog.**

## 2. Sprint 0 — Control-board and repository hygiene

### S0-A — Instruction / source cleanup
- [ ] **S0-001** Complete remaining unused-instruction/reference audit in `codepackr-law`.
- [ ] **S0-002** Audit `.github`, prompts, skills, docs and active instruction references.
- [ ] **S0-003** Complete unused source-code reference audit.
- [ ] **S0-004** Move only demonstrably unused/obsolete files to archive; never delete.
- [ ] **S0-005** Verify imports, routes, scripts, tests and dynamic references before every move.
- [ ] **S0-006** Re-run repository/type/test/content gates after cleanup.
- [ ] **S0-007** Reconcile any pre-existing parity/unit blockers without weakening validation gates.
- [ ] **S0-008** Update the sprint control board with evidence and closure notes.

### S0-B — Baseline safety
- [x] **S0-010** Establish immutable baseline recovery commit.
- [x] **S0-011** Establish legacy preservation validator.
- [x] **S0-012** Prevent normal CI from overwriting enhancements with legacy content.
- [x] **S0-013** Establish enhancement schema and validation contract.
- [ ] **S0-014** Add a documented recovery drill for restoring a damaged topic and reapplying its enhancement.
- [x] **S0-015** Run a full baseline/preservation audit before large-scale enhancement begins. Evidence: `docs/CONTENT-PRESERVATION-AUDIT-2026-10-06.md`; 3,551 real migrated topics preserved; canonical baseline protection reports 3,648 compared / 0 shortened.

## 3. Sprint 1 — Enhancement framework hardening

- [x] **ENH-001** Add `content.enhancement` schema.
- [x] **ENH-002** Add student-focused enhancement specification.
- [x] **ENH-003** Add enhancement validator.
- [x] **ENH-004** Add recursive full-catalog progress reporting.
- [x] **ENH-005** Add full-catalog rollout rules.
- [x] **ENH-006** Add enhancement quality checks for minimum substantive coverage. `scripts/audit-enhancement-quality.mjs` writes `docs/ENH-006-QUALITY-REPORT.md`. Scaffold text is not counted as substantive.
- [x] **ENH-007** Add protection against accidental shortening/removal of baseline substantive fields. `scripts/protect-baseline-substantive.mjs` compares overview, glance, study, and section text with `8c635aa8b7d350c801e49dc632ad31d3684a55b2`. Report: `docs/ENH-007-BASELINE-PROTECTION-REPORT.md`. First run: 3,648 topics compared, 0 shortened.
- [x] **ENH-008** Add per-batch validation/report artifact. `scripts/report-enhancement-batches.mjs` writes `docs/batches/ENH-008-BATCH-VALIDATION.md`. A passing batch means every topic has an enhancement object, not that the law is verified.
- [x] **ENH-009** Add subject-level progress reporting suitable for sprint tracking. `scripts/report-subject-progress.mjs` writes `docs/ENH-009-SUBJECT-PROGRESS.md`. Tracks substantive and verified counts, not merely enhancement-object presence.
- [x] **ENH-010** Define final verification/publishing acceptance checklist. See `docs/ENH-010-VERIFICATION-PUBLISHING-CHECKLIST.md`. The checklist does not verify any topic by itself.

## 4. Sprint 2 — Student-focused legal content enhancement

### Required content model for each substantive topic

**Mandatory control:** Before any subject enhancement, complete the full authoritative inventory and repository mapping. Never infer that unlisted sections are complete.
- [ ] **CONT-001** Learning objectives.
- [ ] **CONT-002** Definition/core concept.
- [ ] **CONT-003** Legal principle/doctrine.
- [ ] **CONT-004** Statutory framework and interpretation.
- [ ] **CONT-005** Essential ingredients/elements.
- [ ] **CONT-006** Detailed student-friendly explanation.
- [ ] **CONT-007** Practical examples/illustrations.
- [ ] **CONT-008** Distinctions/comparisons where legally useful.
- [ ] **CONT-009** Relevant verified case law and principles.
- [ ] **CONT-010** Problem/application analysis.
- [ ] **CONT-011** Short-answer structure.
- [ ] **CONT-012** 10-mark answer structure.
- [ ] **CONT-013** 16-mark answer structure.
- [ ] **CONT-014** Key takeaways.
- [ ] **CONT-015** Authoritative sources.
- [ ] **CONT-016** Current-law verification metadata.

### Batch order
- [x] **BNS-001** Complete BNS §§11–15. Additive in-progress enhancements on topics/bns/s-11.json through s-15.json. Not verified or published.
- [x] **BNS-002** Complete BNS §§16–20. Additive in-progress enhancements on topics/bns/s-16.json through s-20.json. Not verified or published.
- [x] **BNS-003** Complete BNS §§21–44 (Chapter III General Exceptions complete). Additive in-progress enhancements on topics/bns/s-21.json through s-44.json. Not verified or published.
- [x] **BNS-004** Complete BNS §§45–62 (Chapter IV Abetment, Criminal Conspiracy and Attempt complete). Additive in-progress enhancements on topics/bns/s-45.json through s-62.json. Not verified or published.
- [x] **BNS-005** Complete BNS §§63–99 (Chapter V Offences against Women and Children complete). Additive in-progress enhancements on topics/bns/s-63.json through s-99.json. Not verified or published.
- [x] **BNS-006** Complete BNS §§100–146 (Chapter VI Offences Affecting the Human Body complete). Additive in-progress enhancements on topics/bns/s-100.json through s-146.json. Not verified or published.
- [x] **BNS-007** Complete BNS §§147–358 (Chapters VII through XIX complete — BNS catalogue 100% enhanced from Section 1 to Section 358). Additive in-progress enhancements on topics/bns/s-147.json through s-358.json. Not verified or published.
- [x] **BNSS-001** Complete BNSS §§1–531 (Chapters I through XXXIX complete — BNSS catalogue 100% enhanced from Section 1 to Section 531). Additive in-progress enhancements on topics/bnss/s-1.json through s-531.json. Not verified or published.
- [x] **BSA-001** Complete BSA §§1–170 (Chapters I through XII complete — BSA catalogue 100% enhanced from Section 1 to Section 170). Additive in-progress enhancements on topics/bsa/s-1.json through s-170.json. Not verified or published.
- [x] **CONST-001** Complete Constitutional Law topics (Arts. 1–395 + sub-articles + 21 foundational doctrines complete — 522 topics 100% enhanced with all 14 required fields, section-specific principles, zero generic template contamination, and landmark hardening). Additive in-progress enhancements across topics/constitution/*.json. Not verified or published.
- [x] **CONTRACT-001** Assemble Contract/commercial-law topics from migrated notes. Not verified.
- [x] **CONTRACT-002** Complete Specific Relief Act subject enhancement (ss.10, 14, 16, 20, 34, 38) with all required enhancement fields; statutory/case sources opened; content remains `in-progress` pending publishing gate.
- [x] **TORT-001** Assemble Torts topics from migrated notes. Not verified.
- [x] **ADMIN-001** Assemble Administrative Law topics from migrated notes. Not verified.
- [x] **ARB-001** Assemble Arbitration topics from migrated notes. Not verified.
- [x] **REMAIN-001** Assemble remaining subject families from migrated notes. Not verified.
- [ ] **REMAIN-002** Reconcile renamed-family topics and relationship references after each major subject.
- [ ] **REMAIN-003** Run full-catalog enhancement progress report after every batch.
- [x] **CONTROL-001** Create and maintain section-level completion ledger using `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md`. Live Torts ledger: `docs/TORTS-SECTION-STATUS-LEDGER.md`.
- [x] **CONTROL-002** Reconcile Torts authoritative subject scope against the complete repository topic inventory; 38 Torts JSON files reconciled and scope frozen in `docs/TORTS-REPOSITORY-RECONCILIATION.md`. Continue this control for each subsequent subject before declaring enhancement complete.
- [ ] **CONTROL-003** Prevent rework by skipping `COMPLETE_LOCKED` items unless a documented reopening trigger exists.
- [ ] **CONTROL-004** Record per-section evidence/commit and independent statuses for inventory, enhancement, verification, validation, integration and production.

**Batch rule:** no next subject/batch starts until the previous batch passes repository validation and preservation validation.

## 5. Sprint 3 — Legal verification and publishing readiness

- [ ] **VER-001** Verify statutory text against authoritative current sources. Started: `docs/VER-001-STATUTORY-SOURCE-MAP.md` and `docs/VER-001-SPOT-CHECK.md`. BNS s.1 subsections (1)–(4) matched India Code. No topic marked verified.
- [ ] **VER-002** Verify amendment/current-law status where applicable.
- [ ] **VER-003** Verify case names, citations and courts.
- [ ] **VER-004** Verify case principles/ratio against authoritative judgments.
- [ ] **VER-005** Verify source URLs and source authority.
- [ ] **VER-006** Identify outdated/repealed/superseded propositions.
- [ ] **VER-007** Record verification date and verifier.
- [x] **VER-008** Keep uncertain material `in-progress` rather than publishing. `scripts/gate-unverified-promotion.mjs` fails a verified or published enhancement that has no `lastVerifiedAt`.
- [x] **VER-009** Mark substantively checked Torts topics `verified` where primary-source evidence exists.
- [ ] **VER-010** Apply publication status only after all publication criteria pass.
- [x] **VER-011** Produce the Torts subject-level verification record in `docs/TORTS-SECTION-STATUS-LEDGER.md`.
- [ ] **VER-012** Produce final full-catalog verification report.

## 6. Sprint 4 — Product/content integration

### `codepackr-law`
- [x] **INT-001** Validate canonical Torts topic routes against the enhanced catalog.
- [x] **INT-002** Validate Torts rendering of optional enhancement fields.
- [ ] **INT-003** Ensure existing legacy/migrated content remains visible.
- [ ] **INT-004** Ensure enhanced sections do not break mobile layouts.
- [ ] **INT-005** Ensure global search can discover enhanced topics without changing existing behavior.
- [x] **INT-006** Validate Torts case-law/source provenance through canonical metadata and the live subject route.
- [ ] **INT-007** Validate 10-mark/16-mark student-answer presentation.
- [ ] **INT-008** Add regression tests for enhancement rendering.
- [ ] **INT-009** Run route/content smoke matrix.
- [ ] **INT-010** Reconcile production deployment evidence after integration changes.

### Canonical delivery
- [ ] **INT-020** Validate manifest/entity/relationship consistency after content batches.
- [ ] **INT-021** Validate canonical delivery for representative enhanced topics.
- [ ] **INT-022** Validate failure/timeout behavior remains fail-closed.
- [ ] **INT-023** Confirm no hidden legacy fallback masks missing canonical content.

## 7. Sprint 5 — Production readiness follow-up

- [ ] **PROD-001** Re-run TypeScript and unit gates after major content integration.
- [ ] **PROD-002** Re-run content schema/entity/relationship validation.
- [ ] **PROD-003** Re-run preservation validation.
- [ ] **PROD-004** Re-run enhancement validation.
- [x] **PROD-005** Re-run Torts route/content smoke checks — live subject route PASS.
- [ ] **PROD-006** Re-run accessibility regression checks after UI/content changes.
- [ ] **PROD-007** Re-run performance/bundle checks after UI/content changes.
- [ ] **PROD-008** Re-run security/privacy checks after integration changes.
- [ ] **PROD-009** Verify SEO/canonical metadata for enhanced content.
- [ ] **PROD-010** Verify sitemap/indexing generation.
- [ ] **PROD-011** Perform production smoke test.
- [ ] **PROD-012** Record rollback/recovery point.
- [ ] **PROD-013** Publish a release-readiness report.

## 8. Sprint 6 — Final content quality pass

- [ ] **QUAL-001** Identify topics with weak or incomplete enhancement coverage.
- [ ] **QUAL-002** Remove duplicate boilerplate while preserving substantive baseline.
- [ ] **QUAL-003** Improve student readability and legal terminology.
- [ ] **QUAL-004** Check examples against the actual rule.
- [ ] **QUAL-005** Check distinctions for legal accuracy.
- [ ] **QUAL-006** Check problem questions/application reasoning.
- [ ] **QUAL-007** Check 10-mark answer completeness.
- [ ] **QUAL-008** Check 16-mark answer completeness.
- [ ] **QUAL-009** Check cross-topic relationships.
- [ ] **QUAL-010** Check current-law warnings where relevant.
- [ ] **QUAL-011** Re-run preservation and legal validation after corrections.

## 9. Sprint 7 — Final Authoritative Legal Verification & Publication Readiness

**Status: ACTIVE — FINAL NON-AI PHASE**

Authoritative execution control: `docs/FINAL-AUTHORITATIVE-LEGAL-VERIFICATION-PUBLICATION-READINESS.md`.

### Final verification queue

- [ ] **FV-001** Re-audit the live judgment-verification inventory against current `legal-content/main`. The earlier readiness baseline contained **297 pending judgment-verification records**; current live state is **296 pending / 125 verified** after Afcons verification.
- [ ] **FV-002** Verify the pending judgment records using the open-corpus acquisition layer first (Open India Law / AWS Open Data), then retain authoritative publisher provenance and inspectable judgment evidence.
- [ ] **FV-003** Verify judgment identity, citation, court, date, holding, ratio and material propositions.
- [ ] **FV-004** Record source/paragraph/page evidence only where actually inspected; never fabricate references.
- [ ] **FV-005** Re-audit the **3,566 migrated canonical topics currently in `review` state**.
- [ ] **FV-006** Verify statutory/current-law status and amendment/commencement issues for each review-state topic.
- [ ] **FV-007** Verify every material case authority used by each review-state topic.
- [ ] **FV-008** Correct unsupported/outdated propositions without overwriting preserved substantive baseline.
- [ ] **FV-009** Promote only evidence-backed records from `review`/in-progress to `verified`/published.
- [ ] **FV-010** Produce final full-catalog verification report with every remaining non-published record explicitly accounted for.
- [ ] **FV-011** Re-run preservation, schema, entity, relationship and canonical-delivery validation.
- [ ] **FV-012** Re-run application integration, SEO/sitemap and production smoke/readiness gates.
- [ ] **FV-013** Record final release commit and rollback/recovery point.
- [ ] **FV-014** Record final legal-quality sign-off.

**Publication rule:** Review-state content is not production-published merely because migration/parity passed. AI-generated material is never authoritative by itself.

**Queue dependency:** Judgment verification must be completed before dependent topics relying materially on those judgments are promoted.

**AI gate:** Sprint 8 / AI-provider work remains blocked until FV-001 through FV-014 are closed.

## 10. Sprint 8 — Final AI phase (must remain last)

**Gate:** Do not start until all non-AI enhancement, verification, integration and production-readiness work above is complete.

- [ ] **AI-001** Freeze the non-AI content baseline and record release commit.
- [ ] **AI-002** Define AI safety/privacy/product requirements.
- [ ] **AI-003** Define approved AI use cases and prohibited use cases.
- [ ] **AI-004** Define source-grounding requirements.
- [ ] **AI-005** Define citation/provenance requirements.
- [ ] **AI-006** Define human/legal verification workflow.
- [ ] **AI-007** Define provider abstraction and configuration.
- [ ] **AI-008** Implement AI provider integration.
- [ ] **AI-009** Implement failure/fallback handling.
- [ ] **AI-010** Implement rate/cost controls.
- [ ] **AI-011** Implement privacy/data-retention controls.
- [ ] **AI-012** Implement prompt/version governance.
- [ ] **AI-013** Add AI-specific tests and evaluation fixtures.
- [ ] **AI-014** Validate no unsupported legal conclusions are presented as authoritative.
- [ ] **AI-015** Perform security/privacy audit.
- [ ] **AI-016** Perform production readiness and rollback test.
- [ ] **AI-017** Final AI release audit.

## 11. Definition of Done

An item can be marked **COMPLETED** only when:
- implementation/documentation exists;
- all relevant tests/validators pass;
- preservation is confirmed;
- no unrelated regression is introduced;
- evidence is recorded;
- the appropriate repo board/checklist is updated;
- the commit is on `main`;
- no unsupported production claim is made.

## 12. Current execution pointer

**Current batch:** Final Authoritative Legal Verification & Publication Readiness.
**Judgment verification queue:** 296 pending records / 125 verified on current `legal-content/main`; FV-002/FV-003/FV-004 remain active for the pending queue.
**Review-state publication baseline:** 3,566 migrated canonical topics currently in `review` state and intentionally not production-published pending authoritative provenance/current-law verification.
**Verified enhancements:** Torts is COMPLETE_LOCKED; other enhanced batches remain subject to final verification/publication gates.
**Current control item:** Final authoritative legal verification and publication readiness. Torts subject is **COMPLETE_LOCKED**. All 41 Torts control rows are closed after primary-source verification, canonical content validation, live route integration smoke, and production acceptance evidence. Do not reopen without a documented legal/source, schema, product-regression, or current-law trigger.
**Torts ledger:** `docs/TORTS-SECTION-STATUS-LEDGER.md`.
**HMA working set:** COMPLETE_LOCKED by owner instruction on 2026-10-03. India Code PDF was not opened and that gate is waived for this subject only. Named judgment PDFs were opened. Do not rework HMA unless a reopening trigger exists. Next subject is not started.
**Torts repository reconciliation:** `docs/TORTS-REPOSITORY-RECONCILIATION.md`.
**Torts row-level mapping:** `docs/TORTS-ROW-LEVEL-MAPPING.md`.
**Torts inventory:** `docs/TORTS-FULL-SUBJECT-INVENTORY.md`.
**Rule:** Do not re-enhance existing completed topics; execute only missing gates/sections.
**Standard checklist:** `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md`.
**Source sites:** use `docs/SOURCE-SITE-LOG.md` for every later enhancement. Add a site there before relying on it.


### Open-corpus acquisition implementation — COMPLETE

- Open-corpus policy: `docs/JUDGMENT-OPEN-CORPUS-SOURCE-POLICY.md`
- Workflow: `docs/judgment-verification/README.md`
- Matching script: `scripts/build-open-judgment-verification-queue.mjs`
- Command: `npm run judgments:queue`
- Acquisition layer: Open India Law + AWS Supreme Court/High Court Open Data.
- Rule: acquisition/matching never marks a judgment verified; substantive verification remains FV-002/FV-003/FV-004.
