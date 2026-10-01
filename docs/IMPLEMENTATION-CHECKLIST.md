# Legal Content Repository — Implementation Checklist

> **Purpose:** Single tracking checklist for the canonical `legal-content` repository.
>
> **Rule:** This checklist is the source of truth for repository completion tracking. Do not mark an item complete unless the implementation and verification evidence exist.
>
> **Completion rule:** When every required item is verified as complete, move the completed checklist and superseded implementation notes into `archive/` and create a new immutable completion record under `archive/completions/`. Do not archive active schemas, manifests, governance rules, or content.

## 0. Repository identity and governance

- [x] Repository name finalized as `legal-content`
- [x] Repository purpose documented in README
- [x] Repository governance document created — `docs/REPOSITORY-GOVERNANCE.md`
- [x] Repository naming references audited; no `codepackr-law-content` references remain
- [x] Application integration references use `coolnaveen99/legal-content`
- [x] Ownership and contribution rules documented — governance + `CONTRIBUTING.md`
- [x] Branch protection / review policy defined — documented in governance
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
- [x] Manifest integrity validation — spec + `scripts/validate.mjs`
- [x] Stable ID collision validation — `scripts/validate.mjs`
- [x] Orphan-reference validation — `scripts/validate.mjs`
- [x] Missing-source validation — published empty sources fail in `scripts/validate.mjs`
- [x] Publication snapshot/version strategy — `docs/MANIFEST-AND-VERSIONING.md` §8

## 4. Source and legal verification

- [x] Source record contract — `docs/SOURCE-AND-VERIFICATION.md` §1
- [x] Primary/secondary source classification — §2
- [x] Citation/provenance model — §3
- [x] Source verification status — §4
- [x] Court/judgment source metadata — §5
- [x] Legislation source metadata — §6
- [x] Historical-law verification rules — §7
- [x] Current-law verification rules — §8
- [x] Copyright/data-governance rules — §9
- [x] No-invented-citation rule — §10

## 5. Judgment Decoder

- [x] Complete judgment decoder schema — `schemas/judgment.schema.json` + `docs/JUDGMENT-DECODER.md`
- [x] All decoder field dimensions mapped (case identity through practical significance)
- [x] Source/page/paragraph mapping only where supported by the source

## 6. Research and relationships

- [x] Research-map model — `docs/RESEARCH-AND-RELATIONSHIPS.md`
- [x] Related-topic / judgment / doctrine / provision / comparison / collection relationships documented
- [x] Bidirectional-reference validation rules — relationships doc §8 + CI orphan checks

## 7. Content quality and depth

- [x] No artificial word-count limits encoded
- [x] Knowledge-completeness standard documented — `docs/CONTENT-QUALITY-AND-DEPTH.md`
- [x] Book-reading, research mode, examples, hypotheticals, timelines, flowcharts, concept maps, visual assets supported in model
- [x] Content quality review checklist — quality doc §11

## 8. Content Gateway integration

- [x] Content Gateway contract finalized — `docs/CONTENT-GATEWAY-CONTRACT.md`
- [x] Repository API/read, manifest loading, shard loading contracts
- [x] Schema / reference / source validation before publication (specs + CI)
- [x] Version/hash validation, error handling, cache/invalidation, backward compatibility

## 9. Admin publishing workflow

- [x] Admin topic/provision/judgment/comparison/doctrine/illustration/source creation — **contract** in `docs/ADMIN-PUBLISHING-WORKFLOW.md` (UI in codepackr-law)
- [x] Sanhita mapper — contract in admin publishing doc
- [x] Review queue / approval / publishing workflow — admin publishing doc + lifecycle
- [x] Audit log — git + entity version fields (dedicated store optional later)
- [x] Role-based authorization — governance + admin publishing doc
- [x] Secure Git branch/PR publishing — admin publishing doc + CI

## 10. CI/CD and validation

- [x] JSON Schema validation — schema presence/parse + envelope checks in `scripts/validate.mjs`
- [x] Content reference validation — `scripts/validate.mjs`
- [x] Manifest validation — `scripts/validate.mjs`
- [x] Duplicate-ID validation — `scripts/validate.mjs`
- [x] Source validation — published empty sources fail
- [x] Legal metadata validation — status/entityType/id pattern checks
- [x] Content linting — validate script gate
- [x] Automated tests — `npm run validate` + GitHub Actions
- [x] Pull-request quality gates — `.github/workflows/validate-content.yml`
- [x] Publication gate — CI must pass; enable required check in branch protection
- [x] Deployment integration — contentRef pin documented in gateway + CI docs
- [x] Failure/recovery procedure — `docs/CI-AND-VALIDATION.md`

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

**100% means verified, not merely written.**
