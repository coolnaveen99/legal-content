# VER-007 Verification Date and Verifier Ledger — 2026-10-06

## Purpose
Establish a durable, evidence-backed control for recording when a legal record was verified and who/what verification workstream performed the verification.

## Required fields
A record may be treated as verification-complete only when the applicable evidence record contains:
- verificationDate / lastVerifiedAt — ISO-8601 timestamp or date;
- verifier — named verification actor or controlled workstream;
- verificationStatus — explicit disposition;
- authoritative source/evidence reference;
- scope of what was actually checked.

A timestamp alone is not substantive verification.

## Controlled verifier value
For repository verification performed by this workstream, use:
**CodePackr legal-verification workstream**

This identifies the controlled verification process; it does not imply that an individual lawyer has personally certified the material.

## Evidence recorded in this pass
| Record | Verification date | Verifier | Scope | Status |
|---|---|---|---|---|
| judgments/sc/abhilasha-v-parkash-2020.json in codepackr-law | 2026-10-06 | CodePackr legal-verification workstream | Case identity, court, citations, material facts, issues, ratio and holding against the cited Supreme Court judgment source | VERIFIED |
| Torts subject ledger | 2026-10-06 | CodePackr legal-verification workstream | Subject-level verification evidence already recorded in the locked Torts ledger | COMPLETE_LOCKED |

## Control rule
Do not backfill a verification date or verifier merely because content appears old or previously marked verified.

Where substantive evidence has not been inspected, keep the record in review / in-progress and leave the verification fields absent or explicitly incomplete.

## Relationship to publication
VER-007 is metadata/control evidence only. It does not close VER-001 through VER-006, and it does not by itself authorize promotion to verified or published.

## Verification date
2026-10-06

## Verifier
CodePackr legal-verification workstream

## Authoritative source standard
For Supreme Court judgments, the preferred evidence path is the Supreme Court of India's own judgment/search infrastructure. The Supreme Court Judges Library documents citation-wise, case-name and case-number retrieval and an equivalent-citation table; the SCR search also supports neutral-citation retrieval.

- https://scr.sci.gov.in/scrsearch/
- https://www.sci.gov.in/judges-library/
