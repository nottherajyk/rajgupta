/**
 * marquee.js
 * Duplicates marquee track content so the CSS loop remains seamless.
 */
(function () {
  function prepareTrack(track) {
    if (track.dataset.prepared === 'true') {
      return;
    }

    track.innerHTML += track.innerHTML;
    track.dataset.prepared = 'true';
  }

  function init() {
    const tracks = document.querySelectorAll('[data-marquee-track]');
    tracks.forEach(function prepare(track) {
      prepareTrack(track);
    });
  }

  window.Marquee = {
    init: init
  };
})();
