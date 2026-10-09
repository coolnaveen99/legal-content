# VER-001 BNS sections 35–44 body check

Date: 2026-10-08

Scope: Chapter III (General Exceptions). Files `topics/bns/s-35.json` … `s-44.json`.

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023). Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`). This is the same file as in VER-001-BNS-S4-S9 and VER-001-BNS-S10-S13.
- Gazette pages 14–17.
- India Code: retried 2026-10-08 22:00 IST: bitstream request timed out. The consolidated current text was not read. Amendments after enactment are not checked for this range.

Method: the Gazette text layer was extracted with word coordinates. Margin notes, marginal Act citations, running headers, chapter headings and italic sub-headings were removed, and the text was split at each section number. The extraction reproduces the hand transcriptions of ss.4–13 exactly. Each statutory-text block in `content.sections` ("The legal rule", "Explanations", "Statutory illustrations", "Exceptions and provisos") was then aligned word by word with the official text of its section. Case was compared, hyphen and line-break joins were normalised, and spacing artefacts of the Gazette text layer (for example `whileAcontinues`) were ignored. "Essential ingredients" was checked for text not in the statute. Where it reproduces the statute only in part, that is recorded below, but the omissions were not corrected. Punctuation was not compared character by character. Import-dropped punctuation was left as is, as for ss.1–13.

| Section | Local file | Statutory blocks compared | Official words | Result |
|---|---|---|---|---|
| 35 | topics/bns/s-35.json | The legal rule | 79 | Matched |
| 36 | topics/bns/s-36.json | The legal rule, Statutory illustrations | 167 | Matched |
| 37 | topics/bns/s-37.json | The legal rule, Explanations | 270 | Matched |
| 38 | topics/bns/s-38.json | The legal rule | 188 | Matched |
| 39 | topics/bns/s-39.json | The legal rule | 58 | Matched |
| 40 | topics/bns/s-40.json | The legal rule | 53 | Matched |
| 41 | topics/bns/s-41.json | The legal rule | 135 | Matched |
| 42 | topics/bns/s-42.json | The legal rule | 74 | Matched |
| 43 | topics/bns/s-43.json | The legal rule | 135 | Matched |
| 44 | topics/bns/s-44.json | The legal rule, Statutory illustrations | 109 | Corrected, then matched |

## Corrections made (verbatim)

- s.44: removed the chapter heading text 'CHAPTER IV - OF ABETMENT, CRIMINAL CONSPIRACY AND ATTEMPT / CHAPTER IV / OF ABETMENT, CRIMINAL CONSPIRACY A...' that the import had appended to the end of Statutory illustrations.
  - The same text remains in commentary-derived fields (examples[].body, questionsAndAnswers[].answer, study). These were not changed and need editorial cleanup.

## Logged, not changed, not verified

None.

## Essential ingredients: partial extracts (derived, not changed)

- s.41: omits 'a robbery'

## Not checked

- Commentary, `statutoryFramework`, definitions, examples, hypotheticals, Q&A and exam material.
- Case names and citations.
- Marginal headings (the `glance`/`overview` headings were not re-compared in this pass).
- Amendments after 25 December 2023.

## Status

Each topic file records a "Body check 2026-10-08" verification note, and `updatedAt` is changed. `statutoryFramework` is left as it is. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.

## Erratum (2026-10-08)

The India Code retry time was first written as "16:30 IST". That was the box's UTC clock time, wrongly labelled IST. The correct time is 22:00 IST (16:30 UTC). Nothing else in this record has changed.
