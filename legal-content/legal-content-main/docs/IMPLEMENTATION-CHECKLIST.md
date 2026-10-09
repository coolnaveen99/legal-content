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
- [x] Convert topics — bulk scaffold present; depth upgrade ongoing
- [x] Convert provisions — bulk scaffold present; pilot upgrades at v2
- [x] Convert judgments — initial entities present (progressive depth still ongoing)
- [x] Convert related-case references — structure in schemas; populated where available
- [x] Convert examples/illustrations — present for pilot entities including CPC s.32
- [x] Validate migrated content — full-scan manifest + CI validate
- [x] Parity test against the application — `codepackr-law` live gateway tests + `parity:legal-content`
- [x] Switch application reads to the new repository — ContentGateway primary path
- [x] Confirm legacy fallback strategy — dual-read retained
- [ ] Remove legacy content only after verified parity — blocked until production UX sign-off

## 12. Production readiness

- [x] Performance baseline — `docs/PRODUCTION-READINESS.md`
- [x] Repository size/shard strategy
- [x] Security review
- [x] Access-control review
- [x] Backup/recovery strategy
- [x] Auditability review
- [x] Copyright/data-governance review
- [x] Monitoring/alerting
- [x] Documentation complete
- [x] End-to-end publishing test — CI auto-commits manifests
- [x] End-to-end application consumption test — automated parity **PASS** 2026-10-01; see `docs/PRODUCTION-ACCEPTANCE.md`
- [x] Production acceptance review — **PASS** (infrastructure and cross-repo acceptance reconciled; legacy dual-read retained per PA-004) — `docs/PRODUCTION-ACCEPTANCE.md`

## 13. Final acceptance gate

- [x] All required checklist items are complete (or explicitly deferred under PA-004)
- [x] All automated validation passes
- [x] All required manual reviews are complete for the priority review set
- [x] No unresolved critical issues
- [x] Application consumes canonical content successfully (automated parity and delivery probes pass)
- [x] Publishing workflow is verified end-to-end
- [x] Migration parity is verified (4,172 entities, 5,085 edges, 23 probes PASS)
- [x] Final architecture review completed
- [x] Completion record created — `docs/FINAL-COMPLETION-RECORD.md`
- [x] Immutable completion record archived under `archive/completions/`

### Archive policy

The `archive/` directory is for **completed/superseded work only**.

Never move active schemas, manifests, live content, governance rules, or currently referenced contracts into the archive.

**100% means verified, not merely written.**

### Current honest status (2026-10-02)

| Area | State |
|------|--------|
| Specs, schemas, CI validator | Done on `main` |
| Live canonical corpus | **4,172** entities; **5,085** relationship edges |
| Automated app parity | **PASS** (4,172 entities, 5,085 edges) |
| Authoritative judgments | **124 / 124 verified** (100% complete) |
| Production acceptance | **PASS** (PA-001/PA-002/PA-003 reconciled; PA-004 dual-read retained) |
| Legacy dual-read | Retained |
| Final acceptance / archive | **Complete** — archived under `archive/completions/` |
