# Viryn Studio

## v0.6.6 — Atelier Pass II: Evidence of Hands

This release raises the surrounding craft to meet the Atelier paintings. High-density artwork, consistent action controls, safe overlay lanes, working-paper details, and restrained symbolic marks make the public house feel inhabited without sacrificing comprehension. Public Studio imagery faces outward; private devotional imagery remains outside the commercial threshold unless all affected people consent.


Viryn Studio is the commercial design and implementation wing of Viryn Systems.
The repository contains the Studio flagship and four reusable framework mini-sites:

- **Signal** for musicians, bands, performers, and creative professionals.
- **Gathering** for nonprofits, ministries, mutual-aid groups, and community organizations.
- **Ledger** for consultants, educators, trainers, and curriculum-led practices.
- **Table** for restaurants, cafés, food trucks, caterers, and private chefs.

## v0.6.5 — Atelier Pass

This release restores painterly authorship to the public house without using private relational imagery as the Studio threshold. The flagship becomes an atelier for a caring internet; Gathering, Ledger, Table, and Gathering Commons receive human-centered paintings; and the language pass clarifies Editions, Ledger, process roles, and revision limits.

The service architecture remains a four-layer model:

1. **Framework** — the primary visitor journey and trust conditions.
2. **Capability** — reusable machinery such as audio, video, events, scheduling, commerce, resources, updates, or gated access.
3. **Edition** — a studied domain composition built from one framework spine and selected capabilities.
4. **Client Build** — the tailored implementation, content, integrations, and operating reality.

## Public structure

```text
/
├── index.html
├── assets/
│   ├── atelier/
│   │   ├── atelier-hero.jpg
│   │   ├── gathering.jpg
│   │   ├── ledger.jpg
│   │   ├── signal.jpg
│   │   ├── table.jpg
│   │   └── commons.jpg
│   └── shared/
│       ├── config.js
│       ├── studio.css
│       └── studio.js
└── frameworks/
    ├── signal/
    ├── gathering/
    ├── ledger/
    └── table/
```

Legacy URLs such as `frameworks/ledger.html` remain as redirect shims so previously shared links continue to work.

## Editing the shared source of truth

Change packages, framework paths, care plans, and contact routing in:

```text
assets/shared/config.js
```

The files directly inside `assets/` are compatibility mirrors retained during the migration. New pages should use `assets/shared/`.

Before public sales outreach, replace:

```js
email: "siegelumiere@gmail.com"
```

with an inbox that is actively monitored. Optional Google Form and scheduling URLs also live in the contact object.

## Framework ownership

Each framework owns its visual atmosphere and page-specific interactions:

```text
frameworks/ledger/
├── index.html
├── ledger.css
├── ledger.js
├── assets/
└── resources/
```

Large video libraries, authenticated downloads, payments, private client data, and real customer-service automation require infrastructure beyond GitHub Pages.

## GitHub Pages upload without Terminal

1. Download and extract the release ZIP.
2. Open the extracted folder.
3. Select everything **inside** it.
4. In GitHub, choose **Add file → Upload files**.
5. Drag the selected files and folders into the repository root.
6. Confirm that `index.html`, `assets/`, and `frameworks/` appear at the root.
7. Commit the changes.
8. In **Settings → Pages**, publish from the `main` branch and repository root.

## Integrity notes

- Portfolio examples are clearly labeled synthetic concept demonstrations.
- No client names, testimonials, credentials, outcomes, music, or curriculum should be published without permission and verification.
- The sample Ledger PDFs are educational interface props, not clinical guidance or material from a real practitioner’s curriculum.
- Formal service agreements and legal language should be reviewed by qualified counsel before commercial launch.

## Signal demonstration

The Signal mini-site now includes a real-music proof of concept with five full-length tracks supplied by Ravensblood, original concept artwork, waveform graphics, an invitation-gate flow, a listening room, permitted downloads, EPK presentation, and archive-mode positioning.

The included access phrase is intentionally visible for portfolio review. Because GitHub Pages is a public static host, this gate is not secure authentication and must not be used to protect confidential or commercially unreleased masters in production.



## Studio Edition 01 — Gathering Commons

`editions/gathering-commons/` contains **Active Brain Community**, a static concept demonstrating a caregiver resource commons with self-orientation, resource filtering, private-by-design check-in, consent-based story intake, support-circle registration concepts, and three visual atmosphere modes. All health/community content is fictional demonstration copy and no data is transmitted or stored.


## Table hospitality framework

`frameworks/table/` contains three switchable configurations—Hearth, Route, and Feast—plus a filterable menu demonstration, a seven-stage service workflow, a no-storage intake prototype, and a synthetic operating dashboard. `FRAMEWORK_NOTES.md` documents the shared record model, suggested integration order, and the private Lawrence Hometown Hero founding-cohort concept.


## v0.6.5 release notes

- The flagship is intentionally Chocolate-only; local framework themes remain available where atmosphere demonstrates a real framework capability.
- Accessibility has a baseline in every package. Deeper review and remediation scope scale with the engagement, but accessibility itself is not an upgrade.
- Portfolio demonstrations remain synthetic unless a named collaborator or client has explicitly approved public use.
- Public Atelier artwork is purpose-built for the Studio; private relational imagery is not used as commercial brand collateral.
- The Signature System includes three structured revision cycles, with stakeholder review windows defined in the proposal.
- v0.6.5 is a static front-end release. Production forms, private storage, payments, authentication, and protected media still require reviewed infrastructure.
