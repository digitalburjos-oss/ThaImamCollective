import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
import {MODULES} from '../src/catalogue.mjs';
const base=new URL('../dist/',import.meta.url),routes=JSON.parse(fs.readFileSync(new URL('seo-routes.json',base)));
const read=p=>fs.readFileSync(new URL(p.replace(/^\//,''),base),'utf8');
test('each page has at most one closing invitation and no repeated footer invitation',()=>{
 for(const [route,file] of Object.entries(routes)){const {document:d}=parseHTML(read(file));assert.equal(d.querySelector('.footer-top'),null,route);assert.equal(d.querySelector('.footer-invite'),null,route);assert(d.querySelectorAll('.cta-section').length<=1,route);assert(d.querySelector('.footer-contact a[href^="mailto:"]'),route);}
});
test('every interior page has a complete hero and meaningful next step',()=>{
 for(const [route,file]of Object.entries(routes)){const {document:d}=parseHTML(read(file));assert(d.querySelector('link[href="/hero-premium.css"]'));if(route==='/'){assert(d.querySelector('.corporate-hero'));continue;}assert(d.querySelector('.premium-hero,.premium-service-hero'),route);const rail=d.querySelector('.hero-context');if(rail){assert.equal(rail.querySelectorAll('li').length,3);assert(rail.querySelector('a[href]'));assert(!/\b(live|guarantee|clients served)\b/i.test(rail.textContent));}}
});
test('all reference sitemap pages have an accessible Collective counterpart',()=>{
 const coverage=JSON.parse(fs.readFileSync(new URL('../docs/page-coverage.json',import.meta.url)));assert.equal(coverage.referencePageCount,31);for(const item of coverage.pages)assert(routes[item.collectivePath],item.referencePath);assert(routes['/solutions']);assert(routes['/portfolio']);assert(routes['/catalogue']);
});
test('fourteen module pages are linked and describe visible configuration scope',()=>{
 assert.equal(MODULES.length,14);const index=read(routes['/catalogue']);for(const m of MODULES){assert(index.includes('href="'+m.url+'"'));const {document:d}=parseHTML(read(routes[m.url]));assert(d.querySelector('.module-scope-note'));assert(d.querySelector('main').textContent.includes(m.acceptance));const graph=JSON.parse(d.querySelector('[type="application/ld+json"]').textContent)['@graph'];assert(graph.some(x=>x['@type']==='Service'&&x.name===m.name));for(const q of graph.find(x=>x['@type']==='FAQPage').mainEntity)assert(d.querySelector('main').textContent.includes(q.acceptedAnswer.text));}
});

test('every hero has one decorative image and every page closes with a clear next step',()=>{
 for(const [route,file] of Object.entries(routes)){const {document:d}=parseHTML(read(file));const cinema=d.querySelector('.cinematic-hero .hero-cinema');assert(cinema,route);assert.equal(cinema.getAttribute('aria-hidden'),'true');assert.equal(cinema.querySelectorAll('img').length,1);for(const img of cinema.querySelectorAll('img'))assert.equal(img.getAttribute('alt'),'');assert(d.querySelector('.cta-section,.next-steps'),route);}
 const {document:d}=parseHTML(read(routes['/company']));assert.equal(d.querySelector('.wide-photo'),null);
});
