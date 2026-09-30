# Legal-Content Change Approval Policy

This policy defines who may advance content through the lifecycle and what evidence is required. It implements the governance rule that **a file existing is not the same as verified publication**.

## Lifecycle states

```text
draft → research → review → verified → approved → published → review-due → update → archived
```

States are defined on the content envelope (`status` field). Only published entities should be consumed by production application reads.

## Transition matrix

| From | To | Who may approve | Required evidence |
|------|-----|-----------------|-------------------|
| (new) | `draft` | Author via PR | Schema-valid envelope; stable ID; title; jurisdiction |
| `draft` | `research` | Author | Research notes / outline; open questions listed |
| `research` | `review` | Author | Draft body complete enough for legal review; sources listed |
| `review` | `verified` | Designated reviewer or owner | Primary or authoritative secondary sources checked; no invented citations; historical vs current law labeled |
| `verified` | `approved` | Owner or designated approver | Explicit approval comment on PR or review record |
| `approved` | `published` | Owner | Manifest updated; integrity checks pass; PR merged to `main` |
| `published` | `review-due` | Owner / automation | Time-based or statute-change trigger documented |
| `review-due` / `published` | `update` | Author | Change rationale; affected IDs listed |
| any | `archived` | Owner | Supersession or deprecation rationale; ID retained |

## Schema and infrastructure changes

| Change | Approval |
|--------|----------|
| New or breaking schema change | Owner review required; bump `schemaVersion` policy when defined |
| Manifest format change | Owner review + migration notes for Content Gateway |
| Governance / policy docs | Owner review; may be merged by owner after self-check for consistency |
| CI / validation tooling | Owner review; must not weaken publication gates |

## Evidence standards

1. **Sources:** Prefer official primary sources (India Code, Gazette, court websites, authentic law reports). Secondary sources may support explanation but must not replace primary verification for statutory text and holdings.
2. **Citations:** Case names, citations, paragraph numbers, and section numbers must be traceable. If unverified, keep status ≤ `review` and tag needs-review.
3. **No invention:** Missing information is recorded as unknown or needs-review — never fabricated.
4. **Temporal scope:** Record `effectiveFrom` / `effectiveTo` when applicable. Distinguish pre- and post-1 July 2024 criminal law regimes.
5. **Copyright:** Do not paste proprietary headnotes, annotated commentaries, or subscription-only text.

## Audit trail

Until a dedicated audit-log store exists:

- Git history on `main` is the system of record for published content.
- PR description and review comments capture approval rationale.
- Manifest `generatedAt` and entity `version` / `updatedAt` support consumers.

## Relationship to application publishing

The intended production path is:

Admin Portal → Auth/Authz → Content Gateway → Schema & legal-metadata validation → Git branch/PR → CI → Review/Approval → Merge → Build → Deployment.

The Admin UI must not bypass this policy to publish arbitrary content.
