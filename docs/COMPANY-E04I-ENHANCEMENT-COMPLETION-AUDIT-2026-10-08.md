# Company E-04I Enhancement Completion Audit — 2026-10-08

## Scope
Companies Act, 2013 §§36–38.

## Coordination gate
- Fresh live `main` check completed before implementation.
- No open PRs returned.
- §§36–38 were still `assembled-from-migrated` / in-progress before this batch.
- §39 was also checked and remains untouched/in-progress; it is intentionally reserved for the next coordination gate.

## Statutory subjects
- §36 — Punishment for fraudulently inducing persons to invest money.
- §37 — Action by affected persons.
- §38 — Punishment for personation for acquisition, etc., of securities.

MCA/India Code statutory material was checked on 2026-10-08. Section 36 covers knowing/reckless false or misleading statements or deliberate concealment used for specified inducement; §37 provides the affected-person action route under §§34–36; §38 addresses fictitious-name applications, multiple applications and related inducement concerning securities. citeturn0search12turn0search14

## Commits
- §36: 7a3798faea0251a91154d6a4ede9732551665e20
- §37: 8d9163563269ee0538a8dda5efc3df319ef9bb9f
- §38: e8ee7f0ae4410d75e8d04921c8e7aa30299e3fef

## Controls
- Legacy IDs and migrated baseline preserved.
- Coverage set to `substantive-topic-specific-v1`.
- Status remains `verification_in_progress`.
- No new case law promoted.
- Case-law verification remains a separate gate.
- Section-specific distinctions and exam structures added.
- §39 deliberately not modified.

## CI/status
GitHub combined-status checks are checked separately; an empty status list is not treated as a passing CI result.

## Next
Run a fresh coordination gate before selecting the next Company section/range. Do not reopen §§36–38.
