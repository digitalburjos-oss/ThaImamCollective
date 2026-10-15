/* Original workflow motion for the collective. No connection to live systems. */
(()=>{
'use strict';
const menus=[...document.querySelectorAll('.nav-services')];
menus.forEach(menu=>menu.addEventListener('toggle',()=>{if(menu.open)menus.filter(m=>m!==menu).forEach(m=>m.open=false);}));
document.addEventListener('click',e=>menus.forEach(m=>{if(!m.contains(e.target))m.open=false;}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')menus.forEach(m=>{if(m.open){m.open=false;m.querySelector('summary').focus();}});});
const scenes={
 enquiry:{category:'ENQUIRY WORKFLOW',title:'Context in.<br>Clarity out.',record:'New project enquiry',description:'Source, customer and brief—kept together.',stages:[['Receive','Enquiry captured'],['Check','Context verified'],['Assign','Owner confirmed'],['Review','Human approval']]},
 growth:{category:'GROWTH WORKFLOW',title:'Attention in.<br>Opportunity out.',record:'Qualified campaign enquiry',description:'Campaign, landing page and lead—connected.',stages:[['Attract','Useful content'],['Capture','Source retained'],['Qualify','Context checked'],['Review','Sales handover']]},
 product:{category:'DELIVERY WORKFLOW',title:'A clear brief.<br>A better handover.',record:'Product release brief',description:'Scope, decisions and ownership—visible.',stages:[['Brief','Outcome agreed'],['Shape','Flow prototyped'],['Build','Work reviewed'],['Review','Release approval']]}
};
document.querySelectorAll('[data-orchestration]').forEach(root=>{
 const find=s=>root.querySelector(s),nodes=[...root.querySelectorAll('[data-signal-step]')],tabs=[...root.querySelectorAll('[data-scene]')],toggle=find('[data-motion-toggle]');
 let phase=0,timer,visible=true,userPaused=!!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const display=()=>{root.dataset.phase=String(phase);nodes.forEach((node,i)=>{node.classList.toggle('is-current',i===phase);node.classList.toggle('is-complete',i<phase);});find('[data-scene-state]').textContent=phase===3?'Human review':'Processing';find('[data-scene-state]').classList.toggle('is-review',phase===3);};
 const schedule=()=>{clearTimeout(timer);root.classList.toggle('motion-paused',userPaused||!visible||document.hidden);if(userPaused||!visible||document.hidden)return;timer=setTimeout(()=>{phase=(phase+1)%4;display();schedule();},phase===3?2600:1400);};
 const setButton=()=>{toggle.setAttribute('aria-pressed',String(userPaused));toggle.innerHTML=userPaused?'Play preview <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true"><path d="m5 3 7 5-7 5Z"/></svg>':'Pause preview <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 3v10M11 3v10"/></svg>';};
 const select=(key,focus=false)=>{const scene=scenes[key];if(!scene)return;tabs.forEach(t=>{const active=t.dataset.scene===key;t.setAttribute('aria-selected',String(active));t.dataset.state=active?'active':'inactive';t.tabIndex=active?0:-1;if(active&&focus)t.focus();});find('#scene-panel').setAttribute('aria-labelledby','scene-'+key);find('[data-scene-category]').textContent=scene.category;find('[data-scene-title]').innerHTML=scene.title;find('[data-scene-record]').textContent=scene.record;find('[data-scene-description]').textContent=scene.description;scene.stages.forEach(([title,copy],i)=>{find(`[data-signal-title="${i}"]`).textContent=title;find(`[data-signal-copy="${i}"]`).textContent=copy;});phase=0;display();schedule();};
 tabs.forEach((t,i)=>{t.addEventListener('click',()=>select(t.dataset.scene));t.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft')next=(i+tabs.length-1)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();select(tabs[next].dataset.scene,true);});});
 toggle.addEventListener('click',()=>{userPaused=!userPaused;setButton();schedule();});
 if(window.IntersectionObserver){const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;schedule();},{threshold:.15});io.observe(root);}
 document.addEventListener('visibilitychange',schedule);
 const preference=window.matchMedia?.('(prefers-reduced-motion: reduce)');preference?.addEventListener?.('change',e=>{if(e.matches){userPaused=true;setButton();schedule();}});
 setButton();select('enquiry');
});
})();
