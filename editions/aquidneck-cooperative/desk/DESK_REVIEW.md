# Cooperative Desk v0.1 — Technical Review Brief

## Purpose

Desk is the proposed staff-facing stewardship surface for the Aquidneck Island Cooperative Ministry Edition.

The public site answers:

> What does a visitor need to know or do?

Desk answers:

> What does church staff need to update, review, approve, or understand so the public site stays trustworthy?

This prototype is intentionally packaged inside the existing static Edition so workflow can be tested before infrastructure is chosen.

## Critical prototype boundary

**This is not an authenticated application.**

GitHub Pages is suitable for this workflow demonstration because no real security claim is being made. The prototype must not be used to store or transmit:

- passwords or authentication secrets;
- donor identities or giving history;
- payment or bank information;
- pastoral-care records;
- children/youth private information;
- private staff records;
- credentials or API keys;
- confidential financial reports;
- real uploaded documents that are not already public.

The role selector is a UX simulation only. It is not authorization.

The file picker never uploads the selected file. Desk only records its local filename in a browser-session draft.

## Current data relationship

Desk reads the same public Activity Records already used by the Island Edition:

```text
PARISH_CONTENT
      ↓
Activity Records
      ↓
activity-engine.js
      ↓
┌───────────────┬─────────────────┐
│ Public site   │ Desk prototype  │
│ visitor view  │ steward view    │
└───────────────┴─────────────────┘
```

The architectural intention is that production Desk becomes the authoring surface for authoritative records rather than a second database beside the public site.

## Proposed production separation

```text
Browser
  ↓
Authenticated Desk application
  ↓
Server-side authorization / validation
  ↓
Private operational datastore
  ├── Activity Records
  ├── Resource Records
  ├── Formation Records
  ├── Publication workflow
  ├── Audit history
  └── safe aggregate reporting references
  ↓
Review + publish projection
  ↓
Public datastore / build / API
  ↓
Public cooperative site
```

A private record and a public projection should be different objects or clearly separated representations. The public site should never receive private fields and merely hide them with CSS or JavaScript.

## v0.1 workflows being tested

### Today

Staff can see:

- live/upcoming Activity Records;
- church scope;
- source provenance;
- records that still rely on unreviewed/prototype sources;
- browser-session drafts.

### Publish

Two intake styles are demonstrated:

1. **Plain-language intake** — staff writes something natural such as:
   > Calvary Weekly Word for Nov 29, Matthew 13:1–9, publish to the website.

   Desk proposes church, content type, date, Scripture relationship, and visibility.

2. **Structured publish** — staff explicitly chooses:
   - church;
   - content type;
   - title;
   - publish date;
   - expiry date;
   - related Scripture;
   - summary;
   - file.

Desk prepares `viryn.cooperative.resource.v1` as a draft requiring human review.

### Calendar

The calendar is a staff view over existing `viryn.cooperative.activity.v1` records, including recurrence, source, host, steward, and church relationships.

### Formation

The prototype reserves an authoring surface for a Formation Commons:

- common book orientation;
- passage reader;
- translation/licensing policy;
- congregation-specific teaching overlays;
- Weekly Word / sermon / study-guide relationships.

### Reports

Finance is intentionally represented as an integration boundary, not stored sample data.

The desired product behavior is:

> Reference the vault. Do not become the vault.

Only aggregate information needed for church operations should enter Desk unless a future security review explicitly expands scope.

## Suggested authorization model to challenge

Potential roles are currently represented as UX previews:

- **Cooperative admin** — cooperative-wide publishing, configuration, shared activities;
- **Church editor** — one or more authorized congregation scopes;
- **Clergy reviewer** — worship/formation review and approval;
- **Finance viewer** — aggregate reporting only.

Questions for review:

1. Should authorization be role-based, attribute-based, or a hybrid?
2. Can one person hold multiple church scopes and roles?
3. Which actions require a second approver?
4. Should public publishing require explicit approval separate from editing?
5. What should happen when a staff member leaves?
6. What is the recovery path if the only cooperative admin loses access?

## Authentication questions

A production design needs decisions about:

- identity provider vs application-owned accounts;
- passwordless / passkey / password support;
- MFA requirements;
- session lifetime;
- session revocation;
- account recovery;
- brute-force and credential-stuffing protection;
- staff-offboarding process;
- emergency access;
- auditability of identity changes.

No recommendation should be treated as settled until the hosting model is known.

## File-upload questions

Production upload flow should consider:

- permitted content types;
- file-size limits;
- malware scanning;
- filename normalization;
- metadata stripping where appropriate;
- private object storage;
- signed or controlled download URLs;
- document replacement/version history;
- retention and archival rules;
- accidental upload of sensitive information;
- public publication as a separate action from successful upload.

## Publication boundary

A proposed content state machine:

```text
draft
  ↓
review
  ↓
approved
  ↓
scheduled / published
  ↓
expired
  ↓
archived
```

Possible exceptional states:

```text
changed
cancelled
withdrawn
rejected
restored
```

Every transition should eventually carry:

- actor;
- timestamp;
- prior state;
- resulting state;
- reason or note where appropriate;
- source provenance.

## Threat-model prompts

Please try to break the architecture around:

- IDOR / cross-church access;
- privilege escalation;
- forged publish requests;
- stale sessions;
- CSRF;
- XSS through staff-authored public content;
- malicious file uploads;
- public/private record leakage;
- broken object-level authorization;
- unsafe password recovery;
- insufficient audit history;
- backup exposure;
- secrets in browser bundles;
- insecure direct storage URLs;
- dependency / supply-chain compromise;
- accidental publication of finance or pastoral information;
- insufficient separation between public content and sensitive church operations.

## Migration principle

The public prototype should not dictate the production stack.

The desired migration seam is:

```text
current static data contracts
        ↓
replace storage / auth / transport
        ↓
preserve Activity + Resource + Formation concepts
        ↓
public interface does not need to be rebuilt
```

If the eventual server implementation requires rewriting the data contracts entirely, that is useful feedback now.

## Review request

The most useful critique is not “which hosting provider should we use?”

Please challenge:

1. **Where does trust begin and end?**
2. **Which data should never enter this system?**
3. **Where are authorization checks required?**
4. **What can be safely cached or statically projected?**
5. **What attack paths become possible once uploads and publishing are real?**
6. **What would make incident response and recovery painful?**
7. **Which current abstractions will fail once there are real users and multiple churches?**
