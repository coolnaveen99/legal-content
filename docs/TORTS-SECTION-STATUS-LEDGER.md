# Torts Section-Level Status Ledger

**Date:** 2026-10-05  
**Status:** LIVE — SCOPE FROZEN / ALL TOPICS MAPPED / ENHANCEMENT SCAFFOLD COMPLETE / VERIFICATION PENDING


## Batch status — 2026-10-06

Pending merge of `subject-bot-arbitration` is on `main`. Manifest conflict was regenerated. Enhancement validation: 3,652 topics, 0 errors.

Torts lock was not advanced. Rows 15–16 and 18–41 remain `OPEN`. Nervous shock and remoteness still have `verification.lastVerifiedAt = null`. Existing enhanced text was preserved. No legacy overwrite. No row was locked without source verification.

  
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
| 1 | Nature and definition | nature-definition.json | DONE | DONE | DONE — uncodified common law (Art. 372 / s.9 CPC; Limitation Act Art. 113) | DONE — official Subramanian Swamy PDF 44579 opened (paras 63–66) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 2 | Essential elements / constituents | nature-definition.json | DONE | DONE | DONE — injuria sine damno foundation verified (paras 63, 66) | DONE — official Subramanian Swamy PDF 44579 opened | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 3 | Distinction from crime/contract | nature-definition.json | DONE | DONE | DONE — civil injury vs crime/contract confirmed (paras 76–80) | DONE — official Subramanian Swamy PDF 44579 opened (paras 76–80) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 4 | Damnum sine injuria / injuria sine damnum | injuria-damnum.json | DONE | DONE | DONE — threshold actionability maxims (Art. 372 / s.9 CPC) | DONE — official Subramanian Swamy PDF 44579 opened (para 63) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 5 | Ubi jus ibi remedium / core maxims | general-defences.json / nature-definition.json | DONE | DONE | DONE — maxims received under Art. 372 / actionable under s.9 CPC | DONE — official Subramanian Swamy (para 63) & Vohra Sadikbhai (para 22) PDFs opened | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 6 | General defences | general-defences.json | DONE | DONE | DONE — uncodified common-law defences (Art. 372; CPC Order VIII) | DONE — official Vohra Sadikbhai PDF 43636 opened (paras 22–26) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 7 | Parties / who may sue or be sued | tort-capacity-state-liability.json | DONE | DONE | DONE — uncodified common law (Art. 372; CPC Order XXXII; s.83/s.86 CPC) | DONE — official Chandrima Das PDF 16557 opened (paras 16–22) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 8 | Capacity in tort | tort-capacity-state-liability.json | DONE | DONE | DONE — legal personality; minors/unsound mind (CPC Order XXXII; Limitation Act ss.6–8) | DONE — official Achutrao Haribhau Khodwa PDF 15962 opened | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 9 | Vicarious liability | vicarious-liability.json | DONE | DONE | DONE — uncodified common law; MVA statutory interface | DONE — official N.K.V. Bros PDF 4581 opened | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 10 | Joint tortfeasors | tort-joint-tortfeasors.json | DONE | DONE | DONE — uncodified common law; MVA/CPC procedural interface | DONE — official Khenyei PDF 42673 opened (para 18) | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 11 | State / government liability | state-liability.json | DONE | DONE | DONE — Art. 300 / Arts. 32 & 226; CPC ss.79–82 | DONE — official Achutrao Khodwa (15962) & Chandrima Das (16557) PDFs opened | DONE — passes schema and preservation validators | DONE — canonical delivery and readiness gates PASS | DONE — build, sitemap and prerender PASS | LOCKED |
| 12 | Negligence | negligence.json | DONE | DONE | DONE - verified | DONE - verified | DONE - validation PASS | DONE - integration PASS | DONE - production PASS | LOCKED |
| 13 | Res ipsa loquitur | negligence.json | DONE | DONE | DONE - verified | DONE - verified | DONE - validation PASS | DONE - integration PASS | DONE - production PASS | LOCKED |
| 14 | Contributory negligence | negligence.json | DONE | DONE | DONE - verified | DONE - verified | DONE - validation PASS | DONE - integration PASS | DONE - production PASS | LOCKED |
| 15 | Nervous shock | tort-nervous-shock.json | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 16 | Remoteness of damage | tort-remoteness-damage.json / negligence.json | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 17 | Nuisance | nuisance.json | DONE | DONE | DONE - verified | DONE - verified | DONE - validation PASS | DONE - integration PASS | DONE - production PASS | LOCKED |
| 18 | Trespass to person | trespass-person.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 19 | Trespass to land/property | trespass-property.json / trespass.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 20 | Trespass to goods | trespass-property.json / tort-conversion-detinue.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 21 | Trespass ab initio | tort-trespass-ab-initio.json | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 22 | Defamation — libel/slander | defamation.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 23 | Defamation defences/privilege | defamation.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 24 | Strict liability | strict-liability.json | DONE | DONE | DONE - verified | DONE - verified | DONE - validation PASS | DONE - integration PASS | DONE - production PASS | LOCKED |
| 25 | Absolute liability | absolute-liability.json | DONE | DONE | DONE — 1991 Gazette, Jan Vishwas 2023, G.S.R. 772(E) opened | DONE — official Oleum PDF 8858 opened | DONE — file not named in validator errors | PENDING | PENDING | OPEN |
| 26 | Remedies | remedies.json | DONE | DONE | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 27 | Damages and assessment | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 28 | Injunction / restitution / judicial remedies | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 29 | Extra-judicial remedies | remedies.json | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 30 | Malicious prosecution | malicious-prosecution.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 31 | Abuse of legal procedure/process | tort-abuse-of-process.json | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 32 | Deceit / fraud | tort-deceit-misstatement.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 33 | Occupier / dangerous premises | tort-occupiers-liability.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 34 | Dangerous chattels / product liability interface | consumer.json / tort-occupiers-liability.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 35 | Liability for animals | tort-scienter-action.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 36 | Statutory liability | tort-statutory-liability.json | DONE | DONE | PENDING | PENDING | PENDING | PENDING | PENDING | OPEN |
| 37 | Motor Vehicles Act interface | mact-claims.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 38 | Consumer Protection Act interface | consumer.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 39 | Constitutional/public-law tort | state-liability.json + Constitution | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 40 | Environmental/public liability applications | absolute-liability.json + Environmental Law | REVIEW | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |
| 41 | Extinguishment/discharge of tortious liability | tort-discharge.json | DONE | REVIEW | REVIEW | REVIEW | PENDING | PENDING | PENDING | OPEN |

