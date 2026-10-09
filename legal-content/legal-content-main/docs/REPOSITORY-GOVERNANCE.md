# Legal Content Repository Governance

## Repository identity

| Field | Value |
|-------|-------|
| Repository | `coolnaveen99/legal-content` |
| Purpose | Canonical, structured, versioned legal content for the CodePackr Law application and future compatible legal products |
| Application repository | `coolnaveen99/codepackr-law` |
| Default branch | `main` |
| Visibility | Public |

## Source of truth

The active implementation checklist is:

`docs/IMPLEMENTATION-CHECKLIST.md`

It tracks architecture, schemas, content quality, verification, gateway integration, publishing, migration, and production readiness.

A checklist item is **complete only when implementation and verification evidence exist**. Creating a file alone is not sufficient.

## Naming

The canonical repository name is **legal-content**.

Do **not** use `codepackr-law-content` as a repository name, path, package name, integration identifier, or documentation reference.

When referring to this repository in integration documentation, use:

`coolnaveen99/legal-content`

### Naming audit (2026-09-30)

- Repository name: `legal-content` (correct).
- GitHub code search for `codepackr-law-content` across the owner's repos returns only the prohibition statement in `codepackr-law` copilot instructions.
- Application integration references must use `coolnaveen99/legal-content`.

## Ownership and contribution

| Role | Responsibility |
|------|----------------|
| **Repository owner** | `coolnaveen99` — final authority on merge to `main`, schema evolution, and production publication |
| **Content authors** | Research, draft, and source-verify legal entities under the content lifecycle |
| **Content reviewers** | Verify legal accuracy, sources, and schema compliance before approval |
| **Application integrators** | Consume published content via Content Gateway; never write canonical content from the application |

Contributions are accepted only via pull requests against feature/fix branches. Direct pushes to `main` by non-owners are not permitted once branch protection is enabled.

See [CONTRIBUTING.md](../CONTRIBUTING.md) for the practical contribution workflow.

## Branch protection and review policy

Until GitHub branch-protection rules are configured in the repository settings UI, the following **policy** applies and must be followed by all contributors and automation:

1. **Default branch:** `main` is the only production branch.
2. **No direct commits to `main`** except by the repository owner for emergency hotfixes, which must be documented in the commit message.
3. **Pull requests required** for all other changes.
4. **Review requirement:** At least one approving review (owner or designated reviewer) before merge when the change touches schemas, manifests, published content, or lifecycle rules.
5. **CI status:** When CI workflows exist, required checks must pass before merge.
6. **Linear history preferred:** Prefer squash or rebase merge to keep history readable.
7. **Force-push:** Forbidden on `main`.

Recommended GitHub settings (to be applied by the owner):

- Require a pull request before merging
- Require approvals: 1
- Dismiss stale reviews when new commits are pushed
- Require status checks to pass (when workflows are added)
- Restrict who can push to matching branches: owner only
- Do not allow force pushes
- Do not allow deletions

## Legal-content change approval policy

Content and schema changes must follow the content lifecycle and validation rules. See [CHANGE-APPROVAL-POLICY.md](CHANGE-APPROVAL-POLICY.md) for the full transition matrix and evidence requirements.

Summary:

| Change type | Minimum path |
|-------------|--------------|
| Schema / ID / envelope | PR + owner review + schema validation |
| New draft entity | PR; may merge as `draft` without legal verification |
| Status → `verified` / `approved` / `published` | PR + source evidence + reviewer approval |
| Manifest / published set | PR + integrity validation + owner approval |
| Deprecation / archive | PR + rationale + owner approval |

A checkbox is not considered complete merely because a file exists; implementation must be validated.

## Archive policy

`archive/` contains completed or superseded project artifacts only.

Active schemas, manifests, live content, governance rules, and currently referenced contracts must remain outside `archive/`.

A checklist is archived only after all required items are verified at 100%. The archived record must preserve:

- completion date
- final commit SHA
- verification summary
- scope of the completed milestone

## Legal-content principles

- Preserve source provenance.
- Never invent citations, authorities, paragraph numbers, or legal propositions.
- Distinguish historical law from current law.
- Do not impose artificial word-count limits.
- Do not wholesale-copy copyrighted third-party material.
- Use stable canonical IDs.
- Treat published content as versioned data.
- Require validation before publication.
