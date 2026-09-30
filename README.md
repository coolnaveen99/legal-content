# Legal Content

Canonical, structured legal content repository for the CodePackr Law digital legal library.

## Purpose

This repository is the canonical content/data layer for the legal library. It is designed to hold structured, versioned, source-aware legal knowledge independently from the application code in `codepackr-law`.

## Validation

```bash
npm install
npm run manifest
npm run ci
```

`npm run validate` checks JSON Schema, canonical IDs, duplicate IDs, sources, cross-entity references, and manifest parity.
Pull requests are gated by `.github/workflows/validate.yml`.

## Application consumption

`coolnaveen99/codepackr-law` reads published entities through ContentGateway. Set `VITE_LEGAL_CONTENT_BASE_URL` to a read-only base URL that serves this repository's files. A Git clone URL is not a runtime API.

The current corpus is a pilot slice. Full migration is tracked in `docs/IMPLEMENTATION-CHECKLIST.md` §11 and `docs/MIGRATION-PILOT.md`.

The canonical repository identity is **coolnaveen99/legal-content**.
