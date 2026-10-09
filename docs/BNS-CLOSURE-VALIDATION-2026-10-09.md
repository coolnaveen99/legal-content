# BNS Subject Closure Validation — 2026-10-09

**Subject:** Bharatiya Nyaya Sanhita, 2023 (BNS)  
**Canonical content repository:** `coolnaveen99/legal-content`  
**Tracking repository:** `coolnaveen99/codepackr-law`  
**Validation baseline:** `legal-content/main` at `3e10441f479981224773e5b0967ee1bc0bc883de` (2026-10-09)  
**Disposition:** **NOT CLOSABLE — closure gates remain open. Do not set BNS or its topics to `COMPLETE_LOCKED`.**

## Scope and method

Checked the active work-control rules in `AGENTS.md` and `docs/WORK-CONTROL-MASTER-2026-10-08.md`, the final legal verification/publication-readiness criteria, the BNS sprint-control records, the listed VER-001 BNS batch evidence, and the live canonical topic files for the recorded statutory-text gaps. Open PR search did not return an open BNS PR in either repository. This is a control/evidence audit, not a claim that every BNS section has received final legal review.

## Closure-gate results

| Gate / closure item | Result | Evidence / remaining work |
|---|---|---|
| Authoritative inventory and canonical mapping | **NOT PROVEN CLOSED** | The final-phase controls require a complete, frozen inventory and explicit disposition of every applicable item. A subject-level BNS inventory reconciliation with all gates accounted for was not found in the evidence checked here. |
| Enhancement completeness | **NOT PROVEN CLOSED** | Existing topic files contain substantive study material, but enhancement alone does not close a legal topic. Current section-level evidence must account for every BNS topic and all required fields. |
| As-enacted statutory text verification | **PARTIAL / BLOCKED** | The VER-001 batch records explicitly list 16 sections whose statutory body could not be compared because no dedicated statutory-text block existed: **61, 63, 64, 69, 70, 100, 101, 103, 111, 112, 113, 116, 117, 303, 304, 309**. These gaps remain present in the current topic structure. Add the full operative text with all applicable sub-sections, provisos, explanations and illustrations, then compare it to the authoritative text; do not infer a match from commentary. |
| Current-law / amendment / commencement verification | **OPEN** | The VER-001 records state that India Code consolidated-text requests timed out and that amendments after enactment were not checked for those batches. The India Code PDF located during this audit identifies itself as text “as on the 6th October, 2025”, so it is not by itself proof of current law as of 2026-10-09. Verify amendments, commencement exceptions and transitional effects from authoritative current sources and record evidence. |
| Case identity, judgment and ratio verification | **OPEN** | The batch body-check records explicitly exclude case law and commentary. Verify each material case relied on by BNS topics against authoritative judgments; remove or qualify unsupported case propositions. |
| Logged editorial defects | **OPEN** | Existing batch evidence identifies heading/import artefacts remaining in commentary-derived fields, including study/examples fields for sections 60, 62, 73, 307 and 308, and an issue in section 106 concerning the non-commencement of s.106(2). Reconcile each issue against current law and current main before editing; preserve the original substance. |
| Schema/content validation | **PARTIAL / RECHECK REQUIRED** | Prior main CI evidence for selected commits reports zero errors, but those historical successes do not validate changes made after those commits or establish that all BNS closure gates passed. Run the current documented full validation sequence after the substantive fixes. |
| Integration / relationships / SEO | **OPEN FOR BNS CLOSURE** | The final closure standard requires canonical routes, title/H1, descriptions, internal links, sitemap inclusion, canonical metadata, crawl/index controls and no competing duplicate pages to be evidenced for all applicable canonical provisions. Do not infer BNS-wide completion from general integration workstream closure. |
| Production / release / rollback | **OPEN / ENVIRONMENT-DEPENDENT** | The final readiness document states Vercel deployment is intentionally stopped. Repository-controlled checks can be run, but no live production smoke success may be claimed until an actual production runtime is available. Record release and rollback evidence when applicable. |
| Final legal-quality sign-off | **OPEN** | The active final phase requires final legal-quality sign-off and no unresolved P0 legal-verification blocker. AI review is not a substitute for human legal review. |

## Required execution order

1. Resolve the 16 missing statutory-text blocks, one non-overlapping range at a time, against authoritative text; preserve all existing study content.
2. Complete the amendment/current-law and commencement check for each BNS section, including the section 106(2) exception.
3. Resolve the logged editorial issues only after source comparison.
4. Verify material cases, citations, holdings and ratios against authoritative judgments.
5. Reconcile the full BNS statutory inventory against canonical topics; account explicitly for omitted, inserted, repealed, transitional and non-applicable items.
6. Run all documented validators and record current CI results for the resulting commits.
7. Complete BNS-specific relationship, integration and SEO checks.
8. Record production smoke / release / rollback evidence when the runtime is available.
9. Obtain human legal-quality sign-off.
10. Only after every applicable gate passes, update the section-level evidence ledger and subject-level control board to `COMPLETE_LOCKED`.

## Closure decision

**BNS remains OPEN.** The checked evidence is sufficient to reject closure now, but not sufficient to claim that the entire subject has been fully validated. In particular, the 16 statutory-text gaps, current-law checks, case-law verification, logged editorial issues, and final legal/integration/SEO/production/sign-off gates prevent closure. No topic status has been promoted and no content has been changed by this audit.

---

## Current-main recheck — 2026-10-09 03:43 UTC

This addendum supersedes any earlier statement in this report that the 16 `The legal rule` blocks are still absent. The baseline cited in the original audit predates later direct commits.

### Verified structural state

