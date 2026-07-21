(function () {
  "use strict";

  const config = window.VIRYN_STUDIO_CONFIG || {};
  const themes = ["day", "night", "chocolate"];

  function byId(id) {
    return document.getElementById(id);
  }

  function text(tag, value, className) {
    const node = document.createElement(tag);
    node.textContent = value;
    if (className) node.className = className;
    return node;
  }

  function safeTheme(value) {
    return themes.includes(value) ? value : "day";
  }

  function applyTheme(theme, persist = true) {
    const next = safeTheme(theme);
    document.documentElement.dataset.theme = next;
    if (persist) {
      try {
        localStorage.setItem("viryn-studio-theme", next);
      } catch (error) {
        console.warn("Theme preference could not be saved.", error);
      }
    }

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = next === "day" ? "Day" : next === "night" ? "Night" : "Chocolate";
      button.setAttribute("aria-label", `Current theme: ${next}. Activate to change theme.`);
      button.title = `Current theme: ${next}`;
    });
  }

  function initializeTheme() {
    const lockedTheme = document.documentElement.dataset.themeLock;
    if (lockedTheme) {
      applyTheme(lockedTheme, false);
      return;
    }

    let saved = "";
    try {
      saved = localStorage.getItem("viryn-studio-theme") || "";
    } catch (error) {
      console.warn("Theme preference could not be read.", error);
    }
    const pageDefault = safeTheme(document.documentElement.dataset.theme || "day");
    applyTheme(saved || pageDefault, false);

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = safeTheme(document.documentElement.dataset.theme);
        const index = themes.indexOf(current);
        applyTheme(themes[(index + 1) % themes.length]);
      });
    });
  }

  function initializeNavigation() {
    const toggle = document.querySelector("[data-nav-toggle]");
    const links = document.querySelector("[data-nav-links]");
    if (!toggle || !links) return;

    const close = () => {
      links.dataset.open = "false";
      toggle.setAttribute("aria-expanded", "false");
    };

    toggle.addEventListener("click", () => {
      const willOpen = links.dataset.open !== "true";
      links.dataset.open = String(willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
    });

    links.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980) close();
    });
  }

  function makeMailto(subject, body) {
    const email = config.contact?.email || "siegelumiere@gmail.com";
    const params = new URLSearchParams();
    if (subject) params.set("subject", subject);
    if (body) params.set("body", body);
    return `mailto:${email}?${params.toString()}`;
  }

  function resolvePrimaryContactLink(subject, body) {
    if (config.contact?.googleFormUrl) return config.contact.googleFormUrl;
    return makeMailto(subject || config.contact?.defaultSubject, body);
  }

  function wireContactLinks() {
    document.querySelectorAll("[data-contact-link]").forEach((link) => {
      const subject = link.dataset.subject || config.contact?.defaultSubject || "Viryn Studio inquiry";
      const body = link.dataset.body || "Hello Viryn Studio,\n\nI’d like to start a conversation about:\n\n";
      link.href = resolvePrimaryContactLink(subject, body);
    });

    document.querySelectorAll("[data-schedule-link]").forEach((link) => {
      if (config.contact?.schedulingUrl) {
        link.href = config.contact.schedulingUrl;
      } else {
        link.href = makeMailto("Schedule a Viryn Studio conversation", "Hello Viryn Studio,\n\nI’d like to schedule a project conversation.\n\n");
      }
    });

    const emailNode = byId("contact-email");
    if (emailNode && config.contact?.email) {
      emailNode.textContent = config.contact.email;
      emailNode.href = `mailto:${config.contact.email}`;
    }

    const responseNode = byId("response-window");
    if (responseNode && config.contact?.responseWindow) {
      responseNode.textContent = config.contact.responseWindow;
    }
  }

  function renderFrameworks() {
    const grid = byId("framework-grid");
    if (!grid || !Array.isArray(config.frameworks)) return;
    grid.replaceChildren();

    config.frameworks.forEach((item, index) => {
      const article = document.createElement("article");
      article.className = "card framework-card";

      article.append(text("span", String(index + 1).padStart(2, "0"), "card-number"));

      if (item.art) {
        const figure = document.createElement("figure");
        figure.className = "framework-card-art";
        const image = document.createElement("img");
        image.src = item.art;
        if (item.art2x) image.srcset = `${item.art} 1x, ${item.art2x} 2x`;
        image.alt = item.artAlt || "";
        image.loading = index > 1 ? "lazy" : "eager";
        figure.append(image);
        if (item.whisper) {
          const caption = document.createElement("figcaption");
          caption.textContent = item.whisper;
          figure.append(caption);
        }
        article.append(figure);
      }

      article.append(
        text("span", "", `card-accent ${item.accent || ""}`),
        text("p", item.audience, "utility-label"),
        text("h3", item.name),
        text("p", item.promise)
      );

      const list = document.createElement("ul");
      (item.includes || []).forEach((entry) => list.append(text("li", entry)));
      article.append(list);

      const actions = document.createElement("div");
      actions.className = "card-actions";

      const demo = document.createElement("a");
      demo.className = "button button-small";
      demo.href = item.href;
      demo.textContent = "View framework";

      const inquiry = document.createElement("a");
      inquiry.className = "button button-secondary button-small";
      inquiry.href = resolvePrimaryContactLink(
        `Viryn Studio — ${item.name} inquiry`,
        `Hello Viryn Studio,\n\nI’m interested in the ${item.name} framework.\n\nMy organization or project:\n\nWhat I need the website to help people do:\n\n`
      );
      inquiry.textContent = "Request a tailored version";

      actions.append(demo, inquiry);
      article.append(actions);
      grid.append(article);
    });
  }

  function renderPackages() {
    const grid = byId("pricing-grid");
    if (!grid || !Array.isArray(config.packages)) return;
    grid.replaceChildren();

    config.packages.forEach((item) => {
      const article = document.createElement("article");
      article.className = `card price-card${item.featured ? " featured" : ""}`;

      if (item.featured) article.append(text("span", "Most versatile", "concept-badge"));
      article.append(text("h3", item.name));

      const price = text("p", item.price, "price");
      price.prepend(text("small", item.cadence));
      article.append(price, text("p", item.description));

      const list = document.createElement("ul");
      (item.inclusions || []).forEach((entry) => list.append(text("li", entry)));
      article.append(list);

      const action = document.createElement("a");
      action.className = "button button-secondary";
      action.href = resolvePrimaryContactLink(
        `Viryn Studio — ${item.name} inquiry`,
        `Hello Viryn Studio,\n\nI’m interested in the ${item.name} package.\n\nMy organization or project:\n\nMy desired launch window:\n\n`
      );
      action.textContent = "Discuss this level";
      article.append(action);
      grid.append(article);
    });
  }

  function renderCarePlans() {
    const grid = byId("care-grid");
    if (!grid || !Array.isArray(config.carePlans)) return;
    grid.replaceChildren();

    config.carePlans.forEach((item) => {
      const article = document.createElement("article");
      article.className = "card";
      article.append(text("p", item.price, "utility-label"), text("h3", item.name), text("p", item.description));
      const list = document.createElement("ul");
      (item.inclusions || []).forEach((entry) => list.append(text("li", entry)));
      article.append(list);
      grid.append(article);
    });
  }

  function renderFoundingOffer() {
    const section = byId("founding-offer");
    if (!section) return;

    if (!config.foundingOffer?.active) {
      section.hidden = true;
      return;
    }

    section.hidden = false;
    const eyebrow = section.querySelector("[data-founding-eyebrow]");
    const titleNode = section.querySelector("[data-founding-title]");
    const copyNode = section.querySelector("[data-founding-copy]");
    const benefitNode = section.querySelector("[data-founding-benefit]");
    const button = section.querySelector("[data-founding-button]");

    if (eyebrow) eyebrow.textContent = config.foundingOffer.eyebrow;
    if (titleNode) titleNode.textContent = config.foundingOffer.title;
    if (copyNode) copyNode.textContent = config.foundingOffer.copy;
    if (benefitNode) benefitNode.textContent = config.foundingOffer.benefit;
    if (button) {
      button.textContent = config.foundingOffer.buttonLabel;
      button.href = resolvePrimaryContactLink(
        "Viryn Studio founding-client inquiry",
        "Hello Viryn Studio,\n\nI’m interested in a founding-client build.\n\nMy organization or project:\n\nWhat I need the site to accomplish:\n\n"
      );
    }
  }

  function renderInquiryOptions() {
    const list = byId("inquiry-options");
    if (!list || !Array.isArray(config.inquiryCategories)) return;
    list.replaceChildren();

    config.inquiryCategories.forEach((category) => {
      const link = document.createElement("a");
      link.className = "inquiry-option";
      link.href = resolvePrimaryContactLink(
        `Viryn Studio — ${category}`,
        `Hello Viryn Studio,\n\n${category}.\n\nA little about my organization or project:\n\nWhat I need the website to help people do:\n\n`
      );
      link.append(text("span", category), text("span", "↗", "mono"));
      list.append(link);
    });
  }

  function renderFooter() {
    const year = byId("current-year");
    if (year) year.textContent = String(new Date().getFullYear());

    const brandName = byId("footer-brand-name");
    if (brandName && config.brand?.name) brandName.textContent = config.brand.name;
  }

  function initializeDetails() {
    document.querySelectorAll("details").forEach((detail) => {
      detail.addEventListener("toggle", () => {
        const summary = detail.querySelector("summary");
        if (summary) summary.setAttribute("aria-expanded", String(detail.open));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeNavigation();
    wireContactLinks();
    renderFrameworks();
    renderPackages();
    renderCarePlans();
    renderFoundingOffer();
    renderInquiryOptions();
    renderFooter();
    initializeDetails();
  });
})();
