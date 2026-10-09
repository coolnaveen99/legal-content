#!/usr/bin/env node
/**
 * Official PDF technical validation.
 *
 * This gate establishes retrieval/format evidence only. It never changes a
 * legal source's verification status and never authorizes publication.
 */
import fs from "node:fs";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const PDF_OUTCOME = Object.freeze({
  PASS: "PASS",
  MANUAL_REVIEW_REQUIRED: "MANUAL_REVIEW_REQUIRED",
  FAIL: "FAIL",
  RETRYABLE: "RETRYABLE",
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const MAX_BYTES = 25 * 1024 * 1024;
const DEFAULT_ATTEMPTS = 3;

function isOfficialHost(hostname, expectedHost) {
  const host = hostname.toLowerCase().replace(/\.$/, "");
  const expected = String(expectedHost || "").toLowerCase().replace(/\.$/, "");
  return Boolean(expected) && (host === expected || host.endsWith("." + expected));
}

export function classifyPdfAttempt(input) {
  const now = input.attemptedAt || new Date().toISOString();
  const result = {
    outcome: PDF_OUTCOME.FAIL,
    sourceId: input.sourceId || null,
    title: input.title || null,
    url: input.url || null,
    expectedOfficialHost: input.expectedOfficialHost || null,
    attemptedAt: now,
    environment: input.environment || "unspecified",
    attempts: Number.isInteger(input.attempts) ? input.attempts : 1,
    httpStatus: input.httpStatus ?? null,
    finalUrl: input.finalUrl || input.url || null,
    redirected: Boolean(input.finalUrl && input.url && input.finalUrl !== input.url),
    redirectChain: Array.isArray(input.redirectChain) ? input.redirectChain : [],
    contentType: input.contentType || null,
    byteLength: Number.isInteger(input.byteLength) ? input.byteLength : null,
    signature: input.signature || "not_checked",
    parseStatus: input.parseStatus || "unknown",
    error: input.error || null,
    reason: "",
    reviewer: null,
    reviewedAt: null,
    browserOpens: null,
    identityCheck: "pending",
    pageCount: null,
    ocrResult: "not_checked",
    legibilityNotes: null,
    checksumSha256: input.checksumSha256 || null,
    finalReviewOutcome: "pending",
    evidence: input.evidence || [],
    nextAction: "Review source identity and document legibility; record reviewer and evidence.",
    legalVerificationChanged: false,
    publicationAuthorized: false,
  };

  let parsed;
  try {
    parsed = new URL(input.url);
  } catch {
    result.reason = "Invalid or missing URL.";
    result.nextAction = "Correct the source URL from an authoritative record; do not bypass.";
    return result;
  }
  if (parsed.protocol !== "https:") {
    result.reason = "Official PDF URLs must use HTTPS.";
    result.nextAction = "Replace with an authoritative HTTPS URL or reject the source.";
    return result;
  }
  if (!isOfficialHost(parsed.hostname, input.expectedOfficialHost)) {
    result.reason = "URL host does not match the expected official host.";
    result.nextAction = "Verify the issuing authority and host; do not bypass.";
    return result;
  }
  let finalParsed;
  try {
    finalParsed = new URL(result.finalUrl);
  } catch {
    result.reason = "Final URL is invalid.";
    result.nextAction = "Inspect redirect evidence and correct the source URL.";
    return result;
  }
  if (finalParsed.protocol !== "https:" || !isOfficialHost(finalParsed.hostname, input.expectedOfficialHost)) {
    result.reason = "Redirect target is not within the expected official HTTPS host.";
    result.nextAction = "Reject or correct the redirect target after authority verification.";
    return result;
  }

  const status = result.httpStatus;
  if (status === 404 || status === 410) {
    result.reason = "Source returned a definitive not-found/gone response.";
    result.nextAction = "Find the current official publication or record the source as unavailable.";
    return result;
  }
  if (status === 401 || status === 403 || input.captchaDetected) {
    result.outcome = PDF_OUTCOME.MANUAL_REVIEW_REQUIRED;
    result.reason = "Access is blocked or a human-verification interstitial was detected.";
    result.nextAction = "Open the official source in a browser and verify document identity; keep legal verification pending.";
    return result;
  }
  if (input.error || status === 429 || (status >= 500 && status <= 599) || status == null) {
    if (result.attempts < (input.maxAttempts || DEFAULT_ATTEMPTS)) {
      result.outcome = PDF_OUTCOME.RETRYABLE;
      result.reason = input.error || `Transient HTTP/network result: ${status ?? "no response"}.`;
      result.nextAction = "Retry with bounded exponential backoff.";
    } else {
      result.outcome = PDF_OUTCOME.MANUAL_REVIEW_REQUIRED;
      result.reason = input.error || `Transient HTTP/network failure persisted after ${result.attempts} attempts.`;
      result.nextAction = "Manually retrieve and identify the official document; keep legal verification pending.";
    }
    return result;
  }
  if (status < 200 || status >= 300) {
    result.reason = `Unexpected HTTP status ${status}.`;
    result.nextAction = "Investigate the response; do not treat it as a valid PDF.";
    return result;
  }
  if (result.contentType && /text\/html|application\/json/i.test(result.contentType)) {
    result.reason = "Server returned HTML/JSON instead of a PDF document.";
    result.nextAction = "Correct the source URL or reject the response.";
    return result;
  }
  if (result.signature === "invalid") {
    result.reason = "Response bytes do not have a PDF signature.";
    result.nextAction = "Reject the response and verify the official source URL.";
    return result;
  }
  if (result.byteLength === 0 || (result.byteLength != null && result.byteLength > MAX_BYTES)) {
    result.reason = "Response body is empty or exceeds the configured size limit.";
    result.nextAction = "Investigate source response and apply a reviewed size policy.";
    return result;
  }
  if (result.parseStatus === "corrupt") {
    result.reason = "PDF parser reports a corrupt or unreadable document.";
    result.nextAction = "Locate a valid official copy; do not bypass.";
    return result;
  }
  if (result.signature !== "valid" || result.parseStatus === "unknown" || result.parseStatus === "scanned") {
    result.outcome = PDF_OUTCOME.MANUAL_REVIEW_REQUIRED;
    result.reason = result.parseStatus === "scanned"
      ? "PDF appears image-only/scanned and requires human legibility/OCR review."
      : "Automated checks cannot establish full PDF structure or legibility.";
    result.nextAction = "Record browser access, identity checks, page count, OCR/legibility and reviewer evidence.";
    return result;
  }

  result.outcome = PDF_OUTCOME.PASS;
  result.reason = "HTTPS host, response status, PDF signature and parser checks passed.";
  result.nextAction = "No technical follow-up required; legal verification remains a separate gate.";
  return result;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function validatePdfTarget(target, options = {}) {
  const maxAttempts = options.maxAttempts || DEFAULT_ATTEMPTS;
  const fetchImpl = options.fetchImpl || globalThis.fetch;
  const sleep = options.sleep || delay;
  const environment = options.environment || "CI";
  let inferredHost = target.expectedOfficialHost || "";
  if (!inferredHost) { try { inferredHost = new URL(target.url).hostname; } catch { inferredHost = ""; } }
  const base = {
    ...target,
    expectedOfficialHost: inferredHost,
    maxAttempts,
    environment,
  };
  let last;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      const response = await fetchImpl(target.url, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(options.timeoutMs || 10000),
        headers: { Accept: "application/pdf,application/octet-stream;q=0.9,*/*;q=0.1", "User-Agent": "CodePackrLegalContentSourceCheck/1.0" },
      });
      const finalUrl = response.url || target.url;
      const contentType = response.headers?.get?.("content-type") || null;
      const contentLength = Number(response.headers?.get?.("content-length"));
      let bytes = new Uint8Array();
      if (response.ok && !/text\/html|application\/json/i.test(contentType || "")) {
        if (Number.isFinite(contentLength) && contentLength > MAX_BYTES) {
          last = classifyPdfAttempt({ ...base, attempts: attempt, httpStatus: response.status, finalUrl, contentType, byteLength: contentLength, signature: "invalid", parseStatus: "unknown" });
        } else {
          const buffer = new Uint8Array(await response.arrayBuffer());
          const signature = buffer.length >= 5 && new TextDecoder().decode(buffer.slice(0, 5)) === "%PDF-" ? "valid" : "invalid";
          const checksumSha256 = crypto.createHash("sha256").update(buffer).digest("hex");
          // No PDF parser is installed in this repository. A header signature alone
          // is insufficient for PASS, so received bytes remain pending review.
          last = classifyPdfAttempt({ ...base, attempts: attempt, httpStatus: response.status, finalUrl, contentType, byteLength: buffer.length, checksumSha256, signature, parseStatus: "unknown" });
        }
      } else {
        const textPrefix = response.ok ? await response.clone().text().catch(() => "") : "";
        const captchaDetected = /captcha|verify you are human|access denied/i.test(textPrefix);
        last = classifyPdfAttempt({ ...base, attempts: attempt, httpStatus: response.status, finalUrl, contentType, byteLength: Number.isFinite(contentLength) ? contentLength : null, signature: "not_checked", captchaDetected });
      }
    } catch (error) {
      last = classifyPdfAttempt({ ...base, attempts: attempt, error: error?.name === "TimeoutError" || error?.name === "AbortError" ? "Request timed out." : String(error?.message || error), maxAttempts });
    }
    if (last.outcome !== PDF_OUTCOME.RETRYABLE || attempt === maxAttempts) break;
    await sleep(250 * (2 ** (attempt - 1)));
  }
  return last;
}

