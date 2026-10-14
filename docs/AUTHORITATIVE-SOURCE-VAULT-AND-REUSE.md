# Authoritative Source Vault, Markdown Extraction, and Reuse Policy

**Effective:** 2026-10-14  
**Scope:** `coolnaveen99/legal-content` and consumers such as `coolnaveen99/codepackr-law`  
**Purpose:** Stop repeating the same source retrieval and identity checks for every topic while preserving claim-level legal verification and source provenance.

## Decision

**Use both the original document and a searchable Markdown derivative where permitted and technically feasible.** The original official PDF (or approved authoritative replacement) is the source artifact; Markdown is a derived working/indexing format, never a replacement for the original and never legal authority by itself.

The project must distinguish four separate states:

1. **Artifact acquired and identified** — exact bytes and document identity are recorded.
2. **Text extraction reviewed** — extraction/OCR is complete enough to search and has been checked against page images for material errors.
3. **Claim-level legal verification** — a specific topic/proposition has been checked against the relevant primary-source passage, amendments, commencement and applicable date.
4. **Release/publication** — all separate topic, subject, technical, SEO, production, rollback and legal sign-off gates pass.

One state does not automatically imply the next.

## Canonical source artifact workflow

### 1. Check the shared registry before fetching

Before opening or downloading a source, search `docs/source-artifact-registry.json` and the existing source entity/records. If the same instrument/version is already acquired and identity-checked, reuse that artifact and its recorded hash/page map; do not fetch it again for every topic.

A new retrieval is justified only when the source is missing, its identity is uncertain, the source has changed, a new amendment/version/commencement issue is being verified, a review-due rule triggers, or a material discrepancy is found.

### 2. Acquire once, with provenance

Prefer the exact official issuer source. If the URL is blocked, use an accessible alternative only after checking that it is authoritative for the same instrument/version (for example, another official government repository or official Gazette record). A third-party mirror or search-index excerpt can help locate a source but must not alone be promoted as primary authority.

Record, at minimum:
- stable `sourceId`, full instrument title, Act/Rule/notification number and year;
- issuing authority, publication date, commencement/effective dates where applicable;
- original URL, final URL, redirect chain, host, retrieval timestamp and retrieval outcome;
- origin classification: `official_original`, `official_alternative`, `secondary_discovery_only`, or `unavailable`;
- exact artifact path or durable artifact URL, byte length, SHA-256 of bytes actually acquired, and MIME/signature result;
- version/amendment relationship, supersedes/superseded-by links where evidenced, and limitations;
- acquisition operator and reviewer/review date, without fabricating a reviewer.

Never invent a checksum for bytes not obtained. A hash proves byte identity only for the bytes actually hashed; it does not prove that the instrument is legally current or that a claim is correct.

### 3. Preserve the original and create a derivative

When repository policy, redistribution rights, security, and size limits permit, store the raw PDF under a stable path such as:

`source-artifacts/india/<instrument-slug>/<version-or-date>/source.pdf`

Store extracted Markdown beside it as `source.md` and provenance as `metadata.json`. If the binary cannot appropriately be committed (size, licence, repository limits, or policy), store it in approved durable artifact storage and commit the exact URL, access conditions, SHA-256, byte length, and retrieval instructions. Do not store session cookies, private browser state, or credentials.

Convert the PDF to Markdown using a reproducible extractor. Keep page boundaries and precise references, for example `<!-- PDF page 12 -->`, printed page labels where present, section/rule headings, tables, schedules and footnotes. Preserve original wording; mark OCR uncertainty rather than silently correcting it. For scanned/image-only pages, use OCR only as a search aid and visually compare material passages against the page image. Record extractor/tool and version, run date, OCR method, warnings, and reviewed page ranges.

Markdown must not omit a page, schedule, proviso, footnote, table or amendment note without an explicit logged reason. The PDF/image remains the tie-breaker whenever extraction differs or is ambiguous.

