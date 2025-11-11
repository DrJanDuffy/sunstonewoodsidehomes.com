export type MoveInReadySlug =
  | 'meridian-lot-25'
  | 'meridian-lot-27'
  | 'meridian-lot-23'
  | 'acacia-lot-60'
  | 'acacia-lot-40'
  | 'acacia-lot-61'
  | 'acacia-lot-41'
  | 'ambridge-lot-12'
  | 'ashwood-lot-31'
  | 'serenata-lot-67'
  | 'ashwood-lot-48'
  | 'ambridge-lot-21'
  | 'serenata-lot-65'
  | 'adair-lot-42'
  | 'lyra-lot-86'
  | 'lyra-lot-16'
  | 'lyra-lot-90'
  | 'capella-lot-93'
  | 'adair-lot-34'
  | 'adair-lot-61'
  | 'adair-lot-32'
  | 'capella-lot-49'
  | 'vireo-lot-10'
  | 'vireo-lot-76'
  | 'lyra2-lot-91'

export type MoveInReadyHome = {
  slug: MoveInReadySlug
  community: string
  city: string
  collection: string
  planName: string
  lot: string
  status: 'Quick Move In'
  price: string
  beds: string
  baths: string
  garage: string
  squareFeet: string
  estimatedMoveIn?: string
  description: string
  highlights: string[]
  conciergeNotes: string[]
  mailSubject: string
}

