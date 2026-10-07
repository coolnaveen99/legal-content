# Contract Subject Verification Ledger — 2026-10-06

## Purpose
Single-subject control ledger for the complete Contract collection. This ledger separates repository inventory from substantive legal verification.

## Authoritative source anchors
- Indian Contract Act, 1872 — India Code: https://www.indiacode.nic.in/handle/123456789/2187
- Official ICA PDF: https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf
- Sale of Goods Act, 1930 — India Code source recorded in `docs/SOURCE-SITE-LOG.md`.
- Indian Partnership Act, 1932 — India Code source recorded in `docs/SOURCE-SITE-LOG.md`.
- Specific Relief Act, 1963 — India Code source recorded in `docs/SOURCE-SITE-LOG.md`.

## Statutory boundary established
- ICA §§1–75 are operative Contract Act material covered by the current Act record.
- ICA §§76–123 are repealed; the former Sale of Goods chapter/material must not be treated as current ICA text.
- ICA §§124–238 cover indemnity/guarantee, bailment and agency.
- Partnership §§1–74 and Sale of Goods §§1–66 are separate Acts and require their own current-law source checks.
- Specific Relief material is governed by the Specific Relief Act, not by the Contract Act.

## Status vocabulary
- INVENTORIED — file is in the 60-topic subject set.
- STATUTE-MAPPED — applicable statutory source family identified.
- SOURCE-VERIFICATION-PENDING — authoritative provision/case evidence still needs topic-level recording.
- VERIFIED — only after substantive statutory/current-law and material case evidence is complete.
- COMPLETE — all topic-level gates, validation and subject reconciliation pass.

## 60-topic execution matrix

| # | Topic file | Source family | Current status |
|---:|---|---|---|
| 1 | agency.json | ICA §§182–238 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 2 | bailment-pledge.json | ICA §§148–181 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 3 | capacity.json | ICA §§11–12 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 4 | consideration.json | ICA §§2(d), 23–25 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 5 | contingent-contracts.json | ICA §§31–36 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 6 | free-consent.json | ICA §§13–19A | STATUTE-MAPPED / CASE-GATE-PENDING |
| 7 | ica-s-1-2.json | ICA §§1–2 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 8 | ica-s-10-12.json | ICA §§10–12 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 9 | ica-s-124-125.json | ICA §§124–125 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 10 | ica-s-126-131.json | ICA §§126–131 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 11 | ica-s-132-138.json | ICA §§132–138 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 12 | ica-s-13-19a.json | ICA §§13–19A | STATUTE-MAPPED / CASE-GATE-PENDING |
| 13 | ica-s-139-147.json | ICA §§139–147 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 14 | ica-s-148-151.json | ICA §§148–151 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 15 | ica-s-152-157.json | ICA §§152–157 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 16 | ica-s-158-167.json | ICA §§158–167 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 17 | ica-s-168-171.json | ICA §§168–171 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 18 | ica-s-172-179.json | ICA §§172–179 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 19 | ica-s-180-181.json | ICA §§180–181 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 20 | ica-s-182-189.json | ICA §§182–189 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 21 | ica-s-190-195.json | ICA §§190–195 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 22 | ica-s-196-200.json | ICA §§196–200 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 23 | ica-s-20-22.json | ICA §§20–22 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 24 | ica-s-201-210.json | ICA §§201–210 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 25 | ica-s-211-221.json | ICA §§211–221 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 26 | ica-s-222-225.json | ICA §§222–225 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 27 | ica-s-226-238.json | ICA §§226–238 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 28 | ica-s-23-25.json | ICA §§23–25 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 29 | ica-s-26-30.json | ICA §§26–30 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 30 | ica-s-3-9.json | ICA §§3–9 | STATUTORY-VERIFIED / CASE-GATE-N/A |
| 31 | ica-s-31-36.json | ICA §§31–36 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 32 | ica-s-37-45.json | ICA §§37–45 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 33 | ica-s-46-50.json | ICA §§46–50 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 34 | ica-s-51-58.json | ICA §§51–58 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 35 | ica-s-59-61.json | ICA §§59–61 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 36 | ica-s-62-67.json | ICA §§62–67 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 37 | ica-s-68-72.json | ICA §§68–72 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 38 | ica-s-73-75.json | ICA §§73–75 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 39 | indemnity-guarantee.json | ICA §§124–147 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 40 | offer-acceptance.json | ICA §§2(a)-(b), 3–9 | STATUTORY-VERIFIED / CASE-GATE-N/A |
| 41 | partnership-s-1-17.json | Partnership Act §§1–17 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 42 | partnership-s-18-30.json | Partnership Act §§18–30 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 43 | partnership-s-31-38.json | Partnership Act §§31–38 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 44 | partnership-s-39-55.json | Partnership Act §§39–55 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 45 | partnership-s-56-69.json | Partnership Act §§56–69 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 46 | partnership-s-70-74.json | Partnership Act §§70–74 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 47 | performance.json | ICA §§37–67 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 48 | quasi-contracts.json | ICA §§68–72 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 49 | s-10.json | ICA §10 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 50 | s-23.json | ICA §23 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 51 | s-37.json | ICA §37 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 52 | s-56.json | ICA §56 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 53 | s-73.json | ICA §73 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 54 | s-74.json | ICA §74 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 55 | soga-s-1-17.json | Sale of Goods Act §§1–17 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 56 | soga-s-18-30.json | Sale of Goods Act §§18–30 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 57 | soga-s-31-61.json | Sale of Goods Act §§31–61 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 58 | soga-s-62-66.json | Sale of Goods Act §§62–66 | STATUTE-MAPPED / CASE-GATE-PENDING |
| 59 | specific-relief.json | Specific Relief Act / contract remedies | STATUTE-MAPPED / CASE-GATE-PENDING |
| 60 | void-agreements.json | ICA §§20–30 | STATUTE-MAPPED / CASE-GATE-PENDING |

