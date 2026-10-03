# Torts — Row-Level Repository Mapping

**Date:** 2026-10-03  
**Status:** MAPPED — FIRST-ORDER GAPS CREATED / DEPTH VALIDATION NEXT  
**Scope:** 38 repository JSON files  
**Parent control:** CONTROL-002  
**Source map:** `docs/TORTS-REPOSITORY-RECONCILIATION.md`

## Mapping rule

A curriculum row is considered **MAPPED** when existing repository content plausibly covers it, even if the content still needs enhancement, legal verification or validation. MAPPED does **not** mean COMPLETE.

A row is **DUPLICATE-MAPPED** when more than one migrated file covers substantially the same subject. Those files remain preserved.

A row is **GAP** only when no existing repository file provides a defensible canonical home.

## 1. Core coverage mapping

| Coverage row | Canonical/mapped file(s) | State |
|---|---|---|
| Nature and definition | nature-definition.json; tort-definition.json | DUPLICATE-MAPPED |
| Essential elements / constituents | nature-definition.json; tort-definition.json | MAPPED |
| Distinction from crime/contract | nature-definition.json; tort-definition.json | MAPPED |
| Damnum sine injuria / injuria sine damnum | injuria-damnum.json; tort-injuria-damnum.json | DUPLICATE-MAPPED |
| Ubi jus ibi remedium / core maxims | nature-definition.json; general-defences.json | MAPPED |
| General defences | general-defences.json; tort-general-defences.json | DUPLICATE-MAPPED |
| Parties / who may sue or be sued | tort-capacity-state-liability.json | MAPPED |
| Capacity in tort | tort-capacity-state-liability.json | MAPPED |
| Vicarious liability | vicarious-liability.json; vicarious.json | DUPLICATE-MAPPED |
| Joint tortfeasors | — | GAP |
| State / government liability | state-liability.json; tort-capacity-state-liability.json | DUPLICATE-MAPPED |
| Negligence | negligence.json | MAPPED |
| Res ipsa loquitur | negligence.json | MAPPED |
| Contributory negligence | negligence.json; tort-contributory-negligence.json | DUPLICATE-MAPPED |
| Nervous shock / psychiatric injury | tort-nervous-shock.json | MAPPED |
| Remoteness of damage | tort-remoteness-damage.json; negligence.json | MAPPED |
| Nuisance | nuisance.json | MAPPED |
| Trespass to person | trespass-person.json; trespass.json | MAPPED |
| Trespass to land/property | trespass-property.json; trespass.json | MAPPED |
| Trespass to goods | trespass-property.json; tort-conversion-detinue.json | MAPPED |
| Trespass ab initio | — | GAP |
| Defamation — libel/slander | defamation.json; defamation-tort.json | DUPLICATE-MAPPED |
| Defamation defences/privilege | defamation.json; defamation-tort.json | DUPLICATE-MAPPED |
| Strict liability | strict-liability.json | MAPPED |
| Absolute liability | absolute-liability.json | MAPPED |
| Remedies | remedies.json; tort-remedies-damages.json | DUPLICATE-MAPPED |
| Damages and assessment | remedies.json; tort-remedies-damages.json | DUPLICATE-MAPPED |
| Injunction / restitution / judicial remedies | remedies.json; tort-remedies-damages.json | MAPPED |
| Extra-judicial remedies | remedies.json; tort-remedies-damages.json | MAPPED |
| Malicious prosecution | malicious-prosecution.json | MAPPED |
| Abuse of legal procedure/process | — | GAP |
| Deceit / fraud / misstatement | tort-deceit-misstatement.json | MAPPED |
| Occupier / dangerous premises | tort-occupiers-liability.json | MAPPED |
| Dangerous chattels / product liability interface | consumer.json; tort-occupiers-liability.json | MAPPED — statutory interface |
| Liability for animals / scienter | tort-scienter-action.json | MAPPED |
| Statutory liability | — | GAP |
| Motor Vehicles Act interface | mact-claims.json | MAPPED — statutory interface |
| Consumer Protection Act interface | consumer.json | MAPPED — statutory interface |
| Constitutional/public-law tort | state-liability.json; tort-capacity-state-liability.json | MAPPED |
| Environmental/public liability applications | absolute-liability.json; state-liability.json | MAPPED — depth check required |
| Extinguishment/discharge | tort-discharge.json | MAPPED |

## 2. Additional repository topics requiring explicit curriculum mapping

These are substantive files found in the repository that should not disappear from the subject merely because the first 41-row control ledger did not name them separately:

