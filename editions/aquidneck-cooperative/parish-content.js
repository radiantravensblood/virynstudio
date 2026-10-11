window.PARISH_CONTENT = {
  churches: [
    {
      id: 'calvary',
      name: 'Calvary United Methodist Church',
      short: 'Calvary UMC',
      city: 'Middletown',
      address: '200 Turner Road · Middletown, RI',
      worship: '10:30 AM Sunday',
      note: 'Blended worship with fellowship following the service.',
      worshipSchedule: [
        {
          months: [1, 2, 3, 4, 5, 6, 9, 10, 11, 12],
          time: '10:30 AM Sunday',
          note: 'Blended worship with fellowship following the service.'
        },
        {
          months: [7, 8],
          time: '10:00 AM sanctuary · 8:00 AM Third Beach',
          note: 'Summer worship offers two Sunday gatherings.'
        }
      ],
      character: 'Formation, music, community life, missions, and God’s Community Garden.',
      url: 'https://www.middletownmethodist.com/'
    },
    {
      id: 'portsmouth',
      name: 'Portsmouth United Methodist Church',
      short: 'Portsmouth UMC',
      city: 'Portsmouth',
      address: '2732 East Main Road · Portsmouth, RI',
      worship: '10:00 AM Sunday',
      note: 'Sunday School follows the Children’s Message when in session.',
      character: 'A long-rooted Methodist community centered on worship, growth, outreach, and service.',
      url: 'https://www.pumcri.org/'
    },
    {
      id: 'stpauls',
      name: 'St. Paul’s United Methodist Church',
      short: 'St. Paul’s UMC',
      city: 'Newport',
      address: '12 Marlborough Street · Newport, RI',
      worship: '10:00 AM Sunday',
      note: 'Join in person, online, or by phone.',
      character: 'Contemplative, inclusive worship with strong recovery, justice, and community ministries.',
      url: 'https://www.stpaulsnewport.net/'
    }
  ],

  events: [
    {
      title: 'Sunday worship at Calvary',
      churchId: 'calvary',
      meta: 'Sunday · 10:30 AM · Middletown',
      description: 'Blended worship with fellowship following the service.',
      scope: ['calvary'],
      type: 'worship',
      badge: 'Calvary'
    },
    {
      title: 'Sunday worship at Portsmouth',
      churchId: 'portsmouth',
      meta: 'Sunday · 10:00 AM · Portsmouth',
      description: 'Sunday worship with children’s programming when in session.',
      scope: ['portsmouth'],
      type: 'worship',
      badge: 'Portsmouth'
    },
    {
      title: 'Sunday worship at St. Paul’s',
      churchId: 'stpauls',
      meta: 'Sunday · 10:00 AM · Newport + online/phone',
      description: 'Contemplative, Spirit-filled worship with multiple ways to join.',
      scope: ['stpauls'],
      type: 'worship',
      badge: 'St. Paul’s'
    },
    {
      title: 'Meditation Gathering',
      meta: 'Wednesday · 5:30–6:20 PM · St. Paul’s',
      description: 'A weekly gathering in Barber Hall.',
      scope: ['stpauls'],
      type: 'formation',
      badge: 'Formation'
    },
    {
      title: 'Spiritual Transformation Group',
      meta: 'Thursday · 6:15–7:45 PM · St. Paul’s / Zoom',
      description: 'A weekly small group for spiritual formation and conversation.',
      scope: ['stpauls'],
      type: 'formation',
      badge: 'Formation'
    },
    {
      title: 'Community Meal',
      meta: 'Third Thursday · hosted at St. Paul’s',
      description: 'Prepared and served by Calvary participants in Newport. A perfect example of one ministry carrying multiple cooperative relationships.',
      scope: ['calvary', 'stpauls'],
      type: 'service',
      badge: 'Shared ministry'
    },
    {
      title: 'God’s Community Garden',
      meta: 'Calvary campus · cooperative and community volunteers',
      description: 'Grow and harvest produce for food pantries, soup kitchens, and free farm stands across the island.',
      scope: ['calvary', 'stpauls'],
      type: 'service',
      badge: 'Shared ministry'
    },
    {
      title: 'Coffee & fellowship',
      meta: 'After Sunday worship · congregation-specific',
      description: 'A simple recurring community rhythm surfaced wherever it applies.',
      scope: ['calvary', 'portsmouth', 'stpauls'],
      type: 'community',
      badge: 'Community'
    }
  ],

  paths: {
    visit: {
      title: 'Find a place to worship this Sunday.',
      copy: 'See current times, locations, accessibility information, children’s programming, and ways to connect at each church.',
      action: 'See Sunday worship',
      href: '#worship'
    },
    explore: {
      title: 'Begin with one honest question.',
      copy: 'Open Faith in Conversation, then move naturally into Scripture, a transcript, reflection guide, study resource, or in-person formation gathering.',
      action: 'Explore faith & formation',
      href: '#faith'
    },
    support: {
      title: 'Find the right kind of care.',
      copy: 'A production version can distinguish pastoral care, prayer, material support, recovery resources, and emergencies before asking someone to tell their story.',
      action: 'See care pathways',
      href: '#serve'
    },
    serve: {
      title: 'Find a role that fits your capacity.',
      copy: 'Start with the garden, community meals, hospitality, or other ministries—then filter by time, place, accessibility, and physical demands.',
      action: 'Explore service',
      href: '#serve'
    },
    belong: {
      title: 'Find what you need for the week.',
      copy: 'Find bulletins, current notices, calendars, groups, forms, and practical church resources in one calm place.',
      action: 'See this week',
      href: '#this-week'
    }
  }
};

/*
 * Source adapters are intentionally declarative in the static prototype.
 * Production ingestion should normalize RSS/ICS/monthly documents into the
 * same event shape and require human review before publishing extracted data.
 */
window.PARISH_CONTENT.sources = {
  "discipleship-calendar": {
    label: "United Methodist worship planning calendar",
    kind: "canonical-calendar",
    cadence: "annual",
    authority: "denominational",
    freshness: "canonical"
  },
  "calvary-chimes": {
    label: "Calvary Chimes",
    kind: "monthly-document",
    cadence: "monthly",
    authority: "congregational",
    freshness: "published",
    ingestion: "human-review"
  },
  "portsmouth-calendar": {
    label: "Portsmouth calendar / announcements",
    kind: "calendar-or-feed",
    cadence: "variable",
    authority: "congregational",
    freshness: "published",
    ingestion: "adapter-pending"
  },
  "stpauls-calendar": {
    label: "St. Paul’s calendar / announcements",
    kind: "calendar-or-feed",
    cadence: "weekly",
    authority: "congregational",
    freshness: "current",
    ingestion: "adapter-pending"
  },
  "live-override": {
    label: "Live ministry notice",
    kind: "manual-override",
    cadence: "as-needed",
    authority: "local-steward",
    freshness: "live"
  },
  "prototype": {
    label: "Prototype content",
    kind: "demonstration",
    cadence: "n/a",
    authority: "prototype",
    freshness: "prototype"
  }
};

window.PARISH_CONTENT.events = window.PARISH_CONTENT.events.map((event) => ({
  status: "scheduled",
  sourceId: event.sourceId || "prototype",
  freshness: event.freshness || "prototype",
  override: event.override || null,
  ...event
}));
