# Migration pilot

This repository now contains a **pilot canonical slice**, not the full `codepackr-law` corpus.

## Pilot entities

| Canonical ID | Legacy home |
| --- | --- |
| `topic:india:cpc-s-11` | `src/data/topics/cpc/s-11.ts` |
| `provision:india:cpc-s-11` | CPC section catalog |
| `doctrine:india:res-judicata` | reusable knowledge graph |
| `judgment:india:kesavananda-bharati-1973` | `src/data/judgments` |
| `sanhita-mapping:india:ipc-302-bns-103` | BNS/IPC concordance |

## Rules for the rest of the migration

- Do not delete legacy application files until parity is verified topic-by-topic.
- Map legacy IDs as `topic:india:<subjectSlug>-<topicId>`.
- Keep IPC / CrPC / IEA records marked historical.
- Never invent citations to fill a source field. Leave the entity in `research` or `needs-review` instead.
- Full inventory and bulk conversion remain open checklist items in Section 11.
