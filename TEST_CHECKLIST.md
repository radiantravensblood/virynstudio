# Viryn Studio v0.6.7 Manual Test Checklist

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


### Atelier Pass (v0.6.5)

- [ ] The flagship hero uses the public atelier painting and no private couple imagery.
- [ ] The hero CTA remains visible and legible on mobile before the painting.
- [ ] Gathering, Ledger, Signal, and Table framework cards render their authored images with useful alt text.
- [ ] Gathering Commons reads as community and belonging before diagnosis or loss.
- [ ] Ledger plainly communicates teaching, consultation, resources, curriculum, and practice.
- [ ] Process copy distinguishes client decisions from Studio responsibilities.
- [ ] Signature System lists three structured revision cycles and the FAQ matches.
- [ ] Every painterly image has one clear emotional center and no text collision.
- [ ] Hover motion is removed when `prefers-reduced-motion` is active.

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


## v0.6.7 Atelier Fidelity & Joinery checks

- [ ] Gathering, Ledger, and Commons hero captions never overlap their information cards at 320px, 390px, 768px, 1024px, or desktop widths.
- [ ] Hero images use the narrow-screen `<picture>` source below 700px and do not upscale beyond their supplied source width.
- [ ] Below-fold Atelier images lazy-load and include intrinsic width and height.
- [ ] Gathering's pantry, route, and care-fund cards use the hand-inked Studio symbol family rather than legacy flat geometry.
- [ ] The three Gathering path buttons open working, keyboard-operable, no-storage demonstrations and no longer launch email.
- [ ] The Gathering dialog closes by button, Escape, and backdrop click without losing page context.
- [ ] Commons' featured resource shows the memory-map illustration and the toolkit shows used pages with a restrained clip.
- [ ] Commons remains visually distinct from Gathering: protected-room scale, memory motifs, and quieter caregiver language.
- [ ] Signal queue and archive text include explicit readable boundaries between title, duration, and status.
- [ ] Custom Studio symbols render in Chrome, Safari, Firefox, and high-contrast mode.
- [ ] No dead hidden ledger SVG, plate, sun-disc, or legacy Gathering hero geometry remains in public markup.
- [ ] Button height, vertical centering, focus ring, and active posture are consistent across flagship and frameworks.
