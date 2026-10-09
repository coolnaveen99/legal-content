# Section-Level Legal Content Completion Checklist

**Purpose:** Standard control checklist for every statutory section, constitutional article, doctrine, rule, or substantive law topic.

**Canonical rule:** A subject is never considered complete because only a few sections are pending. Every applicable inventory item must be explicitly mapped and pass the required gates.

## 1. Mandatory lifecycle

Every inventory item follows:

`INVENTORY → REPOSITORY MAP → GAP CHECK → ENHANCE → SOURCE VERIFY → CASE VERIFY → LEGAL VALIDATE → CONTENT VALIDATE → INTEGRATE → PRODUCTION CHECK → COMPLETE/LOCKED`

A later stage must never be marked complete merely because an earlier stage passed.

## 2. Standard section record

Each section/topic must have a trackable record containing:

- Subject
- Act/constitutional source
- Chapter/Part
- Section/article/rule identifier
- Sub-section/sub-clause coverage where applicable
- Canonical topic file/path
- Legacy/migrated identity
- Inventory status
- Enhancement status
- Statutory verification status
- Case-law verification status
- Content validation status
- Relationship/cross-reference status
- Product integration status
- Production validation status
- Final status
- Last verified date
- Evidence/commit
- Reopen reason/date when applicable

## 3. Gate A — Full subject inventory

- [ ] A01 Identify the authoritative Act/constitutional source.
- [ ] A02 Record complete section/article/rule range.
- [ ] A03 Record chapters/parts/schedules where relevant.
- [ ] A04 Record every applicable sub-section/sub-clause.
- [ ] A05 Record inserted, omitted, repealed, substituted and transitional provisions.
- [ ] A06 Record important non-statutory curriculum topics where the subject requires them.
- [ ] A07 Freeze the inventory version/date.
- [ ] A08 Produce total inventory count.

**Exit condition:** No unexplained gap in the authoritative subject inventory.

## 4. Gate B — Repository mapping

For every inventory item:

- [ ] B01 Locate canonical topic file.
- [ ] B02 Confirm identifier matches the authoritative provision.
- [ ] B03 Preserve legacy/migration identity.
- [ ] B04 Check duplicate/renamed topic mappings.
- [ ] B05 Check related-topic mappings.
- [ ] B06 Mark MISSING if no canonical topic exists.
- [ ] B07 Do not assume an unlisted item is complete.

**Exit condition:** Every inventory item is either mapped or explicitly recorded as MISSING/NOT-APPLICABLE with evidence.

## 5. Gate C — Enhancement completeness

For every mapped substantive topic:

- [ ] C01 Learning objectives
- [ ] C02 Definition/core concept
- [ ] C03 Legal principle/doctrine
- [ ] C04 Statutory framework
- [ ] C05 Essential ingredients/elements
- [ ] C06 Detailed student explanation
- [ ] C07 Practical examples/illustrations
- [ ] C08 Distinctions/comparisons where relevant
- [ ] C09 Relevant case law
- [ ] C10 Problem/application analysis
- [ ] C11 Short-answer structure
- [ ] C12 10-mark answer structure
- [ ] C13 16-mark answer structure
- [ ] C14 Key takeaways
- [ ] C15 Authoritative sources
- [ ] C16 Verification metadata

### Enhancement quality rules

- [ ] C17 Explanation is section/topic-specific, not generic boilerplate.
- [ ] C18 Examples actually reflect the legal rule.
- [ ] C19 Case law is relevant to the proposition.
- [ ] C20 Existing substantive content is preserved.
- [ ] C21 Enhancement adds value beyond bare statutory text.
- [ ] C22 No unsupported legal conclusion is introduced.
- [ ] C23 Student answer material is sufficiently developed for the topic.

**Exit condition:** All required fields exist and pass substantive quality checks.

## 6. Gate D — Statutory/current-law verification

- [ ] D01 Open authoritative current source.
- [ ] D02 Verify section/article heading.
- [ ] D03 Verify operative statutory text/provision.
- [ ] D04 Verify sub-sections/sub-clauses.
- [ ] D05 Verify provisos/explanations/illustrations where applicable.
- [ ] D06 Check amendment history/current status.
- [ ] D07 Check repeal/substitution/savings/transitional effect.
- [ ] D08 Check cross-references.
- [ ] D09 Record authoritative source URL.
- [ ] D10 Record verification date.
- [ ] D11 Record verification evidence.

**Exit condition:** Current-law proposition is substantively checked. Do not mark verified based only on an AI-generated summary.

## 7. Gate E — Case-law verification

Where case law is used:

- [ ] E01 Confirm case name.
- [ ] E02 Confirm court.
- [ ] E03 Confirm year.
- [ ] E04 Confirm citation where available.
- [ ] E05 Open an authoritative judgment source where available.
- [ ] E06 Verify the proposition attributed to the case.
- [ ] E07 Distinguish holding from observation/obiter where relevant.
- [ ] E08 Check whether later law has modified/overruled/limited it.
- [ ] E09 Remove unsupported or uncertain cases.
- [ ] E10 Record case verification evidence.

