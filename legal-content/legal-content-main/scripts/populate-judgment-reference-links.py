#!/usr/bin/env python3
import json
import re
import subprocess
from pathlib import Path
import duckdb

ROOT = Path(__file__).resolve().parents[1]
JUDGMENT_DIR = ROOT / "judgments" / "sc"
S3_BASE = "https://indian-supreme-court-judgments.s3.ap-south-1.amazonaws.com"

def norm(value):
    if not value:
        return ""
    return re.sub(r"[^a-z0-9]+", " ", str(value).lower()).strip()

def citation_key(value):
    return re.sub(r"[^a-z0-9]+", "", str(value or "").lower())

def load_pending():
    rows = []
    for path in sorted(JUDGMENT_DIR.glob("*.json")):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            continue
        if data.get("verificationStatus") == "pending":
            rows.append((path, data))
    return rows

def years_for(rows):
    years = set()
    for _, data in rows:
        citation = str(data.get("citation") or "")
        for match in re.findall(r"(?<!\d)(19\d{2}|20\d{2})(?!\d)", citation):
            year = int(match)
            if 1950 <= year <= 2025:
                years.add(year)
        decision = str(data.get("decisionDate") or data.get("date") or "")
        for match in re.findall(r"(?<!\d)(19\d{2}|20\d{2})(?!\d)", decision):
            year = int(match)
            if 1950 <= year <= 2025:
                years.add(year)
    return sorted(years)

def fetch_candidates(con, year):
    url = f"{S3_BASE}/metadata/parquet/year={year}/metadata.parquet"
    try:
        return con.execute("""
            SELECT title, petitioner, respondent, citation, case_id, cnr,
                   decision_date, court, path, year
            FROM read_parquet(?)
        """, [url]).fetchall()
    except Exception as exc:
        print(f"[WARN] metadata unavailable for {year}: {exc}")
        return []

def choose(data, candidates):
    wanted_citation = citation_key(data.get("citation"))
    wanted_title = norm(data.get("title") or data.get("name"))
    best = None
    best_score = 0
    for row in candidates:
        title, petitioner, respondent, citation, case_id, cnr, decision_date, court, path, year = row
        score = 0
        if wanted_citation and citation_key(citation) == wanted_citation:
            score += 100
        if wanted_title:
            candidate_title = norm(title)
            if candidate_title == wanted_title:
                score += 80
            elif wanted_title in candidate_title or candidate_title in wanted_title:
                score += 35
            else:
                wanted_tokens = set(wanted_title.split())
                cand_tokens = set(candidate_title.split())
                overlap = len(wanted_tokens & cand_tokens)
                if overlap >= 3:
                    score += min(30, overlap * 5)
        if score > best_score and path:
            best_score = score
            best = (row, score)
    return best

def add_source(data, row):
    title, petitioner, respondent, citation, case_id, cnr, decision_date, court, path, year = row
    path = str(path).lstrip("/")
    if path.startswith("data/pdf/"):
        url = f"{S3_BASE}/{path}"
    else:
        return False
    source = {
        "type": "open-corpus-judgment",
        "authority": "AWS Indian Supreme Court Judgments",
        "url": url,
        "label": "View Judgment PDF (AWS Open Data)",
        "provenance": "Downloaded from the eCourts judgment corpus and published through the AWS Open Data Registry.",
        "matchedBy": "citation-or-title",
        "matchedCitation": citation,
        "accessedAt": "2026-10-06"
    }
    sources = data.get("sources")
    if not isinstance(sources, list):
        sources = []
    # Replace an older bot-generated open-corpus entry for the same authority,
    # while preserving any official sources already present.
    sources = [
        s for s in sources
        if not (isinstance(s, dict) and s.get("authority") == source["authority"]
                and s.get("type") == source["type"])
    ]
    sources.append(source)
    data["sources"] = sources
    return True

def main():
    pending = load_pending()
    print(f"Pending records discovered: {len(pending)}")
    if not pending:
        return

    con = duckdb.connect()
    by_year = {}
    for year in years_for(pending):
        print(f"Loading AWS metadata for {year}...")
        by_year[year] = fetch_candidates(con, year)

    updated = 0
    unmatched = []
    for path, data in pending:
        candidates = []
        citation = str(data.get("citation") or "")
        years = [int(y) for y in re.findall(r"(?<!\d)(19\d{2}|20\d{2})(?!\d)", citation)
                 if 1950 <= int(y) <= 2025]
        for year in years:
            candidates.extend(by_year.get(year, []))
        # If citation has no usable year, search all loaded partitions.
        if not candidates:
            for values in by_year.values():
                candidates.extend(values)

        chosen = choose(data, candidates)
        if not chosen or chosen[1] < 80:
            unmatched.append(path.name)
            continue
        if add_source(data, chosen[0]):
            path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
            updated += 1

    print(f"Reference links populated: {updated}")
    print(f"Unmatched pending records: {len(unmatched)}")
    if not unmatched and updated == len(pending):
        workflow = ROOT / ".github" / "workflows" / "populate-judgment-reference-links.yml"
        if workflow.exists():
            workflow.unlink()
            print("All pending records matched; removing one-shot workflow.")
    if unmatched:
        Path(ROOT / "docs" / "judgment-verification").mkdir(parents=True, exist_ok=True)
        report = ROOT / "docs" / "judgment-verification" / "REFERENCE-LINK-QUEUE.md"
        report.write_text(
            "# Judgment Reference-Link Queue\n\n"
            f"- Pending records discovered: {len(pending)}\n"
            f"- Evidence-backed AWS PDF links populated: {updated}\n"
            f"- Unmatched records retained as pending: {len(unmatched)}\n\n"
            "Unmatched records are not assigned fabricated URLs. They remain pending until an inspectable source is found.\n",
            encoding="utf-8"
        )

if __name__ == "__main__":
    main()
