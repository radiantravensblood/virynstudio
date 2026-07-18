# Viryn Studio

Viryn Studio is the commercial design and implementation wing of Viryn Systems.
The repository contains the Studio flagship and three reusable framework mini-sites:

- **Signal** for musicians, bands, performers, and creative professionals.
- **Gathering** for nonprofits, ministries, mutual-aid groups, and community organizations.
- **Ledger** for consultants, educators, trainers, and curriculum-led practices.

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
    └── ledger/
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
email: "hello@virynsystems.online"
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
