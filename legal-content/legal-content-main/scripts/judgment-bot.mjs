#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const ROOT=process.cwd();
const OUT=path.join(ROOT,"judgments");
const STATE=path.join(ROOT,".judgment-bot-state.json");
const REQUESTED_MAX=Number(process.env.JUDGMENT_BOT_MAX||100);\nconst MAX=Math.min(Math.max(Number.isFinite(REQUESTED_MAX)?REQUESTED_MAX:100,1),100);
const DRY=process.env.JUDGMENT_BOT_DRY_RUN==="1";
const SOURCES={sc:"https://www.sci.gov.in/",hc:"https://judgments.ecourts.gov.in/pdfsearch/"};
function sha(v){return crypto.createHash("sha256").update(v).digest("hex");}
function slug(v){return (v||"judgment").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,80);}
function log(){console.log("[judgment-bot]",...arguments);}
function load(){try{return JSON.parse(fs.readFileSync(STATE,"utf8"));}catch{return {seen:{}};}}
function save(s){fs.writeFileSync(STATE,JSON.stringify(s,null,2)+"\n");}
async function get(url){const r=await fetch(url,{redirect:"follow",headers:{"user-agent":"CodePackr-Law-Judgment-Bot/1.0","accept":"text/html,application/pdf;q=0.9,*/*;q=0.8"}});if(!r.ok)throw new Error(r.status+" "+r.statusText);return r;}
function links(html,base){const out=[],re=/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi;let m;while((m=re.exec(html))){out.push({url:new URL(m[1],base).href,text:m[2].replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim()});}return out;}
function dateOf(s){const m=(s||"").match(/(\d{1,2})[-/](\d{1,2})[-/](\d{4})/);return m?m[3]+"-"+m[2].padStart(2,"0")+"-"+m[1].padStart(2,"0"):null;}
function parseSC(html){return links(html,SOURCES.sc).filter(x=>/judgment|judgements|document|view-pdf/i.test(x.url+" "+x.text)).map(x=>({source:"supreme-court",title:x.text,url:x.url,date:dateOf(x.text)})).filter(x=>x.date).slice(0,MAX);}
async function discoverSC(){const h=await(await get(SOURCES.sc)).text();const a=parseSC(h);if(!a.length)throw new Error("No Supreme Court judgment entries found; source layout may have changed.");return a;}
async function discoverHC(){const h=await(await get(SOURCES.hc)).text();if(/captcha|enter captcha|solve captcha/i.test(h)){log("High Court portal requires interactive CAPTCHA; adapter stopped without bypass.");return [];}return links(h,SOURCES.hc).filter(x=>/pdf|judg|order/i.test(x.url+" "+x.text)).map(x=>({source:"high-court-ecourts",title:x.text,url:x.url,date:dateOf(x.text)})).filter(x=>x.date).slice(0,MAX);}
function id(item,url){return "judgment:"+item.source+":"+sha(url||item.url).slice(0,12)+"-"+slug(item.title);}
async function materialize(item){const r=await get(item.url),type=r.headers.get("content-type")||"",buf=Buffer.from(await r.arrayBuffer()),sourceSha=sha(buf);let text="";let canonical=item.url;if(type.includes("pdf")||/\.pdf(?:$|[?#])/i.test(item.url)){const f=path.join(ROOT,".jb-"+sourceSha+".pdf");fs.writeFileSync(f,buf);try{text=execFileSync("pdftotext",[f,"-"],{encoding:"utf8"});}catch{}fs.unlinkSync(f);}else{const h=buf.toString("utf8"),p=links(h,item.url).find(x=>/\.pdf(?:$|[?#])/i.test(x.url));if(p){canonical=p.url;const pr=await get(p.url),pb=Buffer.from(await pr.arrayBuffer()),ps=sha(pb),f=path.join(ROOT,".jb-"+ps+".pdf");fs.writeFileSync(f,pb);try{text=execFileSync("pdftotext",[f,"-"],{encoding:"utf8"});}catch{}fs.unlinkSync(f);return {canonical,text,sourceSha:ps};}text=h.replace(/<script[\s\S]*?<\/script>/gi," ").replace(/<style[\s\S]*?<\/style>/gi," ").replace(/<[^>]+>/g," ").replace(/\s+/g," ").trim();}return {canonical,text,sourceSha};}
function entity(item,m){const title=(item.title||"Judgment").replace(/\s+/g," ").trim();return {schemaVersion:"v1",entityType:"judgment",id:id(item,m.canonical),version:1,status:"research",title,jurisdiction:item.source==="supreme-court"?"India — Supreme Court":"India — High Court",content:{caseIdentity:title,court:item.source==="supreme-court"?"Supreme Court of India":"High Court (eCourts)",date:item.date||new Date().toISOString().slice(0,10),facts:"",questionsBeforeCourt:[],lawsInvolved:[],precedentsReliedUpon:[],precedentsDistinguishedOrChallenged:[],reasoning:"",stepByStepReasoning:[],findings:[],holding:"",ratioDecidendi:"",obiter:"",finalOrder:"",legalChange:"",laterJudgments:[],presentLegalPosition:"",practicalSignificance:"",sourceTextSha256:m.sourceSha,extractedTextLength:m.text.length,ingestionNote:"Automated ingestion record; substantive legal analysis requires verification."},sources:[m.canonical],updatedAt:new Date().toISOString(),tags:["judgment","automated-ingestion",item.source]};}
async function main(){fs.mkdirSync(OUT,{recursive:true});const state=load(),items=[];items.push(...await discoverSC());try{items.push(...await discoverHC());}catch(e){log("High Court discovery skipped:",e.message);}let added=0;for(const item of items.slice(0,MAX)){try{const m=await materialize(item);if(m.text.length<500){log("SKIP insufficient text:",item.title);continue;}const e=entity(item,m);if(state.seen[e.id])continue;const dir=path.join(OUT,item.source),file=path.join(dir,e.id.split(":").pop()+".json");fs.mkdirSync(dir,{recursive:true});if(!DRY)fs.writeFileSync(file,JSON.stringify(e,null,2)+"\n");state.seen[e.id]={url:m.canonical,sha256:m.sourceSha};added++;log("INGEST",e.id);}catch(e){log("FAILED",item.title,e.message);}}save(state);log("done; added="+added+" dryRun="+DRY);}
main().catch(e=>{console.error(e);process.exitCode=1;});
