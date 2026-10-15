(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Small pointer attraction is limited to CTAs, precise pointers and motion-enabled users.
  // CSS translate is independent of existing hover/press transforms.
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  document.querySelectorAll('.button.primary').forEach(button => {
    button.dataset.magnetic = '';
    const reset = () => {
      button.style.removeProperty('--magnet-x');
      button.style.removeProperty('--magnet-y');
    };
    button.addEventListener('pointermove', event => {
      if (reduced.matches || !finePointer.matches || event.pointerType === 'touch') return;
      const rect = button.getBoundingClientRect();
      const x = Math.max(-3, Math.min(3, (event.clientX - rect.left - rect.width / 2) * .035));
      const y = Math.max(-2, Math.min(2, (event.clientY - rect.top - rect.height / 2) * .06));
      button.style.setProperty('--magnet-x', `${x}px`);
      button.style.setProperty('--magnet-y', `${y}px`);
    });
    button.addEventListener('pointerleave', reset);
    button.addEventListener('pointercancel', reset);
    button.addEventListener('blur', reset);
    reduced.addEventListener?.('change', reset);
    finePointer.addEventListener?.('change', reset);
  });
  // Reveal once on entry; content is always visible without script or observer support.
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('vivid-reveal'); observer.unobserve(entry.target);
    }), {threshold:.12});
    document.querySelectorAll('.topic-card,.article-card,.feature-grid>article,.project-card,.service-row,.capability-card,.detail-grid>article').forEach(el => observer.observe(el));
  }
})();

// Reference mobile sheet with a real dismiss control and bounded keyboard focus.
(() => {
 const menu=document.querySelector('.menu-toggle');
 const drawer=document.querySelector('#mobile-menu');
 const backdrop=document.querySelector('[data-mobile-backdrop]');
 if(!menu||!drawer||!backdrop)return;
 const close=()=>{if(!drawer.hidden){menu.click();menu.focus();}};
 document.querySelector('[data-mobile-close]')?.addEventListener('click',close);
 backdrop.addEventListener('click',close);
 let previousOverflow='';let open=false;
 const sync=()=>{
  backdrop.hidden=drawer.hidden;
  if(!drawer.hidden&&!open){previousOverflow=document.body.style.overflow;document.body.style.overflow='hidden';open=true;drawer.querySelector('button,a')?.focus();}
  else if(drawer.hidden&&open){document.body.style.overflow=previousOverflow;open=false;}
 };
 new MutationObserver(sync).observe(drawer,{attributes:true,attributeFilter:['hidden']});
 drawer.addEventListener('keydown',event=>{
  if(event.key!=='Tab'||drawer.hidden)return;
  const controls=[...drawer.querySelectorAll('a[href],button:not([disabled])')];
  const first=controls[0],last=controls.at(-1);
  if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
  else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
 });
 const wide=window.matchMedia('(min-width: 1200px)');
 wide.addEventListener?.('change',event=>{if(event.matches)close();});
 sync();
})();

// Native scrolling retains touch, keyboard and no-JavaScript access to every capability.
(() => {
 const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
 document.querySelectorAll('[data-capability-carousel]').forEach(root=>{
  const track=root.querySelector('.horizontal-track');
  const cards=[...track.children];
  const previous=root.querySelector('[data-carousel-prev]');
  const next=root.querySelector('[data-carousel-next]');
  const position=root.querySelector('[data-carousel-position]');
  const status=root.querySelector('[data-carousel-status]');
  const step=()=>cards[0].getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);
  const update=()=>{
   previous.disabled=track.scrollLeft<=3;
   next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-3;
   const first=Math.min(cards.length,Math.round(track.scrollLeft/step())+1);
   const visible=Math.max(1,Math.round((track.clientWidth+18)/step()));
   position.textContent=`${first}–${Math.min(cards.length,first+visible-1)} / ${cards.length}`;
  };
  const move=direction=>{
   const destination=direction==='start'?0:direction==='end'?track.scrollWidth-track.clientWidth:track.scrollLeft+direction*step();
   track.scrollTo({left:destination,behavior:reduced.matches?'instant':'smooth'});
   const index=Math.max(0,Math.min(cards.length-1,Math.round(destination/step())));
   status.textContent=`Browsing ${cards[index].querySelector('h3').textContent}.`;
  };
  previous.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  track.addEventListener('keydown',event=>{
   if(event.target!==track)return;
   const direction={ArrowLeft:-1,ArrowRight:1,Home:'start',End:'end'}[event.key];
   if(direction===undefined)return;event.preventDefault();move(direction);
  });
  track.addEventListener('scroll',update,{passive:true});
  if('ResizeObserver' in window)new ResizeObserver(update).observe(track);
  update();
 });
})();
