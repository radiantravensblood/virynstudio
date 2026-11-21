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
      url: 'https://www.middletownmethodist.com/',
      zoomUrl: 'https://us02web.zoom.us/j/2821697807?pwd=aldEN09mTFZ4VlN5Q3lWQi90cmRGQT09'
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

  weeklyResources: {
    '2026-10-11': [
      {
        label: 'Calvary bulletin',
        detail: 'Order of worship · October 11',
        href: 'resources/2026-10/calvary-bulletin-2026-10-11-public.pdf'
      },
      {
        label: 'Worship music',
        detail: 'Music pages · October 11',
        href: 'resources/2026-10/calvary-worship-music-2026-10-11.pdf'
      },
      {
        label: 'Join Calvary on Zoom',
        detail: 'Standing worship link',
        href: 'https://us02web.zoom.us/j/2821697807?pwd=aldEN09mTFZ4VlN5Q3lWQi90cmRGQT09',
        external: true
      }
    ]
  },

  activities: [
    {
      id: 'worship-calvary-weekly',
      identity: {
        title: 'Sunday worship at Calvary',
        kind: 'recurring-gathering',
        ministryType: 'worship',
        badge: 'Calvary'
      },
      relationships: {
        scope: ['calvary'],
        churchId: 'calvary',
        host: 'calvary',
        steward: 'calvary'
      },
      timing: {
        timezone: 'America/New_York',
        recurrence: { frequency: 'weekly', weekday: 'sunday' },
        scheduleSource: 'church.worshipSchedule'
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'Sunday · 10:30 AM · Middletown',
        description: 'Blended worship with fellowship following the service.'
      }
    },
    {
      id: 'worship-portsmouth-weekly',
      identity: {
        title: 'Sunday worship at Portsmouth',
        kind: 'recurring-gathering',
        ministryType: 'worship',
        badge: 'Portsmouth'
      },
      relationships: {
        scope: ['portsmouth'],
        churchId: 'portsmouth',
        host: 'portsmouth',
        steward: 'portsmouth'
      },
      timing: {
        timezone: 'America/New_York',
        recurrence: { frequency: 'weekly', weekday: 'sunday' },
        scheduleSource: 'church.worshipSchedule'
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'Sunday · 10:00 AM · Portsmouth',
        description: 'Sunday worship with children’s programming when in session.'
      }
    },
    {
      id: 'worship-stpauls-weekly',
      identity: {
        title: 'Sunday worship at St. Paul’s',
        kind: 'recurring-gathering',
        ministryType: 'worship',
        badge: 'St. Paul’s'
      },
      relationships: {
        scope: ['stpauls'],
        churchId: 'stpauls',
        host: 'stpauls',
        steward: 'stpauls'
      },
      timing: {
        timezone: 'America/New_York',
        recurrence: { frequency: 'weekly', weekday: 'sunday' },
        scheduleSource: 'church.worshipSchedule'
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'Sunday · 10:00 AM · Newport + online/phone',
        description: 'Contemplative, Spirit-filled worship with multiple ways to join.'
      }
    },
    {
      id: 'stpauls-meditation-weekly',
      identity: {
        title: 'Meditation Gathering',
        kind: 'recurring-gathering',
        ministryType: 'formation',
        badge: 'Formation'
      },
      relationships: {
        scope: ['stpauls'],
        churchId: 'stpauls',
        host: 'stpauls',
        steward: 'stpauls'
      },
      timing: {
        timezone: 'America/New_York',
        startTime: '17:30',
        endTime: '18:20',
        recurrence: { frequency: 'weekly', weekday: 'wednesday' }
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'stpauls-calendar', authority: 'congregational', reviewed: false },
      display: {
        meta: 'Wednesday · 5:30–6:20 PM · St. Paul’s',
        description: 'A weekly gathering in Barber Hall.'
      }
    },
    {
      id: 'stpauls-spiritual-transformation-weekly',
      identity: {
        title: 'Spiritual Transformation Group',
        kind: 'recurring-gathering',
        ministryType: 'formation',
        badge: 'Formation'
      },
      relationships: {
        scope: ['stpauls'],
        churchId: 'stpauls',
        host: 'stpauls',
        steward: 'stpauls'
      },
      timing: {
        timezone: 'America/New_York',
        startTime: '18:15',
        endTime: '19:45',
        recurrence: { frequency: 'weekly', weekday: 'thursday' }
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'stpauls-calendar', authority: 'congregational', reviewed: false },
      display: {
        meta: 'Thursday · 6:15–7:45 PM · St. Paul’s / Zoom',
        description: 'A weekly small group for spiritual formation and conversation.'
      }
    },
    {
      id: 'community-meal-third-thursday',
      identity: {
        title: 'Community Meal',
        kind: 'recurring-gathering',
        ministryType: 'service',
        badge: 'Shared ministry'
      },
      relationships: {
        scope: ['calvary', 'stpauls'],
        host: 'stpauls',
        steward: 'calvary'
      },
      timing: {
        timezone: 'America/New_York',
        recurrence: { frequency: 'monthly', weekday: 'thursday', ordinal: 3 }
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'Third Thursday · hosted at St. Paul’s',
        description: 'Prepared and served by Calvary participants in Newport. A perfect example of one ministry carrying multiple cooperative relationships.'
      }
    },
    {
      id: 'gods-community-garden',
      identity: {
        title: 'God’s Community Garden',
        kind: 'ministry',
        ministryType: 'service',
        badge: 'Shared ministry'
      },
      relationships: {
        scope: ['calvary', 'stpauls'],
        host: 'calvary',
        steward: 'shared'
      },
      timing: {
        timezone: 'America/New_York',
        mode: 'perennial'
      },
      lifecycle: { mode: 'perennial' },
      status: { state: 'active', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'Calvary campus · cooperative and community volunteers',
        description: 'Grow and harvest produce for food pantries, soup kitchens, and free farm stands across the island.'
      }
    },
    {
      id: 'coffee-fellowship-after-worship',
      identity: {
        title: 'Coffee & fellowship',
        kind: 'recurring-gathering',
        ministryType: 'community',
        badge: 'Community'
      },
      relationships: {
        scope: ['calvary', 'portsmouth', 'stpauls'],
        host: 'congregation-specific',
        steward: 'congregation-specific'
      },
      timing: {
        timezone: 'America/New_York',
        recurrence: { frequency: 'weekly', weekday: 'sunday' },
        relativeTo: 'worship'
      },
      lifecycle: { mode: 'recurring', graceDays: 0 },
      status: { state: 'scheduled', override: null },
      source: { id: 'prototype', authority: 'prototype', reviewed: false },
      display: {
        meta: 'After Sunday worship · congregation-specific',
        description: 'A simple recurring community rhythm surfaced wherever it applies.'
      }
    },
    {
      id: 'candy-cane-bazaar-2026',
      identity: {
        title: 'Candy Cane Bazaar',
        kind: 'event',
        ministryType: 'community',
        badge: 'Shared event'
      },
      relationships: {
        scope: ['calvary', 'portsmouth'],
        host: null,
        steward: 'shared'
      },
      timing: {
        timezone: 'America/New_York',
        start: '2026-11-07T09:00:00',
        end: '2026-11-07T14:00:00',
        recurrence: null
      },
      lifecycle: {
        mode: 'dated',
        publishOn: '2026-10-01',
        graceDays: 1
      },
      status: { state: 'scheduled', override: null },
      source: { id: 'calvary-chimes', authority: 'congregational', reviewed: true },
      display: {
        meta: 'November 7 · 9:00 AM–2:00 PM',
        description: 'One shared event, one place for the ways people can participate—whether they are volunteering, baking, or applying as a local artisan.'
      },
      actions: [
        {
          label: 'Bake table signup',
          href: 'https://www.signupgenius.com/go/904094FAFAA2EA57-65872680-calvaryportsmouth#/',
          external: true
        },
        {
          label: 'Vendor invitation',
          href: 'resources/candy-cane-bazaar/vendor-invitation.pdf'
        },
        {
          label: 'Vendor application & policies',
          href: 'resources/candy-cane-bazaar/vendor-application-policies.pdf'
        }
      ]
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
      action: 'Open current resources',
      href: '#resources'
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

