#!/usr/bin/env node

// Build a local matching queue from an open judgment corpus.
// This script never marks legal content VERIFIED.

import fs from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const get = (name, fallback = null) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : fallback; };
const repoRoot = path.resolve(get('--repo-root', '.'));
const corpusPath = get('--corpus');
const output = path.resolve(repoRoot, get('--output', 'docs/judgment-verification/open-corpus-match-report.json'));
if (!corpusPath) { console.error('Missing --corpus'); process.exit(2); }

const norm = (v) => String(v ?? '').toLowerCase().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim();
const first = (o, keys) => { for (const k of keys) if (o?.[k] !== undefined && o?.[k] !== null && String(o[k]).trim()) return o[k]; return null; };

function readJsonFile(file) {
  const raw = fs.readFileSync(file, 'utf8').trim();
  if (!raw) return [];
  if (raw.startsWith('[')) return JSON.parse(raw);
  return raw.split(/\r?\n/).filter(Boolean).map((line) => JSON.parse(line));
}

function collectFiles(input) {
  const st = fs.statSync(input);
  if (st.isFile()) return [input];
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p); else if (/\.jsonl?$/.test(e.name)) out.push(p);
    }
  };
  walk(input); return out;
}

function corpusRecord(raw, file) {
  return {
    corpus_file: file,
    corpus_case_id: first(raw, ['case_id','caseId','id']),
    case_name: first(raw, ['case_name','caseName','title','case_title','name']),
    petitioner: first(raw, ['petitioner','appellant','applicant']),
    respondent: first(raw, ['respondent','respondents']),
    citation: first(raw, ['citation','citations','neutral_citation','nc_display']),
    decision_date: first(raw, ['decision_date','judgment_date','date','judgmentDate']),
    court: first(raw, ['court','court_name','publisher','source_publisher']),
    source_url: first(raw, ['source_url','publisher_url','official_url','url']),
    mirror_url: first(raw, ['mirror_url']),
    document_path: first(raw, ['path','pdf_path','document_path'])
  };
}

function repoFiles(root) {
  const out = []; const skip = new Set(['.git','node_modules','.next','dist','build','coverage']);
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      if (skip.has(e.name)) continue;
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p); else if (/\.json$/.test(e.name)) out.push(p);
    }
  };
  walk(root); return out;
}

function repoRecord(file) {
  try {
    const raw = JSON.parse(fs.readFileSync(file, 'utf8')); const o = raw?.judgment ?? raw?.case ?? raw;
    if (!o || typeof o !== 'object') return null;
    const name = first(o, ['caseName','case_name','title','name']);
    const citation = first(o, ['citation','citations','neutralCitation','neutral_citation']);
    if (!name && !citation) return null;
    return { file: path.relative(repoRoot, file), id: first(o,['id','judgmentId','judgment_id']), case_name:name, citation, court:first(o,['court','courtName','court_name']), date:first(o,['date','judgmentDate','judgment_date']), status:first(o,['status','verificationStatus','verification_status']) };
  } catch { return null; }
}

const corpus = collectFiles(path.resolve(corpusPath)).flatMap((f) => { try { return readJsonFile(f).map((r) => corpusRecord(r,f)); } catch { return []; } }).filter(r => r.case_name || r.citation);
const repo = repoFiles(repoRoot).map(repoRecord).filter(Boolean);
const byCitation = new Map(); const byName = new Map();
for (const r of corpus) { if (r.citation) byCitation.set(norm(r.citation), r); if (r.case_name) byName.set(norm(r.case_name), r); }

const matches = repo.map((r) => {
  const c = r.citation ? byCitation.get(norm(r.citation)) : null;
  const n = r.case_name ? byName.get(norm(r.case_name)) : null;
  const m = c || n;
  return { ...r, match_type: c ? 'citation' : n ? 'case-name' : 'none', corpus_match: m || null, proposed_status: m ? 'SOURCE_FOUND_PENDING_CONTENT_VERIFICATION' : 'NEEDS_SOURCE' };
});

const report = { generated_at:new Date().toISOString(), corpus_path:path.relative(repoRoot,path.resolve(corpusPath)), corpus_records:corpus.length, repository_candidate_judgments:repo.length, citation_or_name_matches:matches.filter(x=>x.match_type!=='none').length, no_match:matches.filter(x=>x.match_type==='none').length, important_rule:'No record is marked VERIFIED by this script.', matches };
fs.mkdirSync(path.dirname(output), { recursive:true });
fs.writeFileSync(output, JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({ output:path.relative(repoRoot,output), repository_candidate_judgments:report.repository_candidate_judgments, matches:report.citation_or_name_matches, no_match:report.no_match },null,2));