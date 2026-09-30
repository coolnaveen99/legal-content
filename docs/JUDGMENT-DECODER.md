# Judgment Decoder — Field Map & Rules

Checklist **Section 5**. The authoritative JSON contract is `schemas/judgment.schema.json`. This document maps checklist dimensions to schema fields and states the pin-point rule.

## Schema completeness

The judgment entity uses the common envelope plus a `content` object. Decoder dimensions:

| Checklist dimension | Schema field(s) under `content` |
|---------------------|----------------------------------|
| Case identity | `caseIdentity` |
| Court and bench | `court`, `bench` |
| Date | `date` |
| Parties | `parties[]` |
| Dispute origin | `disputeOrigin` |
| Original forum | `originalForum` |
| Procedural history | `proceduralHistory` |
| Facts | `facts` |
| Party arguments | `argumentsPartyA`, `argumentsPartyB` |
| Questions/issues | `questionsBeforeCourt[]` |
| Laws involved | `lawsInvolved[]` (prefer provision IDs) |
| Precedents relied upon | `precedentsReliedUpon[]` (prefer judgment IDs) |
| Precedents distinguished/challenged | `precedentsDistinguishedOrChallenged[]` |
| Court questions | `courtQuestions[]` |
| Court reasoning | `reasoning` |
| Step-by-step reasoning | `stepByStepReasoning[]` |
| Issue-wise findings | `findings[]` (`issue`, `finding`) |
| Majority reasoning | `majorityReasoning` |
| Separate opinions | `separateOpinions[]` |
| Holding | `holding` |
| Ratio decidendi | `ratioDecidendi` |
| Obiter | `obiter` |
| Final order | `finalOrder` |
| Legal change | `legalChange` |
| Later judgments | `laterJudgments[]` |
| Present legal position | `presentLegalPosition` |
| Practical significance | `practicalSignificance` |

All listed fields are present on the v1 judgment schema. Authors omit inapplicable fields rather than inventing filler.

## Source / page / paragraph mapping

**Rule:** Record page, paragraph, or pinpoint references **only when supported by the underlying source** (official PDF, report, or neutral citation with addressable structure).

Recommended practice until a dedicated schema property is added:

- Put pinpoints in the relevant prose field (e.g. reasoning) with clear attribution, **or**
- Add optional objects in findings/reasoning only when true, without inventing numbers.

A future non-breaking schema addition may introduce optional `pinpoints[]` (`{ sourceId, page?, paragraph?, note? }`). Until then, do not invent structure.

## Quality gate

- Never invent arguments, authorities, holdings, ratios, or procedural history.
- Unverified judgments stay ≤ `review` / `needs-review`.
- Cross-refs use canonical IDs per [CROSS-ENTITY-REFERENCE-RULES.md](CROSS-ENTITY-REFERENCE-RULES.md).
