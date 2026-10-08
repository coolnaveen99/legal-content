# VER-001 BNS sections 14–24 body check

Date: 2026-10-08

Scope: Chapter III (General Exceptions). Files `topics/bns/s-14.json` … `s-24.json`.

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023). Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`). This is the same file as in VER-001-BNS-S4-S9 and VER-001-BNS-S10-S13.
- Gazette pages 10–12.
- India Code: retried 2026-10-08 16:25 IST: bitstream request timed out. The consolidated current text was not read. Amendments after enactment are not checked for this range.

Method: the Gazette text layer was extracted with word coordinates. Margin notes, marginal Act citations, running headers, chapter headings and italic sub-headings were removed, and the text was split at each section number. The extraction reproduces the hand transcriptions of ss.4–13 exactly. Each statutory-text block in `content.sections` ("The legal rule", "Explanations", "Statutory illustrations", "Exceptions and provisos") was then aligned word by word with the official text of its section. Case was compared, hyphen and line-break joins were normalised, and spacing artefacts of the Gazette text layer (for example `whileAcontinues`) were ignored. "Essential ingredients" was checked for text not in the statute. Where it reproduces the statute only in part, that is recorded below, but the omissions were not corrected. Punctuation was not compared character by character. Import-dropped punctuation was left as is, as for ss.1–13.

| Section | Local file | Statutory blocks compared | Official words | Result |
|---|---|---|---|---|
| 14 | topics/bns/s-14.json | The legal rule, Statutory illustrations | 104 | Matched |
| 15 | topics/bns/s-15.json | The legal rule | 36 | Matched |
| 16 | topics/bns/s-16.json | The legal rule | 63 | Matched |
| 17 | topics/bns/s-17.json | The legal rule, Statutory illustrations | 117 | Matched |
| 18 | topics/bns/s-18.json | The legal rule, Statutory illustrations | 81 | Matched |
| 19 | topics/bns/s-19.json | The legal rule, Statutory illustrations, Explanations | 336 | Matched |
| 20 | topics/bns/s-20.json | The legal rule | 16 | Matched |
| 21 | topics/bns/s-21.json | The legal rule | 43 | Matched |
| 22 | topics/bns/s-22.json | The legal rule | 46 | Matched |
| 23 | topics/bns/s-23.json | The legal rule | 62 | Matched |
| 24 | topics/bns/s-24.json | The legal rule | 72 | Matched |

## Corrections made (verbatim)

None. No words in the statutory-text blocks differ from the Gazette.

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
