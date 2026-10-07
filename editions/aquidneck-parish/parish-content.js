window.PARISH_CONTENT = {
  churches: [
    {
      id: 'calvary',
      name: 'Calvary United Methodist Church',
      short: 'Calvary UMC',
      city: 'Middletown',
      address: '200 Turner Road · Middletown, RI',
      worship: '10:30 AM · September–June',
      note: 'Summer: 10:00 AM sanctuary worship + 8:00 AM Third Beach worship',
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
      meta: 'Sunday · 10:30 AM · Middletown',
      description: 'Blended worship with fellowship following the service.',
      scope: ['calvary'],
      type: 'worship',
      badge: 'Calvary'
    },
    {
      title: 'Sunday worship at Portsmouth',
      meta: 'Sunday · 10:00 AM · Portsmouth',
      description: 'Sunday worship with children’s programming when in session.',
      scope: ['portsmouth'],
      type: 'worship',
      badge: 'Portsmouth'
    },
    {
      title: 'Sunday worship at St. Paul’s',
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
      description: 'Prepared and served by Calvary parishioners in Newport. A perfect example of one ministry carrying multiple parish relationships.',
      scope: ['calvary', 'stpauls'],
      type: 'service',
      badge: 'Shared ministry'
    },
    {
      title: 'God’s Community Garden',
      meta: 'Calvary campus · parish and community volunteers',
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
      title: 'Compare this Sunday’s worship.',
      copy: 'See times, access options, children’s programming, location, and what each congregation feels like before choosing where to begin.',
      action: 'See Sunday worship',
      href: '#worship'
    },
    explore: {
      title: 'Begin with one honest question.',
      copy: 'Open Faith in Conversation, then move naturally into a sermon, transcript, study resource, or in-person formation gathering.',
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
      title: 'Open the parish dashboard.',
      copy: 'In production, this becomes the calm home for bulletins, current notices, calendar filters, forms, groups, and practical member resources.',
      action: 'See this week',
      href: '#this-week'
    }
  }
};