export function closeManualReview(item, review) {
  if (item?.outcome !== PDF_OUTCOME.MANUAL_REVIEW_REQUIRED) {
    throw new Error("Only MANUAL_REVIEW_REQUIRED items can be manually reviewed.");
  }
  if (!review?.reviewer || !review?.reviewedAt || !review?.identityCheck || !review?.legibilityNotes || !Array.isArray(review?.evidence) || review.evidence.length === 0) {
    throw new Error("Manual closure requires reviewer, reviewedAt, identityCheck, legibilityNotes and evidence.");
  }
  if (!["verified", "rejected", "pending"].includes(review.finalReviewOutcome)) {
    throw new Error("finalReviewOutcome must be verified, rejected, or pending.");
  }
  return {
    ...item,
    reviewer: review.reviewer,
    reviewedAt: review.reviewedAt,
    browserOpens: review.browserOpens ?? null,
    identityCheck: review.identityCheck,
    pageCount: Number.isInteger(review.pageCount) ? review.pageCount : null,
    ocrResult: review.ocrResult || "not_recorded",
    legibilityNotes: review.legibilityNotes,
    checksumSha256: review.checksumSha256 || item.checksumSha256 || null,
    finalReviewOutcome: review.finalReviewOutcome,
    evidence: [...(item.evidence || []), ...review.evidence],
    nextAction: review.finalReviewOutcome === "pending"
      ? "Complete the remaining identity/legibility checks and record evidence."
      : review.finalReviewOutcome === "rejected"
        ? "Reject this document as a usable source and locate an authoritative replacement."
        : "Technical manual review recorded. Statutory/case-law verification and publication gates remain separate.",
    legalVerificationChanged: false,
    publicationAuthorized: false,
  };
}

