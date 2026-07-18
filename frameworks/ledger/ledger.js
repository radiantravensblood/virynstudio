(function () {
  "use strict";

  function initializeResourceFilters() {
    const buttons = Array.from(document.querySelectorAll("[data-resource-filter]"));
    const cards = Array.from(document.querySelectorAll("[data-resource-category]"));
    const status = document.querySelector("[data-resource-status]");
    if (!buttons.length || !cards.length) return;

    function applyFilter(filter) {
      let visible = 0;
      cards.forEach((card) => {
        const show = filter === "all" || card.dataset.resourceCategory === filter;
        card.hidden = !show;
        if (show) visible += 1;
      });

      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.resourceFilter === filter));
      });

      if (status) {
        status.textContent = `Showing ${visible} resource${visible === 1 ? "" : "s"}.`;
      }
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.resourceFilter || "all"));
    });
  }

  function initializeVideoStatus() {
    const video = document.querySelector("[data-ledger-video]");
    const status = document.querySelector("[data-video-status]");
    if (!video || !status) return;

    video.addEventListener("play", () => {
      status.textContent = "Synthetic training preview playing · captions available";
    });
    video.addEventListener("pause", () => {
      if (!video.ended) status.textContent = "Synthetic training preview paused · captions available";
    });
    video.addEventListener("ended", () => {
      status.textContent = "Synthetic training preview complete · transcript and worksheet available";
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeResourceFilters();
    initializeVideoStatus();
  });
})();
