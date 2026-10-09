#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const file = process.argv[2];
if (!file) {
  console.error("Usage: node scripts/resolve-judgment-reference.mjs <judgment-json>");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(file, "utf8"));
const title = String(data.title ?? data.name ?? "").trim();
const citation = String(data.citation ?? "").trim();
const query = [title, citation].filter(Boolean).join(" — ");

console.log(JSON.stringify({
  judgment: {
    title,
    citation,
    verificationStatus: data.verificationStatus ?? "pending"
  },
  references: [
    {
      type: "official-search",
      authority: "Supreme Court / eCourts Judgments",
      url: "https://judgments.ecourts.gov.in/pdfsearch/index.php",
      label: "Search official judgment portal",
      query
    },
    {
      type: "open-corpus",
      authority: "Indian Supreme Court Judgments Open Data",
      url: "https://registry.opendata.aws/indian-supreme-court-judgments/",
      label: "Open Supreme Court judgment corpus",
      query
    },
    {
      type: "open-india-law",
      authority: "Open India Law",
      url: "https://github.com/Vaquill-AI/open-india-law",
      label: "Open structured Indian case-law corpus",
      query
    }
  ]
}, null, 2));