export function buildManualReviewQueue(results, generatedAt = new Date().toISOString()) {
  const items = results
    .filter((r) => r.outcome === PDF_OUTCOME.MANUAL_REVIEW_REQUIRED)
    .map((r) => ({
      ...r,
      reviewer: r.reviewer || null,
      reviewedAt: r.reviewedAt || null,
      finalReviewOutcome: r.finalReviewOutcome || "pending",
      nextAction: r.nextAction || "Assign reviewer and record review evidence.",
      legalVerificationChanged: false,
      publicationAuthorized: false,
    }))
    .sort((a, b) => String(a.sourceId || a.url).localeCompare(String(b.sourceId || b.url)));
  return {
    schemaVersion: "v1",
    generatedAt,
    status: items.length ? "PASS_WITH_MANUAL_REVIEW_REQUIRED" : "PASS",
    pendingCount: items.filter((x) => x.finalReviewOutcome === "pending").length,
    legalVerificationAuthorized: false,
    publicationAuthorized: false,
    items,
  };
}

export function mergeManualReviewQueue(results, previousQueue, generatedAt = new Date().toISOString()) {
  const previous = new Map((previousQueue?.items || []).map((item) => [`${item.sourceId || ""}|${item.url || ""}`, item]));
  const merged = results.map((result) => {
    if (result.outcome !== PDF_OUTCOME.MANUAL_REVIEW_REQUIRED) return result;
    const old = previous.get(`${result.sourceId || ""}|${result.url || ""}`);
    // Preserve a completed review only when a fetched-byte checksum proves the
    // reviewed document is byte-identical. Without a checksum, re-open the review.
    if (!old || !result.checksumSha256 || old.checksumSha256 !== result.checksumSha256 || old.finalReviewOutcome === "pending") return result;
    return {
      ...result,
      reviewer: old.reviewer,
      reviewedAt: old.reviewedAt,
      browserOpens: old.browserOpens,
      identityCheck: old.identityCheck,
      pageCount: old.pageCount,
      ocrResult: old.ocrResult,
      legibilityNotes: old.legibilityNotes,
      finalReviewOutcome: old.finalReviewOutcome,
      evidence: [...(result.evidence || []), ...(old.evidence || [])],
      nextAction: old.nextAction,
      legalVerificationChanged: false,
      publicationAuthorized: false,
    };
  });
  return buildManualReviewQueue(merged, generatedAt);
}

