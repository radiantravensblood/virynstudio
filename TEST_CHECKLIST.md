# Viryn Studio v0.6.1 Manual Test Checklist

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

- [ ] Day, Night, and Chocolate themes cycle on every page.
- [ ] Theme choice persists after refresh.
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
