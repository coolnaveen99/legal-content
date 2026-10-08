# VER-001 BNS sections 76–87 body check

Date: 2026-10-08

Scope: Chapter V (Of Offences against Woman and Child). Files `topics/bns/s-76.json` … `s-87.json`.

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023). Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`). This is the same file as in VER-001-BNS-S4-S9 and VER-001-BNS-S10-S13.
- Gazette pages 27–29.
- India Code: retried 2026-10-08 22:11 IST: bitstream request timed out. The consolidated current text was not read. Amendments after enactment are not checked for this range.

Method: the Gazette text layer was extracted with word coordinates. Margin notes, marginal Act citations, running headers, chapter headings and italic sub-headings were removed, and the text was split at each section number. The extraction reproduces the hand transcriptions of ss.4–13 exactly. Each statutory-text block in `content.sections` ("The legal rule", "Explanations", "Statutory illustrations", "Exceptions and provisos") was then aligned word by word with the official text of its section. Case was compared, hyphen and line-break joins were normalised, and spacing artefacts of the Gazette text layer (for example `whileAcontinues`) were ignored. "Essential ingredients" was checked for text not in the statute. Where it reproduces the statute only in part, that is recorded below, but the omissions were not corrected. Punctuation was not compared character by character. Import-dropped punctuation was left as is, as for ss.1–13.

| Section | Local file | Statutory blocks compared | Official words | Result |
|---|---|---|---|---|
| 76 | topics/bns/s-76.json | The legal rule | 58 | Matched |
| 77 | topics/bns/s-77.json | The legal rule, Explanations | 234 | Matched |
| 78 | topics/bns/s-78.json | The legal rule, Exceptions and provisos | 204 | Matched |
| 79 | topics/bns/s-79.json | The legal rule | 73 | Corrected, then matched |
| 80 | topics/bns/s-80.json | The legal rule, Explanations | 135 | Matched |
| 81 | topics/bns/s-81.json | The legal rule | 61 | Matched |
| 82 | topics/bns/s-82.json | The legal rule, Exceptions and provisos | 231 | Matched |
| 83 | topics/bns/s-83.json | The legal rule | 47 | Matched |
| 84 | topics/bns/s-84.json | The legal rule | 71 | Matched |
| 85 | topics/bns/s-85.json | The legal rule | 40 | Matched |
| 86 | topics/bns/s-86.json | The legal rule | 99 | Matched |
| 87 | topics/bns/s-87.json | The legal rule | 147 | Corrected, then matched |

## Corrections made (verbatim)

- s.79: removed the sub-heading 'Of offences relating to marriage' that the import had appended to the end of The legal rule and Essential ingredients.
  - The same text remains in commentary-derived fields (hypotheticals[].analysis, questionsAndAnswers[].answer, study). These were not changed and need editorial cleanup.
- s.87: removed the sub-heading 'Of causing miscarriage, etc' that the import had appended to the end of The legal rule and Essential ingredients.
  - The same text remains in commentary-derived fields (hypotheticals[].analysis, questionsAndAnswers[].answer, study). These were not changed and need editorial cleanup.

## Logged, not changed, not verified

None.

## Essential ingredients: partial extracts (derived, not changed)

- s.78: omits 'Provided that such conduct shall not amount to stalking if the man who pursued i'

## Not checked

- Commentary, `statutoryFramework`, definitions, examples, hypotheticals, Q&A and exam material.
- Case names and citations.
- Marginal headings (the `glance`/`overview` headings were not re-compared in this pass).
- Amendments after 25 December 2023.

## Status

Each topic file records a "Body check 2026-10-08" verification note, and `updatedAt` is changed. `statutoryFramework` is left as it is. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.
