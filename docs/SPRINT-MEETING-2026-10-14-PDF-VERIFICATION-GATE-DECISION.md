# Sprint Meeting — PDF Retrieval vs Legal Verification Gate

**Date:** 2026-10-14 (Asia/Kolkata)  
**Format:** Asynchronous, evidence-based decision session  
**Repositories:** `coolnaveen99/codepackr-law`, `coolnaveen99/legal-content`  
**Facilitator/recorder:** ChatGPT  
**Project-owner instruction:** Run the meeting, consider removing the PDF requirement from legal verification, and implement the resulting instructions.  
**Other attendees / votes:** None independently recorded. This is not represented as a multi-person consensus or legal sign-off.

## 1. Evidence reviewed

- Legal Content Work Control Master: current file on `main`; source verification and release gates remain authoritative.
- `AGENTS.md`, `docs/SPRINT-MEETING-INSTRUCTIONS.md`, and the existing PDF triage/queue.
- Current PDF queue: `PASS_WITH_MANUAL_REVIEW_REQUIRED`, **6 pending**, `legalVerificationAuthorized=false`, `publicationAuthorized=false`.
- All six entries lack completed reviewer evidence; the inaccessible target responses do not provide usable PDF bytes/checksums. Five have an alternate document record/copy for identity triage; the 2025 Gazette item has only third-party indexed text and no readable PDF in the recorded triage.
- Legal Content's latest observed `Validate legal content` run succeeded on older SHA `51ab6e8f8a6cb86c306af8a599bbabdcde83b7b7` (run [38540493902](https://github.com/coolnaveen99/legal-content/actions/runs/38540493902)); that is **not** a validation result for current `main` `fe65442e919d1c1365801d0dd671265b73af393e`.
- CodePackr Law Phase 0 baseline succeeded on `c922d86fa16dcf0f16c1da344e6a3532c9ee01dd` (run [38537162798](https://github.com/coolnaveen99/codepackr-law/actions/runs/38537162798)). This is not production E2E or legal sign-off.

## 2. Question

Can the project remove the requirement that every legal-verification decision must wait for a byte-identical copy of the original PDF URL, and mark all six PDF items as okay?

## 3. Decision

**ACCEPTED WITH SCOPE LIMITS:** Remove the *blanket dependency* on successful retrieval/checksum of the original PDF URL as a universal legal-verification gate. PDF retrieval/format validation remains a technical diagnostic and auditable queue, not a substitute for substantive legal verification.

**NOT ACCEPTED:** Marking all six items as passed/okay, deleting their evidence, changing their final review outcomes, setting the queue's authorization flags to true, or claiming the affected legal propositions are verified. The current evidence does not support those actions.

### Operational rule

1. Verify each legal proposition against the most direct accessible authoritative evidence available: official legislation/Rules/Gazette text, an official HTML/text source, or an approved official-hosted copy.
2. Record the exact claim/topic, instrument title and number/date, issuing authority, source URL, relevant provision/pages or excerpt, retrieval/review date, reviewer identity/role, and any limitations. Record a checksum for bytes actually reviewed when available; do not fabricate one for inaccessible bytes.
3. A qualified reviewer may close the **claim-level legal-source check** when the evidence establishes the relevant instrument and proposition. This does **not** close the original URL's PDF technical-review item or prove byte identity.
4. If no sufficiently authoritative accessible source exists, keep only the affected claim/topic `SOURCE_CHECK_REQUIRED`/`BLOCKED`. Do not infer statutory text or commencement.
5. Keep the six-entry PDF queue visible as technical follow-up. Its pending status alone must not block unrelated verified claims or make the entire repository red; it must not authorize publication or override topic/subject release gates.
6. Do not weaken URL-host, signature, corruption, identity, or checksum-preservation tests merely to obtain a green status. Keep `test:pdf-validation` as a technical test suite.

## 4. Discussion and trade-offs

- The old workflow conflated access to one file URL with the ability to verify a legal proposition. HTTP 403/timeouts establish access failure, not invalidity of the source or of the law.
- A source-format gate can remain useful for document identity and legibility, but it should not become a universal blocker when an accessible official source independently supports the claim.
- Alternate non-official text may guide discovery but is not enough by itself to promote a legal claim to verified current law.
- No human legal reviewer or additional meeting participant was present/recorded here. This decision updates process instructions; it is **not** a claim that the six documents or all legal content have been approved.

## 5. Actions

| ID | Action | Owner | Status / closure evidence |
|---|---|---|---|
| PDF-01 | Update Work Control Master, agent instructions, and meeting runbook in both repositories to distinguish claim-level legal verification from PDF retrieval status. | Repository maintainer / implementation | Implemented by this meeting's documentation commits; verify links and commit SHAs after writes. |
| PDF-02 | Preserve all six pending queue entries and existing PDF validation tests; do not mark them all okay. | Legal Content maintainer | Queue remains unchanged; pending count remains 6. |
| PDF-03 | For each claim that depends on one of these sources, record claim-specific authoritative evidence or leave that claim blocked. | Existing legal/source reviewer | Open; no reviewer closure is fabricated by this meeting. |
| PDF-04 | Re-run relevant validation/CI after instruction changes and report actual results on the new commit SHAs. | Repository/CI owner | Pending until workflows finish. |

## 6. Readiness

**Decision status:** Process-policy change approved by the requesting project owner; no broader consensus or legal sign-off is claimed.  
**PDF queue status:** Still `PASS_WITH_MANUAL_REVIEW_REQUIRED`, 6 pending.  
**Legal verification/publication readiness:** Not granted by this meeting. All ordinary claim-, subject-, technical-, SEO-, production-, rollback- and sign-off gates remain in force.

