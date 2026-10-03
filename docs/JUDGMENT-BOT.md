# Judgment Ingestion Bot

The bot discovers publicly accessible Supreme Court and High Court judgment records, preserves source provenance, creates canonical `judgment` entities, validates them, and commits new records to `main`.

## Official sources

- Supreme Court of India: https://www.sci.gov.in/
- eCourts High Court judgment portal: https://judgments.ecourts.gov.in/pdfsearch/
- eCourts High Court services: https://hcservices.ecourts.gov.in/hcservices/static/highcourts.php

## Safety and verification

The bot does **not** bypass CAPTCHA, authentication, robots controls, or other access controls.

Automated records are created with `status: research`. They are not silently promoted to `published`. Substantive legal fields such as holding, ratio decidendi, final order, precedents, and present legal position require verification before publication.

## Pipeline

1. Discover official listings.
2. Resolve the judgment/document page.
3. Resolve an official PDF when available.
4. Fingerprint the source with SHA-256.
5. Extract text using `pdftotext`.
6. Create canonical judgment JSON.
7. Run judgment-record verification.
8. Refresh the repository manifest.
9. Run `npm run validate`.
10. Run `npm run validate:enhancements`.
11. Commit to `main` only after all gates pass.

## Schedule

The GitHub Actions workflow runs daily and can also be started manually from Actions.

For a safe test, use the workflow's `dry_run=true` input first.

## High Court handling

The national eCourts portal can expose CAPTCHA/interactive verification. The adapter detects that condition and stops rather than attempting to bypass it. Additional official, non-interactive High Court feeds can be added as adapters without changing the canonical schema.

