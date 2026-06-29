/* ============================================================================
   isc2 cc  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ format definitions,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the textbook-dense domain reading content (ISC2CC.reading[1..5],
   appended from the lazy-loaded content/domainN.js modules).

   This file loads first and establishes the global ISC2CC namespace consumed
   by quizEngine.js and app.js.

   Authored by Professor Rizwan Virani, San Jacinto College.
   ========================================================================== */
window.ISC2CC = window.ISC2CC || {};

ISC2CC.exam = {
  code: "CC",
  name: "ISC2 Certified in Cybersecurity",
  minutes: 120,
  maxQuestions: 100,
  scaleLow: 100, scaleHigh: 1000, passing: 700,
  domains: 5,
  launched: "2022",
  retiredPredecessor: null
};

/* Per-domain metadata. `weight` mirrors the official ISC2 CC exam outline
   domain percentages; `objectives` mirror the published CC objective numbering;
   `sectionCount` is the number of dense reading sections in content/domainN.js,
   themselves mapped to the 23-chapter official syllabus. */
ISC2CC.domainMeta = [
  { id: 1, weight: 26, color: "d1", icon: "🛡", title: "Security Principles", sectionCount: 18,
    short: "The vocabulary of the field: the CIA triad and non-repudiation, authentication and AAA, privacy frameworks, the risk-management process, the categories of security controls, the ISC2 Code of Ethics, and security governance.",
    objectives: [
      { id: "1.1", t: "Understand the security concepts of information assurance" },
      { id: "1.2", t: "Understand the risk management process" },
      { id: "1.3", t: "Understand security controls" },
      { id: "1.4", t: "Understand the ISC2 Code of Ethics" },
      { id: "1.5", t: "Understand governance processes" }
    ] },
  { id: 2, weight: 10, color: "d2", icon: "🔄", title: "Business Continuity, Disaster Recovery & Incident Response", sectionCount: 11,
    short: "Keeping the organization running and recovering when things break: business continuity planning, high availability and fault tolerance, disaster recovery sites and backups, and the incident-response lifecycle from team to communications to containment.",
    objectives: [
      { id: "2.1", t: "Understand business continuity (BC)" },
      { id: "2.2", t: "Understand disaster recovery (DR)" },
      { id: "2.3", t: "Understand incident response" }
    ] },
  { id: 3, weight: 22, color: "d3", icon: "🚪", title: "Access Controls Concepts", sectionCount: 8,
    short: "Controlling who and what may enter and act: physical facilities, secure design, visitor management and security personnel, plus logical authorization, account types, the principle of least privilege, and enforcing non-repudiation.",
    objectives: [
      { id: "3.1", t: "Understand physical access controls" },
      { id: "3.2", t: "Understand logical access controls" }
    ] },
  { id: 4, weight: 24, color: "d4", icon: "📡", title: "Network Security", sectionCount: 26,
    short: "How networks work and how they are defended: TCP/IP and IP addressing, ports and Wi-Fi, malware and network attacks, antivirus, IDS/IPS and firewalls, network zones and segmentation, VPNs and NAC, IoT, and cloud computing with the shared responsibility model.",
    objectives: [
      { id: "4.1", t: "Understand computer networking" },
      { id: "4.2", t: "Understand network (cyber) threats and attacks" },
      { id: "4.3", t: "Understand network security infrastructure" }
    ] },
  { id: 5, weight: 18, color: "d5", icon: "⚙", title: "Security Operations", sectionCount: 18,
    short: "The day-to-day work of defense: encryption, hashing and cryptographic uses, the data life cycle and classification, logging and monitoring, configuration management, the core best-practice security policies, and security awareness training.",
    objectives: [
      { id: "5.1", t: "Understand data security" },
      { id: "5.2", t: "Understand system hardening" },
      { id: "5.3", t: "Understand best practice security policies" },
      { id: "5.4", t: "Understand security awareness training" }
    ] }
];

/* The five PBQ formats. `domainColor` just drives the badge tint. Reframed for
   the entry-level ISC2 CC scope. */
