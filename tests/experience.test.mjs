import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {parseHTML} from 'linkedom';
import {JSDOM} from 'jsdom';
const dist=new URL('../dist/',import.meta.url);const routes=JSON.parse(fs.readFileSync(new URL('seo-routes.json',dist)));
const read=p=>fs.readFileSync(new URL(p.replace(/^\//,''),dist),'utf8');
test('all public pages use one experience system and the same reference hero hierarchy',()=>{
 for(const [route,file]of Object.entries(routes)){
  const {document:d}=parseHTML(read(file));
  assert.deepEqual([...d.querySelectorAll('link[rel=stylesheet]')].map(n=>n.getAttribute('href')),['/experience.css'],route);
  assert.equal(d.querySelectorAll('.cx-hero,.cx-page-hero').length,1,route);
  assert(d.querySelector('.cx-hero-grid>.cx-hero-copy h1.cx-hero-title'),route);
  assert.equal(d.querySelectorAll('.breadcrumbs').length,route==='/'?0:1,route);
  if(route!=='/')assert(d.querySelector('.cx-hero-copy>.breadcrumbs'),route);
  assert(d.querySelector('script[src="/experience.js"]'),route);
  assert(d.querySelector('.header a[href="/get-started"]'),route);
  assert(d.querySelector('.footer img[src="/brand/logo-footer.png"]'),route);
 }
});
test('reference mobile sheet closes, restores scroll and traps tab within its open controls',async()=>{
 const dom=new JSDOM(read(routes['/contact']),{url:'https://theimamcollective.com/contact',runScripts:'outside-only'});
 const w=dom.window;w.matchMedia=()=>({matches:true,addEventListener(){}});
 w.eval(read('site.js'));w.eval(read('experience.js'));
 const d=w.document,menu=d.querySelector('.menu-toggle'),drawer=d.querySelector('#mobile-menu');
 menu.click();await Promise.resolve();assert.equal(drawer.hidden,false);assert.equal(d.body.style.overflow,'hidden');assert.equal(d.querySelector('[data-mobile-backdrop]').hidden,false);
 const controls=[...drawer.querySelectorAll('a[href],button:not([disabled])')];controls.at(-1).focus();controls.at(-1).dispatchEvent(new w.KeyboardEvent('keydown',{key:'Tab',bubbles:true,cancelable:true}));assert.equal(d.activeElement,controls[0]);
 d.querySelector('[data-mobile-close]').click();await Promise.resolve();assert(drawer.hidden);assert.equal(d.body.style.overflow,'');assert.equal(d.activeElement,menu);dom.window.close();
});

test('capability carousel supports next, previous, keyboard boundaries and reduced motion',()=>{
 const dom=new JSDOM(read(routes['/']),{url:'https://theimamcollective.com/',runScripts:'outside-only'});const w=dom.window;w.matchMedia=()=>({matches:true,addEventListener(){}});
 const d=w.document,track=d.querySelector('.horizontal-track');assert(track);track.style.gap='18px';
 Object.defineProperties(track,{clientWidth:{value:1000},scrollWidth:{value:2010}});track.children[0].getBoundingClientRect=()=>({width:320});
 let behavior;track.scrollTo=options=>{behavior=options.behavior;track.scrollLeft=Math.max(0,Math.min(1010,options.left));track.dispatchEvent(new w.Event('scroll'));};
 w.eval(read('experience.js'));const previous=d.querySelector('[data-carousel-prev]'),next=d.querySelector('[data-carousel-next]');assert(previous.disabled);next.click();assert.equal(track.scrollLeft,338);assert.equal(behavior,'instant');previous.click();assert.equal(track.scrollLeft,0);
 track.dispatchEvent(new w.KeyboardEvent('keydown',{key:'End',bubbles:true,cancelable:true}));assert.equal(track.scrollLeft,1010);assert(next.disabled);assert.equal(d.querySelector('[data-carousel-position]').textContent,'4–6 / 6');
 track.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Home',bubbles:true,cancelable:true}));assert.equal(track.scrollLeft,0);assert(previous.disabled);assert(d.querySelector('[data-carousel-status]').textContent.includes('Collective'));dom.window.close();
});
