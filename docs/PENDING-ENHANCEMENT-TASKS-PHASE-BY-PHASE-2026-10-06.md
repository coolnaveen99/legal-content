# Pending Enhancement Execution Plan — Phase-by-Phase

**Date:** 2026-10-06  
**Canonical repository:** `coolnaveen99/legal-content`  
**Application repository:** `coolnaveen99/codepackr-law`  
**Status:** ACTIVE  
**Purpose:** Convert the remaining content-enhancement workload into explicit, sequential, auditable sprint phases.

---

## 0. Governing rules

1. `legal-content/main` is the canonical source of truth.
2. Never bulk-copy legacy `codepackr-law` content over enhanced canonical content.
3. Preserve migrated substantive baseline text.
4. Enhancement completion is different from legal verification and publication.
5. Never mark a scaffold as substantive merely because required JSON fields exist.
6. Never invent statutes, sections, illustrations, judgments, ratios, citations or source claims.
7. Use the mandatory lifecycle:

`INVENTORY → MAP → GAP CHECK → ENHANCE → SOURCE VERIFY → CASE VERIFY → LEGAL VALIDATE → CONTENT VALIDATE → INTEGRATE → PRODUCTION CHECK → COMPLETE/LOCKED`

8. Direct commits to `main` remain the normal project execution path.
9. Closed subjects are not reopened without a documented reopening trigger.
10. Fresh judgment acquisition remains deferred until the Final Content Quality Pass closes.
11. AI/provider work remains last.

---

# Phase 0 — Baseline and queue reconciliation

**Goal:** Establish the exact enhancement queue before changing content.

### Tasks
- [ ] P0-001 Refresh full canonical topic inventory.
- [ ] P0-002 Refresh ENH-006 quality report.
- [ ] P0-003 Refresh ENH-009 subject progress.
- [ ] P0-004 Run `npm run quality:final`.
- [ ] P0-005 Export the complete QUAL finding list by subject/topic.
- [ ] P0-006 Classify every topic as `SUBSTANTIVE`, `SCAFFOLD`, `VERIFICATION_ONLY`, or `COMPLETE_LOCKED`.
- [ ] P0-007 Freeze Torts and other closed subjects unless a reopening trigger exists.
- [ ] P0-008 Create/refresh subject-level enhancement ledgers.

### Exit gate
No unknown enhancement population remains.

---

# Phase 1 — Scaffold elimination

**Goal:** Convert scaffold-level enhancements into genuinely topic-specific substantive enhancements.

**Current principal queue:** approximately **2,065 scaffold enhancements**.

### Per-topic requirements
- [ ] P1-001 Topic-specific definition.
- [ ] P1-002 Topic-specific legal principle.
- [ ] P1-003 Exact statutory/doctrinal framework.
- [ ] P1-004 Essential ingredients/elements.
- [ ] P1-005 Topic-specific explanation.
- [ ] P1-006 Rule-specific examples.
- [ ] P1-007 Problem/application reasoning.
- [ ] P1-008 Topic-specific distinctions where useful.
- [ ] P1-009 Student takeaways.
- [ ] P1-010 Short/10-mark/16-mark answer structures.
- [ ] P1-011 Authoritative-source mapping.
- [ ] P1-012 Verification notes describing exactly what was checked.

### Exit gate
No topic remains classified as scaffold solely because the enhancement was generated from migrated overview text.

---

# Phase 2 — Subject-by-subject substantive enhancement

**Goal:** Close each subject's substantive enhancement population without mixing legal verification into the enhancement count.

### Execution order

| Priority | Subject | Topics | Current substantive |
|---|---|---:|---:|
| 1 | Admin | 44 | 1 |
| 2 | Arbitration | 132 | 0 |
| 3 | Company | 561 | 0 |
| 4 | CPC | 249 | 0 |
| 5 | Labour | 523 | 0 |
| 6 | Cyber | 53 | 0 |
| 7 | Taxation | 51 | 0 |
| 8 | IPR | 63 | 0 |
| 9 | Environment | 31 | 0 |
| 10 | Ethics | 80 | 0 |
| 11 | Family | 38 | 0 |
| 12 | Land | 44 | 0 |
| 13 | Fundamental Rights | 12 | 0 |
| 14 | PIL | 23 | 0 |
| 15 | Petition Formats | 8 | 0 |
| 16 | NI | 4 | 0 |
| 17 | TPA | 6 | 0 |
| 18 | DPSP | 3 | 0 |
| 19 | Registration | 3 | 3 |
| 20 | SRA | 6 | 6 |
| 21 | Limitation | 5 | 5 |
| 22 | HMA | 5 | 5 |
| 23 | Contract | 60 | 0 |
| 24 | BNS | 368 | 359 |
| 25 | BNSS | 539 | 531 |
| 26 | BSA | 177 | 170 |
| 27 | Constitution | 522 | 522 |
| 28 | Torts | 42 | closed subject; do not reopen |