### 4. Review identity and extraction once per version

The source reviewer confirms:
- instrument identity (title, number/date, issuing authority);
- correct version and amendments/commencement relevant to the intended claim;
- page count and completeness;
- extraction quality, page mapping, tables/schedules, OCR and legibility limitations;
- exact artifact checksum and a stable evidence link.

Use explicit statuses: `not_acquired`, `acquired_unreviewed`, `identity_reviewed`, `extraction_reviewed`, `source_check_required`, `superseded`, or `unavailable`. These describe the artifact only; do not map them automatically to a legal entity's `verificationStatus`.

### 5. Reuse across topics without repeating retrieval

Once a source version has been identity-checked, topic reviewers should cite the shared `sourceId` and exact section/rule/article plus page/paragraph locator where reliable. Each claim still needs its own verification record: the source being present in a topic's `sources[]` is not proof that the claim was checked.

The claim record should identify:
- topic ID and exact proposition/issue;
- source ID and artifact version/hash;
- provision and page/paragraph pinpoint, if supported by the source;
- amendment/commencement/current-law check performed;
- reviewer and review date, verification status and unresolved limitations.

**Do not download/re-parse/re-review the same unchanged instrument for every topic.** Reuse the reviewed artifact and its page map, and perform the narrow claim-level check. One source review may support many claims, but it does not automatically verify all of them.

### 6. Change detection and re-review

Recheck the remote source on a documented schedule or trigger, not on every topic operation. Reacquire only if the source URL changes, an official amendment/consolidation is published, current-law status is in question, the recorded artifact is suspected to be incomplete/altered, or the review-due policy triggers. Record every new version as a new immutable artifact; do not overwrite the old snapshot. Link versions and identify which topics/claims need targeted re-review.

An unchanged SHA-256 means the locally stored bytes are unchanged; it does not establish that no newer version exists online. A changed remote file or official notice triggers impact analysis, not blind replacement.

## Registry and audit

- `docs/source-artifact-registry.json` is the index for artifact acquisition/extraction state and reuse pointers. It is not a competing task queue and does not replace the Work Control Master, source entities, or topic-level verification ledgers.
- Keep the PDF manual-review queue as the technical access/format diagnostic. Link queue items to the registry by `sourceId`; do not mark a failed original URL as passed just because an alternate source is used.
- If an authoritative alternate is sufficient for a specific legal claim, record that claim-level evidence separately. The original PDF queue item may remain pending without blocking unrelated claims.
- A claim with insufficient primary evidence stays `SOURCE_CHECK_REQUIRED`/`BLOCKED`.
- Preserve all existing validation, legal sign-off, publication, SEO, production, rollback and lifecycle gates.

## Acceptance checklist for each new source artifact

- [ ] Existing source ID/registry checked; no duplicate download.
- [ ] Issuer and instrument/version identified from authoritative evidence.
- [ ] Provenance, original URL, redirects, retrieval date, byte length and actual SHA-256 recorded.
- [ ] Original PDF retained in an approved location when permitted; otherwise durable artifact reference recorded.
- [ ] Markdown extraction retains page markers, structure, tables/schedules and uncertainty annotations.
- [ ] Material passages and OCR-sensitive pages compared against the PDF/image.
- [ ] Source reviewer, date, reviewed pages and limitations recorded.
- [ ] Registry updated without fabricating unavailable evidence.
- [ ] Claims separately linked to exact source version and pinpoint; no bulk verification inferred.
- [ ] Relevant tests/validators run; CI status reported from the actual commit.

## Initial rollout

Start with the six entries already in `docs/pdf-manual-review-queue.json`. Populate this registry from actual retrieval/review evidence, one document/version at a time. Do not claim any artifact is downloaded or verified until its path/URL, checksum, identity and review evidence exist. After the six, apply the same registry-first process to other high-reuse statutes/rules; prioritize by active topic dependencies and legal risk, not arbitrary volume.

