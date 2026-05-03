/**
 * hero-parallax.js
 * Updates hero background translation on scroll and hides the scroll indicator after the user moves down the page.
 */
(function () {
  let heroImages = [];
  let indicators = [];
  let ticking = false;

  function updateParallax() {
    const scrollPosition = window.scrollY;

    heroImages.forEach(function moveHero(image) {
      const speed = Number.parseFloat(image.dataset.parallaxSpeed || '0.35');
      image.style.transform = 'translate3d(0, ' + (scrollPosition * speed) + 'px, 0) scale(1.06)';
    });

    indicators.forEach(function toggleIndicator(indicator) {
      if (scrollPosition > 100) {
        indicator.classList.add('is-hidden');
        return;
      }

      indicator.classList.remove('is-hidden');
    });

    ticking = false;
  }

  function requestParallaxUpdate() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateParallax);
  }

  function init() {
    heroImages = Array.prototype.slice.call(document.querySelectorAll('.hero-bg img'));
    indicators = Array.prototype.slice.call(document.querySelectorAll('.scroll-indicator'));

    if (!heroImages.length && !indicators.length) {
      return;
    }

    updateParallax();
    window.addEventListener('scroll', requestParallaxUpdate, { passive: true });
  }

  window.HeroParallax = {
    init: init
  };
})();
