#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = process.cwd();
const TOPIC_ROOT = path.join(ROOT, "topics");
const SUBJECT = process.env.ENHANCEMENT_SUBJECT || "";
const BRANCH = process.env.ENHANCEMENT_BRANCH || "";
const MAX_TOPICS = Math.max(1, Number(process.env.ENHANCEMENT_TOPICS_PER_RUN || 1));
const DRY = process.env.ENHANCEMENT_DRY_RUN === "1";
const STATE_DIR = path.join(ROOT, ".content-enhancement-state");

function* walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const p = path.join(dir,e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile() && e.name.endsWith(".json")) yield p;
  }
}
function readJson(file) { return JSON.parse(fs.readFileSync(file,"utf8")); }
function slug(v) { return String(v||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,""); }
function stateFile(subject) { return path.join(STATE_DIR, slug(subject)+".json"); }
function loadState(subject) {
  try { return readJson(stateFile(subject)); }
  catch { return {subject, completedTopics:[], updatedAt:null}; }
}
function saveState(s) {
  fs.mkdirSync(STATE_DIR,{recursive:true});
  s.updatedAt=new Date().toISOString();
  fs.writeFileSync(stateFile(s.subject),JSON.stringify(s,null,2)+"\n");
}
function hash(v) { return crypto.createHash("sha256").update(v).digest("hex"); }

const topics = [];
for (const file of walk(TOPIC_ROOT)) {
  let e;
  try { e=readJson(file); } catch { continue; }
  if (e?.entityType !== "topic" || !e?.content?.legacyTopicId) continue;
  const subject = e.content.legacySubjectSlug || "";
  if (SUBJECT && subject !== SUBJECT) continue;
  topics.push({file, id:e.id, subject, title:e.title || e.content?.title || path.basename(file), entity:e});
}
topics.sort((a,b)=>a.id.localeCompare(b.id));

if (!SUBJECT) throw new Error("ENHANCEMENT_SUBJECT is required");
if (!topics.length) throw new Error("No topics found for subject: "+SUBJECT);

const state=loadState(SUBJECT);
const pending=topics.filter(t=>!state.completedTopics.includes(t.id)).slice(0,MAX_TOPICS);

console.log(JSON.stringify({subject:SUBJECT,branch:BRANCH,topicsFound:topics.length,completed:state.completedTopics.length,pendingSelected:pending.map(x=>x.id),dryRun:DRY},null,2));

if (DRY || !pending.length) process.exit(0);

for (const item of pending) {
  const e=item.entity;
  const existing=e.content?.enhancement || {};
  /*
   * The provider is intentionally external/pluggable. It must return JSON containing:
   * learningObjectives, definition, legalPrinciple, statutoryFramework, essentialIngredients,
   * detailedExplanation, examples, distinctions, caseLaw, problemApplication,
   * examAnswerStructure, keyTakeaways, authoritativeSources, verification.
   *
   * Until an approved provider is configured, we do not fabricate legal analysis.
   */
  if (!process.env.ENHANCEMENT_PROVIDER_URL || !process.env.ENHANCEMENT_PROVIDER_TOKEN) {
    throw new Error("No enhancement provider configured. Set ENHANCEMENT_PROVIDER_URL and ENHANCEMENT_PROVIDER_TOKEN; no legal content will be fabricated.");
  }

  const payload={
    subject:SUBJECT,
    topic:{id:item.id,title:item.title,entity:e},
    existingEnhancement:existing,
    instruction:"Enhance only from supplied repository content and authoritative sources. Preserve legacy identity. Return structured enhancement JSON and practical legal illustrations. Do not invent statutes, cases, holdings, citations, dates, or legal propositions. Mark uncertain items for review."
  };
  const res=await fetch(process.env.ENHANCEMENT_PROVIDER_URL,{method:"POST",headers:{"content-type":"application/json","authorization":`Bearer ${process.env.ENHANCEMENT_PROVIDER_TOKEN}`},body:JSON.stringify(payload)});
  if(!res.ok) throw new Error("Enhancement provider failed: "+res.status+" "+res.statusText);
  const result=await res.json();
  const enhancement=result.enhancement || result;
  const required=["learningObjectives","definition","legalPrinciple","statutoryFramework","essentialIngredients","detailedExplanation","examples","distinctions","caseLaw","problemApplication","examAnswerStructure","keyTakeaways","authoritativeSources","verification"];
  for(const k of required) if(!(k in enhancement)) throw new Error(item.id+" provider response missing "+k);

  e.content=e.content||{};
  e.content.enhancement={
    ...existing,
    ...enhancement,
    status: enhancement.status || "in-progress",
    lastBotRunAt:new Date().toISOString(),
    sourceFingerprint:hash(JSON.stringify({id:e.id,content:e.content,enhancement:undefined}))
  };
  fs.writeFileSync(item.file,JSON.stringify(e,null,2)+"\n");
  state.completedTopics.push(item.id);
}

saveState(state);
console.log("Enhanced topics:",pending.map(x=>x.id).join(", "));
