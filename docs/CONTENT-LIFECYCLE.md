# Content Lifecycle Rules

Companion to [CHANGE-APPROVAL-POLICY.md](CHANGE-APPROVAL-POLICY.md). This document defines **state semantics**, **required evidence**, **audit trail**, and **roles** for checklist Section 2.

## States

| State | Meaning | Consumer visibility |
|-------|---------|---------------------|
| `draft` | Scaffold or incomplete authoring | Admin / author only |
| `research` | Outline and sources being gathered | Admin / author only |
| `review` | Substantive draft awaiting legal review | Admin / reviewers |
| `verified` | Legal and source checks passed | Admin; not production default |
| `approved` | Explicit human approval to publish | Admin |
| `published` | Live for production reads | Application |
| `review-due` | Published but flagged for re-check (time or law change) | Application (with review banner optional) |
| `update` | In-progress revision of a published (or review-due) entity | Admin until re-published |
| `archived` | Superseded or withdrawn; ID retained | Research / historical |

## Per-state rules

### Draft
- Stable ID assigned and never reused for a different concept.
- Schema-valid envelope required.
- Sources may be empty only if clearly marked needs-research in content or tags.

### Research
- List of open questions and candidate sources required in PR or content metadata.
- No production consumption.

### Review
- Body complete enough for a reviewer to assess accuracy.
- Sources listed (IDs or provisional URLs).

### Verified
- Reviewer confirms: no invented citations; regime labeling correct; sources adequate for claims made.
- Evidence: PR review approval or recorded checklist in PR body.

### Approved
- Owner or designated approver explicitly approves publication intent.

### Published
- Present in content manifest `entities` list.
- Integrity validation (when CI exists) passes.
- `version` incremented on each republication of the same ID.

### Review-due
- Trigger: statute amendment, judgment overruling, scheduled review date, or reported error.
- Remains readable; should be prioritized for `update`.

### Update
- Working state while revising; production may still serve last `published` snapshot until merge republishes.

### Archived
- ID immutable; title may note supersession; point to replacement ID in content when known.

## Required evidence for each transition

See the transition matrix in [CHANGE-APPROVAL-POLICY.md](CHANGE-APPROVAL-POLICY.md).

Minimum evidence summary:

- Into **verified**: source list + reviewer sign-off on accuracy
- Into **published**: approval + manifest inclusion + validation
- Into **archived**: written rationale + owner approval

## Audit trail model

| Layer | Mechanism |
|-------|-----------|
| Git | Commits and PR discussion on `main` |
| Entity | `version`, `updatedAt`, `status` |
| Manifest | `generatedAt`, entity list |
| Future | Optional append-only audit log entity type (not yet required) |

Do not delete published history; supersede via new version or archive.

## Roles

| Role | Duties |
|------|--------|
| **Author** | Create drafts, research, respond to review |
| **Reviewer** | Legal/source verification; move to `verified` |
| **Approver / Owner** | Approve publication and archive; schema changes |
| **Integrator** | Consume `published` only via Gateway; report defects |

A single person may hold multiple roles on a small team, but **publish** should still be a conscious, recorded step.
