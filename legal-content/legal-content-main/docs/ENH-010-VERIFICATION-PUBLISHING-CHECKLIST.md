# ENH-010 — Verification and publishing acceptance checklist

A topic may not be marked `verified` or `published` because an enhancement object exists, a batch report passes, or a script completed.

Use this checklist for one topic at a time. Record the result in `content.enhancement.verification`. Leave the topic `in-progress` if any required gate fails.

## 1. Identity

- [ ] Subject, Act, and exact section, article, order, or doctrine identifier match the file.
- [ ] Official title matches the current text, or the historical title is labelled historical.
- [ ] `legacySubjectSlug` and `legacyTopicId` are still present.
- [ ] Baseline overview and section text are still present (`scripts/protect-baseline-substantive.mjs`).

## 2. Current law

- [ ] Statutory text was checked against an authoritative source (India Code, Gazette, or the Constitution as amended).
- [ ] Commencement, repeal, savings, and transition are stated only where the provision has them.
- [ ] BNS, BNSS, and BSA are not treated as identical to IPC, CrPC, or the Evidence Act.
- [ ] Repealed or omitted provisions are not described as living law.

## 3. Substance

- [ ] Definition says what this provision does, not only the chapter heading.
- [ ] Ingredients or conditions match the provision type. A definition is not written as an offence.
- [ ] Examples fail if the section number can be swapped without changing the facts.
- [ ] 10-mark and 16-mark structures, if present, use this provision's rule.
- [ ] No generic template phrase is the only analysis.

## 4. Authorities

- [ ] Every case has a name, court, year, and a citation that was checked.
- [ ] The ratio is not stated more broadly than the holding.
- [ ] Predecessor-law cases are labelled predecessor-law, not direct interpretation of the new section.
- [ ] If no direct authority was checked, the field says so. An empty case list is acceptable.

## 5. Sources

- [ ] At least one authoritative source is named.
- [ ] A URL, if given, is the official source, not a blog or generated summary.
- [ ] `verification.lastVerifiedAt` and `verifiedBy` are filled only after the checks above.
- [ ] Notes record what was checked and what was not.

## 6. Publishing

Publishing is a separate step after verification.

- [ ] Enhancement status is `verified`.
- [ ] Topic envelope status may move from `review` to `published` only after this checklist passes.
- [ ] No script may set `published` in bulk.
- [ ] The product may show an in-progress note, but it must not label it verified.

## 7. Rejection rules

Reject the promotion if any of these are true:

- the enhancement is the scaffold that says no case law was invented;
- the definition is shared unchanged across unrelated sections;
- a citation, holding, or section mapping was not checked;
- baseline substantive text was shortened.

## 8. Evidence

Record the checklist result in the subject progress report. A subject is verification-complete only when every real topic in that subject passes this checklist.
