# Company E-04H Enhancement Completion Audit — 2026-10-08

## Scope
Companies Act, 2013 §§33–35 in `topics/company/ca-s-33.json`, `ca-s-34.json`, and `ca-s-35.json`.

## Coordination
- Fresh live check performed against `legal-content/main`.
- No open PRs returned.
- §§33–35 were still generic scaffold/in-progress records before this batch.
- No existing worker claim or recent completion for this range was found.

## Statutory subjects
- §33 — Issue of application forms for securities.
- §34 — Criminal liability for mis-statements in prospectus.
- §35 — Civil liability for mis-statements in prospectus.

MCA/India Code statutory material was checked on 2026-10-08. Section 33 requires an abridged prospectus with application forms subject to its stated exceptions; sections 34 and 35 establish separate criminal and civil liability routes. citeturn0search12turn0search3

## Commits
- §33: `40814cbbf2352e2721606471386bb8a1c4d2ca25`
- §34: `18788d0c9ebf7b06e70d10e5187244ed385a6ad6`
- §35: `642e951a3e441714ef4835f885731d11490ad051`

## Controls
- Legacy IDs/baseline preserved.
- Enhancement coverage: `substantive-topic-specific-v1`.
- Status: `verification_in_progress`.
- No new case law promoted.
- Existing case arrays remain unverified and are not treated as authoritative.
- Case-law verification remains a separate gate.
- §34 criminal liability and §35 civil liability were deliberately kept distinct.

## Remaining gates
Full case-law verification, cross-catalog legal verification, publication approval, and CI/workflow validation remain open. Empty GitHub status arrays must not be interpreted as passing CI.

## Next
Do not reopen §§33–35. Select the next Company range only after another live coordination gate.
