# Master Pending Sprint Backlog & Execution Checklist

**Date:** 2026-10-03  
**Applies to:** `coolnaveen99/codepackr-law` + `coolnaveen99/legal-content`  
**Execution rule:** one backlog item at a time; direct commit to `main`; validate before marking complete.

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
- [ ] **S0-015** Run a full baseline/preservation audit before large-scale enhancement begins.

## 3. Sprint 1 — Enhancement framework hardening

- [x] **ENH-001** Add `content.enhancement` schema.
- [x] **ENH-002** Add student-focused enhancement specification.
- [x] **ENH-003** Add enhancement validator.
- [x] **ENH-004** Add recursive full-catalog progress reporting.
- [x] **ENH-005** Add full-catalog rollout rules.
- [x] **ENH-006** Add enhancement quality checks for minimum substantive coverage. `scripts/audit-enhancement-quality.mjs` writes `docs/ENH-006-QUALITY-REPORT.md`. Scaffold text is not counted as substantive.
- [ ] **ENH-007** Add protection against accidental shortening/removal of baseline substantive fields.
- [ ] **ENH-008** Add per-batch validation/report artifact.
- [ ] **ENH-009** Add subject-level progress reporting suitable for sprint tracking.
- [ ] **ENH-010** Define final verification/publishing acceptance checklist.

## 4. Sprint 2 — Student-focused legal content enhancement

### Required content model for each substantive topic
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
- [ ] **CONTRACT-001** Enhance Contract/commercial-law topics.
- [ ] **TORT-001** Enhance Torts topics.
- [ ] **ADMIN-001** Enhance Administrative Law topics.
- [ ] **ARB-001** Enhance Arbitration topics.
- [ ] **REMAIN-001** Enhance remaining subject families.
- [ ] **REMAIN-002** Reconcile renamed-family topics and relationship references after each major subject.
- [ ] **REMAIN-003** Run full-catalog enhancement progress report after every batch.

**Batch rule:** no next subject/batch starts until the previous batch passes repository validation and preservation validation.

## 5. Sprint 3 — Legal verification and publishing readiness

- [ ] **VER-001** Verify statutory text against authoritative current sources.
- [ ] **VER-002** Verify amendment/current-law status where applicable.
- [ ] **VER-003** Verify case names, citations and courts.
- [ ] **VER-004** Verify case principles/ratio against authoritative judgments.
- [ ] **VER-005** Verify source URLs and source authority.
- [ ] **VER-006** Identify outdated/repealed/superseded propositions.
- [ ] **VER-007** Record verification date and verifier.
- [ ] **VER-008** Keep uncertain material `in-progress` rather than publishing.
- [ ] **VER-009** Mark only substantively checked topics `verified`.
- [ ] **VER-010** Apply publication status only after all publication criteria pass.
- [ ] **VER-011** Produce subject-level verification reports.
- [ ] **VER-012** Produce final full-catalog verification report.

## 6. Sprint 4 — Product/content integration

### `codepackr-law`
- [ ] **INT-001** Validate all canonical topic routes against the enhanced catalog.
- [ ] **INT-002** Validate topic rendering of optional enhancement fields.
- [ ] **INT-003** Ensure existing legacy/migrated content remains visible.
- [ ] **INT-004** Ensure enhanced sections do not break mobile layouts.
- [ ] **INT-005** Ensure global search can discover enhanced topics without changing existing behavior.
- [ ] **INT-006** Validate case-law/source links and provenance display.
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
- [ ] **PROD-005** Re-run route/content smoke checks.
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

## 9. Sprint 7 — Final AI phase (must remain last)

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

## 10. Definition of Done

An item can be marked **COMPLETED** only when:
- implementation/documentation exists;
- all relevant tests/validators pass;
- preservation is confirmed;
- no unrelated regression is introduced;
- evidence is recorded;
- the appropriate repo board/checklist is updated;
- the commit is on `main`;
- no unsupported production claim is made.

## 11. Current execution pointer

**Current batch:** structural enhancement objects added for every topic that previously had none (2,065 topics). Constitution, BNS, BNSS and BSA already had enhancements; their remaining files without an enhancement object were included.
**Status of those new objects:** `in-progress` only. Built from each topic's existing overview, sections and examples. No case law was added. Not verified. Not published.
**Verified enhancements:** 0.
**Published enhancements:** 0.
**Still pending:** authoritative verification (VER-001 onward), product integration, and any topic whose existing note is too thin for exam use.
**AI phase:** NOT STARTED.

