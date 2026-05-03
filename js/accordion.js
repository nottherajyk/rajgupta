/**
 * accordion.js
 * Handles one-open-at-a-time accordion behavior for the homepage skills section.
 */
(function () {
  function closeRow(row) {
    const content = row.querySelector('.accordion-content');
    const button = row.querySelector('.accordion-toggle');
    row.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    content.style.maxHeight = '0px';
  }

  function openRow(row) {
    const content = row.querySelector('.accordion-content');
    const button = row.querySelector('.accordion-toggle');
    row.classList.add('open');
    button.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }

  function handleAccordionToggle(event) {
    const button = event.currentTarget;
    const row = button.closest('.accordion-row');
    const accordion = row.closest('.accordion');
    const rows = accordion.querySelectorAll('.accordion-row');
    const shouldOpen = !row.classList.contains('open');

    rows.forEach(function collapseRow(item) {
      closeRow(item);
    });

    if (shouldOpen) {
      openRow(row);
    }
  }

  function initRow(row) {
    const button = row.querySelector('.accordion-toggle');
    button.addEventListener('click', handleAccordionToggle);

    if (row.classList.contains('open')) {
      openRow(row);
      return;
    }

    closeRow(row);
  }

  function init() {
    const rows = document.querySelectorAll('.accordion-row');
    if (!rows.length) {
      return;
    }

    rows.forEach(function initializeRow(row) {
      initRow(row);
    });
  }

  window.Accordion = {
    init: init
  };
})();
