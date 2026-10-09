# VER-001 BNS sections 10–13 body check

Date: 2026-10-08

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023), Chapter II "Of Punishments". Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf. This is the same file as in VER-001-BNS-S4-S9 (SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`).
- Pages: all four sections are on Gazette page 10. Chapter III "General Exceptions" begins on the same page at s.14, so this range ends at the chapter boundary.
- India Code was retried on 2026-10-08 and was still unavailable. The bitstream `123456789/20062/1/a2023-45.pdf` returned HTTP 504, and the section view timed out. The consolidated current text was not read. Later amendments are not checked for ss.10–13. The pending amendment cross-check for ss.4–9 also remains open.

Method: the same as VER-001-BNS-S4-S9. The official text was transcribed and checked word for word against the Gazette text layer (only margin notes differ). It was then compared word for word, and then for punctuation, with the "The legal rule" and "Essential ingredients" blocks in `content.sections`. In these four files both blocks reproduce the statute; Essential ingredients only leaves out the section number.

| Section | Official heading (margin note) | Local file | Words (rule / ingredients) | Result |
|---|---|---|---|---|
| 10 | Punishment of person guilty of one of several offences, judgment stating that it is doubtful of which. | topics/bns/s-10.json | 60/60; 59/59 identical | Matched. Punctuation only |
| 11 | Solitary confinement. | topics/bns/s-11.json | 121/121; 120/120 identical | Matched. Punctuation only |
| 12 | Limit of solitary confinement. | topics/bns/s-12.json | 76/76; 75/75 identical | Matched. Punctuation only |
| 13 | Enhanced punishment for certain offences after previous conviction. | topics/bns/s-13.json | 82/82; 81/81 identical after correction | Corrected, then matched |

The headings in each file's `glance`/`overview` match the Gazette margin notes.

## Correction made (verbatim)

s.13: the import had appended the following Chapter III heading text to the end of the s.13 statutory blocks. It is not part of s.13 in the Gazette:

- "The legal rule": removed "`\nCHAPTER III - GENERAL EXCEPTIONS\nGENERAL EXCEPTIONS`".
- "Essential ingredients": removed "`\nCHAPTER III - GENERAL EXCEPTIONS`".

No words of s.13 were changed.

## Differences recorded, not corrected

- In all four files the final full stop is omitted. This is the import punctuation pattern that was left unchanged for ss.1–9.

## Flagged, not changed, not verified

- s.13: the same Chapter III heading text also appears in commentary-derived fields: `study`, `hypotheticals[0].analysis` (as "(2) CHAPTER III - GENERAL EXCEPTIONS") and `questionsAndAnswers[0..1].answer` (as "2. CHAPTER III - GENERAL EXCEPTIONS"). These are restatements, not statutory blocks. Removing the text there needs editorial cleanup.
- s.10: `enhancement.verification.notes` was a plain string, but `schemas/topic.schema.json` requires an array of strings. It was changed to a one-item array holding the original string unchanged, so that the body-check note could be appended. `lastVerifiedAt` is `""` rather than `null`. It was left unchanged.

## Not checked

- `statutoryFramework`, definitions, commentary, examples, hypotheticals and Q&A. The exception is a spot check of the figures they repeat: three months overall; one, two or three months on the six-month and one-year scale; fourteen days at a time; seven days in any one month; three years or upwards; Chapters X and XVII; ten years. These match the Gazette.
- Case names and citations.
- Amendments after 25 December 2023.

## Status

The topic files record a "Body check 2026-10-08" verification note. `updatedAt` is changed. `statutoryFramework` was left as it is, because in these files it is substantive enhancement content, not a "Body not verified" placeholder. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.
