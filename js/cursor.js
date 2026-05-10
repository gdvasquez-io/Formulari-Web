// Smooth fluid cursor — frame-rate independent easing
(function () {
  var dot, ring;
  var mx = -100, my = -100;
  var dx = mx, dy = my;
  var rx = mx, ry = my;
  var last = performance.now();

  function init() {
    dot = document.createElement('div');
    dot.className = 'cursor-dot';
    ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    window.addEventListener('mousemove', function (e) {
      mx = e.clientX;
      my = e.clientY;
    }, { passive: true });

    requestAnimationFrame(loop);
  }

  // Frame-rate independent lerp: factor per second
  function smooth(current, target, rate, dt) {
    return current + (target - current) * (1 - Math.exp(-rate * dt));
  }

  function loop(now) {
    var dt = Math.min((now - last) / 1000, 0.05);
    last = now;

    dx = smooth(dx, mx, 35, dt);
    dy = smooth(dy, my, 35, dt);
    rx = smooth(rx, mx, 14, dt);
    ry = smooth(ry, my, 14, dt);

    dot.style.transform  = 'translate3d(' + dx + 'px,' + dy + 'px,0) translate(-50%,-50%)';
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0) translate(-50%,-50%)';

    requestAnimationFrame(loop);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
