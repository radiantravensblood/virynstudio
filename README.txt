Aquidneck Cooperative — Rhythm Engine Polish Pass 03

Browser-upload drop-in. No Terminal required.

Upload the included `editions` folder into the root of the virynstudio repository,
allowing GitHub to replace these three files:

  editions/aquidneck-cooperative/rhythm-engine.js
  editions/aquidneck-cooperative/parish-content.js
  editions/aquidneck-cooperative/parish.js

This pass:
- hides internal “Beginning Lectionary Year …” metadata from public headings;
- normalizes Bible display abbreviations without altering source calendar data;
- converts verse-range hyphens to en dashes in public reading display;
- makes Calvary’s worship cards and Sunday event date-aware:
    Jan–Jun + Sep–Dec: 10:30 AM Sunday
    Jul–Aug: 10:00 AM sanctuary + 8:00 AM Third Beach
- uses ?rhythmDate=YYYY-MM-DD for both liturgical preview and worship-schedule preview.

The source datasets remain unchanged for provenance.
