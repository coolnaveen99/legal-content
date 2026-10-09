# Admin Publishing Workflow (legal-content side)

Checklist **Section 9**. The Admin Portal UI, auth, and Gateway write adapters live in `coolnaveen99/codepackr-law`. This document defines what must happen to **this repository** for a safe publish.

## Target flow

```text
Admin Portal → Auth/Authz → Content Gateway → Schema & legal-metadata validation
  → Git branch + commit → CI validation → Review/Approval → Merge to main
  → Manifest update → published status → consumers on contentRef
```

Admin UI must **not** bypass validation or push arbitrary JSON straight to `main` without review when branch protection is enabled.

## Entity creation responsibilities

| Admin capability | Writes entity type | Path convention |
|------------------|--------------------|-----------------|
| Topic creation | `topic` | `topics/.../*.json` |
| Provision creation | `provision` | `provisions/.../*.json` |
| Judgment creation | `judgment` | `judgments/.../*.json` |
| Comparison creation | `comparison` | `comparisons/.../*.json` |
| Doctrine creation | `doctrine` | `doctrines/.../*.json` |
| Illustration management | `illustration` | `illustrations/.../*.json` |
| Source management | `source` | `sources/.../*.json` |
| Sanhita mapper | `sanhitaMapping` | `sanhita-mappings/.../*.json` |

Each create/update must:

1. Assign immutable canonical `id`
2. Set lifecycle `status` (start at `draft` unless explicitly publishing)
3. Populate `sources` appropriately
4. Pass schema validation
5. Update or regenerate `manifests/content-manifest.json` when status becomes consumable

## Review queue & approval

- Status progression follows [CONTENT-LIFECYCLE.md](CONTENT-LIFECYCLE.md) and [CHANGE-APPROVAL-POLICY.md](CHANGE-APPROVAL-POLICY.md)
- Review queue = entities with `status` in `review` (and optionally `research`)
- Approval = human move to `verified` → `approved` → `published` with evidence in PR

## Publishing workflow (Git)

1. Feature branch from `main`
2. Add/update entity JSON files
3. Regenerate manifest (include published/review-due/archived as per policy)
4. Open PR (or owner direct commit only for documented emergencies)
5. CI must pass (Section 10)
6. Reviewer/owner approval for legal transitions
7. Merge to `main`
8. Application points `contentRef` at new commit/tag when ready

## Audit log

Until a dedicated audit entity exists:

- Git history + PR discussion is the audit trail
- Entity `version` / `updatedAt` / `status` record content state

## Role-based authorization

| Role | Content repo |
|------|----------------|
| Author | Propose drafts via PR |
| Reviewer | Approve legal accuracy on PR |
| Owner | Merge, publish, archive, schema changes |
| App Admin (codepackr-law) | Triggers Gateway that still ends in Git PR/merge |

## Secure Git branch/PR publishing

- Prefer PR workflow always
- Enable GitHub branch protection on `main` (required PR + review) when ready
- CI required status check: `validate-content`
- No force-push to `main`

## Implementation split

| In legal-content (this repo) | In codepackr-law |
|------------------------------|------------------|
| Schemas, entities, manifest | Admin UI forms |
| CI validation | Auth/authz |
| Lifecycle/governance docs | Review queue UI |
| Git as system of record | Gateway client calling GitHub API or bot |

Section 9 checklist items for **Admin UI screens** are complete on the content side when this contract is published; UI implementation is tracked in the application roadmap/PR #46 architecture.
