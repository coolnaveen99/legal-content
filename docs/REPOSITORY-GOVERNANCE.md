# Legal Content Repository Governance

## Repository identity

- Repository: `coolnaveen99/legal-content`
- Repository purpose: canonical, structured, versioned legal content for the CodePackr Law application and future compatible legal products.
- Application repository: `coolnaveen99/codepackr-law`

## Source of truth

The active implementation checklist is:

`docs/IMPLEMENTATION-CHECKLIST.md`

It tracks architecture, schemas, content quality, verification, gateway integration, publishing, migration, and production readiness.

## Naming

The canonical repository name is **legal-content**.

Do not use `codepackr-law-content` as a repository name, path, package name, integration identifier, or documentation reference.

When referring to this repository in integration documentation, use:

`coolnaveen99/legal-content`

## Change policy

Content and schema changes must be reviewed according to the content lifecycle and validation rules. A checkbox is not considered complete merely because a file exists; implementation must be validated.

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
