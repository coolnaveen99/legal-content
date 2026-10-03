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
| 25 | Absolute liability | absolute-liability.json | DONE | DONE | DONE — 1991 Gazette, Jan Vishwas 2023, G.S.R. 772(E) opened | DONE — official Oleum PDF 8858 opened | PENDING | PENDING | PENDING | OPEN |
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
6. [x] Run structural content-quality validation on the four newly created gap files.
7. [x] Run the enhancement-depth audit across all 38 pre-existing files; 26 migrated files required and received additive exam-depth scaffolds, while 12 historical canonical files already had the newer scaffold.
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



## Content-quality checkpoint — 2026-10-03

**Validated:** 4/4 newly created gap topics have valid JSON, enhancement scaffolding, exam-answer structures and distinction structures.

**Not yet complete:** 38 pre-existing Torts files require depth-gate inspection before they can be considered enhancement-complete. Existing content is preserved; only missing fields/gates should be added.

**Legal verification:** 0/42 promoted to COMPLETE_LOCKED. Verification remains a separate gate and has not been inferred from migrated status fields.


## Enhancement-depth checkpoint — 2026-10-03

**42/42 repository topics:** enhancement-depth scaffold accounted for.

- 12 historical canonical files: newer exam scaffold already present.
- 26 migrated/supplemental files: explicit exam-depth scaffold added.
- 4 newly created canonical gaps: exam-depth scaffold already completed.

**Next gate:** substantive legal/statutory verification and case-law verification. No topic is COMPLETE_LOCKED merely because the enhancement scaffold exists.


## Substantive verification checkpoint — 2026-10-03

### Negligence
- Enhancement depth: complete
- Statutory/current-law evidence checked: complete for the propositions used
- Case-law evidence checked: complete for active authorities
- Status: **VERIFIED**
- COMPLETE_LOCKED: **not yet** — content/product validation and production gates still remain.

The verification pass confirmed the Supreme Court authorities used for professional negligence and res ipsa loquitur, the comparative Donoghue/Caparo authorities, and Bharatiya Sakshya Adhiniyam, 2023 section 104. This topic must still pass integration/production gates before lock.


### Nuisance — substantive verification checkpoint (2026-10-03)
- Enhancement depth: complete
- Current statutory check: BNSS 2023 §152 checked for public-nuisance procedure
- Case-law check: Municipal Council, Ratlam v. Vardhichand verified
- Status: **VERIFIED**
- COMPLETE_LOCKED: not yet; integration and production gates remain.


### Strict Liability — substantive verification checkpoint (2026-10-03)
- Enhancement depth: complete
- Indian case-law verification: complete for active authorities
- Rylands doctrine/current treatment: checked
- Status: **VERIFIED**
- COMPLETE_LOCKED: not yet; integration, build and production gates remain.


### Absolute liability — source-correction checkpoint (2026-10-03)
- Enhancement depth: scaffold present; not reworked.
- Official PDF opened: `https://api.sci.gov.in/jonew/judis/7699.pdf`.
- Finding: that PDF is *Charan Lal Sahu v. Union of India* (judgment 22/12/1989; 1990 AIR 1480; 1990 SCC (1) 613), not *M.C. Mehta v. Union of India* (Oleum).
- The opened judgment quotes the Mehta absolute and non-delegable liability formulation and the departure from the *Rylands v. Fletcher* exceptions.
- Original Oleum judgment text: **not opened**. Topic remains `in-progress`. Not verified. Not published. Not COMPLETE_LOCKED.
- Next action: open the original Oleum judgment before any verified status.


### Absolute liability — Oleum official-PDF checkpoint (2026-10-03)
- Official PDF opened: `https://api.sci.gov.in/jonew/judis/8858.pdf`.
- Identity: M.C. Mehta and Anr. v. Union of India & Ors., judgment 20/12/1986; 1987 AIR 1086; 1987 SCC (1) 395; 1987 SCR (1) 819; Bhagwati C.J.
- Holding checked: hazardous or inherently dangerous activity; absolute and non-delegable duty; strict and absolute liability for harm from an accident such as escape of toxic gas; not subject to the exceptions operating under Rylands v. Fletcher; compensation correlated to magnitude and capacity.
- Limit: Article 12 left open; the order directed Delhi Legal Aid and Advice Board to file compensation actions and did not itself award compensation.
- Status: case-law propositions used in this topic checked. Not COMPLETE_LOCKED. Enhancement remains `in-progress`. Not a publication gate.
- Next action: statutory/current-law interface (Public Liability Insurance Act, 1991) remains unopened.


### Absolute liability — Public Liability Insurance Act checkpoint (2026-10-03)
- Opened Gazette text: Ministry PDF of Act 6 of 1991, Gazette Extraordinary, 23 January 1991.
- Section 3: owner must give Schedule relief for death, injury to a non-workman, or property damage from an accident; claimant need not prove wrongful act, neglect or default.
- Section 4: insurance against section 3 relief before handling a hazardous substance.
- Section 8: statutory relief is additional to other compensation, and other compensation is reduced by relief paid under the Act.
- 1991 Schedule figures recorded only as Gazette figures. Commencement notification and later amendment amounts were not opened.
- Not COMPLETE_LOCKED.


### Absolute liability — Jan Vishwas amendment checkpoint (2026-10-03)
- Opened Jan Vishwas (Amendment of Provisions) Act, 2023, Act 18 of 2023, Gazette Extraordinary No. 21, 11 August 2023, serial 28.
- Opened G.S.R. 756(E), 18 October 2023: those entries come into force on 1 April 2024.
- Section 3(1) now requires reimbursement or other relief as may be prescribed, for death, medical expenses, wage loss, other injury or sickness, private-property damage, or other prescribed loss. The 1991 Schedule figures are not the current statutory measure.
- Rules prescribing the post-1 April 2024 amounts were not opened. No current rupee figure is certified.
- Not COMPLETE_LOCKED.


### Absolute liability — prescribed-amount checkpoint (2026-10-03)
- Opened G.S.R. 772(E), 17 December 2024, Public Liability Insurance (Amendment) Rules, 2024.
- Second Schedule: fatal relief Rs 5,00,000 plus medical expenses up to Rs 1,50,000; total permanent disability Rs 5,00,000 plus medical expenses up to Rs 25,000; wage relief not exceeding Rs 25,000 per month for up to 3 months; private-property damage not exceeding Rs 50,00,000; other injury or sickness not exceeding Rs 25,000.
- Rule 10(1): insurance aggregate cap Rs 250 crore, and Rs 500 crore for more than one accident during the policy or one year, whichever is less.
- These figures are immediate statutory relief. They do not replace the Oleum measure of compensation.
- Not COMPLETE_LOCKED. Content validation, integration and production gates remain open.
- Lock refusal: the whole catalogue cannot be marked COMPLETE_LOCKED. No other Torts row has closed those gates.
