#!/usr/bin/env node
/**
 * Phase 3 — provenance mapping audit.
 * Maps migrated topics to existing canonical source entities where the mapping
 * is deterministic. It never changes a topic to verified/published and never
 * invents a source for a subject that lacks one.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const migration=JSON.parse(fs.readFileSync(path.join(ROOT,"manifests/legacy-topic-migration.json"),"utf8"));
const migrated=migration.records.filter(r=>r.disposition==="MIGRATED_REVIEW");

const sourceFiles=[];
function walk(d){if(!fs.existsSync(d))return;for(const n of fs.readdirSync(d)){const p=path.join(d,n);const s=fs.statSync(p);if(s.isDirectory())walk(p);else if(n.endsWith(".json"))sourceFiles.push(p);}}
walk(path.join(ROOT,"sources"));
const sources=[];
for(const f of sourceFiles){try{const d=JSON.parse(fs.readFileSync(f,"utf8"));sources.push({id:d.id,path:path.relative(ROOT,f).replaceAll(path.sep,"/"),title:d.title,content:d.content||{}})}catch{}}
const byId=new Map(sources.map(s=>[s.id,s]));

function candidates(subject, legacyPath){
  const s=subject.toLowerCase();
  if(s==="bns") return ["source:india:india-code-bns-2023"];
  if(s==="constitution") return ["source:india:india-code-constitution","source:india:india-fundamental-rights-practice"];
  if(s==="cyber") return [];
  if(s==="family"){
    const id=legacyPath.toLowerCase();
    if(id.startsWith("family/hma-")) return ["source:india:india-code-hma-1955"];
    return [];
  }
  if(s==="labour") return [];
  if(s==="petition-formats") return [];
  if(s==="pil") return ["source:india:india-pil-practice"];
  if(s==="taxation") return [];
  if(s==="torts") return ["source:india:india-common-law-torts"];
  return [];
}

const rows=migrated.map(r=>{
  const subject=r.legacyPath.split("/")[0];
  const ids=candidates(subject,r.legacyPath).filter(id=>byId.has(id));
  return {legacyPath:r.legacyPath,canonicalPath:r.canonicalPath,subject,candidateSourceIds:ids,candidateSourcePaths:ids.map(id=>byId.get(id).path),candidateStatuses:ids.map(id=>byId.get(id).status),needsSourceRecord:ids.length===0};
});

const groups={};
for(const x of rows){groups[x.subject]??={topics:0,mapped:0,unmapped:0};groups[x.subject].topics++;x.needsSourceRecord?groups[x.subject].unmapped++:groups[x.subject].mapped++;}
const report={
 schemaVersion:"v1",
 phase:"Phase 3 — Source & legal provenance verification",
 generatedAt:new Date().toISOString(),
 scope:{migratedTopics:rows.length,canonicalSourceEntities:sources.length},
 policy:[
  "A source is attached only when the statute/subject mapping is deterministic.",
  "A source record does not by itself prove that every proposition in a topic is current or correct.",
  "Historical statutes must be represented as historical where applicable.",
  "Topics without an appropriate canonical source remain review-required.",
  "No topic is promoted to verified/published by this audit."
 ],
 summary:{mappedTopics:rows.filter(x=>!x.needsSourceRecord).length,sourceGapTopics:rows.filter(x=>x.needsSourceRecord).length},
 bySubject:groups,
 topics:rows
};
const out=path.join(ROOT,"manifests","phase-3-provenance-audit.json");
fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({summary:report.summary,bySubject:groups},null,2));
