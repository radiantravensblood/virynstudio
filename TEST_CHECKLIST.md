# Viryn Studio v0.2 Manual Test Checklist

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
