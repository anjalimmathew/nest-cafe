(function () {
  var modal = document.getElementById("recipe-modal");
  if (!modal) return;

  var frame = document.getElementById("recipe-modal-frame");
  var tail = document.getElementById("recipe-modal-tail");
  var image = document.getElementById("recipe-modal-image");
  var title = document.getElementById("recipe-modal-title");
  var description = document.getElementById("recipe-modal-description");
  var price = document.getElementById("recipe-modal-price");
  var lastFocused = null;
  var activeCard = null;

  function positionTail() {
    if (!frame || !tail || !activeCard) return;
    var cardRect = activeCard.getBoundingClientRect();
    var frameRect = frame.getBoundingClientRect();
    var offset = cardRect.left + cardRect.width / 2 - frameRect.left;
    var min = 28;
    var max = frameRect.width - 28;
    if (offset < min) offset = min;
    if (offset > max) offset = max;
    tail.style.left = offset + "px";
    tail.style.visibility = "visible";
  }

  function openModal(card) {
    lastFocused = document.activeElement;
    activeCard = card;
    if (tail) tail.style.visibility = "hidden";
    image.src = card.dataset.image;
    image.alt = card.dataset.title;
    title.textContent = card.dataset.title;
    description.textContent = card.dataset.description;
    price.textContent = card.dataset.price;
    modal.hidden = false;
    requestAnimationFrame(positionTail);
    modal.querySelector(".recipe-modal__close").focus();
  }

  function closeModal() {
    modal.hidden = true;
    activeCard = null;
    if (tail) tail.style.visibility = "hidden";
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

  window.addEventListener("resize", positionTail);
})();
