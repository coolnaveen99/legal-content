#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const topicRoot=path.join(ROOT,"topics","bns");
const findings=[];
const audited=[];

// Authoritative BNS↔IPC concordance used by Phase 7.
// The section-level correspondences are based on the BPRD/MHA comparative material;
// this registry is deliberately limited to topics surfaced by Phase 6.
const mapping={
  11:["73"],108:["306"],109:["307"],114:["319"],115:["321","323"],
  126:["339","341"],127:["340","342","343","344","345","346","347","348"],
  128:["349"],129:["350"],130:["351"],138:["362"],143:["370"],164:["136"],
  170:["171B"],172:["171D"],173:["171E"],
  189:["141","143","144","145","150","151","157","158"],
  191:["146","147","148"],194:["159","160"],227:["191"],249:["212"],
  268:["229"],270:["268"],276:["274"],277:["275"],296:["294"],297:["294A"],
  308:["383","384","385","386","387","388","389"],
  310:["391","395","396","399","402","400"],
  316:["405","406","407","408","409"],317:["410","411","412","413","414"],
  319:["416","419"],324:["425","426","427","440"],
  33:["95"],34:["96"],35:["97"],36:["98"],37:["99"],38:["100"],39:["101"],
  40:["102"],41:["103"],42:["104"],43:["105"],44:["106"],45:["107"],
  46:["108"],47:["108A"]
};

function add(row,type,severity,message,evidence=""){
  findings.push({path:row.path,id:row.data.id,section:row.section,type,severity,message,evidence});
}
function walk(dir){
  for(const name of fs.readdirSync(dir)){
    const p=path.join(dir,name);
    const st=fs.statSync(p);
    if(st.isDirectory()) walk(p);
    else if(name.endsWith(".json") && /^s-\d+\.json$/.test(name)){
      const data=JSON.parse(fs.readFileSync(p,"utf8"));
      if(data.entityType==="topic" && Array.isArray(data.tags) && data.tags.includes("legacy-migration")){
        const section=Number(name.match(/^s-(\d+)\.json$/)[1]);
        audited.push({data,path:path.relative(ROOT,p).replaceAll(path.sep,"/"),section});
      }
    }
  }
}
walk(topicRoot);

for(const row of audited){
  const expected=mapping[row.section];
  if(!expected) continue;
  const text=JSON.stringify(row.data.content||"");
  const found=[...text.matchAll(/(?:old\s+IPC|IPC(?:\s+section|\s+s\.?|\s*[:#])?)\s*(?:section\s*)?(\d{1,3}[A-Z]?)/gi)]
    .map(m=>m[1].toUpperCase());
  const unique=[...new Set(found)];
  const unexpected=unique.filter(x=>!expected.includes(x));
  const historicalMarker=/old\s+IPC|former(?:ly)?\s+IPC|IPC\s*(?:section|s\.?)/i.test(text);
  if(historicalMarker && unexpected.length){
    add(row,"ipc-correspondence-mismatch","high",
      "A legacy IPC reference is present but is not in the vetted correspondence set for this BNS section.",
      "expected="+expected.join(", ")+"; found="+unique.join(", ")+"; unexpected="+unexpected.join(", "));
  }
  if(!historicalMarker){
    add(row,"ipc-correspondence-undocumented","medium",
      "Phase 6 flagged a legacy criminal-law reference, but the content does not explicitly label the historical IPC reference in a machine-auditable form.",
      "expected="+expected.join(", "));
  }
}

const report={
  schemaVersion:"v1",
  phase:"Phase 7 — Statutory Provision Deep Verification",
  generatedAt:new Date().toISOString(),
  scope:{migratedBnsTopics:audited.length,registrySections:Object.keys(mapping).length},
  policy:[
    "Verifies only deterministic BNS↔IPC correspondence for the Phase 6 finding set.",
    "Historical IPC references are retained and must remain explicitly historical; they are not current-law citations.",
    "The concordance does not certify ingredients, punishment, provisos, explanations, illustrations or judicial interpretation.",
    "No topic is promoted to verified or published by this audit."
  ],
  summary:{
    topicsAudited:audited.length,
    topicsWithFindings:new Set(findings.map(x=>x.path)).size,
    totalFindings:findings.length,
    highSeverity:findings.filter(x=>x.severity==="high").length,
    mediumSeverity:findings.filter(x=>x.severity==="medium").length
  },
  byType:Object.fromEntries([...new Set(findings.map(x=>x.type))].map(t=>[t,findings.filter(x=>x.type===t).length])),
  findings
};
const out=path.join(ROOT,"manifests","phase-7-statutory-deep-verification.json");
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify({summary:report.summary,byType:report.byType},null,2));
