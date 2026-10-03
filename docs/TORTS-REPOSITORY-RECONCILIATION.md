# Torts — Repository Reconciliation & Scope Freeze

**Date:** 2026-10-03  
**Repository:** `coolnaveen99/legal-content`  
**Control:** CONTROL-002  
**Status:** SCOPE FROZEN — REPOSITORY INVENTORY RECONCILED / GAP FILES ADDED  
**Standard:** `docs/SECTION-LEVEL-CONTENT-COMPLETION-CHECKLIST.md`

## 1. Purpose

This document reconciles the Torts subject README with the actual repository inventory before any further enhancement work.

The repository contains more Torts material than the historical 12-topic README listed. The additional files are retained as substantive migrated content and are mapped below. They are **not deleted** and are **not re-generated** merely because they were absent from the old canonical list.

## 2. Evidence-based scope decision

Current Indian law-school materials treat Law of Torts as a broad, primarily judge-made subject covering foundational principles, specific torts against persons/property, liability doctrines, remedies and selected statutory applications. Current NLSIU's 2026-27 Law of Torts course expressly covers negligence, nuisance, trespass, defamation, vicarious liability, strict/absolute liability and applications under the Motor Vehicles Act, 1988 and Consumer Protection Act, 2019. Older BCI-oriented university syllabi additionally cover joint tortfeasors, discharge/extinction, remoteness, nervous shock, conversion/detinue, trespass ab initio, deceit, interference with business, maintenance/champerty, occupiers, animals, death in relation to torts and related remedies.

**Scope freeze:** the CodePackr Law Torts subject shall reconcile and retain all 38 existing Torts JSON topic artifacts, while distinguishing:
- core/common-law Torts doctrine;
- specific torts and remedies;
- statutory/public-law interfaces taught with Torts;
- duplicate/overlapping migrated artifacts that must be mapped to canonical coverage rather than independently re-enhanced.

This is a **scope freeze**, not a claim that all 38 files are legally verified or production-complete.

## 3. Complete repository inventory — 38 JSON files

| # | File | Classification | Mapping action |
|---|---|---|---|
| 1 | absolute-liability.json | Core doctrine | Map to absolute liability |
| 2 | consumer.json | Linked statutory application | Consumer Protection Act interface |
| 3 | defamation-tort.json | Migrated duplicate/expanded | Reconcile with defamation.json |
| 4 | defamation.json | Canonical legacy topic | Preserve; reconcile duplicate |
| 5 | general-defences.json | Canonical legacy topic | Preserve; map general defences |
| 6 | injuria-damnum.json | Canonical legacy topic | Preserve; map maxims |
| 7 | mact-claims.json | Linked statutory application | Motor Vehicles Act / MACT interface |
| 8 | malicious-prosecution.json | Specific tort | Preserve and verify |
| 9 | nature-definition.json | Canonical legacy topic | Foundations |
| 10 | negligence.json | Canonical legacy topic | Negligence |
| 11 | nuisance.json | Canonical legacy topic | Nuisance |
| 12 | remedies.json | Canonical legacy topic | Remedies |
| 13 | state-liability.json | Canonical legacy topic | State/public-law liability |
| 14 | strict-liability.json | Canonical legacy topic | Strict liability |
| 15 | tort-capacity-state-liability.json | Migrated expanded topic | Capacity + state-liability mapping |
| 16 | tort-conspiracy.json | Specific tort/interference | Conspiracy |
| 17 | tort-contributory-negligence.json | Specific doctrine | Contributory negligence |
| 18 | tort-conversion-detinue.json | Specific tort | Conversion + detinue |
| 19 | tort-death-in-relation.json | Specific topic | Death in relation to tort claims |
| 20 | tort-deceit-misstatement.json | Specific tort | Deceit/fraud/misstatement |
| 21 | tort-definition.json | Migrated duplicate | Reconcile with nature-definition.json |
| 22 | tort-discharge.json | Core doctrine | Discharge/extinction |
| 23 | tort-false-imprisonment.json | Specific tort | False imprisonment |
| 24 | tort-general-defences.json | Migrated duplicate | Reconcile with general-defences.json |
| 25 | tort-injuria-damnum.json | Migrated duplicate | Reconcile with injuria-damnum.json |
| 26 | tort-interference-business.json | Specific tort | Interference with business/occupation |
| 27 | tort-maintenance-champerty.json | Specific doctrine | Maintenance/champerty |
| 28 | tort-motive-malice.json | General doctrine | Motive, malice and mental element |
| 29 | tort-nervous-shock.json | Specific doctrine | Nervous shock / psychiatric injury |
| 30 | tort-occupiers-liability.json | Specific liability | Occupiers/dangerous premises |
| 31 | tort-remedies-damages.json | Migrated expanded duplicate | Reconcile with remedies.json |
| 32 | tort-remoteness-damage.json | Core doctrine | Remoteness of damage |
| 33 | tort-scienter-action.json | Specific liability | Scienter / liability for animals |
| 34 | trespass-person.json | Specific tort | Trespass to person |
| 35 | trespass-property.json | Specific tort | Trespass to land/property |
| 36 | trespass.json | Canonical legacy topic | Reconcile with trespass-person/property |
| 37 | vicarious-liability.json | Canonical legacy topic | Vicarious liability |
| 38 | vicarious.json | Migrated duplicate/expanded | Reconcile with vicarious-liability.json |

