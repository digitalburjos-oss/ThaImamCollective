import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
const root=new URL('../dist/',import.meta.url);
const routes=JSON.parse(fs.readFileSync(new URL('seo-routes.json',root),'utf8'));
const read=f=>fs.readFileSync(new URL(f.slice(1),root),'utf8');
const base=src=>src.replace(/^\/images\//,'').replace(/-768(?=\.webp)/,'').replace(/\.webp$/,'');
// Which underlying photograph a file was cut from.
const photoOf=name=>{if(!name.startsWith('heroes/'))return name;const n=name.slice(7).replace(/-\d+$/,'');return fs.existsSync(new URL(`images/blog-${n}.webp`,root))?'blog-'+n:n;};
const heroOf=html=>{const {document:d}=parseHTML(html);return base(d.querySelector('.hero-cinema img').getAttribute('src'));};
test('every page has its own hero file',()=>{const seen=new Map();for(const route of Object.keys(routes)){const h=heroOf(read(routes[route]));assert(!seen.has(h),`${route} repeats the hero of ${seen.get(h)}`);seen.set(h,route);assert(fs.existsSync(new URL(`images/${h}.webp`,root)));assert(fs.existsSync(new URL(`images/${h}-768.webp`,root)));}});
test('a page never shows the same photograph twice',()=>{for(const route of Object.keys(routes)){const {document:d}=parseHTML(read(routes[route]));const main=d.querySelector('main');const used=[...main.querySelectorAll('img')].map(i=>i.getAttribute('src')||'').filter(s=>s.startsWith('/images/')).map(s=>photoOf(base(s)));const dupes=used.filter((x,i)=>used.indexOf(x)!==i);assert.deepEqual(dupes,[],`${route} repeats ${dupes}`);}});