| File | Coverage |
|---|---|
| tort-conspiracy.json | Civil conspiracy / unlawful combination |
| tort-conversion-detinue.json | Conversion, detention/detinue |
| tort-death-in-relation.json | Effect of death on tort claims |
| tort-interference-business.json | Interference with trade/business/occupation |
| tort-maintenance-champerty.json | Maintenance and champerty |
| tort-motive-malice.json | Motive, malice and mental element |
| tort-false-imprisonment.json | False imprisonment |
| tort-scienter-action.json | Scienter / animal liability |
| tort-contributory-negligence.json | Contributory negligence |
| tort-remoteness-damage.json | Remoteness |
| tort-occupiers-liability.json | Occupiers |
| consumer.json | Consumer Protection Act |
| mact-claims.json | Motor Vehicles Act / MACT |
| vicarious.json | Vicarious liability expanded/migrated coverage |
| defamation-tort.json | Defamation expanded/migrated coverage |

## 3. First-order gap closure

The following four genuine gaps identified during reconciliation now have dedicated canonical files:

1. **Joint tortfeasors and contribution** — `tort-joint-tortfeasors.json`
2. **Trespass ab initio** — `tort-trespass-ab-initio.json`
3. **Abuse of legal process / abuse of process** — `tort-abuse-of-process.json`
4. **Statutory tort / statutory liability as a general doctrine** — `tort-statutory-liability.json`

These should receive dedicated canonical topic files unless an existing subject-level topic is intentionally selected as the canonical home after a deeper content inspection.

## 4. Secondary curriculum gaps / optional advanced coverage

The following appear in some Indian Torts syllabi and should be evaluated against the target CodePackr curriculum before creating files:

- Slander of title / slander of goods
- Injurious falsehood / passing off
- Professional and medical negligence
- Dangerous goods / hazardous activities as negligence applications
- Effect of death in greater doctrinal detail
- Foreign/felonious torts where required by a particular syllabus
- Emerging/media/psychiatric tort applications

These are **curriculum-control candidates**, not automatic creation instructions.

## 5. Anti-duplication actions

Do not independently enhance both members of a duplicate group unless the files contain materially distinct coverage.

Preferred approach:
- preserve both source files;
- choose one canonical presentation path;
- map the other as migrated/expanded support;
- merge only additive substantive material;
- retain legacy identifiers/provenance;
- run preservation validation after any consolidation.

## 6. Current gate result

- Repository inventory: **42/42 reconciled after gap creation**
- Core control rows mapped: **41/41**
- Genuine first-order gaps remaining: **0**
- Duplicate/overlap groups: **8**
- Legal verification: **not started as a complete Torts gate**
- Content validation: **pending**
- Integration: **pending**
- Production: **pending**
- COMPLETE_LOCKED: **0**

**Next action:** validate the four new files, then begin substantive legal verification and depth auditing.


## 6. Content-quality gate — 2026-10-03

The four newly created canonical gap topics were structurally audited and their exam-depth scaffolds were completed:
- `tort-joint-tortfeasors.json`
- `tort-trespass-ab-initio.json`
- `tort-abuse-of-process.json`
- `tort-statutory-liability.json`

Each now contains explicit short-answer, 10-mark and 16-mark answer structures and a doctrine-vs-neighbouring-cause distinction. Their legal verification fields remain open by design.

The existing migrated/supplemental files still require a controlled enhancement-depth audit. In particular, several files use the older enhancement shape containing `learningObjectives`, `definition`, `legalPrinciple`, `statutoryFramework`, `essentialIngredients`, `detailedExplanation`, `examples`, `problemApplication`, `keyTakeaways`, `authoritativeSources`, and `verification`, but do not yet expose the newer explicit exam-answer and case-law quality fields. This is a **content-depth gap**, not a reason to replace the files.

**Next gate:** audit and upgrade migrated/supplemental topics in batches, then begin substantive source and case verification.


## 7. Migrated enhancement-depth batch — 2026-10-03

The pre-existing migrated/supplemental Torts files were audited for the newer exam-depth scaffold.

**Upgraded this phase:** 26/26 migrated files.

The additive upgrade supplied missing explicit:
- short-answer structure;
- 10-mark answer structure;
- 16-mark answer structure;
- doctrine-vs-neighbouring-doctrine distinction;
- verification note documenting that substantive legal/case verification remains a separate gate.

No migrated substantive body was replaced and no migrated file was deleted.

**Important:** this closes the *scaffold/depth-field* gate for the 26 migrated files. It does **not** close legal verification, case verification, source verification, or production validation.
