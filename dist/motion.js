/* Innovation.Mastery.Automation.Marketing Collective motion layer:
   scroll reveal, counters, parallax, pointer spotlight, hero scroll cinema and
   the reading-progress bar. Everything here is progressive enhancement — with
   JavaScript off, or with reduced motion requested, the page is complete and
   still. */
(function () {
  if (window.__dbMotion) return;
  window.__dbMotion = true;
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var EASE = 'cubic-bezier(.14,.84,.22,1)';
  document.documentElement.style.scrollBehavior = 'smooth';

  function ready(fn) { document.readyState !== 'loading' ? fn() : document.addEventListener('DOMContentLoaded', fn); }

  ready(function () {
    // Reading progress: a hairline of ember that keeps its own light.
    var bar = document.createElement('div');
    bar.setAttribute('aria-hidden', 'true');
    bar.style.cssText = 'position:fixed;left:0;top:0;height:2px;width:100%;z-index:100;border-radius:0 2px 2px 0;background:linear-gradient(90deg,#F36B21,#ff9757 70%,#ffd0b3);box-shadow:0 0 14px rgba(243,107,33,.6);transform-origin:0 50%;transform:scaleX(0);pointer-events:none';
    document.body.appendChild(bar);

    var parallax = [];
    var heroes = [];

    // The hero reel is rendered by the page runtime, so re-collect on mutation.
    function collect() {
      heroes = [].slice.call(document.querySelectorAll('.db-hero,.db-page-hero,.db-inner-hero'));
      for (var i = 0; i < heroes.length; i++) { heroes[i]._reel = null; heroes[i]._copy = null; }
    }
    function part(hero, key, sel) {
      var el = hero[key];
      if (!el || !el.isConnected) { try { el = hero[key] = hero.querySelector(sel); } catch (e) { el = hero[key] = null; } }
      return el;
    }

    function onScroll() {
      var vh = innerHeight;
      var max = document.documentElement.scrollHeight - vh;
      bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, Math.max(0, scrollY / max)) : 0) + ')';
      if (reduce) return;

      var i, el, r;
      for (i = 0; i < parallax.length; i++) {
        el = parallax[i]; r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) continue;
        var f = parseFloat(el.getAttribute('data-parallax')) || 0.15;
        var c = r.top + r.height / 2 - vh / 2;
        el.style.transform = 'translate3d(0,' + (-c * f).toFixed(1) + 'px,0) scale(1.12)';
      }

      // Hero scroll cinema: while the hero is on screen the backdrop pushes in
      // and the copy lifts away, so the page reads as one continuous take.
      for (i = 0; i < heroes.length; i++) {
        var hero = heroes[i], hr = hero.getBoundingClientRect();
        if (hr.bottom < -80 || hr.top > vh + 80) continue;
        var p = Math.min(1, Math.max(0, -hr.top / Math.max(1, hr.height)));
        var reel = part(hero, '_reel', 'hero-reel,x-import[component-from-global-scope="hero-reel"]');
        if (reel) reel.style.transform = 'translate3d(0,' + (p * 22).toFixed(1) + 'px,0) scale(' + (1 + p * 0.16).toFixed(4) + ')';
        var copy = part(hero, '_copy', '.db-hero-content');
        if (copy) {
          copy.style.transform = 'translate3d(0,' + (-p * 52).toFixed(1) + 'px,0)';
          copy.style.opacity = (1 - Math.min(1, p * 1.5)).toFixed(3);
        }
      }
    }
    var ticking = false;
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(function () { ticking = false; onScroll(); }); } }, { passive: true });

    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target; io.unobserve(el);
        if (el.hasAttribute('data-reveal')) {
          var d = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          el.style.transition = 'opacity .9s ' + EASE + ' ' + d + 'ms, transform .9s ' + EASE + ' ' + d + 'ms, filter .9s ' + EASE + ' ' + d + 'ms';
          el.style.opacity = '1';
          // Release the properties instead of forcing `none`, so elements that
          // carry their own CSS transform (cards, tiles) keep it after reveal.
          el.style.removeProperty('transform');
          el.style.removeProperty('filter');
        }
        if (el.hasAttribute('data-count')) count(el);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }) : null;

    function count(el) {
      var target = parseFloat(el.getAttribute('data-count')), suf = el.getAttribute('data-suffix') || '';
      if (reduce) { el.textContent = target + suf; return; }
      var t0 = performance.now(), dur = 1400;
      (function step(t) {
        var p = Math.min(1, (t - t0) / dur), v = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * v) + suf;
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    }

    function spot(e) {
      var el = e.currentTarget, r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }

    function scan(root) {
      (root.querySelectorAll ? root : document).querySelectorAll('[data-reveal]:not([data-rv]),[data-count]:not([data-rv]),[data-parallax]:not([data-rv]),[data-spot]:not([data-rv])').forEach(function (el) {
        el.setAttribute('data-rv', '1');
        if (el.hasAttribute('data-parallax')) { parallax.push(el); }
        if (el.hasAttribute('data-spot')) { el.addEventListener('pointermove', spot); }
        if (el.hasAttribute('data-count') && !reduce) { el.textContent = '0' + (el.getAttribute('data-suffix') || ''); }
        if (el.hasAttribute('data-reveal') && !reduce) {
          var r = el.getBoundingClientRect();
          if (r.top > innerHeight * 0.92) {
            var kind = el.getAttribute('data-reveal');
            el.style.opacity = '0';
            el.style.transform = kind === 'scale' ? 'scale(.96)' : kind === 'left' ? 'translate3d(-32px,0,0)' : kind === 'right' ? 'translate3d(32px,0,0)' : 'translate3d(0,28px,0)';
            if (kind === 'blur') el.style.filter = 'blur(8px)';
          } else { return; }
        }
        if (io) io.observe(el);
      });
      collect();
      onScroll();
    }
    scan(document);
    new MutationObserver(function (muts) {
      var hit = false;
      for (var i = 0; i < muts.length && !hit; i++) if (muts[i].addedNodes.length) hit = true;
      if (hit) { clearTimeout(scan._t); scan._t = setTimeout(function () { scan(document); }, 60); }
    }).observe(document.body, { childList: true, subtree: true });
  });
})();
