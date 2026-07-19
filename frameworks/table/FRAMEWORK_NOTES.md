# Table Framework Notes

## Purpose

Table is Viryn Studio's hospitality framework. It is designed to carry a guest from first craving to the correct action while giving the business a coherent operational record.

## Configurations

### Hearth

For neighborhood restaurants, cafés, bakeries, diners, and takeout counters.

Primary public actions:

- View menu
- Order
- Reserve
- Call
- Get directions

### Route

For food trucks, pop-ups, market vendors, and rotating locations.

Primary public actions:

- Find the current location
- View the service schedule
- Preorder
- Check sell-out status
- Request a private booking

### Feast

For caterers, private chefs, event dining, and large-order service.

Primary public actions:

- Check fit
- Submit an event inquiry
- Receive a quote
- Pay a deposit through a secure provider
- Confirm service details

## Shared operating record

A production implementation should establish one authoritative order or inquiry record with fields such as:

- record ID
- configuration / service type
- customer name and contact
- event or service date
- service window
- headcount or quantity
- location
- menu selections / package interest
- dietary notes
- budget
- availability status
- quote amount
- deposit amount and status
- balance and status
- calendar event ID
- production notes
- staff owner
- workflow status
- created / modified timestamps

The dashboard is a view over this record. It is not the source of truth by itself.

## Suggested integration order

1. Static website and structured email intake
2. Form provider or Google Form feeding a Sheet
3. Google Calendar confirmation after human approval
4. Mercury or Stripe-hosted payment request
5. CRM or lightweight database if volume requires it
6. Custom dashboard only after the real workflow is observed

Never place payment credentials, protected customer information, or private API keys in GitHub Pages code.

## Hometown Hero founding cohort

Private Lawrence outreach concept:

- Cohort size: three food businesses
- Standard tailored-build value: $5,000
- Lawrence Hometown Hero credit: $3,500
- Project total: $1,500
- Suggested payment structure: $750 to begin; $750 before launch

Suggested included scope:

- Table framework adaptation
- Up to five pages or equivalent sections
- Mobile-first menu
- Hours, location, contact, and primary action
- Existing ordering or reservation integration
- Basic catering inquiry
- One visual direction
- Two revision rounds
- Basic metadata and analytics
- Owner handoff and launch support

Suggested exclusions unless separately quoted:

- custom ordering or reservation software
- professional photography
- full identity design
- complex ecommerce
- unlimited menu entry or translation
- ongoing updates
- customer accounts or loyalty systems

The credit should appear on private proposals rather than as a standing public discount. Founding partners may be invited—but never coerced—to permit portfolio use, a case-study interview, and an honest testimonial after launch.
