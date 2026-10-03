# Content Enhancement Bot

## Purpose

Automate systematic enhancement of legal topics and illustrations without leaving partial subject coverage.

### Processing model

SUBJECT → FULL TOPIC INVENTORY → ONE TOPIC → ENHANCE CONTENT + ILLUSTRATIONS → VALIDATE → COMMIT → TRIGGER NEXT TOPIC.

Each subject is processed on a dedicated dated branch:

`content-enhancement-<subject>-YYYY-MM-DD`

The branch is kept separate from `main`. After the subject's topics are completed and validated, it can be opened as a PR to `main`.

## Safety rules

- Never delete the original topic file.
- Preserve `legacyTopicId` and `legacySubjectSlug`.
- Enhancement is additive/recoverable.
- Never fabricate statutes, cases, holdings, citations, dates, or legal propositions.
- Generated material remains `in-progress`/review until verification requirements are met.
- Full repository validation must pass before a topic is committed.
- The bot must not treat AI-generated interpretation as an authoritative court statement.

## Provider

The workflow expects:
- `ENHANCEMENT_PROVIDER_URL`
- `ENHANCEMENT_PROVIDER_TOKEN`

These are GitHub Actions secrets. The provider must accept the topic payload and return the structured enhancement fields required by `scripts/validate-enhancements.mjs`.

This keeps the repository independent of a single AI provider and avoids embedding credentials in source code.

## Scheduling

- Manual dispatch supports a specific subject.
- Scheduled execution can start the next available subject.
- Each successful run processes one topic by default.
- After validation and commit, the workflow triggers the next topic on the same subject branch.

## Illustrations

Illustrations are part of the enhancement payload. They must be grounded in the topic's legal framework and clearly distinguish hypothetical examples from actual case law.

## Completion

A subject is complete only when every topic in its repository inventory has been processed and repository-wide validation passes.
