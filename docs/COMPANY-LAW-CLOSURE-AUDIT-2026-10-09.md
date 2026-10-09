# Company Law closure audit — 2026-10-09

Status: **NOT CLOSED**. Enhancement of a claimed batch is recorded. Subject-level COMPLETE_LOCKED is not claimed.

## Authority used
- `docs/WORK-CONTROL-MASTER-2026-10-08.md` (active control; older sprint files are historical).
- `AGENTS.md` and the content-gateway rule that `legal-content` is the canonical content boundary.
- Latest `main` at audit start: `15e4392ded402cd3a26583948f2246abc0394a1b`.
- No open ownership claim for this range was present in the working tree.

## Inventory
Machine-readable inventory: `docs/batches/company-law-task-inventory-2026-10-09.json`.

| Item | Count |
|---|---:|
| Registered Company Law topic files | 561 |
| Section files (`ca-s-*`) | 525 |
| Doctrinal files (`company-*`) | 36 |
| Substantive coverage before this batch | 62 |
| Substantive coverage after this batch | 123 |
| Remaining `assembled-from-migrated` scaffolds | 438 |

Substantive here means `content.enhancement.coverage = substantive-topic-specific-v1`. It does **not** mean legally verified or published.

## This batch
Claimed range: section topics `ca-s-2`, `ca-s-6`, `ca-s-63`, `ca-s-66`, `ca-s-67`, `ca-s-68`, `ca-s-71`, `ca-s-73`, `ca-s-76a`, `ca-s-77`, `ca-s-90`, `ca-s-123`, `ca-s-128`, `ca-s-139`, `ca-s-149`, `ca-s-164`, `ca-s-166`, `ca-s-173`, `ca-s-177`, `ca-s-188`, `ca-s-196`, `ca-s-230`, `ca-s-248`, `ca-s-253`, `ca-s-447`, and the 36 doctrinal `company-*.json` topics.

Completion criterion for the batch: each file has a section-specific principle, ingredients, explanation, example and an explicit verification note. Legacy ids were preserved. Status left at `review`. Case-law arrays were not filled.

## Verification limits
- Marginal headings for the Act were checked against the Corporate Law Reporter section index (updated on that site to 7 October 2026) and standard Act structure.
- Operative wording and commencement were **not** re-fetched section-by-section from India Code in this batch. Enhancement verification status is `SOURCE_CHECK_REQUIRED`.
- No judgment was added. `caseLawGate` remains `verification_required`.
- Section 253 is recorded as omitted Chapter XIX, not as current sick-company procedure. Section 195 is recorded, on the insider-trading topic, as omitted in favour of the SEBI Act and PIT Regulations.
- Topics are not marked `verified` or `published`.

## Not done — blockers to closure
1. 438 section files remain generic scaffolds (`assembled-from-migrated`).
2. Case-law verification has not been run against primary reports for Company Law.
3. India Code text and amendment commencement have not been attached as sources (`sources` arrays remain empty).
4. SEO, production-resolution and COMPLETE_LOCKED gates in the work-control master are open.
5. `codepackr-law` still carries local topic modules. This batch was mirrored for the 61 upgraded topics only. Full catalog integration is not a verified production publish.

## Validation actually run
- JSON parse of all 561 company topic files: passed.
- Required topic keys and `overview` present on upgraded files: passed.
- Upgraded files use schema status `review` (allowed). Pre-existing files still use `status: verification_in_progress`, which is outside `schemas/topic.schema.json` and was not introduced by this batch.
- `npm` dependencies were not installed in this environment, so `node scripts/validate.mjs` was not executed. That check is not reported as passed.