## Reconciliation update — 2026-10-06

A repository-wide status audit found 18 Contract files carrying `published` while their own verification metadata remained `lastVerifiedAt: null` / `caseLawGate: not-opened`. Those 18 files were downgraded to `review` without changing substantive content. The remaining Contract topic files were already `review` in the audit. Contract therefore has **0 topics published and 60 topics in review** pending substantive verification.

Corrections committed on main:
- 7099b7b44d6b5764a698d6be4f18fcb64c9ec530 — false publication status batch 1
- 58a0ad67654351d2b9d03691fefe7dd30b234e6e — false publication status batch 2
- 37c83245566748826c740e4c3e4019859fac9e6c — false publication status batch 3

## Statutory evidence tranche — ICA §§1–12

Official India Code text was inspected on 2026-10-06. Sections 1–2 were checked for Act identity, extent/commencement/saving and statutory definitions; sections 3–9 were checked for communication, completion, revocation, absolute acceptance, performance-based acceptance and express/implied promises; sections 10–12 were checked for enforceability conditions, competency and sound mind. The corresponding statutory rows are **statutory-verified**. For the offer/acceptance unit, no material case authority is being relied upon in this verification tranche, so its case gate is **not-applicable**. Other Contract rows remain pending their own topic-level case and current-law gates.

Official evidence: Indian Contract Act, 1872 PDF, India Code: https://www.indiacode.nic.in/bitstream/123456789/2187/2/A187209.pdf

## Subject-wide statutory source reconciliation — 2026-10-06

All 60 repository topic rows now have an identified authoritative statutory source family. The source boundary was reconciled against the official Indian Contract Act text, the official Sale of Goods Act text, and the official Indian Partnership Act source. ICA §§76–123 remain explicitly repealed; Sale of Goods material is therefore governed by the Sale of Goods Act rather than by live ICA sections. The Partnership Act source independently identifies §§1–74, and the Specific Relief material remains governed by the Specific Relief Act and its amendment framework.

This closes the **source-family mapping gate for all 60 topics**, but it does **not** convert the 60 topics to VERIFIED. Topic-level legal correctness, current-law checks and authoritative case verification remain separate gates.

Evidence: ICA official PDF and India Code handle; Sale of Goods Act official India Code PDF; Indian Partnership Act official India Code Act record/PDF; Specific Relief (Amendment) Act, 2018 official India Code publication.

## Gate
The subject remains **IN PROGRESS**. No row is promoted from this ledger alone. Completion requires:
1. exact statutory mapping;
2. current-law/amendment/repeal verification;
3. material case inventory;
4. authoritative judgment verification for cited authorities;
5. topic-level evidence/date/verifier metadata;
6. schema/entity/relationship/preservation validation;
7. final subject reconciliation.

## Important finding
The repository contains Sale of Goods and Partnership material inside the Contract subject collection, but those provisions are separate Acts. They must not inherit Indian Contract Act verification merely because they are grouped under Contract.

## Next execution
Verify the ICA §§1–75 family and then the ICA §§124–238 family, followed by Partnership, Sale of Goods and Specific Relief. Do not publish or mark verified merely because a source URL exists.


## Execution update — 2026-10-07

- `ica-s-3-9.json`: statutory enhancement and India Code verification completed.
- `offer-acceptance.json`: substantive enhancement upgraded and verified against the official India Code text for ICA ss. 3–9; no unverified case authority added.
- Commit: `ca9950088d0c1ae9451c5131908c248ef910b1f7`.
- Contract remains IN PROGRESS; this is a verification tranche, not subject-wide closure.
