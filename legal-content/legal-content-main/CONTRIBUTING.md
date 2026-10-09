# Contributing to legal-content

Thank you for contributing to the canonical legal content repository for CodePackr Law.

## Before you start

1. Read [docs/REPOSITORY-GOVERNANCE.md](docs/REPOSITORY-GOVERNANCE.md).
2. Read the active checklist: [docs/IMPLEMENTATION-CHECKLIST.md](docs/IMPLEMENTATION-CHECKLIST.md).
3. Read [docs/CHANGE-APPROVAL-POLICY.md](docs/CHANGE-APPROVAL-POLICY.md) if you are changing content status or schemas.
4. Confirm the application repo is `coolnaveen99/codepackr-law` and this content repo is `coolnaveen99/legal-content`. Do not introduce the name `codepackr-law-content`.

## Workflow

1. Create a branch from `main`:
   - `feat/...` for new entities or capabilities
   - `fix/...` for corrections
   - `chore/...` for docs, governance, or tooling
2. Make focused changes. Prefer one concern per PR.
3. Ensure every new or changed entity:
   - Uses a stable canonical ID (`entity-type:jurisdiction:local-id`)
   - Declares lifecycle `status`
   - Lists sources (or explicitly marks needs-review)
   - Validates against the relevant schema under `schemas/`
4. Open a pull request against `main` with:
   - Clear description of what changed and why
   - Checklist items affected (if any)
   - Source / verification notes for legal claims
5. Address review feedback. Do not merge your own PR unless you are the repository owner and the change is documentation-only or an emergency hotfix.

## What belongs here vs the application

| Belongs in **legal-content** | Belongs in **codepackr-law** |
|------------------------------|------------------------------|
| Topics, provisions, judgments, doctrines | UI, routes, tools |
| Comparisons, illustrations, sources | Admin Portal, Content Gateway client |
| Sanhita mappings, collections, SEO metadata | Validation integration, tests, deployment |
| Schemas and manifests | Branding, calculators, exam tools |

Do not duplicate the long-term canonical dataset into the application repository.

## Quality rules

- Zero invented citations, section numbers, holdings, or illustrations.
- Historical law (e.g. IPC / CrPC / IEA) must be labeled as historical concordance, not current primary law, for post-1 July 2024 criminal procedure and offences where BNS / BNSS / BSA apply.
- No artificial word-count quotas.
- No wholesale copying of copyrighted third-party annotations or headnotes.

## Questions

Open an issue in this repository or coordinate via the application repo maintainers.
