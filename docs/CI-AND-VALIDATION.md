# CI/CD and Validation

Checklist **Section 10**.

## Commands

```bash
npm run validate                 # full gate
npm run validate:schemas        # schema files only
npm run validate:manifest       # manifest + entities consistency
```

Implementation: `scripts/validate.mjs` (Node ≥ 18, no extra dependencies).

## Checks performed

| Check | Behavior |
|-------|----------|
| JSON Schema files present & parseable | error if missing/invalid JSON |
| Entity envelope required fields | error |
| Status / entityType enums | error |
| Canonical ID pattern | error |
| Duplicate IDs across files | error |
| Published empty `sources[]` | error |
| Outbound canonical ID refs | error if published + missing; warn otherwise |
| Manifest schema basics + repository field | error |
| Manifest path exists; id/type/version/status match file | error |
| Manifest sha256 match when present | error |
| published/review-due/archived entities listed in manifest | error |

## Workflow

`.github/workflows/validate-content.yml` runs on push/PR to `main`.

## Publication gate

Merge to `main` should only occur when `validate-content` is green. Enable as a required status check under branch protection when ready.

## Deployment integration

`codepackr-law` should pin a `contentRef` (commit/tag) after content merges. Content-only commits do not require application redeploy unless the app vendors files at build time.

## Failure / recovery

1. Read CI log for `ERROR:` lines.
2. Fix entity or manifest.
3. Re-run `npm run validate` locally.
4. Push; do not force-merge on red CI.
5. If production already pinned a bad ref, point Gateway at the previous good commit SHA.
