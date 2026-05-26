(() => {
  const hero = document.querySelector('.hero');
  const heroText = document.querySelector('.hero-text');
  const cards = Array.from(document.querySelectorAll('.card'));
  const ctaBtn = document.querySelector('button, .cta');

  // Scroll reveal (IntersectionObserver)
  const revealEls = [heroText, ...cards].filter(Boolean);

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
    );

    revealEls.forEach((el) => io.observe(el));
  } else {
    // Fallback if IntersectionObserver isn't supported
    revealEls.forEach((el) => el.classList.add('is-revealed'));
  }

  // CTA micro-interaction
  if (ctaBtn) {
    ctaBtn.classList.add('cta-ready');

    ctaBtn.addEventListener('pointerenter', () => {
      ctaBtn.classList.add('cta-anim');
    });

    ctaBtn.addEventListener('pointerleave', () => {
      ctaBtn.classList.remove('cta-anim');
    });
  }

  // Small floating highlight on hero
  if (hero) {
    hero.classList.add('hero-fx-ready');

    // Optional: make float slightly respond to mouse
    window.addEventListener(
      'mousemove',
      (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width; // 0..1
        const y = (e.clientY - rect.top) / rect.height; // 0..1
        hero.style.setProperty('--mx', String(x));
        hero.style.setProperty('--my', String(y));
      },
      { passive: true }
    );
  }
})();

