# VER-001 BNS sections 88–99 body check

Date: 2026-10-08

Scope: Chapter V (Of Offences against Woman and Child). Files `topics/bns/s-88.json` … `s-99.json`.

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023). Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`). This is the same file as in VER-001-BNS-S4-S9 and VER-001-BNS-S10-S13.
- Gazette pages 29–31.
- India Code: retried 2026-10-08 22:13 IST: bitstream request timed out. The consolidated current text was not read. Amendments after enactment are not checked for this range.

Method: the Gazette text layer was extracted with word coordinates. Margin notes, marginal Act citations, running headers, chapter headings and italic sub-headings were removed, and the text was split at each section number. The extraction reproduces the hand transcriptions of ss.4–13 exactly. Each statutory-text block in `content.sections` ("The legal rule", "Explanations", "Statutory illustrations", "Exceptions and provisos") was then aligned word by word with the official text of its section. Case was compared, hyphen and line-break joins were normalised, and spacing artefacts of the Gazette text layer (for example `whileAcontinues`) were ignored. "Essential ingredients" was checked for text not in the statute. Where it reproduces the statute only in part, that is recorded below, but the omissions were not corrected. Punctuation was not compared character by character. Import-dropped punctuation was left as is, as for ss.1–13.

| Section | Local file | Statutory blocks compared | Official words | Result |
|---|---|---|---|---|
| 88 | topics/bns/s-88.json | The legal rule, Explanations | 99 | Matched |
| 89 | topics/bns/s-89.json | The legal rule | 52 | Matched |
| 90 | topics/bns/s-90.json | The legal rule, Explanations | 102 | Matched |
| 91 | topics/bns/s-91.json | The legal rule | 93 | Matched |
| 92 | topics/bns/s-92.json | The legal rule, Statutory illustrations | 124 | Corrected, then matched |
| 93 | topics/bns/s-93.json | The legal rule, Explanations | 95 | Matched |
| 94 | topics/bns/s-94.json | The legal rule | 60 | Matched |
| 95 | topics/bns/s-95.json | The legal rule, Explanations | 87 | Matched |
| 96 | topics/bns/s-96.json | The legal rule | 64 | Matched |
| 97 | topics/bns/s-97.json | The legal rule | 52 | Matched |
| 98 | topics/bns/s-98.json | The legal rule, Explanations | 219 | Matched |
| 99 | topics/bns/s-99.json | The legal rule, Explanations | 164 | Corrected, then matched |

## Corrections made (verbatim)

- s.92: removed the sub-heading 'Of offences against child' that the import had appended to the end of Statutory illustrations.
  - The same text remains in commentary-derived fields (examples[].body, questionsAndAnswers[].answer, study). These were not changed and need editorial cleanup.
- s.99: removed the chapter heading text 'CHAPTER VI - OF OFFENCES AFFECTING THE HUMAN BODY / CHAPTER VI / OF OFFENCES AFFECTING THE HUMAN BODY / Of ...' that the import had appended to the end of Explanations.
  - The same text remains in commentary-derived fields (study). These were not changed and need editorial cleanup.

## Logged, not changed, not verified

None.

## Essential ingredients: partial extracts (derived, not changed)

None. Where present, Essential ingredients reproduces the statute without extra words.

## Not checked

- Commentary, `statutoryFramework`, definitions, examples, hypotheticals, Q&A and exam material.
- Case names and citations.
- Marginal headings (the `glance`/`overview` headings were not re-compared in this pass).
- Amendments after 25 December 2023.

## Status

Each topic file records a "Body check 2026-10-08" verification note, and `updatedAt` is changed. `statutoryFramework` is left as it is. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.
