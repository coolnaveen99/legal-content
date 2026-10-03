# Subject content bots

One non-AI bot per subject. No model call. No manual step after the first schedule.

Rules followed:

- legal-content: never delete the topic, preserve legacyTopicId and legacySubjectSlug, additive enhancement, illustrations are hypothetical, status stays in-progress or review, validate before commit.
- codepackr-law: do not invent a section, citation, holding, statutory illustration, or procedural step. BNS, BNSS, and BSA are current law from 1 July 2024. IPC, CrPC, and IEA stay historical. Exam structure is a study skeleton, not a court holding.

## Chain

SUBJECT inventory -> topics -> validate -> commit subject-bot-<subject> -> open or update PR -> dispatch the next run for the same subject.

When that subject has no pending topics, the PR is merged and the next subject job is dispatched.

Schedule: 18:15 UTC daily, one incomplete subject at a time. workflow_dispatch can target one subject.
