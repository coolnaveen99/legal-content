# Judgments

Canonical judgment records and detailed judgment-decoding content. Preserve source provenance and never invent paragraph/page references.

## Reference-source resolution

Pending judgment records do **not** need 296 manually maintained URLs before the verification queue can proceed.

Reference acquisition is handled centrally:

- Primary acquisition corpus: Indian Supreme Court Judgments Open Data.
- The corpus provides structured Parquet metadata and individual judgment PDFs and covers Supreme Court judgments from 1950–2025. [AWS Open Data Registry](https://registry.opendata.aws/indian-supreme-court-judgments/)
- Bulk Parquet/TAR processing is preferred over downloading individual objects repeatedly.
- Secondary acquisition/matching: Open India Law, whose current snapshot exposes Supreme Court judgments with citation and source-publisher metadata.
- Official eCourts remains the preferred court-facing search/inspection route where the source can be directly inspected.

### Verification rule

A resolved reference is **not** equivalent to legal verification.

    source resolved
          ↓
    judgment text inspected
          ↓
    identity/citation/date checked
          ↓
    facts/issues/reasoning/holding/ratio checked
          ↓
    authoritative evidence recorded
          ↓
    verificationStatus = verified

If a source cannot be inspected, the record remains pending/needs-source. No AI-generated summary or secondary citation may promote a record.

### Operational benefit

This design removes the 296-record source-link queue from the critical path. The application and verification tooling can resolve the appropriate source when a judgment is opened, while substantive verification proceeds by priority and topic dependency.

The canonical record may still contain explicit `sources[]` evidence when an individual judgment has been verified.
