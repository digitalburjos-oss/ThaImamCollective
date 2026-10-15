import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
import {JSDOM} from 'jsdom';
import {ARTICLES} from '../src/articles.mjs';
import {TOPICS} from '../src/topics.mjs';
const root=new URL('../dist/',import.meta.url),routes=JSON.parse(fs.readFileSync(new URL('seo-routes.json',root)));
const read=p=>fs.readFileSync(new URL(p.replace(/^\//,''),root),'utf8');
test('every blog has distinct real assets and matching social and article metadata',()=>{
 const paths=new Set();for(const a of ARTICLES){const {document:d}=parseHTML(read(routes['/insights/'+a.slug]));const image=d.querySelector('.article-cover');assert(image);const src=image.getAttribute('src');assert(!paths.has(src));paths.add(src);assert(fs.existsSync(new URL(src.slice(1),root)));assert(fs.existsSync(new URL(src.slice(1).replace('.webp','-768.webp'),root)));assert.equal(d.querySelector('meta[property="og:image"]').content,'https://theimamcollective.com'+src);const graph=JSON.parse(d.querySelector('[type="application/ld+json"]').textContent)['@graph'];assert.equal(graph.find(x=>x['@type']==='BlogPosting').image[0],'https://theimamcollective.com'+src);}
 assert.equal(paths.size,15);
});
test('all pages share brand lockup, footer and clean organisation identity',()=>{
 for(const file of Object.values(routes)){const html=read(file),{document:d}=parseHTML(html);assert(!/digitalburj|loadbyton|elvora/i.test(html));assert.equal(d.querySelector('.brand-tagline').textContent,'Intelligent Management & Automation Matrix');assert.equal(d.querySelector('.footer-brand img').getAttribute('src'),'/brand/logo-footer.png');assert(d.querySelector('link[rel="icon"][sizes="32x32"]'));const graph=JSON.parse(d.querySelector('[type="application/ld+json"]').textContent)['@graph'];if(file!==routes['/'])assert(graph.some(x=>x['@type']==='BreadcrumbList'));}
});
test('new service and industry pages are linked, structured and specific',()=>{
 assert.equal(TOPICS.length,24);for(const t of TOPICS){assert(routes[t.url]);const {document:d}=parseHTML(read(routes[t.url]));assert(d.querySelector('main').textContent.includes(t.acceptance));const graph=JSON.parse(d.querySelector('[type="application/ld+json"]').textContent)['@graph'];assert(graph.some(x=>x['@type']==='Service'&&x.name===t.name));for(const q of graph.find(x=>x['@type']==='FAQPage').mainEntity){assert(d.querySelector('main').textContent.includes(q.name));assert(d.querySelector('main').textContent.includes(q.acceptedAnswer.text));}}
 const hub=read(routes['/expertise']);for(const t of TOPICS)assert(hub.includes('href="'+t.url+'"'));
});
test('analytics is disabled without an ID and sends nothing before a choice',async()=>{
 const config=JSON.parse(read('analytics-config.json'));assert.equal(config.enabled,false);assert.equal(config.measurementId,'');
 const dom=new JSDOM(read('index.html'),{url:'https://theimamcollective.com/contact?email=private@example.com',runScripts:'outside-only'}),w=dom.window;
 w.fetch=async()=>({ok:true,json:async()=>config});w.eval(read('analytics.js'));await new Promise(r=>setTimeout(r,0));assert.equal(w.document.querySelector('script[src*="googletagmanager"]'),null);
 w.document.querySelector('[data-analytics-settings]').click();assert(!w.document.querySelector('#analytics-preferences').hidden);w.document.querySelector('[data-analytics-accept]').click();assert.equal(w.document.querySelector('script[src*="googletagmanager"]'),null);dom.window.close();
});
test('configured analytics waits for consent and excludes query strings',async()=>{
 const dom=new JSDOM(read('index.html'),{url:'https://theimamcollective.com/contact?email=private@example.com',runScripts:'outside-only'}),w=dom.window;
 w.fetch=async()=>({ok:true,json:async()=>({enabled:true,measurementId:'G-TEST1234'})});w.eval(read('analytics.js'));await new Promise(r=>setTimeout(r,0));assert.equal(w.document.querySelector('script[src*="googletagmanager"]'),null);w.document.querySelector('[data-analytics-accept]').click();assert(w.document.querySelector('script[src*="googletagmanager"]'));const events=JSON.stringify(w.dataLayer);assert(!events.includes('private@example.com'));assert(events.includes('https://theimamcollective.com/contact'));w.document.querySelector('[data-analytics-reject]').click();assert.equal(w['ga-disable-G-TEST1234'],true);dom.window.close();
});

test('service heroes keep the breadcrumb and omit the duplicate capability link',()=>{
 for(const slug of ['os','ai','studio','growth','academy','talent']){const {document:d}=parseHTML(read(routes['/services/'+slug]));assert(d.querySelector('nav[aria-label=Breadcrumb]'));assert.equal(d.querySelector('.service-hero .back-link'),null);assert.equal(d.querySelectorAll('.service-hero .division-logo').length,1);assert(d.querySelector('.mega-link img.capability-icon'));}
});
