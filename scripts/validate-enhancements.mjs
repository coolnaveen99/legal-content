#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const topicRoot = path.join(ROOT, "topics");
const REQUIRED = [
  "learningObjectives","definition","legalPrinciple","statutoryFramework",
  "essentialIngredients","detailedExplanation","examples","distinctions",
  "caseLaw","problemApplication","examAnswerStructure","keyTakeaways",
  "authoritativeSources","verification"
];

const strict = process.argv.includes("--strict");
let checked=0, enhanced=0, errors=0, warnings=0;
const warningSamples = [];
const SAMPLE_LIMIT = 20;
function* walk(dir){
  for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,entry.name);
    if(entry.isDirectory()) yield* walk(p);
    else if(entry.isFile() && entry.name.endsWith(".json")) yield(p);
  }
}

if(fs.existsSync(topicRoot)){
  for(const file of walk(topicRoot)){
    checked++;
    let entity;
    try{ entity=JSON.parse(fs.readFileSync(file,"utf8")); }catch(e){ continue; }
    const e=entity?.content?.enhancement;
    if(!e) continue;
    enhanced++;
    const rel=path.relative(ROOT,file);
    // Older migrated topic records may contain an enhancement scaffold without its
    // own lifecycle status. If the canonical topic itself is still in review, infer
    // only the conservative source-check-required state for validation; never infer
    // verified/published. Keep this visible as a warning so a later migration can
    // persist the explicit status in the topic record.
    const inferredStatus = !e.status && entity.status === "review"
      ? "source_check_required"
      : e.status;
    if (!e.status && entity.status === "review") {
      warnings++;
      if (warningSamples.length < SAMPLE_LIMIT) {
        warningSamples.push(rel + " missing enhancement.status; conservatively treated as source_check_required");
      }
    }
    const finalStatus = inferredStatus === "verified" || inferredStatus === "published";
    for(const key of REQUIRED){
      if(!(key in e)) {
        const message = rel+" missing enhancement."+key;
        if(finalStatus || strict) {
          console.error("ERROR: "+message);
          errors++;
        } else {
          warnings++;
          if(warningSamples.length < SAMPLE_LIMIT) warningSamples.push(message);
        }
      }
    }
    if(inferredStatus && !["planned","in-progress","source_check_required","verification_in_progress","verified","published"].includes(inferredStatus)){
      console.error("ERROR: "+rel+" invalid enhancement status"); errors++;
    }
    if(!inferredStatus && entity.status !== "review"){
      console.error("ERROR: "+rel+" missing enhancement status outside review lifecycle"); errors++;
    }
    if(inferredStatus==="verified" || inferredStatus==="published"){
      if(!Array.isArray(e.authoritativeSources)||e.authoritativeSources.length===0){
        console.error("ERROR: "+rel+" verified/published enhancement has no authoritativeSources"); errors++;
      }
      if(!e.verification?.lastVerifiedAt){
        console.error("ERROR: "+rel+" verified/published enhancement has no lastVerifiedAt"); errors++;
      }
    }
    if(!entity.content?.legacyTopicId || !entity.content?.legacySubjectSlug){
      console.error("ERROR: "+rel+" lost legacy identity metadata"); errors++;
    }
  }
}
for (const sample of warningSamples) console.warn("WARN: "+sample);
if (warnings > warningSamples.length) {
  console.warn(`WARN: ${warnings - warningSamples.length} additional incomplete-field warnings omitted; use --strict to fail on all missing fields.`);
}
console.log(`Enhancement validation: topics=${checked}, enhanced=${enhanced}, warnings=${warnings}, errors=${errors}, mode=${strict ? "strict" : "lifecycle-aware"}`);
process.exit(errors?1:0);
