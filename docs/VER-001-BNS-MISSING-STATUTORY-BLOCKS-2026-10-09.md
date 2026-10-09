# BNS Missing Statutory Blocks — Execution Record — 2026-10-09

**Subject:** Bharatiya Nyaya Sanhita, 2023 (BNS)  
**Repository:** `coolnaveen99/legal-content`  
**Execution mode:** Owner-authorized direct commits to `main`; no PR created for this content batch  
**Source used for transcription:** India Code, *The Bharatiya Nyaya Sanhita, 2023*, Act No. 45 of 2023: https://www.indiacode.nic.in/indiacode/bitstream/123456789/20062/1/a202345.pdf  
**Disposition:** Missing `The legal rule` blocks added for all 16 previously listed sections. This is a structural remediation record, **not** a declaration that BNS statutory verification or subject closure is complete.

## Sections remediated

Added a dedicated `content.sections` entry headed `The legal rule` for all 16 sections previously listed as having no statutory-text block:

`61, 63, 64, 69, 70, 100, 101, 103, 111, 112, 113, 116, 117, 303, 304, 309`.

The text blocks include the operative section wording and applicable sub-sections, explanations, exceptions and provisos as transcribed from the linked Act PDF. Separate `Statutory illustrations` blocks were also added for sections 100, 101, 117, 303 and 309, where the Act contains illustrations.

## Source-based corrections made while transcribing

- **Section 303(2):** included the second/subsequent-conviction punishment in addition to the first-conviction community-service proviso.
- **Section 309(6):** corrected the punishment wording to the statutory rule for voluntarily causing hurt in committing or attempting robbery; the previous draft wording was not accurate.
- **Section 117 illustration:** retained the wording shown in the official PDF rather than silently correcting its apparent wording irregularity.

## Validation and limitations

- All 16 current topic files were re-read as JSON after the writes; each has exactly one `The legal rule` block.
- The official source used is the Act PDF available at the linked India Code URL. This transcription does **not** by itself establish amendments/current-law status as at 2026-10-09.
- A formal word-by-word reconciliation of every operative text block and every statutory illustration against the source is still required; do not record the old VER-001 body-check gate as passed merely because the blocks now exist.
- The current full-catalog GitHub workflows must finish successfully. A pre-existing malformed JSON object was found in `topics/constitution/art-388.json` during this validation and repaired by closing the missing object brace; that fix is included to unblock catalog parsing.
- No topic status was promoted. All affected topics retain their previous status; do not set them to `verified`, `published` or `COMPLETE_LOCKED` without the remaining required evidence.


## CI snapshot — 2026-10-09

For the main commit checked during this execution, the `validate-content` workflow successfully completed manifest regeneration, relationship-index build, legacy-preservation checks, canonical content quality audit, source/provenance audit, topic-to-source audit, current-law metadata normalization, legal-proposition/case-law audit, statutory consistency audit and statutory deep-verification audit. It then failed at `validate:enhancements`; 547 errors were reported for Constitution topic files missing required enhancement fields. The log did not identify any of the 16 BNS files as the source of those errors. Later full-catalog verification and FV gates were skipped because the workflow stopped at that failure.

The separate `Validate legal content` workflow passed JSON/schema/entity/relationship/manifest validation (0 errors, 0 warnings) but failed at the same enhancement validation step. Therefore **CI is not green** and no full-catalog pass is claimed. The Constitution enhancement backlog is outside this BNS statutory-text batch and is not silently treated as resolved.

## Remaining BNS closure gates

1. Formal word-by-word body verification, including illustrations, punctuation policy and import artefacts.
2. Current-law/amendment and commencement verification, including section 106(2)'s commencement exception.
3. Case/judgment authority verification and resolution of logged editorial issues.
4. Full authoritative BNS inventory reconciliation and section-level evidence ledger.
5. Current full-catalog validation and green CI.
6. BNS-specific integration, relationships, SEO, production/release/rollback evidence as applicable.
7. Human legal-quality sign-off.

**Result:** The 16 missing statutory-rule blocks have been populated directly on `main`. BNS remains open until the remaining legal-verification and subject-level gates are evidenced.
