# BNS Section 70 Liability and BSA Section 120 Scope Audit — 2026-10-09

**Repository:** `coolnaveen99/legal-content`  
**Branch:** `main`  
**Scope:** BNS topics 63, 64 and 70; targeted statutory cross-reference and legal-commentary corrections. No topic was promoted from `review`.

## Findings and corrections

### BSA Section 120 scope

The Bharatiya Sakshya Adhiniyam, 2023, section 120 is the provision titled “Presumption as to absence of consent in certain prosecution for rape”. Its scope is a prosecution for rape under BNS section 64(2), subject to the statutory prerequisites concerning proof of intercourse by the accused and the woman's statement in court that she did not consent. It must not be presented as a blanket presumption applying to every rape or gang-rape charge.

Official BSA text: https://www.indiacode.nic.in/indiacode/bitstream/123456789/20063/1/aa202347.pdf

Changes made:
- Corrected references to BSA section 115 in section 63 commentary, Q&A, answer skeleton and exam frameworks.
- Tightened section 63/64 wording so the statutory scope and prerequisites are explicit.
- Removed the section 70 study-note statement that contradicted its own scope warning by claiming a blanket presumption against all gang-rape accused.
- Replaced “irrebuttable statutory legal fiction” and categorical “mere presence” claims with wording tied to the statutory deeming language and proof of group/common-intention circumstances.

### Section 63 anatomy commentary

Narrowed the overbroad statement that any contact with labia majora necessarily establishes the actus reus. Explanation 1 must be read with the remaining statutory ingredients and the facts; commentary should not turn a definitional explanation into a categorical conclusion about every fact pattern.

## Verification performed

- Re-fetched current-main topic files for sections 63, 64 and 70 after changes.
- Checked for remaining references to “BSA s. 115”, “Section 115 BSA”, and “Section 115 of the Bharatiya Sakshya Adhiniyam” in those files.
- The topics remain `review`.
- This targeted pass does not constitute full section-by-section statutory reconciliation, primary-judgment verification, current-law sign-off, or subject closure.

## CI result and blocker

Latest full validation runs failed at `validate:enhancements`; the workflow then skipped later final verification, relationship, production, release and rollback gates. The job log reports 1,177 enhancement-field errors across 3,677 topics, including missing required fields on Constitution topics. No generic placeholder enhancement data was added to BNS to bypass the catalogue-wide validator.

- Run: https://github.com/coolnaveen99/legal-content/actions/runs/37881355982
- Run: https://github.com/coolnaveen99/legal-content/actions/runs/37881355961

## Disposition

BNS remains **OPEN**. Next work remains: full statutory word-by-word comparison, current central/state law and commencement checks, source-backed judgment/proposition audit, canonical inventory, successful full-catalog validation, integration/SEO, production/release/rollback evidence and qualified human legal sign-off.

## Additional Section 69 hypothetical correction — 2026-10-09

A follow-up review found the Section 69 hypothetical treated alleged deceit as conclusive, assumed that an existing marriage automatically proved the offence, presented the statutory “identity” limb too broadly, and categorically stated that psychological deceit means the conduct cannot amount to rape. These were overstatements. The hypothetical has been rewritten to require separate analysis of the applicable Section 69 limb, the statutory phrase “marrying by suppressing identity”, intention and causation, the precise facts/holdings of cited cases, and the Section 63 rape exclusion. The answer now calls for a reasoned conclusion based on proved ingredients rather than treating the hypothetical's characterization as conclusive.

**Source anchor:** Section 69's operative wording is available in the official India Code BNS Act text: https://www.indiacode.nic.in/indiacode/bitstream/123456789/20062/1/a202345.pdf. This correction does not certify the cited judgments; primary-judgment verification remains a separate open gate.

