# Company Law sections 104–105 remediation — 2026-10-09

**Status: IN PROGRESS — NOT CLOSED.** No topic is marked verified or published. The Company Law case-law gate, SEO/noindex gate, production gate and full statutory verification remain open.

## Ownership and conflict check
- Canonical repository: `coolnaveen99/legal-content`, branch `main`.
- Starting canonical SHA: `cc15b04eeaa1f46ed9c504977f2af609439655bf`.
- App repository: `coolnaveen99/codepackr-law`, branch `main`.
- Starting app SHA: `e400037d373b76881c552cff2f8fb131a4dbbfe3`.
- Branch searches returned only `main` in both repositories; no open Company Law PR was found.
- Inventory entries `ca-s-104.json` and `ca-s-105.json` had `bot: null` and no verification value. The active control claims did not list these sections. Exact range was claimed before editing in `docs/WORK-CONTROL-MASTER-2026-10-08.md`.

## Work performed
- Replaced generic scaffold language for section 104 with the provision-specific rule on election of chairman and a poll demanded on that election.
- Replaced generic scaffold language for section 105 with provision-specific treatment of proxy appointment, speaking/voting limits, notice disclosure, instrument formalities, deposit timing and inspection.
- Removed unrelated Salomon/Foss/Needle/Miheer cases from these two topic records. No section-specific judgment has been added or marked verified.
- Added official-source records:
  - Section 104: https://www.indiacode.nic.in/show-data?actid=AC_CEN_22_29_00008_201318_1517807327856&orderno=107&sectionId=1295&sectionno=104
  - Section 105: https://www.indiacode.nic.in/bitstream/123456789/2114/5/A2013-18.pdf?v=20260515095202
- The section 105 record deliberately uses the official Act PDF because a section-specific India Code deep link was not established. No URL was fabricated.
- Added four illustration entities (two per section). Each is explicitly marked as an educational example/hypothetical, not an official statutory illustration, and is linked to its parent topic and source record.
- Linked the new source and illustration IDs from the canonical topic records.
- Mirrored the section-specific learning content in the app modules.

## Validation performed
- Parsed all eight changed/new canonical JSON entities successfully.
- Checked required top-level entity fields, entity types, source URL host, source review status, parent-topic references and explicit non-statutory-illustration flags.
- Checked that both topic files remain at `status: review`, each references its source and two illustrations, and unrelated case lists are empty.
- GitHub Actions “Validate legal content” failed on the corpus-wide enhancement validator: 4,299 missing-field errors across 3,678 topics, with log examples in unrelated Constitution topics such as `topics/constitution/art-93.json` through `art-99.json`. The focused JSON/reference integrity checks for this batch passed, but the repository-wide validator did not. This failure is not evidence that the Company Law edits caused the errors; CI must be investigated separately.
- Full statutory amendment/rules verification, a passing repository-wide schema/enhancement validator, app TypeScript/build/E2E results, section 105 deep-link attachment, case-law verification, SEO and production remain open.

## Commits
Canonical topic/source/illustration changes:
- `0bffa40fa16f14b3a8979a630c2ec9965d6160d0`
- `0a411e39f3298281f6931ee1df3643757d017f9f`
- `47e15a45a34cf79fba858fa266898bf822f63f03`
- `4a728ec6ee7955f43d4d9c38556faf82ee216145`
- `46f53ce56c91ef5a56086444fde93a0f34c82bdb`
- `60a7117e478c2dafe0d455cd46319b541b238ed1`
- `04a4d4988818fe95841ef9ff3c043f2609244d31`
- `5d7c800dd9507fe0086c2c543fb1f2a1d079736d`
- Inventory tracking: `85bd8bebda592dc21bad41475297d82f5e3610a9`

App mirror content commits (initial mirror, subsequently type-corrected):
- Section 104 initial: `469cdbb184e85133ee61667d42a103a400a14e50`
- Section 105 initial: `f05adb3cde422ad8a89bb95941233dcd342d5448`
- Section 104 type correction: `f8d81182ba72049529e28e2c1cf8b54a59a2a7e5`
- Section 105 type correction: `ee0418c82ff366f1399cb17ff27e786a178c68ad`

App validation note: an earlier typecheck reported errors in the first mirrored versions (example object fields, hypothetical IDs, and a non-supported drafting category). These were corrected in the two latest commits above. The new CI runs for those commits are pending/in progress; do not report app validation as passed until the runs finish.
