(function () {
  "use strict";

  const configs = {
    hearth: {
      number: "Configuration 01",
      hero: "Warm the room before the guest arrives. Hearth gives neighborhood restaurants, cafés, bakeries, and takeout counters a fast path to menu, hours, directions, reservations, and ordering.",
      cta: "Plan a visit",
      ticketLabel: "Neighborhood table",
      ticketTitle: "Bread, roses & a hot plate.",
      ticketAction: "Order / reserve",
      ticketFit: "Restaurants & cafés",
      ticketSignal: "Come inside",
      title: "Hearth makes the neighborhood table easy to find.",
      description: "For guests who already feel hungry, the website must answer five questions immediately: what is on the menu, when are you open, where are you, can I order, and can I sit down?",
      features: ["Readable live menu", "Hours, maps, and tap-to-call", "Ordering and reservation links", "Daily specials and featured plates"],
      plannerIntro: "Tell the restaurant when and how you hope to arrive.",
      serviceOptions: ["Dine-in reservation", "Pickup order", "Large-group table"]
    },
    route: {
      number: "Configuration 02",
      hero: "Make movement legible. Route gives food trucks, pop-ups, market vendors, and rotating concepts a living schedule, location signal, preorder path, and archive of where the flavor has been.",
      cta: "Find the route",
      ticketLabel: "Mobile service",
      ticketTitle: "The kitchen is moving. The signal stays clear.",
      ticketAction: "Locate / preorder",
      ticketFit: "Trucks & pop-ups",
      ticketSignal: "Meet us there",
      title: "Route keeps a moving business from feeling hard to find.",
      description: "Guests need the current location, service window, menu availability, sell-out status, and preorder cutoff without chasing posts across several social platforms.",
      features: ["Live location and weekly schedule", "Preorder windows and sell-out states", "Market, festival, and pop-up calendar", "SMS or email location updates"],
      plannerIntro: "Choose the service stop and the pickup window that fits your day.",
      serviceOptions: ["Preorder pickup", "Event vendor inquiry", "Private truck booking"]
    },
    feast: {
      number: "Configuration 03",
      hero: "Turn celebration into a structured request. Feast helps caterers and private chefs collect the right details, qualify fit, issue quotes, receive deposits, and carry one record into service day.",
      cta: "Plan an event",
      ticketLabel: "Event service",
      ticketTitle: "The celebration arrives before the first plate.",
      ticketAction: "Inquire / quote",
      ticketFit: "Catering & chefs",
      ticketSignal: "Let us prepare",
      title: "Feast turns event desire into an operationally useful brief.",
      description: "The guest should feel cared for while the business receives date, headcount, location, service style, menu interests, dietary notes, budget, and decision timeline in one place.",
      features: ["Guided catering inquiry", "Availability and qualification", "Quote and deposit pathway", "Event calendar and production record"],
      plannerIntro: "Give the caterer enough context to assess fit without writing a novel.",
      serviceOptions: ["Drop-off catering", "Buffet or staffed service", "Private chef experience"]
    }
  };

  const menuItems = [
    { category: "small", name: "Charred Corn Spoonbread", description: "Cast-iron corn custard, scallion butter, smoked pepper honey.", price: "$11", tags: ["vegetarian"] },
    { category: "small", name: "Canal Street Wings", description: "Crisp wings, fermented chile glaze, celery leaf, house ranch.", price: "$14", tags: ["signature", "spicy"] },
    { category: "main", name: "Braised Short Rib Plate", description: "Red-wine jus, whipped roots, burnt onion, soft herbs.", price: "$27", tags: ["gluten-aware"] },
    { category: "main", name: "Mushroom Pepper Pot", description: "King oyster mushroom, coconut broth, charred greens, rice.", price: "$22", tags: ["plant-based"] },
    { category: "side", name: "Rosemary Fry Basket", description: "Hand-cut potatoes, rosemary salt, roasted garlic dip.", price: "$8", tags: ["shareable"] },
    { category: "side", name: "Skillet Greens", description: "Slow greens, cider, smoked tomato, crisp shallot.", price: "$9", tags: ["plant-based"] },
    { category: "drink", name: "Porchlight Palmer", description: "Black tea, burnt lemon, peach leaf, sparkling water.", price: "$6", tags: ["zero-proof"] },
    { category: "drink", name: "Autumn Sorrel", description: "Hibiscus, ginger, orange peel, clove, soda.", price: "$7", tags: ["seasonal"] },
    { category: "small", name: "Brown-Butter Cornbread", description: "Hot skillet bread, cultured butter, sea salt.", price: "$9", tags: ["table favorite"] }
  ];

  const flowStages = {
    inquiry: {
      label: "Guest-facing intake", status: "New", title: "A structured request enters one working record.",
      copy: "Date, headcount, location, service type, menu interest, dietary notes, budget, and contact details arrive together instead of scattering across calls and direct messages.",
      records: [["Event", "Family celebration"], ["Date", "September 19"], ["Guests", "45"], ["Status", "Needs review"]]
    },
    review: {
      label: "Human qualification", status: "Reviewing", title: "The business confirms fit before promising the date.",
      copy: "Capacity, travel, staffing, menu feasibility, allergies, budget, and service expectations are reviewed by a person who can ask follow-up questions and decline responsibly.",
      records: [["Owner", "M. Rivera"], ["Capacity", "Available"], ["Travel", "12 miles"], ["Flag", "Allergy follow-up"]]
    },
    quote: {
      label: "Scoped proposal", status: "Sent", title: "The quote translates conversation into a shared agreement.",
      copy: "Package, quantities, staffing, delivery, fees, taxes, exclusions, payment schedule, and response deadline are written down before money changes hands.",
      records: [["Food", "$1,080"], ["Service", "$250"], ["Delivery", "$75"], ["Total", "$1,480"]]
    },
    deposit: {
      label: "Payment threshold", status: "Pending", title: "The date becomes real when the agreed deposit clears.",
      copy: "A production version can issue a secure payment link, reconcile the payment to the order record, and keep card or bank details out of the website itself.",
      records: [["Deposit", "$740"], ["Method", "Secure link"], ["Due", "August 30"], ["Balance", "$740"]]
    },
    calendar: {
      label: "Shared availability", status: "Booked", title: "Calendar is the service promise made visible.",
      copy: "The confirmed record blocks the service window, carries the address and contact details, and gives staff one authoritative place to understand what is happening when.",
      records: [["Load-in", "3:00 PM"], ["Service", "5:30 PM"], ["Address", "Confirmed"], ["Crew", "3 assigned"]]
    },
    production: {
      label: "Kitchen execution", status: "In prep", title: "The guest request becomes a production plan.",
      copy: "Counts, recipes, prep deadlines, packing lists, equipment, route, staffing, and final notes are generated from the same record instead of being retyped under pressure.",
      records: [["Prep list", "18 items"], ["Hot boxes", "4"], ["Dietary", "2 notes"], ["Lead", "Chef Dana"]]
    },
    fulfilled: {
      label: "Close and learn", status: "Complete", title: "Fulfillment ends the order, not the relationship.",
      copy: "The balance is reconciled, the record is closed, feedback is invited without coercion, and useful service notes can improve the next event.",
      records: [["Balance", "Paid"], ["Service", "Complete"], ["Follow-up", "Queued"], ["Archive", "Ready"]]
    }
  };

  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

  function setText(selector, value) {
    const node = $(selector);
    if (node) node.textContent = value;
  }

  function applyConfig(id) {
    const config = configs[id] || configs.hearth;
    document.documentElement.dataset.config = id;
    $$("[data-config-button]").forEach((button) => {
      const active = button.dataset.configButton === id;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    setText("[data-hero-copy]", config.hero);
    $$('[data-open-flow]').forEach((button) => {
      if (button.closest('.flow-cta')) return;
      button.textContent = config.cta;
    });
    setText("[data-ticket-label]", config.ticketLabel);
    setText("[data-ticket-title]", config.ticketTitle);
    setText("[data-ticket-action]", config.ticketAction);
    setText("[data-ticket-fit]", config.ticketFit);
    setText("[data-ticket-signal]", config.ticketSignal);
    setText("[data-config-number]", config.number);
    setText("[data-config-title]", config.title);
    setText("[data-config-description]", config.description);
    setText("[data-planner-intro]", config.plannerIntro);

    const featureList = $("[data-config-features]");
    if (featureList) {
      featureList.replaceChildren(...config.features.map((feature) => {
        const item = document.createElement("li");
        item.textContent = feature;
        return item;
      }));
    }

    const select = $("[data-service-type]");
    if (select) {
      select.replaceChildren();
      const placeholder = document.createElement("option");
      placeholder.value = "";
      placeholder.textContent = "Choose one";
      select.append(placeholder);
      config.serviceOptions.forEach((option) => {
        const node = document.createElement("option");
        node.textContent = option;
        select.append(node);
      });
    }

    try { localStorage.setItem("viryn-table-config", id); } catch (_) { /* preference only */ }
  }

  function renderMenu(filter = "all") {
    const grid = $("#menu-grid");
    if (!grid) return;
    const visible = menuItems.filter((item) => filter === "all" || item.category === filter);
    grid.replaceChildren(...visible.map((item, index) => {
      const article = document.createElement("article");
      article.className = "menu-card";
      const top = document.createElement("div");
      top.className = "menu-top";
      const count = document.createElement("span");
      count.className = "menu-index";
      count.textContent = String(index + 1).padStart(2, "0");
      const price = document.createElement("span");
      price.className = "price";
      price.textContent = item.price;
      top.append(count, price);
      const title = document.createElement("h3");
      title.textContent = item.name;
      const description = document.createElement("p");
      description.textContent = item.description;
      const tags = document.createElement("div");
      tags.className = "menu-tags";
      item.tags.forEach((tag) => {
        const node = document.createElement("span");
        node.className = "menu-tag";
        node.textContent = tag;
        tags.append(node);
      });
      article.append(top, title, description, tags);
      return article;
    }));
  }

  function applyFlowStage(id) {
    const stage = flowStages[id] || flowStages.inquiry;
    $$("[data-flow-step]").forEach((button) => {
      const active = button.dataset.flowStep === id;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
    });
    setText("[data-flow-label]", stage.label);
    setText("[data-flow-status]", stage.status);
    setText("[data-flow-title]", stage.title);
    setText("[data-flow-copy]", stage.copy);
    const records = $("[data-flow-records]");
    if (records) {
      records.replaceChildren(...stage.records.map(([label, value]) => {
        const item = document.createElement("div");
        const span = document.createElement("span");
        span.textContent = label;
        const strong = document.createElement("strong");
        strong.textContent = value;
        item.append(span, strong);
        return item;
      }));
    }
  }

  function initializePlanner() {
    const dialog = $("#service-planner");
    const form = $("#planner-form");
    if (!dialog || !form) return;
    let step = 1;

    function showStep(next) {
      step = next;
      $$('[data-planner-step]', form).forEach((section) => {
        const active = String(section.dataset.plannerStep) === String(next);
        section.classList.toggle("is-active", active);
        section.hidden = !active;
      });
      const progress = $("[data-progress-bar]", form);
      if (progress) progress.style.width = next === "result" ? "100%" : `${Number(next) * 33.333}%`;
    }

    function currentSectionValid() {
      const section = $(`[data-planner-step="${step}"]`, form);
      if (!section) return true;
      const fields = $$('input, select, textarea', section);
      return fields.every((field) => field.reportValidity());
    }

    $$('[data-open-flow]').forEach((button) => button.addEventListener("click", () => {
      form.reset();
      showStep(1);
      dialog.showModal();
    }));
    $$('[data-close-flow]').forEach((button) => button.addEventListener("click", () => dialog.close()));
    $$('[data-next-step]', form).forEach((button) => button.addEventListener("click", () => {
      if (!currentSectionValid()) return;
      showStep(Math.min(3, Number(step) + 1));
    }));
    $$('[data-prev-step]', form).forEach((button) => button.addEventListener("click", () => showStep(Math.max(1, Number(step) - 1))));

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const summary = $("[data-planner-summary]", form);
      if (summary) {
        const fields = [
          ["Configuration", configs[document.documentElement.dataset.config]?.number || "Table"],
          ["Service", data.get("serviceType") || "Not selected"],
          ["Date", data.get("date") || "Not selected"],
          ["Guest count", data.get("guests") || "Not selected"],
          ["Menu context", data.get("menuInterest") || "No note supplied"],
          ["Reply to", data.get("email") || "No email supplied"]
        ];
        const dl = document.createElement("dl");
        fields.forEach(([label, value]) => {
          const row = document.createElement("div");
          const dt = document.createElement("dt");
          const dd = document.createElement("dd");
          dt.textContent = label;
          dd.textContent = String(value);
          row.append(dt, dd);
          dl.append(row);
        });
        summary.replaceChildren(dl);
      }
      showStep("result");
    });

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  }

  function initializeContactLinks() {
    const config = window.VIRYN_STUDIO_CONFIG || {};
    const email = config.contact?.email || "siegelumiere@gmail.com";
    $$('[data-studio-contact]').forEach((link) => {
      const subject = encodeURIComponent("Viryn Studio — Table framework inquiry");
      const body = encodeURIComponent("Hello Viryn Studio,\n\nI’m interested in the Table hospitality framework.\n\nBusiness name:\nBusiness type (restaurant, food truck, catering, other):\nWhat guests need to do most easily:\n\n");
      link.href = `mailto:${email}?subject=${subject}&body=${body}`;
    });
  }

  function initializeNavigation() {
    const toggle = $("[data-nav-toggle]");
    const links = $("[data-nav-links]");
    if (!toggle || !links) return;
    toggle.addEventListener("click", () => {
      const open = links.dataset.open !== "true";
      links.dataset.open = String(open);
      toggle.setAttribute("aria-expanded", String(open));
    });
    $$('a', links).forEach((link) => link.addEventListener("click", () => {
      links.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  document.addEventListener("DOMContentLoaded", () => {
    let saved = "hearth";
    try { saved = localStorage.getItem("viryn-table-config") || "hearth"; } catch (_) { /* preference only */ }
    applyConfig(configs[saved] ? saved : "hearth");
    renderMenu();
    applyFlowStage("inquiry");
    initializePlanner();
    initializeContactLinks();
    initializeNavigation();

    $$("[data-config-button]").forEach((button) => button.addEventListener("click", () => applyConfig(button.dataset.configButton)));
    $$("[data-menu-filter]").forEach((button) => button.addEventListener("click", () => {
      $$("[data-menu-filter]").forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderMenu(button.dataset.menuFilter || "all");
    }));
    $$("[data-flow-step]").forEach((button) => button.addEventListener("click", () => applyFlowStage(button.dataset.flowStep)));
  });
})();