The current `main` versions of all 16 affected topic files were fetched and parsed as JSON. Each contains exactly one `content.sections` entry headed `The legal rule`:

`61, 63, 64, 69, 70, 100, 101, 103, 111, 112, 113, 116, 117, 303, 304, 309`.

Evidence: [VER-001 missing statutory-block execution record](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-MISSING-STATUTORY-BLOCKS-2026-10-09.md).

**Revised gate result:** Structural presence of the 16 blocks is **CLOSED**. Formal word-by-word reconciliation against the enacted Act remains **OPEN**. Existence of a block must not be described as proof that its complete text is accurate or current.

### Subsequent changes reconciled

- Section 113: appended the final Explanation concerning the Superintendent of Police decision on registration under BNS s. 113 or UAPA; full block reconciliation remains open.
- Section 106(2): commencement exception recorded in the topic. The MHA Annual Report 2025–26 repeats that s. 106(2) was excluded from commencement; check for a later Gazette notification and obtain human legal sign-off before closure.
- Import artefacts: targeted cleanup completed for sections 60, 62, 73, 307 and 308. See [cleanup evidence](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-IMPORT-ARTEFACT-CLEANUP-2026-10-09.md).
- Section 61: an earlier attempt to remove “with the common object” was reversed after direct recheck showed those words in the official India Code PDF. Current topic restored to the official PDF wording. See [Section 61 reconciliation evidence](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-S61-STATUTORY-WORDING-CORRECTION-2026-10-09.md).
- No affected topic was promoted beyond `review`.

### Current CI result

Latest runs observed at this recheck both failed on commit `fc0dd119d17f915df106195d5b94924c047b532d`:

- [Validate legal content](https://github.com/coolnaveen99/legal-content/actions/runs/37880462893)
- [validate-content](https://github.com/coolnaveen99/legal-content/actions/runs/37880462927)

The failure remains `validate:enhancements`, reporting missing required enhancement fields across the catalogue, concentrated in Constitution topics. This means full CI is **RED**, later gated checks were skipped, and no catalogue-wide validation pass is claimed. Do not add generic filler to BNS topics to mask an unrelated catalogue backlog.

### Current closure decision

**BNS remains OPEN and is not eligible for `COMPLETE_LOCKED`.** The next content gate is formal section-by-section statutory reconciliation and current-law verification, followed by case/judgment verification, a complete BNS inventory ledger, clean current validation, BNS integration/SEO evidence, production/release/rollback evidence when runtime is available, and qualified human legal sign-off.



### Section 61 source-reconciliation correction — 2026-10-09

The earlier edit that removed “with the common object” was incorrect: the official India Code BNS PDF itself includes that phrase in section 61(1). The phrase has been restored on current `main` and the evidence note corrected. Commit: `9c533d9861c30b44332842c45446071107d6b907`. This reinforces that every statutory block requires comparison against the exact authoritative text; no broad statutory-verification gate is closed by the existence of a block.

### Additional amendment-bill leads — current-law gate remains open

The current-law scan has been expanded to record three introduced bill texts requiring official parliamentary status and Gazette follow-up: Bill No. XXVII of 2024 (proposes omitting s. 63 Exception 2, omitting s. 83 and inserting s. 110A); Bill No. XXXIX of 2024 (proposes replacing s. 63 Exception 2); and Bill No. I of 2026 (proposes inserting s. 24A). No enactment/commencement evidence was established by this search, so none is treated as operative law. See [updated current-law scan](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-CURRENT-LAW-SCAN-2026-10-09.md). Parliamentary status, Gazette enactment/commencement, s. 106(2) later notification and applicable State amendments remain to be checked before closing this gate.

### BNS sections 63–75 follow-up — current-main repairs

The section 63–75 audit record has been updated to distinguish its 2026-10-08 baseline from later changes. Sections 63, 64, 69 and 70 now have `The legal rule` blocks, but those later-added blocks still require formal word-by-word comparison. Derived `Essential ingredients` omissions were repaired for sections 65, 66, 68 and 75 (fine-related provisos; both s. 64 sub-sections; s. 68 actor category (b); and s. 75 penalty cross-references). These targeted fixes were re-fetched and confirmed, and all affected topics remain `review`. Evidence: [updated sections 63–75 audit](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-S63-S75.md). This does not close the statutory/current-law or subject-level gates.

### BNS section-file inventory presence check — 2026-10-09

The live GitHub directory listing for `topics/bns` contains 368 JSON files: exactly 358 numbered section files (`s-1.json` through `s-358.json`) plus 10 non-section doctrine/topic files. A numeric check found no missing section file number in the range 1–358. This closes only the **numbered-file presence** check. It does not yet reconcile each topic to the Act's full section inventory, captions, omitted/repealed provisions, transitional treatment, source references, section status, or canonical page/SEO coverage; those remain open.

### Sections 63, 64 and 70 — BSA cross-reference correction — 2026-10-09

A targeted commentary audit found the rape-related statutory presumption was repeatedly misnumbered as BSA section 115; the correct provision is BSA section 120. The official BSA text limits it to a prosecution under BNS section 64(2), where intercourse by the accused is proved and the woman states in court that she did not consent. Sections 63/64 commentary now identifies the correct section and scope. Section 70 commentary no longer claims the presumption automatically applies to every gang-rape accused. Also narrowed a section 63 commentary statement that overclaimed the effect of “vagina includes labia majora.” Operative BNS statutory-rule blocks were not changed. Evidence: [BNS ss. 63/64/70 BSA section 120 correction](https://github.com/coolnaveen99/legal-content/blob/main/docs/VER-001-BNS-SS63-70-BSA-120-CROSSREF-2026-10-09.md). All topics remain `review`; legal-proposition and primary-judgment audit remains open.

