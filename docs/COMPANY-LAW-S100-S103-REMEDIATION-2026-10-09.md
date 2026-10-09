# Company Law sections 100–103 source remediation — 2026-10-09

**Status: IN PROGRESS — NOT CLOSED.** All four canonical topics remain `verification_in_progress`; their inventory verification field remains `SOURCE_CHECK_REQUIRED`. No topic is marked verified or published. Company Law remains open.

## Ownership and conflict check
- Canonical repository: `coolnaveen99/legal-content`, branch `main`.
- App mirror: `coolnaveen99/codepackr-law`, branch `main`.
- Before work, the inventory entries for `ca-s-100.json` through `ca-s-103.json` had `bot: null` and `SOURCE_CHECK_REQUIRED`.
- No open Company Law pull request was found in either repository during the check.
- The four exact inventory entries and the authoritative work-control record were claimed before substantive edits under `current-assistant-company-s100-s103`.
- Section 106 and sections 107–113 were not selected because the inventory shows them assigned to another worker.

## Work performed
- Added source records `sources/india-code-companies-act-2013-s-100.json` through `s-103.json`, each pointing to the official Ministry of Corporate Affairs Act PDF. The record status is review/reviewed for source discovery, not full amendment verification.
- Replaced generic scaffold material in the four canonical topics with section-specific explanations:
  - **Section 100:** Board power, member requisition threshold, requisition form/delivery, 21-day/45-day timetable, requisitionists’ three-month period and expense rule.
  - **Section 101:** clear 21-day notice, distinct shorter-notice consent thresholds, required particulars and recipients, and accidental omission/non-receipt rule.
  - **Section 102:** material-facts statement, specified interest disclosures, ordinary/special business distinction, and a caution to verify current penalty/exemption text.
  - **Section 103:** public/private quorum thresholds, articles, half-hour rule, Board-called adjournment versus requisitionists’ cancellation, notice and adjourned-meeting rule.
- Removed unrelated BSA/electronic-evidence material from the section-specific provisions and study text. No section-specific judgment was added; unrelated template cases were removed and the absence of verified section-specific judgments is explicit.
- Mirrored the canonical explanations to `src/data/topics/company/ca-s-100.ts` through `ca-s-103.ts` in the app repository.

## Focused validation
A post-write check successfully parsed all four topic JSON files and all four source JSON files and confirmed for every section:
- topic/source entity shape and valid JSON;
- official MCA source URL host and source ID attached to the topic;
- substantive section-specific study text and four ordered modules;
- no BSA provision contamination in the topic provisions/study;
- no fabricated case citations;
- topics remain in verification rather than verified/published status;
- local app module contains the matching canonical glance text;
- related-topic references follow the expected section-ID format.

This was a focused structural/reference check, not a passing repository-wide validator, TypeScript build, E2E suite or legal sign-off. The current official Act text was checked for the section rules; full amendment, rules, exemptions, notifications, company-specific modifications, case-law verification, SEO/noindex and production gates remain open.

## Commits
Canonical source records:
- s. 100: `ac6d5986be89cba8d41b79e60d7882a8c3ae6b86`
- s. 101: `ac10adad1d69983e5a18a92ec27570e4f700bccf`
- s. 102: `5c0fbb76f7e7c76b570a74087627e2127e5cf9fc`
- s. 103: `9a3402d428d67c32c51cab2b77f1b73bcf938b1b`

Canonical topic edits:
- s. 100: `6ed90ad3ac98b2da154b3ee9ca7abf70b076cac0`
- s. 101: `3d7b55993ad46a41ea1ec64a2ca9a622d30c93e6`
- s. 102: `cedc721e4e2dff25e4146f6d350dad99ff244dff`
- s. 103: `d60d1c9086f6bd849535eccceed97d7452bfe974`

App mirrors:
- s. 100: `5a4770d00f39209df922ec048d471e3037cd3ef2`
- s. 101: `45d8bf80f2273d563588059fbda0e3f5bb6949f9`
- s. 102: `1a3f035759496d06e3d011cd796bd7007041a8d5`
- s. 103: `b332c2110c058644acf197c688abb412d7596865`

## Remaining gates
- Full current-law verification of all amendments, rules, exemptions and notifications.
- Independent case-law verification; no cases have been added by this task.
- Passing repository-wide legal-content validation and app typecheck/build/E2E evidence.
- SEO/canonical/noindex and production verification.
- Subject-wide completion remains open.


## Amendment-reconciliation follow-up — sections 101–102

The initial focused pass did not sufficiently distinguish the original 2013 text from subsequent amendments. A further official-source check identified missing/current-law details and these were corrected rather than leaving the initial summary as-is.

