window.TAXONOMY = [
  {
    title: "Security Control Categories",
    subtitle: "Sort each safeguard into the control category it belongs to.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "technical", label: "Technical" },
      { id: "managerial", label: "Managerial" },
      { id: "operational", label: "Operational" },
      { id: "physical", label: "Physical" }
    ],
    items: [
      { text: "Firewall", cat: "technical" },
      { text: "Data encryption", cat: "technical" },
      { text: "Multi-factor authentication (MFA)", cat: "technical" },
      { text: "Antivirus software", cat: "technical" },
      { text: "Acceptable use policy", cat: "managerial" },
      { text: "Risk assessment", cat: "managerial" },
      { text: "Information security policy", cat: "managerial" },
      { text: "Security awareness training", cat: "operational" },
      { text: "Employee background checks", cat: "operational" },
      { text: "Incident response procedures", cat: "operational" },
      { text: "Routine log review", cat: "operational" },
      { text: "Bollards", cat: "physical" },
      { text: "Perimeter fences", cat: "physical" },
      { text: "Badge reader", cat: "physical" },
      { text: "CCTV cameras", cat: "physical" }
    ]
  },
  {
    title: "Security Control Functions",
    subtitle: "Classify each control by the function it performs.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "preventive", label: "Preventive" },
      { id: "detective", label: "Detective" },
      { id: "deterrent", label: "Deterrent" },
      { id: "corrective", label: "Corrective" }
    ],
    items: [
      { text: "Door lock", cat: "preventive" },
      { text: "Firewall blocking traffic", cat: "preventive" },
      { text: "Account lockout after failed logins", cat: "preventive" },
      { text: "Intrusion detection system (IDS)", cat: "detective" },
      { text: "Security log review", cat: "detective" },
      { text: "Motion sensor alarm", cat: "detective" },
      { text: "Audit trail", cat: "detective" },
      { text: "Warning sign", cat: "deterrent" },
      { text: "Visible surveillance camera", cat: "deterrent" },
      { text: "Beware of dog sign", cat: "deterrent" },
      { text: "Posted security policy notice", cat: "deterrent" },
      { text: "Restoring files from backup", cat: "corrective" },
      { text: "Applying a security patch", cat: "corrective" },
      { text: "Quarantining infected files", cat: "corrective" },
      { text: "Rebuilding a compromised server", cat: "corrective" }
    ]
  },
  {
    title: "Cryptography Families",
    subtitle: "Place each algorithm into its cryptographic family.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "symmetric", label: "Symmetric" },
      { id: "asymmetric", label: "Asymmetric" },
      { id: "hashing", label: "Hashing" }
    ],
    items: [
      { text: "AES", cat: "symmetric" },
      { text: "DES", cat: "symmetric" },
      { text: "3DES", cat: "symmetric" },
      { text: "RC4", cat: "symmetric" },
      { text: "Blowfish", cat: "symmetric" },
      { text: "RSA", cat: "asymmetric" },
      { text: "ECC", cat: "asymmetric" },
      { text: "Diffie-Hellman", cat: "asymmetric" },
      { text: "ElGamal", cat: "asymmetric" },
      { text: "SHA-256", cat: "hashing" },
      { text: "MD5", cat: "hashing" },
      { text: "HMAC", cat: "hashing" },
      { text: "SHA-1", cat: "hashing" },
      { text: "SHA-3", cat: "hashing" }
    ]
  },
  {
    title: "Access Control Models",
    subtitle: "Match each access control scenario to its model.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "dac", label: "DAC" },
      { id: "mac", label: "MAC" },
      { id: "rbac", label: "RBAC" },
      { id: "abac", label: "ABAC" }
    ],
    items: [
      { text: "File owner grants permissions to others", cat: "dac" },
      { text: "User who creates a document controls who reads it", cat: "dac" },
      { text: "Owner sets read/write access at their discretion", cat: "dac" },
      { text: "Access based on Top Secret clearance labels", cat: "mac" },
      { text: "System enforces classification levels centrally", cat: "mac" },
      { text: "Government data labeled and matched to clearances", cat: "mac" },
      { text: "Permissions assigned by the Accountant job role", cat: "rbac" },
      { text: "Users inherit rights from their group membership", cat: "rbac" },
      { text: "Nurses get access tied to the Nurse role", cat: "rbac" },
      { text: "Access granted only during business hours", cat: "abac" },
      { text: "Policy evaluates user department and location", cat: "abac" },
      { text: "Decision based on device type and time of day", cat: "abac" },
      { text: "Rules combine multiple attributes dynamically", cat: "abac" }
    ]
  },
  {
    title: "Social Engineering Techniques",
    subtitle: "Sort each attack into the delivery method it uses.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "phishing", label: "Phishing-based" },
      { id: "physical", label: "Physical / In-person" },
      { id: "voicesms", label: "Voice / SMS" }
    ],
    items: [
      { text: "Spear phishing email", cat: "phishing" },
      { text: "Whaling targeting an executive", cat: "phishing" },
      { text: "Malicious email link", cat: "phishing" },
      { text: "Fake invoice email attachment", cat: "phishing" },
      { text: "Pharming to a spoofed website", cat: "phishing" },
      { text: "Tailgating through a secure door", cat: "physical" },
      { text: "Shoulder surfing a password", cat: "physical" },
      { text: "Dumpster diving for documents", cat: "physical" },
      { text: "Piggybacking into a data center", cat: "physical" },
      { text: "Impersonating a delivery courier", cat: "physical" },
      { text: "Vishing phone call from fake IT support", cat: "voicesms" },
      { text: "Smishing text message with a bad link", cat: "voicesms" },
      { text: "Robocall demanding gift card payment", cat: "voicesms" },
      { text: "SMS claiming a package delivery problem", cat: "voicesms" }
    ]
  },
  {
    title: "CIA Triad Mapping",
    subtitle: "Map each safeguard to the CIA triad goal it primarily supports.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "confidentiality", label: "Confidentiality" },
      { id: "integrity", label: "Integrity" },
      { id: "availability", label: "Availability" }
    ],
    items: [
      { text: "Data encryption", cat: "confidentiality" },
      { text: "Access control lists", cat: "confidentiality" },
      { text: "Data classification and labeling", cat: "confidentiality" },
      { text: "Steganography", cat: "confidentiality" },
      { text: "File hashing", cat: "integrity" },
      { text: "Digital signatures", cat: "integrity" },
      { text: "Checksums", cat: "integrity" },
      { text: "Version control", cat: "integrity" },
      { text: "RAID arrays", cat: "availability" },
      { text: "Regular backups", cat: "availability" },
      { text: "Load balancing", cat: "availability" },
      { text: "Redundant power supplies", cat: "availability" },
      { text: "Failover clustering", cat: "availability" }
    ]
  },
  {
    title: "Disaster Recovery Sites and Backups",
    subtitle: "Sort each readiness detail into the recovery site type it describes.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "hot", label: "Hot Site" },
      { id: "warm", label: "Warm Site" },
      { id: "cold", label: "Cold Site" }
    ],
    items: [
      { text: "Fully operational and ready within minutes", cat: "hot" },
      { text: "Real-time replicated data already in place", cat: "hot" },
      { text: "Live systems mirroring production", cat: "hot" },
      { text: "Highest cost to maintain", cat: "hot" },
      { text: "Hardware installed but data must be loaded", cat: "warm" },
      { text: "Partial equipment needing recent backups restored", cat: "warm" },
      { text: "Recovery time of hours to a day", cat: "warm" },
      { text: "Moderate cost compromise", cat: "warm" },
      { text: "Empty facility with power and space only", cat: "cold" },
      { text: "No servers or data pre-installed", cat: "cold" },
      { text: "Longest recovery time of days or weeks", cat: "cold" },
      { text: "Lowest cost option to maintain", cat: "cold" },
      { text: "Connectivity available but equipment must be shipped in", cat: "cold" }
    ]
  },
  {
    title: "Risk Treatment Strategies",
    subtitle: "Classify each response into the risk treatment strategy it represents.",
    instructions: "Drag each chip from the pool into the correct category drop zone, then click Check Answers for instant feedback. Click a chip's x button to return it to the pool.",
    categories: [
      { id: "avoidance", label: "Avoidance" },
      { id: "mitigation", label: "Mitigation" },
      { id: "transference", label: "Transference" },
      { id: "acceptance", label: "Acceptance" }
    ],
    items: [
      { text: "Discontinue a risky business activity", cat: "avoidance" },
      { text: "Cancel a project deemed too dangerous", cat: "avoidance" },
      { text: "Stop offering a vulnerable legacy service", cat: "avoidance" },
      { text: "Install a firewall", cat: "mitigation" },
      { text: "Deploy antivirus and patch systems", cat: "mitigation" },
      { text: "Add MFA to reduce account takeover risk", cat: "mitigation" },
      { text: "Encrypt laptops to limit loss impact", cat: "mitigation" },
      { text: "Purchase cyber insurance", cat: "transference" },
      { text: "Outsource hosting to a managed provider", cat: "transference" },
      { text: "Sign an SLA shifting liability to a vendor", cat: "transference" },
      { text: "Document and tolerate a low-impact risk", cat: "acceptance" },
      { text: "Decide the cost of a fix exceeds the risk", cat: "acceptance" },
      { text: "Formally sign off to retain a minor risk", cat: "acceptance" }
    ]
  }
];
