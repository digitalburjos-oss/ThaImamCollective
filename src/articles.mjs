export const CATEGORIES = ["Business AI","Automation","Software","Academy","Hiring","Industries"];
export const ARTICLES = [
  {
    "slug": "what-is-business-ai",
    "title": "What is Business AI? A practical definition for operators",
    "category": "Business AI",
    "kind": "Definition",
    "readMin": 2,
    "date": "2026-09-02",
    "keywords": [
      "business AI",
      "AI for business operations",
      "AI automation for SMEs"
    ],
    "description": "Business AI is the practical use of AI and automation to make operations faster and more reliable — judged by response time, error rate and cost, not by novelty.",
    "image": "images/blog-what-is-business-ai.webp",
    "takeaways": [
      "Business AI is judged by operational numbers, not model size.",
      "Most wins come from simplifying the process first.",
      "People stay accountable for decisions that matter."
    ],
    "sections": [
      {
        "h": "The short answer",
        "p": [
          "Business AI is the use of automation, AI models and simpler processes to improve how an organisation operates. It is measured with ordinary operational numbers: how long a request waits, how often work is redone, how many enquiries go unanswered.",
          "That definition matters because it moves the conversation away from which model to buy and toward which process is costing you money."
        ]
      },
      {
        "h": "How it differs from generative AI",
        "p": [
          "Generative AI is a technology that produces text, images or code. Business AI is a way of improving operations that sometimes uses generative AI — alongside plain rules, system integrations and well-designed approval steps.",
          "Many useful improvements contain no AI at all: removing a duplicate data entry, routing an enquiry to one owner, or sending a status update automatically."
        ]
      },
      {
        "h": "What a Business AI project looks like",
        "p": [
          "We start by watching the work and timing it. Then we remove steps that should not exist, automate the repetitive parts that remain, and keep judgement calls with people. Finally, we measure again against the starting baseline.",
          "If the numbers don't move, the project hasn't worked — regardless of how impressive the technology looks."
        ]
      },
      {
        "h": "Where to start",
        "p": [
          "Pick one process that is frequent, rule-based and painful: enquiry handling, document checks or weekly reporting are common first candidates. Measure it for two weeks before changing anything."
        ]
      },
      {
        "h": "A quotation request, from inbox to review",
        "p": [
          "Imagine a coordinator receiving twenty quotation requests in a day. A useful first workflow records the sender, checks that the requested service is clear and assigns an owner. AI might help categorise free-text requests; ordinary rules can identify missing contact details. The first measure is the time until an owner reviews the request, not the number of AI responses generated."
        ]
      }
    ]
  },
  {
    "slug": "when-should-a-company-automate-a-workflow",
    "title": "When should a company automate a workflow? A decision guide",
    "category": "Automation",
    "kind": "Decision guide",
    "readMin": 2,
    "date": "2026-08-26",
    "keywords": [
      "workflow automation",
      "when to automate",
      "process automation ROI"
    ],
    "description": "Which workflows are ready for automation, which aren't, and a simple scoring method for deciding what to automate first.",
    "image": "images/blog-when-should-a-company-automate-a-workflow.webp",
    "takeaways": [
      "Automate stable, frequent, rule-based work first.",
      "Never automate a process nobody can describe.",
      "Score candidates on volume, variance and cost of error."
    ],
    "sections": [
      {
        "h": "Signs a workflow is ready",
        "p": [
          "A workflow is ready for automation when it happens often, follows the same steps most of the time, and has clear inputs and outputs. If three people describe it three different ways, it isn't ready — it needs to be standardised first."
        ]
      },
      {
        "h": "Signs it isn't",
        "p": [
          "Work that depends on judgement, changes every month, or rarely happens usually costs more to automate than it saves. Automating a broken process only makes it fail faster."
        ]
      },
      {
        "h": "A simple scoring method",
        "p": [
          "Score each candidate from 1 to 5 on volume (how often it happens), stability (how rarely the steps change), and pain (time lost or errors caused). Multiply the three. Start with the highest score that has an obvious owner.",
          "Then subtract risk: anything customer-facing or financially significant should keep a human approval step even after automation."
        ]
      },
      {
        "h": "What to measure",
        "p": [
          "Record cycle time, touch time, error rate and backlog before you start. Those four numbers tell you whether the automation worked and whether it is worth extending."
        ]
      },
      {
        "h": "Compare two tasks before choosing",
        "p": [
          "A weekly report assembled from the same export may be a better first candidate than an unusual customer complaint. Estimate handling time, frequency, setup cost and the time needed to review failures. A scoring table helps organise the discussion, but it is a prioritisation aid rather than a financial return calculation."
        ]
      }
    ]
  },
  {
    "slug": "what-is-workflow-automation",
    "title": "What is workflow automation? Triggers, conditions and actions explained",
    "category": "Automation",
    "kind": "Definition",
    "readMin": 2,
    "date": "2026-08-19",
    "keywords": [
      "what is workflow automation",
      "workflow automation tools",
      "no-code automation"
    ],
    "description": "Workflow automation moves work through defined steps automatically using triggers, conditions and actions. Here's how it works and where it fails.",
    "image": "images/blog-what-is-workflow-automation.webp",
    "takeaways": [
      "Every automation is trigger → condition → action.",
      "Exceptions need a designed path, not an afterthought.",
      "Logs are what make automation trustworthy."
    ],
    "sections": [
      {
        "h": "The building blocks",
        "p": [
          "Every automated workflow is built from three parts. A trigger starts it (a form is submitted, an email arrives). Conditions decide what happens next (is the amount above a threshold? is the customer new?). Actions do the work (create a CRM record, notify an owner, send a reply)."
        ]
      },
      {
        "h": "Exceptions are the real design work",
        "p": [
          "The happy path is easy to automate. The value is in deciding what happens when data is missing, a system is down, or a case doesn't fit. Good automations route exceptions to a named person with full context."
        ]
      },
      {
        "h": "Why logs matter",
        "p": [
          "If nobody can see what an automation did and why, nobody will trust it. Every action should be logged in a place the team can search — that's what lets people step back from checking everything manually."
        ]
      },
      {
        "h": "What happens when the request arrives twice?",
        "p": [
          "A website form is submitted and a customer record is created. The browser then retries the request. If the workflow has no duplicate-handling rule, the team may see two enquiries and send two replies. Give the submission a stable reference, record its result and decide how a retry should retrieve that result."
        ]
      }
    ]
  },
  {
    "slug": "ai-agent-vs-chatbot",
    "title": "AI agent vs chatbot: what's the real difference?",
    "category": "Business AI",
    "kind": "Comparison",
    "readMin": 2,
    "date": "2026-08-12",
    "keywords": [
      "AI agent vs chatbot",
      "AI agents for business",
      "enterprise AI agents"
    ],
    "description": "A chatbot is a conversational interface; an agent can plan and use tools within a task. The boundaries overlap, so review permissions rather than the label.",
    "image": "images/blog-ai-agent-vs-chatbot.webp",
    "takeaways": [
      "A conversational interface can also use tools.",
      "Review what the system can read, change and send.",
      "Bounded tasks are easier to test and supervise."
    ],
    "sections": [
      {
        "h": "The interface and the behavior are different questions",
        "p": [
          "A chatbot describes how someone interacts with a system: through a conversation. Some chatbots return fixed answers; others retrieve information or call tools. An agent describes task-oriented behavior that may involve planning and several tool calls. The same product can include both."
        ]
      },
      {
        "h": "Look at the permissions",
        "p": [
          "A support assistant that reads an order needs different controls from one that changes the delivery address. Ask which tools are available, which records it can access and whether it can send a message without review. Product labels do not answer those questions."
        ]
      },
      {
        "h": "Give the first task clear boundaries",
        "p": [
          "Choose a task with a recognisable end state, representative examples and a named reviewer. Test a missing record, an unavailable tool and a request outside the allowed scope. Keep consequential changes behind an agreed approval policy."
        ]
      },
      {
        "h": "Compare two support tasks",
        "p": [
          "Finding a delivery status is a read operation. Changing the delivery address writes to a customer record and may affect fulfilment. Even if both requests arrive in the same chat window, the second needs a different permission and review path. Test those tasks separately."
        ]
      }
    ]
  },
  {
    "slug": "crm-vs-erp",
    "title": "CRM vs ERP: which system does your business actually need?",
    "category": "Software",
    "kind": "Comparison",
    "readMin": 2,
    "date": "2026-08-05",
    "keywords": [
      "CRM vs ERP",
      "CRM automation",
      "business systems integration"
    ],
    "description": "CRM manages customer relationships and sales; ERP manages operations and finance. How to tell which problem you have — and when you need both.",
    "image": "images/blog-crm-vs-erp.webp",
    "takeaways": [
      "CRM focuses on customer relationships and sales activity.",
      "ERP connects operational and financial transactions.",
      "The functions can overlap; define your own record ownership."
    ],
    "sections": [
      {
        "h": "What a CRM does",
        "p": [
          "A CRM tracks leads, conversations and deals. It answers: who are we talking to, what did we promise, and what happens next? If leads slip through the cracks, you have a CRM problem."
        ]
      },
      {
        "h": "What an ERP does",
        "p": [
          "An ERP connects transactions across areas such as purchasing, inventory, invoicing and accounting. It may also support sales orders before delivery. The important question is which record changes when a transaction happens and which team reviews it."
        ]
      },
      {
        "h": "When you need both",
        "p": [
          "When a won deal must become an operational order, agree which system owns the customer, order lines and invoice reference. A supported integration may avoid re-entry; replacement may still be appropriate if the existing system cannot meet the requirements. Compare both against the actual workflow."
        ]
      },
      {
        "h": "Follow one approved quotation",
        "p": [
          "A salesperson marks a quotation as accepted. Operations needs the agreed items, delivery details and customer reference; finance later needs the invoice and payment terms. Define the fields and handover event before buying another module. A shared customer name alone is not enough to connect the transaction."
        ]
      }
    ]
  },
  {
    "slug": "what-makes-software-production-ready",
    "title": "What makes software production-ready?",
    "category": "Software",
    "kind": "Framework",
    "readMin": 2,
    "date": "2026-07-29",
    "keywords": [
      "production-ready software",
      "software development company",
      "software quality checklist"
    ],
    "description": "Review the behavior, access controls, monitoring, recovery and operating instructions a team needs before relying on software for daily work.",
    "image": "images/blog-what-makes-software-production-ready.webp",
    "takeaways": [
      "Working on a laptop is not production-ready.",
      "You can't fix what you can't observe.",
      "Test your backups by restoring them."
    ],
    "sections": [
      {
        "h": "Correct",
        "p": [
          "Automated tests cover the core flows, and they run on every change. Edge cases found in testing become permanent tests."
        ]
      },
      {
        "h": "Secure",
        "p": [
          "Access is role-based, secrets are never in code, dependencies are scanned, and data is encrypted in transit and at rest."
        ]
      },
      {
        "h": "Observable",
        "p": [
          "Capture failures with enough context to investigate without exposing secrets or unnecessary personal data. Define which conditions need an alert and who responds. Monitoring should cover the important task, not just whether a server is running."
        ]
      },
      {
        "h": "Recoverable",
        "p": [
          "Agree acceptable data loss and recovery time, then test a restore against those requirements. A release needs a documented recovery route; database changes may make a simple rollback insufficient."
        ]
      },
      {
        "h": "Maintainable",
        "p": [
          "Another engineer can understand, run and change the system using its documentation. If only one person can deploy it, it isn't production-ready."
        ]
      },
      {
        "h": "Rehearse a failure before release",
        "p": [
          "Create a sample order, interrupt a dependent service and observe what the user sees. Then restore a backup in an isolated environment and check the sample records. Record who makes the recovery decision and what the team tells affected users. A successful demo does not answer these operating questions."
        ]
      }
    ]
  },
  {
    "slug": "how-to-scope-an-mvp",
    "title": "How to scope an MVP without building too much",
    "category": "Software",
    "kind": "How-to",
    "readMin": 2,
    "date": "2026-07-22",
    "keywords": [
      "how to scope an MVP",
      "MVP development",
      "product validation"
    ],
    "description": "A step-by-step method to scope a minimum viable product: one core action, one user, and a written list of what you won't build.",
    "image": "images/blog-how-to-scope-an-mvp.webp",
    "takeaways": [
      "Define the one core action first.",
      "Write down what you won't build.",
      "Measure behaviour, not compliments."
    ],
    "sections": [
      {
        "h": "1. Name the user and the problem",
        "p": [
          "Pick one type of user and describe a recent example of the problem. Speak to people who encounter it and observe the workaround they use today. The evidence may change the product idea before any code is written."
        ]
      },
      {
        "h": "2. Choose the core action",
        "p": [
          "What is the single action that delivers value? Booking a slot, submitting a document, getting a quote. Everything in the MVP exists to make that action work."
        ]
      },
      {
        "h": "3. Write the 'won't build' list",
        "p": [
          "List features that can wait, while keeping essential access controls, error handling and operational support in scope. An MVP can omit advanced reporting; it cannot assume someone else will manage a failed transaction."
        ]
      },
      {
        "h": "4. Decide the success signal",
        "p": [
          "Before building, agree which behavior would justify continuing: for example, whether pilot users complete the core task and return to use it again. Any numerical target should come from your business model and pilot conditions, not a universal benchmark."
        ]
      },
      {
        "h": "A booking product with one complete journey",
        "p": [
          "For an initial booking product, a user might choose a slot, enter contact details and receive a confirmation. The team still needs a way to handle cancellations and prevent double booking. Advanced loyalty points can wait; the controls that protect the central booking task belong in the first scope."
        ]
      }
    ]
  },
  {
    "slug": "mvp-vs-prototype",
    "title": "MVP vs prototype: what is the difference?",
    "category": "Software",
    "kind": "Comparison",
    "readMin": 2,
    "date": "2026-07-15",
    "keywords": [
      "MVP vs prototype",
      "prototype development",
      "startup product development"
    ],
    "description": "A prototype explores an idea; an MVP puts it in front of real users doing real work. Choosing the wrong one wastes months.",
    "image": "images/blog-mvp-vs-prototype.webp",
    "takeaways": [
      "Prototypes answer 'does this make sense?'",
      "MVPs answer 'will people use it?'",
      "Don't put prototypes into production."
    ],
    "sections": [
      {
        "h": "Prototypes are for learning",
        "p": [
          "A prototype can be a clickable mock-up or rough code. It exists to test whether an idea makes sense to users and stakeholders. It is expected to be thrown away."
        ]
      },
      {
        "h": "MVPs are for evidence",
        "p": [
          "An MVP is real, working software that a small group uses for their actual work. It must be reliable enough to trust, even if its scope is tiny."
        ]
      },
      {
        "h": "Which one you need",
        "p": [
          "If you're unsure whether the idea is understood, prototype. If you're unsure whether people will change their behaviour for it, build an MVP."
        ]
      },
      {
        "h": "Choose the question you need answered",
        "p": [
          "If a team cannot agree which information a quotation form needs, a clickable prototype can support that discussion. If the question is whether customers will submit enough detail without help, a small working pilot may provide better evidence. The method follows the question rather than the label."
        ]
      }
    ]
  },
  {
    "slug": "what-is-rbac",
    "title": "What is RBAC (role-based access control)?",
    "category": "Software",
    "kind": "Definition",
    "readMin": 2,
    "date": "2026-07-08",
    "keywords": [
      "what is RBAC",
      "role-based access control",
      "enterprise software security"
    ],
    "description": "Role-based access control grants permissions to roles rather than individual users — the foundation of secure internal software.",
    "image": "images/blog-what-is-rbac.webp",
    "takeaways": [
      "Permissions attach to roles, not people.",
      "Start with few roles; split when needed.",
      "Review access every quarter."
    ],
    "sections": [
      {
        "h": "How RBAC works",
        "p": [
          "Instead of granting each person permissions individually, you define roles — such as Agent, Manager and Admin — and give permissions to those roles. People are assigned roles."
        ]
      },
      {
        "h": "Why it matters",
        "p": [
          "RBAC makes onboarding and offboarding safe and fast, makes audits simple, and reduces the chance that someone keeps access they no longer need."
        ]
      },
      {
        "h": "Common mistakes",
        "p": [
          "Creating a new role for every person, giving everyone Admin 'to save time', and never reviewing who has what. Keep roles few and review them quarterly."
        ]
      },
      {
        "h": "Test the user who should be refused",
        "p": [
          "A coordinator may prepare a quotation, while a manager approves a discount. Test both accounts against the same record, including a direct request to the server. Hiding the approval button is not an access control. When a person changes roles, check the old permissions as well as the new ones."
        ]
      }
    ]
  },
  {
    "slug": "what-is-evidence-based-learning",
    "title": "Practical learning: assess the work as well as completion",
    "category": "Academy",
    "kind": "Framework",
    "readMin": 2,
    "date": "2026-07-01",
    "keywords": [
      "evidence-based learning",
      "project-based tech courses",
      "project-based coding course"
    ],
    "description": "A practical training plan should show what someone can complete, check and explain. Use sample tasks and review notes alongside any completion certificate.",
    "image": "images/blog-what-is-evidence-based-learning.webp",
    "takeaways": [
      "Completion and demonstrated capability answer different questions.",
      "Use realistic tasks and clear review criteria.",
      "Ask learners to explain the checks they made."
    ],
    "sections": [
      {
        "h": "Start with what the learner must do",
        "p": [
          "Write an observable task: prepare a quotation from a sample request, correct a spreadsheet error or review an AI draft against its source. Decide what a finished result should contain before teaching the tool."
        ]
      },
      {
        "h": "Practise, review and try again",
        "p": [
          "A practical session can begin with a demonstration, move into a sample task and finish with feedback. Ask the learner to explain a decision and repeat the task with one changed condition. The review can reveal which step needs more support."
        ]
      },
      {
        "h": "Keep the evidence specific",
        "p": [
          "A completion certificate records the programme’s stated completion criteria. A work sample and review notes provide additional context about what was demonstrated. This website does not operate a learner profile directory or claim an external accreditation."
        ]
      },
      {
        "h": "One task, then one changed condition",
        "p": [
          "Ask a learner to prepare a quotation from a complete sample enquiry. After feedback, give them a second enquiry with a missing delivery date. The second task checks whether they can recognise when to ask a question, rather than simply repeat the first sequence of clicks."
        ]
      }
    ]
  },
  {
    "slug": "what-does-verified-professional-capability-mean",
    "title": "What does 'verified professional capability' actually mean?",
    "category": "Hiring",
    "kind": "Definition",
    "readMin": 2,
    "date": "2026-06-24",
    "keywords": [
      "verified skills",
      "skills-based hiring",
      "verified talent platform"
    ],
    "description": "A capability claim needs context: what was reviewed, under which conditions and by whom. A practical guide to reading assessment labels carefully.",
    "image": "images/blog-what-does-verified-professional-capability-mean.webp",
    "takeaways": [
      "Self-reported, assessed and reviewed are different things.",
      "Labels should say exactly what was checked.",
      "Evidence beats adjectives."
    ],
    "sections": [
      {
        "h": "Three levels of confidence",
        "p": [
          "Self-reported: the person says they can do it. Assessed: they passed a set task under set conditions. Reviewed: someone independent examined their real work and agreed."
        ]
      },
      {
        "h": "Why labels matter",
        "p": [
          "A useful assessment label states what was checked, by whom, when and against which criteria. It should distinguish a portfolio discussion from an observed task or a reference check. This website does not publish verified candidate profiles."
        ]
      },
      {
        "h": "What employers should do",
        "p": [
          "Look at the evidence, not the label alone. Ask candidates to talk through a project on their profile — it's a better interview than any brain-teaser."
        ]
      },
      {
        "h": "Ask what the badge actually covers",
        "p": [
          "A reviewed interface portfolio does not establish that a person can operate a production database. Ask which work was examined, how much help was available and when the review happened. Keep the claimed skill close to the evidence instead of treating one assessment as a general guarantee."
        ]
      }
    ]
  },
  {
    "slug": "skills-based-hiring-guide",
    "title": "Skills-based hiring: a practical guide for employers",
    "category": "Hiring",
    "kind": "How-to",
    "readMin": 2,
    "date": "2026-06-17",
    "keywords": [
      "skills-based hiring",
      "hiring on skills",
      "how to hire developers"
    ],
    "description": "Write role requirements as observable capabilities, agree a fair work sample and record the evidence behind a hiring assessment.",
    "image": "images/blog-skills-based-hiring-guide.webp",
    "takeaways": [
      "Describe what the person must be able to do.",
      "Use a small work sample, paid if long.",
      "Score every candidate on the same rubric."
    ],
    "sections": [
      {
        "h": "Rewrite the job description",
        "p": [
          "Replace lists of years and degrees with capabilities: 'can build and deploy a REST API with authentication' is testable; '5+ years backend' is not."
        ]
      },
      {
        "h": "Assess with work, not puzzles",
        "p": [
          "A focused work sample lets you discuss decisions relevant to the role. Use written criteria and set a reasonable time limit in advance. Longer assessments should have an agreed payment arrangement; do not disguise a live client assignment as a test."
        ]
      },
      {
        "h": "Shortlist consistently",
        "p": [
          "Use the same core criteria for comparable candidates. Where possible, have reviewers record observations before discussing the score. Keep a short explanation of the evidence and the questions that remain."
        ]
      },
      {
        "h": "Write a review criterion before the exercise",
        "p": [
          "For a support role, a sample customer reply can be reviewed for factual accuracy, clarity, ownership of the next action and handling of missing information. Give reviewers the same scenario. Notes such as “noticed the missing reference and asked for it” are more useful than “seems proactive.”"
        ]
      }
    ]
  },
  {
    "slug": "document-automation-in-logistics",
    "title": "Where to start with document automation in logistics",
    "category": "Industries",
    "kind": "How-to",
    "readMin": 2,
    "date": "2026-06-10",
    "keywords": [
      "logistics automation",
      "document automation",
      "shipping document processing"
    ],
    "description": "A practical starting point for logistics companies automating bills of lading, invoices and delivery notes — without disrupting operations.",
    "image": "images/blog-document-automation-in-logistics.webp",
    "takeaways": [
      "Start with the highest-volume document type.",
      "Extract, validate, then file — in that order.",
      "Route mismatches to a person with context."
    ],
    "sections": [
      {
        "h": "Pick one document type",
        "p": [
          "Count documents by type for two weeks. Start with the most frequent one — often commercial invoices or delivery notes — rather than the most complex."
        ]
      },
      {
        "h": "Extract, validate, file",
        "p": [
          "Read the document into a draft record, compare required fields with the shipment information and keep the original attached for review. A container number, currency or invoice total should not be accepted merely because it looks plausible."
        ]
      },
      {
        "h": "Handle exceptions well",
        "p": [
          "When totals don't match or fields are missing, send the case to a named person with the document and the mismatch highlighted. Track exception rates weekly — they tell you what to fix upstream."
        ]
      },
      {
        "h": "Review a currency mismatch",
        "p": [
          "An invoice total is extracted correctly, but the currency differs from the job estimate. The workflow should flag that difference and preserve the original invoice for the coordinator. It should not silently replace the job currency or mark the invoice approved. A visible review queue keeps the discrepancy actionable."
        ]
      }
    ]
  },
  {
    "slug": "real-estate-lead-response-automation",
    "title": "Real estate lead response: give every enquiry a clear next step",
    "category": "Industries",
    "kind": "Guide",
    "readMin": 2,
    "date": "2026-06-03",
    "keywords": [
      "real estate CRM automation",
      "lead response time",
      "WhatsApp automation real estate"
    ],
    "description": "Bring portal, website and messaging enquiries into a reviewed follow-up process. Define ownership, duplicate handling and the next customer response.",
    "image": "images/blog-real-estate-lead-response-automation.webp",
    "takeaways": [
      "Every lead gets an owner and a follow-up date.",
      "Automate acknowledgement and qualification, not the relationship.",
      "Measure median response time weekly."
    ],
    "sections": [
      {
        "h": "The problem",
        "p": [
          "Leads arrive from portals, WhatsApp, calls and the website. They land in different inboxes, get picked up unevenly, and many never receive a reply on the same day."
        ]
      },
      {
        "h": "What to automate",
        "p": [
          "Capture every lead into the CRM, send an immediate acknowledgement, ask two or three qualifying questions, and assign the lead to an agent based on area and availability."
        ]
      },
      {
        "h": "What to keep human",
        "p": [
          "Agents confirm listing information, discuss preferences and arrange viewings. Automation should make waiting enquiries visible and preserve context for the next conversation. Exceptions and unverified availability need a person to review them."
        ]
      },
      {
        "h": "Make the follow-up visible",
        "p": [
          "A customer asks about a property while the assigned agent is in a viewing. The acknowledgement can confirm receipt and explain the next step without promising availability. The CRM records the owner and a follow-up task. If that task becomes overdue, the team can reassign it with the enquiry history intact."
        ]
      }
    ]
  },
  {
    "slug": "responsible-ai-checklist",
    "title": "A responsible AI checklist for mid-sized companies",
    "category": "Business AI",
    "kind": "Checklist",
    "readMin": 2,
    "date": "2026-05-27",
    "keywords": [
      "responsible AI",
      "AI governance",
      "AI data privacy"
    ],
    "description": "Human oversight, data minimisation, logging and clear limits — the practical safeguards every AI deployment should have before launch.",
    "image": "images/blog-responsible-ai-checklist.webp",
    "takeaways": [
      "Give AI only the data its task needs.",
      "Keep a human approval step for consequential actions.",
      "Document what the system should never do."
    ],
    "sections": [
      {
        "h": "Data minimisation",
        "p": [
          "Each AI component should see only the fields it needs. Personal and sensitive data should be excluded or masked by default."
        ]
      },
      {
        "h": "Human oversight",
        "p": [
          "Define approval requirements according to the action and its consequences. A low average error rate does not remove the need for financial authority, customer consent or another required review. A person should be able to pause the workflow and inspect what it proposes."
        ]
      },
      {
        "h": "Logging and review",
        "p": [
          "Keep the records needed to investigate an action, with access and retention limits. Avoid storing complete sensitive inputs simply because logging is available. Review representative results and exceptions at a frequency suited to the workflow."
        ]
      },
      {
        "h": "Stated limits",
        "p": [
          "Write down what the system must never do, and test for it. Share that list with the team who uses it."
        ]
      },
      {
        "h": "Write a stop condition people understand",
        "p": [
          "A document workflow might stop when the extracted total conflicts with the approved record, the source is missing or a required tool is unavailable. The review queue should explain the reason and show the source. “Low confidence” alone gives a reviewer little help deciding what to check."
        ]
      }
    ]
  }
];
export function findArticle(slug){return ARTICLES.find(a=>a.slug===slug);}
