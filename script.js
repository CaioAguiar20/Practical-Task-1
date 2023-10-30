function scrollToElement(id) {
  var element = document.getElementById(id);
  var targetPosition = element.offsetTop;

  var currentPosition = window.pageYOffset;
  var distance = targetPosition - currentPosition;
  var duration = 500;
  var start = null;

  function step(timestamp) {
    if (!start) start = timestamp;
    var progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));
    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  }

  function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
  }

  window.requestAnimationFrame(step);
}
