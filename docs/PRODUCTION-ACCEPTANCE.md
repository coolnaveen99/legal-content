# Production Acceptance — legal-content

**Companion app checklist:** `coolnaveen99/codepackr-law` → `docs/PRODUCTION-ACCEPTANCE.md`

This document is the **content-repo side** of production acceptance for the canonical library consumed by Codepackr Law.

---

## 1. Content infrastructure (automated)

Verified **2026-10-01**.

| # | Criterion | Evidence | Result |
|---|-----------|----------|--------|
| C1 | Schemas + validate CI | `scripts/validate.mjs`, workflow `validate-content` | **PASS** |
| C2 | Full-scan manifest generation | `refresh-manifest.mjs` scans all entity dirs; CI commits on main | **PASS** |
| C3 | Live manifest size | **719** entities | **PASS** |
| C4 | Live relationship index | **1755** edges | **PASS** |
| C5 | Published entity integrity | validate errors=0 on full tree (post FR state-and-laws fix) | **PASS** |
| C6 | PIL relationship tests | `test:relationships` | **PASS** |
| C7 | Public read URLs | raw.githubusercontent.com HTTP 200; CORS `*` | **PASS** |
| C8 | No credentials in corpus | Public JSON only | **PASS** |

### Counts (main)

| Type | Count |
|------|------:|
| topic | 326 |
| provision | 308 |
| collection | 28 |
| source | 22 |
| doctrine | 16 |
| illustration | 8 |
| sanhitaMapping | 5 |
| judgment | 4 |
| comparison | 1 |
| seoRecord | 1 |
| **Total** | **719** |
| published | 689 |
| review | 30 |

---

## 2. App consumption (cross-repo)

| # | Criterion | Result |
|---|-----------|--------|
| A1 | ContentGateway + ContentRepository in app | **PASS** (code on app main) |
| A2 | `parity:legal-content` smoke | **PASS** (2026-10-01) |
| A3 | Topic UI related graph | **PASS** (PA-002 human UX evidence) |
| A4 | Production deploy includes Gateway | **PASS** (PA-001 evidence) |
| A5 | Legacy dual-read retained | **PASS** (required until human UX sign-off) |

---

## 3. Explicit non-goals for this acceptance

- Every topic is a full PhD-length treatise (depth upgrades continue).
- Removing legacy `codepackr-law` topic files (blocked until human UX pass).
- Prediction tools, telemetry, or server-side case data.

---

## 4. Sign-off

| Gate | Status |
|------|--------|
| Content infrastructure C1–C8 | **PASS** |
| Automated app consumption A1–A2 | **PASS** |
| Production UX + deploy A3–A4 | **PASS** |
| **Overall content-repo acceptance** | **PASS** |

When app human UX is signed, mark Section 12 “Production acceptance review” complete on `IMPLEMENTATION-CHECKLIST.md` and record the date here.
