# Work Control Master — Legal Content

## Progress 2026-10-15

### Company Law (Companies Act, 2013)
| Range | Status |
|-------|--------|
| **s.1 → s.63** | **Content expanded (review / SOURCE_CHECK_REQUIRED)** |
| **Case-law batch 1–2** | **Content added; not locked** |

### Indian Contract Act, 1872
| Range | Status |
|-------|--------|
| **s.1 → s.75** | **Content expanded through s.75 (review / source gates open)** — FORWARD order |
| **s.124–s.147** | **Content expanded (review / SOURCE_CHECK_REQUIRED)** — indemnity and guarantee |
| **s.148–s.181** | **Content expanded (review / SOURCE_CHECK_REQUIRED)** — Chapter IX, bailment and pledge |
| **s.182–s.200** | **Content expanded (review / SOURCE_CHECK_REQUIRED)** — Agency foundations, sub-agency and ratification |
| **s.201 onward** | **Next forward range; not yet claimed by this control update** |
| **ss.76–123** | Repealed by the Sale of Goods Act, 1930; retain the statutory-status/source check in the relevant topic metadata |
| **Agency reverse pass: s.238 downward** | Historical reverse-pass content exists; see overlap warning below |

### Forward bulk s.61–s.70 (historical claim)
s.61 Neither party appropriates · s.62 Novation, rescission, alteration · s.63 Remission by promisee · s.64 Consequences of rescission of voidable contract · s.65 Restore advantage under void/voided · s.66 Mode of communicating rescission · s.67 Neglect to afford facilities · s.68 Necessaries to incapable person · s.69 Interested payment of another’s debt · s.70 Non-gratuitous act — benefit enjoyed

### Current next step
**FORWARD:** Section **201** (termination of agency), only after the mandatory ownership and latest-commit/PR check.
**REVERSE Agency:** do not restart the old reverse assignment at s.191 without reconciling section-level ownership and existing content first.

---

**Effective:** 2026-10-15  
**Status:** AUTHORITATIVE / ACTIVE — progress and ownership must be reconciled against current `main`

## Mandatory pre-work gate
1. Read this file, `AGENTS.md` and `.github/copilot-instructions.md`.
2. Identify the smallest practical subject/topic/section.
3. Check current status, owner, latest `main` commit, recent commits/PRs and latest evidence.
4. Identify only the missing gate.
5. If CLAIMED, IN_PROGRESS or COMPLETE_LOCKED by another/current worker, stop.
6. Claim the exact range before editing.
7. Validate and record evidence after editing.

## Content rules
No invented legal authority. No destructive shortening. Verify before enhancement. AI review is not authoritative verification. Preserve provenance and baseline content.

## Current control
**This stream:** Indian Contract Act, forward order, next candidate **s.201**, subject to the mandatory ownership check. This document update does not itself claim or begin s.201.

## Work claim record — latest completed forward bulk
Subject: Indian Contract Act, 1872
Topic/section range: s.182–s.200 (agency foundations, authority, delegation, sub-agency and ratification)
Content commit: `70a33093f6b5d80a6f40a2aaee1cc322c67d0fc8`
Control-record commit before this reconciliation: `548ccf95a159b688c7972777108639bdfe083a8b`
Current status: review / SOURCE_CHECK_REQUIRED
Owner of completed bulk: historical owner `current-assistant-contract-s182-200-forward`; this is not an active claim on s.201.
Latest evidence: sections 182–190 expanded in https://github.com/coolnaveen99/legal-content/commit/072b7281152137f51939e5f8469358439ec9b881 and sections 191–200 expanded in https://github.com/coolnaveen99/legal-content/commit/70a33093f6b5d80a6f40a2aaee1cc322c67d0fc8; status recorded in https://github.com/coolnaveen99/legal-content/commit/548ccf95a159b688c7972777108639bdfe083a8b.
Missing gates: section-level authoritative case-law/current-law verification as applicable; full repository validators on the latest main SHA; integrated/E2E and release checks; legal review/sign-off. Do not infer these passed from the statutory-content commits.
Validation evidence: commit history and current control file inspected. Full validators were not run as part of this control-record reconciliation.

## Coordination warning — Agency overlap
The previous summary `s.238 → s.192` overlaps the forward range `s.182–s.200` at `s.192–s.200`. Do not count those sections twice or assume the reverse pass is fully reconciled. Before assigning further reverse work, audit the actual canonical topic files, commit evidence and any active claims; then record a non-overlapping remaining range. The prior note “reverse from s.191” is withdrawn as an assignment because s.191–s.200 already appear in the forward bulk.

## Release gate
Content expansion is not equivalent to legal verification, technical validation, production publication, or final lock. Preserve `review` / `SOURCE_CHECK_REQUIRED` until the applicable evidence and sign-off exist. Record any unresolved PDF/manual-review queue separately; it must not be used to imply legal verification or waive unrelated gates.

If any field cannot be established, STOP.
