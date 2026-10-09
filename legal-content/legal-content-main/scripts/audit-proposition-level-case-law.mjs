#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const JROOT=path.join(ROOT,"judgments","sc");
const MAN=path.join(ROOT,"manifests","phase-11-proposition-verification.json");

const EVIDENCE={
  "Deep Chand v. State of U.P.":{
    level:"official-corrob",
    urls:["https://api.sci.gov.in/jonew/judis/37389.pdf","https://api.sci.gov.in/pdfdate/index1.php?dno=329222015&dt=2019-02-27&filename=supremecourt/2015/32922/32922_2015_Judgement_27-Feb-2019.pdf"],
    note:"Official Supreme Court judgments quote and attribute the Deep Chand repugnancy principles; direct original PDF was not located in the official search results used for this phase."
  },
  "L. Chandra Kumar v. Union of India":{
    level:"direct-original",
    urls:["https://www.sci.gov.in/document/l-chandra-kumar-v-union-of-india-and-ors-1994-supp-6-scr-261/"],
    note:"Official Supreme Court judgment record/access page."
  },
  "Abhilasha v. Parkash":{
    level:"direct-original",
    urls:["https://api.sci.gov.in/supremecourt/2018/34880/34880_2018_35_1501_23965_Judgement_15-Sep-2020.pdf"],
    note:"Official Supreme Court judgment PDF."
  },
  "Bandhua Mukti Morcha v. Union of India":{
    level:"official-corrob",
    urls:["https://api.sci.gov.in/supremecourt/2012/35071/35071_2012_Judgement_24-Aug-2017.pdf","https://api.sci.gov.in/jonew/judis/12668.pdf"],
    note:"Official Supreme Court judgments cite the 1984 decision and reproduce/describe its Article 32, dignity, bonded-labour and procedural propositions; direct 1984 original PDF was not located in this search pass."
  },
  "State of Uttaranchal v. Balwant Singh Chaufal":{
    level:"official-corrob",
    urls:["https://api.sci.gov.in/supremecourt/2022/18261/18261_2022_8_1501_39494_Judgement_07-Nov-2022.pdf"],
    note:"Official Supreme Court judgment cites the 2010 decision and describes its PIL-development framework; direct original PDF was not located in this search pass."
  },
  "Shreya Singhal v. Union of India":{
    level:"official-corrob",
    urls:["https://www.sci.gov.in/aor-examination/"],
    note:"Official Supreme Court AOR examination page lists the authoritative Supreme Court Reports record; proposition text remains pending direct-original proposition review."
  },
  "Maneka Gandhi v. Union of India":{
    level:"direct-original",
    urls:["https://api.sci.gov.in/jonew/judis/5154.pdf"],
    note:"Official Supreme Court judgment PDF, dated 25 January 1978, 1978 SCC (1) 248 / 1978 SCR (2) 621."
  },
  "Kesavananda Bharati Sripadagalvaru v. State of Kerala":{
    level:"direct-original",
    urls:["https://api.sci.gov.in/jonew/judis/29981.pdf","https://www.sci.gov.in/document/his-holiness-kesavananda-bharati-v-state-of-kerala-1973-supp-scr-1/"],
    note:"Official Supreme Court judgment PDF and official judgment record/access page."
  },
  "Minerva Mills v. Union of India":{
    level:"official-corrob",
    urls:["https://api.sci.gov.in/jonew/judis/31353.pdf","https://www.sci.gov.in/aor-examination/"],
    note:"Official Supreme Court judgment material quotes the Minerva Mills reasoning and the AOR page lists the authoritative Supreme Court Reports record; direct original PDF was not located in this search pass."
  },
  "A.K. Gopalan v. State of Madras":{
    level:"official-corrob",
    urls:["https://www.sci.gov.in/aor-examination/"],
    note:"Official Supreme Court AOR examination page lists the authoritative Supreme Court Reports record; direct original PDF was not located in this search pass."
  }
};

