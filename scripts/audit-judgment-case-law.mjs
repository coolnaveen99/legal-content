#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const ROOT=process.cwd(), root=path.join(ROOT,"topics"), findings=[], cases=[], seen=new Map();
function walk(d){if(!fs.existsSync(d))return;for(const n of fs.readdirSync(d)){const p=path.join(d,n),s=fs.statSync(p);if(s.isDirectory())walk(p);else if(n.endsWith(".json")){try{const data=JSON.parse(fs.readFileSync(p,"utf8"));if(data.entityType!=="topic"||!data.tags?.includes("legacy-migration"))continue;const arr=Array.isArray(data.content?.cases)?data.content.cases:[];for(const k of arr){cases.push({path:path.relative(ROOT,p).replaceAll(path.sep,"/"),topic:data.id,subject:p.split(path.sep).slice(-2,-1)[0],k});}}catch{}}}}
function add(c,type,severity,message,evidence=""){findings.push({path:c.path,topic:c.topic,type,severity,message,evidence});}
walk(root);
for(const c of cases){
 const k=c.k,name=String(k.name||"").trim(),year=Number(k.year),citation=String(k.citation||"").trim(),court=String(k.court||"").trim();
 if(!name)add(c,"missing-case-name","high","Case record has no case name.");
 if(!citation)add(c,"missing-citation","medium",`Case "${name||"(unnamed)"}" has no citation.`);
 if(!court)add(c,"missing-court","medium",`Case "${name||"(unnamed)"}" has no court metadata.`);
 if(!Number.isInteger(year)||year<1200||year>new Date().getFullYear())add(c,"implausible-year","high",`Case "${name||"(unnamed)"}" has an implausible year.`,String(k.year));
 const reportYears=Array.isArray(k.reportYears)?k.reportYears.map(Number).filter(Number.isInteger):[];
 if(Array.isArray(k.reportYears)&&reportYears.length&&Number.isInteger(year)&&!reportYears.includes(year))add(c,"citation-year-mismatch","high",`Case "${name}" year does not match declared report-year metadata.`,JSON.stringify({decisionYear:year,reportYears}));
 const key=name.toLowerCase()+"|"+citation.toLowerCase(); if(key&&!seen.has(key))seen.set(key,[]); seen.get(key)?.push(c.path);
 for(const field of ["facts","issue","ratioDecidendi","holding","relevance"]){if(!String(k[field]||"").trim())add(c,"missing-case-analysis","medium",`Case "${name}" is missing ${field}.`);}
 if(c.subject==="torts"&&name==="Ashby v White"&&year===1932)add(c,"known-case-metadata-risk","high","Ashby v White historical year requires correction/verification.","expected 1703");
 if(c.subject==="torts"&&name==="Gloucester Grammar School Case"&&year===1991)add(c,"known-case-metadata-risk","high","Gloucester Grammar School Case historical year requires correction/verification.","expected 1410");
}
for(const [key,paths] of seen)if(paths.length>1)for(const p of paths)add({path:p,topic:"",k:{}}, "duplicate-case-record","medium","Same case name/citation appears in multiple migrated topic records; verify consistency before publication.",key);
const report={schemaVersion:"v1",phase:"Phase 8 — Judgment & Case-Law Deep Verification",generatedAt:new Date().toISOString(),scope:{migratedTopics:new Set(cases.map(x=>x.path)).size,caseRecords:cases.length},policy:["Validates judgment metadata and case-analysis completeness against authoritative sources before publication.","Does not infer a holding, ratio, procedural history, or current precedential status from a case name alone.","No topic is promoted to verified or published by this audit."],summary:{caseRecords:cases.length,topicsWithCases:new Set(cases.map(x=>x.path)).size,topicsWithFindings:new Set(findings.map(x=>x.path)).size,totalFindings:findings.length,highSeverity:findings.filter(x=>x.severity==="high").length,mediumSeverity:findings.filter(x=>x.severity==="medium").length},byType:Object.fromEntries([...new Set(findings.map(x=>x.type))].map(t=>[t,findings.filter(x=>x.type===t).length])),findings};
fs.mkdirSync(path.join(ROOT,"manifests"),{recursive:true});fs.writeFileSync(path.join(ROOT,"manifests","phase-8-judgment-verification.json"),JSON.stringify(report,null,2)+"\n");console.log(JSON.stringify({summary:report.summary,byType:report.byType},null,2));
