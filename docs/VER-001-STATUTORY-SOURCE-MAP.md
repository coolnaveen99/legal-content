# VER-001 statutory source map

Official current texts used for statutory checks. A topic is not verified because its Act appears here.

| Family | Act | Official text | Checked |
|---|---|---|---|
| bns | Bharatiya Nyaya Sanhita, 2023, Act 45 of 2023 | https://www.indiacode.nic.in/bitstream/123456789/20062/1/a202345.pdf | Section 1 heading and subsections (1)–(4) matched the India Code text dated as on 6 October 2025. Subsections (5)–(6) were not re-read in this pass. |
| bnss | Bharatiya Nagarik Suraksha Sanhita, 2023, Act 46 of 2023 | https://www.indiacode.nic.in/bitstream/123456789/21544/1/the_bharatiya_nagarik_suraksha_sanhita%2C_2023.pdf | Arrangement of sections only. No topic verified. |
| bsa | Bharatiya Sakshya Adhiniyam, 2023, Act 47 of 2023 | https://www.indiacode.nic.in/handle/123456789/20063 | Handle recorded. Text not re-read in this pass. |
| constitution | Constitution of India | https://www.indiacode.nic.in/handle/123456789/15240 | Handle recorded. No article re-read in this pass. |
| contract | Indian Contract Act, 1872 | https://www.indiacode.nic.in/handle/123456789/2187 | Handle recorded. No section re-read in this pass. |

Spot check recorded in `docs/VER-001-SPOT-CHECK.md`.

Promotion gate: `scripts/gate-unverified-promotion.mjs`. It fails if any enhancement is `verified` or `published` without `verification.lastVerifiedAt`.
