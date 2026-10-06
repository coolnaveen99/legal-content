# Judgment Verification Open-Corpus Workflow

## Goal
Use trusted open bulk datasets to acquire and match judgment text/metadata before detailed AI verification.

## Recommended corpus order
1. Open India Law — structured discovery and matching.
2. AWS Indian Supreme Court Judgments — Supreme Court metadata/PDF fallback.
3. AWS Indian High Court Judgments — High Court metadata/PDF fallback.
4. Official court/eCourts source — provenance/current-source confirmation where accessible.

AWS's Supreme Court dataset provides year-partitioned metadata, Parquet, JSON and PDF objects and is publicly accessible without an AWS account. Open India Law provides normalized judgment chunks and publisher/source provenance.

## Local acquisition
Keep bulk data outside the Git repository, for example:
- data/open-india-law/
- data/aws-sc-metadata/
- data/aws-hc-metadata/

Do not commit the bulk corpus.

## Matching
Run scripts/build-open-judgment-verification-queue.mjs against the downloaded corpus. The generated report is evidence for FV-001/FV-005. It never promotes a record by itself.

## AI verification
For each matched record: inspect the actual judgment text; verify identity/citation/date/court; extract facts, issues, reasoning, holding and ratio; check later treatment/current law; attach source/provenance; assign the final evidence-backed status.

If only metadata exists, keep NEEDS_SOURCE.

## Important
The open corpus is an acquisition/research layer. It is not silently represented as the issuing court.
Do not use Indian Kanoon, blogs, coaching notes or AI summaries as independent verification evidence.