(function () {
  "use strict";

  const pathContent = {
    diagnosis: {
      label: "A gentle first map",
      title: "Begin with the first thirty days guide.",
      copy: "It separates decisions that need attention now from decisions that can wait, and gives your family a shared place to hold questions.",
      href: "#new-diagnosis",
      action: "Open the starting map"
    },
    "daily-care": {
      label: "One routine at a time",
      title: "Start with a single repeated moment.",
      copy: "The daily-care resources focus on communication, appointments, routines, and observations without asking you to rebuild the whole household at once.",
      href: "#resources",
      action: "Browse daily-care resources"
    },
    overwhelmed: {
      label: "Care for the caregiver",
      title: "Take the private five-minute check-in.",
      copy: "You do not need to justify your exhaustion. The check-in helps name one immediate need and offers a small next step without storing your answer.",
      href: "#check-in",
      action: "Begin the private check-in"
    },
    family: {
      label: "Shared responsibility",
      title: "Use the family roles worksheet first.",
      copy: "Turn broad offers of help into specific responsibilities, limits, and check-in points that can survive a changing week.",
      href: "#family-planning",
      action: "Open the family planning path"
    },
    community: {
      label: "A room with purpose",
      title: "Look through the support circles.",
      copy: "The Commons begins with facilitated, time-bounded circles rather than an endless feed. Choose the room that best matches your role.",
      href: "#circles",
      action: "Explore support circles"
    }
  };

  const checkInContent = {
    rest: "Your next step could be naming one concrete task someone else can cover: one meal, one appointment, one phone call, or one uninterrupted hour. A real support directory would connect this need to respite and local help.",
    heard: "Your next step could be a moderated peer circle or one trusted conversation where you do not have to make the situation sound manageable. Recognition is a form of support, even before advice enters the room.",
    plan: "Your next step could be writing only three lines: what must happen today, what can wait, and who might share one part. The toolkit is designed to hold that small plan without turning care into a project-management performance.",
    urgent: "Immediate safety concerns need real-time local or professional support, not a community webpage. A live version would surface emergency and crisis contacts for the visitor’s location before any peer content."
  };

  function initializeAtmosphere() {
    let saved = "";
    try { saved = localStorage.getItem("active-brain-atmosphere") || ""; } catch (_) {}
    const initial = ["hearth", "grove", "dusk"].includes(saved) ? saved : "hearth";
    setAtmosphere(initial, false);

    document.querySelectorAll("[data-atmosphere-button]").forEach((button) => {
      button.addEventListener("click", () => setAtmosphere(button.dataset.atmosphereButton));
    });
  }

  function setAtmosphere(value, persist = true) {
    if (!["hearth", "grove", "dusk"].includes(value)) return;
    document.documentElement.dataset.atmosphere = value;
    document.querySelectorAll("[data-atmosphere-button]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.atmosphereButton === value));
    });
    if (persist) {
      try { localStorage.setItem("active-brain-atmosphere", value); } catch (_) {}
    }
  }

  function initializeMenu() {
    const button = document.querySelector("[data-menu-button]");
    const nav = document.querySelector("[data-nav]");
    if (!button || !nav) return;

    const close = () => {
      nav.dataset.open = "false";
      button.setAttribute("aria-expanded", "false");
    };

    button.addEventListener("click", () => {
      const open = nav.dataset.open !== "true";
      nav.dataset.open = String(open);
      button.setAttribute("aria-expanded", String(open));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => { if (window.innerWidth > 1080) close(); });
  }

  function initializeOrientation() {
    const result = document.querySelector("[data-path-result]");
    if (!result) return;
    const title = result.querySelector("[data-result-title]");
    const label = result.querySelector("[data-result-label]");
    const copy = result.querySelector("[data-result-copy]");
    const primary = result.querySelector("[data-result-primary]");

    document.querySelectorAll("[data-path]").forEach((button) => {
      button.setAttribute("aria-pressed", "false");
      button.addEventListener("click", () => {
        const content = pathContent[button.dataset.path];
        if (!content) return;
        document.querySelectorAll("[data-path]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
        label.textContent = content.label;
        title.textContent = content.title;
        copy.textContent = content.copy;
        primary.href = content.href;
        primary.textContent = content.action;
        result.hidden = false;
        result.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });

    const reset = result.querySelector("[data-reset-path]");
    if (reset) reset.addEventListener("click", () => {
      document.querySelectorAll("[data-path]").forEach((item) => item.setAttribute("aria-pressed", "false"));
      result.hidden = true;
      document.querySelector("[data-orientation-grid]")?.focus?.();
    });
  }

  function initializeFilters() {
    const cards = Array.from(document.querySelectorAll("[data-category]"));
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        document.querySelectorAll("[data-filter]").forEach((item) => {
          const active = item === button;
          item.classList.toggle("active", active);
          item.setAttribute("aria-pressed", String(active));
        });
        cards.forEach((card) => { card.hidden = filter !== "all" && card.dataset.category !== filter; });
      });
    });
  }

  function initializeCheckIn() {
    const form = document.querySelector("[data-check-in-form]");
    if (!form) return;
    const result = form.querySelector("[data-check-in-result]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const choice = new FormData(form).get("need");
      result.hidden = false;
      result.innerHTML = choice
        ? `<strong>A gentle next step</strong><p>${checkInContent[choice]}</p>`
        : "<strong>Choose one need first.</strong><p>There is no wrong answer, and nothing is stored.</p>";
    });
  }

  function openDialog(title, copy, steps) {
    const dialog = document.querySelector("[data-demo-dialog]");
    if (!dialog) return;
    dialog.querySelector("[data-dialog-title]").textContent = title;
    dialog.querySelector("[data-dialog-copy]").textContent = copy;
    const flow = dialog.querySelector("[data-dialog-flow]");
    flow.innerHTML = `<ol>${steps.map((step) => `<li>${step}</li>`).join("")}</ol>`;
    if (typeof dialog.showModal === "function") dialog.showModal();
  }

  function initializeDemoActions() {
    document.querySelector("[data-demo-download]")?.addEventListener("click", () => {
      openDialog(
        "Kitchen-table toolkit flow",
        "A finished version could deliver a free PDF directly, collect an optional email, or route a paid expanded kit through the House Freedom Gumroad storefront.",
        ["Preview the contents before any form appears.", "Choose instant download, email delivery, or a physical-print request.", "Show exactly what information is collected and why.", "Deliver the file and keep future marketing strictly opt-in."]
      );
    });

    document.querySelectorAll("[data-circle-demo]").forEach((button) => {
      button.addEventListener("click", () => {
        openDialog(
          `${button.dataset.circleDemo} registration`,
          "The public page stays gentle while a calendar and capacity system work underneath it.",
          ["Choose an available date and access needs.", "Provide only the contact details needed for the circle.", "Review group boundaries before confirming.", "Receive a calendar invitation without exposing the guest list.", "Facilitators manage capacity from a simple roster or connected spreadsheet."]
        );
      });
    });
  }

  function initializeShareForm() {
    const form = document.querySelector("[data-share-form]");
    if (!form) return;
    const result = form.querySelector("[data-share-result]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("story-name") || "Contributor").trim() || "Contributor";
      const consents = data.getAll("consent");
      const labels = {
        conversation: "a private editorial conversation",
        anonymous: "considering an anonymous or pseudonymous story",
        public: "considering a public story only after final review"
      };
      const summary = consents.length ? consents.map((item) => labels[item]).join(", ") : "no publication or contact permissions selected";
      result.hidden = false;
      result.innerHTML = `<strong>Consent summary for ${escapeHtml(name)}</strong><p>You selected: ${escapeHtml(summary)}.</p><p>This prototype has not transmitted or stored your note. In a live system, you would review this summary again before sending.</p>`;
    });
  }

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeAtmosphere();
    initializeMenu();
    initializeOrientation();
    initializeFilters();
    initializeCheckIn();
    initializeDemoActions();
    initializeShareForm();
  });
})();