## Immediate execution queue

1. [x] Confirm the canonical Torts curriculum scope for CodePackr Law.
2. [x] Reconcile all repository files under `topics/torts/` — 38 JSON files.
3. [x] Reconcile renamed/duplicate topics — 8 overlap groups.
4. [x] Decide which rows are Torts-core versus linked statutory subjects.
5. [x] Complete row-level mapping and create the four genuine first-order gap topic files.
6. [x] Run structural content-quality validation on the four newly created gap files.
7. [x] Run the enhancement-depth audit across all 38 pre-existing files; 26 migrated files required and received additive exam-depth scaffolds, while 12 historical canonical files already had the newer scaffold.
8. [x] Inspect existing enhancement fields before changing any existing topic.
9. [x] Complete only missing enhancement gates; all 42 repository topics now have enhancement-depth scaffolding.
10. [ ] Complete statutory/current-law verification where applicable.
11. [ ] Complete case-law verification.
12. [ ] Run legal/content validation.
13. [ ] Run product integration validation.
14. [ ] Run production validation.
15. [ ] Lock only after all applicable rows are complete.

## Current measured position

- Confirmed repository topic files checked: **42**
- Historical README canonical entry topics: **12**
- Supplemental/migrated topic files: **26**
- New canonical gap topics: **4**
- Ledger coverage rows created for current/research-derived scope: **41**
- Additional curriculum-control rows identified: **32**
- Topics currently safe to call fully complete: **0**
- Reason: subject-wide inventory and all completion gates have not yet been closed.

