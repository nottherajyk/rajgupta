/**
 * timeline-tracker.js
 * Game-like circular scroll pointer that tracks along vertical timelines,
 * filling progress and highlighting stages as the user scrolls.
 */
(function () {
  function initTimelineContainer(container) {
    if (container.dataset.trackerInitialized) {
      return;
    }
    container.dataset.trackerInitialized = 'true';

    // 1. Create Progress Line
    const progressLine = document.createElement('div');
    progressLine.className = 'timeline-progress-line';
    container.appendChild(progressLine);

    // 2. Create Game Pointer Orb
    const pointerOrb = document.createElement('div');
    pointerOrb.className = 'timeline-pointer-orb';
    pointerOrb.innerHTML = [
      '<div class="pointer-ring"></div>',
      '<div class="pointer-core"></div>',
      '<div class="pointer-ping"></div>',
      '<div class="pointer-stage-tag" data-pointer-tag>STAGE 1</div>'
    ].join('');
    container.appendChild(pointerOrb);

    const tagEl = pointerOrb.querySelector('[data-pointer-tag]');
    const items = Array.prototype.slice.call(container.querySelectorAll('.timeline-item'));

    if (!items.length) {
      return;
    }

    // Assign stage numbers to items
    items.forEach(function (item, idx) {
      item.setAttribute('data-stage-num', idx + 1);
    });

    let ticking = false;

    function updateTracker() {
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const targetY = windowHeight * 0.45; // Viewport target Y position

      // Out of view check
      if (rect.top > windowHeight || rect.bottom < 0) {
        container.classList.remove('is-active-pointer');
        ticking = false;
        return;
      }

      container.classList.add('is-active-pointer');

      // Calculate progress percentage (0 to 1)
      const containerHeight = rect.height;
      let progress = (targetY - rect.top) / containerHeight;
      progress = Math.max(0, Math.min(1, progress));

      const pointerPx = progress * containerHeight;

      // Update line height and pointer orb position
      progressLine.style.height = (progress * 100) + '%';
      pointerOrb.style.transform = 'translate(-50%, ' + pointerPx + 'px)';

      // Detect active stage based on pointer position relative to item centers
      let activeStageIdx = 0;

      items.forEach(function (item, idx) {
        const itemRect = item.getBoundingClientRect();
        const itemTopRel = itemRect.top - rect.top;
        const itemCenterRel = itemTopRel + (itemRect.height / 2);

        // Highlight stage if pointer has reached the card top or center
        if (pointerPx >= (itemTopRel - 50)) {
          item.classList.add('is-active-stage');
          activeStageIdx = idx;
        } else {
          item.classList.remove('is-active-stage');
        }
      });

      // Update floating stage tag text
      if (tagEl && items[activeStageIdx]) {
        const activeItem = items[activeStageIdx];
        const roleTitle = activeItem.querySelector('h3');
        const roleName = roleTitle ? roleTitle.textContent.trim() : '';
        const stageNum = activeStageIdx + 1;
        tagEl.textContent = 'STAGE ' + stageNum + (roleName ? (' • ' + roleName) : '');
      }

      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateTracker);
        ticking = true;
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    // Initial positioning update
    setTimeout(updateTracker, 100);
  }

  function init() {
    const containers = Array.prototype.slice.call(document.querySelectorAll('.timeline-container'));
    containers.forEach(function (container) {
      initTimelineContainer(container);
    });
  }

  window.TimelineTracker = {
    init: init
  };
})();
