#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
const root=process.cwd(),dir=path.join(root,"judgments");let files=0,errors=0;
function walk(d){if(!fs.existsSync(d))return[];let o=[];for(const n of fs.readdirSync(d)){const p=path.join(d,n),s=fs.statSync(p);if(s.isDirectory())o=o.concat(walk(p));else if(n.endsWith(".json"))o.push(p);}return o;}
function fail(m){console.error("ERROR:",m);errors++;}
for(const f of walk(dir)){files++;let x;try{x=JSON.parse(fs.readFileSync(f,"utf8"));}catch{fail(f+": invalid JSON");continue;}for(const k of ["schemaVersion","entityType","id","version","status","title","jurisdiction","content","sources","updatedAt"])if(!(k in x))fail(f+": missing "+k);if(x.entityType!=="judgment")fail(f+": entityType must be judgment");if(!/^judgment:[a-z0-9-]+:[a-z0-9._-]+$/.test(x.id||""))fail(f+": invalid judgment id");if(!Array.isArray(x.sources)||!x.sources.length)fail(f+": missing sources");if(x.status==="published"&&(!x.content.holding||!x.content.ratioDecidendi||!x.content.finalOrder))fail(f+": published judgment missing substantive fields");}
console.log("Judgment bot verification: files="+files+" errors="+errors);process.exitCode=errors?1:0;