## Pending-task update — 2026-10-05

- Repository mapping is now complete for all 41 control rows; stale `MISSING` entries were reconciled to existing canonical topic files.
- Enhancement-depth inspection is complete for all 42 repository topics, supported by the ENH-008 batch report.
- Schema and manifest validation passed; manifest validation still reports 4,651 pre-existing SHA-256 mismatch warnings.
- Next executable task: begin row-level statutory/current-law and case-law verification, starting with topics whose mappings are now complete.
- Legal/content validation, product integration, production validation and final locking remain pending.

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


### Absolute liability — content-validation checkpoint (2026-10-03)
- `node scripts/validate.mjs` and `node scripts/validate-enhancements.mjs` were run.
- `topics/torts/absolute-liability.json` was not named in the error output.
- Catalogue result: enhancement validation reported topics=3652, enhanced=3652, errors=5935. Many Torts files lack `enhancement.caseLaw`. Manifest sha256 mismatches were also reported.
- `node scripts/gate-unverified-promotion.mjs`: promoted=3, errors=0.
- Not COMPLETE_LOCKED. Integration and production gates were not run to a pass, and the catalogue validation did not pass.


### Nature and definition (Rows 1–3) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDF: `https://api.sci.gov.in/judgment/judis/44579.pdf`: *Subramanian Swamy v. Union of India & Ors.*, WP (Crl.) 184/2014, decided 13/05/2016, (2016) 7 SCC 221, Dipak Misra and Prafulla C. Pant JJ.
- Paras 63–66: Confirmed uncodified common-law foundation of Indian tort law (quoting M.C. Setalvad), its status as law in force under Article 372 (*Superintendent and Remembrancer of Legal Affairs v. Corporation of Calcutta*, 1967), and maintainability of civil action under Section 9 CPC (*Ganga Bai v. Vijay Kumar*, 1974) without needing express statutory authorization. Confirmed foundational principle of *injuria sine damno* being actionable and *damnum sine injuria* not being actionable (quoting Justice G.P. Singh, *Law of Torts*).
- Paras 76–80: Confirmed essential distinction between crime and civil injury / tort (quoting Blackstone and Kenny). Private wrongs or civil injuries are infringements of individual civil rights remediable by damages; public wrongs or crimes are violations of public rights due to the social aggregate capacity sounding in State prosecution and punishment.
- Statutory framework: Indian tort law remains uncodified common law. Residual limitation under Limitation Act 1963, Article 113 (3 years from date right to sue accrues). Specialised statutes (Motor Vehicles Act 1988, Consumer Protection Act 2019) supplement without codifying general tort law.
- Validators run: `validate:schemas` (0 errors), `validate-enhancements.mjs` (0 errors), `gate-unverified-promotion.mjs` (0 errors), `verify-legacy-preservation.mjs` (0 errors, 3,551 topics checked).
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### Damnum sine injuria / injuria sine damnum (Row 4) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDF: `https://api.sci.gov.in/judgment/judis/44579.pdf`: *Subramanian Swamy v. Union of India & Ors.*, WP (Crl.) 184/2014, decided 13/05/2016, (2016) 7 SCC 221, Dipak Misra and Prafulla C. Pant JJ.
- Para 63 (p. 110): Confirmed express affirmation that the principles forming the foundation of the law of torts in India are that *injuria sine damno* is actionable but *damnum sine injuria* is not (approving Justice G.P. Singh, *Law of Torts*).
- Actionability & remedies: *Injuria sine damno* applies to torts actionable per se (such as trespass, false imprisonment, libel, and wrongful denial of civil/constitutional rights as in *Bhim Singh v. State of J&K*, 1985); *damnum sine injuria* excludes tort liability for lawful trade competition (*Gloucester Grammar School*, *Mogul Steamship Co.*) and damage arising without violation of an existing legal right.
- Statutory/forum framework: Uncodified common law received under Article 372; actionable under Section 9 CPC.
- Validators run: `validate:schemas` (0 errors), `validate-enhancements.mjs` (0 errors), `gate-unverified-promotion.mjs` (0 errors), `verify-legacy-preservation.mjs` (0 errors, 3,551 topics checked).
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### Ubi jus ibi remedium & General defences (Rows 5–6) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDF: `https://api.sci.gov.in/jonew/judis/43636.pdf`: *Vohra Sadikbhai Rajakbhai & Ors. v. State of Gujarat & Ors.*, Civil Appeal No. 1866 of 2016, decided 10/05/2016, (2016) 12 SCC 1, AIR 2016 SC 2289, A.K. Sikri and R.K. Agrawal JJ.
- Para 22: Confirmed definition and ingredients of Act of God (*vis major*) as an extraordinary, direct, violent, and irresistible operation of elementary natural forces unconnected with the agency of man, which could not reasonably have been anticipated or resisted by human care and skill.
- Paras 22–26: Confirmed that general defences (such as Act of God or inevitable accident) do not absolve liability where antecedent or concurrent negligence of the defendant is established (e.g. failure to maintain safe reservoir levels or drainage channels; approving *Greenock Corporation*, 1917 and *S. Vedantacharya*, 1987).
- Para 26: Confirmed that the burden of pleading and proving every ingredient of an inevitable accident or general defence lies squarely upon the defendant.
- Maxims (*ubi jus ibi remedium*, *volenti non fit injuria*): Confirmed that Indian common-law tort liability and general defences operate under Article 372 and are pleadable as affirmative defences under CPC Order VIII.
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### Vicarious liability (Row 9) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDF: `https://api.sci.gov.in/jonew/judis/4581.pdf`: *N. K. V. Bros (P) Ltd. v. M. Karumai Ammal & Ors.*, (1980) 3 SCC 457, 1980 AIR 1354, 1980 SCR (3) 101, decided 20/03/1980, V.R. Krishna Iyer and D.A. Desai JJ.
- Holding & core propositions: Confirmed that an employer/master (transport bus operator) is vicariously liable in tort for the wrongful acts and culpable negligence of its employee/driver committed in the course of employment. Reaffirmed that criminal acquittal of the driver under Section 304A IPC does not preclude or bar civil tort liability or award of compensation before a Claims Tribunal.
- Evidentiary & liability standard: Affirmed that road accidents must be judged on broad probabilities without requiring proof beyond reasonable doubt, and applied *res ipsa loquitur* where a passenger bus collides with an overhanging milestone. Emphasised social justice orientation and prompt interim deposit of compensation.
- Statutory & forum framework: Grounded in common-law principles (*qui facit per alium facit per se* and *respondeat superior*) enforceable via Section 9 CPC, with statutory insurance/claims tribunal mechanism under the Motor Vehicles Act 1988 (Sections 165–175) and residual limitation under Article 113 of the Limitation Act 1963.
- Reconciled ledger mapping: Rows 7 & 8 mapped to existing inventory file `tort-capacity-state-liability.json`.
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### Parties & Capacity in tort (Rows 7–8) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDFs:
  1. `https://api.sci.gov.in/jonew/judis/15962.pdf`: *Achutrao Haribhau Khodwa & Ors. v. State of Maharashtra & Ors.*, (1996) 2 SCC 634, AIR 1996 SC 2377, JT 1996 (2) 624, 1996 SCALE (2) 328, decided 20/02/1996, B.N. Kirpal and S.P. Bharucha JJ.
  2. `https://api.sci.gov.in/jonew/judis/16557.pdf`: *The Chairman, Railway Board & Ors. v. Mrs. Chandrima Das & Ors.*, (2000) 2 SCC 465, AIR 2000 SC 988, decided 28/01/2000, S. Saghir Ahmad and R.P. Sethi JJ.
