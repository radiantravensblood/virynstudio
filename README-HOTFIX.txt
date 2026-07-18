Signal v0.4.1 playback hotfix

Upload everything inside this folder to the ROOT of the virynstudio repository.

Changed files:
- frameworks/signal/index.html
- frameworks/signal/signal.js
- frameworks/signal/signal-player-v0.4.1.js

Why this fixes the issue:
The v0.4 page could be paired with a browser/CDN-cached v0.3 signal.js. That older script knows only the first three tracks, so selecting either new v0.4 slug silently fell back to SNP. The page now loads a newly named script file, bypassing the stale cache, and the player no longer falls back silently when a track slug is missing.
