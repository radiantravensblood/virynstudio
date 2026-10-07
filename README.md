# Aquidneck Parish — native Viryn Studio integration

This package reshapes the standalone Parish proof into the existing Viryn Studio architecture.

Target path:

```text
editions/aquidneck-parish/
```

Files:

- `index.html` — Edition 02 public proof
- `parish.css` — Edition-local visual layer
- `parish.js` — Edition-local interactions
- `parish-content.js` — prototype structured parish content
- `EDITION_NOTES.md` — composition, boundaries, and production spine

The companion patch also updates the Studio homepage Editions section, shared Edition spacing, and `STUDIO_ARCHITECTURE.md`.

Apply from the root of a current `virynstudio` checkout:

```bash
git apply aquidneck-parish-native.patch
```

Then commit and push to the GitHub Pages branch (`main` in the current repository). The Edition will publish at:

```text
https://virynsystems.online/editions/aquidneck-parish/
```
