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

let checked=0, enhanced=0, errors=0;
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
    for(const key of REQUIRED){
      if(!(key in e)) { console.error("ERROR: "+rel+" missing enhancement."+key); errors++; }
    }
    if(!["planned","in-progress","source_check_required","verification_in_progress","verified","published"].includes(e.status)){
      console.error("ERROR: "+rel+" invalid enhancement status"); errors++;
    }
    if(e.status==="verified" || e.status==="published"){
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
console.log(`Enhancement validation: topics=${checked}, enhanced=${enhanced}, errors=${errors}`);
process.exit(errors?1:0);