async function main() {
  const args = process.argv.slice(2);
  const targetArg = args.find((x) => x.startsWith("--targets="))?.slice("--targets=".length);
  const outputArg = args.find((x) => x.startsWith("--output="))?.slice("--output=".length);
  if (!targetArg) {
    console.error("Usage: node scripts/validate-official-pdfs.mjs --targets=docs/official-pdf-targets.json [--output=docs/pdf-manual-review-queue.json]");
    console.error("Targets must be a JSON array of {sourceId,title,url,expectedOfficialHost}. No legal verification flags are changed.");
    process.exitCode = 2;
    return;
  }
  const targetPath = path.resolve(ROOT, targetArg);
  const targets = JSON.parse(fs.readFileSync(targetPath, "utf8"));
  if (!Array.isArray(targets)) throw new Error("PDF targets file must contain a JSON array.");
  const results = [];
  for (const target of targets) {
    if (!target?.sourceId || !target?.title || !target?.url || !target?.expectedOfficialHost) {
      results.push(classifyPdfAttempt({ ...target, url: target?.url || "", error: "Missing required sourceId/title/url/expectedOfficialHost metadata.", attempts: 1 }));
      continue;
    }
    results.push(await validatePdfTarget(target));
  }
  const outputPath = path.resolve(ROOT, outputArg || "docs/pdf-manual-review-queue.json");
  let previousQueue = null;
  if (fs.existsSync(outputPath)) {
    try { previousQueue = JSON.parse(fs.readFileSync(outputPath, "utf8")); } catch { throw new Error("Existing manual-review queue is invalid JSON; refusing to overwrite audit evidence."); }
  }
  const queue = mergeManualReviewQueue(results, previousQueue);
  const report = {
    generatedAt: new Date().toISOString(),
    technicalGate: queue.status,
    pendingManualReviewCount: queue.pendingCount,
    counts: Object.fromEntries(Object.values(PDF_OUTCOME).map((outcome) => [outcome, results.filter((r) => r.outcome === outcome).length])),
    legalVerificationAuthorized: false,
    publicationAuthorized: false,
    results,
  };
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(queue, null, 2) + "\n");
  console.log(`PDF TECHNICAL GATE: ${queue.pendingCount ? `PASS WITH MANUAL REVIEW REQUIRED (${queue.pendingCount} pending)` : queue.status}`);
  console.log(JSON.stringify(report, null, 2));
  if (results.some((r) => r.outcome === PDF_OUTCOME.FAIL || r.outcome === PDF_OUTCOME.RETRYABLE)) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((error) => {
    console.error(`PDF validation failed to run: ${error.message}`);
    process.exitCode = 1;
  });
}
