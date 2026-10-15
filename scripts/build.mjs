import fs from 'node:fs';
import path from 'node:path';
import {brand,services,projects} from '../src/content.mjs';
import {ARTICLES} from '../src/articles.mjs';
import {esc,header,footer} from '../src/components.mjs';
import * as pages from '../src/pages.mjs';
import {engagement} from '../src/engagement.mjs';
import {TOPICS} from '../src/topics.mjs';
import {topicHub,topicPage,topicFaq} from '../src/topic-pages.mjs';
import {articleImage} from '../src/editorial.mjs';
import {enhanceHero} from '../src/hero-system.mjs';
import {MODULES,catalogue,modulePage,moduleFaq,solutions,portfolio} from '../src/catalogue.mjs';
const root=path.resolve(import.meta.dirname,'..'),dist=path.join(root,'dist');
const definitions=[
['/','Intelligent systems. Thoughtful design. Worldwide.','Connected business systems, useful AI, thoughtful design and digital growth. The collective works with teams worldwide to make the next chapter work better.',pages.home],
['/catalogue','Business systems and service catalogue','Explore fourteen business module areas and the connected service catalogue. Records, approvals, workflow scope and handover guidance for growing teams.',catalogue],
['/solutions','Connected business solutions','Find a route from your operational problem to the right combination of software, automation, digital experience, growth, training and talent services.',solutions],
['/portfolio','Experience studies and workflow portfolio','Explore anonymous workflow and interface studies with sample records, practical decisions and clear scope, without named client or performance claims.',portfolio],
['/expertise','Business software, automation, design and growth services','Explore detailed services for CRM, ERP, AI agents, websites, custom software, SEO, practical training and talent. Clear scope and handover guidance.',topicHub],
['/services','Connected capabilities','Explore Collective OS, AI, Studio, Growth, Academy and Talent. Practical services for connected operations, digital products and capable teams.',pages.servicesPage],
['/work','Practical workflow examples','Explore sample workflows for freight operations, customer enquiries, service websites and team onboarding. Illustrative scope, with no claimed client results.',pages.workPage],
['/company','Independent minds. Collective momentum.','Meet the collective’s approach to worldwide collaboration: understand the work, shape the brief, build carefully and leave capability behind.',pages.company],
['/industries','Connected work across industries','Practical systems, automation and digital experiences for logistics, professional services, commerce, learning and growing digital teams.',pages.industries],
['/pricing','Considered investment. Pricing in USD.','Indicative platform pricing in US dollars, with implementation, custom software, marketing and training scoped separately against clear deliverables.',pages.pricing],
['/contact','Let’s make something work better','Contact the collective about business systems, useful automation, thoughtful websites, digital growth or a new project. Worldwide collaboration.',()=>pages.contact(false)],
['/get-started','What’s next? Start a project brief.','Share your challenge, current process and desired outcome. Start a practical project conversation with the collective, wherever your team works.',()=>pages.contact(true)],
['/insights','Field notes, written to be used','Practical articles on automation, business systems, product decisions and capability. Useful starting points for teams building and improving their work.',pages.insights],
['/demo','Explore a connected workspace','Try an interactive sample dashboard and follow an enquiry through a controlled automation. Local demo data only; nothing is sent to a live account.',pages.playground],
['/jobs','People and collaboration','Share your portfolio and collaboration interests with the collective. No specific public job openings or placements are advertised on this website.',pages.jobs],
['/privacy','Your information, clearly explained','Read how the collective uses information submitted through enquiries and newsletter forms, and how to contact us about your information.',pages.privacy],
...MODULES.map(m=>[m.url,m.name+' — Collective OS',m.description,()=>modulePage(m)]),
...TOPICS.map(t=>[t.url,t.name+' — '+t.heading,t.description,()=>topicPage(t)]),
...services.map(s=>['/services/'+s.slug,s.name+' — '+s.short,s.summary+' '+s.lead,()=>pages.servicePage(s)]),
...projects.map(p=>['/work/'+p.slug,p.name+' — '+p.type,p.description+' Explore the workflow, responsibilities and handover.',()=>pages.projectPage(p)]),
...ARTICLES.map(a=>['/insights/'+a.slug,a.title,a.description,()=>pages.articlePage(a),a])
];
export const aliases={'/business-os':'/services/os','/business-ai':'/services/ai','/studio':'/services/studio','/growth':'/services/growth','/academy':'/services/academy','/talent':'/services/talent'};
const search=definitions.filter(d=>!['/privacy','/get-started'].includes(d[0])).map(([url,title,description])=>({url,title,description,type:url.startsWith('/services/')?'Capability':url.startsWith('/work/')?'Project':url.startsWith('/insights/')?'Field note':'Page'}));
const json=o=>JSON.stringify(o).replace(/</g,'\\u003c');
function shell(route,title,description,body,article){
 body=enhanceHero(body,route);
 const canonical=brand.origin+route,fullTitle=title+' | the collective';
 const image=brand.origin+(article?'/images/'+articleImage(article)+'.webp':'/brand/social-cover.png');
 const topic=TOPICS.find(t=>t.url===route)||MODULES.find(m=>m.url===route),service=services.find(s=>route==='/services/'+s.slug);
 const graph=[{'@type':'Organization','@id':brand.origin+'/#organization',name:brand.name,url:brand.origin,description:brand.tagline,logo:{'@type':'ImageObject',url:brand.origin+'/brand/logo-primary.png'},email:brand.email,telephone:brand.phone},{'@type':'WebSite','@id':brand.origin+'/#website',name:brand.name,url:brand.origin,inLanguage:'en'},{'@type':article?'BlogPosting':'WebPage','@id':canonical+'#page',url:canonical,name:title,description,inLanguage:'en',...(article?{headline:article.title,datePublished:article.date,dateModified:'2026-10-15',image:[image],author:{'@id':brand.origin+'/#organization'},publisher:{'@id':brand.origin+'/#organization'},mainEntityOfPage:canonical,keywords:article.keywords.join(', ')}:{})}];
 const segments=route.split('/').filter(Boolean);
 const crumbs=[{label:'Home',url:'/'}];
 segments.forEach((segment,i)=>{const url='/'+segments.slice(0,i+1).join('/');const page=definitions.find(d=>d[0]===url);crumbs.push({label:page?page[1].split(' — ')[0]:segment.replaceAll('-',' '),url})});
 if(route!=='/')graph.push({'@type':'BreadcrumbList',itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.label,item:brand.origin+c.url}))});
 if(topic||service)graph.push({'@type':'Service',name:topic?.name||service.name,description:topic?.problem||service.summary,url:canonical,provider:{'@id':brand.origin+'/#organization'},serviceType:topic?.name||service.name});
 const questions=topic?(MODULES.some(m=>m.url===route)?moduleFaq(topic):topicFaq(topic)):service?.faq;
 if(questions)graph.push({'@type':'FAQPage',mainEntity:questions.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))});
 const breadcrumb=route==='/'?'':`<nav class="breadcrumbs wrap" aria-label="Breadcrumb">${crumbs.map((c,i)=>i===crumbs.length-1?`<span aria-current="page">${esc(c.label)}</span>`:`<a href="${c.url}">${esc(c.label)}</a><span aria-hidden="true">/</span>`).join('')}</nav>`;
 return `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${esc(fullTitle)}</title><meta name="description" content="${esc(description)}"><meta name="theme-color" content="#28142D"><meta name="robots" content="index,follow,max-image-preview:large"><link rel="canonical" href="${canonical}"><link rel="icon" href="/favicon.ico"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png"><link rel="apple-touch-icon" href="/favicon-180.png"><link rel="manifest" href="/manifest.webmanifest"><link rel="preload" as="font" type="font/woff2" href="/fonts/plus-jakarta-sans-latin-wght-normal.woff2" crossorigin><link rel="preload" as="font" type="font/woff2" href="/fonts/instrument-sans-latin-wght-normal.woff2" crossorigin><link rel="stylesheet" href="/site.css"><link rel="stylesheet" href="/corporate.css"><link rel="stylesheet" href="/engagement.css"><link rel="stylesheet" href="/hero-premium.css"><link rel="stylesheet" href="/vivid.css"><meta property="og:title" content="${esc(fullTitle)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="${article?'article':'website'}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="the collective"><meta property="og:image" content="${image}"><meta property="og:image:alt" content="${esc(article?article.title:brand.name+' identity')}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(fullTitle)}"><meta name="twitter:description" content="${esc(description)}"><meta name="twitter:image" content="${image}"><script type="application/ld+json">${json({'@context':'https://schema.org','@graph':graph})}</script><script id="search-index" type="application/json">${json(search)}</script><script src="/site.js" defer></script><script src="/corporate.js" defer></script><script src="/engagement.js" defer></script><script src="/analytics.js" defer></script><script src="/vivid.js" defer></script></head><body id="top">${header(route)}${breadcrumb}<main id="main">${body}</main>${footer()}${engagement()}</body></html>\n`;
}
fs.rmSync(dist,{recursive:true,force:true});fs.mkdirSync(dist,{recursive:true});fs.cpSync(path.join(root,'public'),dist,{recursive:true});
const routes={};
for(const [route,title,desc,render,article] of definitions){const file='/pages/'+(route==='/'?'home':route.slice(1))+'.html';const target=path.join(dist,file);fs.mkdirSync(path.dirname(target),{recursive:true});const html=shell(route,title,desc,render(),article);fs.writeFileSync(target,html);routes[route]=file;if(route==='/')fs.writeFileSync(path.join(dist,'index.html'),html);}
fs.writeFileSync(path.join(dist,'seo-routes.json'),JSON.stringify(routes,null,2)+'\n');
fs.writeFileSync(path.join(dist,'route-aliases.json'),JSON.stringify(aliases,null,2)+'\n');
fs.writeFileSync(path.join(dist,'manifest.webmanifest'),json({name:'the collective — Intelligent Management & Automation Matrix',short_name:'the collective',start_url:'/',display:'browser',theme_color:'#28142D',background_color:'#FBF8F0',icons:[{src:'/favicon-192.png',sizes:'192x192',type:'image/png'},{src:'/favicon-512.png',sizes:'512x512',type:'image/png'}]}));
fs.writeFileSync(path.join(dist,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'+definitions.map(([route,,,,article])=>'<url><loc>'+brand.origin+route+'</loc><lastmod>2026-10-15</lastmod>'+(article?'<image:image><image:loc>'+brand.origin+'/images/'+articleImage(article)+'.webp</image:loc></image:image>':'')+'</url>').join('')+'</urlset>\n');
fs.writeFileSync(path.join(dist,'robots.txt'),'User-agent: *\nAllow: /\nDisallow: /api/\nSitemap: '+brand.origin+'/sitemap.xml\n');
fs.writeFileSync(path.join(dist,'llms.txt'),'# the collective\n\n'+brand.tagline+'\n\nWorldwide collaboration. Platform estimates in USD.\n\n'+definitions.map(([r,t])=>`- [${t}](${brand.origin+r})`).join('\n')+'\n');
const notfound=shell('/404','This page took a different turn.','The requested page could not be found.',`<section class="page-intro wrap"><h1>This page took<br><span>a different turn.</span></h1><p class="lead" style="margin-top:30px">Let’s get you back to the work.</p><a class="button primary" href="/" style="margin-top:30px">Return to the collective →</a></section>`).replace('content="index,follow,max-image-preview:large"','content="noindex,follow"');fs.writeFileSync(path.join(dist,'404.html'),notfound);
const legacy={'Homepage':'/','BusinessOS':'/services/os','BusinessAI':'/services/ai','Growth':'/services/growth','Studio':'/services/studio','Industries':'/industries','Academy':'/services/academy','Talent':'/services/talent','Jobs':'/jobs','Pricing':'/pricing','Company':'/company','Solutions':'/solutions','Portfolio':'/portfolio','GetStarted':'/get-started','Contact':'/contact','Insights':'/insights'};
const redirects=[...Object.entries(aliases).map(([source,destination])=>({source,destination,permanent:true})),...Object.entries(legacy).map(([name,destination])=>({source:`/${name}.dc.html`,destination,permanent:true})),{source:'/index.html',destination:'/',permanent:true}];
fs.writeFileSync(path.join(root,'vercel.json'),JSON.stringify({buildCommand:'npm run build',outputDirectory:'dist',trailingSlash:false,cleanUrls:false,redirects,rewrites:Object.entries(routes).map(([source,destination])=>({source,destination})),headers:[{source:'/(.*)',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'strict-origin-when-cross-origin'}]},{source:'/(fonts|images|brand)/(.*)',headers:[{key:'Cache-Control',value:'public, max-age=86400'}]}]},null,2)+'\n');
fs.writeFileSync(path.join(root,'cloudflare/seo-routes.js'),'// Generated by npm run build.\nexport const SEO_ROUTES = '+JSON.stringify(routes,null,2)+';\n');
console.log(`Built ${definitions.length} complete pages for the collective. ${Object.keys(aliases).length} legacy route aliases preserved.`);
