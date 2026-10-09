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

## P0 Multi-Worker Coordination

Before any enhancement work, read [`docs/TEAM-WORK-COORDINATION-GATE.md`](docs/TEAM-WORK-COORDINATION-GATE.md). `main` is the source of truth. Check current content, enhancement pointers, open/recent PRs, recent commits, and topic-level ownership before starting. A closed PR does not by itself mean the subject is complete. Never redo merged work or overlap another worker's assigned range.

## Application consumption

`coolnaveen99/codepackr-law` reads published entities through ContentGateway. Set `VITE_LEGAL_CONTENT_BASE_URL` to a read-only base URL that serves this repository's files. A Git clone URL is not a runtime API.

The current corpus is a pilot slice. Full migration is tracked in `docs/IMPLEMENTATION-CHECKLIST.md` §11 and `docs/MIGRATION-PILOT.md`.

The canonical repository identity is **coolnaveen99/legal-content**.
