Viryn Studio v0.6.8 — House Integrity

Purpose
-------
This is a deliberately conservative restoration patch based on the last known-good pre-v0.6.7 house. It does not attempt the v0.7 environmental redesign.

What it does
------------
- Re-ships every currently used Atelier JPG and 2x JPG so GitHub Pages cannot reference an asset that was omitted during a partial upload.
- Keeps the proven 1x/2x image strategy from the stable build instead of the v0.6.7 multi-source WebP experiment.
- Adds explicit intrinsic dimensions, async decoding, and intentional eager/lazy loading to visible Atelier art.
- Gives primary hero artwork high fetch priority.
- Repairs a handful of semantic text seams on the flagship without changing its appearance.

Upload
------
Extract the patch. Upload everything INSIDE the extracted folder to the repository root and allow matching files to replace their current versions. Preserve folder paths.

Do not delete unrelated assets. This patch intentionally leaves Signal audio, framework scripts, data, and all other working files untouched.

After GitHub Pages finishes:
1. Open virynsystems.online in a private/incognito tab.
2. Check the flagship hero and all four framework preview paintings.
3. Open Gathering, Ledger, Table, and Gathering Commons and confirm their hero painting loads before scrolling.
4. On mobile, confirm images reserve space before loading rather than jumping the layout.