**Important:** This is an enhancement order, not a legal-verification order. Each subject still requires its own authoritative verification before publication.

### Subject closure
- [ ] Full repository inventory reconciled.
- [ ] Every topic classified.
- [ ] Every scaffold topic substantively enhanced.
- [ ] Enhancement validator passes.
- [ ] Preservation validator passes.
- [ ] Subject ledger updated.

---

# Phase 3 — Content-depth remediation

**Goal:** Improve topics that technically contain enhancements but remain too shallow for useful legal study.

### Tasks
- [ ] P3-001 Detect one-line definitions presented as full treatment.
- [ ] P3-002 Detect generic detailed explanations.
- [ ] P3-003 Detect missing ingredients/tests.
- [ ] P3-004 Detect missing exceptions/provisos/limitations.
- [ ] P3-005 Detect missing procedural/forum analysis.
- [ ] P3-006 Detect missing remedy/consequence analysis.
- [ ] P3-007 Detect missing examination structure.
- [ ] P3-008 Detect weak examples.
- [ ] P3-009 Detect missing related-topic relationships.
- [ ] P3-010 Re-run content-depth audit after remediation.

### Exit gate
All below-minimum topics have either been substantively expanded or explicitly documented as unsuitable for expansion.

---

# Phase 4 — Rule-specific examples and problem application

**Goal:** Replace generic educational scaffolding with legally useful application.

### Tasks
- [ ] P4-001 Every applicable topic receives at least one rule-specific example.
- [ ] P4-002 Examples must use the actual provision/doctrine.
- [ ] P4-003 Examples must not invent case law.
- [ ] P4-004 Add ingredient-present / ingredient-absent reasoning where appropriate.
- [ ] P4-005 Add problem-question analysis.
- [ ] P4-006 Distinguish hypothetical teaching examples from decided cases.
- [ ] P4-007 Validate that examples cannot be copied unchanged to unrelated topics.

### Exit gate
QUAL-004 and QUAL-006 are clean for the subject being closed.

---

# Phase 5 — Exam-answer enhancement

**Goal:** Make content useful for law students without turning answer structures into generic templates.

### Tasks
- [ ] P5-001 Short-answer structure.
- [ ] P5-002 10-mark structure.
- [ ] P5-003 16-mark/comprehensive structure.
- [ ] P5-004 Issue-rule-application-conclusion reasoning.
- [ ] P5-005 Topic-specific headings.
- [ ] P5-006 Statutory provisions and authorities placed under the correct rule.
- [ ] P5-007 Avoid generic “write introduction/body/conclusion” scaffolds.
- [ ] P5-008 Validate answer structures against the actual topic.

### Exit gate
QUAL-007 and QUAL-008 pass without generic answer-template contamination.

---

# Phase 6 — Distinctions and relationships

**Goal:** Build useful doctrinal navigation without fabricated relationships.

### Tasks
- [ ] P6-001 Identify nearest-neighbour doctrines/topics.
- [ ] P6-002 Add legally accurate distinctions.
- [ ] P6-003 Add related-topic relationships.
- [ ] P6-004 Add related judgment relationships only when supported.
- [ ] P6-005 Remove meaningless “connected concept” placeholders.
- [ ] P6-006 Rebuild relationship index.
- [ ] P6-007 Run relationship tests.

### Exit gate
QUAL-005 and QUAL-009 pass and relationship validation is green.

---

# Phase 7 — Current-law and transition enhancement

**Goal:** Ensure enhanced content clearly distinguishes current law from predecessor/repealed/transitional law.

### Tasks
- [ ] P7-001 Identify BNS/BNSS/BSA predecessor-law references.
- [ ] P7-002 Identify commencement and transition issues.
- [ ] P7-003 Identify repealed/superseded provisions.
- [ ] P7-004 Label predecessor-law cases correctly.
- [ ] P7-005 Add current-law status to affected topics.
- [ ] P7-006 Record verification date/source.
- [ ] P7-007 Do not infer current law from old notes.

### Exit gate
QUAL-010 is clean for the subject and no known outdated proposition remains unaccounted for.

---

# Phase 8 — Source and authority enrichment