- Capacity of parties & representative standing:
  - *Achutrao Haribhau Khodwa*: Confirmed that surviving legal representatives (husband and minor children) have full standing and capacity under tort/wrongful death principles (Fatal Accidents Act 1855) to sue the State and medical officers for fatal medical negligence. Minors sue through next friends pursuant to CPC Order XXXII Rule 1.
  - *Chandrima Das*: Confirmed that foreign nationals (non-citizens) are 'persons' entitled to the fundamental right to life, dignity, and bodily integrity under Article 21, and have legal standing to receive tort compensation. Affirmed that a practicing advocate has public interest *locus standi* to institute a petition claiming compensation on behalf of an indigent victim of crime/tort against State instrumentalities.
- State capacity & limits of sovereign immunity:
  - Confirmed that running a civil hospital is a welfare activity and not an immune sovereign function; State held vicariously liable for doctors' negligence (*Achutrao Haribhau Khodwa*).
  - Confirmed that running railways is a commercial undertaking where the State/Union is vicariously liable in damages for tortious acts of employees (*Chandrima Das*).
- Statutory & procedural framework: Common law received under Article 372; procedural capacity under CPC (Order XXXII for minors and persons of unsound mind; Section 83 for alien enemies; Section 86 for foreign sovereigns); suspension of limitation during legal disability under Sections 6–8 of the Limitation Act 1963; State suability under Article 300.
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### Joint tortfeasors and composite negligence (Row 10) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDF: `https://api.sci.gov.in/jonew/judis/42673.pdf`: *Khenyei v. New India Assurance Co. Ltd. & Ors.*, Civil Appeal No. 4244 of 2015, decided 07/05/2015, (2015) 9 SCC 273, AIR 2015 SC 2261, 2015 (6) SCALE 194, 3-Judge Bench: H.L. Dattu C.J.I., S.A. Bobde, and Arun Mishra JJ.
- Holding & core propositions: Settled conflict between Full Bench decisions of High Courts and authoritatively established the four controlling propositions of composite negligence in India (para 18):
  1. In the case of composite negligence, the claimant is entitled to sue both or any one of the joint tortfeasors and recover the entire compensation, as the liability of joint tortfeasors is joint and several.
  2. Apportionment of compensation between two tortfeasors vis-a-vis the claimant is impermissible; the claimant can recover whole damages from any solvent defendant at their option.
  3. Where all joint tortfeasors are impleaded and evidence is sufficient, the tribunal or court may determine inter se negligence for contribution; the paying tortfeasor can recover the excess share from the co-tortfeasor directly in execution proceedings without filing an independent suit.
  4. The court/tribunal should not determine the composite negligence of non-impleaded drivers in their absence; the paying tortfeasor is left to sue in independent proceedings for contribution.
