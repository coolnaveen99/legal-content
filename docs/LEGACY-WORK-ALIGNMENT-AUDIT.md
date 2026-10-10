# Legacy Work Alignment Audit — Operating Instructions

**Status:** Active procedure; does not replace the Work Control Master.
**Applies to:** `coolnaveen99/codepackr-law` and `coolnaveen99/legal-content`.
**Execution:** Direct-to-`main` only when authorized by the project owner; do not create PRs or feature branches when direct-main instructions apply.

## Purpose

Reconcile previous completed, partially completed, in-progress, blocked, and unstarted work with the current roadmap while preserving valid work, avoiding duplicate assignments, and keeping all original repository gates intact.

## Authority and boundaries

1. The Work Control Master in each repository is the sole work-selection and ownership authority.
2. Current `main` content and evidence are the source of truth for implementation status; historical plans, meeting notes, old PRs, generated reports, and stale queues are evidence inputs, not independent task assignments.
3. Preserve existing lifecycle, schemas, topic IDs, source hierarchy, ownership controls, legal verification, validation, integration, SEO, production, release/rollback, and sign-off requirements.
4. This audit reconciles status and gaps; it does not automatically authorize a content rewrite, subject reopening, publication, legal sign-off, or scope expansion.
5. Do not treat AI review as authoritative legal verification.

## Required preflight

Before changing files:
- Read the current Work Control Master and active agent/Copilot instructions in both relevant repositories.
- Read `docs/SPRINT-MEETING-2026-10-09-ROADMAP-AND-YIELD-POLICY.md` and `docs/SPRINT-MEETING-INSTRUCTIONS.md` where present.
- Record the current `main` commit SHA for each repository.
- Inspect inventories, status ledgers, enhancement pointers, quality reports, active claims, relevant open/recent PRs, recent commits, CI runs and known blockers.
- Check current topic/section ownership before selecting any implementation work.
- Do not assume this task has been completed just because an older report says so.

## Reconciliation classifications

Use these as audit classifications only; reuse existing schema/status fields where possible and do not create a competing state machine:

- `COMPLETE_LOCKED`: all applicable lifecycle gates have evidence. Preserve and skip unless a documented reopening trigger applies.
- `CONTENT_COMPLETE_VERIFICATION_PENDING`: substantive content exists, but one or more required legal/source, case, validation, integration, SEO, production, or sign-off gates remain open.
- `IN_PROGRESS`: work is actively underway and has a specific owner/range.
- `BLOCKED`: progress depends on unavailable authority/evidence, failed validation, unresolved dependency, conflict, or required decision.
- `NOT_STARTED`: genuinely pending and unowned after checking current main, commits, PRs, claims and ownership records.

These classifications must not be used to collapse the repository's more granular lifecycle states.

## Required reconciliation record

For each subject, enhancement, or topic range within scope, record or link to:
- subject and exact topic/section/enhancement range;
- current main commit and content/ledger evidence;
- current owner and overlapping assignments;
- existing lifecycle state and each applicable gate;
- roadmap requirement(s) applicable to that item;
- evidence-supported gates already passed;
- exact missing gates and dependencies;
- blockers, severity, owner/role and next action;
- validation results and run/commit references;
- disposition: preserve, continue, unblock, assign, or reopen with documented trigger.

Prefer links to canonical records over duplicating large inventories. Do not fabricate counts; if a count cannot be reliably derived, label it unknown and state what evidence is missing.

## Alignment rules

1. Preserve valid completed content. Do not rewrite or revalidate every item merely for cosmetic consistency.
2. Never reopen `COMPLETE_LOCKED` without an established documented trigger.
3. Distinguish substantive content completion from legal verification, case verification, technical validation, integration, SEO, production, publication and sign-off.
4. Apply full required topic-specific core depth regardless of High/Medium/Low-Yield classification. Yield may help order work, but cannot reduce completeness or quality.
5. Separate enhancement-baseline lock from `COMPLETE_LOCKED`.
6. A staged subject may be published only after its applicable legal/source, content-quality, technical and publication gates pass.
7. Continue current-law verification and correct verified material defects promptly through the canonical content path.
8. Preserve pending official-PDF manual reviews and checksum-based closure safeguards. A technical pass, alternate copy or AI assessment does not by itself close legal verification or publication gates.
9. Keep repository-wide validation failures separate from item-level legal/content status. Never weaken validators or label the full workflow green when required checks fail.
10. Do not restart a subject just because it appears in a historical incident or old meeting note.
11. Do not assign a range already claimed, actively worked, merged or locked.
12. Make the smallest safe changes, preserve provenance and unrelated content, and record every material status change.

## Execution sequence

### Phase 1 — Snapshot
Capture main SHAs, active work claims, current inventories, lifecycle status, CI status and known blockers.

### Phase 2 — Reconcile evidence
Compare status labels with actual current-main content, ledgers, commits, PR history and applicable gate evidence. Record conflicts rather than guessing.

### Phase 3 — Map roadmap requirements
Map each current item to applicable requirements: core depth, baseline lock, legal/current-law verification, release eligibility, validation/integration, judgment enrichment, Supreme Court coverage, final-stage study guide and existing production/sign-off gates.

### Phase 4 — Protect completed work
Preserve valid locked work and content-complete items. Reopen only with a documented trigger. Do not use the audit as a reason for wholesale rewriting.

### Phase 5 — Resolve conflicts and blockers
Identify stale or contradictory status records, missing evidence, shared ownership conflicts and real technical failures. Resolve only where evidence supports the change; otherwise record a named role/owner and next action.

### Phase 6 — Execute eligible work
After the audit, select the next genuinely pending, unowned task through the Work Control Master. Work in non-overlapping ranges and validate each change.

### Phase 7 — Report and hand off
Report evidence-backed counts, unresolved conflicts, preserved locked work, open gates, blockers, actual commits and test outcomes. Keep the audit open if unresolved reconciliation conflicts materially affect status or ownership.

## Validation and closure

- Run focused documentation/status consistency checks and relevant content validators.
- Report each check as PASS, FAIL, BLOCKED or NOT RUN with scope and evidence.
- Do not claim repository-wide success if any required workflow still fails.
- Do not mark the alignment audit complete while material status conflicts, ownership conflicts, or unaccounted-for registered inventory remain.
- Once reconciled, update existing authoritative records rather than introducing a second master queue.
- Archive the audit only under existing repository policy after its acceptance criteria are evidenced; do not delete its history.

## Final report template

- Repository and current main SHA:
- Inventory/range reconciled:
- Evidence sources inspected:
- Counts by reconciliation classification (with derivation):
- COMPLETE_LOCKED items preserved:
- Content-complete items with open gates:
- Active claims/overlaps found:
- Stale/conflicting records and disposition:
- Roadmap requirements already met:
- Missing gates and blockers:
- Changes committed and commit links:
- Validation commands/runs and actual results:
- Next unowned action:
- Explicit limitations/unknowns:

**Stop condition:** If current status, ownership, source identity or completion evidence cannot be established safely, do not guess or overwrite. Record the uncertainty and continue with other eligible work.
