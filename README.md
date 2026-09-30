# Legal Content

Canonical, structured legal content repository for the CodePackr Law digital legal library.

## Purpose

This repository is the canonical content/data layer for the legal library. It is designed to hold structured, versioned, source-aware legal knowledge independently from the application code in `codepackr-law`.

## Content domains

- Topics
- Provisions and legislation metadata
- Judgments and judgment decoding
- Doctrines
- Comparisons
- Illustrations and visual learning assets
- Sources and citations
- BNS / BNSS / BSA and other legal mappings
- Collections and research metadata
- SEO metadata

## Content lifecycle

`draft → research → review → verified → approved → published → review-due → update → archived`

## Repository principles

- Stable canonical IDs for legal entities
- Source-aware and citation-preserving content
- Historical-law and current-law states kept distinct
- No artificial word-count limits
- No wholesale copying of copyrighted third-party material
- Machine-readable schemas and manifests
- Validation before publication
- Versioned content suitable for application consumption

## Application integration

The `codepackr-law` application consumes this repository through the planned Content Repository / Content Gateway architecture.

## Initial structure

```text
legal-content/
├── schemas/
├── manifests/
├── topics/
├── provisions/
├── judgments/
├── doctrines/
├── comparisons/
├── illustrations/
├── sources/
├── sanhita-mappings/
├── collections/
└── seo/
```