function text(v){return typeof v==="string"?v.trim():"";}
function propositionFields(c){
  return ["ratioDecidendi","holding","relevance"].filter(k=>text(c?.[k])).map(k=>({field:k,text:c[k]}));
}
const rows=[];
for(const file of fs.readdirSync(JROOT).filter(f=>f.endsWith(".json")).sort()){
  const p=path.join(JROOT,file);
  let d; try{d=JSON.parse(fs.readFileSync(p,"utf8"));}catch{continue;}
  if(d.entityType!=="judgment") continue;
  const ev=EVIDENCE[d.title];
  if(!ev) continue;
  const c=d.content||{};
  const props=propositionFields(c);
  const missing=["court","facts","questionsBeforeCourt","ratioDecidendi","holding","relevance"]
    .filter(k=>Array.isArray(c[k])?c[k].length===0:!text(c[k]));
  const topicCount=Array.isArray(c.sourceTopics)?c.sourceTopics.length:0;
  if(!c.court && ["Deep Chand v. State of U.P.","L. Chandra Kumar v. Union of India","Abhilasha v. Parkash","Bandhua Mukti Morcha v. Union of India","State of Uttaranchal v. Balwant Singh Chaufal","Shreya Singhal v. Union of India","Maneka Gandhi v. Union of India","Kesavananda Bharati Sripadagalvaru v. State of Kerala","Minerva Mills v. Union of India","A.K. Gopalan v. State of Madras"].includes(d.title)) c.court="Supreme Court of India";
  d.propositionVerification={
    phase:"11",
    evidenceLevel:ev.level,
    verificationStatus:"manual-proposition-review-required",
    evidence:ev.urls.map(url=>({type:ev.level,url,note:ev.note})),
    propositionsAudited:props.map(x=>x.field),
    propositionCount:props.length,
    missingContextFields:missing,
    linkedTopicCount:topicCount,
    rule:"Authoritative evidence is attached as provenance. This phase does not rewrite, promote, or certify a proposition unless proposition-level legal review confirms the exact holding/ratio against the authoritative decision."
  };
  fs.writeFileSync(p,JSON.stringify(d,null,2)+"\n");
  rows.push({
    id:d.id,name:d.title,citation:c.citation||"",
    evidenceLevel:ev.level,evidenceCount:ev.urls.length,
    propositionCount:props.length,missingContextFields:missing,
    linkedTopicCount:topicCount,verification:"manual-proposition-review-required"
  });
}
const summary={
  judgmentsAudited:rows.length,
  directOriginal:rows.filter(r=>r.evidenceLevel==="direct-original").length,
  officialCorroboration:rows.filter(r=>r.evidenceLevel==="official-corrob").length,
  propositionsAudited:rows.reduce((n,r)=>n+r.propositionCount,0),
  judgmentsWithMissingContext:rows.filter(r=>r.missingContextFields.length>0).length,
  pendingManualReview:rows.length
};
const completenessRows=rows.map(r=>({id:r.id,name:r.name,missingContextFields:r.missingContextFields,provenanceEvidence:r.evidenceCount,status:"manual-review-required"}));
const completeness={schemaVersion:"v1",phase:"Phase 12 — Judgment Completeness & Reconciliation",generatedAt:new Date().toISOString(),policy:["Normalize only established metadata.","Do not invent missing facts, issues, ratio, holding or relevance.","No automatic promotion to published or verified."],summary:{priority1Audited:completenessRows.length,complete:completenessRows.filter(r=>r.missingContextFields.length===0).length,stillIncomplete:completenessRows.filter(r=>r.missingContextFields.length>0).length},records:completenessRows};
const CMAN=path.join(ROOT,"manifests","phase-12-judgment-completeness.json");
fs.writeFileSync(CMAN,JSON.stringify(completeness,null,2)+"\n");
const report={
 schemaVersion:"v1",
 phase:"Phase 11 — Proposition-Level Case-Law Enrichment",
 generatedAt:new Date().toISOString(),
 policy:[
  "Proposition text is not rewritten or fabricated by automation.",
  "Official Supreme Court evidence is attached as provenance and classified as direct-original or official corroboration.",
  "A case remains review/pending until proposition-level legal review confirms the exact proposition against the authoritative decision.",
  "Supreme Court summaries or later judgments may corroborate a proposition but do not substitute for the original decision when direct verification is required."
 ],
 summary,records:rows
};
fs.mkdirSync(path.dirname(MAN),{recursive:true});
fs.writeFileSync(MAN,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(summary,null,2));
