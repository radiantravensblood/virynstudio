# Viryn Studio Manual Test Checklist

## Repository and loading

- [ ] `index.html` loads without a blank screen.
- [ ] `assets/config.js`, `assets/studio.css`, and `assets/studio.js` return successfully.
- [ ] Signal, Gathering, and Ledger pages load from the `frameworks` folder.
- [ ] No browser-console errors appear.

## Navigation

- [ ] Every desktop navigation link reaches the correct section.
- [ ] The mobile menu opens and closes with the keyboard.
- [ ] `aria-expanded` changes when the mobile menu changes state.
- [ ] Framework pages return to the Studio homepage correctly.
- [ ] The skip link reaches the main content.

## Themes

- [ ] Day theme is readable.
- [ ] Night theme is readable.
- [ ] Chocolate theme is readable.
- [ ] Theme preference persists after refresh.
- [ ] Theme controls have visible keyboard focus.

## Responsive behavior

Test at approximately:

- [ ] 320px wide
- [ ] 375px wide
- [ ] 768px wide
- [ ] 1024px wide
- [ ] 1440px wide

Confirm:

- [ ] no horizontal scrolling;
- [ ] buttons remain usable;
- [ ] pricing cards stack correctly;
- [ ] text does not overlap decorative elements;
- [ ] framework visuals remain legible.

## Contact routing

- [ ] The configured contact email is monitored.
- [ ] “Start a conversation” opens the intended email, form, or scheduling route.
- [ ] Each framework inquiry includes the correct subject.
- [ ] The three-point review link creates the intended message.
- [ ] No form asks for sensitive medical, financial, or payment information.

## Commercial content

- [ ] Starting prices match the current sales plan.
- [ ] Package inclusions match the service agreement.
- [ ] Revision limits are accurate.
- [ ] The 50% deposit language is accurate.
- [ ] Third-party fee language is accurate.
- [ ] Founding-client status is turned on or off intentionally.
- [ ] No false scarcity appears.

## Portfolio integrity

- [ ] Every uncommissioned example says “Concept demonstration.”
- [ ] No fictional testimonial, logo, result, credential, or client relationship appears.
- [ ] Real music, images, biographies, and nonprofit stories have written permission.

## Accessibility

- [ ] All functionality works with the keyboard only.
- [ ] Focus is always visible.
- [ ] Heading order is logical.
- [ ] Disclosure questions open with Enter and Space.
- [ ] Reduced-motion preference removes nonessential animation.
- [ ] Contrast is reviewed in all three themes.
- [ ] Zoom at 200% preserves usability.

## Final launch

- [ ] GitHub Pages reports a successful deployment.
- [ ] The project URL loads on Wi-Fi and cellular data.
- [ ] The site is tested in at least two modern browsers.
- [ ] The mobile site is reviewed on a physical phone.
- [ ] All placeholder contact information has been replaced or approved.
