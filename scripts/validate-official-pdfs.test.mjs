import test from "node:test";
import assert from "node:assert/strict";
import {
  PDF_OUTCOME,
  classifyPdfAttempt,
  validatePdfTarget,
  closeManualReview,
  buildManualReviewQueue,
  mergeManualReviewQueue,
} from "./validate-official-pdfs.mjs";

const base = {
  sourceId: "source:india:sample-gazette",
  title: "Sample Gazette PDF",
  url: "https://egazette.gov.in/sample.pdf",
  expectedOfficialHost: "egazette.gov.in",
  httpStatus: 200,
  finalUrl: "https://egazette.gov.in/sample.pdf",
  contentType: "application/pdf",
  byteLength: 1200,
  signature: "valid",
  parseStatus: "valid",
  attemptedAt: "2026-10-09T10:00:00.000Z",
};

test("valid official PDF technical checks PASS without authorizing legal verification", () => {
  const result = classifyPdfAttempt(base);
  assert.equal(result.outcome, PDF_OUTCOME.PASS);
  assert.equal(result.legalVerificationChanged, false);
  assert.equal(result.publicationAuthorized, false);
});

test("HTML masquerading as a PDF is a hard FAIL", () => {
  const result = classifyPdfAttempt({ ...base, contentType: "text/html", signature: "invalid" });
  assert.equal(result.outcome, PDF_OUTCOME.FAIL);
});

test("404 and 410 remain hard failures", () => {
  for (const httpStatus of [404, 410]) {
    assert.equal(classifyPdfAttempt({ ...base, httpStatus }).outcome, PDF_OUTCOME.FAIL);
  }
});

