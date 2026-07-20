# Viryn Studio v0.6.4 Manual Test Checklist

## Public paths

- [ ] `/virynstudio/` loads the Studio flagship.
- [ ] `/virynstudio/frameworks/signal/` loads Signal.
- [ ] `/virynstudio/frameworks/gathering/` loads Gathering.
- [ ] `/virynstudio/frameworks/ledger/` loads Ledger.
- [ ] Each legacy `.html` framework URL redirects to the matching directory URL.
- [ ] Every framework can return to the Studio homepage.

## Mobile and zoom

Test at 320px, 375px, 430px, 768px, and desktop width.

- [ ] No horizontal scrolling appears.
- [ ] Navigation opens, closes, and returns focus predictably.
- [ ] Buttons remain readable and tappable.
- [ ] Cards stack without clipped text.
- [ ] Ledger service rows and resource filters remain usable.
- [ ] Browser zoom at 200% does not hide content or actions.

## Keyboard and accessibility

- [ ] Skip links work.
- [ ] Every interactive element is reachable by keyboard.
- [ ] Focus indicators are visible.
- [ ] Details/FAQ controls announce expanded state.
- [ ] Ledger video controls are keyboard operable.
- [ ] Captions can be enabled.
- [ ] Transcript and PDF alternatives open.
- [ ] Reduced-motion preference removes nonessential animation.

## Functional checks

- [ ] The flagship remains locked to Chocolate and exposes no theme control.
- [ ] Day, Night, and Chocolate continue to cycle and persist on framework pages that intentionally demonstrate themes.
- [ ] Contact links use the address or form set in `assets/shared/config.js`.
- [ ] Ledger resource filters show the correct number of cards.
- [ ] All three Ledger PDFs download and render.
- [ ] The Ledger preview video plays and reports play/pause/ended state.
- [ ] No browser-console errors appear.

## Integrity

- [ ] Synthetic concept language remains visible.
- [ ] No unapproved client identity, curriculum, credential, testimonial, or result appears.
- [ ] No API key or private data exists in the repository.
- [ ] No page implies that educational consultation is clinical treatment.

## Signal listening-stage checks

- [ ] Signal loads at `/frameworks/signal/` with no missing CSS, JavaScript, artwork, waveform, or audio files.
- [ ] The portfolio phrase `NOBODYKING` opens the listening room; an incorrect phrase returns a readable error.
- [ ] The room remains open during the current browser tab session and closes when “Close transmission” is activated.
- [ ] Each queue button loads the correct track, artwork, description, credits, and download filename.
- [ ] Native audio controls work by keyboard and do not autoplay on page load or room entry.
- [ ] Previous and next controls wrap through all five tracks.
- [ ] All five full MP3 downloads work.
- [ ] The listening-note action refuses an empty note and prepares a mailto message when text is present.
- [ ] The static-site security disclosure remains visible and accurate.
- [ ] Mobile widths do not overflow; the navigation, gate, queue, and player remain usable at 320px.


## v0.6 Table checks

- [ ] `frameworks/table/` loads from the repository root and nested URL.
- [ ] Hearth, Route, and Feast buttons update hero, ticket, feature list, colors, and planner options.
- [ ] Menu filters show only matching synthetic menu items and remain keyboard operable.
- [ ] All seven service-flow stages update the panel and status data.
- [ ] Service planner validates required fields, advances in both directions, shows a local summary, and transmits/stores nothing.
- [ ] Contact buttons route to the configured Studio inbox.
- [ ] Mobile navigation opens, closes, and does not create horizontal overflow.
- [ ] The flagship homepage renders four framework cards and a Table portfolio card.


## v0.6.1 credibility-pass checks