**Exit condition:** Every relied-upon case proposition is supported or explicitly flagged as unverified.

## 8. Gate F — Legal/content validation

- [ ] F01 JSON/schema validation passes.
- [ ] F02 Required enhancement fields pass.
- [ ] F03 No malformed references.
- [ ] F04 No broken source/case links.
- [ ] F05 No contradictory proposition inside the topic.
- [ ] F06 Cross-topic references resolve.
- [ ] F07 Old-law/new-law terminology is correctly distinguished.
- [ ] F08 No accidental shortening of baseline content.
- [ ] F09 No duplicate topic silently replaces another topic.
- [ ] F10 Subject progress report updated.

## 9. Gate G — Product integration

- [ ] G01 Canonical topic route resolves.
- [ ] G02 Topic title/identifier renders correctly.
- [ ] G03 Legacy content remains visible.
- [ ] G04 Enhancement sections render correctly.
- [ ] G05 Case-law/source links work.
- [ ] G06 10-mark answer content renders.
- [ ] G07 16-mark answer content renders.
- [ ] G08 Mobile layout passes.
- [ ] G09 Search discovers the topic.
- [ ] G10 No legacy fallback hides canonical-content failures.

## 10. Gate H — Production validation

- [ ] H01 TypeScript/build gate passes.
- [ ] H02 Unit/regression tests pass.
- [ ] H03 Content validation passes.
- [ ] H04 Route smoke test passes.
- [ ] H05 Search smoke test passes.
- [ ] H06 Accessibility regression passes where applicable.
- [ ] H07 Performance regression passes where applicable.
- [ ] H08 SEO/canonical metadata passes.
- [ ] H09 Sitemap/indexing generation passes.
- [ ] H10 Production smoke test passes.
- [ ] H11 Rollback/recovery point recorded.

## 11. Final status rules

Use only these states:

- `NOT_INVENTORIED`
- `INVENTORIED`
- `MISSING`
- `MAPPED`
- `ENHANCEMENT_IN_PROGRESS`
- `ENHANCED`
- `VERIFICATION_IN_PROGRESS`
- `VERIFIED`
- `VALIDATION_IN_PROGRESS`
- `VALIDATED`
- `INTEGRATION_IN_PROGRESS`
- `INTEGRATED`
- `PRODUCTION_VALIDATED`
- `COMPLETE_LOCKED`
- `REOPENED`

### Lock rule

`COMPLETE_LOCKED` may be used only when all applicable gates pass.

A locked item must be skipped in future enhancement batches unless one of these reopening triggers exists:

- law/amendment/source change;
- verified legal defect;
- broken source/case authority;
- schema migration;
- product regression;
- explicit user-requested correction.

## 12. Subject completion rule

A subject is `COMPLETE_LOCKED` only when:

1. Full authoritative inventory exists.
2. Every inventory item is mapped or explicitly excluded with evidence.
3. Every required enhancement gate passes.
4. Every applicable statutory/current-law verification gate passes.
5. Every relied-upon case-law proposition is verified or explicitly excluded.
6. Legal/content validation passes.
7. Product integration passes.
8. Production validation passes.
9. Final subject report records counts and evidence.

**Never infer completion from the number of pending sections.**

## 13. Progress calculation

For each subject report:

`Inventory Total = Mapped + Missing + Explicitly N/A`

`Enhanced % = Enhanced-or-later / Applicable Inventory Total`

`Verified % = Verified-or-later / Applicable Inventory Total`

`Validated % = Validated-or-later / Applicable Inventory Total`

`Integrated % = Integrated-or-later / Applicable Inventory Total`

`Complete % = Complete-Locked / Applicable Inventory Total`

A subject is not 100% complete unless **Complete-Locked = Applicable Inventory Total**.

## 14. Advanced research/enhancement standard

Before enhancing a topic, research in this order:

1. Current authoritative statutory source.
2. Amendment/current-law status.
3. Authoritative judgments for important propositions.
4. Relevant constitutional/statutory cross-references.
5. Existing repository content and provenance.
6. Student curriculum/exam relevance.
7. Examples and problem applications derived from the verified rule.
8. Final source/case audit.

Enhancement must then produce a student-ready explanation while preserving the existing substantive baseline.

## 15. Anti-duplication rule

Before touching any section:

- [ ] Read its ledger status.
- [ ] Read its latest topic file.
- [ ] Read the latest verification evidence.
- [ ] Check the last relevant commit.
- [ ] Identify only the missing gate(s).
- [ ] Do not repeat completed gates without a reopening trigger.

**This checklist is the standard for all future subjects and sections.**
