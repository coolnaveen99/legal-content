# Manifest Generation, Versioning & Integrity

Specification for checklist **Section 3**. This is the contract authors, CI, and the Content Gateway must follow.

## 1. Manifest generation specification

### Location

- Primary discovery file: `manifests/content-manifest.json`
- Schema: `schemas/manifest.schema.json` (`manifestVersion` pattern `^v[0-9]+$`)

### Required top-level fields

| Field | Type | Rule |
|-------|------|------|
| `manifestVersion` | string | Currently `v1` |
| `generatedAt` | date-time (ISO 8601) | Time the manifest was produced |
| `repository` | string | Must be `coolnaveen99/legal-content` |
| `entities` | array | One entry per **discoverable** entity file |

### Entity entry fields

| Field | Required | Rule |
|-------|----------|------|
| `id` | yes | Canonical ID matching the entity file |
| `entityType` | yes | Matches entity `entityType` |
| `path` | yes | Repo-relative path, e.g. `topics/india/bns-s23.json` |
| `version` | yes | Integer ≥ 1; matches entity envelope `version` |
| `status` | yes | Matches entity envelope `status` |
| `sha256` | optional | Hex SHA-256 of the entity file bytes (UTF-8, LF, no BOM) |

### Generation algorithm (normative)

1. Walk content roots: `topics/`, `provisions/`, `judgments/`, `doctrines/`, `comparisons/`, `illustrations/`, `sources/`, `sanhita-mappings/`, `collections/`, `seo/`.
2. Include only `*.json` entity files (exclude `README.md` and schema files).
3. Parse each file; reject generation if JSON is invalid or envelope required fields are missing.
4. Build entity entries sorted by `id` ascending (stable, deterministic).
5. Set `generatedAt` to UTC now at generation time.
6. Write `manifests/content-manifest.json` with `additionalProperties` false compliance.

### Who runs generation

- **CI** on PR and on merge to `main` (when workflows exist).
- **Authors** may regenerate locally before opening a PR that adds/changes entities.
- **Admin publishing path** must regenerate or patch the manifest as part of the publish step so `published` entities are listed.

### Inclusion by status

| Status | In manifest? |
|--------|----------------|
| `draft`, `research`, `review`, `verified`, `approved`, `update` | Optional for Admin/debug manifests; **production manifest defaults to `published` + `review-due` + `archived` only** |
| `published`, `review-due`, `archived` | **Must** appear in production manifest when files exist |

Until tooling lands, the initial empty `entities: []` production manifest is valid.

---

## 2. Entity versioning specification

1. Each entity has integer `version` starting at `1`.
2. **Any substantive change** to published content (body, sources, effective dates, status transition that changes consumer meaning) requires `version := version + 1` and a new `updatedAt`.
3. **Canonical `id` is immutable** after first publish. Title changes do not change `id`.
4. Consumers resolve by `id` and take the latest published version unless a snapshot pins a version.
5. Replacing a file in place without bumping `version` after prior publication is a policy violation.
6. `schemaVersion` (e.g. `v1`) is independent of entity `version`; both must be recorded.

---

## 3. Content hash specification

### Algorithm

- **SHA-256** over the raw entity file bytes as stored in Git.
- Encoding: UTF-8.
- Line endings: LF only in committed JSON.
- No BOM.
- Hash is of the **file on disk**, not a canonicalized subset (so formatting changes change the hash — prefer stable `JSON.stringify` style in generators).

### Storage

- Manifest entity entry field: `sha256` (64 lowercase hex chars) or `null` when not yet computed.
- Optional future: embed `contentHash` inside the entity envelope; if both exist they must match.

### Purpose

- Detect bit-level drift between manifest and blob.
- Cache invalidation for Content Gateway.
- Audit that published bytes were not altered without a version bump.

---

## 4. Manifest integrity validation

CI / publish gate **MUST** fail if any of the following hold:

1. Manifest fails `manifest.schema.json`.
2. `repository` ≠ `coolnaveen99/legal-content`.
3. An entity `path` does not exist or is not a file.
4. Parsed entity `id` / `entityType` / `version` / `status` ≠ manifest entry.
5. `sha256` is present and does not match recomputed file hash.
6. Duplicate `id` in `entities` array.
7. Duplicate `path` in `entities` array.

Warnings (may be errors in strict publish mode):

- `published` entity missing from production manifest.
- Manifest lists `draft` in a production-tagged build.

---

## 5. Stable ID collision validation

1. Across the whole repository, **`id` values must be unique**.
2. Collision = two files (or one file + manifest stale entry) sharing the same `id` with different paths or different concepts.
3. Reuse of an `id` for a different legal concept is forbidden even after archive; archive retains the ID.
4. Local-id segment should be slug-stable (`bns-s23`, not `BNS Section 23`).

---

## 6. Orphan-reference validation

Using [CROSS-ENTITY-REFERENCE-RULES.md](CROSS-ENTITY-REFERENCE-RULES.md):

1. Collect all outbound canonical IDs from entity reference fields (`relatedTopics`, `relatedJudgments`, `sources`, provision refs, etc.).
2. **Hard fail (publish):** required references whose target ID is not present as any entity file / manifest entry.
3. **Hard fail (publish):** reference type prefix inconsistent with target `entityType` when target exists.
4. **Warn:** soft related-* links to `draft` targets from a `published` entity.
5. **Allow:** references to `archived` IDs (must remain resolvable).

Until automated CI exists, authors run this checklist manually on PRs that add references.

---

## 7. Missing-source validation

1. Envelope `sources` is a required array on the content envelope schema.
2. For status ≥ `verified`:
   - `sources` must be non-empty, **or**
   - entity must carry an explicit `needs-review` / `sources-pending` tag and must not be `published`.
3. For status `published`:
   - Every entry in `sources` should resolve to a `source:*` entity ID **or** (transitional) an absolute official URL listed in a source entity to be created.
4. Empty `sources` on `published` is a **publish gate failure**.
5. Invented citations are a legal-quality failure independent of array length (see Section 4 docs).

---

## 8. Publication snapshot / version strategy

### Goals

- Allow the application to pin a known-good content set.
- Support rollback without rewriting history.

### Strategy

1. **Git commit SHA** on `main` is the coarse snapshot ID for the whole repo.
2. **Manifest** at that commit lists exact entity versions and optional hashes.
3. Future optional: `manifests/snapshots/YYYY-MM-DD-vN.json` copied from content-manifest at release time with an added `snapshotId` and `gitSha` field (non-breaking additive; requires schema bump or sidecar file).
4. Content Gateway configuration should record:
   - `contentRef`: branch or tag or commit SHA
   - optional `manifestPath`
5. Rollback = point Gateway at previous `contentRef` (prior commit/tag), not delete entity history.
6. Tags such as `content-v1.2.0` may mark application-coordinated releases; tagging policy is owned by the repository owner.

### Compatibility

- Additive optional manifest fields require either `additionalProperties` relaxation or a `manifestVersion` bump per [SCHEMA-VERSIONING-POLICY.md](SCHEMA-VERSIONING-POLICY.md).
- Current `v1` manifest schema stays strict (`additionalProperties: false`); snapshot metadata lives in Git tags/commits until a deliberate schema evolution.

---

## Implementation status

| Item | Spec | Automated enforcement |
|------|------|------------------------|
| Manifest generation | This doc | Enforced by `scripts/validate.mjs` + CI |
| Entity versioning | This doc | Policy / review |
| Content hash | This doc | Enforced by `scripts/validate.mjs` + CI |
| Integrity validation | This doc | Enforced by `scripts/validate.mjs` + CI |
| ID collision | This doc | Enforced by `scripts/validate.mjs` + CI |
| Orphan refs | This doc + cross-entity rules | Enforced by `scripts/validate.mjs` + CI |
| Missing sources | This doc | Enforced for published entities by `scripts/validate.mjs` + CI |
| Snapshots | Git SHA + manifest | Tags optional |

Specification complete for Section 3. Runtime validators belong under checklist Section 10.
