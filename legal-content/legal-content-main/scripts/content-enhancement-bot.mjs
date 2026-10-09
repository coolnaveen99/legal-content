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
const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const OPENAI_MODEL = process.env.OPENAI_MODEL || "gpt-6-luna";
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
  if (!OPENAI_API_KEY) {
    throw new Error("OPENAI_API_KEY is not configured. Add it as a GitHub Actions secret; no legal content will be fabricated.");
  }

  const sourceContent = structuredClone(e.content || {});
  delete sourceContent.enhancement;
  const payload = {
    subject: SUBJECT,
    topic: { id: item.id, title: item.title, content: sourceContent },
    existingEnhancement: existing,
    instruction: "Enhance this legal topic using the supplied repository content and authoritative sources. Preserve legacy identity. Research current and historical Indian law only when supported by authoritative sources. Do not invent statutes, sections, cases, holdings, citations, dates, legal propositions, or source URLs. Distinguish black-letter law, explanation, hypothetical illustrations, and case-law summaries. If a point cannot be verified, mark it for review rather than guessing. Return only the requested JSON structure.",
  };

  const schema = {
    type: "object",
    additionalProperties: true,
    required: ["learningObjectives","definition","legalPrinciple","statutoryFramework","essentialIngredients","detailedExplanation","examples","distinctions","caseLaw","problemApplication","examAnswerStructure","keyTakeaways","authoritativeSources","verification"],
    properties: {
      learningObjectives: {type:"array",items:{type:"string"}},
      definition: {type:"string"},
      legalPrinciple: {type:"string"},
      statutoryFramework: {type:"array",items:{type:"object",additionalProperties:true}},
      essentialIngredients: {type:"array",items:{type:"string"}},
      detailedExplanation: {type:"string"},
      examples: {type:"array",items:{type:"object",additionalProperties:true}},
      distinctions: {type:"array",items:{type:"object",additionalProperties:true}},
      caseLaw: {type:"array",items:{type:"object",additionalProperties:true}},
      problemApplication: {type:"array",items:{type:"object",additionalProperties:true}},
      examAnswerStructure: {type:"array",items:{type:"string"}},
      keyTakeaways: {type:"array",items:{type:"string"}},
      authoritativeSources: {type:"array",items:{type:"object",additionalProperties:true}},
      verification: {type:"object",additionalProperties:true},
      illustrations: {type:"array",items:{type:"object",additionalProperties:true}},
      status: {type:"string",enum:["planned","in-progress","verified","published"]}
    }
  };

  const system = "You are the legal-content enhancement engine for an Indian legal education repository. Accuracy is more important than completeness. Never fabricate authority. Prefer official Indian legislation, Supreme Court/High Court judgments, government publications, and other authoritative primary sources. Treat AI output as draft material until repository verification. Use practical hypothetical illustrations, not fabricated cases."; 
  const request = {
    model: OPENAI_MODEL,
    input: [
      {role:"system",content:system},
      {role:"user",content:JSON.stringify(payload)}
    ],
    tools: [{type:"web_search_preview"}],
    text: {format: {type:"json_schema", name:"legal_topic_enhancement", strict:true, schema}}
  };

  let result;
  for (let attempt=1; attempt<=3; attempt++) {
    const res=await fetch("https://api.openai.com/v1/responses",{method:"POST",headers:{"content-type":"application/json","authorization":`Bearer ${OPENAI_API_KEY}`},body:JSON.stringify(request)});
    const body=await res.text();
    if(res.ok){
      result=JSON.parse(body);
      break;
    }
    if(attempt===3) throw new Error("OpenAI Responses API failed: "+res.status+" "+body.slice(0,1000));
    await new Promise(r=>setTimeout(r,attempt*2000));
  }
  const outputText = result?.output_text;
  if (!outputText) throw new Error(item.id+" OpenAI response contained no output_text");
  let enhancement;
  try { enhancement=JSON.parse(outputText); }
  catch { throw new Error(item.id+" OpenAI returned non-JSON structured output"); }
  const required=["learningObjectives","definition","legalPrinciple","statutoryFramework","essentialIngredients","detailedExplanation","examples","distinctions","caseLaw","problemApplication","examAnswerStructure","keyTakeaways","authoritativeSources","verification"];
  for(const k of required) if(!(k in enhancement)) throw new Error(item.id+" OpenAI response missing "+k);

  e.content=e.content||{};
  e.content.enhancement={
    ...existing,
    ...enhancement,
    status: enhancement.status || "in-progress",
    lastBotRunAt:new Date().toISOString(),
    sourceFingerprint:hash(JSON.stringify({id:e.id,content:sourceContent}))
  };
  fs.writeFileSync(item.file,JSON.stringify(e,null,2)+"\n");
  state.completedTopics.push(item.id);
}

saveState(state);
console.log("Enhanced topics:",pending.map(x=>x.id).join(", "));
