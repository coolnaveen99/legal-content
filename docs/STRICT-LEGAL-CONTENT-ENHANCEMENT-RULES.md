# Strict Legal Content Enhancement Rules

## 1. Purpose

This document is the **mandatory authoring contract** for creating or updating student-facing legal content in `topics/**`.

These rules apply to:
- manual editing;
- AI-assisted editing;
- batch generators;
- enhancement scripts;
- migration scripts;
- subject-wide enhancement runs;
- corrections and re-verification.

A topic is **not complete** merely because its JSON schema is valid, all required fields exist, the build succeeds, or the catalogue is 100% populated.

---

## 2. Golden rule: preserve, improve, verify

Enhancement is additive and evidence-driven.

**MUST**
- preserve all good existing substantive content;
- improve weak content in place without destroying useful material;
- retain legacy identity metadata;
- use authoritative sources for current law;
- distinguish current law from historical law;
- verify every material legal proposition before marking it verified;
- leave uncertain content as `in-progress` or `review`.

**MUST NOT**
- replace good content with generic boilerplate;
- generate a plausible legal rule merely because a field is required;
- copy one provision's analysis into another provision;
- infer the meaning of a provision from its chapter title alone;
- mark content `verified` because automated validation passes;
- use a related judgment as if it directly interpreted the provision;
- invent citations, holdings, section mappings, quotations, facts, dates, or procedural history.

---

## 3. Provision identity is the first gate

Before writing or updating a topic, determine:

1. exact subject/statute;
2. exact section/article/rule/topic identifier;
3. official title;
4. chapter/part;
5. complete statutory text and all sub-sections;
6. provisos;
7. explanations;
8. illustrations;
9. schedules, forms or tables incorporated by the provision;
10. cross-referenced provisions;
11. commencement/effective date;
12. repeal, savings and transition status where applicable.

If any of these cannot be established from an authoritative source, **do not generate authoritative substantive content**.

---

## 4. Classify the provision before generating fields

Every provision must be classified before enhancement. Examples:

- substantive offence;
- definition;
- punishment/sentencing;
- general exception;
- defence;
- procedure;
- arrest;
- bail;
- investigation;
- trial;
- evidence;
- jurisdiction;
- limitation;
- appeal/revision;
- constitutional power;
- constitutional right;
- constitutional restriction;
- institutional provision;
- repeal;
- savings;
- transitional provision;
- administrative/miscellaneous provision.

The classification controls the content.

### Prohibited category leakage

Never force an inappropriate template onto a provision.

Examples:
- a repeal/savings section must not be written as an offence;
- a definition must not be given artificial offence ingredients;
- a constitutional repeal article must not be described as an executive power;
- an evidence provision must not automatically be described as a criminal procedure rule;
- a procedural power must not automatically receive offence-style ingredients;
- a limitation provision must not be given generic admissibility analysis.

If a field is genuinely inapplicable, state why it is inapplicable rather than inventing content.

---

## 5. No generic-content rule

Every substantive field must be **specific to the provision**.

The following are automatic quality failures when they are not genuinely required by the provision:

- "competent authority/officer/court" boilerplate;
- "all statutory conditions must be satisfied" boilerplate;
- generic Article 14/21 references;
- generic natural justice/proportionality language;
- generic audio-video/electronic evidence language;
- generic FIR/investigation language;
- generic "the court will assess the evidence" conclusions;
- generic "the accused is liable if ingredients are proved" conclusions;
- generic 10-mark/16-mark structures copied across unrelated provisions;
- generic examples where the provision number could be replaced without changing the facts.

A strong test is:

> **If the section/article number is removed, does the explanation still clearly reveal what this specific provision does?**

If not, rewrite it.

---

## 6. Section-specific definition

The definition must explain what the actual provision does.

It should normally identify:
- operative legal effect;
- persons/entities affected;
- conditions;
- exceptions/provisos;
- scope;
- consequence;
- relationship with connected provisions.

Do not merely paraphrase the chapter heading.

---

## 7. Section-specific legal principle

The legal principle must express the actual doctrine created, recognized, limited, or applied by the provision.

