(() => {
  "use strict";

  const registry = window.COOPERATIVE_RHYTHM_DATA || { entries: [], sources: {} };
  const entries = [...(registry.entries || [])].sort((a, b) => a.date.localeCompare(b.date));
  const manualOverride = window.COOPERATIVE_RHYTHM_OVERRIDE || {};

  const dateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const fromDateKey = (iso) => new Date(`${iso}T12:00:00`);
  const entryDate = (entry) => fromDateKey(entry.date);

  const previewDate = () => {
    const raw = new URLSearchParams(window.location.search).get("rhythmDate");
    if (raw && /^\d{4}-\d{2}-\d{2}$/.test(raw)) {
      const candidate = fromDateKey(raw);
      if (!Number.isNaN(candidate.getTime())) return candidate;
    }
    return new Date();
  };

  const civilSeason = (date) => {
    const mmdd = (date.getMonth() + 1) * 100 + date.getDate();
    if (mmdd < 320 || mmdd >= 1221) return "winter";
    if (mmdd < 620) return "spring";
    if (mmdd < 922) return "summer";
    return "autumn";
  };

  const liturgicalSeason = (entry) => {
    const title = (entry?.title || "").toLowerCase();
    if (/advent/.test(title)) return "advent";
    if (/christmas/.test(title)) return "christmas";
    if (/epiphany|baptism of the lord/.test(title)) return "epiphany";
    if (/palm\/passion|holy week|maundy|good friday|holy saturday/.test(title)) return "holy-week";
    if (/lent/.test(title)) return "lent";
    if (/easter/.test(title)) return "easter";
    if (/pentecost/.test(title) && !/after pentecost/.test(title)) return "pentecost";
    if (/trinity sunday|all saints|christ the king|reign of christ|transfiguration|ascension/.test(title)) return "feast";
    if (/after pentecost/.test(title)) return "ordinary-time";
    return "ordinary-time";
  };

  const formatDate = (iso) => new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(fromDateKey(iso));

  const getDayMode = (date) => {
    const day = date.getDay();
    const hour = date.getHours();
    if (day === 0 && hour < 16) return "sunday";
    if (day === 6 && hour >= 18) return "sunday-eve";
    return "weekday";
  };

  const resolveFocus = (now) => {
    const key = dateKey(now);
    const exact = entries.find((entry) => entry.date === key);
    if (exact) return exact;

    const dayMode = getDayMode(now);
    if (dayMode === "sunday-eve") {
      return entries.find((entry) => entry.date > key && entryDate(entry).getDay() === 0) || null;
    }

    const past = entries.filter((entry) => entry.date < key);
    const mostRecentSunday = [...past].reverse().find((entry) => entryDate(entry).getDay() === 0);
    if (mostRecentSunday) return mostRecentSunday;

    return entries.find((entry) => entry.date > key) || entries[entries.length - 1] || null;
  };

  const ensureThemeStyles = () => {
    if (document.querySelector('link[data-rhythm-theme]')) return;
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "rhythm-theme.css?v=002";
    link.dataset.rhythmTheme = "true";
    document.head.appendChild(link);
  };

  const setText = (selector, value) => {
    document.querySelectorAll(selector).forEach((node) => {
      node.textContent = value;
    });
  };

  const translateInterfaceLanguage = (dayMode) => {
    const worshipHeading = document.querySelector("#worship .section-heading h2");
    if (worshipHeading) worshipHeading.textContent = "Explore our three churches.";

    const worshipEyebrow = document.querySelector("#worship .section-heading .eyebrow");
    if (worshipEyebrow) {
      worshipEyebrow.textContent = dayMode === "sunday"
        ? "Worship today"
        : dayMode === "sunday-eve"
          ? "Tomorrow in worship"
          : "This Sunday";
    }

    const readingsLabel = document.querySelector(".rhythm-readings > span");
    if (readingsLabel) readingsLabel.textContent = "This week’s readings";

    const aheadLabel = document.querySelector(".rhythm-next > span");
    if (aheadLabel) aheadLabel.textContent = "Looking ahead";

    const rhythmColorLabel = document.querySelector("[data-rhythm-color-label]");
    if (rhythmColorLabel) {
      rhythmColorLabel.textContent = dayMode === "sunday"
        ? "Today in worship"
        : dayMode === "sunday-eve"
          ? "Tomorrow in worship"
          : "This week in worship";
    }
  };

  const now = previewDate();
  const todayKey = dateKey(now);
  const dayMode = getDayMode(now);
  const focus = resolveFocus(now);
  const next = focus ? entries.find((entry) => entry.date > focus.date) || null : null;

  ensureThemeStyles();

  const html = document.documentElement;
  html.dataset.civilSeason = manualOverride.civilSeason || civilSeason(now);
  html.dataset.dayMode = manualOverride.dayMode || dayMode;
  html.dataset.sundayMode = String((manualOverride.dayMode || dayMode) !== "weekday");

  if (focus) {
    const resolvedColor = manualOverride.liturgicalColor || focus.color || "green";
    const resolvedSeason = manualOverride.liturgicalSeason || liturgicalSeason(focus);

    html.dataset.liturgicalColor = resolvedColor;
    html.dataset.liturgicalSeason = resolvedSeason;

    setText("[data-rhythm-label]", focus.title);
    setText("[data-rhythm-title]", focus.title);
    setText("[data-rhythm-date]", formatDate(focus.date));
    setText("[data-rhythm-readings]", focus.readings);

    document.querySelectorAll(".rhythm-swatch, .rhythm-dot").forEach((node) => {
      node.setAttribute("role", "img");
      node.setAttribute("aria-label", `Liturgical color: ${focus.colorLabel}`);
      node.title = `Liturgical color: ${focus.colorLabel}`;
    });

    const source = registry.sources?.[focus.source];
    setText(
      "[data-rhythm-source]",
      source ? `${source.publisher} · ${source.label}` : "Worship planning calendar"
    );

    setText(
      "[data-rhythm-next]",
      next ? `${formatDate(next.date)} · ${next.title}` : "The next published observance will appear here."
    );
  }

  translateInterfaceLanguage(html.dataset.dayMode);

  document.querySelectorAll("[data-sunday-primary]").forEach((node) => {
    if (html.dataset.dayMode === "sunday") node.textContent = "Find worship today";
    else if (html.dataset.dayMode === "sunday-eve") node.textContent = "Plan tomorrow’s worship";
    else node.textContent = "Plan Sunday worship";
  });

  window.COOPERATIVE_RHYTHM = {
    today: todayKey,
    previewing: new URLSearchParams(window.location.search).has("rhythmDate"),
    civilSeason: html.dataset.civilSeason,
    liturgicalSeason: html.dataset.liturgicalSeason,
    liturgicalColor: html.dataset.liturgicalColor,
    dayMode: html.dataset.dayMode,
    focus,
    next
  };
})();
