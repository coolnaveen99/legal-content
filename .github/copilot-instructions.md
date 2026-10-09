# Copilot Instructions — legal-content

## Repository Scope

- This repository is `coolnaveen99/legal-content`.
- Work ONLY within this repository unless the user explicitly requests otherwise.
- Do NOT use, reference, copy from, or treat `coolnaveen99/codepackr-law` as a source of truth for legal content.
- Do not import legal propositions, topic structures, case summaries, or assumptions from another repository merely because they appear relevant.
- The content in this repository is intended for legal-information use and must be handled conservatively.

## Core Legal-Content Rule

Existing content is NOT automatically correct.

Never assume that an existing JSON file, explanation, summary, case note, provision note, or generated text is legally accurate simply because it already exists in the repository.

For every substantive legal change, follow this order:

**VERIFY → CORRECT → STRUCTURE → ENHANCE**

Do NOT follow:

**EXISTING CONTENT → AI POLISHING → MORE CONFIDENT WORDING**

AI is an editor and verification assistant, not the legal authority.

## Verification Before Enhancement

Before changing a substantive legal proposition:

1. Identify the exact legal claim being made.
2. Identify the relevant statute, provision, rule, notification, judgment, or other authority.
3. Verify the claim against the strongest reasonably available authoritative source.
4. Determine whether the existing statement is:
   - CORRECT
   - PARTIAL
   - INCORRECT
   - UNVERIFIED
   - OUTDATED
5. Correct only when the correction is supported by an authoritative source.
6. Only after verification improve clarity, organization, examples, or explanation.

If authoritative verification is unavailable, do NOT guess. Preserve the existing statement where appropriate and flag it as requiring source verification rather than generating a plausible legal answer.

## Never Invent Legal Authority

Never invent or hallucinate:

- statutory sections, subsections, clauses, provisos, explanations, illustrations, schedules, or definitions
- Acts, rules, regulations, notifications, circulars, orders, or amendments
- case names, citations, neutral citations, docket numbers, dates, judges, benches, paragraph numbers, holdings, ratios, facts, or procedural history
- legal tests, ingredients, elements, exceptions, presumptions, burdens, remedies, penalties, limitation periods, forums, or jurisdictional rules
- quotations or purported quotations from legislation or judgments
- historical or current legal status
- relationships between statutes unless they are actually established and relevant

If a detail cannot be verified, do not manufacture it.

## Authority Hierarchy

Prefer sources in this general order:

1. Official legislation, gazettes, government publications, and official statutory sources.
2. Official Supreme Court, High Court, tribunal, or other competent court/authority sources.
3. Official notifications, rules, regulations, circulars, and authoritative government material.
4. Reliable primary legal databases or authoritative repositories where primary material is reproduced.
5. Reputable secondary commentary only for explanation or context, never as a substitute for primary authority when the primary authority is available.

Existing repository content is not itself proof of a legal proposition.

## Cross-Subject Contamination Prevention

Every topic must be checked for subject and statutory scope before substantive editing.

For each file, identify:

- jurisdiction
- subject
- governing Act/statute
- provision/section range
- relevant legal domain
- whether referenced authorities are actually relevant

Do not automatically insert material from another statute merely because it sounds legally sophisticated.

For example, an Indian Contract Act topic must not acquire unrelated BSA 2023, BNSS, BNS, Constitution, CPC, Limitation Act, Evidence Act, procedural, or other statutory material unless:

1. the connection is genuinely relevant to the topic,
2. the relationship is explicitly explained,
3. the legal proposition is verified, and
4. the authority is accurately identified.

If unrelated or unsupported material is found, classify it as:

**CROSS_SUBJECT_CONTAMINATION**

and correct/remove it only when the correction is supported.

## Statutory Scope

When editing a provision-specific topic:

- keep the explanation centered on the specified provision(s)
- distinguish statutory text from interpretation
- distinguish interpretation from practical explanation
- do not silently broaden a section-level topic into an entire Act
- do not add procedural or evidentiary material merely to make the content appear more comprehensive
- verify amendment/current-status issues before stating that a provision is currently in force

A more detailed answer is NOT necessarily a better legal answer.

## Judgment and Case Content

Judgment content requires especially strict verification.

Before adding or materially changing a case reference, verify as much as possible from an authoritative judgment source:

- exact case name
- parties
- court
- date
- citation
- bench/judges
- relevant paragraph numbers
- material facts
- issue
- decision/holding
- ratio or legal principle
- subsequent treatment where relevant

Do not infer a case's ratio merely from its title or from a secondary summary.

Do not create a case citation to make a topic look authoritative.

Clearly distinguish:

- what the judgment actually decided
- later interpretation of that judgment
- repository/editorial explanation

## Enhancement Rules

Once legal accuracy is verified, enhancement may improve:

- clarity
- structure
- readability
- headings
- concise summaries
- practical explanation
- examples clearly labelled as examples
- issue/analysis/conclusion organization
- senior-counsel-level reasoning where supported by authority

Enhancement must NOT introduce new unsupported legal propositions.

Do not make wording more certain merely because the underlying proposition is uncertain.

## Source and Verification Status

Where the repository schema supports verification metadata, use explicit statuses such as:

- `UNVERIFIED`
- `SOURCE_CHECK_REQUIRED`
- `VERIFIED`
- `INCORRECT`
- `CORRECTED`
- `FINAL_VERIFIED`

Never mark content `VERIFIED` merely because an AI model generated, reviewed, or rewrote it.

A model review is not authoritative legal verification.

## Existing Content Audit

When asked to improve an existing topic:

1. Read the complete relevant file before making substantive edits.
2. Identify potentially incorrect, unsupported, outdated, or cross-subject statements.
3. Verify substantive claims before rewriting them.
4. Preserve correct material unless there is a clear reason to improve it.
5. Avoid unnecessary wholesale rewrites.
6. Keep unrelated files unchanged.

If a screenshot, diff, or proposed AI edit shows a statement that looks legally plausible but has not been verified, treat it as unverified rather than accepting it.

## JSON and Repository Integrity

When editing JSON legal-content files:

- preserve valid JSON syntax
- preserve the repository's existing schema unless a schema change is explicitly requested
- do not remove required fields
- do not silently rename schema fields
- do not change identifiers merely for style
- keep terminology consistent with the repository
- validate the resulting JSON
- avoid unrelated formatting churn

Do not modify unrelated subjects or files while working on a focused topic.

## Change Discipline

For every task:

- inspect the relevant existing content first
- make the smallest safe set of changes
- separate legal corrections from stylistic enhancements
- do not create content merely to increase file length
- do not add citations or authorities that have not been verified
- do not conceal uncertainty

If verification cannot be completed, prefer a transparent `SOURCE_CHECK_REQUIRED` outcome over a confident but unsupported legal statement.

## Final Quality Gate

Before considering a legal-content change complete, check:

1. Is the JSON valid?
2. Is the topic/subject correct?
3. Is the governing statute/provision correct?
4. Were substantive claims verified?
5. Did any unsupported legal claim get introduced?
6. Did any case citation or judgment detail get invented?
7. Is there cross-subject contamination?
8. Did the change accidentally broaden the topic?
9. Are uncertain claims clearly identified?
10. Did the edit improve the content without making unsupported claims sound authoritative?

## Response/Work Summary

After completing a substantive edit, report:

- files changed
- substantive legal corrections made
- verification/source status
- cross-subject issues found
- any remaining `SOURCE_CHECK_REQUIRED` items
- validation performed

Do not claim that content is legally verified unless actual authoritative verification was performed.

## Git / Branch Rule

For repository work requested by the user:

- Make the requested changes directly on the repository's `main` branch when the user explicitly asks for direct main-branch work.
- Do NOT create a pull request when the user explicitly says not to create one.
- Do NOT create a feature branch unless the user explicitly requests one.
- Keep commits focused and use a clear commit message describing the change.


## 2026-10-09 Roadmap: complete core coverage and staged publication

The Work Control Master remains the sole work-selection and ownership authority. Preserve the existing VERIFY → CORRECT → STRUCTURE → ENHANCE order for each substantive proposition; a broad enhancement pass must not invent or assert unverified law as current. Every registered section, Article, provision and doctrinal topic must receive the required topic-specific depth, regardless of High/Medium/Low-Yield labels. Yield labels must not determine omission, depth, legal verification, validation or closure. Lock the enhancement baseline separately from `COMPLETE_LOCKED`.

Publish subjects in rolling releases only after their applicable minimum legal/source, content-quality, technical and publication gates pass. Continue corpus-wide current-law verification after eligible releases; correct and deploy verified material defects promptly through the canonical content path. After required verification and integrated validation/E2E pass, add judgments by subject/section, then conduct a dedicated Supreme Court judgment coverage pass. A separate optional High-Yield Study Guide is final-stage supplementary work and must not replace the complete legal library. Preserve all existing schemas, IDs, source hierarchy, ownership, SEO/production, sign-off, and closure gates. Protect reviewer capacity and leave unsupported items in SOURCE_CHECK_REQUIRED/BLOCKED rather than guessing. See `docs/SPRINT-MEETING-2026-10-09-ROADMAP-AND-YIELD-POLICY.md`.
