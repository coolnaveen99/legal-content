# VER-001 BNS sections 63–75 body check

Date: 2026-10-08

Scope: Chapter V (Of Offences against Woman and Child). Files `topics/bns/s-63.json` … `s-75.json`.

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023). Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`). This is the same file as in VER-001-BNS-S4-S9 and VER-001-BNS-S10-S13.
- Gazette pages 23–27.
- India Code: retried 2026-10-08 22:09 IST: bitstream request timed out. The consolidated current text was not read. Amendments after enactment are not checked for this range.

Method: the Gazette text layer was extracted with word coordinates. Margin notes, marginal Act citations, running headers, chapter headings and italic sub-headings were removed, and the text was split at each section number. The extraction reproduces the hand transcriptions of ss.4–13 exactly. Each statutory-text block in `content.sections` ("The legal rule", "Explanations", "Statutory illustrations", "Exceptions and provisos") was then aligned word by word with the official text of its section. Case was compared, hyphen and line-break joins were normalised, and spacing artefacts of the Gazette text layer (for example `whileAcontinues`) were ignored. "Essential ingredients" was checked for text not in the statute. Where it reproduces the statute only in part, that is recorded below, but the omissions were not corrected. Punctuation was not compared character by character. Import-dropped punctuation was left as is, as for ss.1–13.

| Section | Local file | Statutory blocks compared | Official words | Result |
|---|---|---|---|---|
| 63 | topics/bns/s-63.json | Added after baseline | 417 | Not compared in original pass; current block exists, full reconciliation still open |
| 64 | topics/bns/s-64.json | Added after baseline | 549 | Not compared in original pass; current block exists, full reconciliation still open |
| 65 | topics/bns/s-65.json | The legal rule, Exceptions and provisos | 180 | Matched |
| 66 | topics/bns/s-66.json | The legal rule | 83 | Matched |
| 67 | topics/bns/s-67.json | The legal rule, Explanations | 78 | Matched |
| 68 | topics/bns/s-68.json | The legal rule, Explanations | 264 | Matched |
| 69 | topics/bns/s-69.json | Added after baseline | 79 | Not compared in original pass; current block exists, full reconciliation still open |
| 70 | topics/bns/s-70.json | Added after baseline | 213 | Not compared in original pass; current block exists, full reconciliation still open |
| 71 | topics/bns/s-71.json | The legal rule | 58 | Matched |
| 72 | topics/bns/s-72.json | The legal rule, Explanations, Exceptions and provisos | 261 | Matched |
| 73 | topics/bns/s-73.json | The legal rule, Explanations | 84 | Corrected, then matched |
| 74 | topics/bns/s-74.json | The legal rule | 59 | Matched |
| 75 | topics/bns/s-75.json | The legal rule | 133 | Matched |

## Corrections made (verbatim)

- s.73: removed the sub-heading 'Of criminal force and assault against woman' that the import had appended to the end of Explanations.
  - The same text remains in commentary-derived fields (study). These were not changed and need editorial cleanup.

## Logged, not changed, not verified

- Original baseline had no statutory-text block for ss. 63, 64, 69 and 70. Subsequent commits added a dedicated `The legal rule` block to each. The presence of these blocks has been rechecked on current main, but the new text has not yet received the original word-by-word comparison; each remains unverified pending that comparison.

## Essential ingredients: partial extracts (derived, not changed)

- s.65: omits 'Provided that such fine shall be just and reasonable to meet the medical expense'
- s.66: omits 'subsection 1 or'
- s.68: omits 'or b a public servant'
- s.75: omits 'i or clause ii or clause iii of subsection'; 'iv of subsection'

## Not checked

- Commentary, `statutoryFramework`, definitions, examples, hypotheticals, Q&A and exam material.
- Case names and citations.
- Marginal headings (the `glance`/`overview` headings were not re-compared in this pass).
- Amendments after 25 December 2023.

## Status

Each topic file records a "Body check 2026-10-08" verification note, and `updatedAt` is changed. `statutoryFramework` is left as it is. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.


## Current-main follow-up — 2026-10-09

The original 2026-10-08 table above is retained as the historical baseline. The four previously absent statutory blocks (ss. 63, 64, 69 and 70) now exist on current `main`, as confirmed by fetching the live topic files. Their later addition does **not** retroactively mean they were compared in the 2026-10-08 pass; formal word-by-word comparison remains open for all four.

The previously recorded omissions in the derived `Essential ingredients` extracts have since been repaired on current main:
- **s. 65:** added the omitted provisos on reasonable victim-support fine and payment of fine to the victim. A duplicate copy introduced during the first repair attempt was removed; the current field contains one pair.
- **s. 66:** restored the omitted reference to both sub-section (1) and sub-section (2) of s. 64.
- **s. 68:** restored the omitted actor category “(b) a public servant”.
- **s. 75:** restored the complete cross-references for sub-section (2) (clauses (i)–(iii) of sub-section (1)) and sub-section (3) (clause (iv) of sub-section (1)).

These are completeness fixes to derived extracts, not a substitute for checking the full operative section, explanations, exceptions, current amendments, case law or commentary. All topics remain `review`; the 2026-10-08 source cutoff and current-law limitation in the original report remain applicable.


## Current-main follow-up — 2026-10-09: Section 65 proviso structure

A targeted review of topics/bns/s-65.json found that the study note and the “Exceptions and provisos” block repeated the fine-related provisos without distinguishing their statutory placement. BNS s. 65(1) and s. 65(2) each have their own pair of provisos; the phrase “under this sub-section” must be tied to the applicable subsection. The “The legal rule” block did not include those provisos, while “Essential ingredients” attached one pair after both subsections, obscuring the statutory structure.

Corrected on current main:
- The “The legal rule” block now includes both subsections and the two provisos immediately following each applicable subsection.
- “Essential ingredients” contains the two punishment clauses without misplacing provisos as ingredients.
- “Exceptions and provisos”, the study note, and both Q&A answers identify the separate subsection (1) and subsection (2) proviso sets.
- No case-law proposition or topic verification status was changed. Topic status remains review; human legal verification and current-law sign-off remain open.

Source checked: enacted BNS text, section 65, in the India Code Act text: https://www.indiacode.nic.in/indiacode/bitstream/123456789/20062/1/a202345.pdf. This pass is limited to subsection/proviso structure; it does not establish whether later amendments affect the section.


## Current-main follow-up — 2026-10-09: Section 68 actor categories and scope

A focused current-main review found that the commentary-derived study list of essential ingredients omitted the express category “(b) a public servant”, despite the complete statutory-text block containing it. The enhancement essentialIngredients list also described only some actor categories and narrowed the protected woman’s location to custody/care or patient status, omitting the express alternative “present in the premises”.

Corrected the study list and enhancement ingredient summary to state all four statutory actor categories, the alternatives for the woman being in custody, under charge, or present in the premises, the abuse/inducement requirement, and the statutory boundary that the intercourse does not amount to rape. The operative statutory-text block was not changed. The topic remains review; this is not a judgment audit or legal sign-off.

Source anchor: BNS section 68 as enacted in the official India Code BNS text: https://www.indiacode.nic.in/indiacode/bitstream/123456789/20062/1/a202345.pdf. Amendments after enactment and primary-case propositions were not assessed in this targeted pass.


## Current-main follow-up — 2026-10-09: Section 75 derived ingredient cross-references

A fresh live-file check found that, despite the prior note saying the cross-references had been restored, the current `content.study` “Essential ingredients” list still contained truncated lines: subsection (2) ended at “clause” and subsection (3) ended at “clause”, with the next lines detached as “(1) shall be punished”. The same import-generated truncation appeared in the hypothetical/Q&A answer material.

Corrected the derived study ingredients and enhancement ingredients to identify all four acts in s. 75(1), and restored the exact punishment cross-references: s. 75(2) applies to clauses (i), (ii) and (iii) of subsection (1); s. 75(3) applies to clause (iv) of subsection (1). Targeted broken references in generated hypothetical/Q&A material were also corrected where present. The operative `The legal rule` block was not changed. Topic status remains `review`.

Source: official India Code BNS Act text, s. 75: https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf. The source verifies the enacted text; this targeted correction is not a current-amendment scan or legal sign-off.


## Second-pass correction — 2026-10-09: residual Section 75 generated-answer defects

After the preceding targeted check, a deeper recursive scan of the current topic JSON found three residual occurrences of the truncated punishment cross-reference in the generated hypothetical (one) and Q&A answers (two). The earlier “no remaining truncated patterns” statement did not cover these occurrences reliably. Replaced each with a complete, accurate distinction: subsection (2) applies to clauses (i)–(iii) of subsection (1), while subsection (3) applies to clause (iv), with the corresponding penalty tiers. No statutory-text block was changed.

Current-main verification after commit: JSON parses; recursive scan confirms no remaining malformed “specified in clause” punishment extract in the topic; the two penalty tiers are stated in each repaired answer. Topic status remains `review`. This does not certify full-catalog validation, current-law amendments, case-law propositions, or legal sign-off.


## Derived-extract numbering and cross-reference follow-up — 2026-10-09

A recursive scan of sections 63–75 identified additional import-generated defects outside the operative statutory-rule blocks: duplicated list/subsection labels in the s. 65 and s. 75 hypotheticals; a line-split s. 66 cross-reference to sub-section (2) of s. 64; and s. 72 derived excerpts that split “Nothing in sub-section (1)” across labels and repeated outer numbering. Corrected these derived excerpts in s. 65, s. 66, s. 72, and s. 75. In s. 72, the exception clauses are now labelled as clauses (a)–(c) instead of conflating outer list numbering with statutory labels. No operative `The legal rule` block was intentionally changed in this batch.

Targeted follow-up checks must confirm current-main JSON parses, the s. 66 cross-reference reads “sub-section (2) of section 64”, the s. 72 subsection (2) exception reads “sub-section (1)”, and the s. 75 residual punishment extracts remain corrected. This remains derived-content cleanup only; topic status stays `review`, and no full-catalog CI or legal sign-off is implied.


## Derived-extract numbering and cross-reference follow-up — 2026-10-09

A recursive scan of sections 63–75 identified additional import-generated defects outside the operative statutory-rule blocks: duplicated list/subsection labels in the s. 65 and s. 75 hypotheticals; a line-split s. 66 cross-reference to sub-section (2) of s. 64; and s. 72 derived excerpts that split “Nothing in sub-section (1)” across labels and repeated outer numbering. Corrected these derived excerpts in s. 65, s. 66, s. 72, and s. 75. In s. 72, the exception clauses are now labelled as clauses (a)–(c) instead of conflating outer list numbering with statutory labels. No operative `The legal rule` block was intentionally changed in this batch.

Targeted follow-up checks must confirm current-main JSON parses, the s. 66 cross-reference reads “sub-section (2) of section 64”, the s. 72 subsection (2) exception reads “sub-section (1)”, and the s. 75 residual punishment extracts remain corrected. This remains derived-content cleanup only; topic status stays `review`, and no full-catalog CI or legal sign-off is implied.


## Sections 80, 82 and 90 derived-extract correction — 2026-10-09

A follow-on recursive scan of BNS sections 76–90 found duplicate subsection labels in the generated hypotheticals for s. 80 and s. 82, plus a duplicated s. 90(1) label and a split s. 90(2) cross-reference in derived material. Corrected those generated excerpts and the s. 90 “Essential ingredients” cross-reference. The operative s. 90 `The legal rule` text was deliberately not rewritten: the official enacted text itself uses the same awkward wording in subsection (2), so any proposed substantive editorial correction requires legal review rather than silent alteration. Sections remain `review`.

A separate scan of sections 91–105 found no matches for the targeted broken subsection/clause patterns or undefined-value markers. This is a limited pattern scan, not proof of complete statutory accuracy. Full current-law, primary-authority, full-catalog validation, integration/SEO/production gates and qualified human legal sign-off remain outstanding.


## BNS Sections 106–140: derived excerpt follow-up — 2026-10-09

Continued the same pattern-based audit beyond s. 90. Direct-to-main fixes were made to generated hypothetical/essential-ingredient material where duplicated subsection labels or line-split cross-references were clearly mechanical import defects: s. 109 and s. 115 essential-ingredient summaries; s. 118, s. 119 and s. 120; s. 121, s. 122, s. 124, s. 126 and s. 127; and s. 140. In s. 140, the enhancement ingredients were also corrected to distinguish s. 140(3) (secret and wrongful confinement) from s. 140(4) (grievous hurt, slavery or unnatural lust). The operative statutory-rule blocks were not intentionally rewritten in this batch. Section 106(2) commencement remains an open legal-verification gate.

Pattern scans of s. 91–105 and s. 121–135 found no split-reference/undefined-marker matches, but s. 121–127 had several duplicate subsection labels that were corrected in derived hypotheticals. The scan of s. 136–150 identified additional repeated labels in s. 139, s. 140, s. 143 and s. 144; only s. 140 was corrected in this pass. The remaining s. 139/s. 143/s. 144 hits remain outstanding for careful review; no broad automated replacement was applied to those files. All topic statuses remain `review`.

This is a narrow import-artifact audit, not word-for-word reconciliation of all 358 provisions, a current-amendment determination, case-law verification, or legal sign-off. Full-catalog validation and integration/SEO/production gates remain open.


## BNS Sections 171–232: further derived-extract corrections — 2026-10-09

Continued the recursive pattern audit and repaired derived hypothetical/essential-ingredient extracts where the imported text duplicated subsection labels or split statutory cross-references: s. 171 (undue influence at elections), s. 182, s. 191, s. 193, s. 194, s. 195, s. 197, s. 229, s. 230 and s. 232. For s. 182, the references to sub-section (1) were joined correctly. For s. 229, s. 230 and s. 232, duplicated labels and split sub-section (1) references were corrected. The official India Code text for s. 171 confirms that subsection (2) refers to subsection (1) and subsection (3) contains the separate exclusion; derived text now reflects that structure. The operative statutory-rule blocks were not intentionally changed.

Pattern scans of s. 151–180 found no split-reference markers, though s. 170's list formatting needs semantic review rather than a blind label replacement. A scan of s. 181–195 found and corrected the confirmed duplicate-label issues in s. 182, s. 191, s. 193, s. 194 and s. 195. A scan of s. 196–210 found and corrected s. 197's duplicated opening label. A scan of s. 226–240 found and corrected s. 229, s. 230 and s. 232. Other detected issues, including s. 139, s. 143 and s. 144, remain open for careful review. All affected topics remain `review`.

This is still a targeted import-artifact pass. It does not establish that every BNS section is word-for-word reconciled, that all amendments/commencement notices are current, or that case law and downstream production gates are complete. Full-catalog validation and qualified human legal sign-off remain required.


## BNS Sections 229–358: extended derived-extract audit — 2026-10-09

Additional targeted repairs were made to generated hypotheticals in s. 297 (removed imported Chapter XVI heading fragments and corrected repeated subsection labels), s. 308, s. 310, s. 324, s. 327, s. 329, s. 331, s. 334 (removed an imported Chapter XVIII heading fragment), s. 336 and s. 340. Section 197 and s. 229–232 fixes are recorded above. These edits were limited to derived hypothetical text and did not intentionally alter the operative statutory-rule blocks.

A pattern scan of s. 241–285 returned no duplicate-label or split-reference matches; s. 286–300 flagged s. 294 and s. 297; s. 301–315 flagged s. 308 and s. 310; s. 316–340 flagged s. 319, s. 330 and additional sections including s. 334, s. 336 and s. 340; s. 341–358 still contains review leads including s. 341, s. 342, s. 345, s. 347, s. 350, s. 351, s. 353, s. 356 and s. 358. Some tool writes on sensitive legal-text files were blocked, so those items remain unmodified pending careful review rather than claiming false closure.

The audit is not a full statutory reconciliation. The official India Code BNS text remains the baseline source; this pass does not establish amendment/commencement completeness, case-law accuracy, or human legal sign-off. Full-catalog validation and downstream integration/SEO/production gates remain open.


## BNS derived-extract audit continuation — sections 106–180 — 2026-10-09

Continued the targeted recursive scan across s. 106–180. The selected pattern scan found no malformed split-subsection/clause references, duplicate subsection-label pattern, or undefined-value markers in s. 106–138, s. 145–150, and s. 151–180. It found duplicate subsection labels in the generated hypothetical extracts for s. 139 (four occurrences), s. 143 (one), and s. 144 (two); those labels were corrected in derived hypothetical text only. Topic statuses remain `review`.

This is a narrow pattern-based scan, not a word-by-word statutory reconciliation and not a statement that every topic is complete. It does not resolve the known s. 106(2) commencement-status gate, the full-catalog enhancement-validation blocker, primary-case verification, current amendments, integration/SEO/production checks, or human legal sign-off. BNS remains OPEN.