- [ ] The near-top framework directory contains exactly four working shortcuts: Signal, Gathering, Ledger, and Table.
- [ ] At mobile width, the framework directory scrolls horizontally without causing page-level horizontal overflow.
- [ ] Table’s plate and decorative leaves remain visually behind the receipt at desktop and mobile widths.
- [ ] Table’s small concept caption remains visible and does not cover receipt text.
- [ ] Table uses a plain cream page field rather than a dotted background texture.
- [ ] The service-flow section retains readable contrast without an abrupt near-black transition.
- [ ] `$7,840` is presented as the quoted-value metric; metric labels and supporting text use a consistent hierarchy.
- [ ] Gathering Commons’ three-line hero mantra is fully visible at 320px, 390px, and desktop widths.
- [ ] Gathering Commons’ primary and secondary hero actions are centered and full-width on small screens.


## v0.6.2 Human Hands checks
- Table: switch Hearth, Route, and Feast; the garnish never covers the ticket heading at desktop or mobile widths.
- Table: the concept caption reads as secondary fine print and does not compete with the receipt.
- Table: the service-flow section remains readable in every configuration without an abrupt near-black transition.
- Table: `$7,840` is visually primary; `08`, `03`, and `06` are supporting metrics.
- Commons: the complete three-line mantra remains inside the hero safe area at 1440px, 820px, 390px, and 320px widths.
- Commons: leaves and memory cards do not intersect the mantra.
- Both pages: no horizontal overflow, clipped copy, or inaccessible focus states.


## v0.6.3 Theme & Identity checks
- [ ] Commons Hearth, Grove, and Dusk each preserve readable labels, body text, controls, borders, and focus states.
- [ ] Dusk uses a muted rose-clay label accent rather than the previous harsh yellow treatment.
- [ ] The flagship work grid contains exactly four cards: Gathering, Ledger, Signal, and Table.
- [ ] The flagship does not contain a redundant Viryn Studio portfolio card.
- [ ] Gathering and Signal have bespoke preview artwork that remains legible in Day, Night, and Chocolate themes.
- [ ] Table’s hero contains no plate leaves or receipt pin, and no decorative object intersects the ticket.
- [ ] At 1440px, 820px, 390px, and 320px, the four-card work grid does not overflow or clip copy.


## v0.6.4 Comprehension & Composition checks

### Flagship threshold and structure
- [ ] The flagship loads in Chocolate with no visible theme toggle.
- [ ] Every flagship primary CTA reads **Start a project** and remains legible at rest, hover, focus, and active states.
- [ ] The repeated Framework Directory is absent.
- [ ] The Framework Library contains exactly four framework cards and working links.
- [ ] The capability bridge explains that capabilities can travel across framework spines.
- [ ] Framework demonstrations appear before pricing.
- [ ] The trust rail uses consistent separators and wraps without isolated or uneven entries.
- [ ] Founding-client copy uses one text color, line height, paragraph rhythm, and measure.

### Framework authorship and readability
- [ ] Gathering’s hero presents one community illustration rather than a field of unrelated shapes.
- [ ] Gathering program cards use food, route, and care-fund illustrations that remain understandable in Day, Night, and Chocolate.
- [ ] Gathering’s featured need card, mission values, “Start the threshold” action, “Saturday pantry,” and “I can offer time” pathways remain readable in all three themes.
- [ ] Gathering’s three action-card buttons share a consistent baseline at desktop widths and become full-width at mobile widths.
- [ ] Ledger contains no internal collaborator names and uses one ledger/path visual metaphor.
- [ ] Signal queue items expose complete accessible labels containing title, duration, and status without concatenation.
- [ ] Table contains no garnish that intersects the ticket and the final CTA reads **Start a Table project**.

### Commons atmospheres
- [ ] Hearth, Grove, and Dusk each preserve readable body copy, labels, links, buttons, fields, borders, and focus states.
- [ ] Dusk uses parchment for reading, rose clay for action/emphasis, and umber for structure rather than body text.
- [ ] No atmosphere relies on color alone to communicate state.

### Composition architecture
- [ ] `STUDIO_ARCHITECTURE.md` documents Framework → Capability → Edition → Client Build.
- [ ] Package copy includes baseline accessibility checks for Framework Launch.
- [ ] No public copy implies that accessibility is available only as a premium upgrade.
