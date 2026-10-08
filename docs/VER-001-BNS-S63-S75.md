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
| 63 | topics/bns/s-63.json | — | 417 | Not compared: no statutory-text block |
| 64 | topics/bns/s-64.json | — | 549 | Not compared: no statutory-text block |
| 65 | topics/bns/s-65.json | The legal rule, Exceptions and provisos | 180 | Matched |
| 66 | topics/bns/s-66.json | The legal rule | 83 | Matched |
| 67 | topics/bns/s-67.json | The legal rule, Explanations | 78 | Matched |
| 68 | topics/bns/s-68.json | The legal rule, Explanations | 264 | Matched |
| 69 | topics/bns/s-69.json | — | 79 | Not compared: no statutory-text block |
| 70 | topics/bns/s-70.json | — | 213 | Not compared: no statutory-text block |
| 71 | topics/bns/s-71.json | The legal rule | 58 | Matched |
| 72 | topics/bns/s-72.json | The legal rule, Explanations, Exceptions and provisos | 261 | Matched |
| 73 | topics/bns/s-73.json | The legal rule, Explanations | 84 | Corrected, then matched |
| 74 | topics/bns/s-74.json | The legal rule | 59 | Matched |
| 75 | topics/bns/s-75.json | The legal rule | 133 | Matched |

## Corrections made (verbatim)

- s.73: removed the sub-heading 'Of criminal force and assault against woman' that the import had appended to the end of Explanations.
  - The same text remains in commentary-derived fields (study). These were not changed and need editorial cleanup.

## Logged, not changed, not verified

- No statutory-text block: s.63, s.64, s.69, s.70. In these files `content.sections` holds only commentary-style headings, with no "The legal rule" block. Their statutory body could not be compared and is not verified. Adding the statute text would be an editorial content change.

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