ISC2CC.pbqFormats = [
  { id: 1, icon: "🚪", domainColor: 3, obj: "3.2 / 3.1", badge: "ACCESS CONTROL", title: "Access Control & Authorization Matrix",
    desc: "Apply least privilege to an authorization matrix — assign account types, decide allow/deny on subject-object pairs, and separate privileged from standard access.",
    long: "Each scenario gives you a list of subjects (users, roles, service accounts) and objects (files, systems, doors). Configure access the right way: pick the correct <b>account type</b>, enforce <b>least privilege</b> and <b>separation of duties</b>, and decide <b>allow</b> or <b>deny</b> for each pairing so that no identity has more access than its job requires." },
  { id: 2, icon: "🚨", domainColor: 2, obj: "2.3", badge: "INCIDENT RESPONSE", title: "Incident Response & Log Triage",
    desc: "Read server, authentication, and security logs, identify the event type, set the incident severity, and order the correct incident-response lifecycle steps.",
    long: "You are the on-call analyst. Read the exhibit, then declare the <b>event type</b>, the <b>severity</b>, and the correct <b>containment and recovery</b> actions — isolating a host, disabling an account, restoring from backup — in line with the four-phase incident-response lifecycle of preparation, detection &amp; analysis, containment/eradication/recovery, and post-incident activity." },
  { id: 3, icon: "🎣", domainColor: 5, obj: "5.4 / 4.2", badge: "SOCIAL ENGINEERING", title: "Social Engineering & Phishing Analysis",
    desc: "Inspect an email or scenario, spot the social-engineering tactic (phishing, pretexting, tailgating), flag look-alike domains and urgency cues, and choose the right response.",
    long: "Awareness in action. Read the message or scenario exhibit: identify the <b>social-engineering technique</b> in play, flag <b>look-alike domains</b>, suspicious links, and manipulation cues such as urgency or authority, then choose the user action that matches policy — report, delete, verify out-of-band, or escalate." },
  { id: 4, icon: "🔐", domainColor: 5, obj: "5.1", badge: "CRYPTOGRAPHY", title: "Encryption & Hashing Selection",
    desc: "Match the right cryptographic tool to a requirement: symmetric vs. asymmetric encryption, hashing for integrity, and protecting data at rest versus data in transit.",
    long: "Engineer the cryptographic solution at CC depth. For each requirement — protecting data at rest, protecting data in transit, verifying integrity, or supporting non-repudiation — select the correct primitive: <b>symmetric</b> encryption (AES), <b>asymmetric</b> encryption (RSA/ECC), or a <b>hash function</b> (SHA-256), and justify why it fits." },
  { id: 5, icon: "🗺", domainColor: 4, obj: "4.3 / 4.1", badge: "NETWORK DEFENSE", title: "Network Topology & Control Placement",
    desc: "Place controls — firewall, IDS/IPS, DMZ, VPN concentrator, NAC, segmentation — into the correct network zones to satisfy a defense-in-depth requirement.",
    long: "A placement workspace. For each position in a small enterprise topology, choose the control that belongs there — <b>firewall</b>, <b>IDS/IPS</b>, <b>DMZ</b> placement, <b>VPN</b> concentrator, <b>NAC</b>, or a <b>segmentation</b> boundary — to satisfy network security zoning and defense-in-depth across the corporate LAN, the DMZ, and remote access." }
];

/* Curated free study resources for the ISC2 CC. */
ISC2CC.resources = [
  { icon: "🎓", title: "ISC2 — Free CC Online Self-Paced Training", host: "isc2.org",
    url: "https://www.isc2.org/certifications/cc",
    desc: "Through the One Million Certified in Cybersecurity program, ISC2 has offered free self-paced training and a free exam voucher for the CC. The official course covers all five domains and is the authoritative source for the exam outline." },
  { icon: "📄", title: "Official ISC2 CC Exam Outline (PDF)", host: "isc2.org",
    url: "https://www.isc2.org/certifications/cc",
    desc: "The authoritative blueprint — every domain, objective, and sub-bullet ISC2 can test, with the official domain weightings. Download it from the certification page and use it as your master checklist." },
  { icon: "🎥", title: "Free CC Video Courses (YouTube)", host: "youtube.com",
    url: "https://www.youtube.com/results?search_query=ISC2+Certified+in+Cybersecurity+CC+full+course",
    desc: "Several instructors publish complete, free CC walkthroughs covering all five domains. Pair a video course with this platform's reading and quizzes for active recall." },
  { icon: "👥", title: "r/ISC2 — Community & Study Threads", host: "reddit.com/r/ISC2",
    url: "https://www.reddit.com/r/ISC2/",
    desc: "Crowd-sourced study plans, exam-day experiences, and 'passed CC' write-ups. Read recent posts for current question-style intel and pacing advice." },
  { icon: "📚", title: "NIST Glossary & Publications (CSRC)", host: "csrc.nist.gov",
    url: "https://csrc.nist.gov/glossary",
    desc: "When a definition has to be exact, NIST is the source. The CSRC glossary and SP 800-series (e.g., 800-61 incident response, 800-34 contingency planning, 800-53 controls) underpin much of the CC vocabulary." },
  { icon: "🧭", title: "ISC2 Code of Ethics", host: "isc2.org",
    url: "https://www.isc2.org/ethics",
    desc: "Domain 1 explicitly tests the ISC2 Code of Ethics. Read the Preamble and the four Canons in order — the order is the tie-breaker the exam wants you to apply." }
];

