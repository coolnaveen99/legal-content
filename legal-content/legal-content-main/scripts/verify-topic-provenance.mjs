#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"..");
const TOPICS=path.join(ROOT,"topics");
const OUT=path.join(ROOT,"manifests","phase-3b-topic-verification.json");

function walk(dir){
  if(!fs.existsSync(dir)) return [];
  const out=[]; for(const n of fs.readdirSync(dir)){const p=path.join(dir,n); const st=fs.statSync(p); if(st.isDirectory()) out.push(...walk(p)); else if(n.endsWith(".json")) out.push(p);}
  return out;
}
function expected(rel){
  const r=rel.replace(/^topics[\\/]/,"").replaceAll("\\\\","/");
  if(r.startsWith("bns/")) return ["source:india:india-code-bns-2023"];
  if(r.startsWith("constitution/")) return ["source:india:india-code-constitution"];
  if(r.startsWith("cyber/")) return ["source:india:india-code-it-2000"];
  if(r.startsWith("family/")){
    const n=r.split("/")[1];
    if(n.startsWith("hma-")) return ["source:india:india-code-hma-1955"];
    if(n.startsWith("hsa-")) return ["source:india:india-code-hsa-1956"];
    if(n.startsWith("hmga-")) return ["source:india:india-code-hmga-1956"];
    if(n.startsWith("hama-")) return ["source:india:india-code-hama-1956"];
    if(n.startsWith("sma-")) return ["source:india:india-code-sma-1954"];
    if(n.startsWith("dmma-")) return ["source:india:india-code-dmma-1939"];
    if(n.startsWith("mpl-shariat-")) return ["source:india:india-code-mpl-shariat-1937"];
    if(n.startsWith("mwa-")) return ["source:india:india-code-mwa-1874"];
  }
  if(r.startsWith("labour/")) return ["source:india:india-code-industrial-disputes-1947","source:india:india-code-industrial-relations-code-2020"];
  if(r.startsWith("petition-formats/")){
    const n=r.split("/")[1];
    if(n==="format-bail-application.json"||n==="format-fir.json") return ["source:india:india-code-bnss-2023"];
    if(n==="format-execution-petition.json"||n==="format-plaint.json"||n==="format-written-statement.json") return ["source:india:india-code-cpc-1908"];
    if(n==="format-legal-notice-138.json") return ["source:india:india-code-ni-1881"];
    if(n==="format-pil.json") return ["source:india:india-code-constitution","source:india:india-pil-practice"];
    if(n==="format-writ-petition.json") return ["source:india:india-code-constitution"];
  }
  if(r.startsWith("pil/")) return ["source:india:india-pil-practice"];
  if(r.startsWith("taxation/")) return ["source:india:india-code-income-tax-1961"];
  if(r.startsWith("torts/")) return ["source:india:india-common-law-torts"];
  return [];
}
const files=walk(TOPICS); const rows=[]; let changed=0;
for(const file of files){
  const rel=path.relative(ROOT,file).replaceAll(path.sep,"/");
  const d=JSON.parse(fs.readFileSync(file,"utf8"));
  if(d.entityType!=="topic" || !Array.isArray(d.tags) || !d.tags.includes("legacy-migration")) continue;
  const exp=expected(rel); const old=Array.isArray(d.sources)?d.sources:[];
  const preserved=old.filter(s=>typeof s==="string"&&!s.startsWith("Legacy migration source:")&&!s.startsWith("source:india:"));
  const next=[...new Set([...exp,...preserved])];
  const missing=exp.filter(s=>!next.includes(s));
  const hasLegacy=next.some(s=>s.startsWith("Legacy migration source:"));
  const provisionRefs=Array.isArray(d.content?.provisions)?d.content.provisions:[];
  const provisionCheck=provisionRefs.map(p=>({actId:p.actId||null,section:p.section||null}));
  if(JSON.stringify(old)!==JSON.stringify(next)){d.sources=next; fs.writeFileSync(file,JSON.stringify(d,null,2)+"\n"); changed++;}
  rows.push({path:rel,id:d.id,expectedSources:exp,actualSources:next,missingSources:missing,legacySourcePresent:hasLegacy,provisionRefs:provisionCheck,status:d.status});
}
const result={schemaVersion:"v1",phase:"3B",generatedAt:new Date().toISOString(),scope:rows.length,changed,sourceIssues:rows.filter(r=>r.missingSources.length||r.legacySourcePresent).length,rows};
fs.mkdirSync(path.dirname(OUT),{recursive:true}); fs.writeFileSync(OUT,JSON.stringify(result,null,2)+"\n");
console.log(JSON.stringify({phase:"3B",topics:rows.length,changed,sourceIssues:result.sourceIssues},null,2));
if(rows.some(r=>r.missingSources.length)) process.exit(1);
