/* ============================================================================
   isc2 cc :: content/labs.js - 20 hands-on sandbox labs (5 groups). Populates window.LABS.
   ============================================================================ */
window.LABS = window.LABS || [];
window.LABS.push(
  {
    "id": "Lab 01",
    "num": 1,
    "group": "SECURITY PRINCIPLES",
    "title": "Classify Security Controls",
    "desc": "A new office is being secured and you must catalog its controls. Classify each control by category (administrative, technical, physical) and by function, then verify your understanding at the console.",
    "objectives": [
      "Distinguish administrative, technical, and physical control categories.",
      "Identify control functions such as preventive, detective, and corrective.",
      "Map real-world safeguards to the correct control types."
    ],
    "console": {
      "host": "cc-lab01",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Control classification inventory."
      ],
      "tasks": [
        {"id": "t1", "label": "Classify a security awareness training program by category"},
        {"id": "t2", "label": "Classify a firewall by category"},
        {"id": "t3", "label": "Identify the function of a CCTV system"},
        {"id": "t4", "label": "List the cataloged controls at the console"}
      ],
      "configs": [
        {"id": "c1", "label": "Security awareness training is which category of control?", "options": ["Technical", "Physical", "Administrative", "Compensating"], "correct": "Administrative", "task": "t1"},
        {"id": "c2", "label": "A network firewall is which category of control?", "options": ["Administrative", "Technical", "Physical", "Managerial"], "correct": "Technical", "task": "t2"},
        {"id": "c3", "label": "A CCTV surveillance camera primarily performs which function?", "options": ["Preventive", "Detective", "Corrective", "Compensating"], "correct": "Detective", "task": "t3"}
      ],
      "commands": [
        {"cmd": "list controls", "out": "[INV] Administrative: security awareness training\n[INV] Technical: network firewall\n[INV] Physical/Detective: CCTV surveillance\n[INV] Catalog complete.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 02",
    "num": 2,
    "group": "SECURITY PRINCIPLES",
    "title": "Apply the Risk Management Process",
    "desc": "A risk has been identified for an internet-facing server. Walk through identifying, assessing, and treating the risk, then choose the appropriate risk treatment option and record it.",
    "objectives": [
      "Order the steps of the risk management process.",
      "Calculate or reason about risk from likelihood and impact.",
      "Select an appropriate risk treatment strategy."
    ],
    "console": {
      "host": "cc-lab02",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Unpatched internet-facing web server."
      ],
      "tasks": [
        {"id": "t1", "label": "Identify the first step of the risk management process"},
        {"id": "t2", "label": "Choose treatment when buying cyber insurance"},
        {"id": "t3", "label": "Choose treatment for an accepted low risk"},
        {"id": "t4", "label": "Run the risk assessment calculation"}
      ],
      "configs": [
        {"id": "c1", "label": "What is the first step of the risk management process?", "options": ["Risk treatment", "Risk identification", "Risk monitoring", "Risk acceptance"], "correct": "Risk identification", "task": "t1"},
        {"id": "c2", "label": "Buying cyber insurance to cover potential loss is which treatment?", "options": ["Avoidance", "Mitigation", "Transference", "Acceptance"], "correct": "Transference", "task": "t2"},
        {"id": "c3", "label": "Choosing to do nothing about a minor, tolerable risk is which treatment?", "options": ["Acceptance", "Avoidance", "Transference", "Mitigation"], "correct": "Acceptance", "task": "t3"}
      ],
      "commands": [
        {"cmd": "assess risk", "out": "[RISK] Likelihood: High\n[RISK] Impact: High\n[RISK] Calculated risk level: CRITICAL\n[RISK] Recommend mitigation (patch + WAF).", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 03",
    "num": 3,
    "group": "SECURITY PRINCIPLES",
    "title": "Apply the ISC2 Code of Ethics",
    "desc": "An ethics scenario requires you to apply the ISC2 Code of Ethics canons in their correct precedence order. Identify the canons in order and resolve a conflict using canon precedence.",
    "objectives": [
      "Recall the four ISC2 Code of Ethics canons in order.",
      "Apply canon precedence to resolve a conflict.",
      "Recognize that the canons are ranked, not equal."
    ],
    "console": {
      "host": "cc-lab03",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Ethics conflict review."
      ],
      "tasks": [
        {"id": "t1", "label": "Identify the first canon"},
        {"id": "t2", "label": "Identify the second canon"},
        {"id": "t3", "label": "Apply precedence when canons conflict"},
        {"id": "t4", "label": "Print the full canon order"}
      ],
      "configs": [
        {"id": "c1", "label": "What is the FIRST canon of the ISC2 Code of Ethics?", "options": ["Act honorably, honestly, justly, responsibly, and legally", "Protect society, the common good, necessary public trust and confidence, and the infrastructure", "Provide diligent and competent service to principals", "Advance and protect the profession"], "correct": "Protect society, the common good, necessary public trust and confidence, and the infrastructure", "task": "t1"},
        {"id": "c2", "label": "What is the SECOND canon of the ISC2 Code of Ethics?", "options": ["Act honorably, honestly, justly, responsibly, and legally", "Provide diligent and competent service to principals", "Protect society and the infrastructure", "Advance and protect the profession"], "correct": "Act honorably, honestly, justly, responsibly, and legally", "task": "t2"},
        {"id": "c3", "label": "When two canons appear to conflict, how are they resolved?", "options": ["The most recent canon wins", "Canons are applied in order of appearance, earlier canons take precedence", "The member chooses freely", "All canons carry equal weight"], "correct": "Canons are applied in order of appearance, earlier canons take precedence", "task": "t3"}
      ],
      "commands": [
        {"cmd": "show canons", "out": "[ETHICS] 1) Protect society, the common good, necessary public trust and confidence, and the infrastructure.\n[ETHICS] 2) Act honorably, honestly, justly, responsibly, and legally.\n[ETHICS] 3) Provide diligent and competent service to principals.\n[ETHICS] 4) Advance and protect the profession.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 04",
    "num": 4,
    "group": "SECURITY PRINCIPLES",
    "title": "Build the Governance Document Hierarchy",
    "desc": "Your organization is drafting its governance documents. Place policies, standards, procedures, and guidelines in the correct hierarchy and distinguish mandatory from discretionary documents.",
    "objectives": [
      "Order governance documents from highest to most specific.",
      "Distinguish mandatory documents from discretionary guidance.",
      "Match document types to their definitions."
    ],
    "console": {
      "host": "cc-lab04",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Governance document drafting."
      ],
      "tasks": [
        {"id": "t1", "label": "Identify the highest-level governance document"},
        {"id": "t2", "label": "Identify the document with step-by-step instructions"},
        {"id": "t3", "label": "Identify the only discretionary document type"},
        {"id": "t4", "label": "Print the governance hierarchy"}
      ],
      "configs": [
        {"id": "c1", "label": "Which document is the highest-level, management-driven statement of intent?", "options": ["Procedure", "Standard", "Policy", "Guideline"], "correct": "Policy", "task": "t1"},
        {"id": "c2", "label": "Which document provides detailed step-by-step instructions to complete a task?", "options": ["Guideline", "Procedure", "Policy", "Standard"], "correct": "Procedure", "task": "t2"},
        {"id": "c3", "label": "Which document type is recommended (discretionary) rather than mandatory?", "options": ["Policy", "Standard", "Procedure", "Guideline"], "correct": "Guideline", "task": "t3"}
      ],
      "commands": [
        {"cmd": "show hierarchy", "out": "[GOV] Policy  -> mandatory, high-level intent\n[GOV]  Standard  -> mandatory, specific requirements\n[GOV]   Procedure -> mandatory, step-by-step tasks\n[GOV]   Guideline -> discretionary, recommended practice", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 05",
    "num": 5,
    "group": "BC / DR / INCIDENT RESPONSE",
    "title": "Set RTO/RPO and Choose a Backup Strategy",
    "desc": "A business impact analysis requires you to set recovery objectives for a critical database. Define RTO and RPO and select a backup strategy that meets the recovery point objective.",
    "objectives": [
      "Differentiate RTO from RPO.",
      "Map an RPO to an appropriate backup frequency.",
      "Select a backup strategy that satisfies recovery objectives."
    ],
    "console": {
      "host": "cc-lab05",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: BIA for order-processing database."
      ],
      "tasks": [
        {"id": "t1", "label": "Define which metric measures acceptable downtime"},
        {"id": "t2", "label": "Define which metric measures acceptable data loss"},
        {"id": "t3", "label": "Choose a backup approach for a 15-minute RPO"},
        {"id": "t4", "label": "Verify the configured recovery objectives"}
      ],
      "configs": [
        {"id": "c1", "label": "Which metric defines the maximum tolerable time a system can be down?", "options": ["RPO", "RTO", "MTBF", "MTTR"], "correct": "RTO", "task": "t1"},
        {"id": "c2", "label": "Which metric defines the maximum tolerable amount of data loss measured in time?", "options": ["RTO", "RPO", "SLA", "MTD"], "correct": "RPO", "task": "t2"},
        {"id": "c3", "label": "To meet a 15-minute RPO, which backup approach fits best?", "options": ["Weekly full backups only", "Continuous/near-continuous replication or frequent incremental backups", "Monthly full backups", "Annual archival backups"], "correct": "Continuous/near-continuous replication or frequent incremental backups", "task": "t3"}
      ],
      "commands": [
        {"cmd": "verify recovery objectives", "out": "[BIA] RTO = 1 hour (max downtime)\n[BIA] RPO = 15 minutes (max data loss)\n[BIA] Backup: incremental every 15 min + nightly full\n[BIA] Objectives satisfied.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 06",
    "num": 6,
    "group": "BC / DR / INCIDENT RESPONSE",
    "title": "Select a Disaster Recovery Site",
    "desc": "Following a regional outage threat, you must choose a recovery site. Compare hot, warm, and cold sites by cost and recovery speed, then select the right option for the budget and RTO.",
    "objectives": [
      "Differentiate hot, warm, and cold recovery sites.",
      "Trade off cost against recovery speed.",
      "Match a recovery site to a given RTO requirement."
    ],
    "console": {
      "host": "cc-lab06",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: DR site selection."
      ],
      "tasks": [
        {"id": "t1", "label": "Identify the fastest-recovery DR site"},
        {"id": "t2", "label": "Identify the cheapest DR site"},
        {"id": "t3", "label": "Choose a site for a multi-hour RTO with moderate budget"},
        {"id": "t4", "label": "Compare DR site options at the console"}
      ],
      "configs": [
        {"id": "c1", "label": "Which DR site offers the fastest recovery (near-immediate failover)?", "options": ["Cold site", "Warm site", "Hot site", "Mobile site"], "correct": "Hot site", "task": "t1"},
        {"id": "c2", "label": "Which DR site is the least expensive but slowest to bring online?", "options": ["Hot site", "Warm site", "Cold site", "Cloud site"], "correct": "Cold site", "task": "t2"},
        {"id": "c3", "label": "For a moderate budget and an RTO of several hours, which site fits best?", "options": ["Hot site", "Warm site", "Cold site", "No DR site"], "correct": "Warm site", "task": "t3"}
      ],
      "commands": [
        {"cmd": "compare sites", "out": "[DR] Hot site : minutes to recover | highest cost | fully equipped + live data\n[DR] Warm site: hours to recover | moderate cost | hardware ready, data restored\n[DR] Cold site: days to recover | lowest cost | space + power only", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 07",
    "num": 7,
    "group": "BC / DR / INCIDENT RESPONSE",
    "title": "Walk the Incident Response Lifecycle",
    "desc": "An alert has fired and you must run the incident response process. Order the IR lifecycle phases correctly and take the right action at each stage.",
    "objectives": [
      "Order the phases of the incident response lifecycle.",
      "Match actions to the correct IR phase.",
      "Distinguish containment from eradication and recovery."
    ],
    "console": {
      "host": "cc-lab07",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Malware alert on workstation WS-204."
      ],
      "tasks": [
        {"id": "t1", "label": "Identify the phase that happens before an incident occurs"},
        {"id": "t2", "label": "Choose the action that isolates the infected host"},
        {"id": "t3", "label": "Identify the phase that removes the threat"},
        {"id": "t4", "label": "Print the IR lifecycle in order"}
      ],
      "configs": [
        {"id": "c1", "label": "Which IR phase occurs BEFORE an incident, building plans and tooling?", "options": ["Detection and Analysis", "Preparation", "Containment", "Post-Incident Activity"], "correct": "Preparation", "task": "t1"},
        {"id": "c2", "label": "Isolating WS-204 from the network to stop spread is part of which phase?", "options": ["Eradication", "Recovery", "Containment", "Lessons Learned"], "correct": "Containment", "task": "t2"},
        {"id": "c3", "label": "Removing the malware and affected artifacts from the host is which phase?", "options": ["Containment", "Eradication", "Recovery", "Detection"], "correct": "Eradication", "task": "t3"}
      ],
      "commands": [
        {"cmd": "show ir lifecycle", "out": "[IR] 1) Preparation\n[IR] 2) Detection and Analysis\n[IR] 3) Containment\n[IR] 4) Eradication\n[IR] 5) Recovery\n[IR] 6) Post-Incident Activity (Lessons Learned)", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 08",
    "num": 8,
    "group": "ACCESS CONTROLS",
    "title": "Enforce Least Privilege",
    "desc": "An authorization matrix grants excessive access. Apply the principle of least privilege by removing unneeded permissions and granting only what each role requires for its job function.",
    "objectives": [
      "Apply the principle of least privilege.",
      "Identify and remove excessive permissions.",
      "Relate least privilege to need-to-know and separation of duties."
    ],
    "console": {
      "host": "cc-lab08",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Authorization matrix review for Finance app."
      ],
      "tasks": [
        {"id": "t1", "label": "Define the principle of least privilege"},
        {"id": "t2", "label": "Decide on an intern's access to payroll exports"},
        {"id": "t3", "label": "Revoke excess permissions from the console"},
        {"id": "t4", "label": "Confirm the corrected access matrix"}
      ],
      "configs": [
        {"id": "c1", "label": "The principle of least privilege means users should have...", "options": ["All permissions that might ever be useful", "Only the access required to perform their job, and no more", "Administrator rights for convenience", "The same access as their manager"], "correct": "Only the access required to perform their job, and no more", "task": "t1"},
        {"id": "c2", "label": "An intern who only files documents requests admin export of payroll. You should...", "options": ["Grant full admin so they are not blocked", "Deny it; it exceeds their job need", "Grant it temporarily with no review", "Ask the intern to decide"], "correct": "Deny it; it exceeds their job need", "task": "t2"}
      ],
      "commands": [
        {"cmd": "revoke excess --role intern", "out": "[AUTHZ] Removing: payroll.export (admin)\n[AUTHZ] Removing: gl.delete\n[AUTHZ] Retaining: documents.read, documents.file\n[AUTHZ] Intern role now least-privilege compliant.", "task": "t3"},
        {"cmd": "show matrix", "out": "[AUTHZ] Intern  : documents.read, documents.file\n[AUTHZ] Clerk   : invoices.read, invoices.create\n[AUTHZ] Manager : invoices.approve, reports.read\n[AUTHZ] Matrix least-privilege validated.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 09",
    "num": 9,
    "group": "ACCESS CONTROLS",
    "title": "Choose the Right Access Control Model",
    "desc": "Different systems need different authorization models. Match DAC, MAC, RBAC, and ABAC to scenarios based on how access decisions are made and who controls them.",
    "objectives": [
      "Differentiate DAC, MAC, RBAC, and ABAC.",
      "Match an access control model to a requirement.",
      "Identify who makes access decisions in each model."
    ],
    "console": {
      "host": "cc-lab09",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Access control model selection."
      ],
      "tasks": [
        {"id": "t1", "label": "Choose the model for military classification labels"},
        {"id": "t2", "label": "Choose the model where the data owner sets permissions"},
        {"id": "t3", "label": "Choose the model that grants access based on job role"},
        {"id": "t4", "label": "List the access control models and their drivers"}
      ],
      "configs": [
        {"id": "c1", "label": "A government system enforces access via classification labels and clearances set by policy. Which model?", "options": ["DAC", "MAC", "RBAC", "ABAC"], "correct": "MAC", "task": "t1"},
        {"id": "c2", "label": "On a file share, each file owner decides who can read their files. Which model?", "options": ["MAC", "RBAC", "DAC", "ABAC"], "correct": "DAC", "task": "t2"},
        {"id": "c3", "label": "Permissions are assigned to roles like 'Nurse' or 'Cashier' and users inherit them. Which model?", "options": ["DAC", "MAC", "RBAC", "ABAC"], "correct": "RBAC", "task": "t3"}
      ],
      "commands": [
        {"cmd": "list models", "out": "[AC] DAC  : owner discretion decides access\n[AC] MAC  : system enforces labels/clearances (policy-driven)\n[AC] RBAC : access tied to job roles\n[AC] ABAC : access from attributes (user, resource, environment)", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 10",
    "num": 10,
    "group": "ACCESS CONTROLS",
    "title": "Physical Access and Visitor Management",
    "desc": "A secure facility needs layered physical controls and a visitor process. Configure a mantrap, badge access, and a visitor log, then issue a visitor badge through the console.",
    "objectives": [
      "Select appropriate physical access controls.",
      "Understand how a mantrap prevents tailgating.",
      "Apply visitor management procedures."
    ],
    "console": {
      "host": "cc-lab10",
      "boot": [
        "[SYS] Lab online.",
        "[SYS] Scenario loaded: Data center physical security setup."
      ],
      "tasks": [
        {"id": "t1", "label": "Choose the control that defeats tailgating"},
        {"id": "t2", "label": "Choose the requirement for all visitors"},
        {"id": "t3", "label": "Enable badge access logging"},
        {"id": "t4", "label": "Issue a visitor badge via the payload"}
      ],
      "configs": [
        {"id": "c1", "label": "Which physical control best prevents tailgating into a secure area?", "options": ["A welcome mat", "A mantrap (access control vestibule)", "An open lobby", "A propped door"], "correct": "A mantrap (access control vestibule)", "task": "t1"},
        {"id": "c2", "label": "Visitors to the data center must always be...", "options": ["Given a permanent badge", "Escorted and signed into the visitor log", "Left unsupervised after check-in", "Allowed to badge other guests in"], "correct": "Escorted and signed into the visitor log", "task": "t2"}
      ],
      "commands": [
        {"cmd": "enable badge logging", "out": "[PHYS] Badge reader logging: ENABLED\n[PHYS] All entry/exit events now recorded with timestamp.", "task": "t3"}
      ],
      "payload": {"label": "VISITOR BADGE REQUEST", "placeholder": "Enter visitor full name", "button": "Issue Badge", "response": "[PHYS] Temporary visitor badge issued. Escort assigned. Logged in visitor register.", "task": "t4"}
    }
  }
);

window.LABS = window.LABS || [];
window.LABS.push(
  {
    "id": "Lab 11",
    "num": 11,
    "group": "NETWORK SECURITY",
    "title": "Well-Known Ports and Protocols",
    "desc": "A junior analyst must map services to their well-known ports. Identify the correct port and transport for common protocols and confirm an open service with a banner grab.",
    "objectives": [
      "Match common protocols to their IANA well-known ports.",
      "Distinguish secure protocols from their cleartext equivalents.",
      "Verify a listening service and read its banner."
    ],
    "console": {
      "host": "cc-lab11",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: port and protocol identification"],
      "tasks": [
        {"id": "t1", "label": "Identify the port used by HTTPS."},
        {"id": "t2", "label": "Identify the secure replacement for Telnet and its port."},
        {"id": "t3", "label": "Identify the port and transport used by DNS queries."},
        {"id": "t4", "label": "Confirm the web service is listening and grab its banner."}
      ],
      "configs": [
        {"id": "c1", "label": "HTTPS listens on port:", "options": ["21", "80", "443", "3389"], "correct": "443", "task": "t1"},
        {"id": "c2", "label": "Secure replacement for Telnet (and its port):", "options": ["RDP / 3389", "SSH / 22", "FTP / 21", "SNMP / 161"], "correct": "SSH / 22", "task": "t2"},
        {"id": "c3", "label": "Standard DNS query service runs on:", "options": ["TCP 25", "UDP 53", "TCP 110", "UDP 123"], "correct": "UDP 53", "task": "t3"}
      ],
      "commands": [
        {"cmd": "nc -v 10.10.0.5 443", "out": "Connection to 10.10.0.5 443 port [tcp/https] succeeded!\nServer: nginx/1.24.0\n[OK] Web service confirmed on 443.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 12",
    "num": 12,
    "group": "NETWORK SECURITY",
    "title": "Writing Firewall Rules",
    "desc": "A perimeter firewall needs a clean rule set. Build allow and deny rules in the correct order, then verify that a blocked port is actually dropped.",
    "objectives": [
      "Write explicit allow rules for required services.",
      "Apply an explicit deny and understand implicit deny.",
      "Test that a denied port is blocked."
    ],
    "console": {
      "host": "cc-lab12",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: firewall allow and deny rules"],
      "tasks": [
        {"id": "t1", "label": "Allow inbound HTTPS to the web server."},
        {"id": "t2", "label": "Block inbound Telnet at the perimeter."},
        {"id": "t3", "label": "Choose the correct default policy for unmatched traffic."},
        {"id": "t4", "label": "Verify Telnet to the web server is blocked."}
      ],
      "configs": [
        {"id": "c1", "label": "Rule for inbound web traffic to 10.20.0.10:", "options": ["allow tcp any to 10.20.0.10 port 443", "allow tcp any to 10.20.0.10 port 23", "deny tcp any to 10.20.0.10 port 443", "allow udp any to 10.20.0.10 port 80"], "correct": "allow tcp any to 10.20.0.10 port 443", "task": "t1"},
        {"id": "c2", "label": "Rule to stop Telnet at the edge:", "options": ["allow tcp any to any port 23", "deny tcp any to any port 23", "deny tcp any to any port 22", "allow tcp any to any port 3389"], "correct": "deny tcp any to any port 23", "task": "t2"},
        {"id": "c3", "label": "Default policy for traffic matching no rule:", "options": ["Implicit allow (permit all)", "Implicit deny (drop all)", "Log only, then allow", "Forward to DMZ"], "correct": "Implicit deny (drop all)", "task": "t3"}
      ],
      "commands": [
        {"cmd": "nc -w3 10.20.0.10 23", "out": "nc: connect to 10.20.0.10 port 23 (tcp) failed: Connection timed out\n[OK] Telnet is blocked by the firewall.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 13",
    "num": 13,
    "group": "NETWORK SECURITY",
    "title": "Network Zones and Segmentation",
    "desc": "Place servers and remote users into the correct network zones. Decide what belongs in the DMZ, the internal trusted zone, and how remote staff connect securely.",
    "objectives": [
      "Place public-facing services in the DMZ.",
      "Keep sensitive systems in the internal zone.",
      "Provide secure remote access for off-site users."
    ],
    "console": {
      "host": "cc-lab13",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: network zone placement"],
      "tasks": [
        {"id": "t1", "label": "Place the public web server into the correct zone."},
        {"id": "t2", "label": "Place the HR database into the correct zone."},
        {"id": "t3", "label": "Choose how remote employees reach internal resources."},
        {"id": "t4", "label": "Confirm the DMZ host cannot directly reach the internal database."}
      ],
      "configs": [
        {"id": "c1", "label": "The internet-facing web server belongs in the:", "options": ["Internal trusted zone", "DMZ", "Management VLAN", "Guest Wi-Fi"], "correct": "DMZ", "task": "t1"},
        {"id": "c2", "label": "The HR database server belongs in the:", "options": ["DMZ", "Public subnet", "Internal trusted zone", "Extranet"], "correct": "Internal trusted zone", "task": "t2"},
        {"id": "c3", "label": "Remote employees should connect via:", "options": ["Open RDP on the public IP", "An encrypted VPN tunnel", "Telnet to the firewall", "Forwarded port 80"], "correct": "An encrypted VPN tunnel", "task": "t3"}
      ],
      "commands": [
        {"cmd": "nc -w3 10.0.50.20 1433", "out": "nc: connect to 10.0.50.20 port 1433 (tcp) failed: No route to host\n[OK] DMZ host is segmented from the internal database.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 14",
    "num": 14,
    "group": "NETWORK SECURITY",
    "title": "Malware and Network Attacks",
    "desc": "Several incidents are reported by users and monitoring. Match each set of symptoms to the correct malware type or network attack, then capture evidence of the flood.",
    "objectives": [
      "Identify malware types from observed behavior.",
      "Recognize common network attacks from symptoms.",
      "Capture traffic that confirms a denial-of-service flood."
    ],
    "console": {
      "host": "cc-lab14",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: attack and malware identification"],
      "tasks": [
        {"id": "t1", "label": "Identify malware that encrypts files and demands payment."},
        {"id": "t2", "label": "Identify the attack that intercepts traffic between two hosts."},
        {"id": "t3", "label": "Identify the attack flooding the server to deny service."},
        {"id": "t4", "label": "Capture packets confirming the SYN flood."}
      ],
      "configs": [
        {"id": "c1", "label": "Files are encrypted with a ransom note demanding bitcoin:", "options": ["Worm", "Ransomware", "Rootkit", "Adware"], "correct": "Ransomware", "task": "t1"},
        {"id": "c2", "label": "An attacker secretly relays and alters traffic between two parties:", "options": ["On-path (man-in-the-middle)", "SQL injection", "Phishing", "Privilege escalation"], "correct": "On-path (man-in-the-middle)", "task": "t2"},
        {"id": "c3", "label": "Thousands of hosts flood the server until it is unreachable:", "options": ["Brute force", "Distributed denial-of-service (DDoS)", "Cross-site scripting", "Pharming"], "correct": "Distributed denial-of-service (DDoS)", "task": "t3"}
      ],
      "commands": [
        {"cmd": "tcpdump -c 5 'tcp[tcpflags] == tcp-syn'", "out": "10.4.1.9 > 10.4.1.50: Flags [S], seq 1\n10.4.1.9 > 10.4.1.50: Flags [S], seq 1\n203.0.113.7 > 10.4.1.50: Flags [S], seq 1\n[ALERT] Half-open connections flooding port 80 - SYN flood confirmed.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 15",
    "num": 15,
    "group": "NETWORK SECURITY",
    "title": "Securing Wi-Fi and Spotting an Evil Twin",
    "desc": "Harden the corporate wireless network and investigate a rogue access point. Choose strong encryption, enterprise authentication, and identify the evil twin from a scan.",
    "objectives": [
      "Select the strongest available Wi-Fi encryption.",
      "Choose enterprise authentication for corporate access.",
      "Detect a rogue or evil twin access point."
    ],
    "console": {
      "host": "cc-lab15",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: wireless hardening and rogue AP"],
      "tasks": [
        {"id": "t1", "label": "Select the strongest Wi-Fi encryption standard."},
        {"id": "t2", "label": "Choose corporate authentication tied to user identity."},
        {"id": "t3", "label": "Identify the evil twin from a wireless scan."},
        {"id": "t4", "label": "Disable the legacy protocol that weakens the network."}
      ],
      "configs": [
        {"id": "c1", "label": "Strongest encryption to deploy:", "options": ["WEP", "WPA", "WPA2-PSK", "WPA3"], "correct": "WPA3", "task": "t1"},
        {"id": "c2", "label": "Authentication for corporate staff:", "options": ["A single shared pre-shared key", "WPA3-Enterprise with 802.1X", "Open network with captive portal", "MAC filtering only"], "correct": "WPA3-Enterprise with 802.1X", "task": "t2"},
        {"id": "c3", "label": "Turn off this insecure legacy option:", "options": ["802.1X", "WPS", "AES-CCMP", "DHCP"], "correct": "WPS", "task": "t4"}
      ],
      "commands": [
        {"cmd": "iwlist scan | grep -E 'SSID|BSSID'", "out": "BSSID 00:11:22:AA:BB:CC  SSID \"CorpWiFi\"  signal -42 dBm\nBSSID 66:77:88:DD:EE:FF  SSID \"CorpWiFi\"  signal -39 dBm (open, no 802.1X)\n[ALERT] Duplicate SSID with different BSSID and no encryption - evil twin detected.", "task": "t3"}
      ]
    }
  },
  {
    "id": "Lab 16",
    "num": 16,
    "group": "SECURITY OPERATIONS",
    "title": "Encryption versus Hashing",
    "desc": "For three different requirements, choose between encryption and hashing and pick a suitable algorithm. Then verify a downloaded file's integrity with a hash.",
    "objectives": [
      "Choose encryption for confidentiality of data in transit and at rest.",
      "Choose hashing for integrity verification.",
      "Verify a file's integrity by comparing hash values."
    ],
    "console": {
      "host": "cc-lab16",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: encryption vs hashing decisions"],
      "tasks": [
        {"id": "t1", "label": "Protect a database of records stored on disk."},
        {"id": "t2", "label": "Protect web traffic between client and server."},
        {"id": "t3", "label": "Detect whether a downloaded file was altered."},
        {"id": "t4", "label": "Verify the file matches the published hash."}
      ],
      "configs": [
        {"id": "c1", "label": "Data at rest in a database should be:", "options": ["Hashed with SHA-256", "Encrypted with AES-256", "Encoded with Base64", "Compressed with gzip"], "correct": "Encrypted with AES-256", "task": "t1"},
        {"id": "c2", "label": "Data in transit over the web should use:", "options": ["TLS encryption", "A plain SHA-1 hash", "Base64 encoding", "ROT13"], "correct": "TLS encryption", "task": "t2"},
        {"id": "c3", "label": "To confirm a file was not modified, you should:", "options": ["Encrypt it with RSA", "Compute and compare a SHA-256 hash", "Base64 encode it", "Zip it"], "correct": "Compute and compare a SHA-256 hash", "task": "t3"}
      ],
      "commands": [
        {"cmd": "sha256sum installer.bin", "out": "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08  installer.bin\n[OK] Hash matches the value published by the vendor - integrity verified.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 17",
    "num": 17,
    "group": "SECURITY OPERATIONS",
    "title": "Data Classification and the Data Life Cycle",
    "desc": "Classify data correctly and apply the right handling at each stage of the data life cycle, from labeling through secure destruction.",
    "objectives": [
      "Assign the correct classification label to sensitive data.",
      "Apply handling controls across the data life cycle.",
      "Choose a compliant method for the destroy phase."
    ],
    "console": {
      "host": "cc-lab17",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: data classification and handling"],
      "tasks": [
        {"id": "t1", "label": "Classify a file containing employee SSNs and salaries."},
        {"id": "t2", "label": "Choose handling for the data while it is in use and shared."},
        {"id": "t3", "label": "Choose the destroy method for retired drives holding that data."},
        {"id": "t4", "label": "Apply the correct label to the file."}
      ],
      "configs": [
        {"id": "c1", "label": "Employee SSNs and salaries should be classified as:", "options": ["Public", "Confidential / sensitive", "Unclassified", "Marketing"], "correct": "Confidential / sensitive", "task": "t1"},
        {"id": "c2", "label": "While sharing this data internally, you should:", "options": ["Email it unencrypted to all staff", "Restrict access by need-to-know and encrypt it", "Post it on the intranet homepage", "Copy it to a public file share"], "correct": "Restrict access by need-to-know and encrypt it", "task": "t2"},
        {"id": "c3", "label": "At end of life, drives holding this data should be:", "options": ["Reused as-is for guests", "Physically destroyed or cryptographically erased", "Sold online", "Left in storage indefinitely"], "correct": "Physically destroyed or cryptographically erased", "task": "t3"}
      ],
      "commands": [
        {"cmd": "label set --file payroll.xlsx --tag CONFIDENTIAL", "out": "Applying classification label...\npayroll.xlsx -> CONFIDENTIAL (handling: encrypt, restrict, audit)\n[OK] File labeled and handling policy enforced.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 18",
    "num": 18,
    "group": "SECURITY OPERATIONS",
    "title": "Triaging Events in a SIEM",
    "desc": "Review a stream of SIEM log events, distinguish noise from real indicators, and escalate the genuine security incident with the correct priority.",
    "objectives": [
      "Separate benign events from true positives.",
      "Recognize indicators of a brute-force or compromise.",
      "Escalate the confirmed incident appropriately."
    ],
    "console": {
      "host": "cc-lab18",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: SIEM event triage"],
      "tasks": [
        {"id": "t1", "label": "Review the incoming SIEM events."},
        {"id": "t2", "label": "Identify which event is a real security indicator."},
        {"id": "t3", "label": "Choose the correct triage action for that event."},
        {"id": "t4", "label": "Escalate the confirmed incident."}
      ],
      "configs": [
        {"id": "c1", "label": "Which event is a genuine indicator of attack?", "options": ["A user logged in successfully at 09:00", "200 failed logins for one account in 60 seconds, then success", "A scheduled backup completed", "A printer came online"], "correct": "200 failed logins for one account in 60 seconds, then success", "task": "t2"},
        {"id": "c2", "label": "Correct triage action for that event:", "options": ["Suppress the alert as noise", "Investigate and treat as a possible account compromise", "Delete the log entries", "Increase the password length requirement only"], "correct": "Investigate and treat as a possible account compromise", "task": "t3"}
      ],
      "commands": [
        {"cmd": "siem tail --source auth", "out": "09:00:01 INFO  login success user=alice src=10.0.0.5\n09:14:22 WARN  455 auth failures user=admin src=198.51.100.9\n09:14:25 ALERT login success user=admin src=198.51.100.9\n[INFO] 3 events loaded for triage.", "task": "t1"},
        {"cmd": "incident escalate --id INC-2026-018 --sev high", "out": "Escalating INC-2026-018...\nAssigned to Tier 2 SOC, severity HIGH, account admin locked pending review.\n[OK] Incident escalated.", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 19",
    "num": 19,
    "group": "SECURITY OPERATIONS",
    "title": "Hardening a Server Baseline",
    "desc": "Apply configuration management to a new server. Remove unnecessary services, enforce secure settings against a baseline, and confirm the host is compliant.",
    "objectives": [
      "Disable unneeded services and accounts.",
      "Apply secure baseline configuration settings.",
      "Verify the server against the hardening baseline."
    ],
    "console": {
      "host": "cc-lab19",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: server baseline hardening"],
      "tasks": [
        {"id": "t1", "label": "Decide what to do with unused running services."},
        {"id": "t2", "label": "Choose the correct handling of the default admin account."},
        {"id": "t3", "label": "Select the patching approach for the baseline."},
        {"id": "t4", "label": "Run a compliance scan against the baseline."}
      ],
      "configs": [
        {"id": "c1", "label": "Telnet and FTP are running but not needed. You should:", "options": ["Leave them on for convenience", "Disable and remove the unused services", "Open them through the firewall", "Run them as administrator"], "correct": "Disable and remove the unused services", "task": "t1"},
        {"id": "c2", "label": "The default admin account should be:", "options": ["Kept with its default password", "Renamed or disabled and given a strong unique password", "Shared with all admins", "Set with no password for testing"], "correct": "Renamed or disabled and given a strong unique password", "task": "t2"},
        {"id": "c3", "label": "Patch management for the baseline should be:", "options": ["Never patch to avoid downtime", "Apply tested patches on a regular schedule", "Patch only after a breach", "Disable automatic update checks"], "correct": "Apply tested patches on a regular schedule", "task": "t3"}
      ],
      "commands": [
        {"cmd": "baseline scan --policy cis-level1", "out": "Checking 142 controls against CIS Level 1...\nServices: PASS  Accounts: PASS  Patching: PASS  Logging: PASS\n[OK] Host compliant with hardening baseline (142/142).", "task": "t4"}
      ]
    }
  },
  {
    "id": "Lab 20",
    "num": 20,
    "group": "SECURITY OPERATIONS",
    "title": "Social Engineering and User Response",
    "desc": "Users receive suspicious messages and calls. Identify each social engineering technique and apply the correct response, then report the phishing attempt through the proper channel.",
    "objectives": [
      "Identify common social engineering techniques.",
      "Choose the correct user response to each lure.",
      "Report suspicious messages through the proper channel."
    ],
    "console": {
      "host": "cc-lab20",
      "boot": ["[SYS] Lab online.", "[SYS] Scenario loaded: social engineering response"],
      "tasks": [
        {"id": "t1", "label": "Identify the technique in an urgent password-reset email."},
        {"id": "t2", "label": "Choose the correct response to the suspicious email."},
        {"id": "t3", "label": "Identify the technique used by a caller impersonating IT."},
        {"id": "t4", "label": "Report the phishing message through the proper channel."}
      ],
      "configs": [
        {"id": "c1", "label": "An email urges you to click a link to reset your password now:", "options": ["Legitimate notice", "Phishing", "Software update", "Newsletter"], "correct": "Phishing", "task": "t1"},
        {"id": "c2", "label": "The correct response to that email is to:", "options": ["Click the link to be safe", "Reply with your password", "Do not click; verify and report it to security", "Forward it to all coworkers"], "correct": "Do not click; verify and report it to security", "task": "t2"},
        {"id": "c3", "label": "A caller claiming to be IT pressures you for your credentials. This is:", "options": ["Vishing (voice phishing) using pretexting", "A routine help-desk call", "Tailgating", "Shoulder surfing"], "correct": "Vishing (voice phishing) using pretexting", "task": "t3"}
      ],
      "commands": [],
      "payload": {"label": "REPORT MESSAGE", "placeholder": "Paste the suspicious sender or subject to report", "button": "Report", "response": "[SYS] Reported to phishing@corp.example. Message quarantined and SOC notified.", "task": "t4"}
    }
  }
);
