# Viryn Studio Architecture

## Operating model

**Studio earns. Labs invents.**

Viryn Studio is the commercial web-design wing of Viryn Systems. Viryn Labs holds longer-horizon product work such as Care-Tech and WardenWear.

## One house, three furnished rooms

The framework library stays in one repository while the products share infrastructure and remain portfolio demonstrations.

```text
index.html                       # Studio commercial threshold
assets/shared/config.js          # package, framework, contact, and policy data
assets/shared/studio.css         # shared design tokens and common components
assets/shared/studio.js          # theme, navigation, contact, and rendering logic
frameworks/signal/               # creative-industry mini-site
frameworks/gathering/            # community-organization mini-site
frameworks/ledger/               # expertise and curriculum mini-site
```

Each framework can later be cloned into a client repository or template repository when it gains its own domain, backend, collaborators, release schedule, private content, or substantially divergent code.

## URL migration

Canonical URLs:

```text
/frameworks/signal/
/frameworks/gathering/
/frameworks/ledger/
```

Compatibility redirects:

```text
/frameworks/signal.html
/frameworks/gathering.html
/frameworks/ledger.html
```

Nested pages use explicit relative paths. No `<base>` element is used.

## Shared versus local responsibility

Shared assets own:

- theme persistence;
- mobile navigation behavior;
- contact routing;
- package and framework data;
- reusable typography and accessibility primitives.

Framework-local assets own:

- visual atmosphere;
- information architecture;
- page-specific components;
- framework-only interactions;
- approved media and downloads.

## Ledger demonstration

Ledger now demonstrates:

- an expertise-led hero;
- audience segmentation;
- an accessible HTML5 video module with captions and transcript;
- downloadable sample curriculum;
- resource filtering;
- bounded service offers;
- method, scope, and referral language;
- a learning pathway;
- credentials placeholders;
- booking and FAQ thresholds.

The practice name, founder, training, credentials, curriculum, and outcomes are synthetic until a real client approves replacement content.

## Static-site limits

GitHub Pages does not provide private storage, authentication, server-side form handling, protected curriculum, secure payments, CRM logic, or autonomous support operations. Those features require separately reviewed services and backend architecture.
