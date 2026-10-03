# Subject content bots

One non-AI bot per subject. Each bot adds educational examples and an illustration entity using only text already stored on the topic.

The bots do not call a model. They do not invent statutes, cases, holdings, citations, dates, or URLs. Output stays review / in-progress until a person verifies it.

Subjects: admin, arbitration, bns, bnss, bsa, company, constitution, contract, cpc, cyber, dpsp, environment, ethics, family, fundamental-rights, ipr, labour, land, limitation, ni-act, petition-formats, pil, registration, sra, taxation, tort, torts, tpa.

Run Actions workflow "Subject content bots". Each subject is its own job, named bot-<subject>. A run updates branch subject-bot-<subject> and opens a pull request to main. It does not push to main.

Dry run: set dry_run=true. Optional subject input limits the run to one subject.

Output:
- content.examples: two educational hypotheticals marked as not a decided case.
- illustrations/<subject>/<topic>-example.json linked from content.illustrations.
- .subject-content-bot-state/<subject>.json records topics already processed.
