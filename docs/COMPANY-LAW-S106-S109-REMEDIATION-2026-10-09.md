# Company Law sections 106–109 remediation — 2026-10-09

Status: **IN PROGRESS — NOT CLOSED.**

Sections 106, 107, 108 and 109 now carry the operative rule and two educational illustrations each. Section 108 is stated as an enabling provision. The class of company is in the rules, not invented in the section. No topic is marked verified or published. Section deep links remain null.


## Section 106 scope correction — 2026-10-13

Section 106 was rechecked against the section text exposed by the official MCA-hosted Companies Act PDF search result. The canonical topic now states all three subsections: (1) articles may restrict voting on shares with unpaid calls/other sums presently payable or an exercised company lien; (2) a company cannot prohibit voting on another ground (the text is not limited to public companies); and (3) a member entitled to multiple votes on a poll need not use all votes or cast all used votes the same way. Generic cross-subject content was removed from the section 106 topic, including the unrelated BSA s. 63 reference and unrelated case entries. The educational illustrations and app mirror were corrected.

Evidence commits: canonical topic `f8466ebb876ad848f290ab536261d4bc2b477448`; illustration correction `9c9edc4519ce9b4f8056f18e52b9da6c8477655`; inventory update `919982652a3c04f989a2b45edb44cbf7141b1594`; app mirror `06d03fe92f03ec67fa4626e44963a7947ba3de91`.

Validation boundary: focused source inspection and field-level JSON/TS structure checks only. The official PDF bytes/checksum were not obtained; current-law consolidation and case-law verification remain open. No status was changed to verified or published. Full legal-content validation and production deployment must still pass.


## App integration check — 2026-10-13

The canonical section 106 JSON and app mirror passed focused structural checks: three subsections present; subsection (2) not narrowed to public companies; unrelated BSA reference and unrelated cases removed; source ID attached; topic remains `review` / `SOURCE_CHECK_REQUIRED`. The app mirror's illustration type was corrected from unsupported `educational` to the declared `practical` union value in commit `e7fcaa4da1839bdc174f230dc463ee7c674b2626`.

The resulting Vercel production-target deployment `dpl_5fQhcC4DFVBG8DEvyxmcfdCxURxR` nevertheless ended in `ERROR` (`lint_or_type_error`; `npm run build` exited 2). The connected Vercel API allows deployment metadata but denies build-event/log access for the selected team scope (403). Exact compiler diagnostics are therefore not available in this pass. Do not claim the updated app mirror is deployed; the section 106 canonical content correction is committed, while app integration remains blocked pending exact build diagnostics and a passing build.
