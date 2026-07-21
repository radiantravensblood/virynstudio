# Viryn Studio Architecture

## Operating model

**Studio earns. Labs invents.**

Viryn Studio is the commercial web-design wing of Viryn Systems. Viryn Labs holds longer-horizon product work such as Care-Tech and WardenWear.

## Composition model

Viryn Studio separates four layers that were previously easy to mistake for one another:

### 1. Framework — the journey

A framework defines the primary visitor, the sequence they need, the trust conditions around that journey, and the action the site must make easier. Gathering, Ledger, Signal, and Table are not bundles of mutually exclusive features; they are organizing spines.

### 2. Capability — the machinery

Capabilities are reusable functional modules that may travel across framework spines when the client’s real work requires them:

- audio and podcast presentation;
- video and curriculum delivery;
- events and calendaring;
- resources and downloads;
- scheduling and intake;
- commerce, inventory, and hosted payment routes;
- updates, newsletters, and release scheduling;
- gated or permissioned access.

A church may use Gathering as its primary journey while drawing on Signal’s audio presentation, Ledger’s learning modules, and Table-like listing or service logic. The client should describe the work they do; the Studio is responsible for composing the right capabilities without forcing them to request several frameworks by name.

### 3. Edition — the studied composition

An Edition applies one primary framework spine, selected capabilities, and domain-specific identity to a focused real-world need. It should teach the Studio a reusable muscle rather than function as a decorative portfolio variant.

### 4. Client Build — the operating reality

A client build replaces synthetic demonstration content with verified content, integrations, permissions, service boundaries, data handling, and an agreed maintenance path. The implementation follows the client’s reality rather than requiring the client to imitate the demonstration.

> The framework holds the journey. Capabilities travel. Editions study a composition. Client builds make it real.

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



## Atelier Pass

The Atelier Pass follows architecture, language, accessibility, and client review. Its final question is not whether the site looks expensive or fashionable, but whether it feels cared for.

Public Studio art follows five constraints:

1. **One emotional center.** Every illustration knows what the visitor should feel first.
2. **One symbolic language.** Motifs repeat with purpose instead of accumulating as decoration.
3. **Light is narrative.** Illumination directs attention and emotional sequence.
4. **Negative space is trusted.** Art does not compensate for unresolved structure.
5. **Private intimacy stays private.** The Viryn eye may shape public work without turning family or devotional imagery into commercial collateral.

The interface explains. The painting invites. Neither is asked to do the other’s job.

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


## Human Hands visual QA (v0.6.2)

Hero compositions use an explicit object hierarchy: ground, supporting geometry, primary artifact, organic accent, micro-detail. Decorative elements may overlap one another, but they may not enter protected copy rectangles, obscure operational information, or create accidental tangent edges. Responsive layouts are art-directed at each breakpoint rather than treated as compressed desktop compositions.


## v0.6.7 visual joinery

The Atelier layer uses three visual scales:

1. **Threshold painting** — one emotional center, delivered through art-directed responsive sources.
2. **Hand-worked spot illustration** — functional modules, services, and small invitations rendered through the shared Studio symbol family.
3. **Technical diagram** — used only when structure itself must be understood.

Artwork, captions, and information cards must remain separate structural siblings. Absolute positioning may decorate an established safe area, but it may not carry essential copy or interaction.
