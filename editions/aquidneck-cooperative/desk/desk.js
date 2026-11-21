(() => {
  "use strict";

  const content = window.PARISH_CONTENT || {};
  const activity = window.COOPERATIVE_ACTIVITY || null;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => Array.from(root.querySelectorAll(selector));

  const ROLE_CAPABILITIES = {
    "cooperative-admin": ["home", "publish", "calendar", "formation", "reports", "security"],
    "church-editor": ["home", "publish", "calendar", "formation", "security"],
    "clergy-reviewer": ["home", "publish", "calendar", "formation", "security"],
    "finance-viewer": ["home", "reports", "security"]
  };

  const VIEW_TITLES = {
    home: "Today",
    publish: "Publish",
    calendar: "Calendar",
    formation: "Formation",
    reports: "Reports",
    security: "Security review"
  };

  const DRAFT_KEY = "cooperative-desk-drafts-v0-1";
  let calendarKind = "all";

  const escapeHtml = (value) => String(value == null ? "" : value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const activeDate = () => activity && activity.activeDate ? activity.activeDate() : new Date();

  const formatDate = (iso) => {
    if (!iso) return "Ongoing";
    const date = new Date(iso + "T12:00:00");
    const options = { month: "short", day: "numeric" };
    if (date.getFullYear() !== activeDate().getFullYear()) options.year = "numeric";
    return new Intl.DateTimeFormat(undefined, options).format(date);
  };

  const scope = () => qs("#church-scope") ? qs("#church-scope").value : "all";
  const role = () => qs("#role-preview") ? qs("#role-preview").value : "cooperative-admin";

  const scopeMatches = (record) => {
    const current = scope();
    if (current === "all") return true;
    return Array.isArray(record.scope) && record.scope.includes(current);
  };

  const resolvedActivities = () => activity && activity.resolveAll ? activity.resolveAll(activeDate()) : [];

  const currentActivities = () => resolvedActivities()
    .filter(scopeMatches)
    .sort((a, b) => {
      const aDate = a.occurrence && a.occurrence.date ? a.occurrence.date : "9999-12-31";
      const bDate = b.occurrence && b.occurrence.date ? b.occurrence.date : "9999-12-31";
      return aDate.localeCompare(bDate) || a.title.localeCompare(b.title);
    });

  const sourceLabel = (sourceId) => {
    const source = content.sources && content.sources[sourceId];
    return source ? source.label : (sourceId || "Prototype");
  };

  const showView = (view) => {
    const allowed = ROLE_CAPABILITIES[role()] || ROLE_CAPABILITIES["cooperative-admin"];
    const next = allowed.includes(view) ? view : "home";

    qsa("[data-view]").forEach((node) => node.classList.toggle("is-active", node.dataset.view === next));
    qsa("[data-view-button]").forEach((button) => button.classList.toggle("is-active", button.dataset.viewButton === next));
    const title = qs("[data-view-title]");
    if (title) title.textContent = VIEW_TITLES[next] || "Desk";

    if (next === "calendar") renderCalendar();
    if (next === "publish") renderDrafts();
  };

  const applyRolePreview = () => {
    const allowed = ROLE_CAPABILITIES[role()] || [];
    qsa("[data-view-button]").forEach((button) => {
      const permitted = allowed.includes(button.dataset.viewButton);
      button.disabled = !permitted;
      button.title = permitted ? "" : "Role preview only. Production authorization must be enforced on the server.";
    });

    const visible = qs("[data-view].is-active");
    const visibleView = visible ? visible.dataset.view : "home";
    if (!allowed.includes(visibleView)) showView("home");
  };

  const loadDrafts = () => {
    try {
      const stored = sessionStorage.getItem(DRAFT_KEY);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  };

  const saveDrafts = (drafts) => {
    try {
      sessionStorage.setItem(DRAFT_KEY, JSON.stringify(drafts));
    } catch (_) {
      // Session-only prototype. Failure to persist is non-fatal.
    }
  };

  const renderMetrics = () => {
    const records = currentActivities();
    const needsReview = records.filter((item) => !item.sourceReviewed).length;
    const reviewed = records.length - needsReview;
    qs("#metric-upcoming").textContent = String(records.length);
    qs("#metric-review").textContent = String(needsReview);
    qs("#metric-freshness").textContent = records.length ? reviewed + "/" + records.length : "—";
    qs("#metric-drafts").textContent = String(loadDrafts().length);
  };

  const renderUpcoming = () => {
    const root = qs("#upcoming-list");
    if (!root) return;
    const records = currentActivities().slice(0, 7);

    if (!records.length) {
      root.innerHTML = '<div class="empty-state">No live activities match this church scope.</div>';
      return;
    }

    root.innerHTML = records.map((item) => {
      const date = item.occurrence ? item.occurrence.date : null;
      return '<article class="activity-row">' +
        '<div class="activity-date">' + escapeHtml(formatDate(date)) + '</div>' +
        '<div><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.meta || item.description || "") + '</p></div>' +
        '<span class="badge">' + escapeHtml(item.status || item.lifecycleState || "active") + '</span>' +
        '</article>';
    }).join("");
  };

  const renderSources = () => {
    const root = qs("#source-list");
    if (!root) return;
    const sourceIds = Array.from(new Set(currentActivities().map((item) => item.sourceId)));

    if (!sourceIds.length) {
      root.innerHTML = '<div class="empty-state">No source records available.</div>';
      return;
    }

    root.innerHTML = sourceIds.map((id) => {
      const source = content.sources && content.sources[id] ? content.sources[id] : {};
      return '<article>' +
        '<span class="badge">' + escapeHtml(source.authority || "prototype") + '</span>' +
        '<h3>' + escapeHtml(source.label || id) + '</h3>' +
        '<p>' + escapeHtml(source.kind || "demonstration") + ' · ' +
        escapeHtml(source.cadence || "variable") + ' · ' +
        escapeHtml(source.freshness || "unknown freshness") + '</p>' +
        '</article>';
    }).join("");
  };

  const renderCalendar = () => {
    const root = qs("#calendar-list");
    if (!root) return;

    const records = currentActivities().filter((item) => calendarKind === "all" || item.type === calendarKind);
    if (!records.length) {
      root.innerHTML = '<div class="empty-state">No activities match this view.</div>';
      return;
    }

    root.innerHTML = records.map((item) => {
      const relationship = item.relationships || {};
      const relationParts = [];
      if (relationship.host) relationParts.push("host: " + relationship.host);
      if (relationship.steward) relationParts.push("steward: " + relationship.steward);
      const relation = relationParts.join(" · ");
      return '<article class="calendar-row">' +
        '<div class="activity-date">' + escapeHtml(formatDate(item.occurrence ? item.occurrence.date : null)) + '</div>' +
        '<div><h3>' + escapeHtml(item.title) + '</h3>' +
        '<p>' + escapeHtml(item.meta || "") + '</p>' +
        '<p>' + escapeHtml(relation) + ' · source: ' + escapeHtml(sourceLabel(item.sourceId)) + '</p></div>' +
        '<span class="badge">' + escapeHtml(item.type) + '</span>' +
        '</article>';
    }).join("");
  };

  const renderDrafts = () => {
    const root = qs("#draft-list");
    if (!root) return;
    const drafts = loadDrafts();

    if (!drafts.length) {
      root.innerHTML = '<div class="empty-state">No drafts in this browser session yet.</div>';
      return;
    }

    root.innerHTML = drafts.map((draft, index) => {
      const scripture = draft.scripture ? " · " + escapeHtml(draft.scripture) : "";
      return '<article class="draft-row">' +
        '<div class="activity-date">' + escapeHtml(draft.publishDate || "Undated") + '</div>' +
        '<div><h3>' + escapeHtml(draft.title) + '</h3>' +
        '<p>' + escapeHtml(draft.type) + ' · ' + escapeHtml(draft.church) + scripture + '</p>' +
        '<details><summary>Inspect proposed record</summary><pre>' +
        escapeHtml(JSON.stringify(draft.record, null, 2)) +
        '</pre></details></div>' +
        '<button class="quiet-button" type="button" data-remove-draft="' + index + '">Remove</button>' +
        '</article>';
    }).join("");

    qsa("[data-remove-draft]", root).forEach((button) => {
      button.addEventListener("click", () => {
        const next = loadDrafts();
        next.splice(Number(button.dataset.removeDraft), 1);
        saveDrafts(next);
        renderDrafts();
        renderMetrics();
      });
    });
  };

  const normalizeChurch = (note) => {
    if (/st\.?\s*paul/i.test(note)) return "stpauls";
    if (/portsmouth/i.test(note)) return "portsmouth";
    if (/calvary/i.test(note)) return "calvary";
    if (/cooperative|all three|all churches/i.test(note)) return "cooperative";
    return "";
  };

  const inferType = (note) => {
    if (/weekly\s+word/i.test(note)) return "Weekly Word";
    if (/weekly\s+musing/i.test(note)) return "Weekly Musings";
    if (/chimes/i.test(note)) return "Chimes";
    if (/bulletin|order of worship/i.test(note)) return "Bulletin";
    if (/formation|study guide|bible study/i.test(note)) return "Formation guide";
    if (/cancel|closed|notice|announcement/i.test(note)) return "Notice";
    if (/event|bazaar|meal|gathering|concert|meeting/i.test(note)) return "Event material";
    return "";
  };

  const inferScripture = (note) => {
    const books = [
      "Genesis","Exodus","Leviticus","Numbers","Deuteronomy","Joshua","Judges","Ruth",
      "1 Samuel","2 Samuel","1 Kings","2 Kings","1 Chronicles","2 Chronicles","Ezra","Nehemiah",
      "Esther","Job","Psalm","Psalms","Proverbs","Ecclesiastes","Song of Solomon","Isaiah",
      "Jeremiah","Lamentations","Ezekiel","Daniel","Hosea","Joel","Amos","Obadiah","Jonah",
      "Micah","Nahum","Habakkuk","Zephaniah","Haggai","Zechariah","Malachi","Matthew","Mark",
      "Luke","John","Acts","Romans","1 Corinthians","2 Corinthians","Galatians","Ephesians",
      "Philippians","Colossians","1 Thessalonians","2 Thessalonians","1 Timothy","2 Timothy",
      "Titus","Philemon","Hebrews","James","1 Peter","2 Peter","1 John","2 John","3 John",
      "Jude","Revelation"
    ].sort((a, b) => b.length - a.length);

    for (const book of books) {
      const lower = note.toLowerCase();
      const at = lower.indexOf(book.toLowerCase());
      if (at < 0) continue;
      const rest = note.slice(at + book.length).trim();
      const match = rest.match(/^(\d+):(\d+)(?:[–-](\d+))?/);
      if (match) return book + " " + match[0].replace("-", "–");
    }
    return "";
  };

  const inferDate = (note) => {
    const names = [
      ["january",0],["jan",0],["february",1],["feb",1],["march",2],["mar",2],
      ["april",3],["apr",3],["may",4],["june",5],["jun",5],["july",6],["jul",6],
      ["august",7],["aug",7],["september",8],["sept",8],["sep",8],["october",9],
      ["oct",9],["november",10],["nov",10],["december",11],["dec",11]
    ];
    const lower = note.toLowerCase();

    for (const pair of names) {
      const name = pair[0];
      const month = pair[1];
      const at = lower.indexOf(name + " ");
      if (at < 0) continue;
      const rest = note.slice(at + name.length + 1);
      const match = rest.match(/^(\d{1,2})(?:,?\s+(\d{4}))?/);
      if (!match) continue;
      const day = Number(match[1]);
      const year = Number(match[2] || activeDate().getFullYear());
      if (day < 1 || day > 31) return "";
      return year + "-" + String(month + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
    }
    return "";
  };

  const interpretNote = (note) => ({
    church: normalizeChurch(note),
    type: inferType(note),
    scripture: inferScripture(note),
    publishDate: inferDate(note),
    visibility: /public|website|site|publish/i.test(note) ? "public" : "needs decision"
  });

  const renderInterpretation = (result) => {
    const root = qs("#interpretation-result");
    if (!root) return;
    root.hidden = false;

    const chips = [
      result.church ? "Church: " + result.church : "Church: needs decision",
      result.type ? "Type: " + result.type : "Type: needs decision",
      result.publishDate ? "Date: " + result.publishDate : "Date: needs decision",
      result.scripture ? "Scripture: " + result.scripture : "Scripture: none detected",
      "Visibility: " + result.visibility
    ];

    root.innerHTML = '<h3>Suggested structure</h3><div class="interpretation-chips">' +
      chips.map((chip) => '<span class="badge">' + escapeHtml(chip) + '</span>').join("") +
      '</div><p class="panel-lede">Desk is proposing, not publishing. A staff member still owns the decision.</p>' +
      '<button class="quiet-button" id="use-interpretation" type="button">Use these fields</button>';

    const useButton = qs("#use-interpretation");
    if (useButton) {
      useButton.addEventListener("click", () => {
        const form = qs("#publish-form");
        if (!form) return;
        if (result.church) form.elements.church.value = result.church;
        if (result.type) form.elements.type.value = result.type;
        if (result.publishDate) form.elements.publishDate.value = result.publishDate;
        if (result.scripture) form.elements.scripture.value = result.scripture;
        if (!form.elements.title.value) form.elements.title.value = result.type || "New public resource";
        form.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const createResourceRecord = (data, fileName) => ({
    schema: "viryn.cooperative.resource.v1",
    identity: {
      title: data.get("title"),
      type: data.get("type")
    },
    relationships: {
      church: data.get("church"),
      visibility: "public"
    },
    formation: data.get("scripture") ? {
      scriptureReference: data.get("scripture")
    } : null,
    lifecycle: {
      publishOn: data.get("publishDate") || null,
      expiresOn: data.get("expiresOn") || null
    },
    content: {
      summary: data.get("summary") || null,
      fileName: fileName || null,
      fileState: fileName ? "selected-locally-not-uploaded" : "none"
    },
    workflow: {
      state: "draft",
      requiresHumanReview: true
    },
    audit: {
      prototypeRole: role(),
      preparedAt: new Date().toISOString()
    }
  });

  const setupPublish = () => {
    const quick = qs("#quick-intake");
    if (quick) {
      quick.addEventListener("submit", (event) => {
        event.preventDefault();
        const note = qs("#quick-note") ? qs("#quick-note").value.trim() : "";
        if (note) renderInterpretation(interpretNote(note));
      });
    }

    const form = qs("#publish-form");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const file = form.elements.file.files && form.elements.file.files[0] ? form.elements.file.files[0] : null;
        const record = createResourceRecord(data, file ? file.name : "");

        const drafts = loadDrafts();
        drafts.unshift({
          title: data.get("title"),
          type: data.get("type"),
          church: data.get("church"),
          scripture: data.get("scripture"),
          publishDate: data.get("publishDate"),
          record
        });
        saveDrafts(drafts.slice(0, 20));
        form.reset();
        renderDrafts();
        renderMetrics();
      });
    }
  };

  const setupNavigation = () => {
    qsa("[data-view-button]").forEach((button) => {
      button.addEventListener("click", () => showView(button.dataset.viewButton));
    });

    qsa("[data-jump]").forEach((button) => {
      button.addEventListener("click", () => showView(button.dataset.jump));
    });

    const roleSelect = qs("#role-preview");
    if (roleSelect) {
      roleSelect.addEventListener("change", () => {
        applyRolePreview();
        renderMetrics();
      });
    }

    const churchSelect = qs("#church-scope");
    if (churchSelect) {
      churchSelect.addEventListener("change", () => {
        const formChurch = qs("#publish-form [name='church']");
        if (formChurch && scope() !== "all") formChurch.value = scope();
        renderMetrics();
        renderUpcoming();
        renderSources();
        renderCalendar();
      });
    }

    qsa("#calendar-filters [data-kind]").forEach((button) => {
      button.addEventListener("click", () => {
        calendarKind = button.dataset.kind;
        qsa("#calendar-filters [data-kind]").forEach((item) => item.classList.toggle("is-active", item === button));
        renderCalendar();
      });
    });
  };

  const initialize = () => {
    setupNavigation();
    setupPublish();
    applyRolePreview();
    renderMetrics();
    renderUpcoming();
    renderSources();
    renderCalendar();
    renderDrafts();
  };

  document.addEventListener("DOMContentLoaded", initialize);
})();
