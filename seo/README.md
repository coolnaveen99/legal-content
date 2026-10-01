# SEO Metadata Contract

Structured SEO metadata for published legal-content entities. Legal content remains the source of truth; SEO metadata never changes legal substance.

## Required relationship

Each `seoRecord` must point to exactly one canonical legal-content entity using `content.canonicalEntityId`.

The validation gate checks:
- canonical entity ID exists and is not another `seoRecord`;
- `canonicalPath` starts with `/`;
- `canonicalPath` contains no query string or fragment;
- canonical paths are unique;
- SEO title is non-empty;
- description is at most 320 characters;
- `noindex`, when present, is boolean.

## Application boundary

`coolnaveen99/codepackr-law` may consume these records to populate page metadata, canonical URLs, Open Graph/Twitter metadata, breadcrumbs, and appropriate structured data.

SEO metadata must not be used to:
- invent legal propositions;
- imply that an unverified record is authoritative;
- copy proprietary legal-editorial material;
- expose private case information.

## Publication rule

Run the repository validation gate before merging SEO metadata changes:

```bash
npm run validate
```

Published SEO records must have source references and a valid lifecycle status under the canonical content rules.