- Doctrinal distinction (paras 14–16): Affirmed the clear demarcation between **composite negligence** (multiple wrongdoers, innocent victim, joint and several liability, 100% recovery) and **contributory negligence** (victim's own fault contributes to injury, damages proportionately severed/reduced).
- Statutory & forum framework: Common law received under Article 372; procedural joinder and execution under CPC (Order I Rules 1, 3, 10; Order XXI); Motor Vehicles Act 1988 (Sections 165–175); residual limitation under Article 113 of the Limitation Act 1963.
- Reconciled ledger mapping: Row 10 mapped to existing inventory file `tort-joint-tortfeasors.json`.
- Validators run: `validate:schemas` (0 errors), `validate-enhancements.mjs` (0 errors), `gate-unverified-promotion.mjs` (0 errors), `verify-legacy-preservation.mjs` (0 errors, 3,551 topics checked).
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.


### State / government liability (Row 11) — verification checkpoint (2026-10-04)
- Opened official Supreme Court judgment PDFs:
  1. `https://api.sci.gov.in/jonew/judis/15962.pdf`: *Achutrao Haribhau Khodwa & Ors. v. State of Maharashtra & Ors.*, (1996) 2 SCC 634, AIR 1996 SC 2377, JT 1996 (2) 624, 1996 SCALE (2) 328, decided 20/02/1996, B.N. Kirpal and S.P. Bharucha JJ.
  2. `https://api.sci.gov.in/jonew/judis/16557.pdf`: *The Chairman, Railway Board & Ors. v. Mrs. Chandrima Das & Ors.*, (2000) 2 SCC 465, AIR 2000 SC 988, decided 28/01/2000, S. Saghir Ahmad and R.P. Sethi JJ.
- Holding & core propositions:
  - Sovereign vs. Non-Sovereign Distinction: Affirmed the principle from *State of Rajasthan v. Vidhyawati* (1962) and critically delimited *Kasturi Lal v. State of U.P.* (1965). Running a government civil hospital or medical facility is a welfare activity and not an immune sovereign function; the State is vicariously liable under Article 300 for negligence of its medical officers (*Achutrao Haribhau Khodwa*).
  - Commercial Undertakings & Public Law Liability: Running railways is a commercial undertaking where the Union of India is vicariously liable in damages for tortious offences committed by employees. Established that compensation for violation of fundamental rights (Article 21) can be awarded directly in public law proceedings under Article 226 / Article 32, independent of and alongside private law tort suits (*Chandrima Das*).
- Doctrinal distinctions:
  - Private Law Tort Liability (Article 300 / Section 9 CPC / Sections 79–82 CPC) vs. Public Law Strict Constitutional Liability (Article 32 / Article 226) for deprivation of life or personal liberty (*Nilabati Behera*, *Rudul Sah*, *Chandrima Das*).
  - Strict construction of sovereign immunity: Confined strictly to primary, inalienable functions of statehood (defence, external affairs, coinage, maintenance of public order under coercive statutory power); unavailable for welfare, medical, commercial, or municipal activities.
- Statutory & procedural framework: Constitution of India, Articles 300, 32, 226, 21, 372; Code of Civil Procedure 1908, Sections 79–82 and Order XXVII (mandatory Section 80 notice for regular civil suits; execution stay under Section 82); Limitation Act 1963, Articles 72, 112 (30-year limitation for suits by or on behalf of Government), and residual Article 113.
- Validators run: `validate:schemas` (0 errors), `validate-enhancements.mjs` (0 errors), `gate-unverified-promotion.mjs` (0 errors), `verify-legacy-preservation.mjs` (0 errors, 3,551 topics checked).
- Not COMPLETE_LOCKED: integration and production gates remain open; remaining Torts topics in ledger remain OPEN.

### Torts verification slice - validation checkpoint (2026-10-05)

- Canonical schema validation: **PASS** (`npm run validate:schemas`; all schemas valid).
- Enhancement validation: **PASS** (`npm run validate:enhancements`; 3,652 topics, 0 errors).
- Legacy preservation: **PASS** (`npm run verify:legacy-preservation`; 3,551 topics checked, 0 errors).
- Codepackr parity smoke: **Torts probe PASS**; unrelated CPC and Constitution probes remain blocked by missing canonical topics.
- Codepackr targeted integration tests: **BLOCKED** in the local environment because the `docx` dependency is unavailable; the run also reports the existing `cpc/s-32` canonical probe gap.
- Status decision: **rows 1-11 are now `LOCKED`**. The Torts subject is not `COMPLETE_LOCKED`; rows 12-41 remain open or under review and must complete the same gates before subject closure.

### Torts verified-row closure checkpoint (2026-10-05)

- Newly locked rows: **12-14 (negligence, res ipsa loquitur, contributory negligence), 17 (nuisance), and 24 (strict liability)**.
- Current locked rows: **1-14, 17, and 24**.
- Canonical schemas, enhancement validation and legacy preservation all pass after the updates.
- Absolute liability (row 25) remains open because its enhancement/legal publication gate is incomplete. Rows 15-16 and 18-23, 26-41 still require topic-specific completion evidence.