export const moveInReadyHomes: MoveInReadyHome[] = [
  {
    slug: 'meridian-lot-25',
    community: 'Meridian at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Charleston Plan 1',
    lot: 'Lot 25',
    status: 'Quick Move In',
    price: '$389,777',
    beds: '2 Beds',
    baths: '2.5 Baths',
    garage: '1 Garage',
    squareFeet: '1,284 Sq Ft',
    description:
      'Single-level living crafted for effortless lock-and-leave convenience with open entertaining spaces and a private primary suite.',
    highlights: [
      'Bright kitchen with quartz counters and designer matte cabinetry',
      'Covered patio plus low-maintenance yard ready for personalization',
      'Flex loft ideal for home office or hobby space',
    ],
    conciergeNotes: [
      'Ask about rate buy-down incentives for Cadence quick move-ins.',
      'Schedule a walk-through to review included appliance package.',
    ],
    mailSubject: 'Meridian Charleston Plan 1 Lot 25 Tour Request',
  },
  {
    slug: 'meridian-lot-27',
    community: 'Meridian at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Jefferson Plan 2',
    lot: 'Lot 27',
    status: 'Quick Move In',
    price: '$409,777',
    beds: '2 Beds',
    baths: '2.5 Baths',
    garage: '1 Garage',
    squareFeet: '1,418 Sq Ft',
    description:
      'Elevated townhome-style residence featuring dual en-suite bedrooms and a spacious great room perfect for gatherings.',
    highlights: [
      'Upstairs laundry with cabinetry and sink upgrade',
      'Luxury vinyl plank throughout main living spaces',
      'Private balcony off primary suite with Cadence skyline views',
    ],
    conciergeNotes: [
      'Review HOA coverage for exterior maintenance and insurance.',
      'Confirm closing timeline to coordinate move dates with builder.',
    ],
    mailSubject: 'Meridian Jefferson Plan 2 Lot 27 Tour Request',
  },
  {
    slug: 'meridian-lot-23',
    community: 'Meridian at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Moriah Plan 3',
    lot: 'Lot 23',
    status: 'Quick Move In',
    price: '$424,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '1 Garage',
    squareFeet: '1,598 Sq Ft',
    description:
      'Three-bedroom layout anchored by a generous kitchen island, airy great room, and secluded primary suite.',
    highlights: [
      'Chef-inspired kitchen with stainless appliances and pantry',
      'Upgraded tile surround in primary bath walk-in shower',
      'Smart-home package with video doorbell and Wi-Fi thermostat',
    ],
    conciergeNotes: [
      'Explore landscape packages through Cadence-preferred vendors.',
      'Leverage Dr. Duffy’s lender partners for quick approvals.',
    ],
    mailSubject: 'Meridian Moriah Plan 3 Lot 23 Tour Request',
  },
  {
    slug: 'acacia-lot-60',
    community: 'Acacia at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Willow Plan 1',
    lot: 'Lot 60',
    status: 'Quick Move In',
    price: '$474,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,732 Sq Ft',
    description:
      'Two-story home blending open-concept living with an upstairs loft and spa-inspired primary suite.',
    highlights: [
      'Gourmet kitchen with pendant lighting and walk-in pantry',
      'Loft/bonus space for media or study area',
      'Tankless water heater and energy-efficient windows',
    ],
    conciergeNotes: [
      'Ask about backyard design allowances for Cadence buyers.',
      'Coordinate same-day tours with neighboring Sienna plans.',
    ],
    mailSubject: 'Acacia Willow Plan 1 Lot 60 Tour Request',
  },
  {
    slug: 'acacia-lot-40',
    community: 'Acacia at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Sienna Plan 3',
    lot: 'Lot 40',
    status: 'Quick Move In',
    price: '$489,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,153 Sq Ft',
    description:
      'Expansive Sienna plan showcasing a versatile downstairs flex room and expansive upstairs loft for double the hangout space.',
    highlights: [
      'Designer kitchen with quartz countertops and matte black fixtures',
      'Primary suite with oversized shower and dual walk-in closets',
      'Covered patio and fully landscaped front yard',
    ],
    conciergeNotes: [
      'Compare Sienna elevations to pick curb appeal preferences.',
      'Review build warranties and included smart-home features.',
    ],
    mailSubject: 'Acacia Sienna Plan 3 Lot 40 Tour Request',
  },
  {
    slug: 'acacia-lot-61',
    community: 'Acacia at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Sienna Plan 3',
    lot: 'Lot 61',
    status: 'Quick Move In',
    price: '$494,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,153 Sq Ft',
    description:
      'Sienna plan with flexible living spaces and thoughtful upgrades designed for growing households.',
    highlights: [
      'KitchenAid appliance package and expanded storage',
      'Upstairs loft with tech desk built-in',
      'Primary bath featuring soaking tub and separate shower',
    ],
    conciergeNotes: [
      'Ask about incentives for closing within 30 days.',
      'Tour adjacent quick move-ins to compare lot orientation.',
    ],
    mailSubject: 'Acacia Sienna Plan 3 Lot 61 Tour Request',
  },
  {
    slug: 'acacia-lot-41',
    community: 'Acacia at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Bailey Plan 2',
    lot: 'Lot 41',
    status: 'Quick Move In',
    price: '$494,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,954 Sq Ft',
    description:
      'Bailey plan balances open-concept main level living with spacious secondary bedrooms upstairs.',
    highlights: [
      'Oversized kitchen island with seating for five',
      'Drop zone and storage near garage entry',
      'Primary suite with coffered ceiling and spa bath',
    ],
    conciergeNotes: [
      'Verify HOA guidelines for backyard enhancements.',
      'Use Dr. Duffy’s closing checklist for smooth handoff.',
    ],
    mailSubject: 'Acacia Bailey Plan 2 Lot 41 Tour Request',
  },
  {
    slug: 'ambridge-lot-12',
    community: 'Ambridge at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Chester Plan 1',
    lot: 'Lot 12',
    status: 'Quick Move In',
    price: '$509,777',
    beds: '2 Beds',
    baths: '2 Baths',
    garage: '2 Garage',
    squareFeet: '1,597 Sq Ft',
    description:
      'Single-story Chester plan with dual suites, bright living spaces, and a covered patio for year-round enjoyment.',
    highlights: [
      'Great room with 12-foot sliding glass door to outdoor space',
      'Quartz countertops and upgraded cabinetry package',
      'Primary suite includes walk-in shower and expansive closet',
    ],
    conciergeNotes: [
      'Perfect for lock-and-leave buyers wanting minimal maintenance.',
      'Schedule orientation walkthrough with Dr. Duffy’s punch-list guide.',
    ],
    mailSubject: 'Ambridge Chester Plan 1 Lot 12 Tour Request',
  },
  {
    slug: 'ashwood-lot-31',
    community: 'Ashwood at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Sienna Plan 4',
    lot: 'Lot 31',
    status: 'Quick Move In',
    price: '$534,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,153 Sq Ft',
    description:
      'Corner-lot Sienna with expanded windows, premium railing, and a third-story retreat perfect for sunset gatherings.',
    highlights: [
      'Third-floor bonus room with powder bath and rooftop deck access',
      'Chef kitchen featuring waterfall quartz island and soft-close cabinetry',
      'Primary suite includes soaking tub, frameless shower, and dual closets',
    ],
    conciergeNotes: [
      'Preview rooftop deck options and exterior maintenance schedules.',
      'Confirm HOA coverage for three-story elevations.',
    ],
    mailSubject: 'Ashwood Sienna Plan 4 Lot 31 Tour Request',
  },
  {
    slug: 'serenata-lot-67',
    community: 'Serenata at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Lucca Plan 2',
    lot: 'Lot 67',
    status: 'Quick Move In',
    price: '$549,777',
    beds: '3 Beds',
    baths: '3.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,488 Sq Ft',
    description:
      'Lucca Plan 2 offers multi-gen flexibility with a downstairs suite, airy loft, and designer finishes curated by Woodside’s studio.',
    highlights: [
      'Downstairs suite with private bath ideal for guests or home office',
      'Two-story great room flooded with natural light',
      'Upgraded tile, fixtures, and accent wall package throughout',
    ],
    conciergeNotes: [
      'Ask about fence and landscape completion timelines prior to closing.',
      'Review appraisal comps with Dr. Duffy to support financing.',
    ],
    mailSubject: 'Serenata Lucca Plan 2 Lot 67 Tour Request',
  },
  {
    slug: 'ashwood-lot-48',
    community: 'Ashwood at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Oakley Plan 1',
    lot: 'Lot 48',
    status: 'Quick Move In',
    price: '$549,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,441 Sq Ft',
    description:
      'Oakley Plan 1 marries expansive entertaining space with a private third-floor retreat and panoramic deck.',
    highlights: [
      'Main-level great room with 16-foot stacking slider to covered patio',
      'Third-floor entertainment loft with wet bar rough-in',
      'Owner’s suite spa bath with freestanding tub and upgraded tile',
    ],
    conciergeNotes: [
      'Coordinate rooftop deck safety inspection prior to move-in.',
      'Leverage Dr. Duffy’s moving concierge for multi-story furniture installs.',
    ],
    mailSubject: 'Ashwood Oakley Plan 1 Lot 48 Tour Request',
  },
  {
    slug: 'ambridge-lot-21',
    community: 'Ambridge at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Bolton Plan 2',
    lot: 'Lot 21',
    status: 'Quick Move In',
    price: '$559,777',
    beds: '2 Beds',
    baths: '2 Baths',
    garage: '2 Garage',
    squareFeet: '1,834 Sq Ft',
    description:
      'Bolton Plan 2 delivers generous great room living, expanded storage, and a serene primary suite with spa bath.',
    highlights: [
      'Dedicated den ideal for work-from-home or fitness studio',
      'Kitchen upgrades include quartz counters, backsplash, and pendant lighting',
      'Covered patio with gas stub for outdoor kitchen options',
    ],
    conciergeNotes: [
      'Request full list of included window coverings and appliances.',
      'Discuss closing-cost credit availability for 45-day closings.',
    ],
    mailSubject: 'Ambridge Bolton Plan 2 Lot 21 Tour Request',
  },
  {
    slug: 'serenata-lot-65',
    community: 'Serenata at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Mateo Plan 1',
    lot: 'Lot 65',
    status: 'Quick Move In',
    price: '$559,777',
    beds: '4 Beds',
    baths: '3 Baths',
    garage: '2 Garage',
    squareFeet: '2,631 Sq Ft',
    description:
      'Mateo Plan 1 balances multi-generational comfort with a main-floor guest suite and spacious upstairs loft.',
    highlights: [
      'Guest suite on first floor with adjacent full bath',
      'Gourmet kitchen featuring built-in appliances and upgraded cabinetry',
      'Primary suite with balcony access and oversized walk-in closet',
    ],
    conciergeNotes: [
      'Verify completion of backyard landscape allowance prior to closing.',
      'Schedule final walk with Dr. Duffy to review builder punch lists.',
    ],
    mailSubject: 'Serenata Mateo Plan 1 Lot 65 Tour Request',
  },
  {
    slug: 'adair-lot-42',
    community: 'Adair at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Nolan Plan 1',
    lot: 'Lot 42',
    status: 'Quick Move In',
    price: '$589,777',
    beds: '4 Beds',
    baths: '3 Baths',
    garage: '3 Garage',
    squareFeet: '2,769 Sq Ft',
    description:
      'Nolan Plan 1 showcases three-car garage storage, a spacious great room, and a sophisticated primary retreat.',
    highlights: [
      'Kitchen with double ovens, upgraded hood, and walk-in pantry',
      'Flexible loft for media, playroom, or homework hub',
      'Primary bath featuring extended shower and dual vanities',
    ],
    conciergeNotes: [
      'Discuss exterior paint scheme options with HOA prior to modifications.',
      'Review extended warranty coverage on included systems.',
    ],
    mailSubject: 'Adair Nolan Plan 1 Lot 42 Tour Request',
  },
  {
    slug: 'lyra-lot-86',
    community: 'Lyra Collection I at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Leo Plan 7',
    lot: 'Lot 86',
    status: 'Quick Move In',
    price: '$599,777',
    beds: '4 Beds',
    baths: '3 Baths',
    garage: '2 Garage',
    squareFeet: '2,752 Sq Ft',
    description:
      'Leo Plan 7 pairs a dramatic two-story foyer with flexible living spaces and a covered patio ideal for desert evenings.',
    highlights: [
      'Kitchen includes stacked cabinets, quartz counters, and GE Profile appliances',
      'Main-floor guest suite and upstairs loft for versatility',
      'Primary suite features balcony and spa-inspired bath',
    ],
    conciergeNotes: [
      'Plan Sunstone amenity tours to experience trail network and events.',
      'Coordinate HOA compliance for outdoor upgrades.',
    ],
    mailSubject: 'Lyra Leo Plan 7 Lot 86 Tour Request',
  },
  {
    slug: 'lyra-lot-16',
    community: 'Lyra Collection I at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Altair Plan 6',
    lot: 'Lot 16',
    status: 'Quick Move In',
    price: '$599,777',
    beds: '4 Beds',
    baths: '3 Baths',
    garage: '2 Garage',
    squareFeet: '2,559 Sq Ft',
    description:
      'Altair Plan 6 showcases indoor-outdoor connection with a multi-slide door, large loft, and energy-smart construction.',
    highlights: [
      'Kitchen with waterfall quartz island and walk-in pantry',
      'Downstairs bedroom and full bath for guests or multi-gen living',
      'Primary suite highlighted by coffered ceiling and luxe bath finishes',
    ],
    conciergeNotes: [
      'Schedule Sunstone community orientation with Dr. Duffy.',
      'Discuss builder’s included solar and energy monitoring features.',
    ],
    mailSubject: 'Lyra Altair Plan 6 Lot 16 Tour Request',
  },
  {
    slug: 'lyra-lot-90',
    community: 'Lyra Collection I at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Nova Plan 4',
    lot: 'Lot 90',
    status: 'Quick Move In',
    price: '$614,777',
    beds: '4 Beds',
    baths: '3 Baths',
    garage: '2 Garage',
    squareFeet: '2,601 Sq Ft',
    description:
      'Nova Plan 4 delivers sunlit living with a grand great room, generous dining nook, and a sophisticated primary suite.',
    highlights: [
      'KitchenAid appliance package with gas cooktop and chimney hood',
      'Upstairs loft and tech niche for study or gaming',
      'Backyard features covered patio with paver extension',
    ],
    conciergeNotes: [
      'Work with Dr. Duffy on appraisal support for Sunstone comps.',
      'Arrange final orientation walkthrough with builder superintendent.',
    ],
    mailSubject: 'Lyra Nova Plan 4 Lot 90 Tour Request',
  },
  {
    slug: 'capella-lot-93',
    community: 'Capella at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Aries Plan 1',
    lot: 'Lot 93',
    status: 'Quick Move In',
    price: '$629,777',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,970 Sq Ft',
    description:
      'Single-story Aries plan featuring airy great room living, a gourmet kitchen, and private primary suite with backyard views.',
    highlights: [
      'Kitchen with extended cabinetry, quartz counters, and pendant lighting',
      'Flex room that functions as study, lounge, or hobby zone',
      'Covered patio with gas stub ready for outdoor kitchen',
    ],
    conciergeNotes: [
      'Compare incentives against Lot 49 to choose best closing window.',
      'Review Sunstone HOA design guidelines for yard personalization.',
    ],
    mailSubject: 'Capella Aries Plan 1 Lot 93 Tour Request',
  },
  {
    slug: 'adair-lot-34',
    community: 'Adair at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Emery Plan 3',
    lot: 'Lot 34',
    status: 'Quick Move In',
    price: '$639,777',
    beds: '4 Beds',
    baths: '3.5 Baths',
    garage: '3 Garage',
    squareFeet: '2,935 Sq Ft',
    description:
      'Emery Plan 3 offers expansive living with a formal dining space, loft, and luxe primary suite with dual closets.',
    highlights: [
      'Kitchen boasts double islands and built-in stainless appliances',
      'First-floor guest suite with private bath',
      'Loft with media-ready wiring and built-in storage',
    ],
    conciergeNotes: [
      'Coordinate three-car garage inspection for EV charger readiness.',
      'Discuss extended close date options with builder sales.',
    ],
    mailSubject: 'Adair Emery Plan 3 Lot 34 Tour Request',
  },
  {
    slug: 'adair-lot-61',
    community: 'Adair at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Marlowe Plan 2',
    lot: 'Lot 61',
    status: 'Quick Move In',
    price: '$639,777',
    beds: '4 Beds',
    baths: '3.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,829 Sq Ft',
    description:
      'Marlowe Plan 2 features a dramatic entry, open kitchen, and pocket office plus an upstairs loft perfect for work or play.',
    highlights: [
      'Kitchen with upgraded tile backsplash and butler pantry',
      'Pocket office tucked off great room for productive focus',
      'Primary suite includes oversized shower and soaking tub',
    ],
    conciergeNotes: [
      'Ask about landscaping vouchers in Cadence for rear yard completion.',
      'Review builder warranty orientation schedule with Dr. Duffy.',
    ],
    mailSubject: 'Adair Marlowe Plan 2 Lot 61 Tour Request',
  },
  {
    slug: 'adair-lot-32',
    community: 'Adair at Cadence',
    city: 'Henderson',
    collection: 'Move-In Ready Collection',
    planName: 'Marlowe Plan 2',
    lot: 'Lot 32',
    status: 'Quick Move In',
    price: '$644,777',
    beds: '4 Beds',
    baths: '3.5 Baths',
    garage: '2 Garage',
    squareFeet: '2,829 Sq Ft',
    description:
      'Another beautifully curated Marlowe Plan 2 showcasing modern finishes, a generous loft, and spacious secondary bedrooms.',
    highlights: [
      'Extended kitchen island and walk-in pantry with custom shelving',
      'Loft configured with tech desk alcove',
      'Primary retreat with balcony access and spa-inspired bath',
    ],
    conciergeNotes: [
      'Compare lot orientation and privacy with Lot 61 before deciding.',
      'Confirm closing timelines align with move plans.',
    ],
    mailSubject: 'Adair Marlowe Plan 2 Lot 32 Tour Request',
  },
  {
    slug: 'capella-lot-49',
    community: 'Capella at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Aries Plan 1',
    lot: 'Lot 49',
    status: 'Quick Move In',
    price: '$648,370',
    beds: '3 Beds',
    baths: '2.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,970 Sq Ft',
    description:
      'Aries Plan 1 with enhancements including upgraded flooring, appliance package, and a backyard ready for entertaining.',
    highlights: [
      'Kitchen includes gourmet appliance set and expanded cabinetry',
      'Luxury vinyl plank throughout main living spaces',
      'Primary bath upgraded with frameless shower enclosure',
    ],
    conciergeNotes: [
      'Review builder incentives for 30-day close on Lot 49.',
      'Plan Sunstone orientation walk with Dr. Duffy for amenity overview.',
    ],
    mailSubject: 'Capella Aries Plan 1 Lot 49 Tour Request',
  },
  {
    slug: 'vireo-lot-10',
    community: 'Vireo at Summerlin',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Laurel Plan 5',
    lot: 'Lot 10',
    status: 'Quick Move In',
    price: '$675,777',
    beds: '3 Beds',
    baths: '3.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,845 Sq Ft',
    description:
      'Laurel Plan 5 is a three-story townhome offering rooftop living, elevator-ready design, and a sophisticated kitchen.',
    highlights: [
      'Third-floor deck with Strip views and outdoor gas stub',
      'Kitchen with quartz counters, waterfall edge, and GE Cafe appliances',
      'Primary suite on its own level for privacy and quiet',
    ],
    conciergeNotes: [
      'Coordinate Summerlin HOA approvals for rooftop furnishings.',
      'Discuss available rate lock programs for townhome purchases.',
    ],
    mailSubject: 'Vireo Laurel Plan 5 Lot 10 Tour Request',
  },
  {
    slug: 'vireo-lot-76',
    community: 'Vireo at Summerlin',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Acacia Plan 3',
    lot: 'Lot 76',
    status: 'Quick Move In',
    price: '$679,777',
    beds: '2 Beds',
    baths: '3.5 Baths',
    garage: '2 Garage',
    squareFeet: '1,899 Sq Ft',
    description:
      'Acacia Plan 3 delivers elevator-ready convenience, dual primary suites, and full-floor entertaining on level three.',
    highlights: [
      'Gourmet kitchen with designer backsplash and beverage center',
      'Two primary suites each with luxurious baths',
      'Top-floor great room and deck crafted for sunset gatherings',
    ],
    conciergeNotes: [
      'Ask about furniture packages designed for Vireo models.',
      'Plan a Summerlin village tour to explore nearby amenities.',
    ],
    mailSubject: 'Vireo Acacia Plan 3 Lot 76 Tour Request',
  },
  {
    slug: 'lyra2-lot-91',
    community: 'Lyra Collection II at Sunstone',
    city: 'Las Vegas',
    collection: 'Move-In Ready Collection',
    planName: 'Ember Plan 2',
    lot: 'Lot 91',
    status: 'Quick Move In',
    price: '$749,777',
    beds: '4 Beds',
    baths: '3.5 Baths',
    garage: '3 Garage',
    squareFeet: '3,036 Sq Ft',
    description:
      'Ember Plan 2 is a spacious two-story with three-car garage, expansive kitchen, and a second-floor retreat.',
    highlights: [
      'Kitchen showcases double islands, quartz counters, and pro appliances',
      'Main-floor suite ideal for multi-gen living',
      'Primary bath upgraded with freestanding tub and rain shower',
    ],
    conciergeNotes: [
      'Schedule Sunstone home orientation to cover HOA resources.',
      'Coordinate lender appraisal with support from Dr. Duffy.',
    ],
    mailSubject: 'Lyra Ember Plan 2 Lot 91 Tour Request',
  },
]

export function getMoveInReadyHomeBySlug(slug: string) {
  return moveInReadyHomes.find((home) => home.slug === slug)
}

