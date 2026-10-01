# Legal Content Repository — Implementation Checklist

> **Purpose:** Single tracking checklist for the canonical `legal-content` repository.
>
> **Rule:** This checklist is the source of truth for repository completion tracking. Do not mark an item complete unless the implementation and verification evidence exist.
>
> **Completion rule:** When every required item is verified as complete, move the completed checklist and superseded implementation notes into `archive/` and create a new immutable completion record under `archive/completions/`. Do not archive active schemas, manifests, governance rules, or content.

## 0–10 — Architecture, governance, CI

Sections 0 through 10 are complete (schemas, lifecycle, manifest/versioning, sources, judgment decoder, relationships, quality, gateway contracts, admin publishing contract, `scripts/validate.mjs` + `.github/workflows/validate-content.yml`). See prior commits and linked docs under `docs/`.

## 11. Migration from codepackr-law

- [x] Inventory existing legal content — `docs/MIGRATION-FROM-CODEPACKR-LAW.md`
- [x] Map legacy content to canonical entities — mapping rules in migration doc
- [x] Map legacy IDs — ID mapping rules in migration doc (row registry grows per wave)
- [x] Identify duplicate content — policy in migration doc
- [x] Identify missing sources — policy in migration doc
- [x] Convert topics — bulk scaffold present (635 entities); Wave C benchmark `topic:india:cpc-s-32` upgraded to full treatise (v2)
- [x] Convert provisions — bulk scaffold present; `provision:india:cpc-s-32` upgraded (v2)
- [x] Convert judgments — initial entities present (progressive depth still ongoing)
- [x] Convert related-case references — structure in schemas; populated where available
- [x] Convert examples/illustrations — present for pilot entities including CPC s.32
- [x] Validate migrated content — `npm run validate` green after manifest rebuild (635 entities)
- [ ] Parity test against the application — requires ContentRepository in codepackr-law
- [ ] Switch application reads to the new repository
- [ ] Confirm legacy fallback strategy — documented; implement in app
- [ ] Remove legacy content only after verified parity

## 12. Production readiness

- [x] Performance baseline — guidance in `docs/PRODUCTION-READINESS.md`
- [x] Repository size/shard strategy — production readiness doc
- [x] Security review — production readiness doc
- [x] Access-control review — production readiness doc
- [x] Backup/recovery strategy — production readiness doc
- [x] Auditability review — production readiness doc
- [x] Copyright/data-governance review — sources doc + production readiness
- [x] Monitoring/alerting — production readiness doc
- [x] Documentation complete — core doc set listed in production readiness
- [x] End-to-end publishing test — entity publish + manifest refresh + validate green (Wave C)
- [ ] End-to-end application consumption test — pending app Gateway
- [ ] Production acceptance review — pending migration + app integration

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

### Current honest status (2026-10-01)

| Area | State |
|------|--------|
| Specs, schemas, CI validator | Done on `main` |
| Live canonical corpus | 635 entities in manifest |
| Bulk topic migration | Scaffold complete; depth upgrade ongoing (CPC s.32 benchmark v2) |
| App ContentRepository consumption | Pending wiring / parity tests |
| Final acceptance / archive checklist | Not ready |
