#!/usr/bin/env node
/**
 * Phase 5 — current-law metadata normalization.
 * Applies authoritative commencement metadata to migrated BNS topics.
 * India Code records BNS enforcement from 1 July 2024.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const root=path.join(ROOT,"topics","bns");
let changed=0, scanned=0;
function walk(d){
  if(!fs.existsSync(d)) return;
  for(const n of fs.readdirSync(d)){
    const p=path.join(d,n), s=fs.statSync(p);
    if(s.isDirectory()) walk(p);
    else if(n.endsWith(".json")){
      try{
        const data=JSON.parse(fs.readFileSync(p,"utf8"));
        if(data.entityType!=="topic" || !Array.isArray(data.tags) || !data.tags.includes("legacy-migration")) return;
        scanned++;
        if(data.effectiveFrom!=="2024-07-01"){
          data.effectiveFrom="2024-07-01";
          data.updatedAt=new Date().toISOString();
          fs.writeFileSync(p,JSON.stringify(data,null,2)+"\n");
          changed++;
        }
      }catch{}
    }
  }
}
walk(root);
console.log(JSON.stringify({scanned,changed,effectiveFrom:"2024-07-01"},null,2));
