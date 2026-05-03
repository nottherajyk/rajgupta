/**
 * scroll-reveal.js
 * Reveals elements as they enter the viewport and staggers direct children when requested.
 */
(function () {
  function applyStaggerDelays() {
    const staggerParents = document.querySelectorAll('.reveal-stagger');
    staggerParents.forEach(function applyDelay(parent) {
      const children = parent.children;
      Array.prototype.forEach.call(children, function setDelay(child, index) {
        child.style.transitionDelay = (index * 0.1) + 's';
      });
    });
  }

  function revealImmediately(elements) {
    elements.forEach(function revealElement(element) {
      element.classList.add('is-visible');
    });
  }

  function handleRevealEntries(entries, observer) {
    entries.forEach(function handleRevealEntry(entry) {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }

  function init() {
    const revealElements = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    if (!revealElements.length) {
      return;
    }

    applyStaggerDelays();

    if (!('IntersectionObserver' in window)) {
      revealImmediately(revealElements);
      return;
    }

    const observer = new IntersectionObserver(handleRevealEntries, {
      threshold: 0.12
    });

    revealElements.forEach(function observeRevealElement(element) {
      observer.observe(element);
    });
  }

  window.ScrollReveal = {
    init: init
  };
})();
