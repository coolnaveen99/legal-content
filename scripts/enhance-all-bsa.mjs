#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const bsaDir = path.join(ROOT, 'topics', 'bsa');

const bsaChapters = [
  { num: 'I', title: 'Preliminary', start: 1, end: 2 },
  { num: 'II', title: 'Relevancy of Facts', start: 3, end: 50 },
  { num: 'III', title: 'Facts Which Need Not Be Proved', start: 51, end: 53 },
  { num: 'IV', title: 'Oral Evidence', start: 54, end: 55 },
  { num: 'V', title: 'Documentary Evidence', start: 56, end: 93 },
  { num: 'VI', title: 'Exclusion of Oral Evidence by Documentary Evidence', start: 94, end: 103 },
  { num: 'VII', title: 'Burden of Proof', start: 104, end: 120 },
  { num: 'VIII', title: 'Estoppel', start: 121, end: 123 },
  { num: 'IX', title: 'Witnesses', start: 124, end: 139 },
  { num: 'X', title: 'Examination of Witnesses', start: 140, end: 168 },
  { num: 'XI', title: 'Improper Admission and Rejection of Evidence', start: 169, end: 169 },
  { num: 'XII', title: 'Repeal and Savings', start: 170, end: 170 }
];

function getChapter(secNum) {
  for (const c of bsaChapters) {
    if (secNum >= c.start && secNum <= c.end) return c;
  }
  return { num: 'General', title: 'Law of Evidence', start: 1, end: 170 };
}

function cleanTitle(rawTitle) {
  if (!rawTitle) return 'Section';
  return rawTitle.replace(/^Section\s+\d+\s*[-—:]\s*/i, '').trim();
}

function extractCoreConcept(entity) {
  const c = entity?.content;
  if (c?.overview) return c.overview.trim();
  if (c?.glance) return c.glance.trim();
  if (c?.study) {
    const lines = c.study.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0) return lines.slice(0, 3).join(' ');
  }
  return cleanTitle(entity.title);
}

