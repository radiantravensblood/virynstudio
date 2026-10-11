(() => {
  const content = window.PARISH_CONTENT;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  const activeDate = () => {
    const rhythmDate = window.COOPERATIVE_RHYTHM?.today;
    if (rhythmDate && /^\d{4}-\d{2}-\d{2}$/.test(rhythmDate)) {
      return new Date(`${rhythmDate}T12:00:00`);
    }
    return new Date();
  };

  const resolveWorship = (church) => {
    if (!Array.isArray(church.worshipSchedule) || church.worshipSchedule.length === 0) {
      return { time: church.worship, note: church.note };
    }

    const month = activeDate().getMonth() + 1;
    const rule = church.worshipSchedule.find((item) => item.months?.includes(month));
    return rule
      ? { time: rule.time, note: rule.note }
      : { time: church.worship, note: church.note };
  };

  const renderServices = () => {
    const grid = qs('#service-grid');
    grid.innerHTML = content.churches.map((church, index) => {
      const worship = resolveWorship(church);
      return `
      <article class="service-card church-${church.id}">
        <div class="service-topline"><span>0${index + 1}</span><span>${church.city}</span></div>
        <h3>${church.short}</h3>
        <p class="service-time">${worship.time}</p>
        <p>${worship.note}</p>
        <div class="service-actions">
          <a href="#church-${church.id}">Plan a visit</a>
          <a href="${church.url}" target="_blank" rel="noreferrer">Current site ↗</a>
        </div>
      </article>
    `;
    }).join('');
  };

  const renderChurches = () => {
    const grid = qs('#church-grid');
    grid.innerHTML = content.churches.map((church, index) => {
      const worship = resolveWorship(church);
      return `
      <article id="church-${church.id}" class="church-card church-${church.id}">
        <div class="church-index">0${index + 1} · ${church.city}</div>
        <h3>${church.name}</h3>
        <p>${church.character}</p>
        <dl>
          <div><dt>Worship</dt><dd>${worship.time}</dd></div>
          <div><dt>Find us</dt><dd>${church.address}</dd></div>
        </dl>
        <a class="text-link" href="${church.url}" target="_blank" rel="noreferrer">Visit current church site ↗</a>
      </article>
    `;
    }).join('');
  };

  let currentScope = 'all';
  let currentType = 'all';

  const renderEvents = () => {
    const list = qs('#event-list');
    const events = content.events.filter(event => {
      const scopeMatch = currentScope === 'all' || event.scope.includes(currentScope);
      const typeMatch = currentType === 'all' || event.type === currentType;
      return scopeMatch && typeMatch;
    });

    list.innerHTML = events.length ? events.map(event => {
      const override = event.override || null;
      const effectiveStatus = override?.status || event.status || "scheduled";
      const statusLabel = effectiveStatus === "cancelled" ? "Cancelled" : effectiveStatus === "changed" ? "Updated" : "";
      const eventChurch = event.churchId ? content.churches.find((church) => church.id === event.churchId) : null;
      const worship = eventChurch && event.type === "worship" ? resolveWorship(eventChurch) : null;
      const dynamicMeta = worship ? `Sunday · ${worship.time.replace(/ Sunday$/, "")} · ${eventChurch.city}` : event.meta;
      const dynamicDescription = worship?.note || event.description;
      const meta = override?.meta || dynamicMeta;
      const description = override?.note || dynamicDescription;
      return `
      <article class="event-row" data-event-status="${effectiveStatus}" data-source="${event.sourceId || "prototype"}">
        <div class="event-badge">${statusLabel ? `${statusLabel} · ` : ""}${event.badge}</div>
        <div class="event-body">
          <h3>${event.title}</h3>
          <p class="event-meta">${meta}</p>
          <p>${description}</p>
        </div>
        <button class="event-action" type="button" aria-label="Open prototype detail for ${event.title}">→</button>
      </article>
    `;
    }).join('') : `
      <div class="empty-state">
        <strong>No events match this view.</strong>
        <span>A production calendar can preserve the filter while offering the nearest relevant alternative.</span>
      </div>
    `;
  };

  const activateFilter = (selector, attr, callback) => {
    qsa(selector).forEach(button => {
      button.addEventListener('click', () => {
        qsa(selector).forEach(item => item.classList.remove('active'));
        button.classList.add('active');
        callback(button.getAttribute(attr));
        renderEvents();
      });
    });
  };

  const setupPathChooser = () => {
    const result = qs('#path-result');
    qsa('.path-card').forEach(card => {
      card.addEventListener('click', () => {
        qsa('.path-card').forEach(item => item.classList.remove('selected'));
        card.classList.add('selected');
        const path = content.paths[card.dataset.path];
        result.innerHTML = `
          <span class="result-label">Suggested first step</span>
          <h3>${path.title}</h3>
          <p>${path.copy}</p>
          <a class="button button-primary button-small" href="${path.href}">${path.action}</a>
        `;
      });
    });
  };

  const setupNav = () => {
    const toggle = qs('.nav-toggle');
    const nav = qs('#primary-nav');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open', !expanded);
    });
    qsa('a', nav).forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    }));
  };

  const setupHeader = () => {
    const header = qs('.site-header');
    const navLinks = qsa('#primary-nav a[href^="#"]');

    const updateElevation = () => {
      header.dataset.elevated = String(window.scrollY > 12);
      header.dataset.compact = String(window.scrollY > 120);
    };

    const sections = navLinks
      .map((link) => ({ link, section: qs(link.getAttribute('href')) }))
      .filter((item) => item.section);

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        navLinks.forEach((link) => link.classList.remove('is-active'));
        const match = sections.find((item) => item.section === visible.target);
        match?.link.classList.add('is-active');
      }, {
        rootMargin: '-30% 0px -58% 0px',
        threshold: [0, .15, .35]
      });
      sections.forEach((item) => observer.observe(item.section));
    }

    updateElevation();
    window.addEventListener('scroll', updateElevation, { passive: true });
  };

  renderServices();
  renderChurches();
  renderEvents();
  setupPathChooser();
  setupNav();
  setupHeader();

  activateFilter('[data-filter-scope]', 'data-filter-scope', value => currentScope = value);
  activateFilter('[data-filter-type]', 'data-filter-type', value => currentType = value);
})();
