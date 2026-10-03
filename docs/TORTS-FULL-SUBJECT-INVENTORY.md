# Torts — Full Subject Inventory & Section-Level Control

**Date:** 2026-10-03  
**Repository:** `coolnaveen99/legal-content`  
**Status:** SCOPE FROZEN — REPOSITORY INVENTORY RECONCILED / GAP TOPICS ADDED  
**Control standard:** `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md`

## Purpose

This is the first subject-level inventory produced under the new section-control system. It deliberately separates:

1. topics already present in the repository;
2. topics already enhanced;
3. topics with some case/source verification work;
4. curriculum areas identified by current law-school syllabi that still require repository mapping;
5. final completion, which is **not** declared until the full inventory is reconciled.

Law of Torts is largely uncodified in India and relies heavily on judicial principles. Current law-school curricula also commonly connect tort principles with the Motor Vehicles Act, 1988 and Consumer Protection Act, 2019. NLSIU's 2026-27 course description expressly identifies negligence, nuisance, trespass, defamation, vicarious liability, strict/absolute liability, and those statutory applications as core areas.

## A. Confirmed repository topics

| # | Topic | Repository file | Current file status | Enhancement object | Current control state |
|---|---|---|---|---|---|
| 1 | Nature and definition | `topics/torts/nature-definition.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 2 | Injuria / damnum | `topics/torts/injuria-damnum.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 3 | General defences | `topics/torts/general-defences.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 4 | Negligence | `topics/torts/negligence.json` | review | Yes | ENHANCED; verification gate incomplete |
| 5 | Strict liability | `topics/torts/strict-liability.json` | review | Yes | ENHANCED; verification gate incomplete |
| 6 | Absolute liability | `topics/torts/absolute-liability.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 7 | Vicarious liability | `topics/torts/vicarious-liability.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 8 | State liability | `topics/torts/state-liability.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 9 | Defamation | `topics/torts/defamation.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 10 | Nuisance | `topics/torts/nuisance.json` | review | Yes | ENHANCED; verification gate incomplete |
| 11 | Trespass | `topics/torts/trespass.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 12 | Remedies | `topics/torts/remedies.json` | published | Yes | ENHANCED; verification metadata needs reconciliation |
| 13 | Trespass to person | `topics/torts/trespass-person.json` | review | Existing | NEEDS FULL GATE CHECK |
| 14 | Trespass to property | `topics/torts/trespass-property.json` | review | Existing | NEEDS FULL GATE CHECK |
| 15 | Malicious prosecution | `topics/torts/malicious-prosecution.json` | review | Existing | NEEDS FULL GATE CHECK |

## B. Research-derived subject coverage that must be mapped

These areas appear in current or recent Indian law-school curricula and must be checked against the repository before Torts can be called complete.

| # | Coverage area | Required control action |
|---|---|---|
| 16 | Essential elements / constituents of tort | Map to existing nature topic or create dedicated topic if coverage is insufficient |
| 17 | Distinction from crime and contract | Map and validate |
| 18 | Parties: who may sue / who may be sued | Repository mapping required |
| 19 | Capacity in tort | Repository mapping required |
| 20 | Extinguishment/discharge of tortious liability | Repository mapping required |
| 21 | Joint tortfeasors | Repository mapping required |
| 22 | Remoteness of damage | Repository mapping required |
| 23 | Nervous shock | Repository mapping required |
| 24 | Deceit / fraud | Repository mapping required |
| 25 | Occupier / dangerous premises liability | Repository mapping required |
| 26 | Dangerous chattels / products | Repository mapping required |
| 27 | Liability for animals | Repository mapping required |
| 28 | Abuse of legal procedure / abuse of process | Repository mapping required |
| 29 | Statutory liability | Repository mapping required |
| 30 | Motor Vehicles Act tort/compensation interface | Repository mapping required |
| 31 | Consumer Protection Act tort/consumer interface | Repository mapping required |
| 32 | Constitutional/public-law tort | Map to state-liability and constitutional content; avoid duplication |
| 33 | Environmental/public liability applications | Map to absolute liability, statutory liability and environmental-law content |
| 34 | Extra-judicial remedies | Map to remedies or create dedicated coverage |
| 35 | Damages: kinds, assessment and remoteness | Map to remedies/remoteness and validate depth |

## C. Research basis

Current law-school curricula show that the subject is broader than the original 12-topic working set.