function generateEnhancement(secNum, entity) {
  const ch = getChapter(secNum);
  const title = cleanTitle(entity.title);
  const coreConcept = extractCoreConcept(entity);
  const existingExamples = entity.content?.examples || [];
  const existingDistinctions = entity.content?.distinctions || [];

  // Evidentiary thematic classification
  const isElectronic = secNum === 57 || secNum === 61 || secNum === 62 || secNum === 63 || title.toLowerCase().includes('electronic') || title.toLowerCase().includes('digital');
  const isConfessionOrAdmission = (secNum >= 15 && secNum <= 25) || title.toLowerCase().includes('confession') || title.toLowerCase().includes('admission');
  const isBurdenOrPresumption = (secNum >= 104 && secNum <= 120) || title.toLowerCase().includes('burden') || title.toLowerCase().includes('presume') || title.toLowerCase().includes('presumption');
  const isWitnessOrPrivilege = (secNum >= 124 && secNum <= 139) || title.toLowerCase().includes('witness') || title.toLowerCase().includes('communication');
  const isExamination = (secNum >= 140 && secNum <= 168) || title.toLowerCase().includes('examination') || title.toLowerCase().includes('cross-examination') || title.toLowerCase().includes('memory');
  const isEstoppel = (secNum >= 121 && secNum <= 123) || title.toLowerCase().includes('estoppel');
  const isDocOrOralExclusion = (secNum >= 56 && secNum <= 103);

  let legalPrinciple;
  if (isElectronic) {
    legalPrinciple = 'Electronic and digital records are inherently volatile and intangible; their admissibility is conditioned on statutory authenticity, provenance, integrity, and mandatory certification under Section 63 to satisfy the best evidence rule in digital adjudication.';
  } else if (isConfessionOrAdmission) {
    legalPrinciple = 'Confessions in criminal proceedings must be strictly voluntary and free from inducement, threat, coercion, or police oppression, safeguarding the constitutional privilege against self-incrimination under Article 20(3) and procedural fairness under Article 21.';
  } else if (isBurdenOrPresumption) {
    legalPrinciple = 'The fundamental evidentiary rule of onus probandi dictates that he who asserts must prove; in criminal trials, the prosecution bears the constant burden of proving guilt beyond reasonable doubt, while statutory presumptions operate within strict constitutional and statutory limits.';
  } else if (isWitnessOrPrivilege) {
    legalPrinciple = 'Every person is generally competent to testify to assist the administration of justice, balanced against recognized statutory privileges safeguarding marital, official, and professional confidences essential to societal trust.';
  } else if (isExamination) {
    legalPrinciple = 'The right to cross-examination is the greatest legal engine ever invented for the discovery of truth, ensuring that testimony is subjected to rigorous testing for veracity, bias, consistency, and probative reliability.';
  } else if (isEstoppel) {
    legalPrinciple = 'The doctrine of estoppel is rooted in equity and good conscience, precluding a party who has by intentional representation induced another to alter their position from subsequently asserting a contrary state of affairs.';
  } else if (isDocOrOralExclusion) {
    legalPrinciple = 'The best evidence rule dictates that the contents of a written or electronic document must be proved by primary evidence; oral evidence is excluded to prevent uncertainty, fabrication, and the substitution of secondary memory for recorded terms.';
  } else {
    legalPrinciple = `Governs the relevancy, admissibility, and probative evaluation of evidence under Chapter ${ch.num} (${ch.title}) of the Bharatiya Sakshya Adhiniyam, 2023, ensuring that judicial determinations are based exclusively on legally relevant and reliable proof.`;
  }

  // Definition
  let definition = `BSA s. ${secNum} governs ${title} within Chapter ${ch.num} (${ch.title}). It defines the statutory criteria, conditions of admissibility, evidentiary presumptions, and procedural limits governing ${title.toLowerCase()} under the Bharatiya Sakshya Adhiniyam, 2023.`;
  if (coreConcept && coreConcept.length > 40) {
    definition = `${coreConcept.slice(0, 450)}${coreConcept.length > 450 ? '...' : ''}`;
  }

  // Learning Objectives
  const learningObjectives = [
    `Master the statutory scope, definition, and evidentiary role of ${title} under BSA s. ${secNum}.`,
    `Analyze the foundational tests of relevancy, admissibility, and probative value under Chapter ${ch.num} (${ch.title}).`,
    `Understand procedural conditions, evidentiary burdens, electronic documentation standards, and judicial evaluation.`,
    `Evaluate comparative distinctions from the predecessor Indian Evidence Act, 1872 and transition rules under Section 170.`
  ];

  // Statutory Framework
  const statutoryFramework = [
    `Chapter ${ch.num} — ${ch.title}, BSA s. ${secNum}.`,
    `Statutory Title: ${title}.`,
    `Core Evidentiary Mandate: Establishes the legal conditions, rules of proof, or exclusionary boundaries governing ${title.toLowerCase()}.`,
    `Stage & Forum: Applicable during inquiry, trial, or judicial proceedings before criminal and civil courts across India.`,
    `Interlock with BNS & BNSS: Operates alongside substantive offences in the Bharatiya Nyaya Sanhita, 2023 and procedural investigations/trials under the Bharatiya Nagarik Suraksha Sanhita, 2023.`
  ];

  // Essential Ingredients
  const essentialIngredients = [
    `The existence of a fact in issue or relevant fact satisfying the statutory criteria of Section ${secNum}.`,
    `Tender of proof through legally competent oral, documentary, or electronic evidence before the court.`,
    `Compliance with statutory foundation requirements (such as voluntariness, primary evidence, or Section 63 electronic certification).`,
    `Judicial evaluation of admissibility, statutory presumption, or legal effect resulting from proof or failure of proof.`
  ];

  // Detailed Explanation
  const detailedExplanation = `Section ${secNum} constitutes a key evidentiary provision within Chapter ${ch.num} (${ch.title}) of the Bharatiya Sakshya Adhiniyam, 2023, regulating ${title.toLowerCase()}.\n\nIn judicial proceedings, evidence tendered under Section ${secNum} must be analyzed through the distinct conceptual filters of relevancy, admissibility, method of proof, and probative weight. Under the modern evidentiary framework of the BSA, provisions have been recalibrated to seamlessly accommodate electronic and digital records (under Sections 57, 61, 62, and 63), forensic standards, and objective statutory thresholds. The court must ensure that the tender of evidence strictly complies with mandatory statutory conditions to protect the integrity of the judicial process and constitutional fair trial guarantees under Articles 20(3) and 21.\n\nFor legal proceedings commenced prior to 1 July 2024, the savings clause in Section 170(2) of the BSA provides that pending proceedings continue under the repealed Indian Evidence Act, 1872, whereas proceedings instituted on or after commencement are governed strictly by the provisions of the Bharatiya Sakshya Adhiniyam, 2023.`;

  // Examples
  let examples = [];
  if (existingExamples.length >= 2) {
    examples = existingExamples.slice(0, 2).map((ex, idx) => {
      const txt = typeof ex === 'string' ? ex : (ex.text || ex.factPattern || JSON.stringify(ex));
      return `Evidentiary teaching illustration ${idx + 1}: ${txt}`;
    });
  } else {
    examples = [
      `Teaching illustration (Admissible tender): Evidence relating to ${title.toLowerCase()} is tendered in court in full compliance with the statutory conditions, proper custody chain, and evidentiary criteria of BSA s. ${secNum}. The court admits the evidence as relevant and legally admissible.`,
      `Teaching illustration (Exclusion / Failure of foundation): A party seeks to introduce evidence under Section ${secNum} without establishing the mandatory preliminary foundation or statutory certificate. The opposing counsel raises a valid objection, and the court excludes the evidence from consideration.`
    ];
  }

  // Distinctions
  let distinctions = [];
  if (existingDistinctions.length >= 2) {
    distinctions = existingDistinctions.slice(0, 2).map((d) => {
      if (typeof d === 'string') return d;
      return `${d.conceptA || 'BSA'} vs ${d.conceptB || 'IEA'}: ${d.difference || d.discussion || 'Evidentiary distinction'}`;
    });
  } else {
    distinctions = [
      `BSA s. ${secNum} vs IEA 1872 Predecessor: BSA s. ${secNum} modernizes evidentiary principles by integrating electronic and digital records, updated terminology, and refined procedural coherence compared to the colonial 1872 Act.`,
      `BSA s. ${secNum} vs Relevancy / Admissibility Cognates: Section ${secNum} addresses specific evidentiary parameters concerning ${title.toLowerCase()}, which must be distinguished from general relevancy under Section 3 and general rules of proof.`
    ];
  }

  // Problem Application (IRAC)
  const problemApplication = [
    `Issue: Whether the evidence tendered regarding ${title.toLowerCase()} is legally relevant and admissible under BSA s. ${secNum}.`,
    `Rule: Under BSA s. ${secNum}, evidence must satisfy statutory predicates, competent mode of proof, and any mandatory certification or foundation before it can be admitted and evaluated.`,
    `Application: Examination of the trial record demonstrates whether the party tendering the evidence established the necessary factual and statutory foundation required by Section ${secNum}.`,
    `Conclusion: Where statutory criteria are satisfied, the evidence is admitted and assessed for probative weight; if mandatory predicates are absent, the evidence is legally inadmissible.`
  ];

  // Exam Answer Structure
  const examAnswerStructure = {
    shortAnswer: [
      `State the statutory title, chapter, and core purpose of BSA s. ${secNum}.`,
      `List the essential ingredients and statutory criteria for admissibility or proof.`,
      `Identify the primary evidentiary consequence or presumption.`
    ],
    tenMark: [
      `Introduction: Legislative framework and objective under Chapter ${ch.num} (${ch.title}).`,
      `Detailed breakdown of statutory elements, conditions of admissibility, and exceptions.`,
      `Method of proof: Oral, documentary, or electronic records requirements.`,
      `Practical application to problem scenario and judicial assessment of probative value.`,
      `Conclusion and comparative summary.`
    ],
    sixteenMark: [
      `Doctrinal and philosophical foundations: The law of evidence as an instrument of truth and constitutional fair trial under Articles 20 and 21.`,
      `Exhaustive statutory analysis of BSA s. ${secNum}, its sub-sections, provisos, and explanations.`,
      `Evolutionary comparison: Indian Evidence Act, 1872 vs Bharatiya Sakshya Adhiniyam, 2023.`,
      `Electronic and digital evidence integration: Interplay with Sections 57, 61, 62, and 63 and the Schedule certificate.`,
      `Procedural and substantive interlocks: Alignment with BNSS trial stages and BNS penal provisions.`,
      `Structured IRAC problem-solving analysis on evidentiary admissibility and exclusion.`,
      `Judicial discretion, probative weight, and systemic conclusions.`
    ]
  };

  // Key Takeaways
  const keyTakeaways = [
    `BSA s. ${secNum} regulates ${title} within Chapter ${ch.num} (${ch.title}).`,
    `Relevancy and admissibility require strict adherence to statutory predicates and modes of proof.`,
    `Fully aligned with modern electronic, digital, and forensic standards under the 2023 Adhiniyam.`,
    `Proceedings initiated prior to 1 July 2024 remain governed by the savings clause in Section 170(2).`
  ];

  return {
    version: '1.0.0',
    status: 'in-progress',
    caseLaw: [],
    authoritativeSources: [
      `Bharatiya Sakshya Adhiniyam, 2023 (Act No. 47 of 2023), Chapter ${ch.num}: ${ch.title}, s. ${secNum}`,
      'Law Commission of India Reports on Law of Evidence & Parliamentary Standing Committee on Criminal Law Reforms',
      'Bharatiya Nyaya Sanhita, 2023 & Bharatiya Nagarik Suraksha Sanhita, 2023 (Evidentiary-Substantive-Procedural Linkages)'
    ],
    verification: {
      lastVerifiedAt: null,
      verifiedBy: null,
      notes: [
        'In-progress evidentiary student enhancement. Statutory paraphrase follows the migrated topic text.',
        'Not marked verified or published. Confirm current official text and High Court Rules before reliance.',
        'No case name, citation or ratio is added in this batch.'
      ]
    },
    learningObjectives,
    definition,
    legalPrinciple,
    statutoryFramework,
    essentialIngredients,
    detailedExplanation,
    examples,
    distinctions,
    problemApplication,
    examAnswerStructure,
    keyTakeaways
  };
}

let modifiedCount = 0;
for (let i = 1; i <= 170; i++) {
  const filePath = path.join(bsaDir, `s-${i}.json`);
  if (!fs.existsSync(filePath)) {
    console.error(`Missing file: s-${i}.json`);
    continue;
  }
  const entity = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const enhancement = generateEnhancement(i, entity);
  entity.content.enhancement = enhancement;
  fs.writeFileSync(filePath, JSON.stringify(entity, null, 2) + '\n', 'utf8');
  modifiedCount++;
}

console.log(`Successfully enhanced ${modifiedCount} BSA section files (s-1.json to s-170.json).`);
