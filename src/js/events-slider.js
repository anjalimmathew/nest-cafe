document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-slider-track]").forEach((track) => {
    const wrapper = track.closest(".events-listing") || track.parentElement;
    const prevBtn = wrapper.querySelector("[data-slider-prev]");
    const nextBtn = wrapper.querySelector("[data-slider-next]");
    if (!prevBtn || !nextBtn) return;

    const scrollByCard = (direction) => {
      const card = track.querySelector(".event-row");
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 24;
      const amount = card ? card.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
      track.scrollBy({ left: amount * direction, behavior: "smooth" });
    };

    const updateButtons = () => {
      const maxScroll = track.scrollWidth - track.clientWidth - 1;
      prevBtn.disabled = track.scrollLeft <= 0;
      nextBtn.disabled = track.scrollLeft >= maxScroll;
    };

    prevBtn.addEventListener("click", () => scrollByCard(-1));
    nextBtn.addEventListener("click", () => scrollByCard(1));
    track.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    updateButtons();
  });
});
