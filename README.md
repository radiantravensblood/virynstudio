# Viryn Studio

Viryn Studio is the commercial design and implementation wing of Viryn Systems.
The repository contains the Studio flagship and four reusable framework mini-sites:

- **Signal** for musicians, bands, performers, and creative professionals.
- **Gathering** for nonprofits, ministries, mutual-aid groups, and community organizations.
- **Ledger** for consultants, educators, trainers, and curriculum-led practices.
- **Table** for restaurants, cafés, food trucks, caterers, and private chefs.

## Public structure

```text
/
├── index.html
├── assets/
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
- The sample Ledger PDFs are educational interface props, not clinical guidance or Rory's curriculum.
- Formal service agreements and legal language should be reviewed by qualified counsel before commercial launch.

## Signal demonstration

The Signal mini-site now includes a real-music proof of concept with five full-length tracks supplied by Ravensblood, original concept artwork, waveform graphics, an invitation-gate flow, a listening room, permitted downloads, EPK presentation, and archive-mode positioning.

The included access phrase is intentionally visible for portfolio review. Because GitHub Pages is a public static host, this gate is not secure authentication and must not be used to protect confidential or commercially unreleased masters in production.



## Studio Edition 01 — Gathering Commons

`editions/gathering-commons/` contains **Active Brain Community**, a static concept demonstrating a caregiver resource commons with self-orientation, resource filtering, private-by-design check-in, consent-based story intake, support-circle registration concepts, and three visual atmosphere modes. All health/community content is fictional demonstration copy and no data is transmitted or stored.


## Table hospitality framework

`frameworks/table/` contains three switchable configurations—Hearth, Route, and Feast—plus a filterable menu demonstration, a seven-stage service workflow, a no-storage intake prototype, and a synthetic operating dashboard. `FRAMEWORK_NOTES.md` documents the shared record model, suggested integration order, and the private Lawrence Hometown Hero founding-cohort concept.
