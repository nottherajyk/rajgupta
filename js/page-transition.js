/**
 * page-transition.js
 * Reveals the current page on load and fades to the transition overlay before internal navigation.
 */
(function () {
  let overlay = null;
  let isTransitioning = false;

  function shouldSkip(event, anchor, href) {
    if (!href || href.charAt(0) === '#') {
      return true;
    }

    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return true;
    }

    if (anchor.target === '_blank' || anchor.hasAttribute('download')) {
      return true;
    }

    if (/^(mailto:|tel:|javascript:)/i.test(href)) {
      return true;
    }

    if (/^https?:/i.test(href)) {
      return true;
    }

    return false;
  }

  function revealPage() {
    overlay.classList.add('is-hidden');
    overlay.classList.remove('is-active');
  }

  function handleDocumentClick(event) {
    const anchor = event.target.closest('a');
    if (!anchor || isTransitioning) {
      return;
    }

    const href = anchor.getAttribute('href');
    if (shouldSkip(event, anchor, href)) {
      return;
    }

    isTransitioning = true;
    event.preventDefault();
    overlay.classList.remove('is-hidden');
    overlay.classList.add('is-active');

    window.setTimeout(function navigateToTarget() {
      window.location.href = anchor.href;
    }, 350);
  }

  function init() {
    overlay = document.getElementById('pt-overlay');
    if (!overlay) {
      return;
    }

    window.setTimeout(revealPage, 40);
    document.addEventListener('click', handleDocumentClick);

    // Reset transition state and hide overlay when navigating back in history (bfcache)
    window.addEventListener('pageshow', function (event) {
      isTransitioning = false;
      revealPage();
    });
  }

  window.PageTransition = {
    init: init
  };
})();
