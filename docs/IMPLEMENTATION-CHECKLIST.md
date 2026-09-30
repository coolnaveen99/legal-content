# Legal Content Repository — Implementation Checklist

> **Purpose:** Single tracking checklist for the canonical `legal-content` repository.
>
> **Rule:** This checklist is the source of truth for repository completion tracking. Do not mark an item complete unless the implementation and verification evidence exist.
>
> **Completion rule:** When every required item is verified as complete, move the completed checklist and superseded implementation notes into `archive/` and create a new immutable completion record under `archive/completions/`. Do not archive active schemas, manifests, governance rules, or content.

## 0. Repository identity and governance

- [x] Repository name finalized as `legal-content`
- [x] Repository purpose documented in README
- [x] Repository governance document created — `docs/REPOSITORY-GOVERNANCE.md` (expanded 2026-09-30: ownership, branch policy, naming audit)
- [x] Repository naming references audited; no `codepackr-law-content` references remain (search 2026-09-30: only prohibition text in application copilot instructions)
- [x] Application integration references use `coolnaveen99/legal-content` (README, governance, manifest)
- [x] Ownership and contribution rules documented — governance + `CONTRIBUTING.md`
- [x] Branch protection / review policy defined — documented in governance (GitHub settings UI still to be applied by owner)
- [x] Legal-content change approval policy defined — `docs/CHANGE-APPROVAL-POLICY.md`

## 1. Canonical content architecture

- [x] Base content directories created
- [x] Canonical entity ID standard created
- [x] Common content envelope schema created
- [x] Topic schema created
- [x] Judgment schema created
- [x] Manifest schema created
- [x] Initial content manifest created
- [x] Provision schema
- [x] Doctrine schema
- [x] Comparison schema
- [x] Illustration schema
- [x] Source schema
- [x] Sanhita-mapping schema
- [x] Collection schema
- [x] SEO metadata schema
- [x] Cross-entity reference rules — `docs/CROSS-ENTITY-REFERENCE-RULES.md`
- [x] Historical/current-law representation rules — `docs/HISTORICAL-CURRENT-LAW-RULES.md`
- [x] Schema versioning policy — `docs/SCHEMA-VERSIONING-POLICY.md`

## 2. Content lifecycle

- [x] Draft state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Research state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Review state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Verification state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Approval state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Published state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Review-due state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Update state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Archive state rules — `docs/CONTENT-LIFECYCLE.md`
- [x] Required evidence for each transition — `docs/CHANGE-APPROVAL-POLICY.md` + lifecycle
- [x] Audit trail model — `docs/CONTENT-LIFECYCLE.md`
- [x] Content reviewer/approver roles — `docs/CONTENT-LIFECYCLE.md` + governance

## 3. Manifest and versioning

- [x] Manifest generation specification — `docs/MANIFEST-AND-VERSIONING.md` §1
- [x] Entity versioning specification — `docs/MANIFEST-AND-VERSIONING.md` §2
- [x] Content hash specification — `docs/MANIFEST-AND-VERSIONING.md` §3
- [x] Manifest integrity validation — `docs/MANIFEST-AND-VERSIONING.md` §4 (spec; CI in Section 10)
- [x] Stable ID collision validation — `docs/MANIFEST-AND-VERSIONING.md` §5 (spec; CI in Section 10)
- [x] Orphan-reference validation — `docs/MANIFEST-AND-VERSIONING.md` §6 (spec; CI in Section 10)
- [x] Missing-source validation — `docs/MANIFEST-AND-VERSIONING.md` §7 (spec; CI in Section 10)
- [x] Publication snapshot/version strategy — `docs/MANIFEST-AND-VERSIONING.md` §8

## 4. Source and legal verification

- [x] Source record contract — `docs/SOURCE-AND-VERIFICATION.md` §1 + `schemas/source.schema.json`
- [x] Primary/secondary source classification — `docs/SOURCE-AND-VERIFICATION.md` §2
- [x] Citation/provenance model — `docs/SOURCE-AND-VERIFICATION.md` §3
- [x] Source verification status — `docs/SOURCE-AND-VERIFICATION.md` §4
- [x] Court/judgment source metadata — `docs/SOURCE-AND-VERIFICATION.md` §5
- [x] Legislation source metadata — `docs/SOURCE-AND-VERIFICATION.md` §6
- [x] Historical-law verification rules — `docs/SOURCE-AND-VERIFICATION.md` §7 + historical-law doc
- [x] Current-law verification rules — `docs/SOURCE-AND-VERIFICATION.md` §8
- [x] Copyright/data-governance rules — `docs/SOURCE-AND-VERIFICATION.md` §9
- [x] No-invented-citation rule — `docs/SOURCE-AND-VERIFICATION.md` §10

## 5. Judgment Decoder

