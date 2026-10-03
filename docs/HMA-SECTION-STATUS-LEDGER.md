# HMA Section-Level Status Ledger

**Date:** 2026-10-03  
**Status:** LIVE — FIVE-FILE WORKING SET ONLY / NOT LOCKED  
**Scope:** `topics/hma/s-9.json`, `s-13.json`, `s-13b.json`, `s-24.json`, `s-25.json` only. No other subject was started.

## Status legend

- `DONE` = gate completed with evidence
- `PENDING` = gate still required
- `REVIEW` = existing content requires inspection before the gate can be closed
- `LOCKED` = all applicable gates complete; do not repeat without a reopening trigger

No row is LOCKED. Nothing in this working set is COMPLETE_LOCKED.

## Ledger

| # | Topic / coverage | Repo file | Statute/current law | Case law | Content validation | Integration | Production | Final |
|---|---|---|---|---|---|---|---|---|
| 1 | Section 9, restitution of conjugal rights | s-9.json | REVIEW — India Code PDF not opened (HTTP 504/timeout on https://www.indiacode.nic.in/bitstream/123456789/1560/1/A1955-25Eng.pdf). Existing statutory wording left in place. | DONE — JUDIS 9506 opened: Smt. Saroj Rani v. Sudarshan Kumar Chadha, 08/08/1984. The old URL 35071_2012 (24 Aug 2017) was Puttaswamy and was removed. | PENDING | PENDING | PENDING | OPEN |
| 2 | Section 13, divorce | s-13.json | REVIEW — same India Code PDF not opened. | DONE — opened PDF matched Amutha v. A.R. Subramanian, Civil Appeal No. 2643 of 2023, 2024 INSC 1033, judgment 19 December 2024. | PENDING | PENDING | PENDING | OPEN |
| 3 | Section 13B, mutual-consent divorce | s-13b.json | REVIEW — same India Code PDF not opened. | DONE — Hitesh Bhatnagar v. Deepa Bhatnagar, JUDIS 37890, 18 April 2011, matched. Amardeep Singh v. Harveen Kaur matched at the 12 September 2017 PDF (Civil Appeal No. 11158 of 2017). The old 1 May 2023 URL was Shilpa Sailesh and was removed. | PENDING | PENDING | PENDING | OPEN |
| 4 | Section 24, maintenance pendente lite | s-24.json | REVIEW — same India Code PDF not opened. | DONE — Sukhdev Singh v. Sukhbir Kaur order dated 4 June 2026 opened and addresses Section 24. The separate 12 February 2025 larger-bench judgment was not opened. | PENDING | PENDING | PENDING | OPEN |
| 5 | Section 25, permanent alimony | s-25.json | REVIEW — same India Code PDF not opened. | DONE — Sukhdev order of 4 June 2026 opened and addresses Section 25. Amutha judgment of 19 December 2024 opened and awards permanent alimony, so it is kept on this file. | PENDING | PENDING | PENDING | OPEN |

## Gate notes

- Enhancement status on all five files remains `in-progress`. Entity status was left `published` where it already was. Not verified. Not COMPLETE_LOCKED.
- Statute gate is not DONE because the India Code PDF was not opened.
- Case-law gate is DONE only for the official PDFs whose cause titles matched. Integration, production, and final stay PENDING/OPEN.
