# Judgment Open-Corpus Source Policy

Status: ACTIVE — FV-001/FV-005 implementation
Date: 2026-10-06

## Purpose

Provide a bulk-accessible, AI-friendly acquisition path for Indian judgment verification without depending on direct scraping of restricted court portals.

## Source hierarchy

### Tier 1 — authoritative publisher evidence
- Supreme Court of India official judgment/report sources
- Official High Court judgment sources
- eCourts official judgment sources
- Official tribunal/regulator sources where applicable

These remain the legal authority.

### Tier 2 — trusted open bulk corpus
1. Indian Supreme Court Judgments — AWS Open Data
   - https://registry.opendata.aws/indian-supreme-court-judgments/
   - Public S3 bucket
   - CC-BY-4.0
   - Downloaded from eCourts
   - Provides metadata, Parquet, JSON and judgment PDFs.
2. Indian High Court Judgments — AWS Open Data
   - https://registry.opendata.aws/indian-high-court-judgments/
   - Public S3 bucket
   - CC-BY-4.0
   - Downloaded from eCourts.
3. Open India Law
   - https://github.com/Vaquill-AI/open-india-law
   - Structured corpus derived from official government sources.
   - Carries publisher/source provenance and source URLs in the current snapshot.

Tier 2 is the primary AI acquisition/research layer. It is not silently relabeled as the court publisher.

## Verification rule
An open-corpus record may support verification when:
- corpus provenance identifies the underlying official publisher/source;
- actual judgment text is available and inspected;
- case identity matches;
- citation/date/court metadata are consistent;
- the proposition being verified is supported by the judgment text.

The verification ledger must preserve both corpus source and underlying publisher/source URL when available.

## Secondary-source restriction
Indian Kanoon, SCC Online summaries, Wikipedia, blogs, coaching sites, model-answer sites and case-summary websites are discovery aids only. They cannot independently promote a judgment to verified.

## AI rule
AI may match cases, extract metadata, reconstruct judgment text from corpus chunks, identify facts/issues/reasoning/holding/ratio and flag discrepancies.
AI must not invent missing text, infer a ratio from a summary when judgment text is unavailable, fabricate paragraph/page references, or mark a record verified without evidence.

## Missing-source rule
If the open corpus contains metadata but no inspectable judgment text: NEEDS_SOURCE.
If text exists but identity/citation cannot be reconciled: NEEDS_REVIEW.
If authoritative provenance and inspectable judgment text support the material proposition: VERIFIED.

## Current-law rule
The open corpus is an archive/snapshot. It does not by itself prove that a proposition remains current. Current-law and later-treatment checks remain separate verification gates.

## Reproducibility
Do not commit the bulk judgment corpus into legal-content. Store only matching metadata, source identifiers, source URLs, verification status, hashes/checksums where available, and concise evidence notes.