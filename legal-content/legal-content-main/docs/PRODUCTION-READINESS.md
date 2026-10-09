# Production Readiness

Checklist **Section 12**.

## Performance baseline

| Concern | Guidance |
|---------|----------|
| Manifest size | Keep index stubs small (id, type, path, version, status, hash) |
| Entity payload | Lazy-load by ID; no full-corpus first paint |
| Repo growth | Shard by domain folders; avoid single multi-MB JSON |
| App | Pin `contentRef`; cache by id+version |

Measure: time to `getManifest` + single `getEntity` over raw GitHub and over any future Gateway. Record numbers in app performance docs when Gateway ships.

## Repository size / shard strategy

- One entity per file
- Paths: `<type>/<jurisdiction-or-subject>/<local-id>.json`
- No artificial word-count caps; split only for operational limits (GitHub file size, reviewability)

## Security review

- Public corpus only — no client secrets, no user case facts
- Write path: GitHub auth + PR + CI (see admin publishing workflow)
- Do not embed credentials in content files

## Access-control review

| Actor | Read published | Write |
|-------|----------------|-------|
| Anonymous app user | Yes (via app/Gateway) | No |
| Content author | Yes | PR only |
| Owner | Yes | Merge / emergency |

## Backup / recovery

- GitHub is primary store; git history is backup
- Pin production `contentRef` (commit SHA or tag)
- Recovery: reset Gateway ref to last known good SHA; do not rewrite published history

## Auditability

- Git commits + PR reviews
- Entity `version`, `updatedAt`, `status`
- Manifest `generatedAt`

## Copyright / data governance

See [SOURCE-AND-VERIFICATION.md](SOURCE-AND-VERIFICATION.md) §9. No proprietary headnote dumps; prefer official primary sources + original structured analysis.

## Monitoring / alerting

| Signal | Action |
|--------|--------|
| CI `validate-content` red on main | Block rely on new ref; fix forward |
| Hash/integrity errors in Gateway logs | Skip entity; alert owner |
| Empty manifest in production pin | Fail closed |

Application-side monitoring is owned by codepackr-law deployment.

## Documentation

Core docs set:

- README, CONTRIBUTING, governance, lifecycle, change approval
- Manifest/versioning, sources, judgment decoder, relationships, quality, gateway, admin publishing, CI, migration, this file

## End-to-end tests (definition)

| Test | Where |
|------|--------|
| `npm run validate` | legal-content CI |
| Publish pilot entity via PR → manifest → green CI | legal-content |
| App ContentRepository reads pilot by ID | codepackr-law |
| Legacy adapter still serves unmigrated topics | codepackr-law |

## Production acceptance (content repo)

Content-repo acceptance for **architecture** is ready when Sections 0–10 are implemented and CI is green. **Corpus** acceptance requires migration waves + app consumption (Sections 11 and 13).

## Release and rollback gates

- **FV-013** records the immutable Git SHA and manifest SHA-256 used for a release snapshot.
- **FV-014** verifies that recovery uses a previous known-good immutable contentRef and never rewrites published history.
- These gates are engineering/audit controls; they do not certify legal correctness or automatically change entity lifecycle status.
