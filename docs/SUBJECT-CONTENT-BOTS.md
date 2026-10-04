# Subject content bots

One non-AI bot per subject. No model call. No manual step after the schedule starts.

Rules followed:

- legal-content: never delete the topic, preserve legacyTopicId and legacySubjectSlug, additive enhancement, illustrations are hypothetical, status stays in-progress or review, validate before commit.
- codepackr-law: do not invent a section, citation, holding, statutory illustration, or procedural step. BNS, BNSS, and BSA are current law from 1 July 2024. IPC, CrPC, and IEA stay historical. Exam structure is a study skeleton, not a court holding.
- quality: an example must use a fact, issue, ingredient, or authority already written in that topic file. Repeating the title is not an example. A topic is unfinished until `enhancement.exampleQuality` is `concrete-v3`.

## Chain

Write one topic, validate, commit `subject-bot-<subject>`, dispatch the next topic.

The next topic starts as soon as the topic file is written. Pull-request creation is a side step and cannot block the next topic. A failed pull request does not stop the chain.

When a subject has no topics left below `concrete-v3`, its pull request is merged if open, and the next subject is dispatched.

Schedule: 18:15 UTC daily. A blank subject continues the next incomplete subject. `workflow_dispatch` can target one subject. Default is one topic per run.
