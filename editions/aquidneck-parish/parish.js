(() => {
  const content = window.PARISH_CONTENT;
  const qs = (selector, root = document) => root.querySelector(selector);
  const qsa = (selector, root = document) => [...root.querySelectorAll(selector)];

  const renderServices = () => {
    const grid = qs('#service-grid');
    grid.innerHTML = content.churches.map((church, index) => `
      <article class="service-card church-${church.id}">
        <div class="service-topline"><span>0${index + 1}</span><span>${church.city}</span></div>
        <h3>${church.short}</h3>
        <p class="service-time">${church.worship}</p>
        <p>${church.note}</p>
        <div class="service-actions">
          <a href="#church-${church.id}">Plan a visit</a>
          <a href="${church.url}" target="_blank" rel="noreferrer">Current site ↗</a>
        </div>
      </article>
    `).join('');
  };

  const renderChurches = () => {
    const grid = qs('#church-grid');
    grid.innerHTML = content.churches.map((church, index) => `
      <article id="church-${church.id}" class="church-card church-${church.id}">
        <div class="church-index">0${index + 1} · ${church.city}</div>
        <h3>${church.name}</h3>
        <p>${church.character}</p>
        <dl>
          <div><dt>Worship</dt><dd>${church.worship}</dd></div>
          <div><dt>Find us</dt><dd>${church.address}</dd></div>
        </dl>
        <a class="text-link" href="${church.url}" target="_blank" rel="noreferrer">Visit current church site ↗</a>
      </article>
    `).join('');
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

    list.innerHTML = events.length ? events.map(event => `
      <article class="event-row">
        <div class="event-badge">${event.badge}</div>
        <div class="event-body">
          <h3>${event.title}</h3>
          <p class="event-meta">${event.meta}</p>
          <p>${event.description}</p>
        </div>
        <button class="event-action" type="button" aria-label="Open prototype detail for ${event.title}">→</button>
      </article>
    `).join('') : `
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
    const update = () => header.dataset.elevated = String(window.scrollY > 12);
    update();
    window.addEventListener('scroll', update, { passive: true });
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
