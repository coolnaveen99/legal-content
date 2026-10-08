# Company E-04J Enhancement Completion Audit — 2026-10-08

## Scope
Company subject — Sections 39–41 of the Companies Act, 2013.

## Coordination gate
- Checked current `main` immediately before implementation.
- Open pull requests: none.
- Existing E-04I work for Sections 36–38 was preserved.
- Sections 39–41 were still scaffolded/in-progress and were not owned by another open PR.
- Arbitration and locked subjects were not reopened.

## Implemented
| Section | Subject | Commit |
|---|---|---|
| 39 | Allotment of securities by company | `858e040427c684ef0692552372bf1cd5c6b7d429` |
| 40 | Securities to be dealt with in stock exchanges | `2d0d258375b9c61c9b341d1ca2ee3b2d3c015d33` |
| 41 | Global depository receipt | `7b3cbc24180e62137fbddf892e1ab45e90b233da` |

## Quality work
Each section now has:
- section-specific definition and legal principle;
- operative ingredients;
- detailed explanation;
- practical illustrations;
- problem/application analysis;
- distinctions from connected provisions;
- misconception controls;
- exam-answer structure;
- authoritative statutory-source metadata;
- statutory verification metadata;
- `caseLaw: []` with the case-law gate left open.

Existing migrated baseline fields, legacy identifiers, and existing case records were preserved; unverified migrated cases were not promoted as verified authority.

## Statutory verification
The current Companies Act text was checked against the Ministry of Corporate Affairs official Act text for Sections 39–41. Section 39 covers public-allotment conditions, minimum subscription/application money, refund and return of allotment; Section 40 covers recognised-stock-exchange permission and segregation/use of public application monies; Section 41 covers foreign depository receipts after a special resolution and subject to prescribed conditions.

Official source: https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf

The MCA source was added to `docs/SOURCE-SITE-LOG.md` before being used for the enhancement.

## Status
- Substantive enhancement: completed for §§39–41.
- Statutory verification: completed for §§39–41.
- Case-law verification: open; no new cases promoted.
- Legal/content validation: not claimed from this audit alone.
- Product/production gates: not claimed.
- Company subject: **not complete**. The subject inventory is 561 topics, so this batch advances the subject but does not permit a 100% completion claim.

## Progress snapshot
Company inventory: 561
- Substantively enhanced in current ledger after this batch: 3
- Statutorily verified in this batch: 3
- Fully COMPLETE_LOCKED: 0

Next unowned Company range must be selected only after another live coordination gate.
