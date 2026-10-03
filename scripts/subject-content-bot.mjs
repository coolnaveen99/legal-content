#!/usr/bin/env node
/**
 * Non-AI subject content bot.
 * One process per subject. Adds educational examples and illustration entities
 * using only text already stored on the topic. Does not call a model and does
 * not invent statutes, cases, holdings, citations, dates, or URLs.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const TOPIC_ROOT = path.join(ROOT, "topics");
const ILLUSTRATION_ROOT = path.join(ROOT, "illustrations");
const STATE_ROOT = path.join(ROOT, ".subject-content-bot-state");
const SUBJECT = (process.env.SUBJECT_BOT_SUBJECT || "").trim();
const PER_RUN = Math.min(Math.max(Number(process.env.SUBJECT_BOT_TOPICS_PER_RUN || 3), 1), 20);
const DRY = process.env.SUBJECT_BOT_DRY_RUN === "1";

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
function clip(value, max = 700) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  return text.length > max ? text.slice(0, max - 1).trim() + "..." : text;
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
const done = new Set(state.completedTopics || []);
const pending = topics.filter((item) => !done.has(item.entity.id)).slice(0, PER_RUN);
console.log(JSON.stringify({ subject: SUBJECT, topicsFound: topics.length, completed: done.size, pendingSelected: pending.map((item) => item.entity.id), dryRun: DRY }));
if (DRY || pending.length === 0) process.exit(0);

const now = new Date().toISOString();
for (const item of pending) {
  const entity = item.entity;
  const content = entity.content || {};
  const title = entity.title || entity.id;
  const overview = clip(content.overview || content.enhancement?.definition || title, 500);
  const framework = clip(content.enhancement?.statutoryFramework || content.bareActPointers || title, 240);
  const topicSlug = slugPart(entity.id.split(":").slice(2).join("-") || path.basename(item.file, ".json"));
  const illustrationId = `illustration:india:${slugPart(SUBJECT)}-${topicSlug}-example`;
  const illustrationFile = path.join(ILLUSTRATION_ROOT, slugPart(SUBJECT), `${topicSlug}-example.json`);
  const example = { title: `Educational example - ${title}`, body: `Educational example, not an official statutory illustration and not a decided case. Using only the repository text for ${title}: ${overview} Working point recorded in this file: ${framework} Apply that recorded point to the facts of the problem, then state the limit of what this topic file actually says.`, kind: "hypothetical", inventedCase: false };
  const contrast = { title: `Educational limit - ${title}`, body: `Educational example, not an official statutory illustration and not a decided case. If the facts do not meet the condition already recorded for ${title} (${framework}), the point in this topic does not apply. Do not add a case name, holding, or citation that is not already in this topic file.`, kind: "hypothetical", inventedCase: false };
  content.examples = Array.isArray(content.examples) ? content.examples : [];
  if (!content.examples.some((entry) => entry && entry.title === example.title)) content.examples.push(example);
  if (!content.examples.some((entry) => entry && entry.title === contrast.title)) content.examples.push(contrast);
  content.illustrations = Array.isArray(content.illustrations) ? content.illustrations : [];
  if (!content.illustrations.includes(illustrationId)) content.illustrations.push(illustrationId);
  const enhancement = content.enhancement && typeof content.enhancement === "object" ? content.enhancement : {};
  enhancement.examples = Array.isArray(enhancement.examples) ? enhancement.examples : [];
  if (!enhancement.examples.some((entry) => entry && entry.title === example.title)) enhancement.examples.push(example);
  if (!enhancement.examples.some((entry) => entry && entry.title === contrast.title)) enhancement.examples.push(contrast);
  enhancement.status = enhancement.status && enhancement.status !== "planned" ? enhancement.status : "in-progress";
  if (enhancement.status === "verified" || enhancement.status === "published") enhancement.status = "in-progress";
  enhancement.lastBotRunAt = now;
  enhancement.bot = `subject-content-bot:${SUBJECT}`;
  enhancement.sourceFingerprint = hash(JSON.stringify({ id: entity.id, overview: content.overview || "" }));
  const required = { learningObjectives: [`State the point already recorded for ${title}.`], definition: overview, legalPrinciple: overview, statutoryFramework: framework, essentialIngredients: [framework], detailedExplanation: overview, distinctions: content.distinctions || [], caseLaw: Array.isArray(content.cases) ? content.cases : [], problemApplication: example.body, examAnswerStructure: ["State the recorded rule.", "Apply it to the given facts.", "Do not add an authority that is not already in the topic file."], keyTakeaways: [framework], authoritativeSources: Array.isArray(entity.sources) ? entity.sources : [], verification: { note: "Bot output is draft material from existing topic text. Not verified." } };
  for (const [key, value] of Object.entries(required)) if (!(key in enhancement) || enhancement[key] == null) enhancement[key] = value;
  content.enhancement = enhancement;
  entity.content = content;
  entity.updatedAt = now;
  fs.writeFileSync(item.file, JSON.stringify(entity, null, 2) + "\n");
  const sourceIds = (Array.isArray(entity.sources) ? entity.sources : []).filter((id) => typeof id === "string" && id.startsWith("source:"));
  const illustration = { schemaVersion: "v1", entityType: "illustration", id: illustrationId, version: 1, status: "review", title: `${title} - educational example`, jurisdiction: entity.jurisdiction || "India", content: { type: "example", body: example.body, parentId: entity.id, officialStatutoryIllustration: false, subject: SUBJECT }, sources: sourceIds, updatedAt: now };
  fs.mkdirSync(path.dirname(illustrationFile), { recursive: true });
  fs.writeFileSync(illustrationFile, JSON.stringify(illustration, null, 2) + "\n");
  state.completedTopics.push(entity.id);
}
saveState(state);
console.log("Updated topics:", pending.map((item) => item.entity.id).join(", "));
