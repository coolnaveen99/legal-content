# Canonical Entity ID Standard

Use stable, globally unique IDs for content entities.

## Format

`<entity-type>:<jurisdiction-or-domain>:<local-id>`

Examples:

- `topic:india:bns-s23`
- `provision:india:bns-s23`
- `judgment:india:sc-2024-0001`
- `doctrine:india:res-judicata`

## Rules

- IDs are immutable once published.
- Human-readable titles are not the identifier.
- Renaming a title must not change the canonical ID.
- Archived entities retain their IDs.
- Cross-repository references use the canonical ID.
