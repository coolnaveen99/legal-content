# Failure and recovery — legal-content validation

## What fails closed

The GitHub Actions workflow `.github/workflows/validate.yml` must fail the pull request when any of the following occur:

- JSON Schema validation error
- envelope or entity-type mismatch
- duplicate canonical ID
- published entity missing sources
- published entity missing from the manifest
- manifest path/status mismatch
- unresolved reference from a published entity

A failed check means the branch must not be merged.

## Recovery

1. Read the workflow log. Every error line names a file and a reason.
2. Fix the entity file, not the schema, unless the schema itself is wrong and a version bump is approved.
3. Run `npm run manifest` if paths, IDs, versions, or statuses changed.
4. Run `npm run ci` locally until it is green.
5. Push the corrected commit. Do not use `--no-verify` and do not disable the workflow to force a merge.

## If GitHub Actions is unavailable

Validation still runs locally:

```bash
npm ci
npm run ci
```

Do not publish or switch the application to a commit that has not passed `npm run ci`.

## Application consumption failure

If `codepackr-law` cannot load a published entity:

- the Content Gateway must fall back to the legacy topic loader during migration;
- the UI must not invent replacement legal text;
- missing canonical content is an explicit miss, not a silent synthesizer success.
