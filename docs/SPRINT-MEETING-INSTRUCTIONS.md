# Sprint and Roadmap Meeting Instructions — Reusable Facilitator Runbook

**Status:** Active meeting procedure for future facilitators and participants.
**Applies to:** `coolnaveen99/codepackr-law` and `coolnaveen99/legal-content`.
**Purpose:** Run repeatable, evidence-based project meetings without conflicting assignments, false consensus, duplicate work, unsupported status claims, or accidental changes to repository governance.

## 1. Authority and scope

- Read the current Work Control Master in each repository before discussing task selection. It remains the sole authority for selecting and assigning implementation work.
- Read this runbook, the latest meeting record, current Sprint Control Board/status records, active agent instructions, and relevant issue/PR/CI evidence.
- A meeting record captures discussion and decisions; it does not become a competing task queue or silently override repository controls.
- Existing lifecycle gates, schemas, topic IDs, ownership records, source hierarchy, validation, integration, SEO, production, release/rollback and legal sign-off requirements remain mandatory.
- Follow the current project-owner instructions for Git operations. Where direct-to-`main` and no-PR work has been requested, do not create branches or PRs.
- AI output is not legal authority. No meeting participant or AI facilitator may invent a legal source, case, vote, approval or validation result.

## 2. Roles

At the start, record the roles actually present; one person may hold multiple roles:
- **Facilitator:** keeps scope, agenda and time; distinguishes decisions from proposals.
- **Recorder:** captures evidence, decisions, dissent, actions and owners.
- **Repository/status owner:** presents current main SHAs, lifecycle and CI evidence.
- **Subject/workstream owners:** report exact ranges, gates, blockers and next actions.
- **Legal/source reviewer:** confirms what has and has not been verified, where available.
- **Release/technical owner:** reports build, integration, E2E, SEO, production and rollback evidence.

Do not invent names, attendance, roles or acknowledgements. If no qualified reviewer is present, record legal/source review as pending rather than treating the meeting as sign-off.

## 3. Required pre-meeting preparation

The facilitator or delegate must:
1. Confirm meeting date/time, purpose, attendees and repositories in scope.
2. Read the current Work Control Masters and the prior meeting's action log.
3. Capture current `main` commit SHAs for both repositories.
4. Read the latest status board, pending work records, ownership/claim records, recent commits, relevant open/recent PRs, issues and CI runs.
5. Review the previous meeting's unresolved decisions, blockers and overdue actions.
6. Prepare a concise evidence-backed status snapshot; distinguish verified facts, estimates, proposals and unknowns.
7. Identify likely duplicate or overlapping assignments before proposing new work.
8. Prepare agenda items with an evidence link, decision needed, affected scope and decision owner.
9. Do not copy stale metrics into the meeting as current without checking the latest evidence.

If key evidence is unavailable, list it as a gap in the meeting pack. Do not delay all useful discussion if unaffected agenda items can proceed safely.

## 4. Standard agenda

Adapt duration to the meeting, but preserve the order and purpose.

### A. Opening and scope
- Confirm objective, repositories, date and participants.
- State that current Work Control Masters govern work selection and ownership.
- Confirm whether the meeting is for status review, decision-making, planning, incident resolution or release readiness.

### B. Previous action review
For each prior action, report one of: DONE WITH EVIDENCE, IN PROGRESS, BLOCKED, SUPERSEDED WITH REASON, or NOT STARTED.
Show the owner, due date if one was actually agreed, evidence and next step. Do not mark an action done solely because a commit exists.

### C. Current-state snapshot
Review:
- inventory and reconciliation status;
- COMPLETE_LOCKED and other lifecycle states;
- content complete but legal verification pending;
- active claims and non-overlapping work ranges;
- current-law/source verification and case verification;
- validation, integration/E2E, SEO, production and publication gates;
- unresolved PDF manual reviews and other external-source blockers;
- actual CI/deployment status and failures.

State the scope and timestamp/commit of each metric. Separate item-level status from repository-wide failures.

### D. Roadmap alignment
Confirm progress against the active roadmap:
1. complete all registered core topics to topic-appropriate depth regardless of yield classification;
2. record enhancement-baseline lock separately from legal verification and COMPLETE_LOCKED;
3. publish subjects only after applicable minimum legal/source, content-quality, technical and publication gates pass;
4. continue current-law verification and promptly correct verified material defects;
5. pass required validation and integration/E2E gates without weakening checks;
6. then perform section-/subject-wise judgment enrichment and a dedicated Supreme Court coverage pass;
7. reserve the optional High-Yield Study Guide for final-stage supplementary work;
8. retain existing SEO, production, release/rollback, legal sign-off and later-stage AI/provider controls.

Discuss deviations as evidence-backed gaps, not permission to bypass controls.

### E. Decisions and prioritization
For each proposed decision, record:
- precise question and alternatives considered;
- evidence and assumptions;
- decision authority/person or role;
- decision: ACCEPTED, REJECTED, DEFERRED, or BLOCKED;
- rationale and trade-offs;
- scope and explicit non-goals;
- dependencies, risks and reopening/rollback conditions;
- dissent or unresolved objections, if any.

Do not state unanimous agreement unless each relevant participant's agreement is recorded. Silence is not consent. A proposal is not a decision. If authority or evidence is missing, defer or block the decision.

Prioritize by legal risk, dependency, release eligibility, material defects and available reviewer capacity. Never use arbitrary quotas or yield labels to lower the completeness or quality of core content.

