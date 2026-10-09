# Schemas

JSON Schema contracts for the canonical legal-content model.

## Current contracts

- `content-envelope.schema.json` — common entity envelope and lifecycle fields
- `topic.schema.json` — structured legal topic content
- `judgment.schema.json` — detailed judgment decoder record
- `manifest.schema.json` — content discovery and publication manifest

## Design rules

- Stable canonical IDs are immutable after publication.
- Content versions are explicit.
- Lifecycle status is separate from version.
- Source references are required at the entity envelope level.
- Historical and current legal applicability are represented separately.
- No artificial word-count limits are encoded in schemas.
- Entity-specific schemas may evolve through explicit schema versions.
