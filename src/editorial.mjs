const descriptions={
'what-is-business-ai':'Business owner and colleague reviewing quotation paperwork beside a laptop',
'when-should-a-company-automate-a-workflow':'Operations colleagues reviewing a repeated order-entry task at a workstation',
'what-is-workflow-automation':'Order-processing desk with document trays and a shipping-label printer',
'ai-agent-vs-chatbot':'Support specialist reviewing a customer message and a paper checklist',
'crm-vs-erp':'Sales and warehouse colleagues comparing a customer order with stock records',
'what-makes-software-production-ready':'Software team checking a laptop release and testing a phone',
'how-to-scope-an-mvp':'Product designers selecting a small sequence of paper interface sketches',
'mvp-vs-prototype':'Paper mobile interface prototype beside a smartphone on a design desk',
'what-is-rbac':'Administrator reviewing an access request with a new colleague',
'what-is-evidence-based-learning':'Learner practising a laptop task while a tutor observes',
'what-does-verified-professional-capability-mean':'Reviewer discussing a printed work sample with a candidate',
'skills-based-hiring-guide':'Candidate explaining a practical work sample during a small interview',
'document-automation-in-logistics':'Freight coordinator comparing shipping documents at a warehouse office desk',
'real-estate-lead-response-automation':'Property adviser responding to a phone enquiry beside a floor plan',
'responsible-ai-checklist':'Operations team reviewing a printed approval checklist around a laptop'
};
export const articleImage=a=>'blog-'+a.slug;
export const articleAlt=a=>descriptions[a.slug]||a.title;
