# Source Records & Legal Verification

Specification for checklist **Section 4**. Aligns with `schemas/source.schema.json`, historical/current-law rules, and the zero-hallucination standard in CodePackr Law copilot instructions.

## 1. Source record contract

A **source** is a first-class entity (`entityType: "source"`) with canonical ID:

```text
source:<jurisdiction-or-domain>:<local-id>
```

Example: `source:india:india-code-bns-2023`

### Envelope

Uses the common content envelope (`schemaVersion`, `id`, `version`, `status`, `title`, `jurisdiction`, `content`, `sources`, `updatedAt`, optional effective dates/tags).

### `content` object (source-specific)

| Field | Required for ≥ verified | Description |
|-------|-------------------------|-------------|
| `sourceType` | yes | Enum: `primary`, `secondary`, `official`, `court`, `legislation`, `notification`, `academic`, `other` |
| `url` | preferred | Absolute URI when available |
| `publisher` | preferred | Issuing body (e.g. India Code, SCI, Gazette) |
| `citation` | when applicable | Formal citation string |
| `accessedAt` | yes for web sources | ISO date-time of access/review |
| `verificationStatus` | yes | `unverified` \| `reviewed` \| `verified` |
| `publicationDate` | when known | Document publication/promulgation date |

Other explanatory fields may be added under `content` while schema `additionalProperties` remains true for the content object; envelope stays closed.

### Referencing sources from other entities

- Prefer **source entity IDs** in the envelope `sources[]` array.
- Transitional: absolute official URLs may appear until migrated into source entities; publish gate should trend toward ID-only.

---

## 2. Primary / secondary classification

| Class | `sourceType` values | Use |
|-------|---------------------|-----|
| **Primary** | `primary`, `official`, `court`, `legislation`, `notification` | Statutory text, judgments, gazette notifications, official consolidations |
| **Secondary** | `secondary`, `academic`, `other` | Textbooks, articles, commentary — support explanation only |

**Rules:**

1. Statutory wording and holdings claimed as fact must be traceable to a **primary** source (or official court report).
2. Secondary sources may illuminate doctrine but must not replace primary verification for section numbers, ratios, or orders.
3. Mark mixed reliance explicitly in topic notes when both are used.

---

## 3. Citation / provenance model

Each legal proposition that is not pure pedagogy should carry provenance:

1. **What** — claim or quotation scope
2. **Where** — source ID and, if supported, page/paragraph/section
3. **When** — access or judgment date
4. **Status** — verification status of the source and of the entity

Provenance is stored via:

- Entity `sources[]`
- Optional inline attribution in content body
- Judgment decoder fields that only include paragraph/page refs **when the source supports them**

Never invent paragraph numbers, report citations, or pinpoints.

---

## 4. Source verification status

| `verificationStatus` | Meaning |
|----------------------|---------|
| `unverified` | Recorded but not checked against the underlying document |
| `reviewed` | Human opened/checked the source; minor uncertainty may remain |
| `verified` | Checked against primary/official text for the claims that cite it |

Entity lifecycle `status` and source `verificationStatus` are independent: an entity cannot honestly be `verified` if all of its material sources are still `unverified`.

---

## 5. Court / judgment source metadata

For judgment-linked sources, prefer capturing (in source `content` or judgment entity):

- Court name and level
- Neutral citation or official report citation when real
- Judgment date
- Bench composition when relevant
- URL to official judgment PDF/HTML when available

Judgment **decoder** fields live on the judgment entity; the source entity proves *where the text came from*.

---

## 6. Legislation source metadata

For statutes/rules/notifications:

- Short title and number/year
- Promulgation / commencement dates
- Amending acts when material
- Official consolidation URL (e.g. India Code) when used
- Whether the snapshot is current-law or historical

Use `effectiveFrom` / `effectiveTo` on provision/topic entities; legislation sources should not blur repealed text as current.

---

## 7. Historical-law verification rules

1. Label historical concordance (IPC/CrPC/IEA, repealed provisions, pre-amendment text) with tags and narrative clarity.
2. Verify historical text against a dated primary source; do not assume identity with current Sanhitas.
3. Pending-proceedings / savings analyses must cite BNSS s. 531 and Article 20(1) where relevant — without inventing transitional outcomes.
4. See [HISTORICAL-CURRENT-LAW-RULES.md](HISTORICAL-CURRENT-LAW-RULES.md).

---

## 8. Current-law verification rules

1. Prefer BNS / BNSS / BSA for post-1 July 2024 criminal substantive and procedural claims, subject to savings.
2. Confirm section numbers and amendments against official text before `verified`.
3. Civil, constitutional, and other domains: cite the latest authoritative consolidation/amendment known at `accessedAt`.
4. If currency is uncertain, keep entity ≤ `review` and tag `needs-review`.

---

## 9. Copyright / data-governance rules

1. **Do not** wholesale-copy proprietary headnotes, annotated commentaries, or subscription database text.
2. Official statutory text and judgments may be used subject to applicable law and fair dealing; prefer linking + original structured analysis.
3. User-generated or AI-assisted drafts are educational scaffolding until verified; never label them court-approved.
4. No confidential client facts in this public repository.
5. Application privacy rules (client-side practice data) remain in `codepackr-law`; this repo holds canonical library content only.

---

## 10. No-invented-citation rule

**Non-negotiable:**

- Do not invent case names, citations, section numbers, illustrations, holdings, ratios, procedural histories, or paragraph pinpoints.
- Do not convert “not found” into “does not exist” or into a fabricated alternative.
- If unverified, status ≤ `review` / tag `needs-review`.
- Hallucinated authority **fails** the content quality gate regardless of length or polish.

This rule applies to humans, AI assistants, and automated generators equally.
