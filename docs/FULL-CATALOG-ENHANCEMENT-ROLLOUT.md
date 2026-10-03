# Full-Catalog Student Content Enhancement Rollout

## Purpose

This phase scales the student-focused enhancement framework from the controlled pilot to the full canonical legal-content catalog without replacing the migrated baseline.

## Non-negotiable preservation rule

The migrated substantive content is the baseline. Enhancement is additive.

- Do not delete migrated material.
- Do not shorten or replace good existing explanations merely to make them different.
- Do not silently restore the legacy baseline during ordinary validation.
- Keep the recovery baseline available.
- Do not mark content verified or published without substantive verification.
- AI provider implementation remains the final product phase.

## Enhancement structure

Each enhanced topic uses `content.enhancement` for student-focused material covering:

1. Learning objectives
2. Definition and core concept
3. Legal principle/doctrine
4. Statutory framework
5. Essential ingredients/elements
6. Detailed explanation
7. Practical examples
8. Distinctions/comparisons
9. Verified case law and principles
10. Problem/application analysis
11. Short, 10-mark, and 16-mark answer structures
12. Key takeaways
13. Authoritative sources
14. Verification metadata

## Controlled rollout

Enhancement work proceeds in subject batches. A batch must pass the full repository validation gates before the next batch is started.

Recommended sequence:

1. BNS / criminal law
2. BNSS / criminal procedure
3. BSA / evidence
4. Constitutional law
5. Contract
6. Torts
7. Administrative law
8. Arbitration
9. Remaining subject families

A topic may remain `in-progress` while research and editorial work continues. `verified` and `published` require the authoritative-source and verification requirements enforced by the enhancement validator.

## Progress reporting

Run:

`npm run report:enhancements`

The report counts real canonical topics and enhancement states overall and by subject. It does not modify topic content.

## Quality gate

Every rollout batch must pass:

- legacy preservation validation
- canonical content/schema/entity/relationship validation
- existing legal verification gates
- student enhancement validation
- relationship tests

This phase establishes the safe rollout mechanism; it does not claim that all 3,551 topics have already been substantively enhanced.
