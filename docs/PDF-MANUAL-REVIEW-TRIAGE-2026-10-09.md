# Official PDF Manual-Review Triage — 2026-10-09

**Issue:** [#40 — P0: Add auditable manual-review fallback for official PDF validation](https://github.com/coolnaveen99/legal-content/issues/40)  
**Scope:** Technical PDF retrieval/format review only. This is not statutory or case-law verification.  
**Current generated queue:** `docs/pdf-manual-review-queue.json`  
**Queue state retained:** `PASS_WITH_MANUAL_REVIEW_REQUIRED`, 6 pending; `legalVerificationAuthorized=false`; `publicationAuthorized=false`.

## Result

The six original target URLs were already recorded as blocked or transiently inaccessible in the CI run. I retried opening those exact URLs through the available web viewer and searched for alternate document records. Five items have an accessible alternate copy or official-hosted document record whose title/date/notification identity and extracted text can be cross-checked. One item has only a readable third-party indexed text page because both the original Gazette PDF and its mirror PDF could not be opened.

**None of the six original URL reviews is closed by this triage.** Alternate copies are not byte-identical proof of the original target URL response. No checksum for the original failed target responses is available, so the checksum-preserving review-closure rule must remain in force. This report records useful alternate evidence without fabricating a reviewer closure or changing legal verification/publication state.

## Item-by-item triage

### 1. Companies Act, 2013 — private-company meeting exemptions under section 462

- **Original target:** https://www.mca.gov.in/Ministry/pdf/ExemptionPrivateCompanies.pdf
- **Recorded CI response:** HTTP 403; HTML response (426 bytes); no PDF signature/checksum.
- **Browser-viewer attempt:** HTTP 403.
- **Alternate copy inspected:** IndiaCode-hosted PDF of G.S.R. 583(E), 13 June 2017, including the original G.S.R. 464(E), 5 June 2015: https://indiacode.ecourtsindia.com/doc/699f8a7f-578a-41ef-97cb-da02d338ee7b.pdf
- **Alternate page/record:** https://indiacode.ecourtsindia.com/rules/exemption-to-private-companies-under-section-462-of-ca-2013-d43214e9/
- **Observed alternate-copy details:** PDF parser reports 5 pages. Extracted text identifies G.S.R. 583(E) and the 2015 principal notification; the English notification text is readable in the extraction. The separate corrigendum S.O. 2218(E), 13 July 2017, is indexed at https://indiacode.ecourtsindia.com/rules/exemption-to-private-company-corrigendum-abaa50b7/.
- **Qualification:** IndiaCode labels its English text as a reproduction and says the Department's own PDF remains authoritative. The alternate copy does not establish byte identity with the blocked MCA URL.
- **Disposition:** PENDING. No checksum, reviewer closure, legal verification, or publication authorization recorded.

### 2. Companies (Management and Administration) Amendment Rules, 2016 — Rule 17(2)

- **Original target:** https://upload.indiacode.nic.in/showfile?actid=AC_CEN_22_29_00008_201318_1517807327856&filename=Companies+%28Management+and+Administration%29+Amendment+Rules%2C+2016.pdf&type=rule
- **Recorded CI response:** Request timed out after 3 attempts; no response bytes/checksum.
- **Browser-viewer attempt:** Exact query URL was not accessible through the viewer.
- **Alternate copy inspected:** https://indiacode.ecourtsindia.com/doc/8a498eea-2d82-4d8d-bfa9-38100bba19b6.pdf
- **Alternate record:** https://indiacode.ecourtsindia.com/rules/companies-management-and-administration-amendment-rules-2016-a7b0de72/
- **Observed alternate-copy details:** PDF parser reports 17 pages. Extracted English text identifies G.S.R. 908(E), 23 September 2016, and the Rule 17(2) Explanation change from “on working day” to “on any day except national holiday”. English text is readable; the PDF includes bilingual Gazette material and some OCR noise in Hindi.
- **Qualification:** This is an IndiaCode-hosted reproduction, not proof of the failed original URL's bytes.
- **Disposition:** PENDING. No checksum, reviewer closure, legal verification, or publication authorization recorded.

### 3. Companies (Management and Administration) Amendment Rules, 2018 — G.S.R. 175(E)

- **Original target:** https://www.mca.gov.in/Ministry/pdf/CompaniesManagementAdministrationAdmendmentRules2018_19022018.pdf
- **Recorded CI response:** HTTP 403; HTML response (466 bytes); no PDF signature/checksum.
- **Browser-viewer attempt:** Exact URL was not accessible through the viewer.
- **Alternate copy inspected:** https://indiacode.ecourtsindia.com/doc/37e57954-19e6-41d7-a75b-a834b6b809f9.pdf
- **Alternate record:** https://indiacode.ecourtsindia.com/rules/companies-management-and-administration-amendment-rules-201-6121864a/
- **Observed alternate-copy details:** PDF parser reports 18 pages. Extracted text identifies G.S.R. 175(E), dated 16 February 2018, published 19 February 2018. The reproduced notification substitutes Forms MGT-6 and MGT-15; the English text is readable in extraction.
- **Qualification:** IndiaCode explicitly says the Department's own PDF remains authoritative; the alternate copy is not byte identity with the MCA URL.
- **Disposition:** PENDING. No checksum, reviewer closure, legal verification, or publication authorization recorded.

### 4. Companies (Management and Administration) Amendment Rules, 2022 — G.S.R. 279(E)

- **Original target:** https://egazette.gov.in/WriteReadData/2022/234911.pdf
- **Recorded CI response:** Connection/fetch failure after 3 attempts; no response bytes/checksum.
- **Browser-viewer attempt:** 502 Bad Gateway.
- **Alternate copy inspected:** https://indiacode.ecourtsindia.com/doc/ce75b9ae-fea0-46ca-9317-b4aa78b08d90.pdf
- **Alternate record:** https://indiacode.ecourtsindia.com/rules/companies-management-and-administration-amendment-rules-2022-fa72bcef/
- **Observed alternate-copy details:** PDF parser reports 3 pages. Extracted text identifies G.S.R. 279(E), dated 6 April 2022, and the insertion of Rule 14(3) regarding personal information not made available for inspection under section 94. Text is readable in extraction.
- **Qualification:** IndiaCode says the Department's own PDF remains authoritative; this is not byte identity with the failed eGazette target.
- **Disposition:** PENDING. No checksum, reviewer closure, legal verification, or publication authorization recorded.

### 5. Companies (Management and Administration) Amendment Rules, 2025 — G.S.R. 358(E)

- **Original target:** https://egazette.gov.in/WriteReadData/2025/263573.pdf
- **Recorded CI response:** Connection/fetch failure after 3 attempts; no response bytes/checksum.
- **Browser-viewer attempt:** Timeout.
- **Alternate record inspected:** https://gazettetracker.com/g/CG-DL-E-04062025-263573
- **Observed alternate-record details:** The page identifies Gazette ID CG-DL-E-04062025-263573, G.S.R. 358(E), notification date 30 May 2025, and commencement on 14 July 2025. Its indexed text says the instrument substitutes forms MGT-7, MGT-7A and MGT-15. The page's PDF download also failed to open (502), so no PDF page count or legibility finding can be made.
- **Qualification:** This is a third-party text record, not the original Gazette PDF. The source page links to the official eGazette URL, but that link was not retrievable in this pass.
- **Disposition:** PENDING. Text identity is corroborated only; PDF review cannot be closed without accessible bytes/document legibility evidence.

### 6. Companies Act, 2013 — official MCA Act text

- **Original target:** https://www.mca.gov.in/content/dam/mca/pdf/CompaniesAct2013.pdf
- **Recorded CI response:** HTTP 403; HTML response (432 bytes); no PDF signature/checksum.
- **Browser-viewer attempt:** HTTP 403.
- **Alternate official-hosted copy inspected:** https://nclat.nic.in/sites/default/files/2022-04/the-companies-act-2013.pdf
- **Official record page:** https://nclat.nic.in/acts-rules/companies-act-2013
- **Observed alternate-copy details:** PDF parser reports 294 pages. The extracted opening identifies “The Companies Act, 2013 (No. 18 of 2013)” and the enactment date, with readable statutory text; the PDF is hosted on the National Company Law Appellate Tribunal domain.
- **Qualification:** This supports identification of an official-hosted Act copy, but does not prove byte identity with the inaccessible MCA PDF.
- **Disposition:** PENDING. No checksum for the original MCA URL, reviewer closure, legal verification, or publication authorization recorded.

## What is verified by this triage

- Alternate copies/records were found for the six source identities.
- PDF page counts and extracted-text readability were observed for the accessible alternate PDFs: 17 pages (2016), 18 pages (2018), 3 pages (2022), 5 pages (combined 2015/2017 private-company exemptions), and 294 pages (Companies Act).
- The 2025 third-party record provides readable notification text, but its PDF could not be opened; page count and PDF legibility remain unknown.
- The original target URL responses remain unverified at the byte/signature/checksum level.

## Required next step

A reviewer with access to the original official URLs must open/download each original document (or document an approved authoritative replacement), record the actual reviewed file's checksum, page count, OCR/legibility, source identity, reviewer and date, and attach evidence. After that, re-run the PDF validator so its checksum-based preservation rule can determine whether a closure is retained. Keep all six queue entries pending until that evidence exists.

**Gate statement:** This triage is evidence discovery only. It does not close any of the six manual-review items, statutory verification, case-law verification, or publication gates.
