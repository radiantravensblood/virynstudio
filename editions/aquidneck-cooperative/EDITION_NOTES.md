# Studio Edition 02 — Cooperative Ministry

## Demonstration identity

**Aquidneck Island Cooperative Ministry** is a proof-of-concept composition for a real three-congregation United Methodist cooperative ministry serving Portsmouth, Middletown, and Newport, Rhode Island.

This Edition does not claim to be an official publication of the cooperative ministry. Publicly visible church information is used to study the interface; governance, ownership, clergy voice, calendar authority, and ministry relationships require cooperative ministry verification before production use.

## Framework composition

This Cooperative Ministry Edition is intentionally compositional rather than a fifth core framework:

- **Gathering** provides worship, events, service, community, and participation journeys.
- **Ledger** provides formation, conversations, sermons, transcripts, curricula, and downloadable resources.
- **Cooperative Ministry** adds multi-congregation scope, shared-ministry relationships, host/steward distinctions, and a unified orientation layer.

The core principle is **unity without erasure**: shared systems reduce friction without flattening the identity of Calvary UMC, Portsmouth UMC, or St. Paul’s UMC.

## What this edition tests

- One cooperative layer spanning three distinct congregations
- Sunday worship comparison without ranking congregations
- Need-first orientation through “Start where you are”
- Filterable cooperative-wide events by congregation and ministry type
- Shared ministries whose steward, host location, and participating congregations differ
- “Faith in Conversation” as a Ledger-derived formation pattern
- Congregation pages that remain autonomous inside a cooperative system
- Explicit prototype and verification boundaries

## Content boundary

The demonstration contains a mixture of publicly available church information and clearly marked editorial prototype content. Worship times, recurring ministries, addresses, and operational details must be reconfirmed before any client launch.

No prototype conversation title should be interpreted as a statement made or endorsed by cooperative ministry clergy.

## Suggested production spine

1. **Content source of truth:** small CMS or reviewed structured data store
2. **Calendar:** one event model with cooperative/congregation scope, host, steward, recurrence, accessibility, registration, and contact fields
3. **Formation library:** video/audio, transcript, reflection prompts, related resources, and next gathering
4. **Church profiles:** verified congregation identity, worship details, accessibility, children/youth information, contact routes, and giving boundaries
5. **Shared ministries:** distinct fields for ministry steward, physical host, participating congregations, volunteer needs, and cooperative visibility
6. **Forms and pastoral care:** separately reviewed privacy, retention, routing, and emergency boundaries before collecting personal information

## Production handoff questions

Rory and Laurie’s cooperative ministry knowledge should resolve the questions the public websites cannot:

- Which activities are truly cooperative-wide versus merely cross-congregational?
- Who owns calendar truth and who may publish changes?
- Which ministries have a host congregation, a stewarding congregation, or both?
- How should giving routes remain distinct?
- Which clergy/staff identities are cooperative roles versus congregation roles?
- Which content can be centralized and which must remain congregation-controlled?


## Rhythm Engine prototype

The October 2026–December 2027 prototype includes a local, static worship-rhythm dataset derived from the supplied Discipleship Ministries worship-planning calendars. The browser resolves:

- civil season for restrained atmosphere shifts;
- current/upcoming worship observance;
- liturgical color as a UI accent;
- lectionary readings;
- the next published threshold;
- Saturday-evening/Sunday daytime “Sunday mode.”

The rhythm data is not an autonomous doctrinal authority. A production build should retain source provenance, permit local human override, and be reviewed when denominational calendars are updated.

## Source-adapter seam

The event model now anticipates multiple authorities without requiring all congregations to change workflow at once:

- canonical denominational calendar;
- Calvary Chimes (monthly document, human-reviewed ingestion);
- congregation calendars / RSS / ICS;
- manually verified live overrides for cancellations or changes.

Newest authoritative local information may override a planned occurrence without destroying its recurring schedule. Automated extraction must remain review-before-publish.
