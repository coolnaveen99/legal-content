#!/usr/bin/env node
/**
 * Non-AI subject content bot.
 * Follows legal-content quality rules and codepackr-law limits:
 * do not invent a section, citation, holding, statutory illustration, or procedural step.
 * Preserve the topic file and legacy ids. Hypotheticals are labelled as hypotheticals.
 * BNS/BNSS/BSA are current from 1 July 2024; IPC/CrPC/IEA stay historical.
 *
 * A topic is done only when exampleQuality is concrete-v2.
 * The next topic starts after this topic is written. Pull-request creation is not a gate.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const TOPIC_ROOT = path.join(ROOT, "topics");
const ILLUSTRATION_ROOT = path.join(ROOT, "illustrations");
const STATE_ROOT = path.join(ROOT, ".subject-content-bot-state");
const SUBJECT = (process.env.SUBJECT_BOT_SUBJECT || "").trim();
const PER_RUN = Math.min(Math.max(Number(process.env.SUBJECT_BOT_TOPICS_PER_RUN || 1), 1), 20);
const DRY = process.env.SUBJECT_BOT_DRY_RUN === "1";
const QUALITY = "concrete-v3";
const CURRENT = new Set(["bns", "bnss", "bsa"]);
const HISTORICAL = new Set(["ipc", "crpc", "iea"]);
const BOT_TITLES = [
  /^Educational example - applies - /,
  /^Educational example - does not apply - /,
  /^Example 1 - Rule applies$/,
  /^Example 2 - Boundary defect$/,
];

if (!SUBJECT) {
  console.error("SUBJECT_BOT_SUBJECT is required");
  process.exit(1);
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p, out);
    else if (entry.name.endsWith(".json")) out.push(p);
  }
  return out;
}
function slugPart(value) {
  return String(value || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 80);
}
function hash(value) { return crypto.createHash("sha256").update(value).digest("hex"); }
function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}
function clip(value, max = 420) {
  const text = clean(value);
  return text.length > max ? text.slice(0, max - 1).trim() + "..." : text;
}
function useful(value, title) {
  const text = clean(value);
  if (text.length < 40) return "";
  if (text.toLowerCase() === clean(title).toLowerCase()) return "";
  if (text.startsWith(clean(title)) && text.length < clean(title).length + 80) return "";
  return text;
}
function statePath() { return path.join(STATE_ROOT, slugPart(SUBJECT) + ".json"); }
function loadState() {
  try { return JSON.parse(fs.readFileSync(statePath(), "utf8")); }
  catch { return { subject: SUBJECT, completedTopics: [], updatedAt: null }; }
}
function saveState(state) {
  fs.mkdirSync(STATE_ROOT, { recursive: true });
  state.updatedAt = new Date().toISOString();
  fs.writeFileSync(statePath(), JSON.stringify(state, null, 2) + "\n");
}
function lawNote() {
  if (CURRENT.has(SUBJECT)) return "Current criminal code from 1 July 2024. Do not treat the old IPC, CrPC, or IEA number as the same section.";
  if (HISTORICAL.has(SUBJECT)) return "Historical code. Pending matters may continue under the old code. Do not state that this number equals a BNS, BNSS, or BSA number.";
  return "Use only the law already recorded in this topic file.";
}
function isBotExample(entry) {
  const title = entry?.title || "";
  return BOT_TITLES.some((pattern) => pattern.test(title)) || /Educational example, not an official/.test(entry?.body || "");
}
function listText(value) {
  if (!value) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(listText);
  if (typeof value === "object") return [value.body, value.text, value.name, value.heading].filter(Boolean);
  return [];
}

const topics = [];
for (const file of walk(TOPIC_ROOT)) {
  let entity;
  try { entity = JSON.parse(fs.readFileSync(file, "utf8")); } catch { continue; }
  if (entity.entityType !== "topic") continue;
  if (entity.content?.legacySubjectSlug !== SUBJECT) continue;
  topics.push({ file, entity });
}
topics.sort((a, b) => a.entity.id.localeCompare(b.entity.id));
const state = loadState();
const queue = topics.filter((item) => item.entity.content?.enhancement?.exampleQuality !== QUALITY || !String(item.entity.content?.examples?.find((entry) => entry?.title?.startsWith("Teaching pattern - recorded ingredients present"))?.body || "").includes("Educational hypothetical, not an official statutory illustration"));
const pending = queue.slice(0, PER_RUN);
console.log(JSON.stringify({
  subject: SUBJECT,
  topicsFound: topics.length,
  completed: topics.length - queue.length,
  pendingSelected: pending.map((item) => item.entity.id),
  remaining: Math.max(queue.length - pending.length, 0),
  dryRun: DRY,
  quality: QUALITY,
}));
if (DRY || pending.length === 0) process.exit(0);

const now = new Date().toISOString();
for (const item of pending) {
  const entity = item.entity;
  const content = entity.content || {};
  if (!content.legacyTopicId || !content.legacySubjectSlug) {
    console.error("Refusing to edit topic without legacy identity: " + entity.id);
    continue;
  }
  const title = entity.title || entity.id;
  const cases = Array.isArray(content.cases) ? content.cases : [];
  const recordedFact = useful(cases.map((entry) => entry?.facts).find(Boolean), title);
  const recordedIssue = useful(cases.map((entry) => entry?.issue).find(Boolean), title);
  const recordedCase = cases.find((entry) => entry?.name && entry?.citation);
  const sectionText = (content.sections || []).map((section) => useful(section?.body, title)).find(Boolean) || "";
  const revision = listText(content.revisionPoints).map((entry) => useful(entry, title)).find(Boolean) || "";
  const ingredients = [sectionText, revision, useful(content.enhancement?.statutoryFramework, title), useful(content.bareActPointers, title)].filter(Boolean);
  const ingredient = clip(ingredients[0] || "the condition already recorded for this topic", 280);
  const factLine = recordedFact
    ? `Facts already recorded in this topic file: ${clip(recordedFact, 360)}`
    : "This file does not record a separate fact pattern. The hypothetical uses only the ingredients already written in this topic file.";
  const authorityLine = recordedCase
    ? `Authority already recorded in this file, not a new citation: ${recordedCase.name}${recordedCase.citation ? " " + recordedCase.citation : ""}. Use it only as already written here.`
    : "No authority is added. This file does not get a new case name or citation.";
  const issueLine = recordedIssue ? `Issue already recorded: ${clip(recordedIssue, 220)}` : `Issue confined to the recorded point for ${title}.`;
  const applies = {
    title: `Teaching pattern - recorded ingredients present - ${title}`,
    body: `Educational hypothetical, not an official statutory illustration and not a new decided case. ${lawNote()} ${factLine} ${issueLine} Recorded ingredient used: ${ingredient} Application: a person affected by ${title} places only those recorded facts before the forum already named in this file. Match each recorded ingredient. Where every recorded ingredient is present, the recorded rule applies and the result stops at that rule. ${authorityLine}`,
    kind: "hypothetical",
    inventedCase: false,
  };
  const requiredBits = ["Educational hypothetical, not an official statutory illustration and not a new decided case.", "Facts already recorded", "Issue already recorded", "Recorded ingredient used:", "Application: a person affected by", "Authority already recorded"];
  if (!requiredBits.every((bit) => applies.body.includes(bit))) {
    console.error("Example shape rejected for " + entity.id);
    continue;
  }
  const fails = {
    title: `Teaching pattern - recorded ingredient missing - ${title}`,
    body: `Educational hypothetical, not an official statutory illustration and not a new decided case. ${lawNote()} The same person asks for the result of ${title}, but one ingredient already recorded in this file is absent: ${ingredient} The recorded rule does not apply. Do not invent a holding, section, citation, or procedural step to fill that gap.`,
    kind: "hypothetical",
    inventedCase: false,
  };
  if (applies.body.length < 280 || fails.body.length < 180) {
    console.error("Refusing thin example for " + entity.id);
    continue;
  }
  content.examples = (Array.isArray(content.examples) ? content.examples : []).filter((entry) => entry && !isBotExample(entry));
  for (const example of [applies, fails]) {
    if (!content.examples.some((entry) => entry?.title === example.title)) content.examples.push(example);
  }
  content.hypotheticals = Array.isArray(content.hypotheticals) ? content.hypotheticals : [];
  const hypo = {
    question: `A person relies on ${title}. Which recorded ingredient decides whether the rule applies?`,
    analysis: `1. State only the rule already in this topic file. 2. Use this recorded ingredient: ${ingredient} 3. ${factLine} 4. Apply the rule if every recorded ingredient is present; refuse it if the recorded ingredient is missing. 5. ${authorityLine} 6. ${lawNote()}`,
  };
  content.hypotheticals = content.hypotheticals.filter((entry) => entry && !/Whether the recorded point for /.test(entry.question || ""));
  if (!content.hypotheticals.some((entry) => entry?.question === hypo.question)) content.hypotheticals.push(hypo);
  const topicSlug = slugPart(entity.id.split(":").slice(2).join("-") || path.basename(item.file, ".json"));
  const illustrationId = `illustration:india:${slugPart(SUBJECT)}-${topicSlug}-example`;
  const illustrationFile = path.join(ILLUSTRATION_ROOT, slugPart(SUBJECT), `${topicSlug}-example.json`);
  content.illustrations = Array.isArray(content.illustrations) ? content.illustrations : [];
  if (!content.illustrations.includes(illustrationId)) content.illustrations.push(illustrationId);
  const enhancement = content.enhancement && typeof content.enhancement === "object" ? content.enhancement : {};
  enhancement.examples = (Array.isArray(enhancement.examples) ? enhancement.examples : []).filter((entry) => entry && !isBotExample(entry));
  for (const example of [applies, fails]) {
    if (!enhancement.examples.some((entry) => entry?.title === example.title)) enhancement.examples.push(example);
  }
  enhancement.status = "in-progress";
  enhancement.lastBotRunAt = now;
  enhancement.bot = `subject-content-bot:${SUBJECT}`;
  enhancement.exampleQuality = QUALITY;
  enhancement.rules = ["legal-content: no invented authority", "codepackr-law: current law labelled", "hypothetical only", "facts taken from this topic file"];
  enhancement.sourceFingerprint = hash(JSON.stringify({ id: entity.id, overview: content.overview || "", fact: recordedFact || "" }));
  const required = {
    learningObjectives: [`Apply only the ingredient already recorded for ${title}.`],
    definition: clip(useful(content.overview, title) || ingredient, 500),
    legalPrinciple: clip(ingredient, 500),
    statutoryFramework: ingredient,
    essentialIngredients: [ingredient],
    detailedExplanation: clip([factLine, ingredient, authorityLine].join(" "), 700),
    distinctions: content.distinctions || [],
    caseLaw: cases,
    problemApplication: applies.body,
    examAnswerStructure: [
      "10-mark study skeleton: recorded rule, recorded facts, application, conclusion. No new citation.",
      "16-mark study skeleton: recorded rule, recorded facts, inference, missing-ingredient counterargument, limit of this file.",
      lawNote(),
    ],
    keyTakeaways: [ingredient, lawNote()],
    authoritativeSources: Array.isArray(entity.sources) ? entity.sources : [],
    verification: { note: "Draft from existing topic text. Not verified. Not a court holding." },
  };
  for (const [key, value] of Object.entries(required)) if (!(key in enhancement) || enhancement[key] == null) enhancement[key] = value;
  content.enhancement = enhancement;
  entity.content = content;
  entity.updatedAt = now;
  fs.writeFileSync(item.file, JSON.stringify(entity, null, 2) + "\n");
  const sourceIds = (Array.isArray(entity.sources) ? entity.sources : []).filter((id) => typeof id === "string" && id.startsWith("source:"));
  const illustration = {
    schemaVersion: "v1",
    entityType: "illustration",
    id: illustrationId,
    version: 1,
    status: "review",
    title: `${title} - teaching pattern`,
    jurisdiction: entity.jurisdiction || "India",
    content: {
      type: "example",
      body: applies.body,
      parentId: entity.id,
      officialStatutoryIllustration: false,
      subject: SUBJECT,
    },
    sources: sourceIds,
    updatedAt: now,
  };
  fs.mkdirSync(path.dirname(illustrationFile), { recursive: true });
  fs.writeFileSync(illustrationFile, JSON.stringify(illustration, null, 2) + "\n");
  if (!state.completedTopics.includes(entity.id)) state.completedTopics.push(entity.id);
}
saveState(state);
console.log("Updated topics:", pending.map((item) => item.entity.id).join(", "));
