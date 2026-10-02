#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd(), JROOT=path.join(ROOT,"judgments","sc"), MAN=path.join(ROOT,"manifests","phase-10-authoritative-judgment-verification.json");
const OFFICIAL={
  supremeCourt:"https://www.sci.gov.in/",
  verdictFinder:"https://verdictfinder.sci.gov.in/elk_frontend/index.php",
  scrSearch:"https://scr.sci.gov.in/scrsearch/"
};
const priorityNames=new Set([
  "Deep Chand v. State of U.P.",
  "L. Chandra Kumar v. Union of India",
  "Abhilasha v. Parkash",
  "Bandhua Mukti Morcha v. Union of India",
  "State of Uttaranchal v. Balwant Singh Chaufal",
  "Shreya Singhal v. Union of India",
  "Maneka Gandhi v. Union of India",
  "Kesavananda Bharati Sripadagalvaru v. State of Kerala",
  "Minerva Mills Ltd. v. Union of India",
  "A.K. Gopalan v. State of Madras"
]);
const rows=[];
for(const n of fs.readdirSync(JROOT).filter(n=>n.endsWith(".json")).sort()){
  const p=path.join(JROOT,n);
  let d; try{d=JSON.parse(fs.readFileSync(p,"utf8"));}catch{continue;}
  if(d.entityType!=="judgment")continue;
  const c=d.content||{}, name=d.title||"";
  const hasOfficial=(Array.isArray(d.sources)&&d.sources.some(s=>String(s).includes("sci-"))) ||
    String(c.officialSourceUrl||"").includes("sci.gov.in");
  const priority=priorityNames.has(name)?"priority-1":"priority-2";
  rows.push({id:d.id,name,citation:c.citation||c.caseIdentity||"",decisionYear:c.decisionYear||c.date?.slice?.(0,4)||null,status:d.status||"review",priority,officialEvidence:hasOfficial?"source-id-present":"not-attached",verification:"pending",requiredEvidence:["authoritative Supreme Court judgment or SCR record","citation and decision-date confirmation","court/bench confirmation where available","proposition-level verification before publication"]});
}
const report={
 schemaVersion:"v1",
 phase:"Phase 10 — Authoritative Judgment Verification",
 generatedAt:new Date().toISOString(),
 policy:[
  "Verification requires authoritative case-law evidence; a search result or secondary summary alone does not promote a judgment.",
  "The Supreme Court's own site provides judgment search facilities and its Landmark Judgment Summaries are informational aids, not substitutes for the Court's decision.",
  "No judgment is promoted to published solely by this audit."
 ],
 officialPortals:OFFICIAL,
 summary:{
  judgmentsAudited:rows.length,
  priority1:rows.filter(x=>x.priority==="priority-1").length,
  officialEvidenceAttached:rows.filter(x=>x.officialEvidence==="source-id-present").length,
  pending:rows.length
 },
 records:rows
};
fs.mkdirSync(path.dirname(MAN),{recursive:true});
fs.writeFileSync(MAN,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(report.summary,null,2));
