# Company Law remaining blockers — 2026-10-09

Status: **NOT CLOSED**.

## Done
- 561/561 topics are substantive-topic-specific-v1.
- Section 378ZU is the rule-making power. Re-conversion is section 378ZS.
- Act source is the India Code handle https://www.indiacode.nic.in/handle/123456789/2114.
- 561 noindex SEO records exist, status review.
- `node scripts/validate.mjs` passed after the manifest refresh: 5254 entities, 0 errors.
- codepackr-law has 561 modules, floor 561, and `tsc --noEmit` passed with a 4 GB heap.
- Standard citations are on 18 doctrinal files. The case-law gate is not locked.

## Not done
1. Section-level India Code deep links were not resolved. Each topic now records the act handle and `sectionDeepLink: null`.
2. No company topic is `verified` or `published`.
3. SEO records stay `noindex` and `review`.
4. Case-law arrays are empty on section files. Doctrinal citations are standard references, not a primary-report verification.
5. `validate:topics` still fails on missing Contract files. That is outside Company Law.

COMPLETE_LOCKED is not claimed.
