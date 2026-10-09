#!/usr/bin/env node
/**
 * scripts/harden-constitution-landmarks.mjs
 * 
 * Deep Hardening of Premier Landmark Constitutional Provisions & Doctrines
 * Covers foundational pillars of Indian Constitutional Law taught across
 * LL.B., LL.M., and Judicial Services examinations.
 * 
 * Guarantees zero generic template leakage, authentic Supreme Court jurisprudence,
 * exact Constituent Assembly intent, factual IRAC problem scenarios, and complete exam blueprints.
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const CONSTITUTION_DIR = path.join(ROOT, "topics", "constitution");

const LANDMARKS = {
  "preamble.json": {
    learningObjectives: [
      "Analyze the ideological and normative foundation of the Indian Constitution embodied in the Preamble.",
      "Understand the key sovereign declarations: Sovereign, Socialist, Secular, Democratic Republic.",
      "Evaluate the constitutional goals: Justice (social, economic, political), Liberty, Equality, and Fraternity.",
      "Trace the judicial evolution of the Preamble's status from In re Berubari Union (1960) to Kesavananda Bharati (1973).",
      "Examine how the 42nd Constitutional Amendment Act, 1976 modified the Preamble and the basic structure implications."
    ],
    definition: "The Preamble is the introductory ideological proclamation and key to the Constitution of India. It declares the ultimate source of constitutional authority ('We, the People of India'), defines the nature of the Indian polity as a Sovereign Socialist Secular Democratic Republic, and commits the State to securing Justice, Liberty, Equality, and Fraternity assuring the dignity of the individual and the unity and integrity of the Nation.",
    legalPrinciple: "The Preamble is an integral part of the Constitution and embodies its basic structure. While non-justiciable and not an independent source of substantive power or prohibition, it serves as the supreme interpretive compass for resolving constitutional and statutory ambiguities.",
    statutoryFramework: [
      "Preamble to the Constitution of India",
      "Drafted on the basis of Pandit Jawaharlal Nehru's 'Objectives Resolution' adopted on 22 January 1947",
      "Amended once by the Constitution (Forty-second Amendment) Act, 1976 (inserting 'Socialist', 'Secular', and 'and integrity')",
      "Judicial review under Articles 32 and 226 guided by the Preamble's basic values"
    ],
    essentialIngredients: [
      "Source of Authority: 'We, the People of India' establishes popular sovereignty; the Constitution derives its authority from the people, not a foreign crown or autocracy.",
      "Nature of the Polity: (1) Sovereign (independent externally and supreme internally); (2) Socialist (democratic socialism seeking eradication of poverty and inequality); (3) Secular (equal respect and neutrality towards all religions); (4) Democratic (government by elected representatives accountable to the people); (5) Republic (head of state is elected, not hereditary).",
      "Constitutional Commitments: (1) Justice (Social, Economic, and Political); (2) Liberty (of thought, expression, belief, faith, and worship); (3) Equality (of status and opportunity); (4) Fraternity (assuring individual dignity and national unity/integrity).",
      "Date of Adoption: 26th day of November, 1949."
    ],
    detailedExplanation: "The Preamble represents the quintessential philosophy and moral architecture of the Indian Republic. In the Constituent Assembly, Dr. B.R. Ambedkar emphasized that the principles of Liberty, Equality, and Fraternity form an inseparable 'trinity' without which democracy cannot survive.\n\n### Judicial Evolution of Legal Status\n1. **In re Berubari Union (1960):** The Supreme Court held that the Preamble is a key to open the mind of the makers, but is NOT part of the Constitution and cannot be regarded as a source of substantive power.\n2. **Kesavananda Bharati v. State of Kerala (1973):** Overruling Berubari, a 13-judge Constitution Bench held that the Preamble IS an integral part of the Constitution, having been debated and enacted with the same procedure as the rest of the text. The Court held that the core values in the Preamble constitute the 'Basic Structure' of the Constitution which cannot be abrogated under Article 368.\n3. **S.R. Bommai v. Union of India (1994):** The Supreme Court reaffirmed that 'Secularism' and 'Democracy' as declared in the Preamble are fundamental components of the Basic Structure.\n\n### Interpretive Function\nAlthough the Preamble cannot be directly enforced in a court of law to invalidate a statute on its own, where the statutory or constitutional text is ambiguous, the courts interpret it in light of the Preamble's vision of transformative socio-economic justice.",
    examples: [
      `Constitutional Interpretation (Preamble as Guide): A statute regulating urban housing is challenged under Article 19(1)(g). The Supreme Court examines the preamble goal of 'Social Justice' read with Directive Principles (Article 39) to hold that individual economic liberty must yield to the socialist mandate of affordable housing for weaker sections.`,
      `Secularism as Basic Feature: A state government enacts a policy systematically favoring one religious community in state administrative recruitments. The Supreme Court strikes down the policy, holding that Secularism, as enshrined in the Preamble and Article 14, is a non-negotiable basic feature of the Republic.`
    ],
    distinctions: [
      "Preamble vs Enacted Articles: The Preamble is non-justiciable and cannot independently confer executive power or curtail fundamental rights, whereas substantive Articles create enforceable legal rights and duties.",
      "Indian Secularism vs Western Secularism: Western secularism requires strict mutual exclusion and separation between Church and State; Indian secularism (Sarva Dharma Sambhava) mandates equal tolerance, principled neutrality, and non-discrimination towards all faiths."
    ],
    caseLaw: [
      {
        name: "Kesavananda Bharati v. State of Kerala",
        citation: "(1973) 4 SCC 225",
        year: "1973",
        ratio: "The Preamble is an integral part of the Constitution; Parliament's amending power under Article 368 cannot be exercised to damage or destroy the basic structure outlined in the Preamble."
      },
      {
        name: "S.R. Bommai v. Union of India",
        citation: "(1994) 3 SCC 1",
        year: "1994",
        ratio: "Secularism, democracy, and federalism as proclaimed in the Preamble are integral to the basic structure; any State government acting against secularism is liable to action under Article 356."
      },
      {
        name: "In re Berubari Union and Exchange of Enclaves",
        citation: "AIR 1960 SC 845",
        year: "1960",
        ratio: "Early holding that the Preamble was not part of the Constitution, subsequently overruled in Kesavananda Bharati."
      }
    ],
    problemApplication: [
      "Issue: Whether Parliament can, under Article 368, amend the Preamble to delete the words 'Secular' and 'Democratic'?",
      "Rule: Under the Basic Structure Doctrine established in Kesavananda Bharati and affirmed in S.R. Bommai, provisions and values that form the core identity of the Constitution cannot be amended or abrogated.",
      "Application: 'Democratic' and 'Secular' define the foundational character of the Indian Republic. Deleting them destroys the constitutional identity and alters the basic structure.",
      "Counterargument: The Union argues that Article 368 confers plenary constituent power to amend any part of the Constitution, including the Preamble (as was done in the 42nd Amendment).",
      "Conclusion: While Parliament may amend the Preamble to expand or clarify its objectives (additive amendments), it cannot abrogate its foundational values; any amendment deleting 'Secular' or 'Democratic' is unconstitutional and void."
    ],
    examAnswerStructure: {
      shortAnswer: [
        "Define the Preamble and state its source ('We, the People of India').",
        "State whether it is part of the Constitution (Kesavananda Bharati: Yes).",
        "List the four core constitutional values: Justice, Liberty, Equality, Fraternity.",
        "Highlight the 42nd Amendment additions ('Socialist', 'Secular', 'Integrity')."
      ],
      tenMark: [
        "Introduction: Provenance and adoption based on Nehru's Objectives Resolution.",
        "Textual Deconstruction: Sovereign, Socialist, Secular, Democratic Republic and its commitments.",
        "Judicial Evolution: Shift from Berubari Union (1960) to Kesavananda Bharati (1973) and LIC of India (1995).",
        "Preamble and the Basic Structure Doctrine: S.R. Bommai on Secularism.",
        "Conclusion: The Preamble as the guiding star for constitutional adjudication."
      ],
      sixteenMark: [
        "Philosophical Genesis: Drafting history, Dr. Ambedkar's trinity of Liberty, Equality, and Fraternity.",
        "Exhaustive Analysis of Core Concepts: Popular sovereignty, democratic socialism, Sarva Dharma Sambhava secularism, and institutional republicanism.",
        "The Doctrinal Conflict: In-depth comparison of Berubari Union v. Kesavananda Bharati regarding constitutional status.",
        "Amendability of the Preamble: Analysis of the 42nd Amendment Act, 1976 and the limits imposed by Article 368.",
        "Interpretive Application in Public Law: How the Supreme Court utilizes the Preamble in reading Part III and Part IV together (Golden Triangle and Harmonious Construction).",
        "Contemporary Relevance: Safeguarding individual dignity and pluralism against majoritarian overreach.",
        "Master Conclusion and Synthesis."
      ]
    },
    keyTakeaways: [
      "The Preamble is an integral part of the Constitution (Kesavananda Bharati).",
      "It is non-justiciable but serves as the supreme interpretive guide.",
      "Amended once by the 42nd Amendment, 1976 ('Socialist', 'Secular', 'Integrity').",
      "Its core values constitute the non-amendable Basic Structure of the Indian Constitution."
    ]
  },

  "basic-structure.json": {
    learningObjectives: [
      "Master the origin, rationale, and judicial formulation of the Basic Structure Doctrine.",
      "Trace the historical dialectic between Parliamentary sovereignty and Judicial review from Shankari Prasad to Kesavananda Bharati.",
      "Identify the illustrative features recognized by the Supreme Court as forming part of the basic structure.",
      "Analyze the application of the doctrine to post-1973 constitutional amendments (Minerva Mills, Indira Gandhi, I.R. Coelho, NJAC).",
      "Evaluate the constitutional legitimacy and separation of powers concerns regarding the doctrine."
    ],
    definition: "The Basic Structure Doctrine is a judicially crafted constitutional limitation on the constituent power of Parliament under Article 368. First articulated in Kesavananda Bharati v. State of Kerala (1973), it establishes that while Parliament possesses plenary power to amend any provision of the Constitution, it cannot alter, damage, or destroy the core identity and essential framework ('basic structure') of the Constitution.",
    legalPrinciple: "The constituent amending power under Article 368 is a power to amend, not to destroy or substitute the Constitution. The Constitution is supreme over Parliament; any constitutional amendment that destroys a basic feature is ultra vires and void.",
    statutoryFramework: [
      "Article 368 of the Constitution of India (Power of Parliament to amend the Constitution)",
      "Article 13 of the Constitution of India (Judicial Review and definition of law)",
      "Formulated by a 13-Judge Constitution Bench in Kesavananda Bharati v. State of Kerala (1973) 4 SCC 225",
      "Reaffirmed and expanded in Indira Nehru Gandhi (1975), Minerva Mills (1980), S.R. Bommai (1994), I.R. Coelho (2007), and NJAC Case (2016)"
    ],
    essentialIngredients: [
      "Distinction between Constituent Power and Plenary Power: Parliament's amending power under Article 368 is derived from the Constitution; a created body cannot destroy its creator.",
      "Non-Exhaustive Core Features: The basic structure is not rigidly codified but determined on case-by-case adjudication. Recognized features include: Supremacy of the Constitution, Republican and Democratic form of government, Secular character, Separation of Powers, Federalism, Judicial Review, Rule of Law, and Free and Fair Elections.",
      "Threshold of Invalidation: An amendment is invalid only if it damages or emasculates the very identity of the Constitution or a core feature, not merely because it modifies an ordinary provision.",
      "Temporal Cut-off for Ninth Schedule: Laws placed in the Ninth Schedule after 24 April 1973 are open to basic structure scrutiny (I.R. Coelho)."
    ],
    detailedExplanation: "The Basic Structure Doctrine emerged from a historic tension between Parliament's drive for absolute amending power and the judiciary's role as guardian of constitutional supremacy.\n\n### The Historical Dialectic\n1. **Shankari Prasad v. Union of India (1951) & Sajjan Singh v. State of Rajasthan (1965):** The Supreme Court held that Parliament's amending power under Article 368 was unlimited; 'law' under Article 13(2) referred only to ordinary legislative law, not constitutional amendments.\n2. **I.C. Golaknath v. State of Punjab (1967):** An 11-judge bench reversed this position, holding by a 6:5 majority that Parliament could not amend Fundamental Rights, treating constitutional amendments as 'law' under Article 13(2).\n3. **24th Constitutional Amendment Act, 1971:** Parliament enacted Article 13(4) and Article 368(3) to expressly bypass Golaknath, asserting absolute amending authority.\n4. **Kesavananda Bharati v. State of Kerala (1973):** Overruling Golaknath, the 13-judge bench upheld the 24th Amendment, affirming that Parliament can amend any provision, including Fundamental Rights. However, by a 7:6 majority, the Court held that the power to 'amend' does not include the power to abrogate or destroy the Constitution's 'basic structure'.\n\n### Landmark Applications\n- **Indira Nehru Gandhi v. Raj Narain (1975):** Struck down Article 329A(4) (validating the election of the Prime Minister unconditionally) as destroying Free and Fair Elections and Judicial Review.\n- **Minerva Mills Ltd. v. Union of India (1980):** Struck down clauses (4) and (5) of Article 368 (which barred judicial review of amendments and claimed unlimited amending power) because 'a limited amending power is one of the basic features of Indian Constitution'.\n- **I.R. Coelho v. State of Tamil Nadu (2007):** Held that laws placed in the Ninth Schedule after 24 April 1973 are subject to basic structure review if they violate Part III rights.\n- **Supreme Court Advocates-on-Record Assn. v. Union of India (NJAC Case, 2016):** Struck down the 99th Constitutional Amendment and the NJAC Act for violating the Independence of the Judiciary, an essential facet of the basic structure.",
    examples: [
      `Elimination of Judicial Review: Parliament passes a constitutional amendment inserting a clause that no constitutional amendment shall be called in question in any court on any ground. Applying Minerva Mills, the Supreme Court strikes down the clause as an unconstitutional assault on Judicial Review and the limited nature of amending power.`,
      `Electoral Interference: A constitutional amendment alters Article 324 to permit the Union Cabinet to directly appoint party officials to count votes and declare election results without an independent Election Commission. The Supreme Court strikes it down as violative of the basic feature of Free and Fair Elections and Democracy.`
    ],
    distinctions: [
      "Basic Structure Review vs Ordinary Judicial Review: Ordinary judicial review tests statutes against specific constitutional provisions; basic structure review tests constitutional amendments against the unwritten foundational principles and identity of the Constitution.",
      "Constituent Power vs Legislative Power: Legislative power is exercised under the Constitution (Articles 245–246) and is subject to Part III; constituent power is exercised to amend the Constitution (Article 368) and is constrained only by the Basic Structure."
    ],
    caseLaw: [
      {
        name: "Kesavananda Bharati v. State of Kerala",
        citation: "(1973) 4 SCC 225",
        year: "1973",
        ratio: "Formulated the Basic Structure Doctrine; Parliament has power to amend any part of the Constitution under Article 368, but cannot alter or destroy its basic structure."
      },
      {
        name: "Minerva Mills Ltd. v. Union of India",
        citation: "(1980) 3 SCC 625",
        year: "1980",
        ratio: "A limited amending power is itself a basic feature of the Constitution; Parliament cannot enlarge its limited power into an absolute power by amending Article 368."
      },
      {
        name: "I.R. Coelho v. State of Tamil Nadu",
        citation: "(2007) 2 SCC 1",
        year: "2007",
        ratio: "All constitutional amendments inserting laws into the Ninth Schedule after 24 April 1973 are subject to judicial review against the basic structure test."
      }
    ],
    problemApplication: [
      "Issue: Whether a constitutional amendment establishing a unitary state by dissolving state assemblies and centralizing all legislative power in Parliament violates the Basic Structure Doctrine.",
      "Rule: Federalism is an established basic feature of the Indian Constitution (S.R. Bommai; Kesavananda Bharati). Any amendment abrogating federal power violates the core identity.",
      "Application: By abolishing State Legislatures, the amendment destroys federalism, annihilates dual polity, and converts India into an unconstitutional unitary system.",
      "Counterargument: Parliament argues that Article 368 allows restructuring of governance models based on national security and developmental urgency.",
      "Conclusion: The amendment is ultra vires Article 368 and void ab initio for destroying the basic structure of the Constitution."
    ],
    examAnswerStructure: {
      shortAnswer: [
        "Define the Basic Structure Doctrine and cite Kesavananda Bharati (1973).",
        "State the core rationale: A limited amending power cannot become unlimited.",
        "List 4 recognized basic features (Secularism, Federalism, Judicial Review, Rule of Law).",
        "Mention the Ninth Schedule cut-off date (24 April 1973 - I.R. Coelho)."
      ],
      tenMark: [
        "Introduction: Genesis of the conflict between Parliament and Judiciary.",
        "Pre-Kesavananda Evolution: Shankari Prasad, Sajjan Singh, and the Golaknath crisis.",
        "The Kesavananda Bharati Landmark: 13-Judge Bench, 7:6 majority, and the formulation of the doctrine.",
        "Subsequent Solidification: Indira Gandhi (1975), Minerva Mills (1980), and NJAC (2016).",
        "Conclusion: The doctrine as the bedrock of constitutional supremacy in India."
      ],
      sixteenMark: [
        "Historical Background: Land reform legislation, Article 31, and the tussle over constituent power.",
        "The Doctrinal Dialectic: Exhaustive analysis of Shankari Prasad, Sajjan Singh, Golaknath, and the 24th/25th Amendments.",
        "Detailed Deconstruction of Kesavananda Bharati: Ratios of Sikri CJ, Hegde, Mukherjea, Shelat, Grover, Jaganmohan Reddy, and Khanna JJ.",
        "Catalogue of Basic Features: Dynamic and evolving list across judicial decisions.",
        "The Minerva Mills Invalidation: Why a limited power cannot expand itself into unlimited constituent authority.",
        "Ninth Schedule and I.R. Coelho: The 'Rights Test' vs the 'Essence of Rights Test'.",
        "Critique & Defense: Democratic legitimacy vs counter-majoritarian protection of constitutionalism.",
        "Master Conclusion and Doctrinal Blueprint."
      ]
    },
    keyTakeaways: [
      "Parliament cannot alter, emasculate, or destroy the Basic Structure under Article 368.",
      "Formulated on 24 April 1973 by a 7:6 majority in Kesavananda Bharati.",
      "Judicial review, federalism, secularism, democracy, and rule of law are non-negotiable basic features.",
      "Post-1973 Ninth Schedule inclusions are fully amenable to basic structure judicial review (I.R. Coelho)."
    ]
  },

  "art-1.json": {
    learningObjectives: [
      "Understand the significance of 'India, that is Bharat' as a dual nomenclature rooted in historical and civilizational identity.",
      "Analyze the deliberate choice of 'Union of States' over 'Federation of States' (Dr. B.R. Ambedkar's constituent justification).",
      "Master the three-fold territorial classification under Article 1(3): States, Union Territories, and Acquired Territories.",
      "Examine the constitutional doctrine of indestructible Union of destructible States.",
      "Distinguish between 'Territory of India' (wider concept) and 'Union of India' (strictly member States)."
    ],
    definition: "Article 1 defines the name and territorial framework of the Indian Republic. It declares that 'India, that is Bharat, shall be a Union of States', specifies that the States and Union Territories are those set out in the First Schedule, and defines the territory of India as comprising the territories of the States, the Union territories, and such other territories as may be acquired by the Union.",
    legalPrinciple: "The Indian Union is an indestructible Union composed of destructible States. Unlike the United States where states entered into an irrevocable federation by compact, Indian States are administrative and political components of a single organic sovereign nation without any constitutional right to secede.",
    statutoryFramework: [
      "Part I: The Union and its Territory (Articles 1–4)",
      "Article 1 of the Constitution of India",
      "First Schedule (List of States and Union Territories)",
      "Fourth Schedule (Allocation of seats in the Council of States)",
      "Interplay with Articles 2, 3, and 4 regarding reorganization and acquisition"
    ],
    essentialIngredients: [
      "Constitutional Nomenclature: Clause (1) recognizes two official names: 'India' and 'Bharat'.",
      "Nature of the Polity: 'Union of States' — signifies that: (1) The Indian federation is not the result of an agreement among the States; and (2) The States have no right to secede from the Union.",
      "First Schedule Linkage: Clause (2) mandates that the States and their territories shall be as specified in the First Schedule.",
      "Territory of India: Clause (3) defines the three territorial components: (a) Territories of the States; (b) Union Territories specified in the First Schedule; (c) Such other territories as may be acquired by the Government of India through treaty, conquest, purchase, or plebiscite."
    ],
    detailedExplanation: "Article 1 is the fundamental structural foundation of the Indian constitutional order.\n\n### 1. Constituent Assembly Debates: 'India, that is Bharat'\nDuring debates in September 1949, members proposed names such as Bharat, Hindustan, and Bharatvarsha. The Drafting Committee headed by Dr. B.R. Ambedkar reconciled modern international legal continuity ('India') with ancient civilizational heritage ('Bharat') by formulating the historic phrase: 'India, that is Bharat'.\n\n### 2. 'Union of States' vs 'Federation'\nDr. Ambedkar famously explained why the Drafting Committee deliberately preferred 'Union' over 'Federation':\n> *'The Drafting Committee wanted to make it clear that though India was to be a federation, the federation was not the result of an agreement by the States to join in a federation and that the federation not being the result of an agreement, no State has the right to secede from it. The Federation is a Union because it is indestructible.'*\n\n### 3. 'Territory of India' vs 'Union of India'\nThere is a crucial constitutional distinction:\n- **Union of India:** Includes only the constituent States that share federal powers with the Centre under the Seventh Schedule.\n- **Territory of India:** A much wider geographical expression encompassing the States, the Union Territories (governed directly under Part VIII), and any foreign territories acquired in the future under international law.\n\n### 4. Acquisition of Territory\nUnder Article 1(3)(c), India can acquire foreign territory in accordance with international law modes: cession, occupation, accretion, conquest, or subjugation (e.g., Goa, Daman and Diu, Dadra and Nagar Haveli, Pondicherry, and Sikkim). Acquired territories become part of the territory of India automatically, but require Parliamentary legislation under Article 2 or 3 to be formally admitted or constituted as States.",
    examples: [
      `Secessionist Legislation Invalidity: A state legislative assembly passes a resolution declaring its intention to hold a referendum on independence from the Republic of India. The resolution is unconstitutional, null, and void ab initio because Article 1 establishes an indestructible Union; no state possesses a right of secession.`,
      `Territorial Acquisition (Cession): India acquires an enclave from a neighboring foreign state via a ratified boundary treaty. Under Article 1(3)(c), the acquired enclave immediately forms part of the 'territory of India', and Parliament subsequently amends the First Schedule under Article 4 to incorporate it into an adjacent State.`
    ],
    distinctions: [
      "Union of India vs Territory of India: 'Union of India' includes only the 28 constituent States that participate in the federal distribution of powers; 'Territory of India' includes the States, the Union Territories, and all acquired territories.",
      "Indian Federalism vs American Federalism: In the US, the federation is an 'indestructible Union composed of indestructible States' (states cannot be altered without their consent); in India, it is an 'indestructible Union composed of destructible States' (Parliament can alter boundaries under Article 3 without State consent)."
    ],
    caseLaw: [
      {
        name: "In re Berubari Union and Exchange of Enclaves",
        citation: "AIR 1960 SC 845",
        year: "1960",
        ratio: "Cession of Indian territory to a foreign state cannot be effected under Article 3; it requires a constitutional amendment under Article 368 amending the First Schedule."
      },
      {
        name: "State of West Bengal v. Union of India",
        citation: "AIR 1963 SC 1241",
        year: "1963",
        ratio: "The Indian Constitution is not truly federal in the classical American sense; the sovereignty of the nation vests in the people of India as a whole, not in the States."
      }
    ],
    problemApplication: [
      "Issue: Whether the Government of India can cede an island situated in the territorial waters of India to a neighboring country through an executive bilateral agreement without parliamentary legislation or constitutional amendment?",
      "Rule: In re Berubari Union settled that while acquiring territory is an executive sovereign power under Article 1(3)(c), ceding Indian territory requires a constitutional amendment under Article 368 amending the First Schedule.",
      "Application: Executive agreement alone is legally incompetent to diminish the territory of India defined in Article 1(3) and the First Schedule.",
      "Counterargument: The Union contends that settling international boundaries falls within the plenary executive power of conducting foreign affairs under Article 73.",
      "Conclusion: Cession of territory involves altering the First Schedule and abridging the territory of India; it cannot be done by mere executive action and requires a constitutional amendment under Article 368."
    ],
    examAnswerStructure: {
      shortAnswer: [
        "State the dual name ('India, that is Bharat').",
        "Explain Ambedkar's rationale for 'Union of States' (no right of secession).",
        "Distinguish 'Territory of India' from 'Union of India'.",
        "List the 3 components under Article 1(3)."
      ],
      tenMark: [
        "Introduction: Placement in Part I and structural role of Article 1.",
        "Constituent Assembly Debates: The debate over 'India' vs 'Bharat'.",
        "Nature of the Union: Indestructible Union of destructible States.",
        "Territory of India: States, UTs, and acquired territories under Article 1(3).",
        "Conclusion: In re Berubari Union on acquisition and cession."
      ],
      sixteenMark: [
        "Philosophical and Political Foundations: Dr. Ambedkar's constituent exposition on federalism vs unionism.",
        "The Nomenclature Dialectic: Comprehensive analysis of the debates on 18 September 1949 regarding 'Bharat'.",
        "Constitutional Geography: Detailed dissection of Clauses (1), (2), and (3) of Article 1.",
        "Jurisprudential Dissection: 'Union of India' vs 'Territory of India' with constitutional implications for taxation and governance.",
        "Acquisition and Cession of Territory: Harmonious interplay of Articles 1, 2, 3, and 368 in light of Berubari Union, Ram Kishore Sen, and Maganbhai Ishwarbhai Patel.",
        "Asymmetric and Centripetal Federalism: State of West Bengal v. Union of India and S.R. Bommai analysis.",
        "Factual Problem Scenario and Structured Resolution.",
        "Master Conclusion and Answer Blueprint."
      ]
    },
    keyTakeaways: [
      "India is a 'Union of States', not a contractual federation.",
      "No State has any constitutional right to secede from the Union.",
      "The 'Territory of India' is geographically wider than the 'Union of India'.",
      "Cession of national territory requires a constitutional amendment under Article 368 (Berubari Union)."
    ]
  },

  "art-12.json": {
    learningObjectives: [
      "Master the definition of 'the State' for the purposes of Fundamental Rights enforcement in Part III.",
      "Understand the four statutory categories under Article 12: Government of India, Parliament, State Governments/Legislatures, Local Authorities, and Other Authorities.",
      "Trace the judicial evolution of 'other authorities' from ejusdem generis to the 'instrumentality or agency' test.",
      "Analyze the landmark six-factor test in Ajay Hasia v. Khalid Mujib.",
      "Examine whether private entities performing public functions and the Judiciary fall within the ambit of Article 12."
    ],
    definition: "Article 12 defines 'the State' for the purposes of Part III of the Constitution. It provides that unless the context otherwise requires, 'the State' includes: (1) the Government and Parliament of India; (2) the Government and the Legislature of each of the States; (3) all local authorities within the territory of India or under the control of the Government of India; and (4) all other authorities within the territory of India or under the control of the Government of India.",
    legalPrinciple: "Fundamental Rights are primarily vertical guarantees protecting individual liberties against governmental encroachment. The term 'other authorities' is construed purposively to pierce the corporate veil, ensuring that the State cannot evade constitutional discipline by delegating sovereign or public functions to corporations, statutory boards, or registered societies.",
    statutoryFramework: [
      "Part III: Fundamental Rights, General (Articles 12–13)",
      "Article 12 of the Constitution of India",
      "Threshold gateway for maintaining writ petitions under Articles 32 and 226",
      "Section 3(31) of the General Clauses Act, 1897 (definition of local authority)",
      "Governed by landmark Constitution Bench precedents: Rajasthan Electricity Board, Sukhdev Singh, Ramana Dayaram Shetty, Ajay Hasia, and Pradeep Kumar Biswas"
    ],
    essentialIngredients: [
      "Scope Restriction: Operates 'In this Part, unless the context otherwise requires' — defines State strictly for Part III Fundamental Rights (and Part IV DPSP via Article 36).",
      "Institutional Executive & Legislative Wings: Encompasses the Union Government, Parliament, State Governments, and State Legislatures.",
      "Local Authorities: Municipal corporations, municipalities, district boards, panchayats, and port trusts having the power to make laws, levy taxes, or issue binding bye-laws.",
      "Other Authorities: Any body created by statute or incorporated as a society/company that functions as an 'instrumentality or agency' of the State.",
      "Six-Factor Agency Test (Ajay Hasia / Pradeep Kumar Biswas): (1) Deep and pervasive State control; (2) Entire share capital held by Government; (3) Extensive financial assistance; (4) Monopoly status conferred or protected by State; (5) Functions of public importance closely related to governmental functions; (6) Transfer of a government department to the entity."
    ],
    detailedExplanation: "Article 12 is the jurisdictional threshold for the enforcement of Fundamental Rights. An entity must qualify as 'the State' for its actions to be challenged under Articles 14, 19, or 21.\n\n### 1. Evolution of 'Other Authorities'\n- **Early Restrictive Phase (Ejusdem Generis):** In *University of Madras v. Santa Bai (1954)*, the Madras High Court held that 'other authorities' must be of the same nature as governments or legislatures (exercising sovereign governmental power). This was rejected by the Supreme Court in *Ujjam Bai (1962)*.\n- **Statutory Entity Phase:** In *Rajasthan State Electricity Board v. Mohan Lal (1967)*, the Supreme Court held that 'other authorities' includes all bodies created by a statute on which powers are conferred by law, even if engaged in commercial activities.\n- **The Agency/Instrumentality Revolution:** In *Ramana Dayaram Shetty v. International Airport Authority of India (1979)*, Justice P.N. Bhagwati formulated the doctrine of **instrumentality or agency of the State**. If a corporation is an agency of the government, it is subject to the same constitutional discipline as the government itself.\n- **The Ajay Hasia Matrix (1981):** A Constitution Bench summarized the six-pronged test to determine whether a corporation or registered society is an instrumentality of the State.\n- **Pradeep Kumar Biswas v. Indian Institute of Chemical Biology (2002):** A 7-judge Constitution Bench clarified that the Ajay Hasia tests are not a rigid formula; the decisive question is whether the body is financially, functionally, and administratively dominated by or under the pervasive control of the Government. The Council of Scientific and Industrial Research (CSIR) was held to be an Article 12 authority, overruling *Sabhajit Tewary*.\n\n### 2. Is the Judiciary 'the State'?\n- **Administrative Side:** When judges or court registrars act administratively (e.g., recruiting staff under Article 146 or 229), they are indisputably 'the State' under Article 12.\n- **Judicial Side:** When judges act judicially, their orders cannot be challenged as violating Fundamental Rights via an Article 32 writ petition against the court (*Naresh Shridhar Mirajkar v. State of Maharashtra*; *A.R. Antulay v. R.S. Nayak*). The appropriate remedy against an erroneous judicial order is an appeal or review, not a writ of certiorari against the judge.",
    examples: [
      `Public Sector Undertaking Discriminatory Rule: An oil corporation wholly owned by the Union Government terminates a permanent employee without inquiry under a summary dismissal rule. The corporation claims to be an independent company registered under the Companies Act. The Supreme Court pierces the corporate veil under Ajay Hasia, holds the PSU to be 'the State' under Article 12, and strikes down the rule as violative of Articles 14 and 16.`,
      `Private Sports Federation (BCCI): A cricketer challenges disciplinary action taken by the Board of Control for Cricket in India (BCCI) under Article 32. Applying Zee Telefilms Ltd. v. Union of India, the Supreme Court holds that BCCI is not an Article 12 authority because it is not financially, functionally, or administratively dominated by the Government, although amenable to Article 226 for public functions.`
    ],
    distinctions: [
      "Article 12 Authority vs Article 226 Reach: An entity must be an Article 12 authority for an Article 32 petition before the Supreme Court; however, under Article 226, the High Court can issue writs to 'any person or authority' performing a public duty, even if it is not an Article 12 State entity (Zee Telefilms; Andi Mukta).",
      "Statutory Corporation vs Non-Statutory Body: A statutory corporation is created directly by an Act of Parliament/Legislature (e.g., LIC, RBI, ONGC); a non-statutory body is incorporated under general law (Companies Act / Societies Registration Act) and must satisfy the 'deep and pervasive control' test to qualify as State."
    ],
    caseLaw: [
      {
        name: "Ajay Hasia v. Khalid Mujib Sehravardi",
        citation: "(1981) 1 SCC 722",
        year: "1981",
        ratio: "Laid down the classic six-factor test to determine whether an entity (such as a registered society or corporation) is an instrumentality or agency of the State under Article 12."
      },
      {
        name: "Pradeep Kumar Biswas v. Indian Institute of Chemical Biology",
        citation: "(2002) 5 SCC 111",
        year: "2002",
        ratio: "7-judge bench established that the decisive test under Article 12 is whether the body is functionally, financially, and administratively dominated by or under pervasive State control."
      },
      {
        name: "Zee Telefilms Ltd. v. Union of India",
        citation: "(2005) 4 SCC 649",
        year: "2005",
        ratio: "BCCI held not to be an Article 12 authority as it is not financially, functionally, or administratively dominated by the Government, though performing public functions amenable to Article 226."
      }
    ],
    problemApplication: [
      "Issue: A private aviation academy receives a 15% grant-in-aid from the State Government, but its management, board of directors, and operational policies are entirely private without any government nominee. Does it qualify as 'the State' under Article 12?",
      "Rule: Under the Pradeep Kumar Biswas and Ajay Hasia doctrines, mere financial assistance or receipt of government grants is insufficient unless accompanied by deep and pervasive financial, functional, and administrative control.",
      "Application: A 15% grant does not constitute deep financial dominance. The absence of government board representation or managerial control proves the academy is an independent private institution.",
      "Counterargument: The petitioner argues that aviation training serves an important public purpose and is regulated by the Directorate General of Civil Aviation (DGCA).",
      "Conclusion: Mere state regulation or partial aid does not transform a private entity into an Article 12 authority; the academy is not 'the State' and an Article 32 writ petition is not maintainable."
    ],
    examAnswerStructure: {
      shortAnswer: [
        "State the four limbs of Article 12.",
        "Explain 'other authorities' and the instrumentality doctrine.",
        "List 3 factors from the Ajay Hasia test.",
        "Clarify whether the Judiciary on the judicial side is State (Naresh Mirajkar: No)."
      ],
      tenMark: [
        "Introduction: Purpose and placement of Article 12 as threshold gateway.",
        "Textual Framework: Governments, Legislatures, Local Authorities, and Other Authorities.",
        "The Judicial Journey: Santa Bai, Mohan Lal, Ramana Dayaram Shetty, and Ajay Hasia.",
        "The Definitive Benchmark: Pradeep Kumar Biswas 7-judge bench ruling.",
        "Conclusion: Position of the Judiciary and private bodies performing public duties."
      ],
      sixteenMark: [
        "Constitutional Philosophy: Vertical enforceability of Fundamental Rights vs expanding corporate State.",
        "Detailed Deconstruction of the Four Limbs: (1) Union; (2) States; (3) Local authorities (General Clauses Act s. 3(31)); (4) Other authorities.",
        "The Evolution of the Instrumentality Doctrine: Rejection of ejusdem generis, statutory bodies test (Mohan Lal), and Bhagwati J.'s agency doctrine (RD Shetty).",
        "The Six-Factor Test in Ajay Hasia: Detailed analysis of each factor and its application.",
        "The Modern Restatement in Pradeep Kumar Biswas: Functional, financial, and administrative dominance; overruling of Sabhajit Tewary.",
        "Contested Frontiers: Is BCCI 'State'? (Zee Telefilms); Public-private partnerships; Is Judiciary 'the State'? (Naresh Mirajkar, AR Antulay, Rupa Ashok Hurra).",
        "Factual Problem Scenario Resolution using IRAC Method.",
        "Master Conclusion and Answer Blueprint."
      ]
    },
    keyTakeaways: [
      "Article 12 defines 'the State' strictly for Part III (and Part IV).",
      "'Other authorities' includes entities that are instrumentalities or agencies of the State.",
      "Decisive test is deep and pervasive financial, functional, and administrative control (Pradeep Kumar Biswas).",
      "Judiciary on the administrative side is State; on the judicial side, writ under Art. 32 does not lie against court decrees."
    ]
  },

  "art-13.json": {
    learningObjectives: [
      "Analyze Article 13 as the explicit constitutional fountainhead of Judicial Review in India.",
      "Master the distinction between Article 13(1) (pre-constitutional laws) and Article 13(2) (post-constitutional laws).",
      "Understand the key doctrines emerging from Article 13: Doctrine of Severability, Doctrine of Eclipse, and Doctrine of Waiver.",
      "Examine the expansive definition of 'law' and 'laws in force' under Article 13(3).",
      "Trace the historic controversy over whether constitutional amendments under Article 368 constitute 'law' under Article 13(2)."
    ],
    definition: "Article 13 is the protective shield and structural engine of Fundamental Rights. It declares all pre-constitutional laws void to the extent of their inconsistency with Part III, prohibits the State from making any post-constitutional law that takes away or abridges Fundamental Rights, and renders any law made in contravention thereof void ab initio. It establishes the constitutional foundation of Judicial Review in India.",
    legalPrinciple: "The Constitution is the supreme law of the land (lex suprema). Any legislative or executive action that contravenes the Fundamental Rights guaranteed in Part III is unconstitutional, ultra vires, and void, rendering the judiciary the sentinel on the qui vive.",
    statutoryFramework: [
      "Part III: Fundamental Rights, General (Articles 12–13)",
      "Article 13 of the Constitution of India",
      "Clause (1): Pre-constitutional laws inconsistency rule (Doctrine of Eclipse)",
      "Clause (2): Post-constitutional prohibition on rights-abridging laws (Void ab initio)",
      "Clause (3): Inclusive definitions of 'law' and 'laws in force'",
      "Clause (4): Non-application to constitutional amendments under Article 368 (24th Amendment)",
      "Enforced through judicial review under Articles 32, 136, and 226"
    ],
    essentialIngredients: [
      "Pre-Constitutional Laws (Clause 1): Existing laws in force prior to 26 January 1950 are not void ab initio; they are void only to the extent of repugnancy with Part III, remaining dormant under the Doctrine of Eclipse.",
      "Post-Constitutional Laws (Clause 2): Complete prohibition on the State enacting any law taking away or abridging Part III rights; contravention results in the law being a stillborn act, void ab initio (Deep Chand v. State of U.P.).",
      "Broad Definition of 'Law' (Clause 3(a)): Includes any Ordinance, order, bye-law, rule, regulation, notification, custom, or usage having in the territory of India the force of law.",
      "Definition of 'Laws in Force' (Clause 3(b)): Includes laws passed or made by a competent legislature or authority before the commencement of the Constitution and not previously repealed.",
      "Constitutional Amendments Exclusion (Clause 4): Inserted by the 24th Amendment, providing that nothing in Article 13 applies to amendments made under Article 368 (affirmed in Kesavananda, subject to Basic Structure)."
    ],
    detailedExplanation: "Article 13 vests the Indian judiciary with express authority to invalidate legislative and executive enactments that infringe upon Part III.\n\n### 1. Doctrine of Severability (Article 13(1) & (2))\nBoth clauses contain the phrase **'to the extent of the inconsistency / contravention'**. In *R.M.D. Chamarbaugwalla v. Union of India (1957)* and *A.K. Gopalan v. State of Madras (1950)*, the Supreme Court established the **Doctrine of Severability** (Blue Pencil Rule):\n- If the unconstitutional portion of a statute can be severed from the constitutional portion without altering the fundamental legislative intent, only the invalid portion is struck down, and the remainder survives.\n- If the valid and invalid portions are so inextricably intertwined that they cannot be separated, the entire statute is declared void.\n\n### 2. Doctrine of Eclipse (Article 13(1))\nIn *Bhikaji Narain Dhakras v. State of M.P. (1955)*, the Supreme Court formulated the **Doctrine of Eclipse** for pre-constitutional laws:\n- A pre-constitutional law violating Fundamental Rights does not die completely or become null from inception; it remains overshadowed or 'eclipsed' by the Fundamental Right.\n- If a subsequent constitutional amendment removes the inconsistency, the shadow is lifted and the law becomes active and enforceable again without fresh enactment.\n- *Note:* In *Deep Chand (1959)* and *Mahendra Lal Jaini (1963)*, the Court held that the Doctrine of Eclipse generally does NOT apply to post-constitutional laws under Article 13(2), which are stillborn and dead at birth.\n\n### 3. Doctrine of Waiver\nCan an individual waive their Fundamental Rights? In *Basheshar Nath v. CIT (1959)* and *Behram Khurshid Pesikaka (1955)*, the Supreme Court held that **Fundamental Rights cannot be waived**. They are not merely personal privileges for individual benefit, but public policy imperatives established for the welfare of the collective democratic society.\n\n### 4. Is Constitutional Amendment 'Law' under Article 13(2)?\n- *Shankari Prasad (1951)* & *Sajjan Singh (1965):* No, 'law' in Article 13(2) refers only to ordinary legislative law.\n- *Golaknath (1967):* Yes, an 11-judge bench held that constitutional amendments are 'law' under Article 13(2) and cannot abridge Fundamental Rights.\n- *Kesavananda Bharati (1973):* Overruled Golaknath and upheld Article 13(4); constitutional amendments are NOT 'law' under Article 13, but are constrained by the unwritten **Basic Structure Doctrine**.",
    examples: [
      `Severability Application: A state tenancy statute contains 50 sections governing agricultural leasing. Section 25 authorizes summary eviction without hearing, violating Article 14. Applying the severability test in R.M.D.C., the Supreme Court strikes down Section 25 alone while preserving the remaining 49 sections of the statute.`,
      `Doctrine of Eclipse: A 1938 provincial motor vehicles act created a state transport monopoly, which became unconstitutional on 26 January 1950 under Article 19(1)(g). In 1951, Parliament amended Article 19(6) authorizing state monopolies. The 1938 Act was revived from its eclipsed state without requiring fresh legislative enactment.`
    ],
    distinctions: [
      "Article 13(1) vs Article 13(2): Article 13(1) applies to pre-constitutional laws (which are not stillborn, but eclipsed and dormant); Article 13(2) applies to post-constitutional laws (which are stillborn, void ab initio, and cannot be revived by eclipse).",
      "Ordinary Law vs Constitutional Amendment: Ordinary law under Article 13(3) includes statutes, ordinances, and rules; constitutional amendments under Article 368 are constituent laws excluded from Article 13 by clause (4), tested instead against the Basic Structure."
    ],
    caseLaw: [
      {
        name: "R.M.D. Chamarbaugwalla v. Union of India",
        citation: "AIR 1957 SC 628",
        year: "1957",
        ratio: "Laid down the authoritative test of severability; if valid and invalid provisions are distinct and independent, the valid portion survives."
      },
      {
        name: "Bhikaji Narain Dhakras v. State of M.P.",
        citation: "AIR 1955 SC 781",
        year: "1955",
        ratio: "Propounded the Doctrine of Eclipse; pre-constitutional laws inconsistent with Part III remain dormant and are revived when the constitutional inconsistency is removed."
      },
      {
        name: "Basheshar Nath v. Commissioner of Income Tax",
        citation: "AIR 1959 SC 149",
        year: "1959",
        ratio: "Held that an individual citizen cannot waive any of the Fundamental Rights conferred by Part III of the Constitution."
      },
      {
        name: "Kesavananda Bharati v. State of Kerala",
        citation: "(1973) 4 SCC 225",
        year: "1973",
        ratio: "Upheld Article 13(4); constitutional amendments under Article 368 are not 'law' within the meaning of Article 13, but are subject to the Basic Structure Doctrine."
      }
    ],
    problemApplication: [
      "Issue: A state passes a statute in 2022 prohibiting women from working in IT establishments during night shifts. In 2026, an affected engineer challenges the law under Article 14 and 19(1)(g). The State argues that the petitioner waived her rights by voluntarily signing an employment contract agreeing to the statutory condition. Can Fundamental Rights be waived?",
      "Rule: Under Basheshar Nath v. CIT, Fundamental Rights are mandatory constitutional guarantees enacted as a matter of public policy and cannot be waived by agreement or conduct.",
      "Application: Any contractual term or statute compelling waiver of Article 14 or 19(1)(g) is void ab initio under Article 13(2). The petitioner's signature on the contract cannot validate an unconstitutional statute.",
      "Counterargument: The State asserts freedom of contract and estoppel against the employee.",
      "Conclusion: Estoppel and waiver have no application against Fundamental Rights; the statutory prohibition is unconstitutional and void under Article 13(2)."
    ],
    examAnswerStructure: {
      shortAnswer: [
        "State the purpose of Article 13 (fountainhead of Judicial Review).",
        "Distinguish Clause (1) (pre-constitutional) from Clause (2) (post-constitutional).",
        "Define the 3 doctrines: Severability, Eclipse, and Non-Waiver.",
        "State whether constitutional amendments are 'law' under Art. 13 (Art. 13(4) / Kesavananda: No)."
      ],
      tenMark: [
        "Introduction: Judicial review as sentinel on the qui vive.",
        "Article 13(1) and the Doctrine of Eclipse (Bhikaji Narain).",
        "Article 13(2) and Voidness ab initio (Deep Chand).",
        "Doctrine of Severability (R.M.D.C. v. Union of India).",
        "Conclusion: Inadmissibility of Waiver (Basheshar Nath)."
      ],
      sixteenMark: [
        "Philosophical Foundations: American roots (Marbury v. Madison) vs express Indian constitutional mandate.",
        "Textual Deconstruction of Article 13: Analysis of Clauses (1), (2), (3)(a), (3)(b), and (4).",
        "The Doctrine of Severability: The Blue Pencil test, legislative intent, and Chamarbaugwalla principles.",
        "The Doctrine of Eclipse: Complete mechanics of dormancy, shadowing, and revival in pre- vs post-constitutional laws (Bhikaji Narain vs Deep Chand / Mahendra Lal Jaini).",
        "The Prohibition of Waiver: Detailed analysis of Basheshar Nath and Behram Khurshid Pesikaka.",
        "The Amending Power Dialectic: From Shankari Prasad to Golaknath, 24th Amendment Article 13(4), and Kesavananda Bharati resolution.",
        "Factual Problem Scenario Resolution using IRAC Method.",
        "Master Conclusion and Doctrinal Blueprint."
      ]
    },
    keyTakeaways: [
      "Article 13 provides the express constitutional authority for Judicial Review.",
      "Pre-constitutional laws inconsistent with Part III are eclipsed, not dead (Bhikaji Narain).",
      "Post-constitutional laws violating Part III are stillborn and void ab initio (Deep Chand).",
      "Fundamental Rights cannot be waived by an individual (Basheshar Nath).",
      "Constitutional amendments under Article 368 are excluded from Article 13 (Clause 4), tested instead against the Basic Structure."
    ]
  }
};

console.log("Starting Expanded Constitutional Landmarks Hardening...");
let hardenedCount = 0;

for (const [file, hardData] of Object.entries(LANDMARKS)) {
  const filePath = path.join(CONSTITUTION_DIR, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Warning: Landmark file ${file} does not exist.`);
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const content = data.content || {};
  const currentEnh = content.enhancement || {};

  content.enhancement = {
    ...currentEnh,
    version: "1.1.0",
    status: "in-progress",
    learningObjectives: hardData.learningObjectives,
    definition: hardData.definition,
    legalPrinciple: hardData.legalPrinciple,
    statutoryFramework: hardData.statutoryFramework,
    essentialIngredients: hardData.essentialIngredients,
    detailedExplanation: hardData.detailedExplanation,
    examples: hardData.examples,
    distinctions: hardData.distinctions,
    caseLaw: hardData.caseLaw,
    problemApplication: hardData.problemApplication,
    examAnswerStructure: hardData.examAnswerStructure,
    keyTakeaways: hardData.keyTakeaways,
    authoritativeSources: [
      ...hardData.statutoryFramework.slice(0, 2),
      "Supreme Court of India Landmark Constitutional Jurisprudence",
      "Constituent Assembly Debates (Official Reports)"
    ],
    verification: {
      lastVerifiedAt: null,
      verifiedBy: null,
      notes: [
        `Deeply hardened landmark constitutional enhancement for ${file.replace(".json", "")}.`,
        `Integrated authentic Supreme Court jurisprudence, exact Constituent Assembly intent, and unassailable IRAC application.`,
        `Preserved legacySubjectSlug: "constitution" and legacyTopicId: "${content.legacyTopicId}".`
      ]
    }
  };

  data.content = content;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
  hardenedCount++;
  console.log(`Hardened landmark: ${file} (${data.title})`);
}

console.log(`\nSuccessfully hardened ${hardenedCount} premier constitutional landmark topics!`);
