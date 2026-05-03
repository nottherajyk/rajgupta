/**
 * counter.js
 * Animates stat numbers from zero to their target values once they enter the viewport.
 */
(function () {
  function easeOutQuad(value) {
    return value * (2 - value);
  }

  function formatValue(value, suffix) {
    return Math.round(value) + suffix;
  }

  function animateCounter(element) {
    const target = Number.parseInt(element.dataset.target || '0', 10);
    const suffix = element.dataset.suffix || '';
    const duration = 1800;
    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuad(progress);
      const value = target * eased;
      element.textContent = formatValue(value, progress === 1 ? suffix : '');

      if (progress < 1) {
        window.requestAnimationFrame(tick);
        return;
      }

      element.textContent = formatValue(target, suffix);
    }

    window.requestAnimationFrame(tick);
  }

  function handleCounterEntries(entries, observer) {
    entries.forEach(function handleCounterEntry(entry) {
      if (!entry.isIntersecting) {
        return;
      }

      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  }

  function init() {
    const counters = Array.prototype.slice.call(document.querySelectorAll('.stat-number[data-target]'));
    if (!counters.length) {
      return;
    }

    if (!('IntersectionObserver' in window)) {
      counters.forEach(function startCounter(counter) {
        animateCounter(counter);
      });
      return;
    }

    const observer = new IntersectionObserver(handleCounterEntries, {
      threshold: 0.32
    });

    counters.forEach(function observeCounter(counter) {
      observer.observe(counter);
    });
  }

  window.CounterAnimation = {
    init: init
  };
})();
