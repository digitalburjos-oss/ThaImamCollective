import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {JSDOM} from 'jsdom';
const html=fs.readFileSync(new URL('../dist/index.html',import.meta.url),'utf8');
test('owned guide answers service questions safely and panels dismiss accessibly',()=>{
 const dom=new JSDOM(html,{url:'https://theimamcollective.com',runScripts:'outside-only'}),w=dom.window,d=w.document;
 w.fetch=async()=>({ok:true,json:async()=>({updates:[]})});
 w.eval(fs.readFileSync(new URL('../public/engagement.js',import.meta.url),'utf8'));
 d.querySelector('[data-chat-open]').click();assert.equal(d.querySelector('#collective-chat').hidden,false);
 const input=d.querySelector('#chat-message');input.value='Can you automate invoices?';d.querySelector('[data-chat-form]').dispatchEvent(new w.Event('submit',{cancelable:true}));
 assert(d.querySelector('.chat-log').textContent.includes('Collective OS'));
 input.value='<img src=x onerror=alert(1)>';d.querySelector('[data-chat-form]').dispatchEvent(new w.Event('submit',{cancelable:true}));assert.equal(d.querySelector('.chat-log img'),null);
 d.querySelector('[data-updates-open]').click();assert(d.querySelector('#collective-chat').hidden);assert(!d.querySelector('#updates-panel').hidden);
 d.dispatchEvent(new w.KeyboardEvent('keydown',{key:'Escape'}));assert(d.querySelector('#updates-panel').hidden);
 d.querySelector('[data-notice-dismiss]').click();assert(d.querySelector('.notice-bar').hidden);dom.window.close();
});
test('scheduled updates hide future, expired and incomplete offers',async()=>{
 const dom=new JSDOM(html,{url:'https://theimamcollective.com',runScripts:'outside-only'}),w=dom.window;
 w.fetch=async()=>({ok:true,json:async()=>({updates:[
 {type:'announcement',title:'Current notice',body:'Current',startsAt:'2020-01-01',href:'/contact'},
 {type:'announcement',title:'Future notice',startsAt:'2099-01-01'},
 {type:'offer',title:'Expired offer',startsAt:'2020-01-01',endsAt:'2021-01-01',terms:'Terms'},
 {type:'offer',title:'No terms',startsAt:'2020-01-01',endsAt:'2099-01-01'}]})});
 w.eval(fs.readFileSync(new URL('../public/engagement.js',import.meta.url),'utf8'));await new Promise(r=>setTimeout(r,0));
 const text=w.document.querySelector('[data-updates-list]').textContent;assert(text.includes('Current notice'));assert(!/Future notice|Expired offer|No terms/.test(text));dom.window.close();
});

test('welcome is delayed, dismissible and remembered without moving focus',()=>{
 const dom=new JSDOM(html,{url:'https://theimamcollective.com',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window,d=w.document,timers=[];
 w.setTimeout=(fn,delay)=>{timers.push({fn,delay});return timers.length};w.fetch=async()=>({ok:true,json:async()=>({updates:[]})});
 const before=d.activeElement;w.eval(fs.readFileSync(new URL('../public/engagement.js',import.meta.url),'utf8'));
 assert(d.querySelector('[data-visitor-notice]').hidden);timers.find(t=>t.delay===8000).fn();assert(!d.querySelector('[data-visitor-notice]').hidden);assert.equal(d.activeElement,before);assert.equal(w.localStorage.getItem('collective-welcome-v1'),'1');d.querySelector('[data-visitor-notice-close]').click();assert(d.querySelector('[data-visitor-notice]').hidden);dom.window.close();
});

test('returning visitors are not shown another welcome',()=>{
 const dom=new JSDOM(html,{url:'https://theimamcollective.com',runScripts:'outside-only',pretendToBeVisual:true}),w=dom.window,timers=[];
 w.localStorage.setItem('collective-welcome-v1','1');w.setTimeout=(fn,delay)=>{timers.push({fn,delay});return timers.length};w.fetch=async()=>({ok:true,json:async()=>({updates:[]})});w.eval(fs.readFileSync(new URL('../public/engagement.js',import.meta.url),'utf8'));assert(!timers.some(t=>t.delay===8000));assert(w.document.querySelector('[data-visitor-notice]').hidden);dom.window.close();
});
