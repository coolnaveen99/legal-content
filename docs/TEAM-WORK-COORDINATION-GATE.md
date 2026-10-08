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

## Arbitration incident rule

The Arbitration subject is the immediate example of this coordination problem. Multiple closed Arbitration PRs existed while substantive Arbitration enhancement commits were still landing. Therefore, no developer should restart Arbitration from the beginning. Work must continue only from the current `main` enhancement pointer and only on an unowned pending range.

## COMPLETE_LOCKED subjects (do not reopen)

| Subject | Lock | Meaning |
|---------|------|--------|
| **Torts** | COMPLETE_LOCKED | Do not reopen without a documented trigger. |
| **Taxation** | COMPLETE_LOCKED (2026-10-08) | All 51 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law and rate verification remain a separate open gate. Evidence: `docs/TAXATION-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Specific Relief** | COMPLETE_LOCKED (2026-10-08) | All 6 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/SRA-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Hindu Marriage Act** | COMPLETE_LOCKED (2026-10-08) | All 5 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/HMA-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Limitation** | COMPLETE_LOCKED (2026-10-08) | All 5 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/LIMITATION-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Registration** | COMPLETE_LOCKED (2026-10-08) | All 3 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/REGISTRATION-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Fundamental Rights** | COMPLETE_LOCKED (2026-10-08) | All 12 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/FR-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Petition Formats** | COMPLETE_LOCKED (2026-10-08) | All 8 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/PETITION-FORMATS-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **DPSP** | COMPLETE_LOCKED (2026-10-08) | All 3 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/DPSP-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **NI** | COMPLETE_LOCKED (2026-10-08) | All 4 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/NI-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |
| **Family** | COMPLETE_LOCKED (2026-10-08) | All 38 topics substantive-topic-specific-v1 on `main`. Do not reopen for scaffold/enhancement remediation without a documented trigger. Case-law verification remains a separate open gate. Evidence: `docs/FAMILY-ENHANCEMENT-COMPLETION-AUDIT-2026-10-08.md`. |

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
