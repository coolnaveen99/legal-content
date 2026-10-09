# Company Law remaining blockers — 2026-10-09

Status: **NOT CLOSED**. Updated after the statutory-pointer sweep and the section-link attempt.

## Done
- 561/561 topics are substantive-topic-specific-v1.
- 561/561 have a structured caseLaw entry. Settled citations where used; otherwise a statutory pointer from the existing operative rule.
- Section 378ZU is the rule-making power. Re-conversion is section 378ZS.
- Act source is the India Code handle and the official PDF URL.
- 561 noindex SEO records exist, status review.
- `node scripts/validate.mjs` passed: 5254 entities, 0 errors.
- codepackr-law has 561 modules and `tsc --noEmit` passed with a 4 GB heap.

## Not done
1. Section-level India Code deep links were not resolved. The handle returned Access Denied and the PDF timed out. `sectionDeepLink` remains null.
2. No company topic is `verified` or `published`.
3. SEO records stay `noindex` and `review`.
4. The case-law gate is not locked. Statutory pointers are not primary-report verification.
5. `validate:topics` still fails on missing Contract files. That is outside Company Law.

COMPLETE_LOCKED is not claimed.
