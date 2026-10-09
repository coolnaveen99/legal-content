# Negotiable Instruments — Enhancement Completion Audit — 2026-10-08

## Decision

**NI is COMPLETE_LOCKED for QUAL scaffold/enhancement remediation.**

- Subject path: `topics/ni/`
- Topics: **4 / 4**
- Coverage: `substantive-topic-specific-v1`
- Topic entity status left as published where already published
- Enhancement status: `verification_in_progress` (case-law/current-law verification **not** closed)
- Merge model: direct commit to `main` (no open PR for this range)

**Do not reopen NI for scaffold replacement or parallel enhancement work without a documented trigger** (same rule as Family and Torts COMPLETE_LOCKED).

## Inventory

| File | Provision |
|------|-----------|
| `topics/ni/s-138.json` | NI Act s. 138 — dishonour of cheque |
| `topics/ni/s-139.json` | NI Act s. 139 — presumption in favour of holder |
| `topics/ni/s-141.json` | NI Act s. 141 — offences by companies |
| `topics/ni/s-142.json` | NI Act s. 142 — cognizance |

## Quality boundary

- Published statutory notes were preserved and expanded. No baseline explanation was deleted in favour of a shorter scaffold.
- No new case citation or ratio was added. Cheque-validity circular number, s. 139 rebuttal authority, s. 141 arraignment authority, and s. 142A transfer mechanics remain `SOURCE_CHECK_REQUIRED`.
- This lock closes **scaffold → substantive** QUAL work for the NI subject only. It does **not** close QUAL-001–QUAL-011 corpus-wide or mark enhancements verified.

## Coordination

- Family and Torts were not reopened.
- Company, Contract, TPA and Arbitration ranges already moving on `main` were not touched.
- NI had no open PR and no subject-specific commit after the migrated scaffold.

## Pointer updates

- `docs/ENH-009-SUBJECT-PROGRESS.md`
- `docs/TEAM-WORK-COORDINATION-GATE.md`
- `docs/FINAL-CONTENT-QUALITY-PASS-STATUS-2026-10-08.md`