- [x] Complete judgment decoder schema — `schemas/judgment.schema.json` + `docs/JUDGMENT-DECODER.md`
- [x] Case identity — `content.caseIdentity`
- [x] Court and bench — `content.court`, `content.bench`
- [x] Date — `content.date`
- [x] Parties — `content.parties`
- [x] Dispute origin — `content.disputeOrigin`
- [x] Original forum — `content.originalForum`
- [x] Procedural history — `content.proceduralHistory`
- [x] Facts — `content.facts`
- [x] Party arguments — `content.argumentsPartyA`, `content.argumentsPartyB`
- [x] Questions/issues — `content.questionsBeforeCourt`
- [x] Laws involved — `content.lawsInvolved`
- [x] Precedents relied upon — `content.precedentsReliedUpon`
- [x] Precedents distinguished/challenged — `content.precedentsDistinguishedOrChallenged`
- [x] Court questions — `content.courtQuestions`
- [x] Court reasoning — `content.reasoning`
- [x] Step-by-step reasoning — `content.stepByStepReasoning`
- [x] Issue-wise findings — `content.findings`
- [x] Majority reasoning — `content.majorityReasoning`
- [x] Separate opinions — `content.separateOpinions`
- [x] Holding — `content.holding`
- [x] Ratio decidendi — `content.ratioDecidendi`
- [x] Obiter — `content.obiter`
- [x] Final order — `content.finalOrder`
- [x] Legal change — `content.legalChange`
- [x] Later judgments — `content.laterJudgments`
- [x] Present legal position — `content.presentLegalPosition`
- [x] Practical significance — `content.practicalSignificance`
- [x] Source/page/paragraph mapping only where supported by the source — `docs/JUDGMENT-DECODER.md` (policy; optional schema field later)

## 6. Research and relationships

- [ ] Research-map model
- [ ] Related-topic references
- [ ] Related-judgment references
- [ ] Doctrine relationships
- [ ] Provision relationships
- [ ] Comparison relationships
- [ ] Collection relationships
- [ ] Bidirectional-reference validation where required

## 7. Content quality and depth

- [ ] No artificial word-count limits encoded
- [ ] Knowledge-completeness standard documented
- [ ] Book-reading structure supported
- [ ] Research mode structure supported
- [ ] Examples and illustrations supported
- [ ] Hypotheticals supported
- [ ] Timelines supported
- [ ] Flowcharts/decision trees supported
- [ ] Concept maps supported
- [ ] Visual study assets supported
- [ ] Content quality review checklist

## 8. Content Gateway integration

- [x] Content Gateway contract finalized
- [ ] Repository API/read contract finalized
- [ ] Manifest loading contract finalized
- [ ] Content shard loading contract finalized
- [ ] Schema validation before publication
- [ ] Reference validation before publication
- [ ] Source validation before publication
- [ ] Version/hash validation
- [ ] Error handling contract
- [ ] Cache/invalidation strategy
- [ ] Backward compatibility strategy

## 9. Admin publishing workflow

- [ ] Admin topic creation
- [ ] Admin provision creation
- [ ] Admin judgment creation
- [ ] Admin comparison creation
- [ ] Admin doctrine creation
- [ ] Admin illustration management
- [ ] Admin source management
- [ ] Sanhita mapper
- [ ] Review queue
- [ ] Approval workflow
- [ ] Publishing workflow
- [ ] Audit log
- [ ] Role-based authorization
- [ ] Secure Git branch/PR publishing

## 10. CI/CD and validation

- [ ] JSON Schema validation
- [ ] Content reference validation
- [ ] Manifest validation
- [ ] Duplicate-ID validation
- [ ] Source validation
- [ ] Legal metadata validation
- [ ] Content linting
- [ ] Automated tests
- [ ] Pull-request quality gates
- [ ] Publication gate
- [ ] Deployment integration
- [ ] Failure/recovery procedure

## 11. Migration from codepackr-law

- [ ] Inventory existing legal content
- [ ] Map legacy content to canonical entities
- [ ] Map legacy IDs
- [ ] Identify duplicate content
- [ ] Identify missing sources
- [ ] Convert topics
- [ ] Convert provisions
- [ ] Convert judgments
- [ ] Convert related-case references
- [ ] Convert examples/illustrations
- [ ] Validate migrated content
- [ ] Parity test against the application
- [ ] Switch application reads to the new repository
- [ ] Confirm legacy fallback strategy
- [ ] Remove legacy content only after verified parity

## 12. Production readiness

- [ ] Performance baseline
- [ ] Repository size/shard strategy
- [ ] Security review
- [ ] Access-control review
- [ ] Backup/recovery strategy
- [ ] Auditability review
- [ ] Copyright/data-governance review
- [ ] Monitoring/alerting
- [ ] Documentation complete
- [ ] End-to-end publishing test
- [ ] End-to-end application consumption test
- [ ] Production acceptance review

## 13. Final acceptance gate

- [ ] All required checklist items are complete
- [ ] All automated validation passes
- [ ] All required manual reviews are complete
- [ ] No unresolved critical issues
- [ ] Application consumes canonical content successfully
- [ ] Publishing workflow is verified end-to-end
- [ ] Migration parity is verified
- [ ] Final architecture review completed
- [ ] Completion record created
- [ ] Checklist moved to `archive/completions/`

### Archive policy

The `archive/` directory is for **completed/superseded work only**.

Never move active schemas, manifests, live content, governance rules, or currently referenced contracts into the archive.

When this checklist reaches 100%:

1. Verify every checkbox against implementation evidence.
2. Record completion date, commit SHA, and verification summary.
3. Move this checklist to `archive/completions/`.
4. Keep a short `archive/README.md` explaining the archived milestone.
5. Create the next active checklist if further evolution is required.

**100% means verified, not merely written.**
