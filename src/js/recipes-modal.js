(function () {
  var modal = document.getElementById("recipe-modal");
  if (!modal) return;

  var image = document.getElementById("recipe-modal-image");
  var title = document.getElementById("recipe-modal-title");
  var description = document.getElementById("recipe-modal-description");
  var price = document.getElementById("recipe-modal-price");
  var lastFocused = null;

  function openModal(card) {
    lastFocused = document.activeElement;
    image.src = card.dataset.image;
    image.alt = card.dataset.title;
    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description;
    price.textContent = card.dataset.price;
    modal.hidden = false;
    modal.querySelector(".recipe-modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".recipe-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(card);
    });
  });

  modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
    el.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
})();