Do not substitute a broad constitutional or philosophical principle for the statutory rule.

Where a broader doctrine is relevant:
- identify it separately;
- explain the connection;
- do not present it as the holding of the provision itself.

---

## 8. Statutory deconstruction is mandatory

For provisions with operative clauses, explain the actual structure:

- sub-section;
- clause;
- proviso;
- explanation;
- exception;
- condition;
- consequence;
- cross-reference.

For complex provisions, use a clause-by-clause breakdown.

Never claim that a provision has a sub-section, proviso, explanation, ingredient, power, or exception that does not exist.

---

## 9. Essential ingredients must match the provision type

For offences, identify genuine legal ingredients.

For non-offence provisions, use the appropriate terminology:
- statutory conditions;
- jurisdictional requirements;
- procedural steps;
- elements of a test;
- constitutional requirements;
- evidentiary conditions;
- transition conditions;
- consequences.

Never manufacture "ingredients" merely to satisfy a schema field.

---

## 10. Detailed explanation standard

The explanation must teach the student:

**What → Why → How → When → Limits → Consequences → Application**

It should cover the legally relevant complexity of the provision without filler.

Do not optimize for word count.

Short provisions may legitimately have shorter explanations. Complex provisions require correspondingly deeper analysis.

---

## 11. Examples must be genuine legal fact patterns

Every example must:
- use facts relevant to the provision;
- identify the legally important facts;
- demonstrate how the provision operates;
- produce a legally reasoned result;
- avoid invented authorities;
- avoid unsupported procedural assumptions.

Where useful, provide:
- one compliant/successful example;
- one non-compliant/failing example.

### Example rejection test

An example fails if changing the section number to another unrelated provision would leave the example substantially unchanged.

---

## 12. Problem application must be provision-specific

A problem question must contain a real legal issue.

Preferred structure:

**Facts → Issue → Rule → Application → Counterargument → Resolution**

The rule must be the actual rule of the provision.

Do not use the same generic problem text for hundreds of provisions.

For offence provisions, facts should test actual ingredients.

For procedural provisions, facts should test actual procedural conditions.

For constitutional provisions, facts should test the relevant constitutional doctrine.

For repeal/savings provisions, facts must test transition and temporal operation.

---

## 13. Case-law integrity

Case law is a separate verification gate.

For each authority, where available, record:
- case name;
- court;
- year;
- reliable citation;
- relevant provision/doctrine;
- material facts;
- issue;
- holding/ratio;
- relevance to the present provision;
- current-law status.

Classify authorities where useful as:
1. direct interpretation;
2. closely connected doctrine;
3. predecessor-law authority;
4. historical/contextual authority.

Do not call category 2–4 a direct interpretation.

If no reliable direct authority is found, use:

> "No directly verified authority identified for this provision as of the verification date."

An empty case-law field is preferable to fabricated authority.

---

## 14. Predecessor-law and transition rules

For BNS, BNSS and BSA, predecessor mappings must be verified.

Never assume:
- same number = same law;
- similar wording = identical effect;
- old case law automatically governs the new provision.

Identify:
- predecessor provision;
- material textual change;
- unchanged principle, if actually unchanged;
- new requirement;
- deleted requirement;
- changed punishment/procedure;
- transition/savings effect.

For commencement and repeal provisions, verify the exact temporal rule before writing examples.

---

## 15. Constitutional-content rules

Constitutional provisions require article-specific analysis.

Do not automatically insert:
- Article 14;
- Article 19;
- Article 21;
- Article 32;
- Article 226;
- basic structure;
- proportionality;
- judicial review

unless they are genuinely relevant.

For omitted/repealed articles:
- explain historical status;
- identify the amendment/repeal;
- identify any surviving legal effect;
- never write them as living constitutional powers.

For living articles:
- do not describe them as omitted merely because the legacy dataset did so.

---

## 16. Exam-answer quality

Exam content must teach the student how to reason, not provide a copied skeleton.

### Short answer
Must identify the actual rule and core statutory/constitutional point.

### 10-mark answer
Normally includes:
1. introduction;
2. provision/text;
3. core rule/doctrine;
4. constituent elements or operative conditions;
5. relevant authority;
6. factual application;
7. conclusion.

