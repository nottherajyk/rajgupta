/**
 * projects-strip.js
 * Adds desktop drag-to-scroll behavior to the homepage project strip.
 */
(function () {
  let activeStrip = null;
  let startX = 0;
  let startScrollLeft = 0;
  let hasMoved = false;

  function handleMouseDown(event) {
    activeStrip = event.currentTarget;
    startX = event.pageX - activeStrip.offsetLeft;
    startScrollLeft = activeStrip.scrollLeft;
    hasMoved = false;
    activeStrip.classList.add('dragging');
    activeStrip.dataset.dragging = 'true';
  }

  function handleMouseMove(event) {
    const strip = event.currentTarget;
    if (activeStrip !== strip || strip.dataset.dragging !== 'true') {
      return;
    }

    event.preventDefault();
    const currentX = event.pageX - strip.offsetLeft;
    const distance = currentX - startX;
    if (Math.abs(distance) > 4) {
      hasMoved = true;
    }
    strip.scrollLeft = startScrollLeft - distance;
  }

  function stopDragging(strip) {
    strip.classList.remove('dragging');
    delete strip.dataset.dragging;
    activeStrip = null;
  }

  function handleMouseUp(event) {
    stopDragging(event.currentTarget);
  }

  function handleMouseLeave(event) {
    stopDragging(event.currentTarget);
  }

  function handleStripClick(event) {
    if (!hasMoved) {
      return;
    }

    const anchor = event.target.closest('a');
    if (!anchor) {
      return;
    }

    event.preventDefault();
  }

  function bindStrip(strip) {
    strip.addEventListener('mousedown', handleMouseDown);
    strip.addEventListener('mousemove', handleMouseMove);
    strip.addEventListener('mouseup', handleMouseUp);
    strip.addEventListener('mouseleave', handleMouseLeave);
    strip.addEventListener('click', handleStripClick);
  }

  function init() {
    const strips = document.querySelectorAll('.projects-strip');
    strips.forEach(function initializeStrip(strip) {
      bindStrip(strip);
    });
  }

  window.ProjectsStrip = {
    init: init
  };
})();
