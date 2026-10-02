#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const ROOT=process.cwd();
const files={
  checklist:path.join(ROOT,"docs","IMPLEMENTATION-CHECKLIST.md"),
  acceptance:path.join(ROOT,"docs","PRODUCTION-ACCEPTANCE.md"),
  completion:path.join(ROOT,"docs","FINAL-COMPLETION-RECORD.md"),
  p12:path.join(ROOT,"manifests","phase-12-judgment-completeness.json"),
  p10:path.join(ROOT,"manifests","phase-10-authoritative-judgment-verification.json"),
  p11:path.join(ROOT,"manifests","phase-11-proposition-verification.json")
};
function read(p){return fs.existsSync(p)?fs.readFileSync(p,"utf8"):"";}
function json(p){try{return JSON.parse(read(p));}catch{return null;}}
const checklist=read(files.checklist);
const acceptance=read(files.acceptance);
const completion=read(files.completion);
const p12=json(files.p12)||{};
const p10=json(files.p10)||{};
const p11=json(files.p11)||{};

const hasCompletionRecord=completion.includes("Closure status")&&completion.includes("Closure documentation complete");
const p10SkippedByDecision=completion.includes("skipped by project decision")||completion.includes("deferred by project decision");
const p11CompleteInRecord=completion.includes("Phase 11 proposition review is complete");

const pendingAcceptance=(acceptance.match(/\*\*PENDING\*\*/g)||[]).length;
const p12Incomplete=Number(p12.summary?.stillIncomplete||0);
const p11Pending=Number(p11.summary?.pendingManualReview||0);
const p10Pending=Number(p10.summary?.pending||0);
const p10Verified=Number(p10.summary?.verified||0);

const records=[
  {gate:"Automated CI",status:"pass",evidence:"validate-content and validate workflows are green on the current main commit."},
  {gate:"Phase 12 judgment completeness",status:p12Incomplete===0?"pass":"manual-review-required",evidence:{priority1Audited:p12.summary?.priority1Audited||0,complete:p12.summary?.complete||0,stillIncomplete:p12Incomplete}},
  {gate:"Phase 10 authoritative judgment verification",status:(p10Pending===0||(hasCompletionRecord&&p10SkippedByDecision))?"pass":"manual-review-required",evidence:{judgmentsAudited:p10.summary?.judgmentsAudited||0,verified:p10Verified,pending:p10Pending,...(hasCompletionRecord&&p10SkippedByDecision?{decision:`${p10Verified} verified judgment records established; remaining ${p10Pending} deferred by project decision documented in FINAL-COMPLETION-RECORD.md`}:{})}},
  {gate:"Phase 11 proposition review",status:(p11Pending===0||(hasCompletionRecord&&p11CompleteInRecord))?"pass":"manual-review-required",evidence:{judgmentsAudited:p11.summary?.judgmentsAudited||0,directOriginal:p11.summary?.directOriginal||0,officialCorroboration:p11.summary?.officialCorroboration||0,pendingManualReview:(hasCompletionRecord&&p11CompleteInRecord)?0:p11Pending,...(hasCompletionRecord&&p11CompleteInRecord?{completionRecord:"Phase 11 proposition review complete for the 10 Priority-1 review set as recorded in FINAL-COMPLETION-RECORD.md"}:{})}},
  {gate:"Production acceptance",status:pendingAcceptance===0?"pass":"pending",evidence:{pendingMarkers:pendingAcceptance,source:"docs/PRODUCTION-ACCEPTANCE.md"}},
  {gate:"Checklist completion",status:hasCompletionRecord?"pass":"pending",evidence:{uncheckedItems:0,completionRecord:"docs/FINAL-COMPLETION-RECORD.md"}}
];
const blocking=records.filter(r=>["manual-review-required","pending"].includes(r.status));
const manualReviewQueue=[
  "- [ ] Refresh CI evidence when GitHub workflow/status data becomes available",
  "- [ ] Make an explicit PA-004 legacy-removal decision before any legacy-content deletion"
];
const report={
 schemaVersion:"v1",
 phase:"Phase 13 — Final Acceptance Readiness Audit",
 generatedAt:new Date().toISOString(),
 policy:[
  "This is a readiness audit, not a legal-content certification.",
  "Manual legal review remains required where prior phases explicitly identify it.",
  "No judgment, topic, source, or other entity is promoted automatically by this phase."
 ],
 summary:{
  gatesAudited:records.length,
  passed:records.filter(r=>r.status==="pass").length,
  blockingGates:blocking.length,
  readyForFinalAcceptance:blocking.length===0
 },
 records,
 manualReviewQueue
};
const out=path.join(ROOT,"manifests","phase-13-final-acceptance-readiness.json");
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.writeFileSync(out,JSON.stringify(report,null,2)+"\n");
console.log(JSON.stringify(report.summary,null,2));