/* ---- Reader: Exam Mechanics card ---- */
ISC2CC.examMechanics = [
  { heading: "Format, length, and delivery", body:
    "<p>The <strong>ISC2 Certified in Cybersecurity (CC)</strong> exam is a single linear form of <strong>100 multiple-choice questions</strong> to be completed in <strong>120 minutes</strong>. It is delivered at a <strong>Pearson VUE</strong> testing center or via online remote proctoring. Unlike the CISSP, the CC is <em>not</em> a computerized adaptive test (CAT): every candidate answers a fixed 100 questions, you can move back and forth, and you may flag items for review and change answers until you submit.</p>" +
    "<p>Every scored item is a standard <strong>multiple-choice</strong> question with four options and a single best answer; there are no drag-and-drop or simulation items on the live CC exam. Some questions on your form are unscored <strong>pretest</strong> items ISC2 is evaluating for future use, and you cannot tell which — so treat all 100 as if they count. The performance-based simulators in this platform are <em>practice scaffolding</em> we add to deepen your skills; they are not a feature of the real exam.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>You have <strong>120 minutes for 100 questions</strong> — roughly 72 seconds each, which is comfortable. The CC is a knowledge-and-judgment test, not a speed test. <strong>Flag-and-review</strong> still wins: answer what you know cold, flag the rest, and return with your remaining time.</div>" },
  { heading: "Scoring: the 100–1000 scale", body:
    "<p>The CC is scored on a <strong>scaled range of 100 to 1000</strong>, and the passing score is <strong>700</strong>. Scaled scoring is not a simple percentage: ISC2 weights items by difficulty and equates across exam forms so that no candidate is advantaged or disadvantaged by drawing a harder set. As a result you cannot reverse-engineer an exact 'number correct' from 700, and ISC2 does not publish the raw-to-scaled mapping.</p>" +
    "<p>Practically, candidates should aim to answer roughly <strong>75% or more</strong> of questions correctly to give themselves comfortable margin against form difficulty. There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so you should never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 100–1000 band. Use it as a <em>relative</em> readiness signal — 'am I trending toward 700?' — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Question styles and how to read them", body:
    "<p>ISC2 writes 'best answer' questions. Often two or three options are <em>plausible</em> and only one is <em>best</em> for the scenario described. Read the <strong>last sentence first</strong> — it usually contains the actual ask ('which control <em>best</em> mitigates…', 'what should be done <em>first</em>…'). Words like <strong>first</strong>, <strong>best</strong>, <strong>most</strong>, and <strong>least</strong> are decisive; circle them mentally.</p>" +
    "<ul><li><strong>Definitional</strong> items reward precise vocabulary — know the exact difference between a policy, a standard, a procedure, and a guideline, or between a threat, a vulnerability, and a risk.</li><li><strong>Scenario</strong> items bury the relevant detail in a short paragraph — identify the asset, the threat, and the constraint before looking at options.</li><li><strong>Ethics</strong> items expect you to apply the four ISC2 Canons <em>in their published order</em> as a tie-breaker.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow. First pass: answer everything you know cold and flag the rest. Second pass: spend remaining minutes only on flagged items. This guarantees you never run out of time with easy points unanswered.</div>" },
  { heading: "Eligibility, cost, and the endorsement step", body:
    "<p>The CC is explicitly designed for <strong>newcomers</strong>: there are <strong>no work-experience prerequisites</strong> to sit the exam — you only need to be at least 16 years old. This is the headline difference from ISC2's experience-gated certifications like the SSCP and CISSP. The exam fee is in the <strong>US$199</strong> range, though ISC2's <strong>One Million Certified in Cybersecurity</strong> initiative has provided free training and a free exam voucher to many candidates.</p>" +
    "<p>Passing the exam is not the final step. You must then complete <strong>endorsement</strong>: agree to the ISC2 Code of Ethics and have an existing ISC2-certified professional (or ISC2 itself) attest to you, generally within <strong>nine months</strong> of passing. After certification you pay an <strong>Annual Maintenance Fee (AMF)</strong> of roughly US$50 and earn <strong>Continuing Professional Education (CPE)</strong> credits — 45 over the three-year cycle — to keep the credential active.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>Budget and plan for the <strong>endorsement and AMF</strong> up front. A passed exam that is never endorsed does not become an active certification, and an active cert that lapses on CPE or AMF must be reinstated.</div>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring you must show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the acronyms you'll otherwise lose under pressure (think the four Canons in order, RTO/RPO/MTD, or the IR lifecycle phases).</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Arrive early, breathe, and remember: the CC tests <strong>foundational judgment</strong>, not deep trivia. Most questions are answerable by applying core principles — least privilege, defense in depth, CIA, and the risk-management process — to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
ISC2CC.careerGuidance = [
  { heading: "Where the CC sits on the ladder", body:
    "<p><strong>Certified in Cybersecurity is ISC2's entry-level, foundational credential.</strong> It is built to be the <em>first</em> security certification a person earns — often before they hold any cybersecurity job at all. It sits below ISC2's experience-gated certifications: the <strong>SSCP</strong> (Systems Security Certified Practitioner) for hands-on operations roles, and the flagship <strong>CISSP</strong> for experienced security leaders. Its value is breadth and signalling: it proves you understand core security vocabulary and principles across all five domains.</p>" +
    "<p>For hiring managers, the CC on a résumé is shorthand for 'this person has made a serious, structured start and understands security fundamentals.' It is frequently a <em>preferred</em> qualification for help-desk, junior analyst, and IT-support roles that are pipelines into security.</p>" },
  { heading: "Who the CC is for", body:
    "<p>The CC is aimed squarely at people <strong>breaking into the field</strong>: students, recent graduates, career changers, and IT generalists (help desk, desktop support, junior sysadmins) who want to pivot toward security. Because there is <strong>no experience requirement</strong> to sit the exam, it removes the classic catch-22 where every security role wants experience you cannot get without a security role.</p>" +
    "<p>It is also a sensible first step for non-technical professionals — project managers, auditors, compliance staff, or sales engineers — who need credible cybersecurity literacy to work alongside technical teams. The exam rewards understanding concepts and judgment over command-line skill, which makes it accessible without dumbing down the material.</p>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>The CC's no-experience entry point is its defining feature. It is the credential designed to get you <strong>past the first filter</strong> for entry-level cybersecurity and IT roles.</div>" },
  { heading: "Roles the CC supports", body:
    "<p>The CC aligns with a cluster of entry-level roles. It will not, by itself, make you a senior engineer — but it credibly supports your candidacy for:</p>" +
    "<ul>" +
    "<li><strong>Junior / Tier 1 SOC Analyst</strong> — triaging alerts and escalating incidents. Domain 4 (Network Security) and Domain 2 (incident response) map directly to this work.</li>" +
    "<li><strong>Help Desk / IT Support moving into security</strong> — the CC is a common springboard out of pure support work.</li>" +
    "<li><strong>Junior Systems / Network Administrator</strong> — applying least privilege, hardening, and basic network defense.</li>" +
    "<li><strong>Security / GRC Assistant (entry)</strong> — Domain 1 governance, risk, and ethics content underpins these roles.</li>" +
    "<li><strong>Technical Support / Cybersecurity Intern</strong> — demonstrating foundational literacy across all five domains.</li>" +
    "</ul>" },
  { heading: "Building the path beyond the CC", body:
    "<p>Treat the CC as a launch point, not a destination. A common trajectory: <em>CC → hands-on help-desk or SOC experience → SSCP → a specialization → CISSP</em>. Once you accumulate the required work experience, ISC2's <strong>SSCP</strong> is the natural next operations-focused step, and the <strong>CISSP</strong> becomes the long-term leadership goal (it requires five years of experience). Defensive-minded learners often add <strong>CompTIA Security+</strong> or <strong>CySA+</strong>; cloud-bound learners pursue cloud-security credentials.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>demonstrable hands-on skill</strong> — a home lab, a SOC simulator, CTF challenges, or documented projects. Certifications get you past résumé filters; practical evidence gets you through interviews.</div>" }
];

/* Reading content is NOT bundled here. Each domain's dense reading sections live
   in their own module under assets/js/content/domainN.js and are fetched on
   demand by app.js the first time a Domain Study card is opened. This object is
   the shared target those modules populate: ISC2CC.reading[N] = [ ...sections ]. */
ISC2CC.reading = ISC2CC.reading || {};

/* Flashcard decks are likewise lazy-loaded from assets/js/content/flashN.js
   (100 cards per domain) and populate this object: ISC2CC.flash[N] = [ ...cards ]. */
ISC2CC.flash = ISC2CC.flash || {};
