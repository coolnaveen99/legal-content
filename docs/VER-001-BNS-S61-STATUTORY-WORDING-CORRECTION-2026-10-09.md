# BNS Section 61 Statutory Wording Correction — 2026-10-09

**Repository:** `coolnaveen99/legal-content`  
**Branch:** `main`  
**Topic:** `topics/bns/s-61.json` — Criminal conspiracy  
**Scope:** One exact mismatch in the statutory `The legal rule` block. No commentary, case-law, status, or enhancement fields changed.

## Finding

The stored rule began:

> “When two or more persons agree with the common object to do, or cause to be done—”

The enacted BNS section 61 wording is:

> “When two or more persons agree to do, or cause to be done—”

The phrase **“with the common object”** was not part of the quoted statutory text and has been removed. This is a transcription correction only; it does not change the topic's legal analysis or review status.

## Source

- Gazette of India, Extraordinary, BNS Act 45 of 2023, 25 December 2023: https://egazette.gov.in/WriteReadData/2024/253386.pdf
- Ministry of Home Affairs, New Criminal Laws source page linking the BNS text: https://www.mha.gov.in/en/commoncontent/new-criminal-laws

The Gazette PDF endpoint returned a fetch error during this pass, so the text was checked against the enacted BNS wording available in the official government BNS text. Re-open and line-by-line compare the complete provision against a directly readable Gazette/official Act copy during the full statutory reconciliation.

## Validation limits

- The exact targeted phrase is corrected and must be re-fetched to confirm the committed bytes.
- This is **not** a full word-by-word statutory verification of section 61.
- Topic status remains `review`; legal-source provenance, commentary, case-law, current-law checks and human legal sign-off remain open.
- Latest full CI runs failed at `validate:enhancements` because of a wider catalogue backlog (hundreds of missing enhancement fields, concentrated in Constitution topics). Do not treat that unrelated backlog as passed or as evidence that this BNS correction failed.

## Commit

- Topic correction: `7696ed615f0f549d23995d83df766baae84e95f6`