- **Section 101:** attached the official Companies (Amendment) Act, 2017, sections 27–28 source. The shorter-notice rule now distinguishes AGM consent (at least 95% of members entitled to vote) from other meetings (for a company with share capital, a majority in number plus at least 95% of voting paid-up share capital; for a company without share capital, at least 95% of voting power). Added the proviso that a member entitled to vote only on particular resolutions is counted only for those resolutions.
- **Section 102:** attached the official Companies (Amendment) Act, 2019, section 16 source. Added the 2% shareholding disclosure threshold for interests in another company affected by the special business, inspection particulars for referenced documents, the benefit-in-trust/compensation consequence, and the current subsection (5) penalty wording: ₹50,000 or five times the benefit, whichever is higher. Removed the inaccurate generic statement about a knowledge-based exception framework.
- Canonical topics remain `verification_in_progress`, inventory gate remains `SOURCE_CHECK_REQUIRED`, and no case-law or publication gate is marked complete.
- Source records: `sources/companies-amendment-act-2017-sections-100-101.json`, `sources/companies-amendment-act-2019-section-102.json`.
- Canonical commits: `4ad412cd69ec3e20df20ee4948fd592dc194fd49` (s. 101), `de1a32c7b937311210969422b5ff2d216d3a3124` (s. 102); source commits `c1ee496b7033b04f57cee5faf025b7bd61f794a3`, `fa94128e8714ac2fca23280a4b0b7d8f1a24e307`.
- App mirror commits: `1134b2224201ddd86c5fa58d30dc887036786a23` (s. 101), `7cd216a4c833a32cc5a863ad8462cd3b4879e74d` (s. 102).
- Validation is focused JSON/source-reference/content-parity checking only; full build, E2E, all applicable meeting rules, company-specific exemptions, and independent case-law review remain open.


## Follow-up applicability check — One Person Companies (2026-10-09)

The principal Act's section 122(1) expressly disapplies sections 98 and 100–111 to a One Person Company (OPC). Sections 100–103 now carry an explicit applicability warning: do not apply their ordinary meeting mechanics to an OPC; section 122(2)–(3) provides a separate procedure for ordinary business otherwise transacted at an AGM. This is an important scope limitation, not a claim that all company-specific exemptions or rules have been exhausted.

- Added official source record: `sources/companies-act-2013-s-122-opc-exemption.json` (Companies Act, 2013, section 122(1)–(3), MCA official Act PDF).
- Canonical commits: s.100 `9d25a1c08af3a5844b886df985ee169913153bfa`; s.101 `562ee02f278d9ab404104f73eea792628b776259`; s.102 `68973cf449bec23c1b60ddc7600626f3a4b5c7f2`; s.103 `0aa110abc69895a0634773e4f5d06a2b502b6970`.
- App mirror commits: s.100 `6dff3d3ef372e5c3f93bd2b4aa328b2db64ceeca`; s.101 `bc5fdac7f41ce695137dd3992c735ac3862c3fb2`; s.102 `ca1fd0ae283c61f616c5ebe96ddfb1f1c5e9f7fd`; s.103 `d875daf538f371df6bda658e217f9f4f20b285dc`.
- Focused JSON/source/content parity checks remain required after this update. Full rule/exemption review, case-law verification, full repository validation, build/E2E, SEO and production gates remain open. Topics remain `verification_in_progress`; no legal sign-off is claimed.


## Rule 17 follow-up — section 100 requisitionists’ EGM (2026-10-09)

A further meeting-rules check identified that section 100 alone does not capture all procedural requirements for a requisitionists-convened EGM. Section 100’s study and app mirror now add a distinct Rule 17 overlay covering: clear 21 days’ notice before the proposed date; notice particulars; venue at the registered office or same city/town and no national holiday; signatures/authorisation; section 114(2) notice if a special resolution is proposed; Rule 17(5)’s statement that a section 102 explanatory statement need not be annexed to a requisitionists-convened EGM notice; member notice/delivery; accidental omission/non-receipt; and the member-list mechanism if the company does not convene.

- Rule text source record: `sources/companies-management-administration-rules-2014-rule-17.json`, based on the ICSI e-book reproduction at https://e-book.icsi.edu/Actpagedisplay.aspx?PAGENAME=18033, which notes the 2016 substitution of “on any day except national holiday” for “on working day”.
- Source record commit: `84e9941f81c2210a852b46992edbd2477e469100`.
- Canonical section 100 commit: `091f6e3c248843f17b61267f085e55637ca5299f`.
- App mirror section 100 commit: `f411c78e948882b95e0ae5e08ed8c2b7fd81ee2e`.
- **Qualification:** the rule source is a professional-institute reproduction, not a Gazette-primary copy. The note expressly leaves Gazette-primary confirmation open; do not treat this as final current-law verification.
- Section 100 remains `verification_in_progress`; inventory gate remains `SOURCE_CHECK_REQUIRED`. Rule/exemption review for sections 100–103, independent case-law review, repository-wide validation, app build/E2E, SEO/noindex, production and qualified legal sign-off remain open.