- NLSIU's 2026-27 Law of Torts course describes negligence, nuisance, trespass, defamation, vicarious liability, strict and absolute liability as core areas and includes Motor Vehicles Act and Consumer Protection Act applications. 
- Dr. M.G.R. Educational and Research Institute's course outline includes foundations, general defences, vicarious/strict/absolute liability, joint tortfeasors, nuisance, negligence, trespass to person/property, defamation and remedies.
- Current/recent university syllabi also identify capacity/parties, extinguishment, remoteness/nervous shock, occupier/dangerous premises, dangerous chattels, animals, malicious prosecution, statutory liability, Motor Vehicle compensation and Consumer Protection.

## D. Immediate Torts work — in this order

### TORT-INV-001 — Freeze inventory
- [x] Establish the authoritative/product curriculum scope.
- [x] Reconcile all 38 repository topic files.
- [x] Reconcile renamed/duplicate topics.
- [x] Identify genuinely missing topics after row-level mapping — 4 first-order gaps identified and created.
- [ ] Identify topics that should be covered by another subject.
- [x] Freeze the Torts inventory version.

### TORT-MAP-001 — Repository mapping
For every inventory item:
- [x] Canonical topic path — 38-file inventory reconciled
- [x] Topic ID — retained from repository files
- [x] Legacy identity — retained where present
- [ ] Existing status — row-level gate inspection pending
- [ ] Enhancement version — row-level gate inspection pending
- [ ] Verification state — substantive verification pending
- [ ] Last relevant commit — record during row-level mapping
- [x] Cross-topic relationship — duplicate groups identified
- [x] Gap classification — four first-order gaps created; secondary curriculum candidates remain

### TORT-ENH-001 — Enhancement gate
Only for topics whose enhancement is actually incomplete:
- [ ] Learning objectives
- [ ] Definition
- [ ] Legal principle
- [ ] Statutory/case framework
- [ ] Elements
- [ ] Detailed explanation
- [ ] Examples
- [ ] Distinctions
- [ ] Case law
- [ ] Problem application
- [ ] Short answer
- [ ] 10-mark answer
- [ ] 16-mark answer
- [ ] Takeaways
- [ ] Sources
- [ ] Verification metadata

### TORT-VER-001 — Legal verification
For every applicable topic:
- [ ] Current-law source checked
- [ ] Relevant statutory interface checked
- [ ] Case name checked
- [ ] Court checked
- [ ] Citation checked
- [ ] Proposition/ratio checked
- [ ] Later treatment checked
- [ ] Source URL checked
- [ ] Verification date recorded

### TORT-VAL-001 — Content validation
- [ ] Schema
- [ ] Enhancement quality
- [ ] Baseline preservation
- [ ] Cross-references
- [ ] Duplicate detection
- [ ] Source links
- [ ] Case links
- [ ] Student-answer quality

### TORT-INT-001 — Product validation
- [ ] Routes
- [ ] Rendering
- [ ] Search
- [ ] Mobile
- [ ] Case/source links
- [ ] 10-mark presentation
- [ ] 16-mark presentation

### TORT-COMPLETE-001
Torts can only become `COMPLETE_LOCKED` when every applicable inventory item has passed every required gate.

## E. Reconciled repository result

The repository contains **38 Torts JSON topic files**, not 15. The complete file-by-file reconciliation is recorded in `docs/TORTS-REPOSITORY-RECONCILIATION.md`. The historical 12-topic README is therefore treated as the canonical entry-point subset, while migrated/supplemental files remain substantive content and must be mapped rather than ignored.

The 42 files include duplicate/overlap groups for definitions, general defences, injuria/damnum, defamation, remedies/damages, trespass, vicarious liability and capacity/state liability. These are mapping/consolidation concerns, not reasons to delete or blindly re-enhance content.

## E. Important finding

The original 12-topic Torts working set was **not a complete subject inventory**.

The repository currently contains 38 Torts JSON topic files. Current law-school curricula also identify additional coverage areas that require row-level mapping and depth validation. Therefore no Torts completion percentage should be calculated from the old 12-topic set.

**Current Torts state: SCOPE FROZEN — GAP TOPICS CREATED / LEGAL VERIFICATION NEXT.**

## F. Anti-duplication rule

Do not re-enhance the 12 existing enhanced topics merely because they appear in the next batch.

First inspect their individual gate state. If a gate is already complete, skip it. If a verification or validation gate is incomplete, perform only that gate.

A topic may be reopened only for a documented legal/source change, defect, schema migration, product regression, or explicit correction.
