import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
const base=process.env.VERIFY_ORIGIN||'http://127.0.0.1:3000',target=new URL(base);assert(['http:','https:'].includes(target.protocol)&&!target.username&&!target.password&&target.pathname==='/');
const routes=JSON.parse(fs.readFileSync(new URL('../dist/seo-routes.json',import.meta.url)));let failed=0;
for(const route of Object.keys(routes)){try{const r=await fetch(target.origin+route);assert.equal(r.status,200);const {document:d}=parseHTML(await r.text());assert.equal(d.querySelector('link[rel=canonical]').getAttribute('href'),'https://theimamcollective.com'+route);assert.equal(d.querySelectorAll('h1').length,1);assert(d.title.includes('the collective'));console.log('PASS',route);}catch(e){failed++;console.error('FAIL',route,e.message);}}
for(const route of ['/site.css','/site.js','/brand/logo-compact.png','/images/hero.webp','/favicon.ico','/sitemap.xml','/robots.txt']){const r=await fetch(target.origin+route);if(r.status!==200){failed++;console.error('FAIL',route,r.status);}}
const missing=await fetch(target.origin+'/insights/nonexistent-check');if(missing.status!==404){failed++;console.error('FAIL missing-route status');}
for(const [old,next]of Object.entries(JSON.parse(fs.readFileSync(new URL('../dist/route-aliases.json',import.meta.url))))){const r=await fetch(target.origin+old,{redirect:'manual'});if(![301,308].includes(r.status)||r.headers.get('location')!==next){failed++;console.error('FAIL redirect',old);}}
console.log(`${Object.keys(routes).length} pages checked; ${failed} failures.`);process.exitCode=failed?1:0;
