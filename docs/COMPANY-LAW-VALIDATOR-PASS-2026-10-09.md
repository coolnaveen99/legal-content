# Company Law validator pass — 2026-10-09

Status: **NOT CLOSED**.

## Source URL
The Companies Act source now points to the India Code act handle: https://www.indiacode.nic.in/handle/123456789/2114. Section-level deep links are still not attached.

## Validator
`node scripts/validate.mjs` failed first on stale manifest hashes. `node scripts/refresh-manifest.mjs` rewrote `manifests/content-manifest.json` with 5254 entities. The validator then passed: 5254 files, 5254 unique ids, relationship missing=0, SEO 562 records, errors=0, warnings=0.

## Still open
Case-law gate is not locked. No company topic is marked verified or published. SEO records remain `noindex` and `review`.
