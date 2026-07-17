# Viryn Studio

**Viryn Studio. Let’s Get Familiar.**

Viryn Studio is the commercial web-design and implementation wing of Viryn Systems. This repository contains the public flagship site and three reusable framework demonstrations:

- **Signal** — musicians, bands, performers, and creative professionals
- **Gathering** — nonprofits, ministries, mutual-aid groups, and community organizations
- **Ledger** — consultants, educators, coaches, and professional services

The source is intentionally plain HTML, CSS, and JavaScript so it can be reviewed, edited, and deployed through GitHub Pages without a build system.

## Repository structure

```text
virynstudio/
├── index.html
├── assets/
│   ├── config.js
│   ├── studio.css
│   └── studio.js
├── frameworks/
│   ├── signal.html
│   ├── gathering.html
│   └── ledger.html
├── README.md
├── STUDIO_ARCHITECTURE.md
├── CHANGELOG.md
├── TEST_CHECKLIST.md
└── .nojekyll
```

## First launch edits

Open `assets/config.js` and update:

1. `contact.email`
2. `contact.schedulingUrl`, when available
3. `contact.googleFormUrl`, when available
4. pricing and package details
5. the founding-client offer

Do not place passwords, private client information, API keys, or secrets in `config.js`. Everything in a public GitHub Pages repository is publicly readable.

## Local preview

The pages can be opened directly in a modern browser. For the most accurate relative-link behavior, use any simple static server when one is available. No package installation is required.

## GitHub Pages setup without Terminal

1. Open the `radiantravensblood/virynstudio` repository on GitHub.
2. Replace each blank file with the matching file from the release ZIP.
3. Keep the `assets` and `frameworks` folder names exactly as written.
4. Open **Settings** → **Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder.
7. Save.
8. Wait for GitHub to publish the site.

The default address should be:

```text
https://radiantravensblood.github.io/virynstudio/
```

Relative links are designed to work from that project address and from a future custom domain.

## Updating files through GitHub’s website

For each existing blank file:

1. Open the file.
2. Select the pencil icon to edit.
3. Paste the full replacement contents.
4. Select **Commit changes**.
5. Use a clear message, such as `Build Viryn Studio flagship`.

For a faster batch upload:

1. Select **Add file** → **Upload files** from the repository root.
2. Drag the contents of the release folder into the upload area.
3. Confirm that the folder structure is preserved.
4. Commit the upload.

GitHub may require replacing existing blank files individually if a browser upload reports filename conflicts.

## Commercial launch checklist

Before accepting payment:

- replace the placeholder inbox with a monitored address;
- use a written service agreement;
- confirm deposits and cancellation terms;
- define revision limits and change-order handling;
- confirm permission for all client-supplied media;
- verify accessibility and mobile behavior;
- test every inquiry link;
- ensure concept work is labeled honestly;
- have contract language reviewed by qualified counsel.

This repository and its documentation are not legal advice.

## AI use

Viryn Studio is human-led and AI-accelerated. AI may support research, drafting, code iteration, and quality checks. A human approves scope, pricing, commitments, client communication, review, and final delivery.

Core service-agent boundary:

> The agent receives, organizes, and routes. A human commits the company.
