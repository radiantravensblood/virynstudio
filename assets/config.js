/*
 * Viryn Studio — editable service and contact configuration
 * ---------------------------------------------------------
 * Update this file before launch. The public pages read from this object.
 * Keep secrets and API keys out of this file because GitHub Pages is public.
 */
window.VIRYN_STUDIO_CONFIG = {
  brand: {
    name: "Viryn Studio",
    parent: "Viryn Systems",
    tagline: "Let’s Get Familiar.",
    copyrightStartYear: 2026
  },

  contact: {
    /* Replace this address with the inbox you actually monitor. */
    email: "siegelumiere@gmail.com",
    defaultSubject: "Viryn Studio project inquiry",
    schedulingUrl: "",
    googleFormUrl: "",
    responseWindow: "We aim to respond within two business days."
  },

  foundingOffer: {
    active: true,
    eyebrow: "Founding-client opening",
    title: "Help shape the first Viryn Studio framework releases.",
    copy: "We are opening a limited first circle of builds for organizations willing to share structured feedback and, with permission, let the finished work become part of our public portfolio.",
    benefit: "Founding clients receive preferred scheduling and an added post-launch review at no extra charge.",
    buttonLabel: "Ask about a founding build"
  },

  frameworks: [
    {
      id: "signal",
      name: "Signal",
      audience: "Musicians, bands, performers, and creative professionals",
      promise: "Turn releases, private listening rooms, archives, media, and professional access into one stage-ready home.",
      includes: ["Featured release", "Private listening room", "EPK", "Archive mode"],
      href: "frameworks/signal/",
      accent: "plum"
    },
    {
      id: "gathering",
      name: "Gathering",
      audience: "Nonprofits, ministries, mutual-aid groups, and community organizations",
      promise: "Make the mission clear, the next action visible, and the organization easier to trust.",
      includes: ["Mission and programs", "Volunteer path", "Events", "Donation readiness"],
      href: "frameworks/gathering/",
      accent: "moss"
    },
    {
      id: "ledger",
      name: "Ledger",
      audience: "Consultants, educators, coaches, and professional services",
      promise: "Translate expertise into a clear offer that earns the right conversations.",
      includes: ["Positioning", "Services", "Process", "Lead intake"],
      href: "frameworks/ledger/",
      accent: "ember"
    }
  ],

  packages: [
    {
      id: "framework-launch",
      name: "Framework Launch",
      price: "$2,500",
      cadence: "starting at",
      description: "For clients who need a polished website built from a proven Viryn Studio framework.",
      featured: false,
      inclusions: [
        "Up to five pages",
        "Responsive framework adaptation",
        "Supplied-content placement",
        "Basic copy cleanup",
        "Contact or booking path",
        "Basic search and social metadata",
        "One revision cycle",
        "Launch support"
      ]
    },
    {
      id: "tailored-build",
      name: "Tailored Build",
      price: "$5,000",
      cadence: "starting at",
      description: "For clients needing deeper messaging, custom sections, and useful integrations.",
      featured: true,
      inclusions: [
        "Strategy session",
        "Tailored information architecture",
        "Substantial copy development or editing",
        "Custom page sections",
        "Scheduling, lead capture, or newsletter integration",
        "Analytics setup",
        "Accessibility review",
        "Two revision cycles",
        "Thirty days of post-launch support"
      ]
    },
    {
      id: "signature-system",
      name: "Signature System",
      price: "$9,000",
      cadence: "starting at",
      description: "For organizations with complex workflows, content, integrations, or stakeholder needs.",
      featured: false,
      inclusions: [
        "Deeper discovery",
        "Custom site architecture",
        "Advanced integrations",
        "Content migration",
        "Multiple stakeholder reviews",
        "Documented handoff and training",
        "Priority support",
        "Individually scoped timeline"
      ]
    }
  ],

  carePlans: [
    {
      name: "Keep the Lights On",
      price: "$149/month",
      description: "Essential continuity after launch.",
      inclusions: ["Routine updates", "Link and form checks", "Hosting coordination", "Backup coordination", "Basic support"]
    },
    {
      name: "Keep It Moving",
      price: "$399/month",
      description: "Ongoing support for an active organization.",
      inclusions: ["Everything in Lights On", "Monthly content updates", "Basic reporting", "Priority support", "Small design adjustments"]
    },
    {
      name: "Keep It Growing",
      price: "$899/month",
      description: "Steady optimization and campaign support.",
      inclusions: ["Ongoing optimization", "Landing-page support", "Conversion review", "Content planning", "Automation support", "Regular strategy check-ins"]
    }
  ],

  inquiryCategories: [
    "I need a new website",
    "I need my current website improved",
    "I am interested in Signal",
    "I am interested in Gathering",
    "I am interested in Gathering Commons",
    "I am interested in Ledger",
    "I need ongoing support",
    "I want to discuss a custom system"
  ],

  businessRules: {
    deposit: "Projects normally begin after a signed agreement and a 50% deposit.",
    finalPayment: "The remaining balance is due before public launch unless the agreement states otherwise.",
    revisions: "Work outside the agreed scope or revision count requires a change order or separate quote.",
    clientAssets: "Clients are responsible for permission to use supplied text, images, music, logos, and other media.",
    frameworkRights: "Viryn Studio may reuse framework code and generalized components. Client-specific branding and content remain the client’s property unless otherwise agreed.",
    thirdPartyFees: "Hosting, domains, subscriptions, transaction fees, and other third-party costs are separate unless explicitly included."
  },

  futureAgentPolicy: {
    rule: "The agent receives, organizes, and routes. A human commits the company.",
    may: [
      "Answer documented package questions",
      "Collect project requirements",
      "Explain standard timelines",
      "Schedule conversations",
      "Summarize support requests",
      "Draft replies for human review"
    ],
    mayNot: [
      "Negotiate custom pricing",
      "Sign agreements",
      "Promise undocumented delivery dates",
      "Issue refunds",
      "Handle serious disputes alone",
      "Claim to be human",
      "Invent services or commitments"
    ]
  }
};
