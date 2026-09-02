(function () {
  var timeline = document.querySelector(".timeline");
  if (!timeline) return;

  function reveal() {
    timeline.classList.add("is-visible");
  }

  if (!("IntersectionObserver" in window)) {
    reveal();
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal();
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  observer.observe(timeline);
})();
