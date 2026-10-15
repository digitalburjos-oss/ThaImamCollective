(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.querySelectorAll('[data-capability-carousel]').forEach(root => {
    const track = root.querySelector('.capability-track');
    const cards = [...track.children];
    const previous = root.querySelector('[data-carousel-prev]');
    const next = root.querySelector('[data-carousel-next]');
    const status = root.querySelector('[data-carousel-status]');
    const update = () => {
      previous.disabled = track.scrollLeft <= 3;
      next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 3;
    };
    const move = direction => {
      const step = cards[0].getBoundingClientRect().width + parseFloat(getComputedStyle(track).gap);
      const index = Math.max(0, Math.min(cards.length - 1, Math.round(track.scrollLeft / step) + direction));
      track.scrollTo({left: index * step, behavior: reduced.matches ? 'instant' : 'smooth'});
      status.textContent = `Browsing ${cards[index].querySelector('h3').textContent}, capability ${index + 1} of ${cards.length}.`;
    };
    previous.addEventListener('click', () => move(-1));
    next.addEventListener('click', () => move(1));
    track.addEventListener('keydown', event => {
      if (event.target !== track || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
      event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1);
    });
    track.addEventListener('scroll', update, {passive:true});
    if ('ResizeObserver' in window) new ResizeObserver(update).observe(track);
    update();
  });
  // Reveal once on entry; content is always visible without script or observer support.
  if (!reduced.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('vivid-reveal'); observer.unobserve(entry.target);
    }), {threshold:.12});
    document.querySelectorAll('.topic-card,.article-card,.feature-grid>article,.project-card').forEach(el => observer.observe(el));
  }
})();
