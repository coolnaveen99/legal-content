# Legal Content — Multi-Developer Coordination & Duplicate-Work Prevention

**Priority: P0 / IMMEDIATE**

This repository is worked on by multiple developers/agents. The canonical `main` branch is the source of truth for work status.

## Mandatory stop-and-check gate

Before starting, continuing, or claiming any subject/topic/enhancement:

1. Sync/read the current `main` state.
2. Search open and recently closed PRs for the subject/topic/enhancement.
3. Search recent commits on `main` for the same subject/topic/section.
4. Check existing content and enhancement state in `main`.
5. Check whether another worker is already modifying the same topic/section.
6. If the work is already merged or materially completed, **DO NOT redo it**.
7. If another worker is actively working on it, **DO NOT start a parallel implementation**.
8. Only work on the next genuinely unowned/pending item.

## Closed PR does NOT automatically mean subject complete

A closed PR may represent one batch, generated-state update, partial enhancement, or an intermediate step. Determine completion from the current `main` content and enhancement ledger, not from PR title alone.

Likewise, a subject with many closed PRs may still have pending substantive work.

## Topic-level ownership

Ownership must be checked at the smallest practical unit:

`subject → enhancement ID → topic/section → worker`

Do not assign an entire subject when another worker has already started a portion of it.

For batch work, record the exact range (for example, sections/topics 25–36 of an enhancement queue).

## Main-branch source of truth

After a merge:

- treat the merged content on `main` as authoritative;
- stale branches/old PRs are historical evidence, not permission to redo the work;
- compare the proposed work against current `main` before making changes;
- never restore an older snapshot over enhanced canonical content.

## Current-state rule

Historical subject incidents are **not current assignments**. Reconcile the latest `main` quality-status/control documents, pending enhancement queue, recent commits, and open/recent PRs before selecting work.

If a subject/range is complete or `COMPLETE_LOCKED`, skip it unless a documented reopening trigger exists. If it is pending, claim only an explicitly unowned exact range.

**Arbitration is not a special exception:** the recent Arbitration PR history is preserved as evidence of the coordination problem, but it must not be used to restart or prioritize Arbitration. Current `main` evidence controls.

## Completion evidence

A task may be marked complete only when:

- the intended topic/section is present in `main`;
- the substantive enhancement is actually present, not merely scaffolded;
- applicable validators pass;
- the exact commit/PR evidence is recorded;
- the enhancement pointer/ledger is advanced consistently.

## Required pre-work report

Before editing, record or communicate:

- Subject:
- Enhancement:
- Topic/section range:
- Current `main` commit:
- Current enhancement pointer:
- Existing PR/commit evidence:
- Worker/owner:
- Planned range:
- Why this range is not already complete/owned:

If this cannot be established, **stop and investigate before editing**.

## Parallel-work rule

Multiple workers may work simultaneously only when their ranges are explicitly non-overlapping.

Never use "closed PR" as the sole signal that a range is available.

## Priority

This coordination gate overrides ordinary "pick the next subject" behavior. Preventing duplicate legal-content work is a P0 repository-integrity requirement.


## Active Work Control — 2026-10-08

The authoritative execution control is `docs/WORK-CONTROL-MASTER-2026-10-08.md`. Read it before selecting or claiming work. Archived control-history documents are audit-only and must not be used to reopen, assign, or close work. Section/topic status and current `main` evidence override historical queues and generated reports.


## 2026-10-09 roadmap and core-content policy

Follow `docs/WORK-CONTROL-MASTER-2026-10-08.md` and `docs/SPRINT-MEETING-2026-10-09-ROADMAP-AND-YIELD-POLICY.md`. The Work Control Master remains the sole work-selection/ownership authority. Preserve the existing structure, topic-level claims, schemas, evidence, and lifecycle. Every registered provision receives its required core depth regardless of yield classification. Staged publication is allowed only after applicable minimum legal/source, content-quality, technical and publication gates pass. Continue current-law verification and deploy supported corrections promptly. After required verification and integrated validation/E2E pass, proceed to section-wise judgments and then Supreme Court coverage. The separate High-Yield Study Guide is final-stage supplementary work. Do not weaken mandatory gates or rush reviewers.
