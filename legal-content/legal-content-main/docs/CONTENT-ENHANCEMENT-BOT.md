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

## OpenAI provider

The bot uses the OpenAI Responses API directly. New integrations should use Responses rather than the retired Assistants API. The bot uses structured JSON output and OpenAI web search so each topic can be researched against current authoritative sources before the repository validator runs.

### GitHub configuration

Add this repository secret:

- `OPENAI_API_KEY` — your OpenAI API key. Never commit it or place it in a source file.

Optional repository variable:

- `OPENAI_MODEL` — model name. The workflow defaults to `gpt-6-astra`; change the variable if a different model is desired.

No `ENHANCEMENT_PROVIDER_URL` or provider token is required anymore.

### Processing safeguards

- Structured output is schema-constrained before the repository validator runs.
- Web research is enabled through the Responses API web-search tool.
- The prompt forbids invented statutes, sections, cases, holdings, citations, dates, legal propositions, and URLs.
- AI-generated content remains draft material until repository verification requirements are satisfied.
- The bot fingerprints the source content excluding the enhancement itself, so reruns do not contaminate the source fingerprint.

## Scheduling


- Manual dispatch supports a specific subject.
- Scheduled execution can start the next available subject.
- Each successful run processes one topic by default.
- After validation and commit, the workflow triggers the next topic on the same subject branch.

## Illustrations

Illustrations are part of the enhancement payload. They must be grounded in the topic's legal framework and clearly distinguish hypothetical examples from actual case law.

## Completion

A subject is complete only when every topic in its repository inventory has been processed and repository-wide validation passes.