## 4. Canonical-vs-migrated rule

The old README's 12-topic set is now treated as the **historical canonical subset**, not the complete repository inventory.

The following overlap groups must have one canonical coverage path while preserving every source file:

- Nature/definition: `nature-definition.json` + `tort-definition.json`
- General defences: `general-defences.json` + `tort-general-defences.json`
- Injuria/damnum: `injuria-damnum.json` + `tort-injuria-damnum.json`
- Defamation: `defamation.json` + `defamation-tort.json`
- Remedies/damages: `remedies.json` + `tort-remedies-damages.json`
- Trespass: `trespass.json` + `trespass-person.json` + `trespass-property.json`
- Vicarious liability: `vicarious-liability.json` + `vicarious.json`
- Capacity/state liability: `tort-capacity-state-liability.json` + `state-liability.json`

No duplicate file is to be deleted. If a canonical consolidation is later required, the source file is first archived/preserved according to repository governance and its legacy identity remains recorded.

## 5. Curriculum coverage gaps identified after reconciliation

The repository now contains substantial coverage beyond the old README, but the following curriculum areas still require explicit row-level mapping and/or enhancement-depth verification before they can be considered covered:

1. Essential elements/constituents of tort
2. Tort vs crime and tort vs contract
3. Parties who may sue/be sued
4. Capacity in tort
5. Joint tortfeasors and contribution
6. Remoteness of damage
7. Nervous shock/psychiatric injury
8. Trespass ab initio
9. Trespass by animals
10. Defamation defences/privilege
11. Damages and assessment
12. Injunction/restitution
13. Extra-judicial remedies
14. Abuse of legal process
15. Deceit and negligent misstatement
16. Occupiers/dangerous premises
17. Dangerous goods/product-liability interface
18. Statutory tort/liability
19. Motor Vehicles Act/MACT
20. Consumer Protection Act/product liability
21. Constitutional/public-law tort
22. Environmental/public liability
23. Discharge/extinction
24. Effect of death on tort claims
25. Interference with business/occupation
26. Maintenance/champerty
27. Scienter/animals
28. Conversion/detinue
29. Slander of title/goods where required by curriculum
30. Passing off/injurious falsehood where required by curriculum
31. Professional/medical negligence as an application of negligence
32. Emerging/statutory tort applications where included by the target curriculum

Some of these are covered by existing files; the list is a **coverage-control list**, not a list of 32 new files to create.

## 6. Frozen control state

- Repository Torts JSON inventory: **42**
- Historical README canonical entry topics: **12**
- Supplemental/migrated topic files before gap closure: **26**
- New canonical gap topics added: **4**
- Confirmed overlap/duplicate groups: **8**
- Existing substantive files preserved: **42/42**
- Scope status: **FROZEN FOR RECONCILIATION**
- Legal verification status: **NOT COMPLETE**
- Content validation status: **NOT COMPLETE**
- Product integration status: **NOT COMPLETE**
- Production status: **NOT COMPLETE**
- COMPLETE_LOCKED topics: **0**

## 7. Next execution gates

1. Build a row-level mapping from the 38 files to the frozen curriculum coverage.
2. Mark duplicate/overlap rows as mapped rather than re-enhancing them.
3. Identify only genuinely missing coverage.
4. Create missing canonical topics only where the mapping proves a gap.
5. Run enhancement-gate inspection on existing files.
6. Verify law and authorities.
7. Validate content.
8. Integrate and production-validate.
9. Lock only when all applicable rows pass.

**Important:** This document does not authorize blanket re-enhancement. Existing substantive content remains the baseline and must be changed only when a specific gate is incomplete or a documented defect/change requires reopening.
