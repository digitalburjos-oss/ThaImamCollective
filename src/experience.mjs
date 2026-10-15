import {parseHTML} from 'linkedom';
import {services} from './content.mjs';
import {esc,arrow} from './components.mjs';

// Match the reference's section > content > two-column grid > copy/panel hierarchy.
// All original content and interactive hooks stay in their original source order.
export function composeExperience(body,route,breadcrumb=''){
 const {document:d}=parseHTML('<!doctype html><html><body>'+body+'</body></html>');
 const hero=d.querySelector('.cinematic-hero');
 if(!hero)return body;
 const isHome=route==='/';
 hero.classList.remove('wrap');
 hero.classList.add(isHome?'cx-hero':'cx-page-hero');
 if(isHome){
  const content=hero.querySelector('.corporate-hero-grid');
  content.classList.add('cx-hero-content','cx-hero-grid');
  hero.querySelector('.corporate-hero-copy').classList.add('cx-hero-copy');
  hero.querySelector('.corporate-hero-stage').classList.add('cx-hero-stage');
 }else{
  const content=d.createElement('div');content.className='cx-page-hero-content';
  const grid=d.createElement('div');grid.className='cx-hero-grid';
  const copy=d.createElement('div');copy.className='cx-hero-copy';
  const panel=hero.querySelector('.hero-context');
  const nodes=[...hero.childNodes];
  for(const node of nodes){
   if(node===panel||node.nodeType===1&&node.classList.contains('hero-cinema'))continue;
   copy.append(node);
  }
  if(breadcrumb)copy.insertAdjacentHTML('afterbegin',breadcrumb);
  grid.append(copy);
  if(panel)grid.append(panel);
  else{
   const service=services.find(s=>route==='/services/'+s.slug);
   if(service){
    const rail=d.createElement('aside');rail.className='hero-context';rail.setAttribute('aria-label','Capability overview');
    rail.innerHTML=`<div class="hero-context-head"><img src="/brand/icon-${service.slug}.png" width="40" height="40" alt=""><span>${esc(service.name)}</span></div><h2>${esc(service.short)}</h2><ol>${service.features.slice(0,3).map(([h,p],i)=>`<li><span>0${i+1}</span><div><strong>${esc(h)}</strong><p>${esc(p)}</p></div></li>`).join('')}</ol><a href="#in-practice">See the workflow ${arrow}</a>`;
    grid.append(rail);
   }
  }
  content.append(grid);hero.append(content);
 }
 const title=hero.querySelector('h1');title.classList.add('cx-hero-title');
 if(isHome)title.classList.add('cx-hero-title--glossy');
 else if(title.textContent.length>65)title.classList.add('cx-hero-title--long');
 title.querySelectorAll('span').forEach(n=>n.classList.add('cx-hero-accent'));
 hero.querySelectorAll('.lead,.corporate-hero-copy>p:not(.hero-support)').forEach(n=>n.classList.add('cx-hero-lead'));
 hero.querySelectorAll('.button-row').forEach(n=>n.classList.add('cx-hero-actions'));
 hero.querySelectorAll('.hero-context,.orchestration').forEach(n=>n.classList.add('cx-hero-panel'));
 hero.querySelectorAll('.hero-eyebrow').forEach(n=>n.classList.add('cx-hero-eyebrow'));
 hero.querySelectorAll('.breadcrumbs').forEach(n=>{n.classList.remove('wrap');n.classList.add('cx-hero-crumb')});
 // Keep article content on the same page edge while allowing the hero to bleed to the viewport.
 d.querySelector('.article-page')?.classList.remove('wrap');
 d.querySelector('.article-page>.back-link')?.remove();
 return d.body.innerHTML;
}
