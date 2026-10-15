(() => {
  const $ = s => document.querySelector(s);
  const chat = $('#collective-chat'), updates = $('#updates-panel');
  const storage = {get(k){try{return sessionStorage.getItem(k)}catch{return null}},set(k,v){try{sessionStorage.setItem(k,v)}catch{}}};
  const toggle = (panel, trigger, open) => {panel.hidden=!open; trigger.setAttribute('aria-expanded',String(open));};
  const chatButton=$('[data-chat-open]'), updateButton=$('[data-updates-open]');
  chatButton.addEventListener('click',()=>{toggle(updates,updateButton,false);toggle(chat,chatButton,chat.hidden);if(!chat.hidden)$('#chat-message').focus()});
  updateButton.addEventListener('click',()=>{toggle(chat,chatButton,false);toggle(updates,updateButton,updates.hidden)});
  $('[data-chat-close]').addEventListener('click',()=>{toggle(chat,chatButton,false);chatButton.focus()});
  $('[data-updates-close]').addEventListener('click',()=>{toggle(updates,updateButton,false);updateButton.focus()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!chat.hidden){toggle(chat,chatButton,false);chatButton.focus()}if(!updates.hidden){toggle(updates,updateButton,false);updateButton.focus()}}});
  const notice=$('.notice-bar'); if(storage.get('collective-notice-dismissed'))notice.hidden=true;
  $('[data-notice-dismiss]').addEventListener('click',()=>{notice.hidden=true;storage.set('collective-notice-dismissed','1')});
  const log=$('.chat-log'), knowledge=JSON.parse($('#collective-knowledge').textContent);
  function append(text,kind){const p=document.createElement('p');p.className=kind;p.textContent=text;log.append(p);log.scrollTop=log.scrollHeight;while(log.children.length>30)log.children[0].remove()}
  function answer(question){
    const q=question.toLowerCase();
    if(/person|human|contact|call|support/.test(q))return 'Use “Send a project enquiry” below to contact our team. Include your current process, the problem and your deadline. This guide cannot connect you to a live operator.';
    if(/price|pricing|cost|discount|offer|payment/.test(q))return 'The pricing page shows indicative platform estimates in US dollars. Implementation, custom software, training and marketing are scoped separately. Current dated offers, when available, appear in Updates. A final quote needs a reviewed brief.';
    if(/compare|services|what do you/.test(q))return knowledge.map(s=>s.name+': '+s.summary).join('\n\n');
    const patterns={os:/\bcrm\b|\berp\b|invoice|finance|operations|inventory|\bos\b/,ai:/\bai\b|automat|agent|whatsapp|repetitive/,studio:/website|design|app|software|brand|studio/,growth:/seo|marketing|campaign|growth|social|search/,academy:/learn|train|academy|course/,talent:/hire|hiring|talent|recruit|staff/};
    const found=knowledge.filter(s=>patterns[s.slug]?.test(q));
    if(found.length)return found.slice(0,2).map(s=>s.name+' — '+s.summary+'\nTypical handover: '+s.deliverables.join('; ')+'.\nExplore /services/'+s.slug+' for scope and examples.').join('\n\n');
    return 'I can help with business systems, automation, websites, marketing, training and talent. Tell me what your team does manually today. For a question outside these topics, please send a project enquiry so a person can review it.';
  }
  function ask(q){q=q.trim().slice(0,600);if(!q)return;append(q,'chat-question');append(answer(q),'chat-answer')}
  $('[data-chat-form]').addEventListener('submit',e=>{e.preventDefault();ask($('#chat-message').value);$('#chat-message').value=''});
  document.querySelectorAll('[data-chat-prompt]').forEach(b=>b.addEventListener('click',()=>ask(b.dataset.chatPrompt)));
  const visitor=$('[data-visitor-notice]');
  const persistent={get(k){try{return localStorage.getItem(k)}catch{return storage.get(k)}},set(k,v){try{localStorage.setItem(k,v)}catch{storage.set(k,v)}}};
  const welcomeKey='collective-welcome-v1';
  const firstVisit=!persistent.get(welcomeKey);
  let pendingUpdate=null,autoNoticeShown=false;
  const quiet=()=>!document.hidden&&chat.hidden&&updates.hidden&&!document.querySelector('dialog[open]')&&!['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName);
  function showNotice(title,copy,label,href,kind="welcome",terms=""){if(!quiet()||autoNoticeShown)return false;visitor.querySelector('[data-visitor-notice-title]').textContent=title;visitor.querySelector('[data-visitor-notice-copy]').textContent=copy;const link=visitor.querySelector('[data-visitor-notice-link]');link.textContent=label;link.href=/^\/(?!\/)/.test(href)?href:'/services';visitor.dataset.kind=kind;let detail=visitor.querySelector('[data-visitor-notice-terms]');if(!detail){detail=document.createElement('p');detail.setAttribute('data-visitor-notice-terms','');visitor.append(detail)}detail.textContent=terms;detail.hidden=!terms;visitor.hidden=false;autoNoticeShown=true;return true;}
  $('[data-visitor-notice-close]').addEventListener('click',()=>{visitor.hidden=true;storage.set('collective-auto-notice-dismissed','1')});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')visitor.hidden=true});
  chatButton.addEventListener('click',()=>{visitor.hidden=true});updateButton.addEventListener('click',()=>{visitor.hidden=true});
  if(firstVisit)setTimeout(()=>{if(!storage.get('collective-auto-notice-dismissed')&&showNotice('Welcome to the collective.','Start with the work you want to make easier. Explore our services or use the guide when you need a starting point.','Find your starting point →','/services'))persistent.set(welcomeKey,'1')},8000);
  setTimeout(()=>{if(!pendingUpdate||storage.get('collective-auto-notice-dismissed'))return;if(pendingUpdate.endsAt&&Date.parse(pendingUpdate.endsAt)<=Date.now())return;const previous=Number(persistent.get('collective-notice-last-shown')||0);if(Date.now()-previous<86400000)return;const key='collective-update-seen-'+pendingUpdate.id;if(persistent.get(key))return;if(showNotice(pendingUpdate.title,pendingUpdate.body,pendingUpdate.label||'Read more',pendingUpdate.href,pendingUpdate.type,pendingUpdate.terms?pendingUpdate.terms+' · Ends '+new Date(pendingUpdate.endsAt).toLocaleDateString():'')){persistent.set(key,'1');persistent.set('collective-notice-last-shown',String(Date.now()))}},45000);
  const list=$('[data-updates-list]');
  async function refresh(){try{const response=await fetch('/updates.json',{cache:'no-store'});if(!response.ok)throw Error();const data=await response.json(),now=Date.now();const active=data.updates.filter(x=>Date.parse(x.startsAt)<=now&&(!x.endsAt||Date.parse(x.endsAt)>now)&&['announcement','offer','alert'].includes(x.type)&& (x.type!=='offer'||(x.endsAt&&x.terms)) );pendingUpdate=active.find(x=>x.type==='alert')||active.find(x=>x.type==='offer')||active[0]||null;updateButton.toggleAttribute('data-has-offer',active.some(x=>x.type==='offer')); list.replaceChildren();for(const item of active){const card=document.createElement('article');const h=document.createElement('h3'),p=document.createElement('p'),a=document.createElement('a');h.textContent=item.title;p.textContent=item.body;a.textContent=item.label||'Read more';a.href=/^\/(?!\/)/.test(item.href)?item.href:'/contact';card.append(h,p);if(item.type==='offer'){const terms=document.createElement('p');terms.textContent=item.terms+' · Ends '+new Date(item.endsAt).toLocaleDateString();card.append(terms)}card.append(a);list.append(card)}if(!active.length)list.textContent='No current announcements or offers. You can still send us a brief.'}catch{list.textContent='Updates could not load. Please check again later or contact us.'}}
  refresh();setInterval(()=>{if(!document.hidden)refresh()},300000);
})();
