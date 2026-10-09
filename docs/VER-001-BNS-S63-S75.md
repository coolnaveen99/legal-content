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
