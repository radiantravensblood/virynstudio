# Viryn Studio Architecture

## Operating structure

Viryn Systems has two public operating wings:

- **Viryn Studio** — client services, implementation, recurring care plans, portfolio growth, and near-term revenue.
- **Viryn Labs** — longer-horizon product development, including Care-Tech, WardenWear, and consent-directed systems.

The commercial principle is:

> Studio earns. Labs invents.

## Recommended URL structure

For the current release, keep Viryn Studio in its own repository and publish it through the repository’s GitHub Pages project URL.

Recommended near-term structure:

```text
radiantravensblood.github.io/virynstudio/
```

Recommended future custom-domain structure:

```text
virynsystems.online/              Viryn Systems doorway
virynsystems.online/studio/       Viryn Studio
virynsystems.online/labs/         Labs overview
virynsystems.online/care-tech/    Care-Tech demonstration
```

Do not overwrite the current Care-Tech deployment until its files are backed up and the migration is planned deliberately.

## Technical model

The site uses:

- semantic HTML;
- one shared stylesheet;
- one central configuration file;
- one shared behavior script;
- GitHub Pages-compatible relative paths;
- no build tooling;
- no live backend;
- no API keys;
- no client data collection.

## Central source of truth

`assets/config.js` stores:

- brand labels;
- contact routes;
- framework metadata;
- package pricing and inclusions;
- care plans;
- inquiry categories;
- public business expectations;
- future service-agent boundaries.

This file is public. It must never contain secrets.

## Rendering model

The flagship `index.html` contains the semantic page structure. `assets/studio.js` renders repeated commercial data from `config.js`, including:

- framework cards;
- pricing cards;
- care plans;
- the founding-client offer;
- inquiry categories.

The framework pages remain mostly static because each vertical needs a distinct information hierarchy and emotional rhythm.

## Theme system

`assets/studio.css` defines three themes through CSS custom properties:

- Day
- Night
- Chocolate

`assets/studio.js` cycles the theme and stores the preference in browser-local storage. No user identity or analytics data is stored.

## Accessibility decisions

The current release includes:

- skip links;
- semantic landmarks;
- native links, buttons, and disclosure elements;
- visible focus states;
- responsive navigation;
- reduced-motion support;
- color tokens designed for theme-level contrast review;
- text alternatives for decorative or conceptual regions.

A formal accessibility audit has not yet been performed.

## Framework strategy

The framework library aims for roughly:

- 80% reusable engineering and production structure;
- 20% client-specific identity, copy, content, hierarchy, imagery, and integrations.

The client pays for judgment, transformation, reliability, and the finished result—not for the number of times a shared component has been reused internally.

## Future customer-service agent

A future agent may:

- answer documented package questions;
- collect project requirements;
- explain standard timelines;
- schedule conversations;
- summarize support requests;
- draft replies for review.

It may not:

- negotiate custom pricing;
- sign agreements;
- promise undocumented deadlines;
- issue refunds;
- handle serious disputes alone;
- claim to be human;
- invent services or commitments.

The governing rule remains:

> The agent receives, organizes, and routes. A human commits the company.

## Deferred work

Not included in this static release:

- a live inquiry backend;
- CRM integration;
- online payments;
- authentication;
- client portals;
- analytics beyond future configuration placeholders;
- a live autonomous customer-service agent;
- production legal documents;
- a custom-domain migration.
