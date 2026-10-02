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
const migrated=[];
const topicRoot=path.join(ROOT,"topics");
function walkTopics(d){
  if(!fs.existsSync(d))return;
  for(const n of fs.readdirSync(d)){
    const p=path.join(d,n); const st=fs.statSync(p);
    if(st.isDirectory()) walkTopics(p);
    else if(n.endsWith(".json")){
      try{
        const data=JSON.parse(fs.readFileSync(p,"utf8"));
        if(Array.isArray(data.tags) && data.tags.includes("legacy-migration")){
          migrated.push({legacyPath:data.content?.legacySubjectSlug ? data.content.legacySubjectSlug+"/"+(data.content.legacyTopicId||path.basename(p,".json")) : path.relative(topicRoot,p).replaceAll(path.sep,"/"), canonicalPath:path.relative(ROOT,p).replaceAll(path.sep,"/")});
        }
      }catch{}
    }
  }
}
walkTopics(topicRoot);

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
  if(s==="cyber") return ["source:india:india-code-it-2000"];
  if(s==="family"){
    const id=legacyPath.toLowerCase();
    if(id.startsWith("family/hma-")) return ["source:india:india-code-hma-1955"];
    if(id.startsWith("family/hsa-")) return ["source:india:india-code-hsa-1956"];
    if(id.startsWith("family/hmga-")) return ["source:india:india-code-hmga-1956"];
    if(id.startsWith("family/hama-")) return ["source:india:india-code-hama-1956"];
    if(id.startsWith("family/sma-")) return ["source:india:india-code-sma-1954"];
    if(id.startsWith("family/dmma-")) return ["source:india:india-code-dmma-1939"];
    if(id.startsWith("family/mpl-shariat-")) return ["source:india:india-code-mpl-shariat-1937"];
    if(id.startsWith("family/mwa-")) return ["source:india:india-code-mwa-1874"];
    return [];
  }
  if(s==="labour") return ["source:india:india-code-industrial-disputes-1947","source:india:india-code-industrial-relations-code-2020"];
  if(s==="petition-formats"){
    const id=legacyPath.toLowerCase();
    if(id.endsWith("format-bail-application")) return ["source:india:india-code-bnss-2023"];
    if(id.endsWith("format-execution-petition")) return ["source:india:india-code-cpc-1908"];
    if(id.endsWith("format-fir")) return ["source:india:india-code-bnss-2023"];
    if(id.endsWith("format-legal-notice-138")) return ["source:india:india-code-ni-1881"];
    if(id.endsWith("format-pil")) return ["source:india:india-code-constitution","source:india:india-pil-practice"];
    if(id.endsWith("format-plaint")) return ["source:india:india-code-cpc-1908"];
    if(id.endsWith("format-writ-petition")) return ["source:india:india-code-constitution"];
    if(id.endsWith("format-written-statement")) return ["source:india:india-code-cpc-1908"];
    return [];
  }
  if(s==="pil") return ["source:india:india-pil-practice"];
  if(s==="taxation") return ["source:india:india-code-income-tax-1961"];
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
