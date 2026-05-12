/**
 * nav.js
 * Renders the shared navigation and footer, handles active state, scroll behavior, and overlay menu interactions.
 */
(function () {
  const elements = {
    shell: null,
    overlay: null,
    hamburger: null,
    openButtons: [],
    closeButton: null
  };

  function getActivePage() {
    return document.body.dataset.page || '';
  }

  function buildNavLinks(activePage) {
    return window.SiteData.nav.map(function buildNavLink(item) {
      const activeClass = item.page === activePage ? ' is-active' : '';
      return '<a class="nav-link' + activeClass + '" href="' + item.href + '" data-transition="true">' + item.label + '</a>';
    }).join('');
  }

  function buildOverlayLinks() {
    return window.SiteData.nav.map(function buildOverlayLink(item) {
      return '<a class="overlay-link" href="' + item.href + '" data-transition="true">' + item.label + '</a>';
    }).join('');
  }

  function buildSocialLinks(className) {
    return window.SiteData.socials.map(function buildSocialLink(item) {
      return '<a class="' + className + '" href="' + item.href + '" target="_blank" rel="noreferrer">' + item.label + '</a>';
    }).join('');
  }

  function buildFooterLinks(items, key) {
    return items.map(function buildFooterLink(item) {
      const label = item.footerTitle || item.title || item.label;
      const href = item.href || item.previewHref || item.detailHref;
      return '<a class="footer-link" href="' + href + '"' + (href && href.indexOf('http') !== 0 ? ' data-transition="true"' : '') + '>' + label + '</a>';
    }).join('');
  }

  function renderNav() {
    const navMount = document.querySelector('[data-site-nav]');
    if (!navMount) {
      return;
    }

    navMount.innerHTML = [
      '<div class="nav-shell">',
      '  <div class="container nav-inner">',
      '    <a class="brand-link" href="index.html" data-transition="true" aria-label="Raj Gupta home">',
      '      <span class="brand-mark">RG</span>',
      '    </a>',
      '    <nav class="nav-links" aria-label="Primary navigation">',
      buildNavLinks(getActivePage()),
      '    </nav>',
      '    <div class="nav-actions">',
      '      <button class="menu-trigger" type="button" aria-label="Open menu">Menu</button>',
      '      <button class="hamburger" type="button" aria-label="Open mobile menu">',
      '        <span class="hamburger__line"></span>',
      '        <span class="hamburger__line"></span>',
      '        <span class="hamburger__line"></span>',
      '      </button>',
      '    </div>',
      '  </div>',
      '</div>',
      '<div class="overlay-menu" aria-hidden="true">',
      '  <div class="overlay-menu__top">',
      '    <a class="brand-link" href="index.html" data-transition="true" aria-label="Raj Gupta home">',
      '      <span class="brand-mark">RG</span>',
      '    </a>',
      '    <button class="overlay-close" type="button" aria-label="Close menu">x</button>',
      '  </div>',
      '  <nav class="overlay-nav" aria-label="Overlay navigation">',
      buildOverlayLinks(),
      '  </nav>',
      '  <div class="overlay-socials">',
      buildSocialLinks('overlay-social'),
      '  </div>',
      '</div>'
    ].join('');
  }

  function renderFooter() {
    const footerMount = document.querySelector('[data-site-footer]');
    if (!footerMount) {
      return;
    }

    footerMount.innerHTML = [
      '<div class="footer-watermark">' + window.SiteData.watermark + '</div>',
      '<div class="container footer-grid">',
      '  <div class="footer-feature">',
      '    <span class="eyebrow">Stay connected.</span>',
      '    <a class="footer-email inline-link" href="mailto:' + window.SiteData.email + '">' + window.SiteData.email + '</a>',
      '    <p>' + window.SiteData.tagline + '</p>',
      '    <p class="micro-copy">' + window.SiteData.attribution + '</p>',
      '  </div>',
      '  <div class="footer-column">',
      '    <span class="footer-heading">Home</span>',
      '    <div class="footer-links">' + buildFooterLinks(window.SiteData.nav, 'label') + '</div>',
      '  </div>',
      '  <div class="footer-column">',
      '    <span class="footer-heading">Projects (' + String(window.SiteData.projects.length).padStart(2, '0') + ')</span>',
      '    <div class="footer-links">' + buildFooterLinks(window.SiteData.projects, 'title') + '</div>',
      '  </div>',
      '  <div class="footer-column">',
      '    <span class="footer-heading">Journal (' + String(window.SiteData.journals.length).padStart(2, '0') + ')</span>',
      '    <div class="footer-links">' + buildFooterLinks(window.SiteData.journals, 'title') + '</div>',
      '  </div>',
      '  <div class="footer-column">',
      '    <span class="footer-heading">Social Media</span>',
      '    <div class="footer-links">' + buildSocialLinks('footer-link') + '</div>',
      '  </div>',
      '</div>',
      '<div class="container footer-bottom">',
      '  <span>&copy;' + window.SiteData.year + ' ' + window.SiteData.name + '. All rights reserved.</span>',
      '</div>'
    ].join('');
  }

  function openMenu() {
    if (!elements.overlay) {
      return;
    }

    elements.overlay.classList.add('is-open');
    elements.overlay.setAttribute('aria-hidden', 'false');
    if (elements.hamburger) {
      elements.hamburger.classList.add('is-active');
    }
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!elements.overlay) {
      return;
    }

    elements.overlay.classList.remove('is-open');
    elements.overlay.setAttribute('aria-hidden', 'true');
    if (elements.hamburger) {
      elements.hamburger.classList.remove('is-active');
    }
    document.body.classList.remove('menu-open');
  }

  function handleMenuOpen() {
    openMenu();
  }

  function handleMenuClose() {
    closeMenu();
  }

  function handleOverlayLinkClick() {
    closeMenu();
  }

  function handleDocumentKeydown(event) {
    if (event.key === 'Escape') {
      closeMenu();
    }
  }

  function handleNavScroll() {
    if (!elements.shell) {
      return;
    }

    if (window.scrollY > 60) {
      elements.shell.classList.add('is-scrolled');
      return;
    }

    elements.shell.classList.remove('is-scrolled');
  }

  function cacheElements() {
    elements.shell = document.querySelector('.nav-shell');
    elements.overlay = document.querySelector('.overlay-menu');
    elements.hamburger = document.querySelector('.hamburger');
    elements.openButtons = Array.prototype.slice.call(document.querySelectorAll('.menu-trigger, .hamburger'));
    elements.closeButton = document.querySelector('.overlay-close');
  }

  function bindMenuButtons() {
    elements.openButtons.forEach(function bindOpenButton(button) {
      button.addEventListener('click', handleMenuOpen);
    });

    if (elements.closeButton) {
      elements.closeButton.addEventListener('click', handleMenuClose);
    }

    if (elements.overlay) {
      const overlayLinks = elements.overlay.querySelectorAll('.overlay-link');
      overlayLinks.forEach(function bindOverlayLink(link) {
        link.addEventListener('click', handleOverlayLinkClick);
      });
    }
  }

  function init() {
    renderNav();
    renderFooter();
    cacheElements();
    bindMenuButtons();
    handleNavScroll();
    window.addEventListener('scroll', handleNavScroll, { passive: true });
    document.addEventListener('keydown', handleDocumentKeydown);
  }

  window.SiteChrome = {
    init: init
  };
})();
