# Company Law SEO and source pass — 2026-10-09

Status: **NOT CLOSED**.

## Source
Added `sources/india-code-companies-act-2013.json` for the Companies Act, 2013 (Act 18 of 2013). Status is `review`. The URL is the India Code home page. Section-level deep links are not attached.

The source id is on all 561 company topic `sources` arrays.

## SEO
Added 561 `seo/topic-*.json` records. Each points at the company topic id, uses a unique canonical path, and is `noindex: true`. Status is `review`, not `published`.

## Still open
Case-law gate is not locked. No topic is marked verified. Repository-wide `npm run validate` was not run.
