# Historical vs Current-Law Representation Rules

## Purpose

Keep pre- and post-transition legal regimes distinct so students and practitioners are never shown repealed or superseded primary law as if it were current.

## Criminal law transition (India)

| Regime | Primary statutes | Applicability guidance |
|--------|------------------|------------------------|
| **Current (from 1 July 2024)** | Bharatiya Nyaya Sanhita (BNS), Bharatiya Nagarik Suraksha Sanhita (BNSS), Bharatiya Sakshya Adhiniyam (BSA) | Offences and procedure on or after commencement, subject to BNSS s. 531 savings and Article 20(1) |
| **Historical concordance** | IPC, CrPC, Indian Evidence Act | Use for pending proceedings, comparative study, and mapping — never as 1:1 identical to the Sanhitas |

Always treat IPC / CrPC / IEA as **historical concordance**, not interchangeable labels for BNS / BNSS / BSA.

## Representation fields

Use envelope fields:

- `effectiveFrom` / `effectiveTo` (ISO dates or null)
- `status` (lifecycle)
- `tags` — recommended tags: `current-law`, `historical-law`, `transitional`, `concordance`
- Content body must state the regime in plain language where the distinction matters

## Authoring rules

1. **Primary citation for new criminal content** after commencement: BNS / BNSS / BSA section numbers.
2. **Concordance:** When mapping old → new, use a `sanhita-mapping` entity; do not claim identity without noting differences.
3. **Pending cases:** Explain BNSS s. 531 savings and that investigations/trials may continue under the old procedural code where the statute so provides.
4. **Article 20(1):** Do not present retrospective penal enhancement as valid.
5. **Civil / constitutional / other domains:** Use the same `effectiveFrom` / `effectiveTo` pattern for amendments (e.g. Constitution amendments, CPC amendments).

## Consumer rules

- Default catalog views prefer `current-law` tagged published entities.
- Historical entities remain available for research and transition tools.
- Never silently substitute a historical provision ID for a current one.

## Verification

Before `verified` status on transition-sensitive topics:

- Confirm commencement / amendment dates against official sources.
- Confirm any mapping against an authoritative concordance or primary text comparison.
- Label uncertainty as needs-review rather than asserting equivalence.
