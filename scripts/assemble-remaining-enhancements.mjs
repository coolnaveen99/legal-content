#!/usr/bin/env node
/**
 * Assemble in-progress enhancements for every scaffold topic from that topic's
 * own migrated overview, sections, examples, and hypotheticals.
 * Does not invent cases, citations, or statutory text. Does not set verified.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const topicRoot = path.join(ROOT, "topics");
const NOTE = "Assembled from this topic's migrated overview and sections. Not source-verified. No case law added.";

function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else if (entry.isFile() && entry.name.endsWith(".json")) yield p;
  }
}

function isScaffold(enhancement) {
  if (!enhancement) return true;
  const notes = enhancement.verification?.notes;
  const noteText = Array.isArray(notes) ? notes.join(" ") : String(notes || "");
  return (
    noteText.includes("No case law invented") ||
    noteText.includes("Existing migrated topic text only") ||
    noteText.includes("No additional legal rule was generated") ||
    String(enhancement.definition || "").includes("No additional legal rule was generated")
  );
}

function sectionText(section) {
  const heading = section.heading || section.title || "Point";
  const body = typeof section.body === "string"
    ? section.body
    : Array.isArray(section.content)
      ? section.content.map(String).join(" ")
      : "";
  return { heading, body: body.trim() };
}

let updated = 0;
for (const file of walk(topicRoot)) {
  const entity = JSON.parse(fs.readFileSync(file, "utf8"));
  const content = entity.content || {};
  if (!isScaffold(content.enhancement)) continue;
  const title = entity.title || path.basename(file, ".json");
  const overview = String(content.overview || "").trim();
  const sections = (content.sections || []).map(sectionText).filter((s) => s.body || s.heading);
  const examples = (content.examples || []).map((ex) => {
    if (typeof ex === "string") return ex;
    return [ex.title, ex.body || ex.description].filter(Boolean).join(": ");
  }).filter(Boolean);
  const hypos = (content.hypotheticals || []).map((h) => [h.question, h.analysis].filter(Boolean).join(" — ")).filter(Boolean);
  const pointers = (content.bareActPointers || []).map(String);
  const definition = overview || sections[0]?.body || `Catalog topic: ${title}.`;
  const ingredients = sections.slice(0, 6).map((s) => `${s.heading}: ${s.body}`.slice(0, 400));
  entity.content.enhancement = {
    version: "1",
    status: "in-progress",
    coverage: "assembled-from-migrated",
    learningObjectives: [
      `State the rule recorded for ${title}.`,
      "Separate the points already present in the topic sections.",
      "Do not add a case or section number that is not already in this note.",
    ],
    definition: definition.slice(0, 1500),
    legalPrinciple: (sections[0] ? `${sections[0].heading}. ${sections[0].body}` : definition).slice(0, 1500),
    statutoryFramework: pointers.length ? pointers.join("; ") : title,
    essentialIngredients: ingredients.length ? ingredients : [definition.slice(0, 400)],
    detailedExplanation: [overview, ...sections.map((s) => `${s.heading}\n${s.body}`)].filter(Boolean).join("\n\n").slice(0, 4000),
    examples: examples.length ? examples : ["No illustration was present on the migrated topic. None was invented."],
    problemApplication: hypos[0] || "No problem question was present on the migrated topic. None was invented.",
    keyTakeaways: [definition.slice(0, 400)],
    authoritativeSources: ["Migrated topic text in this file. Not independently checked against India Code in this batch."],
    verification: {
      lastVerifiedAt: null,
      verifiedBy: null,
      notes: [NOTE],
    },
  };
  entity.updatedAt = new Date().toISOString();
  fs.writeFileSync(file, JSON.stringify(entity, null, 2) + "\n");
  updated++;
}
console.log(`assembled ${updated} scaffold topics`);
