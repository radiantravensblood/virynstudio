(() => {
  "use strict";

  const registry = window.COOPERATIVE_RHYTHM_DATA || { entries: [], sources: {} };
  const entries = [...(registry.entries || [])].sort((a, b) => a.date.localeCompare(b.date));

  const dateKey = (date) => {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  };

  const entryDate = (entry) => new Date(`${entry.date}T12:00:00`);

  const civilSeason = (date) => {
    const mmdd = (date.getMonth() + 1) * 100 + date.getDate();
    if (mmdd < 320 || mmdd >= 1221) return "winter";
    if (mmdd < 620) return "spring";
    if (mmdd < 922) return "summer";
    return "autumn";
  };

  const formatDate = (iso) => new Intl.DateTimeFormat(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(entryDate({ date: iso }));

  const today = new Date();
  const todayKey = dateKey(today);
  const exact = entries.find((entry) => entry.date === todayKey);
  const future = entries.filter((entry) => entry.date >= todayKey);
  const nextSunday = future.find((entry) => entryDate(entry).getDay() === 0);
  const focus = exact || nextSunday || future[0] || entries[entries.length - 1] || null;
  const next = focus ? entries.find((entry) => entry.date > focus.date) || null : null;

  const saturdayEvening = today.getDay() === 6 && today.getHours() >= 18;
  const sundayDay = today.getDay() === 0 && today.getHours() < 15;
  const sundayMode = saturdayEvening || sundayDay;

  const html = document.documentElement;
  html.dataset.civilSeason = civilSeason(today);
  html.dataset.sundayMode = String(sundayMode);

  if (focus) {
    html.dataset.liturgicalColor = focus.color || "green";

    document.querySelectorAll("[data-rhythm-label]").forEach((node) => {
      node.textContent = `${focus.title} · ${focus.colorLabel}`;
    });
    document.querySelectorAll("[data-rhythm-title]").forEach((node) => {
      node.textContent = focus.title;
    });
    document.querySelectorAll("[data-rhythm-date]").forEach((node) => {
      node.textContent = formatDate(focus.date);
    });
    document.querySelectorAll("[data-rhythm-color-label]").forEach((node) => {
      node.textContent = focus.colorLabel;
    });
    document.querySelectorAll("[data-rhythm-readings]").forEach((node) => {
      node.textContent = focus.readings;
    });

    const source = registry.sources?.[focus.source];
    document.querySelectorAll("[data-rhythm-source]").forEach((node) => {
      node.textContent = source ? `${source.publisher} · ${source.label}` : "Worship planning calendar";
    });

    document.querySelectorAll("[data-rhythm-next]").forEach((node) => {
      node.textContent = next ? `${formatDate(next.date)} · ${next.title}` : "The next published threshold will appear here.";
    });
  }

  if (sundayMode) {
    document.querySelectorAll("[data-sunday-primary]").forEach((node) => {
      node.textContent = today.getDay() === 0 ? "Worship today" : "Plan Sunday worship";
    });
  }

  window.COOPERATIVE_RHYTHM = {
    today: todayKey,
    civilSeason: civilSeason(today),
    sundayMode,
    focus,
    next
  };
})();
