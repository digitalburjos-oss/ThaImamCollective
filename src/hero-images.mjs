// One hero background per route. Every file under /images/heroes is used at most once;
// the build fails if a route has no image or two routes share one.
const groups={
 'studio':['/services/studio','/expertise/brand-identity','/expertise/website-design-development','/work/service-website'],
 'editorial-testing':['/expertise/ecommerce-development','/expertise/mobile-app-development','/expertise/custom-software-development','/expertise/analytics-dashboards'],
 'operations':['/industries/logistics','/work/freight-operations','/industries/trading-distribution','/catalogue/inventory-warehousing'],
 'global':['/company','/industries','/industries/travel-tourism','/industries/hospitality'],
 'hero':['/','/solutions','/portfolio','/services'],
 'editorial-enquiries':['/contact','/get-started','/work/customer-enquiry','/expertise/crm-implementation'],
 'editorial-training':['/services/academy','/expertise/team-ai-training','/industries/education-training','/work/team-onboarding'],
 'document-automation-in-logistics':['/expertise/document-automation','/catalogue/document-management','/catalogue/procurement','/industries/manufacturing'],
 'what-is-workflow-automation':['/expertise/workflow-automation','/catalogue/automation-engine','/industries/ecommerce-operations','/industries/retail-commerce'],
 'ai-agent-vs-chatbot':['/services/ai','/expertise/ai-agents','/expertise/knowledge-assistants','/catalogue/communications-dashboards'],
 'crm-vs-erp':['/services/os','/expertise/erp-implementation','/catalogue/customer-relationships','/catalogue/sales-quotations'],
 'real-estate-lead-response-automation':['/industries/real-estate','/services/growth','/expertise/paid-campaigns','/expertise/social-media-content'],
 'skills-based-hiring-guide':['/services/talent','/expertise/skills-based-talent','/industries/recruitment','/jobs'],
 'what-is-rbac':['/catalogue/approval-controls','/catalogue/company-administration','/privacy','/catalogue/people-hr'],
 'what-is-business-ai':['/pricing','/expertise','/catalogue','/industries/professional-services'],
 'how-to-scope-an-mvp':['/expertise/seo-services','/expertise/answer-engine-optimisation','/demo','/404'],
 'what-makes-software-production-ready':['/catalogue/tax-einvoicing','/catalogue/projects-time','/catalogue/payroll-workflows','/catalogue/finance-records'],
 'mvp-vs-prototype':['/industries/construction','/industries/facility-management','/industries/automotive','/work'],
 'what-is-evidence-based-learning':['/industries/healthcare-administration','/industries/restaurants-food-service']
};
const map={'/insights':'heroes/studio-5'};
for(const [src,routes] of Object.entries(groups))routes.forEach((r,i)=>{map[r]=`heroes/${src}-${i+1}`});
// Field notes use a differently framed non-editorial photograph, so the hero never repeats the article cover.
const articlePool=['editorial-testing','operations','global','hero','editorial-enquiries','editorial-training','studio'].flatMap(s=>[5,6,7].map(n=>`heroes/${s}-${n}`)).filter(x=>x!=='heroes/studio-5');
let articleIndex=0;const articleMap={};
export function heroImage(route){
 if(route.startsWith('/insights/')){if(!articleMap[route])articleMap[route]=articlePool[articleIndex++];return articleMap[route];}
 const h=map[route];if(!h)throw new Error('No hero image assigned for '+route);return h;
}