**Goal:** Make each substantive enhancement traceable to authoritative material.

### Tasks
- [ ] P8-001 Map statute/provision to official source.
- [ ] P8-002 Map constitutional provisions to authoritative text.
- [ ] P8-003 Map rules/regulations/notifications where applicable.
- [ ] P8-004 Verify source URLs.
- [ ] P8-005 Identify weak secondary-only sources.
- [ ] P8-006 Record exact verification notes.
- [ ] P8-007 Keep uncertain content in review/in-progress.

### Exit gate
Every applicable substantive topic has an authoritative-source record.

---

# Phase 9 — Case-law enhancement and verification

**Goal:** Ensure cases actually support the proposition for which they are used.

### Tasks
- [ ] P9-001 Inventory every case used by each subject.
- [ ] P9-002 Verify case name/court/year/citation.
- [ ] P9-003 Verify judgment identity.
- [ ] P9-004 Verify material holding.
- [ ] P9-005 Verify ratio.
- [ ] P9-006 Record paragraph/page evidence only when inspected.
- [ ] P9-007 Label predecessor-law cases.
- [ ] P9-008 Remove unsupported case claims rather than inventing replacements.
- [ ] P9-009 Link verified cases to canonical judgment records.

### Exit gate
Every material relied-upon authority has evidence or is explicitly marked unresolved.

**Fresh judgment acquisition remains blocked until the Final Content Quality Pass closes.**

---

# Phase 10 — Final content quality remediation

**Goal:** Close QUAL-001 through QUAL-011 after actual content work.

### Tasks
- [ ] P10-001 Re-run `npm run quality:final`.
- [ ] P10-002 Resolve all P0/P1 findings.
- [ ] P10-003 Resolve P2 findings or document an explicit justified exception.
- [ ] P10-004 Re-run ENH-006.
- [ ] P10-005 Re-run ENH-009.
- [ ] P10-006 Re-run content-depth audit.
- [ ] P10-007 Re-run baseline preservation.
- [ ] P10-008 Re-run schema/entity/relationship validation.
- [ ] P10-009 Produce subject-level quality completion report.

### Exit gate
No unresolved substantive quality finding remains for the subject being closed.

---

# Phase 11 — Legal verification and publication readiness

**Goal:** Separate legal correctness from editorial enhancement and promote only evidence-backed topics.

### Tasks
- [ ] P11-001 Current-law verification.
- [ ] P11-002 Amendment/commencement verification.
- [ ] P11-003 Case identity verification.
- [ ] P11-004 Ratio verification.
- [ ] P11-005 Source-authority verification.
- [ ] P11-006 Correct outdated/unsupported propositions.
- [ ] P11-007 Record verification metadata.
- [ ] P11-008 Promote only topics passing the full acceptance checklist.
- [ ] P11-009 Keep unresolved topics in review.
- [ ] P11-010 Produce final subject verification ledger.

### Exit gate
Every promoted topic passes the applicable FV gates.

---

# Phase 12 — Application/content integration

**Goal:** Ensure enhanced canonical content reaches CodePackr Law correctly.

### Tasks
- [ ] P12-001 Manifest/entity validation.
- [ ] P12-002 Canonical Content Gateway validation.
- [ ] P12-003 Topic route rendering.
- [ ] P12-004 Enhancement-field rendering.
- [ ] P12-005 Search discovery.
- [ ] P12-006 10/16-mark presentation.
- [ ] P12-007 Mobile layout regression.
- [ ] P12-008 Fail-closed missing-content behavior.
- [ ] P12-009 Ensure no hidden legacy fallback.
- [ ] P12-010 Regression tests.

### Exit gate
Representative enhanced topics render from canonical content with no regression.

---

# Phase 13 — Production/readiness validation

**Goal:** Confirm the enhanced catalog is safe to release.

### Tasks
- [ ] P13-001 TypeScript/unit validation.
- [ ] P13-002 Content schema validation.
- [ ] P13-003 Preservation validation.
- [ ] P13-004 Enhancement validation.
- [ ] P13-005 Route/content smoke matrix.
- [ ] P13-006 Accessibility checks.
- [ ] P13-007 Performance/bundle checks.
- [ ] P13-008 Security/privacy checks.
- [ ] P13-009 SEO/canonical metadata.
- [ ] P13-010 Sitemap/indexing.
- [ ] P13-011 Production smoke.
- [ ] P13-012 Rollback point.
- [ ] P13-013 Release-readiness report.

### Exit gate
All repository-controlled production gates pass; environment-dependent deployment evidence is separately recorded.

---

