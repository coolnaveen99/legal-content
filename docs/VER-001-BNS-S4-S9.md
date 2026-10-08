# VER-001 BNS sections 4–9 body check

Date: 2026-10-08

Source: Gazette of India Extraordinary, Part II, Section 1, No. 53, New Delhi, 25 December 2023 (Gazette ID CG-DL-E-25122023-250883), Ministry of Law and Justice (Legislative Department). The Bharatiya Nyaya Sanhita, 2023 (No. 45 of 2023), Chapter II "Of Punishments". Text as enacted.

- Copy used: https://www.mha.gov.in/sites/default/files/250883_english_01042024.pdf (102 pages, SHA-256 `c9da896e7a16c481a46235789f74f545b7a9ed7f3a5c8049d0b1b9252c6731f4`).
- Pages: Gazette pages 8–10. Sections 4–7 and 8(1)–(2) are on page 8. Section 8(3)–(7), the Illustration and 9(1)–(2)(a) are on page 9. Section 9(2)(b) and the Illustrations are on page 10.
- India Code (`https://www.indiacode.nic.in/bitstream/123456789/20062/1/a2023-45.pdf`, handle `123456789/20062`) returned HTTP 504 on every attempt on 2026-10-08. The consolidated current text was not read. Later amendments were not checked in this pass.

Method: the official text was transcribed from the Gazette and checked word for word against the Gazette text layer (margin notes and page headers removed). The transcription was then compared word for word, and then for punctuation, with the statutory blocks in `content.sections` of each topic file: "The legal rule", "Explanations" and "Statutory illustrations".

| Section | Official heading (margin note) | Local file | Blocks compared | Words | Result |
|---|---|---|---|---|---|
| 4 | Punishments. | topics/bns/s-4.json | Legal rule (a)–(f), (c)(1)–(2) | 47/47 identical | Matched. Punctuation only |
| 5 | Commutation of sentence. | topics/bns/s-5.json | Legal rule; Explanation (a)–(b) | 33/33; 90/90 identical | Matched. Punctuation only. Key-terms entry flagged |
| 6 | Fractions of terms of punishment. | topics/bns/s-6.json | Legal rule | 24/24 identical | Matched. Punctuation only |
| 7 | Sentence may be (in certain cases of imprisonment) wholly or partly rigorous or simple. | topics/bns/s-7.json | Legal rule | 63/63 identical | Matched. Punctuation only |
| 8 | Amount of fine, liability in default of payment of fine, etc. | topics/bns/s-8.json | Legal rule (1)–(7); Illustration | 485/485; 154/154 identical | Matched. Punctuation only |
| 9 | Limit of punishment of offence made up of several offences. | topics/bns/s-9.json | Legal rule (1)–(2); Illustrations (a)–(b) | 124/124; 127/127 identical | Matched. Punctuation only |

The headings recorded in VER-001-BNS-HEADINGS-1-9 also match the Gazette margin notes.

## Differences found

None of the differences is in wording. None was corrected.

1. Punctuation in all six files: full stops at the end of sections and sub-sections are omitted. The same import pattern appears in the s.1–s.3 files, and the s.1–s.3 checks left it unchanged. Other punctuation differences:
   - s.4: the dash after "are" is omitted ("are—" in the Gazette).
   - s.5 Explanation: "Explanation.–For" uses a single en dash. The Gazette has "Explanation.––For".
   - s.8(2): "offence–" uses a single en dash. The Gazette has "offence––".
2. Layout: in the Gazette, the s.8 Illustration sits between (6)(b) and (7). Locally it is a separate "Statutory illustrations" block.

## Derived blocks flagged, not changed, not verified

These blocks are derived from the statute and do not reproduce it in full. They were left unchanged because fixing them would require editorial rewriting, not a quote-level correction:

- s.4 "Essential ingredients" quotes only (b), (c), (c)(1) and (d).
- s.4 `enhancement.definition` says imprisonment for life "means imprisonment for the remainder of that person's natural life". That wording is not in s.4. Clause (b) reads only "Imprisonment for life;". This statement was not verified.
- s.5 "Definitions and key terms" reads "“appropriate Government” — ,–– (a) … the Central Government." It has a stray ",––" and gives only limb (a) of the Explanation, leaving out limb (b) (State Government).
- s.8 "Essential ingredients" drops the "(6)" label before "(a) The imprisonment which is imposed in default…".
- s.8 `study` text labels the single Illustration as "Illustration (a)". The Gazette heading is "Illustration." with no lettering.
- s.9 "Essential ingredients" omits the "(2) Where—" lead-in, so clauses (a) and (b) read as if they continue sub-section (1).

## Not checked

- Commentary, examples, hypotheticals, Q&A and exam material, except a spot check of the figures they repeat (twenty years; one-fourth; two months / five thousand rupees; four months / ten thousand rupees; one year; six years). Those figures match the Gazette.
- Case names and citations in the topics.
- BNSS s.474, which s.5 refers to.
- Amendments after 25 December 2023, because the India Code consolidated text was unavailable.

## Status

The topic files record a "Body check 2026-10-08" verification note. `statutoryFramework` is updated to the same pattern as VER-001-BNS-S2/S3. `updatedAt` is changed. Top-level `status` stays `review`. `enhancement.status` stays `in-progress`. `lastVerifiedAt` and `verifiedBy` are unchanged. This comparison was made by an AI execution agent. Under `.github/copilot-instructions.md`, it is evidence, not authoritative legal verification. Human review is needed before any `VERIFIED` status.
