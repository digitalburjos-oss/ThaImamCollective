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
