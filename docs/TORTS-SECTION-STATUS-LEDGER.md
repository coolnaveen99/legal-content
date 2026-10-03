# Torts Section-Level Status Ledger

**Date:** 2026-10-03  
**Status:** LIVE — SCOPE FROZEN / GAP TOPICS CREATED / VERIFICATION PENDING  
**Standard:** `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md`  
**Subject inventory:** `docs/TORTS-FULL-SUBJECT-INVENTORY.md`

## Status legend

- `DONE` = gate completed with evidence
- `PENDING` = gate still required
- `N/A` = gate genuinely not applicable
- `MISSING` = required topic/content is not yet mapped
- `REVIEW` = existing content requires inspection before the gate can be closed
- `LOCKED` = all applicable gates complete; do not repeat without reopening trigger

## Ledger

| # | Topic / coverage | Repo file | Inventory | Enhancement | Statute/current law | Case law | Content validation | Integration | Production | Final |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Nature and definition | nature-definition.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 2 | Essential elements / constituents | nature-definition.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 3 | Distinction from crime/contract | nature-definition.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 4 | Damnum sine injuria / injuria sine damnum | injuria-damnum.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 5 | Ubi jus ibi remedium / core maxims | general-defences.json / nature-definition.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 6 | General defences | general-defences.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 7 | Parties / who may sue or be sued | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 8 | Capacity in tort | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 9 | Vicarious liability | vicarious-liability.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 10 | Joint tortfeasors | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 11 | State / government liability | state-liability.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 12 | Negligence | negligence.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 13 | Res ipsa loquitur | negligence.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 14 | Contributory negligence | negligence.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 15 | Nervous shock | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 16 | Remoteness of damage | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 17 | Nuisance | nuisance.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 18 | Trespass to person | trespass-person.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 19 | Trespass to land/property | trespass-property.json / trespass.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 20 | Trespass to goods | trespass-property.json / trespass.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 21 | Trespass ab initio | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 22 | Defamation — libel/slander | defamation.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 23 | Defamation defences/privilege | defamation.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 24 | Strict liability | strict-liability.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 25 | Absolute liability | absolute-liability.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 26 | Remedies | remedies.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 27 | Damages and assessment | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 28 | Injunction / restitution / judicial remedies | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 29 | Extra-judicial remedies | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 30 | Malicious prosecution | malicious-prosecution.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 31 | Abuse of legal procedure/process | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 32 | Deceit / fraud | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 33 | Occupier / dangerous premises | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 34 | Dangerous chattels / product liability interface | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 35 | Liability for animals | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 36 | Statutory liability | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 37 | Motor Vehicles Act interface | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 38 | Consumer Protection Act interface | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 39 | Constitutional/public-law tort | state-liability.json + Constitution | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 40 | Environmental/public liability applications | absolute-liability.json + Environmental Law | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 41 | Extinguishment/discharge of tortious liability | — | PENDING | MISSING | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |

## Immediate execution queue

1. [x] Confirm the canonical Torts curriculum scope for CodePackr Law.
2. [x] Reconcile all repository files under `topics/torts/` — 38 JSON files.
3. [x] Reconcile renamed/duplicate topics — 8 overlap groups.
4. [x] Decide which rows are Torts-core versus linked statutory subjects.
5. [x] Complete row-level mapping and create the four genuine first-order gap topic files.
6. [ ] Run schema/content validation on all 42 files before legal verification.
6. [ ] Inspect existing enhancement fields before changing any existing topic.
7. [ ] Complete only missing enhancement gates.
8. [ ] Complete statutory/current-law verification where applicable.
9. [ ] Complete case-law verification.
10. [ ] Run legal/content validation.
11. [ ] Run product integration validation.
12. [ ] Run production validation.
13. [ ] Lock only after all applicable rows are complete.

## Current measured position

- Confirmed repository topic files checked: **42**
- Historical README canonical entry topics: **12**
- Supplemental/migrated topic files: **26**
- New canonical gap topics: **4**
- Ledger coverage rows created for current/research-derived scope: **41**
- Additional curriculum-control rows identified: **32**
- Topics currently safe to call fully complete: **0**
- Reason: subject-wide inventory and all completion gates have not yet been closed.

## Reopening rule

No row may be reworked merely because a later batch is running. Reopen only for:

- amendment/current-law change;
- legal/source defect;
- case-law correction;
- schema migration;
- product regression;
- explicit correction request.

