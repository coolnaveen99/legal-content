# Official PDF technical validation and manual-review workflow

This workflow applies only to technical retrieval/format checks. It is not a legal opinion and cannot verify statutory currency, case-law identity, or publication readiness.

## Current implementation boundary

The repository did not contain a dedicated PDF validator or PDF-specific CI failure log when issue #40 was inspected. The new validator therefore provides an explicit reusable technical gate and deterministic fixture tests. The repository-wide failures observed during the investigation were unrelated: the legal-content enhancement validator reported missing fields across multiple subjects, and the application E2E server failed to start. Neither is represented as a PDF incident.

The current runtime deliberately does not ship a PDF parsing/OCR dependency. It verifies HTTPS host, HTTP response, content type, byte count, and the `%PDF-` signature. A fetched PDF remains `MANUAL_REVIEW_REQUIRED` until a trusted parser/legibility adapter supplies a successful parse result; a signature alone is not proof that the PDF is structurally valid.

## Run

1. Create a local or reviewed JSON target list using the shape in `docs/official-pdf-targets.example.json`.
2. Include only known source records, set `expectedOfficialHost` to the exact issuing authority host confirmed from official metadata, and assign `reviewOwner` to a responsible person or role. Do not use a broad parent domain such as `gov.in`.
3. Run:

   ```sh
   node scripts/validate-official-pdfs.mjs --targets=docs/official-pdf-targets.json --output=docs/pdf-manual-review-queue.json
   ```

4. Review the human-readable console report and the generated queue. A result of `PASS WITH MANUAL REVIEW REQUIRED (N pending)` means only that the technical sub-gate has explicit review records; it is not a blanket pass.
5. Do not add secrets, session cookies, personal information, or private browser state to the target file or review evidence.

## Outcomes

- `PASS`: HTTPS host, response status, PDF signature and parser checks passed.
- `RETRYABLE`: timeout, 429, 5xx, or network error before the bounded attempt limit.
- `MANUAL_REVIEW_REQUIRED`: a human/browser/format check is needed after a known limitation, including persistent transient access failure or an unparsed/scanned PDF.
- `FAIL`: invalid/non-HTTPS URL, wrong host/redirect, definitive 404/410, HTML/JSON masquerading as a PDF, invalid signature, corrupt document, or other affirmative mismatch.

Retries are bounded to three attempts by default with exponential backoff. The technical checker is not allowed to reinterpret a definitive failure as manual review.

## Manual-review record and closure

For every queue item, a reviewer must record all applicable fields:

- source ID, title, exact URL, expected host, attempt time/environment, HTTP status, final URL and redirect details;
- content type, byte length, signature result, checksum if a local copy is available;
- whether the official document opens in a browser;
- reviewer and review date;
- identity match against issuing authority, title, Act/notification/judgment number, date, and relevant pages;
- page count, OCR/text extraction result, legibility notes and scan limitations;
- evidence URLs/notes, final review outcome (`verified`, `rejected`, or `pending`) and next action.

Use `closeManualReview` from the validator module only after the required record fields and evidence are available. A manual `verified` outcome means the reviewer recorded the technical document identity/accessibility review; it does not set any source entity's `content.verificationStatus`, topic enhancement verification, or publication status. Rejected sources must be replaced or explicitly retained as unavailable evidence. Pending items need a named owner and next action.

## Legal and publication boundary

The report and queue always set `legalVerificationAuthorized: false`, `publicationAuthorized: false`, and each result records `legalVerificationChanged: false`. Do not change those values as a workaround. Statutory verification, case-law verification, legal sign-off, SEO, and production gates must independently pass before publication. Unrelated schema/content/build failures remain blocking.

## Validation

Run `npm run test:pdf-validation` for deterministic fixture tests covering valid PDF technical evidence, HTML masquerading as PDF, 404/410, 403/CAPTCHA, timeout, 429/5xx, scanned PDF, corrupt PDF, host mismatch, bounded retries, manual-review closure, and queue reporting.

The initial rollout intentionally does not automatically fetch every URL in the legal corpus. Start with a reviewed explicit target list to avoid unbounded network calls, accidental host probing, or turning unrelated source records into CI failures.