# Phase 14 — Subject closure and lock

**Goal:** Prevent completed work from being unnecessarily reopened.

### Closure checklist
- [ ] P14-001 Full subject inventory reconciled.
- [ ] P14-002 All topics have explicit status.
- [ ] P14-003 Enhancement quality passes.
- [ ] P14-004 Legal verification passes.
- [ ] P14-005 Preservation passes.
- [ ] P14-006 Integration passes.
- [ ] P14-007 Production-readiness evidence recorded.
- [ ] P14-008 Subject completion report committed.
- [ ] P14-009 Sprint board updated.
- [ ] P14-010 Subject marked `COMPLETE_LOCKED` only if every applicable gate is satisfied.

---

# Phase 15 — Fresh judgment acquisition

**BLOCKED UNTIL PHASES 0–14 / FINAL QUALITY GATE CLOSE**

### Tasks
- [ ] P15-001 Refresh judgment inventory.
- [ ] P15-002 Duplicate check against canonical registry.
- [ ] P15-003 Acquire from approved open/official sources.
- [ ] P15-004 Verify identity/citation/date/court.
- [ ] P15-005 Inspect authoritative judgment evidence.
- [ ] P15-006 Extract only supported propositions.
- [ ] P15-007 Validate judgment records.
- [ ] P15-008 Integrate dependent topic references.
- [ ] P15-009 Re-run all affected content gates.

---

# Phase 16 — AI/provider implementation

**BLOCKED UNTIL ALL NON-AI PHASES CLOSE**

### Tasks
- [ ] P16-001 Freeze verified non-AI content baseline.
- [ ] P16-002 Define AI safety/privacy requirements.
- [ ] P16-003 Define source-grounding/citation requirements.
- [ ] P16-004 Define human/legal verification workflow.
- [ ] P16-005 Implement provider abstraction.
- [ ] P16-006 Implement AI provider.
- [ ] P16-007 Implement failure/rate/cost controls.
- [ ] P16-008 Implement privacy/data-retention controls.
- [ ] P16-009 Add evaluation fixtures.
- [ ] P16-010 Validate unsupported legal conclusions cannot be presented as authoritative.
- [ ] P16-011 Security/privacy audit.
- [ ] P16-012 Production/rollback test.
- [ ] P16-013 Final AI release audit.

---

# Subject execution ledger

For every subject, track:

| Subject | Inventory | Scaffold | Substantive | Quality | Legal Verify | Case Verify | Integration | Production | Final |
|---|---|---|---|---|---|---|---|---|---|
| Admin | OPEN | OPEN | PARTIAL | OPEN | PARTIAL | PARTIAL | OPEN | OPEN | OPEN |
| Arbitration | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Company | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| CPC | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Labour | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Cyber | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Taxation | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| IPR | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Environment | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Ethics | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Family | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Land | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Fundamental Rights | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| PIL | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Petition Formats | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| NI | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| TPA | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| DPSP | OPEN | OPEN | 0% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Registration | OPEN | CLOSED | 100% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| SRA | OPEN | CLOSED | 100% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Limitation | OPEN | CLOSED | 100% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| HMA | CLOSED* | CLOSED | 100% | CLOSED* | CLOSED* | CLOSED* | OPEN | OPEN | OPEN |
| Contract | CLOSED inventory | 0% | verification complete | OPEN | COMPLETE | OPEN* | OPEN | OPEN | OPEN |
| BNS | OPEN | 98% | 98% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| BNSS | OPEN | 99% | 99% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| BSA | OPEN | 96% | 96% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Constitution | OPEN | 100% | 100% | OPEN | OPEN | OPEN | OPEN | OPEN | OPEN |
| Torts | CLOSED | CLOSED | CLOSED | CLOSED | CLOSED | CLOSED | CLOSED | CLOSED | COMPLETE_LOCKED |

* Subject to the documented owner-specific waiver/reopening rules.

---

# Phase completion rule

A phase is **not complete** because its script exists.

A phase becomes **COMPLETE** only when:

1. all applicable tasks have evidence;
2. the affected topic population is explicitly known;
3. preservation passes;
4. validation passes;
5. legal evidence is recorded where applicable;
6. no unresolved blocker is hidden by a bulk status update;
7. the phase report is committed to `main`;
8. the sprint board points to the evidence.

**Current binding phase:** Phase 1–10 enhancement remediation, beginning with the complete scaffold queue and then subject-by-subject substantive remediation.

**Fresh judgment acquisition:** blocked until Final Content Quality Pass closes.

**AI/provider:** blocked until all non-AI work closes.
