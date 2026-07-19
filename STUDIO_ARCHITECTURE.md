# Viryn Studio Architecture

## Operating model

**Studio earns. Labs invents.**

Viryn Studio is the commercial web-design wing of Viryn Systems. Viryn Labs holds longer-horizon product work such as Care-Tech and WardenWear.

## One house, four furnished rooms

The framework library stays in one repository while the products share infrastructure and remain portfolio demonstrations.

```text
index.html                       # Studio commercial threshold
assets/shared/config.js          # package, framework, contact, and policy data
assets/shared/studio.css         # shared design tokens and common components
assets/shared/studio.js          # theme, navigation, contact, and rendering logic
frameworks/signal/               # creative-industry mini-site
frameworks/gathering/            # community-organization mini-site
frameworks/ledger/               # expertise and curriculum mini-site
frameworks/table/                # hospitality and service-flow mini-site
```

Each framework can later be cloned into a client repository or template repository when it gains its own domain, backend, collaborators, release schedule, private content, or substantially divergent code.

## URL migration

Canonical URLs:

```text
/frameworks/signal/
/frameworks/gathering/
/frameworks/ledger/
/frameworks/table/
```

Compatibility redirects:

```text
/frameworks/signal.html
/frameworks/gathering.html
/frameworks/ledger.html
/frameworks/table.html
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

## Signal media architecture

Signal owns its artist-specific interaction layer in `frameworks/signal/signal.js` and stores demonstration media beneath `frameworks/signal/assets/`. The public static access phrase is an interaction prototype only. A production private listening room must move audio to protected object storage or a media platform and authorize requests server-side with revocable or expiring access.

Audio controls remain native HTML5 controls for keyboard and assistive-technology reliability. The five-track queue, track switching, session-only room state, downloads, and listening-note preparation are progressive enhancements.


## Studio Editions

Studio Editions live under `editions/`. They are focused demonstrations that extend a framework around a real-world workflow or community need. Unlike the core framework pages, an Edition may include domain-specific interaction patterns, editorial policies, and a documented production spine.

Current edition:

- `editions/gathering-commons/` — Active Brain Community


## Table hospitality architecture

Table demonstrates three front-of-house configurations over one service spine:

- Hearth for fixed-location restaurants and cafés
- Route for trucks, pop-ups, and rotating vendors
- Feast for catering and event service

The static demonstration models inquiry, human review, quote, deposit, calendar, production, and fulfillment states. In production, those states must be backed by a reviewed source of truth such as a spreadsheet, CRM, database, or payment platform. Google Calendar and hosted payment links may be integrated after human approval; GitHub Pages must never contain private credentials or sensitive customer records.
