/**
 * init.js
 * Renders shared repeated sections from the site data and initializes all interactive modules.
 */
(function () {
  function buildProjectPreviewCard(project) {
    return [
      '<a class="project-preview-card reveal" href="' + project.previewHref + '" data-transition="true">',
      '  <div class="project-preview-card__media">',
      '    <!-- EDIT ME: replace src with your project image -->',
      '    <img src="' + project.image + '" alt="' + project.title + ' preview image" loading="lazy" decoding="async">',
      '  </div>',
      '  <div class="project-preview-card__content">',
      '    <span class="kicker">' + project.category + '</span>',
      '    <h3 class="project-preview-card__title">' + project.title + '</h3>',
      '    <span class="project-preview-card__cta text-link">Explore</span>',
      '  </div>',
      '</a>'
    ].join('');
  }

  function buildJournalCard(journal) {
    return [
      '<a class="journal-card reveal" href="' + journal.href + '" data-transition="true">',
      '  <div class="journal-card__media">',
      '    <!-- EDIT ME: replace src with your journal cover -->',
      '    <img src="' + journal.image + '" alt="' + journal.title + ' cover image" loading="lazy" decoding="async">',
      '  </div>',
      '  <div class="stack">',
      '    <span class="kicker">' + journal.category + '</span>',
      '    <h3 class="journal-card__title">' + journal.title + '</h3>',
      '  </div>',
      '</a>'
    ].join('');
  }

  function buildRoleCard(role) {
    return [
      '<article class="role-card reveal">',
      '  <div class="role-card__media">',
      '    <!-- EDIT ME: replace src with your role portrait -->',
      '    <img src="' + role.image + '" alt="' + role.name + ' portrait" loading="lazy" decoding="async">',
      '  </div>',
      '  <div class="stack">',
      '    <h3>' + role.name + '</h3>',
      '    <p class="kicker">' + role.role + '</p>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function buildAccordionRow(service, index) {
    const rowClass = index === 0 ? 'accordion-row reveal open' : 'accordion-row reveal';
    const expanded = index === 0 ? 'true' : 'false';
    return [
      '<article class="' + rowClass + '">',
      '  <button class="accordion-toggle" type="button" aria-expanded="' + expanded + '">',
      '    <span class="accordion-number">' + service.number + '</span>',
      '    <span class="accordion-title">' + service.title + '</span>',
      '    <span class="accordion-icon">+</span>',
      '  </button>',
      '  <div class="accordion-content">',
      '    <div class="accordion-content__inner">',
      '      <p class="accordion-copy">' + service.description + '</p>',
      '      <figure class="accordion-visual">',
      '        <!-- EDIT ME: replace src with your service image -->',
      '        <img src="' + service.image + '" alt="' + service.title + ' visual" loading="lazy" decoding="async">',
      '      </figure>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function buildProjectGridCard(project) {
    const wideClass = project.layout === 'wide' ? ' project-card--wide' : '';
    const placeholderClass = project.id === 'next' ? ' project-card--placeholder' : '';
    const detailLink = project.detailHref ? '<a class="text-link" href="' + project.detailHref + '" data-transition="true">Explore More</a>' : '<span class="text-link" aria-hidden="true">Explore More</span>';
    const githubLink = project.github && project.github !== '#' ? '<a class="project-card__github" href="' + project.github + '" target="_blank" rel="noreferrer">GitHub</a>' : '<span class="project-card__github" aria-disabled="true">Coming Soon</span>';
    const websiteLink = project.website ? '<a class="project-card__github" href="' + project.website + '" target="_blank" rel="noreferrer">Live Site</a>' : '';
    const tags = project.tags.map(function buildTag(tag) {
      return '<span class="pill">' + tag + '</span>';
    }).join('');

    return [
      '<article class="project-card reveal' + wideClass + placeholderClass + '" id="' + project.id + '">',
      '  <div class="project-card__media">',
      '    <!-- EDIT ME: replace src with your project image -->',
      '    <img src="' + project.image + '" alt="' + project.title + ' cover image" loading="lazy" decoding="async">',
      '  </div>',
      '  <div class="project-card__overlay">',
      '    <span class="kicker">' + project.category + '</span>',
      '    <h2 class="project-card__title">' + project.title + '</h2>',
      '    <p class="project-card__description">' + project.description + '</p>',
      '    <div class="project-card__footer">',
      '      <div class="meta-list">' + tags + '</div>',
      '      <div class="project-card__actions">' + detailLink + githubLink + websiteLink + '</div>',
      '    </div>',
      '  </div>',
      '</article>'
    ].join('');
  }

  function buildMarqueeItems(items) {
    return items.map(function buildMarqueeItem(item) {
      return '<span class="pill">' + item + '</span>';
    }).join('');
  }

  function renderHomeProjects() {
    const mount = document.getElementById('home-project-strip');
    if (!mount) {
      return;
    }

    mount.innerHTML = window.SiteData.projects.map(function renderProject(project) {
      return buildProjectPreviewCard(project);
    }).join('');
  }

  function renderAccordion() {
    const mount = document.getElementById('services-accordion');
    if (!mount) {
      return;
    }

    mount.innerHTML = window.SiteData.services.map(function renderService(service, index) {
      return buildAccordionRow(service, index);
    }).join('');
  }

  function renderJournalGrid(mountId, count) {
    const mount = document.getElementById(mountId);
    if (!mount) {
      return;
    }

    mount.innerHTML = window.SiteData.journals.slice(0, count).map(function renderJournal(journal) {
      return buildJournalCard(journal);
    }).join('');
  }

  function renderProjectsGrid() {
    const mount = document.getElementById('projects-grid');
    if (!mount) {
      return;
    }

    mount.innerHTML = window.SiteData.projects.map(function renderProject(project) {
      return buildProjectGridCard(project);
    }).join('');
  }

  function renderRoles() {
    const mount = document.getElementById('roles-grid');
    if (!mount) {
      return;
    }

    mount.innerHTML = window.SiteData.roles.map(function renderRole(role) {
      return buildRoleCard(role);
    }).join('');
  }

  function renderMarquee() {
    const rowOne = document.getElementById('marquee-row-one');
    const rowTwo = document.getElementById('marquee-row-two');

    if (rowOne) {
      rowOne.innerHTML = buildMarqueeItems(window.SiteData.certifications.rowOne);
    }

    if (rowTwo) {
      rowTwo.innerHTML = buildMarqueeItems(window.SiteData.certifications.rowTwo);
    }
  }

  function renderDynamicSections() {
    renderHomeProjects();
    renderAccordion();
    renderJournalGrid('home-journal-grid', 3);
    renderJournalGrid('about-journal-grid', 3);
    renderJournalGrid('journal-grid', 5);
    renderProjectsGrid();
    renderRoles();
    renderMarquee();
  }

  function initializeModule(moduleRef) {
    if (moduleRef && typeof moduleRef.init === 'function') {
      moduleRef.init();
    }
  }

  function initSite() {
    initializeModule(window.SiteChrome);
    renderDynamicSections();
    initializeModule(window.PageTransition);
    initializeModule(window.ScrollReveal);
    initializeModule(window.CounterAnimation);
    initializeModule(window.Accordion);
    initializeModule(window.Marquee);
    initializeModule(window.HeroParallax);
    initializeModule(window.ProjectsStrip);
    initializeModule(window.ContactForm);
    initializeModule(window.CustomCursor);
  }

  document.addEventListener('DOMContentLoaded', initSite);
})();
