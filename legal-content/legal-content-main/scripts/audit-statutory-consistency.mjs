#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd(), topicRoot=path.join(ROOT,"topics"), rows=[];
function walk(d){
  if(!fs.existsSync(d)) return;
  for(const n of fs.readdirSync(d)){
    const p=path.join(d,n), s=fs.statSync(p);
    if(s.isDirectory()) walk(p);
    else if(n.endsWith(".json")){
      try{
        const data=JSON.parse(fs.readFileSync(p,"utf8"));
        if(data.entityType==="topic" && Array.isArray(data.tags) && data.tags.includes("legacy-migration"))
          rows.push({data,path:path.relative(ROOT,p).replaceAll(path.sep,"/")});
      }catch{}
    }
  }
}
walk(topicRoot);
const findings=[];
function add(r,type,severity,message,evidence=""){
  findings.push({path:r.path,id:r.data.id,subject:r.path.split("/")[1]||"",type,severity,message,evidence});
}
const sourceBySubject={
 bns:"source:india:india-code-bns-2023",bnss:"source:india:india-code-bnss-2023",
 bsa:"source:india:india-code-bsa-2023",constitution:"source:india:india-code-constitution",
 contract:"source:india:india-code-contract-1872",cpc:"source:india:india-code-cpc-1908",
 hma:"source:india:india-code-hma-1955",ni:"source:india:india-code-ni-1881",
 registration:"source:india:india-code-registration-1908",sra:"source:india:india-code-sra-1963",
 tpa:"source:india:india-code-tpa-1882",cyber:"source:india:india-code-it-2000",
 taxation:"source:india:india-code-income-tax-1961"
};
for(const r of rows){
  const d=r.data,c=d.content||{},subject=r.path.split("/")[1]||"",text=JSON.stringify(c);
  const expected=sourceBySubject[subject];
  if(expected && (!Array.isArray(d.sources)||!d.sources.includes(expected)))
    add(r,"source-attachment","high","Expected canonical source "+expected+" is not attached.",String(d.sources||[]));
  const m=r.path.match(/\/s-(\d+)(?:\.json)$/);
  if(m){
    const n=Number(m[1]),refs=[];
    for(const x of text.matchAll(/(?:section|s\.|sec\.?|§)\s*(\d{1,3})(?:\s*\((\d+)\))?/gi)) refs.push(x[1]);
    if(refs.length && !refs.includes(String(n)))
      add(r,"section-identity-mismatch","high","Filename identifies section "+n+" but no reference to section "+n+" was found in the topic content.",refs.slice(0,20).join(", "));
    if(/^(bns|bnss|bsa)$/.test(subject) && /(?:old|formerly|IPC|CrPC|IEA)\s*(?:section|s\.?|§)?\s*\d{1,3}/i.test(text))
      add(r,"legacy-cross-reference","medium","Legacy criminal-law section references are present; verify each mapping against the official corresponding-section table.");
  }
  if(typeof d.effectiveFrom==="string" && /^(bns|bnss|bsa)$/.test(subject) && d.effectiveFrom!=="2024-07-01")
    add(r,"effective-date-mismatch","high","Criminal-law topic effectiveFrom is "+d.effectiveFrom+"; expected 2024-07-01.",d.effectiveFrom);
  if(!String(d.title||c.overview||c.short||"").trim()) add(r,"missing-topic-description","medium","Topic has neither title nor overview.");
}
const byType={}; for(const f of findings) byType[f.type]=(byType[f.type]||0)+1;
const report={
 schemaVersion:"v1",phase:"Phase 6 — Statutory Section & Reference Consistency Verification",
 generatedAt:new Date().toISOString(),scope:{migratedTopics:rows.length},
 policy:["Checks canonical source attachment and deterministic section identity.","Flags legacy cross-references for authoritative corresponding-section review.","Does not certify statutory meaning, ingredients, punishment or case-law correctness.","Does not promote any topic to verified or published."],
 summary:{topicsAudited:rows.length,topicsWithFindings:new Set(findings.map(f=>f.path)).size,totalFindings:findings.length,highSeverity:findings.filter(f=>f.severity==="high").length,mediumSeverity:findings.filter(f=>f.severity==="medium").length},
 byType,findings
};
const out=path.join(ROOT,"manifests","phase-6-statutory-verification.json");
fs.mkdirSync(path.dirname(out),{recursive:true}); fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({summary:report.summary,byType},null,2));
