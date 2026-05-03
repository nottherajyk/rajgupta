/**
 * cursor.js
 * Controls the custom dot and ring cursor, including hover states for interactive elements.
 */
(function () {
  let dot = null;
  let ring = null;
  let ringX = 0;
  let ringY = 0;
  let mouseX = 0;
  let mouseY = 0;
  let rafId = 0;

  function supportsFinePointer() {
    return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function handleMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
    dot.style.opacity = '1';
    ring.style.opacity = '0.6';
  }

  function handleBodyEnter() {
    dot.style.opacity = '1';
    ring.style.opacity = '0.6';
  }

  function handleBodyLeave() {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
    document.body.classList.remove('cursor-hover');
  }

  function handleInteractiveEnter() {
    document.body.classList.add('cursor-hover');
  }

  function handleInteractiveLeave() {
    document.body.classList.remove('cursor-hover');
  }

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    rafId = window.requestAnimationFrame(animateRing);
  }

  function bindInteractiveElements() {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, label');
    interactiveElements.forEach(function bindInteractiveElement(element) {
      element.addEventListener('mouseenter', handleInteractiveEnter);
      element.addEventListener('mouseleave', handleInteractiveLeave);
    });
  }

  function init() {
    if (!supportsFinePointer()) {
      return;
    }

    dot = document.querySelector('.cursor-dot');
    ring = document.querySelector('.cursor-ring');

    if (!dot || !ring) {
      return;
    }

    document.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseenter', handleBodyEnter);
    document.body.addEventListener('mouseleave', handleBodyLeave);
    bindInteractiveElements();
    rafId = window.requestAnimationFrame(animateRing);
  }

  window.CustomCursor = {
    init: init,
    rafId: function getAnimationFrameId() {
      return rafId;
    }
  };
})();
