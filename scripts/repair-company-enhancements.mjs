#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const topicRoot = path.join(ROOT, "topics", "company");
const required = [
  "learningObjectives",
  "definition",
  "legalPrinciple",
  "statutoryFramework",
  "essentialIngredients",
  "detailedExplanation",
  "examples",
  "distinctions",
  "caseLaw",
  "problemApplication",
  "examAnswerStructure",
  "keyTakeaways",
  "authoritativeSources",
  "verification",
];

function asText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function sectionText(section) {
  const heading = asText(section?.heading || section?.title) || "Point";
  const body = asText(section?.body) || (Array.isArray(section?.content) ? section.content.map(String).join(" ") : "");
  return body ? `${heading}: ${body}` : heading;
}

function itemText(item) {
  if (typeof item === "string") return item.trim();
  return [item?.title, item?.body || item?.description, item?.analysis].filter(Boolean).join(": ").trim();
}

let updated = 0;
let fieldsAdded = 0;

for (const name of fs.readdirSync(topicRoot).filter((entry) => entry.endsWith(".json")).sort()) {
  const file = path.join(topicRoot, name);
  const entity = JSON.parse(fs.readFileSync(file, "utf8"));
  const content = entity.content || {};
  const enhancement = content.enhancement || {};
  const title = asText(entity.title) || name.replace(/\.json$/, "");
  const overview = asText(content.overview) || asText(content.glance) || title;
  const sections = Array.isArray(content.sections) ? content.sections.map(sectionText).filter(Boolean) : [];
  const examples = Array.isArray(content.examples) ? content.examples.map(itemText).filter(Boolean) : [];
  const hypotheticals = Array.isArray(content.hypotheticals) ? content.hypotheticals.map(itemText).filter(Boolean) : [];
  const pointers = Array.isArray(content.bareActPointers) ? content.bareActPointers.map(String).filter(Boolean) : [];
  const existingSources = Array.isArray(entity.sources) ? entity.sources.map(String).filter(Boolean) : [];
  const sourceNote = "Existing topic/source references only; independent legal verification remains required.";

  const fallback = {
    learningObjectives: [`State the rule recorded for ${title}.`, "Separate the recorded rule, conditions, exceptions and application."],
    definition: overview.slice(0, 1500),
    legalPrinciple: (sections[0] || overview).slice(0, 1500),
    statutoryFramework: pointers.length ? pointers.join("; ") : title,
    essentialIngredients: sections.length ? sections.slice(0, 6).map((value) => value.slice(0, 500)) : [overview.slice(0, 500)],
    detailedExplanation: [overview, ...sections].join("\n\n").slice(0, 4000),
    examples: examples.length ? examples : ["No topic-specific illustration was present; none was invented."],
    distinctions: Array.isArray(content.distinctions) ? content.distinctions : [],
    caseLaw: Array.isArray(enhancement.caseLaw) ? enhancement.caseLaw : (Array.isArray(content.relatedJudgments) ? content.relatedJudgments : []),
    problemApplication: hypotheticals[0] || "No topic-specific problem application was present; none was invented.",
    examAnswerStructure: "Identify the governing rule, ingredients, exceptions, forum or procedure, application to proved facts, authorities already recorded, and conclusion. Topic-specific legal verification remains required.",
    keyTakeaways: [overview.slice(0, 500)],
    authoritativeSources: existingSources.length ? existingSources : [sourceNote],
    verification: {
      lastVerifiedAt: null,
      verifiedBy: null,
      notes: [sourceNote],
    },
  };

  let changed = false;
  for (const key of required) {
    if (!(key in enhancement)) {
      enhancement[key] = fallback[key];
      fieldsAdded++;
      changed = true;
    }
  }

  if (changed) {
    content.enhancement = enhancement;
    entity.content = content;
    fs.writeFileSync(file, JSON.stringify(entity, null, 2) + "\n");
    updated++;
  }
}

console.log(`repaired ${updated} Company Law topics; added ${fieldsAdded} missing enhancement fields`);