### F. Work ownership and next actions
Before assigning an action:
- verify the exact topic/section/enhancement range on current main;
- check current owner, active claim, recent commits and PR history;
- ensure the range is genuinely pending and unowned;
- split work into explicitly non-overlapping ranges;
- name an actual person or an explicitly assigned role; do not invent an owner;
- record dependencies, expected evidence, validation and a target date only if agreed.

If already merged, actively owned, or COMPLETE_LOCKED, do not reassign it. If blocked, record the blocker and next evidence/action.

### G. Risks, blockers and release readiness
For every blocker, record impact, affected scope, owner/role, evidence required and next review trigger. Distinguish technical access failure from source invalidity and from legal verification. A `MANUAL_REVIEW_REQUIRED` PDF outcome does not authorize legal verification or publication. Do not announce release readiness without the applicable evidence and approvals.

### H. Read-back and close
Read decisions and action owners aloud or in chat. Confirm unresolved items, next meeting trigger/date if agreed, recorder and expected meeting record path. Capture dissent and uncertainty. Do not claim all participants acknowledged unless explicitly recorded.

## 5. Mandatory meeting standards

- **Evidence first:** link each material status/decision to a current file, commit, issue, CI run, official source or explicit participant statement.
- **No duplicate work:** reconcile against current main and ownership before assigning.
- **No status inflation:** distinguish content coverage, enhancement, statutory verification, case verification, validation, integration, publication and COMPLETE_LOCKED.
- **No false consensus:** record only actual votes/agreements; include dissent or “not recorded.”
- **No fabricated precision:** counts and percentages require a denominator, calculation method, source and timestamp.
- **No destructive cleanup:** archive or mark obsolete according to existing policy; do not delete recoverable instructions/history.
- **No weakening gates:** failures are resolved, scoped or transparently blocked, never hidden to make a dashboard green.
- **No scope drift:** new ideas are recorded as proposals unless the meeting has authority and evidence to adopt them.
- **No unsafe legal conclusions:** unresolved authority remains SOURCE_CHECK_REQUIRED/BLOCKED; a meeting cannot substitute for qualified legal review.
- **No competing queue:** decisions must be reconciled into the existing Work Control Master and tracking records.

## 6. Required meeting artifacts

Create/update a dated meeting record in the repository's existing meeting-record location. Follow existing naming and folder conventions; do not create a new parallel meeting archive.

The record must include:
1. title, date/time/timezone, purpose and repositories;
2. facilitator, recorder, attendees and roles actually present;
3. source SHAs and links to evidence reviewed;
4. previous action status;
5. factual status snapshot with timestamp, denominator and limitations;
6. agenda summary;
7. decisions with authority, rationale, scope and status;
8. dissent, objections and unmade decisions;
9. action register with unique ID, owner, exact range, dependency, evidence of done, validation and due date if agreed;
10. risks/blockers and follow-up trigger;
11. validation/CI results with exact status and links;
12. next meeting date only if agreed, or the condition that should trigger it.

Use this action-register shape:

| ID | Action | Exact scope/range | Owner/role | Dependency/blocker | Evidence required to close | Validation | Due date (if agreed) | Status |
|---|---|---|---|---|---|---|---|---|

## 7. Post-meeting procedure

1. Verify the minutes against actual notes and evidence.
2. Label decisions separately from proposals and discussion.
3. Update the existing action/status records and Work Control Master only where the meeting has authority and evidence supports the change.
4. Do not assign work that conflicts with current ownership or a locked item.
5. Run focused documentation consistency checks where possible.
6. Commit meeting records and instruction changes directly to `main` when that is the explicit operating instruction; no PR/branch in that case.
7. Report commit SHAs, changed paths, validation results, unconfirmed facts and remaining blockers.
8. Preserve historical meeting records; do not rewrite old minutes to imply later decisions were made earlier.

## 8. Reusable facilitator prompt

Use this prompt whenever someone is asked to run a future meeting:

> Read `docs/SPRINT-MEETING-INSTRUCTIONS.md` first and follow it strictly. Then read the current Work Control Master in each repository in scope, the latest meeting record and action log, active instructions, current status board, ownership/claim records, recent commits and relevant PRs/issues/CI runs. Prepare an evidence-backed status snapshot using current main SHAs. Run the meeting using the standard agenda in the runbook. Separate facts, assumptions, proposals and decisions; record actual participants and dissent; never invent consensus, metrics, owners, votes, legal verification or CI results. Check ownership and completion evidence before assigning work. Preserve all existing gates and repository structure. Create a dated meeting record in the existing meeting location, update existing tracking records only when authorized, and provide an action register with exact ranges, owners, blockers, closure evidence and validation. If evidence or authority is missing, record the gap and defer the decision rather than guessing. Follow the project's direct-to-main/no-PR instruction when applicable.

## 9. Acceptance checklist

Before closing the meeting:
- [ ] Current Work Control Masters and main SHAs recorded.
- [ ] Prior actions reconciled with evidence.
- [ ] Status metrics have source, scope, denominator and timestamp.
- [ ] Existing ownership and duplicate-work risks checked.
- [ ] Roadmap and mandatory gates reviewed.
- [ ] Decisions separated from proposals; dissent/unknowns recorded.
- [ ] Every accepted action has an exact scope, owner/role and closure evidence.
- [ ] Blockers and release limitations are explicit.
- [ ] Minutes and existing tracking records updated without creating a competing queue.
- [ ] Validation and commit evidence reported accurately.
