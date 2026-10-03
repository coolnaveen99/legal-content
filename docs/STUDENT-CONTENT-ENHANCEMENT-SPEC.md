# Student Content Enhancement Specification

## Purpose

Enhance the preserved `codepackr-law` baseline for law students without replacing or shortening migrated material.

**Canonical authoring rules:** [STRICT-LEGAL-CONTENT-ENHANCEMENT-RULES.md](STRICT-LEGAL-CONTENT-ENHANCEMENT-RULES.md)

The strict rules in that document are mandatory for every create, update, migration, batch-generation, correction, and verification operation.

## Required enhancement direction

Each enhanced topic should progressively cover the applicable dimensions:

1. Learning objectives
2. Definition and core concept
3. Provision-specific legal principle/doctrine
4. Statutory/constitutional framework
5. Genuine elements, conditions, tests, or ingredients appropriate to the provision type
6. Detailed explanation
7. Practical examples and illustrations
8. Meaningful distinctions from closely related concepts
9. Relevant, verified case law and ratio
10. Provision-specific problem/question application
11. Short, 10-mark, and 16-mark answer structures
12. Key takeaways/revision points
13. Authoritative sources
14. Current-law verification

Not every field should be forced into the same format. Provision type controls the substance.

## Preservation rule

The existing migrated topic remains the baseline. Enhancement is additive.

Do not:
- delete or overwrite good legacy substantive material;
- replace detailed legal analysis with generated summaries;
- downgrade strong existing content to generic boilerplate;
- fabricate authorities, citations, holdings, facts, section mappings, or legal propositions;
- create duplicate topics;
- mark content verified or published without substantive verification;
- introduce AI-generated legal propositions as authoritative without verification.

If a generator cannot confidently determine the law, it must preserve the existing content and flag the topic for review.

## Strict quality gates

A topic is not complete because:
- all required JSON fields exist;
- the catalogue is 100% populated;
- the build succeeds;
- automated schema validation passes.

Before `verified`, the topic must pass the applicable:
- exact legal identity check;
- current statutory/constitutional text check;
- provision-type classification;
- clause/proviso/explanation check;
- provision-specific legal-principle check;
- example quality check;
- problem-application check;
- case-law integrity check;
- predecessor/transition check;
- cross-reference check;
- source-provenance check;
- generic-template contamination check;
- semantic quality audit.

## No generic templates

Content must be recognizably specific to the actual provision.

Do not reuse generic language involving:
- competent officers/authorities/courts;
- generic statutory conditions;
- generic Article 14/19/21 references;
- generic natural justice/proportionality;
- generic FIR/investigation;
- generic electronic evidence;
- generic admissibility;
- generic offence liability;
- generic constitutional judicial review.

A section/article number must not be the only thing changing between two supposedly distinct explanations.

## Provision-type discipline

Classify every provision before enhancement.

Examples include offence, definition, punishment, exception, procedure, evidence, bail, investigation, trial, jurisdiction, limitation, appeal/revision, constitutional right, constitutional power, institutional provision, repeal, savings, transition, and miscellaneous provisions.

Never force offence-style ingredients onto non-offence provisions, or procedure/evidence templates onto unrelated provisions.

## Case-law integrity

Case law must be genuine and correctly characterized.

Distinguish:
- direct interpretation;
- closely connected doctrine;
- predecessor-law authority;
- historical/contextual authority.

If no reliable direct authority is found, explicitly record that rather than inventing or implying one.

## Status

New enhancement content should begin as `planned` or `in-progress`.

It may become `verified` only after all applicable substantive gates pass.

`published` is a separate approved state.

Never automatically promote status.

## Exam focus

The enhancement layer must help a student write a legally reasoned answer.

10-mark and 16-mark structures must follow the actual provision and legal issue. They must not be copied generic blueprints.

## Batch-generation rule

Batch scripts must:
1. read authoritative source material;
2. read the existing topic;
3. classify the provision;
4. preserve strong content;
5. generate provision-specific improvements;
6. attach provenance;
7. keep verification conservative;
8. run semantic quality checks;
9. produce unresolved-review findings;
10. never claim completion solely from file count.

## Final principle

**Accurate + provision-specific + source-backed + teachable + legally verified** is the completion standard.

Schema-complete or build-successful content alone is never sufficient.