test("403/CAPTCHA requires manual review instead of being marked verified", () => {
  const result = classifyPdfAttempt({ ...base, httpStatus: 403, signature: "not_checked", captchaDetected: true });
  assert.equal(result.outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
  assert.equal(result.legalVerificationChanged, false);
});

test("timeouts are retryable before bounded attempts are exhausted", () => {
  assert.equal(classifyPdfAttempt({ ...base, error: "Request timed out.", attempts: 1, maxAttempts: 3 }).outcome, PDF_OUTCOME.RETRYABLE);
  assert.equal(classifyPdfAttempt({ ...base, error: "Request timed out.", attempts: 3, maxAttempts: 3 }).outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
});

test("429 and 5xx are retryable, then manual review after the retry limit", () => {
  for (const httpStatus of [429, 500, 503]) {
    assert.equal(classifyPdfAttempt({ ...base, httpStatus, attempts: 1, maxAttempts: 3 }).outcome, PDF_OUTCOME.RETRYABLE);
    assert.equal(classifyPdfAttempt({ ...base, httpStatus, attempts: 3, maxAttempts: 3 }).outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
  }
});

test("scanned/image-only PDF requires human legibility review", () => {
  assert.equal(classifyPdfAttempt({ ...base, parseStatus: "scanned" }).outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
});

test("corrupt PDF is a hard failure", () => {
  assert.equal(classifyPdfAttempt({ ...base, parseStatus: "corrupt" }).outcome, PDF_OUTCOME.FAIL);
});

test("invalid URLs, non-HTTPS URLs and mismatched official hosts fail closed", () => {
  assert.equal(classifyPdfAttempt({ ...base, url: "not a url" }).outcome, PDF_OUTCOME.FAIL);
  assert.equal(classifyPdfAttempt({ ...base, url: "http://egazette.gov.in/sample.pdf" }).outcome, PDF_OUTCOME.FAIL);
  assert.equal(classifyPdfAttempt({ ...base, url: "https://example.com/sample.pdf" }).outcome, PDF_OUTCOME.FAIL);
  assert.equal(classifyPdfAttempt({ ...base, finalUrl: "https://example.com/redirected.pdf" }).outcome, PDF_OUTCOME.FAIL);
});

test("network timeout is retried with bounded attempts and becomes auditable manual review", async () => {
  let calls = 0;
  const result = await validatePdfTarget({
    sourceId: base.sourceId, title: base.title, url: base.url, expectedOfficialHost: base.expectedOfficialHost,
  }, {
    maxAttempts: 2,
    timeoutMs: 1,
    sleep: async () => {},
    fetchImpl: async () => { calls += 1; throw new Error("socket timeout fixture"); },
  });
  assert.equal(calls, 2);
  assert.equal(result.outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
  assert.equal(result.attempts, 2);
  assert.equal(result.legalVerificationChanged, false);
});

test("manual-review closure requires evidence and never unlocks legal verification/publication", () => {
  const pending = classifyPdfAttempt({ ...base, parseStatus: "unknown" });
  assert.equal(pending.outcome, PDF_OUTCOME.MANUAL_REVIEW_REQUIRED);
  assert.throws(() => closeManualReview(pending, { reviewer: "Reviewer" }), /requires reviewer/);
  const closed = closeManualReview(pending, {
    reviewer: "Reviewer One",
    reviewedAt: "2026-10-09T11:00:00.000Z",
    browserOpens: true,
    identityCheck: "Matched title and issuing authority against official index.",
    pageCount: 12,
    ocrResult: "readable",
    legibilityNotes: "All pages legible.",
    finalReviewOutcome: "verified",
    evidence: ["https://egazette.gov.in/sample-index"],
  });
  assert.equal(closed.finalReviewOutcome, "verified");
  assert.equal(closed.legalVerificationChanged, false);
  assert.equal(closed.publicationAuthorized, false);
});

test("manual-review queue is deterministic and reports pending count explicitly", () => {
  const a = classifyPdfAttempt({ ...base, sourceId: "source:india:z", parseStatus: "unknown" });
  const b = classifyPdfAttempt({ ...base, sourceId: "source:india:a", parseStatus: "unknown" });
  const queue = buildManualReviewQueue([a, b, classifyPdfAttempt(base)], "2026-10-09T12:00:00.000Z");
  assert.equal(queue.status, "PASS_WITH_MANUAL_REVIEW_REQUIRED");
  assert.equal(queue.pendingCount, 2);
  assert.equal(queue.items[0].sourceId, "source:india:a");
  assert.equal(queue.legalVerificationAuthorized, false);
  assert.equal(queue.publicationAuthorized, false);
});


test("previous manual closure is preserved only when the fetched PDF checksum is unchanged", () => {
  const first = classifyPdfAttempt({ ...base, parseStatus: "unknown", checksumSha256: "abc123" });
  const closed = closeManualReview(first, {
    reviewer: "Reviewer One",
    reviewedAt: "2026-10-09T11:00:00.000Z",
    browserOpens: true,
    identityCheck: "Matched issuing authority and title.",
    pageCount: 12,
    ocrResult: "readable",
    legibilityNotes: "Legible.",
    finalReviewOutcome: "verified",
    evidence: ["official index entry"],
  });
  const sameDocument = mergeManualReviewQueue(
    [classifyPdfAttempt({ ...base, parseStatus: "unknown", checksumSha256: "abc123" })],
    { items: [closed] },
    "2026-10-09T12:00:00.000Z",
  );
  assert.equal(sameDocument.pendingCount, 0);
  assert.equal(sameDocument.status, "PASS");
  assert.equal(sameDocument.items[0].finalReviewOutcome, "verified");
  assert.equal(sameDocument.legalVerificationAuthorized, false);

  const changedDocument = mergeManualReviewQueue(
    [classifyPdfAttempt({ ...base, parseStatus: "unknown", checksumSha256: "changed456" })],
    { items: [closed] },
    "2026-10-09T12:00:00.000Z",
  );
  assert.equal(changedDocument.pendingCount, 1);
  assert.equal(changedDocument.items[0].finalReviewOutcome, "pending");
});