### 16-mark answer
Should expand only where legally useful:
- legislative/constitutional background;
- detailed statutory analysis;
- doctrinal evolution;
- competing interpretations;
- leading authorities;
- practical application;
- predecessor/current-law comparison where relevant;
- conclusion.

Do not force every topic into an identical seven-point or eight-point blueprint.

---

## 17. Existing strong content must not be downgraded

Before updating a topic:
1. read the existing topic;
2. identify strong verified material;
3. preserve it;
4. improve only what is weak, outdated, generic, or incorrect.

A batch generator must never overwrite a strong topic simply because it is easier to regenerate it.

If uncertain, preserve the existing content and flag the topic for manual review.

---

## 18. Verification status rules

### planned
Work not yet substantively drafted.

### in-progress
Draft enhancement exists but one or more substantive verification gates remain open.

### verified
Only when all applicable gates pass:
- statutory identity;
- current law;
- section/article structure;
- legal principle;
- examples;
- problem application;
- relevant authorities;
- predecessor/transition mapping;
- cross-references;
- no generic-template contamination;
- source provenance.

### published
A separately approved publication state. It must never be inferred from schema validity or build success.

**Never automatically promote status.**

---

## 19. Automated validation must test substance

Schema validation is necessary but insufficient.

Enhancement validation should detect:
- repeated identical principles;
- repeated identical examples;
- repeated identical problem statements;
- repeated exam structures;
- section-number substitution patterns;
- provision-type mismatch;
- suspicious generic phrases;
- missing source provenance;
- unverified case-law claims;
- predecessor-law mismatch;
- incorrect temporal/commencement claims.

A clean build is only a technical gate.

---

## 20. Batch-generation safety

A batch enhancement script MUST:

1. read the authoritative source;
2. read the existing topic;
3. classify the provision;
4. generate only provision-specific content;
5. preserve strong existing content;
6. record source provenance;
7. leave verification status conservative;
8. run semantic quality checks;
9. produce a review report;
10. stop or flag when confidence is insufficient.

A script must **not** claim "100% complete" merely because it wrote 100% of files.

---

## 21. Create vs update rules

### Create new content
Create a new topic only when:
- the canonical catalogue requires it;
- the identity is verified;
- no equivalent topic already exists.

### Update existing content
Update when:
- the law changed;
- an error is found;
- an authority requires correction;
- content is materially incomplete;
- generic/template contamination is identified;
- source provenance needs strengthening.

### Never create duplicates
Before creating:
- check canonical ID;
- check legacy ID;
- check manifest;
- check equivalent topic/title.

---

## 22. Safety and recovery

Never delete legal content as part of enhancement.

If content is obsolete or superseded:
- preserve it;
- mark historical/current status correctly;
- archive only through the repository's approved archival process.

Any generator that would remove substantive material must stop.

---

## 23. Mandatory final checklist

Before declaring a subject or provision complete:

- [ ] Exact legal identity verified
- [ ] Current authoritative text verified
- [ ] Provision type classified
- [ ] All applicable clauses/provisos/explanations covered
- [ ] Legal principle is provision-specific
- [ ] No generic template contamination
- [ ] Examples are fact-specific
- [ ] Problems test the actual rule
- [ ] Distinctions are meaningful
- [ ] Case law is genuine and correctly characterized
- [ ] Predecessor/transition mapping verified where applicable
- [ ] Cross-references resolve
- [ ] Exam content is provision-specific
- [ ] Existing good content preserved
- [ ] Sources recorded
- [ ] Verification metadata complete
- [ ] Automated validation passes
- [ ] Semantic quality audit passes
- [ ] Production build passes
- [ ] No unresolved high-severity legal-content findings

Only after every applicable item passes may the topic be reported as **verified**.

## 24. Absolute prohibition

**Never optimize for completion percentage at the expense of legal accuracy.**

A subject with 80% genuinely verified content is preferable to a subject with 100% generated but unverified content.

The authoritative goal is:

**accurate + provision-specific + source-backed + teachable + legally verified**

—not merely:

**schema-complete + build-successful**.
