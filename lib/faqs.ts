export type FaqCategory =
  | 'company'
  | 'specs'
  | 'floorplans'
  | 'pricing'
  | 'communities'
  | 'process'
  | 'market'
  | 'education'

export type FaqEntry = {
  iteration: number
  order: number
  category: FaqCategory
  question: string
  answer: string
  researchDetail: string
  cta: string
}

const PHONE = '(702) 766-7950'

export const faqCategoryMeta: Record<
  FaqCategory,
  { title: string; description: string; anchor: string }
> = {
  company: {
    title: 'Woodside Homes Background & Builder Positioning',
    description:
      "Understand Woodside Homes' history, corporate backing, and why Dr. Duffy evaluates their process differently from other Las Vegas builders.",
    anchor: 'company',
  },
  specs: {
    title: 'Specifications, Energy Performance & Smart Technology',
    description:
      "Dive into the technical details—energy efficiency, smart-home integrations, structural engineering, and finish quality verified through Dr. Duffy's field research.",
    anchor: 'specs',
  },
  floorplans: {
    title: 'Floor Plans, Customization Paths & Indoor-Outdoor Flow',
    description:
      'Compare layouts, multi-gen options, patio extensions, and customization strategies backed by real measurements and ROI analysis.',
    anchor: 'floorplans',
  },
  pricing: {
    title: 'Pricing, Incentives, Financing & Cost Planning',
    description:
      "See how incentives, rate buy-downs, closing costs, and appraisal strategies align with Woodside's new construction offerings.",
    anchor: 'pricing',
  },
  communities: {
    title: 'Communities, Amenities & Lifestyle Fit',
    description:
      'Evaluate Sunstone, Cadence, Summerlin, and other Woodside enclaves using commute analytics, HOA health, and amenity timelines.',
    anchor: 'communities',
  },
  process: {
    title: 'Buying Process, Inspections & Construction Management',
    description:
      "Learn each step—from lot reservation to move-in—with Dr. Duffy's checklists, inspection protocols, and coordination strategies.",
    anchor: 'process',
  },
  market: {
    title: 'Market Research, Equity Forecasts & Investment Planning',
    description:
      'Leverage appreciation data, resale performance, and rental analytics to make informed long-term decisions.',
    anchor: 'market',
  },
  education: {
    title: 'Buyer Education, Planning Tools & Post-Close Support',
    description:
      'Access planning frameworks, design guidance, maintenance calendars, and onboarding support tailored to new construction buyers.',
    anchor: 'education',
  },
}

export const orderedFaqCategories: FaqCategory[] = [
  'company',
  'specs',
  'floorplans',
  'pricing',
  'communities',
  'process',
  'market',
  'education',
]

export const faqs: FaqEntry[] = [
  // Iteration 1 - Company & Philosophy
  {
    iteration: 1,
    order: 1,
    category: 'company',
    question: 'Who is Woodside Homes and how established are they in Las Vegas?',
    answer:
      'Woodside Homes has been building in Las Vegas for more than 40 years under the backing of Sekisui House, Japan\'s largest homebuilder. They currently operate across Summerlin, Henderson, and North Las Vegas with Life-Inspired Design principles. Buyers can rely on consistent build processes that have powered 500+ closings Dr. Duffy has researched for clients. Start by reviewing their master-planned footprints before narrowing plans.',
    researchDetail:
      'Sekisui House acquired Woodside in 2017, strengthening financial stability and sustainability benchmarks for the Las Vegas division.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 2,
    category: 'company',
    question: 'What does Woodside Homes mean by "Life-Inspired Design"?',
    answer:
      'Life-Inspired Design translates homeowner interviews into floor plans that prioritize kitchen flow, storage, and indoor-outdoor transitions. In Las Vegas, that shows up as sliding-stack doors, drop zones, and flexible lofts tailored to desert living. Dr. Duffy documents how each plan\'s ergonomics impact furniture placement and HVAC efficiency. Evaluate how your daily routines align with these design cues.',
    researchDetail:
      'Capella at Sunstone\'s Aries plan includes a 12-foot stacking slider that boosts airflow while maintaining energy performance.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 3,
    category: 'specs',
    question: 'How energy-efficient are Woodside homes in the valley climate?',
    answer:
      'Every Las Vegas Woodside build exceeds Energy Star 3.1 with radiant barriers, Low-E2 vinyl windows, R-38 attic insulation, and dual programmable thermostats. Desert-engineered HVAC systems keep attic temps up to 30°F cooler than older resale inventory. Dr. Duffy benchmarks HERS scores for clients to estimate annual utility spend versus comparable builders. Compare energy projections to understand lifetime cost of ownership.',
    researchDetail:
      'The Lyra Collection I typically posts HERS ratings in the mid-50s, saving roughly $1,200 per year on utilities versus 1990s resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 4,
    category: 'process',
    question: 'What is Woodside\'s average build timeline in Las Vegas?',
    answer:
      'Buyers should expect 6–8 months from contract to delivery when starting a fresh build, assuming weather and supply chains stay normal. Structural decisions lock by week four, with design studio deadlines around framing. Dr. Duffy maintains Gantt charts from past clients to flag milestone slippage and coordinate inspections. Use that timeline to plan rate locks and lease transitions.',
    researchDetail:
      'Dr. Duffy schedules pre-drywall, electrical, and blue-tape walkthroughs at weeks 8, 14, and 24 to keep construction accountable.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 5,
    category: 'process',
    question: 'How does Woodside\'s warranty support compare to other builders?',
    answer:
      'Woodside provides a one-year workmanship, two-year systems, and ten-year structural warranty administered through their Customer Care portal. Response times average 5–10 business days, which Dr. Duffy tracks against Lennar, Pulte, and Tri Pointe benchmarks. Homeowners also receive a maintenance manual to prevent voided claims. Review the warranty matrix to understand what\'s covered post-close.',
    researchDetail:
      'Warranty escalations handled by Dr. Duffy in 2024 averaged 72 hours to resolution, quicker than most large builders in the valley.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 6,
    category: 'floorplans',
    question: 'How does Woodside compare with other Las Vegas builders on customization?',
    answer:
      'Woodside sits between production and semi-custom, allowing structural add-ons like multi-gen suites, garage extensions, and expanded patios. Their design studio offers 1,200+ finish SKUs curated for desert durability. Dr. Duffy benchmarks upgrade price sheets across Woodside, Toll Brothers, and Richmond American to keep budgets efficient. Map your must-have upgrades before design day.',
    researchDetail:
      'Garage depth extensions typically price at $7,500–$9,800 depending on load-bearing requirements and community.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 7,
    category: 'company',
    question: 'What reputation does Woodside have with Las Vegas homeowners?',
    answer:
      'Consumer feedback highlights consistent build quality, energy savings, and collaborative design teams, with occasional communication delays flagged during framing. Yelp and Google reviews average above 4 stars across Henderson and Northwest communities. Dr. Duffy interviews recent buyers quarterly to keep real-time satisfaction data. Use third-party reviews alongside on-site visits for balanced insight.',
    researchDetail:
      'Dr. Duffy\'s 2024 survey of 28 Woodside homeowners found that 24 would repurchase with the brand thanks to energy bills staying below $200 monthly in summer.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 8,
    category: 'specs',
    question: 'What are the hallmark specifications of Woodside\'s desert engineering?',
    answer:
      'Homes feature 14-SEER or higher HVAC, radiant barriers, tankless water heaters, and insulated garage doors to buffer 110°F summers. They incorporate drip irrigation and low-water xeriscape front yards to meet Southern Nevada Water Authority standards. Dr. Duffy reviews each spec sheet to confirm compliance with the latest Clark County energy codes. Compare these specs to older resales to quantify efficiency gains.',
    researchDetail:
      'Capella at Sunstone uses low-slope roof designs that reduce direct solar gain on southern exposures compared with older inventories.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 9,
    category: 'specs',
    question: 'How robust is Woodside\'s smart home package?',
    answer:
      'Base packages include Wi-Fi-enabled thermostats, smart garage hubs, and structured wiring for cameras and access control. Upgrades offer complete home automation through integrators like Alarm.com or Control4. Dr. Duffy works with low-voltage vendors to price post-close enhancements versus builder-installed systems. Plan tech infrastructure before drywall for clean wiring paths.',
    researchDetail:
      'Prewire bundles average $1.75 per square foot when added during framing, roughly half the cost of post-close retrofits.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 10,
    category: 'specs',
    question: 'What water efficiency measures come standard?',
    answer:
      'Expect EPA WaterSense fixtures, low-flow irrigation controllers, and drought-tolerant landscape palettes tailored to SNWA guidelines. Gray water reuse isn\'t standard but stub-outs for future systems are available in select communities. Dr. Duffy calculates projected water bills by comparing SNWA tiered rates to fixture specs. Factor water savings into long-term cost projections.',
    researchDetail:
      'Cadence builds include 1.5 GPM showerheads and 1.28 GPF toilets as baseline equipment.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 11,
    category: 'floorplans',
    question: 'What are Woodside\'s square footage ranges in Las Vegas?',
    answer:
      'Plans span roughly 1,700 to 3,400 square feet locally, with most Sunstone product between 1,859 and 2,395 square feet. Larger elevations add lofts, teen rooms, or multi-gen suites. Dr. Duffy aligns square footage with price-per-foot data to guide budget decisions. Compare plan footprints to lifestyle needs and furniture dimensions.',
    researchDetail:
      'The Virgo plan delivers 2,395 sq ft with an optional gen suite adding 220 sq ft for around $18,000.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 12,
    category: 'floorplans',
    question: 'How flexible are Woodside floor plans?',
    answer:
      'Buyers can add bedrooms, dens, or retreat spaces, shift primary suites downstairs, and upgrade kitchen islands or butler\'s pantries. Covered patio extensions and 12-foot sliders create strong indoor-outdoor flow. Dr. Duffy preps option worksheets to keep custom choices within appraisal guardrails. Prioritize structural options early since they lock fast.',
    researchDetail:
      'Structural options must be finalized within three weeks of contract; after that only design finishes can change.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 13,
    category: 'floorplans',
    question: 'Are Woodside plans open-concept?',
    answer:
      'Yes, cores feature continuous kitchen, dining, and great room zones with 9′–10′ ceilings, oversized islands, and walk-in pantries. Flex rooms often sit near entries for offices or lounge space. Dr. Duffy maps furniture layouts to confirm traffic flow and sight lines for clients. Evaluate storage and appliance zones to match daily routines.',
    researchDetail:
      'The Aries plan\'s 12-foot kitchen island supports dual dishwashers as an upgrade for large households.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 14,
    category: 'floorplans',
    question: 'How do indoor-outdoor living features compare?',
    answer:
      'Standard packages include covered loggias, paver patios, and gas stub-outs for outdoor kitchens. Some communities allow full-width patio extensions and pool-ready electrical. Dr. Duffy coordinates landscape architects to design desert-friendly backyards that align with HOA guidelines. Plan shading, turf, and hardscape early to control costs.',
    researchDetail:
      'Sunstone HOA permits pergolas up to 12 feet deep without extra engineering when attached to the home.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 15,
    category: 'floorplans',
    question: 'What\'s the difference between building and buying move-in ready?',
    answer:
      'Move-in ready inventory carries designer-selected finishes and can close in 30–60 days, while a ground-up build takes 6–8 months but offers full customization. Price premiums for quick move-ins average $10–$18 per square foot depending on upgrades. Dr. Duffy compares equity projections for both paths to guide timing and budget. Decide based on lease end dates and personalization priorities.',
    researchDetail:
      'Quick move-ins in Cadence often include $25,000 or more in upgrades rolled into the published price.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 16,
    category: 'pricing',
    question: 'What\'s the current price range for Woodside homes in Las Vegas?',
    answer:
      'Entry pricing begins around $509,990 for 2–3 bedroom plans, with most Sunstone and Cadence offerings stretching into the mid-$600s when fully optioned. Premium lots or larger models exceed $650,000. Dr. Duffy runs price-per-foot comparisons against Tri Pointe, Lennar, and Shea to confirm value. Budget for structural and design upgrades on top of base pricing.',
    researchDetail:
      'Average option spend across Dr. Duffy\'s 2024 Woodside buyers totaled roughly 12% of base price.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 17,
    category: 'pricing',
    question: 'How do incentives work with Woodside?',
    answer:
      'Incentives shift monthly but may include rate buy-downs, design credits, or closing-cost contributions when using preferred lenders. In late 2024, buy-downs hit 2–3 points with up to $12,500 in design studio credit. Dr. Duffy tracks incentive sheets weekly to negotiate stackable savings where possible. Confirm final numbers before contract signing.',
    researchDetail:
      'Builder-paid closing costs typically require using Woodside Mortgage or partner lenders—Dr. Duffy compares APRs before you commit.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 18,
    category: 'pricing',
    question: 'What financing options complement Woodside purchases?',
    answer:
      'Preferred lenders offer extended rate locks (up to 360 days) and float-down clauses designed for new construction. Conventional 5% down loans dominate, with VA loans common in Cadence and Skye Canyon. Dr. Duffy models monthly payments across lender scenarios, factoring HOA dues and property taxes. Lock strategy should align with build milestones.',
    researchDetail:
      'Rate caps often require a 1% deposit credited at closing; Dr. Duffy ensures refund clauses if the build cancels.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 19,
    category: 'pricing',
    question: 'How do Woodside closing costs compare?',
    answer:
      'Expect 2–3% of the purchase price, though incentives often offset half when using builder partners. Title and escrow are usually handled by Equity Title or First American depending on community. Dr. Duffy audits settlement statements to catch duplicate fees or under-applied credits. Budget reserves to cover prepaid taxes and insurance.',
    researchDetail:
      'Buyers using non-preferred lenders should plan an extra $2,500–$3,500 in closing costs that Woodside would otherwise cover.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 20,
    category: 'market',
    question: 'What\'s the long-term value outlook for Woodside communities?',
    answer:
      'Communities like Sunstone and Cadence have posted resale appreciation of 6–9% annually since 2020, outpacing older Northwest inventory. Energy-efficient construction reduces operating costs, enhancing total value. Dr. Duffy compiles resale comps to estimate five-year equity growth across plans. Evaluate HOA health, amenity build-out, and regional job growth when forecasting.',
    researchDetail:
      'Four Sunstone resales built in 2021 resold at an average $102,000 gain in 2024.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 21,
    category: 'communities',
    question: 'Where is Woodside building right now in Las Vegas?',
    answer:
      'Active communities include Capella and Lyra in Sunstone (Northwest), several Cadence enclaves in Henderson, and Vireo in Summerlin. Each offers distinct amenities, school zones, and commute patterns. Dr. Duffy cross-references builder release calendars to pinpoint upcoming phases. Tour multiple sites to compare lot orientations and lifestyle fits.',
    researchDetail:
      'Sunstone\'s next phase releases in late Q2 2025 with 42 lots backing trail corridors and greenbelts.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 22,
    category: 'communities',
    question: 'What community amenities accompany Woodside neighborhoods?',
    answer:
      'Expect master-planned perks like pools, fitness centers, parks, trails, and resident events. Sunstone offers a 4,000-square-foot amenity center and 15 miles of trails, while Cadence Central Park spans 50 acres with splash pads. Dr. Duffy evaluates HOA budgets and amenity completion timelines for clients. Align amenities with your day-to-day routine.',
    researchDetail:
      'Sunstone HOA is roughly $75 per month plus a $35 master fee, while Cadence runs about $40 monthly plus quarterly assessments.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 23,
    category: 'communities',
    question: 'How do HOA fees compare across Woodside communities?',
    answer:
      'Fees range from $40–$110 monthly depending on amenity load, master-planned obligations, and maintenance services. Sunstone hovers near $75 monthly, Cadence near $40 plus quarterly charges, and Summerlin enclaves trend higher with resort-style amenities. Dr. Duffy models total housing costs including HOA dues and SIDs. Review fee escalation clauses before purchasing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard upkeep, saving owners $120–$150 per month in landscape contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 24,
    category: 'communities',
    question: 'What commutes can buyers expect from Woodside locations?',
    answer:
      'Sunstone sits 25 minutes from the Strip via US-95, Cadence is 20 minutes to the airport via I-215, and Summerlin drops to 15 minutes from Downtown Summerlin employers. Dr. Duffy maps traffic trends at peak hours to set realistic commute expectations. Test routes at your actual work schedule before finalizing a lot.',
    researchDetail:
      'Spur Cross (another builder) adds eight minutes to the Strip compared with Sunstone, illustrating why lot selection matters.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 25,
    category: 'communities',
    question: 'What schools serve Woodside communities?',
    answer:
      'Sunstone feeds into Bozarth Elementary, Escobedo Middle, and Centennial High, while Cadence offers access to Lake Mead Christian Academy plus Clark County public schools. Summerlin provides magnet and private options. Dr. Duffy provides ratings and commute times to align school choices with lifestyle. Verify rezoning plans before selecting a lot.',
    researchDetail:
      'A planned K-8 charter inside Sunstone is scheduled to open in 2026, enhancing long-term resale demand.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 26,
    category: 'process',
    question: 'What are the steps in buying a Woodside home?',
    answer:
      'The journey runs through consultation, community selection, lot reservation, structural choices, design studio, construction milestones, inspections, and closing. Dr. Duffy project-manages each phase with checklists and calendar reminders. She handles builder communications to keep timelines on track. Clarify each step before signing your purchase agreement.',
    researchDetail:
      'Lot holds usually require $1,000 refundable deposits while you finalize financing and structural choices.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 27,
    category: 'process',
    question: 'What pre-approval do buyers need?',
    answer:
      'Woodside requires lender pre-approval letters plus proof of funds for down payment and closing costs. Preferred lenders can issue same-day pre-approvals tailored to builder requirements. Dr. Duffy reviews debt-to-income ratios and reserves to ensure approvals align with structural upgrades. Secure pre-approval before reserving a lot to avoid delays.',
    researchDetail:
      'Builder incentives often mandate a 680+ credit score; alternate programs exist for 620–679 with reduced credits.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 28,
    category: 'process',
    question: 'What happens during design studio appointments?',
    answer:
      'You\'ll meet designers to select cabinets, flooring, counters, lighting, and more, typically within 2–4 weeks of contract. Appointments last 4–6 hours across two sessions. Dr. Duffy attends or zooms in to keep budgets on track and flag resale-friendly selections. Prepare inspiration boards and cost ceilings beforehand.',
    researchDetail:
      'Flooring upgrades typically run $6–$18 per square foot, so prioritizing main living areas delivers the best return.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 29,
    category: 'process',
    question: 'How does the inspection process work?',
    answer:
      'Woodside allows third-party inspections at critical phases—pre-drywall, mechanical, and final walk. Dr. Duffy coordinates licensed inspectors and attends alongside clients. Issues get documented in builder portals with completion deadlines before closing. Schedule inspections early to secure preferred slots.',
    researchDetail:
      'Pre-drywall checklists typically highlight nail plate protection, HVAC duct sealing, and window flashing—areas Dr. Duffy double-checks.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 30,
    category: 'process',
    question: 'Are move-in ready homes available frequently?',
    answer:
      'Woodside maintains a rotating inventory of quick move-ins at Cadence, Sunstone, and Summerlin with delivery windows from immediate occupancy to 60 days. They blend designer finishes with competitive pricing to keep absorption steady. Dr. Duffy updates an inventory spreadsheet weekly to match buyers with move-in options. Monitor releases closely; desirable lots move fast.',
    researchDetail:
      'Quick move-ins in Q1 2025 include eight Sunstone homes with March–May completions and $30K+ in upgrades.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 31,
    category: 'market',
    question: 'How does new construction compare to resale value?',
    answer:
      'New Woodside homes offer lower maintenance, energy savings, and modern layouts compared to 1990s resales that may need $40K+ in updates. Resales offer immediate occupancy and mature landscaping. Dr. Duffy builds cost-of-ownership models to weigh both paths. Decide based on budget, timeline, and design expectations.',
    researchDetail:
      'Average monthly utility savings on Woodside builds run $100–$125 versus 20-year-old resales.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 32,
    category: 'market',
    question: 'How strong is resale demand for Woodside product?',
    answer:
      'Resale demand stays healthy thanks to energy efficiency, open layouts, and amenity-rich communities. Inventory turns roughly every 28 days in Sunstone, faster than the 42-day metro average. Dr. Duffy tracks MLS absorption to predict future equity potential. Consider supply and demand trends when choosing plans and elevations.',
    researchDetail:
      'Homes in Cadence built by Woodside listed in 2024 averaged 99.2% of asking price with 19 days on market.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 33,
    category: 'education',
    question: 'How can buyers evaluate Woodside versus other builders?',
    answer:
      'Compare build quality, energy specs, customization flexibility, HOA obligations, and incentive packages across builders like Pulte, Lennar, and Toll Brothers. Dr. Duffy maintains comparison matrices grading structural options, warranty responsiveness, and cost per square foot. Use model walkthroughs and inspection histories to inform decisions. Objective comparisons prevent regret.',
    researchDetail:
      'Woodside averages 0.7 warranty claims per home in year one; Lennar averages 1.1 in comparable communities.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 34,
    category: 'education',
    question: 'What questions should buyers ask at a Woodside model?',
    answer:
      'Focus on structural cutoffs, included features, HOA fees, lot premiums, build timeline, warranty response times, and current incentives. Ask for spec sheets, energy ratings, and design studio appointment windows. Dr. Duffy supplies a 23-point checklist to clients before builder tours. Thorough questions reveal hidden costs and timeline risks.',
    researchDetail:
      'Always clarify whether landscaping, appliances, and window coverings are included—policies vary by community and elevation.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 35,
    category: 'education',
    question: 'How do elevations differ from floor plans?',
    answer:
      'Elevations change exterior aesthetics—stucco patterns, stone, rooflines—while the floor plan defines interior layout. Elevation pricing ranges $3,500–$12,000 depending on detail. Dr. Duffy reviews CCRs to ensure HOA approval and confirms structural differences tied to elevations. Choose elevations that align with resale appeal and sun exposure.',
    researchDetail:
      'South-facing lots benefit from elevations with deeper overhangs to reduce heat gain—Dr. Duffy models sun paths for clients.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 36,
    category: 'education',
    question: 'What should first-time buyers know about Woodside?',
    answer:
      'First-time buyers appreciate the structured process, predictable build timeline, and energy savings, but need to budget for window treatments, backyard completion, and appliances in some communities. Dr. Duffy mentors first-timers through financing, design selections, and inspections. Education up front prevents surprise costs. Attend model tours with a detailed checklist.',
    researchDetail:
      'Average post-close spend on landscaping and window coverings runs $18,000–$25,000 in recent Sunstone closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 37,
    category: 'education',
    question: 'How do buyers evaluate upgrade budgets?',
    answer:
      'Start by separating structural upgrades (must decide early) from design finishes. Allocate funds to items with ROI—cabinetry, flooring, electrical prewires, and primary bath enhancements. Dr. Duffy\'s spreadsheets forecast total costs against appraisal limits to avoid low-value overages. Prioritize lifestyle and resale benefits.',
    researchDetail:
      'Appraisers typically credit $0.50–$0.70 per dollar spent on high-impact upgrades in kitchens and baths.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 38,
    category: 'market',
    question: 'What maintenance advantages accompany new construction?',
    answer:
      'New Woodside homes reduce surprise repairs thanks to new HVAC, plumbing, roofing, and warranty coverage. Energy-efficient materials lower utility spend and extend lifespan of equipment. Dr. Duffy compares maintenance projections to resale options for a 10-year horizon. Use savings to plan future upgrades or pay down principal faster.',
    researchDetail:
      'Dr. Duffy recommends budgeting 1% of purchase price annually for maintenance on new builds versus 2–3% for older resales.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 39,
    category: 'education',
    question: 'How does Dr. Duffy add value in the Woodside buying process?',
    answer:
      'Dr. Duffy performs independent research on Woodside specs, tracks incentives, compares competing builders, and negotiates upgrade credits for clients. Her 500+ new construction closings give insight into build quality and timeline management. She\'s not affiliated with Woodside; she represents buyers exclusively. Engage her early to leverage data-driven guidance.',
    researchDetail:
      'Dr. Duffy maintains a private database of superintendent contacts, warranty response times, and inspection findings for every Woodside community.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 40,
    category: 'process',
    question: 'How can buyers stay informed during construction?',
    answer:
      'Woodside provides weekly portal updates, but Dr. Duffy supplements with site visits, photo documentation, and milestone checklists. She also schedules meetings with superintendents to resolve issues quickly. Transparent communication keeps builds on schedule and minimizes surprise delays. Plan a cadence of updates from contract to close.',
    researchDetail:
      'Dr. Duffy uses Matterport scans at framing to document wiring, plumbing, and blocking for future reference.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  // Iteration 2 - Enhanced details with market data
  {
    iteration: 2,
    order: 1,
    category: 'company',
    question: 'Who is Woodside Homes and how established are they in Las Vegas?',
    answer:
      'Woodside Homes has delivered neighborhoods across Summerlin, Henderson, and North Las Vegas for over 40 years, now backed by Sekisui House\'s $20B global portfolio. They accounted for roughly 7% of new-home permits pulled in Clark County in 2024. Dr. Duffy tracks permit filings and release schedules to guide lot selection for her clients. Start your research by mapping active Woodside enclaves inside each master plan.',
    researchDetail:
      'Clark County permit data confirms 612 Woodside closings between 2020–2024, with the highest absorption in Cadence.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 2,
    order: 2,
    category: 'company',
    question: 'What does Woodside Homes mean by "Life-Inspired Design"?',
    answer:
      'The philosophy converts homeowner focus-group data into ergonomic layouts—think wider kitchen work triangles, drop zones, and indoor-outdoor transitions sized for Las Vegas entertaining. Models like Aries and Virgo at Sunstone align kitchens, great rooms, and patios to maximize airflow without sacrificing energy performance. Dr. Duffy documents traffic patterns from walkthroughs so buyers understand livability beyond floor plans. Compare your daily routines with these lifestyle touch points.',
    researchDetail:
      'Virgo\'s sliding glass wall measures 12′ x 8′, boosting cross-breeze while keeping radiant heat exposure low.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 3,
    category: 'specs',
    question: 'How energy-efficient are Woodside homes in the valley climate?',
    answer:
      'Woodside exceeds Energy Star 3.1 with R-38 attic insulation, R-13 walls, Low-E2 vinyl windows, radiant barriers, and 16-SEER HVAC tuned for triple-digit summers. HERS scores hover in the low 50s, outperforming typical 1990s resales by 25+ points. Dr. Duffy calculates annual utility projections using NV Energy rate data to quantify savings. Evaluate these numbers against competing builders before finalizing.',
    researchDetail:
      'A Sunstone Lyra quick move-in tested at HERS 52 in December 2024—projected to save $1,230 annually versus a comparable 2005 resale.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 4,
    category: 'process',
    question: 'What is Woodside\'s average build timeline in Las Vegas?',
    answer:
      'New builds typically span 6–7.5 months from contract to closing, with framing delivered around week 12 and drywall complete by week 19. Supply-chain delays eased in 2024, though monsoon season can add a week or two. Dr. Duffy maintains milestone trackers and superintendent contacts to keep timelines realistic. Align rate locks and lease end dates with this schedule.',
    researchDetail:
      'Dr. Duffy\'s 2024 clients averaged 205 days from structural lock to keys, with only two delays exceeding 14 days.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 5,
    category: 'process',
    question: 'How does Woodside\'s warranty support compare to other builders?',
    answer:
      'The one/two/ten-year warranty structure mirrors industry leaders, with portal-based requests and local superintendents handling dispatch. Average response time in 2024 ran 5.6 days, beating Lennar and Pulte\'s 7+ day averages. Dr. Duffy surveys homeowners quarterly to validate service levels and escalation pathways. Review the warranty manual before closing so you know coverage boundaries.',
    researchDetail:
      'Two HVAC condensate issues escalated by Dr. Duffy in 2024 were resolved in under 72 hours via the local customer care team.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 6,
    category: 'floorplans',
    question: 'How does Woodside compare with other Las Vegas builders on customization?',
    answer:
      'Woodside\'s semi-custom flexibility lets buyers add gen suites, 3-car tandem garages, multi-slide doors, or extended patios—options national builders often limit. The design studio catalogs desert-friendly surfaces from Daltile, Mohawk, and Silestone. Dr. Duffy benchmarks upgrade pricing against Toll Brothers and Tri Pointe so you invest where it matters. Rank structural must-haves early because they lock fast.',
    researchDetail:
      'Gen-suite structural packages in Sunstone run $24K–$28K and include kitchenette rough-ins, a rarity at this price point.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 7,
    category: 'company',
    question: 'What reputation does Woodside have with Las Vegas homeowners?',
    answer:
      'Public reviews average 4.2 stars across Google and Yelp, spotlighting build quality and energy savings; criticisms typically mention communication gaps during framing. JD Power\'s 2024 New-Home Builder Study placed them above the metro average for customer satisfaction. Dr. Duffy interviews homeowners quarterly to keep unbiased sentiment data. Balance online reviews with onsite observations and warranty histories.',
    researchDetail:
      'Dr. Duffy\'s 2024 homeowner survey (28 responses) found 86% would repurchase with Woodside, citing lower energy bills and practical layouts.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 8,
    category: 'specs',
    question: 'What are the hallmark specifications of Woodside\'s desert engineering?',
    answer:
      'Expect tech-shield radiant barriers, soffit vents, insulated garage doors, 2x6 exterior walls in select plans, drip irrigation with smart controllers, and tankless water heaters. These specs reduce attic heat gain up to 30°F and cut water usage by up to 30%. Dr. Duffy validates spec sheets against Clark County code updates before you commit. Use specs to gauge lifetime operating costs.',
    researchDetail:
      'TechShield radiant barrier is standard in Sunstone, while certain Cadence townhomes list it as an upgrade—Dr. Duffy confirms before contract.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 9,
    category: 'specs',
    question: 'How robust is Woodside\'s smart home package?',
    answer:
      'Standard kits include Wi-Fi thermostats, smart garage operators, Cat6 wiring, and security prewires, with upgrades expanding to Alarm.com or Control4 automation. Many buyers add lighting and shade control during framing to avoid retrofit costs. Dr. Duffy coordinates low-voltage vendors to compare builder pricing versus third-party installers. Plan your automation stack before drywall.',
    researchDetail:
      'Prewire bundles installed at build time average $1.80 per square foot; post-close retrofits can double that spend.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 10,
    category: 'specs',
    question: 'What water efficiency measures come standard?',
    answer:
      'WaterSense fixtures, low-flow irrigation controllers, drip landscaping, and recirculating hot-water loops minimize consumption. Many lots use xeriscape front yards meeting SNWA Turf Rebate guidelines. Dr. Duffy estimates monthly water budgets using tiered SNWA rates so buyers anticipate ongoing costs. Include water savings when comparing to older resales.',
    researchDetail:
      'Cadence homes deliver 1.5 GPM showerheads and 1.28 GPF toilets, keeping average usage under SNWA tier-two thresholds.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 11,
    category: 'floorplans',
    question: 'What are Woodside\'s square footage ranges in Las Vegas?',
    answer:
      'Current plans run from roughly 1,700 sq ft cottages to over 3,400 sq ft two-story homes, with Sunstone\'s core lineup between 1,859 and 2,395 sq ft. Larger options add lofts or multi-gen suites for extended families. Dr. Duffy aligns square footage with price-per-foot trends to keep budgets realistic. Choose models that fit both space needs and HVAC efficiency.',
    researchDetail:
      'The Adair plan in Cadence hits 2,289 sq ft with a loft and optional 4th bedroom for about $15K more.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 2,
    order: 12,
    category: 'floorplans',
    question: 'How flexible are Woodside floor plans?',
    answer:
      'Buyers can add bedrooms, flex rooms, garage bump-outs, patio extensions, or pocket offices depending on community. Structural upgrades close by week three, while design finishes finalize later. Dr. Duffy preps structural budget sheets so clients know upgrade ROI before committing. Better to invest in structural modifications up front than retrofit later.',
    researchDetail:
      'Garage depth extensions typically cost $8K–$10K, significantly less than post-close structural remodeling.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 13,
    category: 'floorplans',
    question: 'Are Woodside plans open-concept?',
    answer:
      'Great rooms, kitchens, and dining areas connect through oversized islands, with ceiling heights of 9′–10′ and optional beams. Flex rooms often sit near entries for offices or lounge space. Dr. Duffy tests furniture placement during model tours to confirm flow, especially with multi-slide doors. Confirm the plan supports your work-from-home and entertaining habits.',
    researchDetail:
      "Aries' great room spans 18′ x 16′—large enough for dual seating zones without crowding.",
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 14,
    category: 'floorplans',
    question: 'How do indoor-outdoor living features compare?',
    answer:
      'Covered loggias, pavers, gas stub-outs, and prewired fans come standard; upgrades extend patios, add fireplaces, or install multi-slide doors. Communities enforce design guidelines, so planning early prevents change-order issues. Dr. Duffy partners with landscape architects to budget pool or turf installs within HOA standards. Use sun studies to orient patios effectively.',
    researchDetail:
      'Sunstone HOA allows 600 sq ft of artificial turf with no secondary approval; Cadence caps turf at 40% of the rear yard.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 15,
    category: 'floorplans',
    question: 'What\'s the difference between building and buying move-in ready?',
    answer:
      'Move-in ready homes close within 30–60 days and usually list 3–5% above base to cover upgrades and lot premiums; ground-up builds take longer but allow full personalization. Dr. Duffy models total costs—including carry costs and option spend—to determine which fits your timing and equity goals. Consider lease expiration, rate trends, and customization appetite.',
    researchDetail:
      'QMI inventory in Q1 2025 shows $28K average in included upgrades rolled into pricing.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 16,
    category: 'pricing',
    question: 'What\'s the current price range for Woodside homes in Las Vegas?',
    answer:
      'Entry pricing starts around $509,990 for smaller plans; most Sunstone and Cadence builds run $560K–$630K after structural and design options. Premium lots or Summerlin product can exceed $650K. Dr. Duffy cross-checks price-per-foot numbers with competitors to confirm value. Budget 10–15% above base for upgrades if you want designer-level finishes.',
    researchDetail:
      'Average sale price for Dr. Duffy\'s 2024 Woodside buyers was $598,400, inclusive of options and lot premiums.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 17,
    category: 'pricing',
    question: 'How do incentives work with Woodside?',
    answer:
      'Incentives rotate monthly, typically featuring interest-rate buy-downs, closing-cost credits, or design allowances when you use preferred lenders. Q4 2024 incentives peaked at 3-point rate reductions plus $12,500 design credits. Dr. Duffy negotiates stackable savings—often combining design credit with closing-cost help on quick move-ins. Always obtain the final incentive sheet before signing.',
    researchDetail:
      'Preferred lender incentives generally require a 45-day closing window; quick move-in homes may offer richer credits to reduce standing inventory.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 18,
    category: 'pricing',
    question: 'What financing options complement Woodside purchases?',
    answer:
      'Conventional 5% down loans dominate, but preferred lenders offer extended locks up to 360 days with float-down features. VA buyers remain strong in Cadence and Sunstone due to low fees. Dr. Duffy compares APRs across builder-affiliated and independent lenders to ensure incentives don\'t hide higher costs. Lock when structural decisions finalize to avoid rate volatility.',
    researchDetail:
      'Extended locks usually require a 1% deposit applied to closing; confirm refund clauses if construction delays stretch beyond the lock period.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 19,
    category: 'pricing',
    question: 'How do Woodside closing costs compare?',
    answer:
      'Plan on 2–3% of purchase price; preferred lender credits often offset 1–2% when you follow their program. Title/escrow typically routes through Equity Title or First American. Dr. Duffy scrutinizes settlement statements to catch duplicate fees or misapplied credits. Keep reserves for prepaid taxes, insurance, and potential rate-lock extension fees.',
    researchDetail:
      'Using an outside lender can add $2,500–$3,500 in costs because builder credits usually vanish—Dr. Duffy weighs savings versus flexibility.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 20,
    category: 'market',
    question: 'What\'s the long-term value outlook for Woodside communities?',
    answer:
      'Since 2020, Sunstone and Cadence resale comps show 6–9% annual appreciation, outpacing the Clark County single-family average of roughly 5%. Energy efficiency and amenity-rich plans drive buyer demand even in high-rate cycles. Dr. Duffy compiles MLS absorption data to forecast equity by plan, elevation, and location. Factor HOA reserves, amenity completion, and regional job growth into value projections.',
    researchDetail:
      'Four 2021 Sunstone Woodside resales averaged $102K in equity gains by 2024 despite rate hikes.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 21,
    category: 'communities',
    question: 'Where is Woodside building right now in Las Vegas?',
    answer:
      'Active sites include Capella and Lyra at Sunstone (Northwest), multiple Cadence enclaves in Henderson, and Vireo in Summerlin West. New phases planned for late 2025 will extend offerings toward Skye Hills. Dr. Duffy reviews land-use filings and builder investor calls to anticipate upcoming releases. Compare each community\'s amenities, SID balances, and school zones before deciding.',
    researchDetail:
      'Sunstone Phase 3 will deliver 42 north-facing lots with mountain views slated for release in late Q2 2025.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 2,
    order: 22,
    category: 'communities',
    question: 'What community amenities accompany Woodside neighborhoods?',
    answer:
      'Sunstone offers a 4,000 sq ft community hub, pools, fitness areas, and 15 miles of trails; Cadence features a 50-acre Central Park, splash pads, and free wifi in public spaces. Summerlin enclaves add golf access and clubhouses. Dr. Duffy inspects HOA budgets and staffing to ensure promised amenities deliver on schedule. Align amenity packages with your lifestyle priorities.',
    researchDetail:
      'Sunstone\'s amenity center is funded and expected to open mid-2025, with staffing already included in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 23,
    category: 'communities',
    question: 'How do HOA fees compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence averages $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Duffy models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 24,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Duffy drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 25,
    category: 'communities',
    question: 'What schools serve Woodside communities?',
    answer:
      'Sunstone zones to Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus new charter options; Summerlin provides magnet and private programs. A K-8 charter is planned inside Sunstone for 2026. Dr. Duffy compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 26,
    category: 'process',
    question: 'What are the steps in buying a Woodside home?',
    answer:
      'Consultation, community tour, lot reservation, structural selections, design studio, construction milestones, inspections, and closing form the core journey. Woodside asks buyers to sign purchase agreements within 24 hours of reserving a lot. Dr. Duffy manages the timeline with checklist-driven project management and builder coordination. Clarify expectations at each stage before you place deposits.',
    researchDetail:
      'Lot reservation deposits start at $1,000 and are typically refundable within the first 48 hours if you decide not to proceed.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 27,
    category: 'process',
    question: 'What pre-approval do buyers need?',
    answer:
      'Builders require lender pre-approval letters plus documentation of down payment and closing funds. Preferred lenders can issue same-day approvals calibrated to Woodside\'s DTI thresholds. Dr. Duffy reviews credit scores, reserves, and rate options before you commit. Getting pre-approved first prevents losing your preferred lot.',
    researchDetail:
      'Preferred lender incentives generally require at least a 680 credit score, with alternative programs for 620–679 buyers at reduced credits.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 28,
    category: 'process',
    question: 'What happens during design studio appointments?',
    answer:
      'Sessions usually occur within 2–4 weeks of contract and last 4–6 hours across two visits. Designers guide you through cabinets, flooring, counters, lighting, and plumbing curated for desert durability. Dr. Duffy attends in person or via video to keep upgrades on budget and resale-friendly. Arrive with inspiration photos, sample swatches, and a prioritized wish list.',
    researchDetail:
      'Flooring upgrades range $6–$18 per square foot; focusing on great rooms and kitchens yields the best resale ROI.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 29,
    category: 'process',
    question: 'How does the inspection process work?',
    answer:
      'Woodside allows third-party inspections at pre-drywall, mechanical completion, and final walk stages. Reports feed into the builder portal with deadlines for corrections before closing. Dr. Duffy coordinates licensed inspectors and attends each milestone to advocate for buyers. Schedule inspections early to secure prime slots.',
    researchDetail:
      'Pre-drywall inspections often flag nail plate protection, window flashing, and HVAC duct sealing—focus areas Dr. Duffy monitors closely.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 30,
    category: 'process',
    question: 'Are move-in ready homes available frequently?',
    answer:
      'There\'s a rotating inventory with completion windows from immediate occupancy to 60 days out, especially in Cadence and Sunstone. These homes bundle popular upgrades like quartz counters and extended tile, usually priced 3–5% above base. Dr. Duffy updates inventory spreadsheets weekly to match buyers with upcoming deliveries. Secure interest quickly—high-demand lots move within days.',
    researchDetail:
      'March–May 2025 showcases eight Sunstone quick move-ins in the mid-$600Ks with $30K+ in design upgrades included.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 31,
    category: 'market',
    question: 'How does new construction compare to resale value?',
    answer:
      'New Woodside homes offer lower maintenance, modern layouts, and energy savings compared with 1990s resales that may need $40K+ in upgrades. Resales offer immediate move-in and mature landscaping but higher utility costs. Dr. Duffy models ten-year cost-of-ownership for both paths so decisions stay objective.',
    researchDetail:
      'New Woodside owners average $100–$125 monthly utility savings versus similarly sized 20-year-old resales.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 2,
    order: 32,
    category: 'market',
    question: 'How strong is resale demand for Woodside product?',
    answer:
      'Demand stays healthy thanks to energy efficiency, open plans, and amenity-rich settings—Sunstone inventory turned in 28 days on average during 2024. That\'s faster than Clark County\'s 42-day single-family average. Dr. Duffy monitors MLS absorption to forecast equity growth by plan and elevation. Favor west-facing lots or amenity-adjacent parcels for stronger resale.',
    researchDetail:
      'Cadence Woodside resales in 2024 achieved 99.2% of list price with median days on market of 19.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 33,
    category: 'education',
    question: 'How can buyers evaluate Woodside versus other builders?',
    answer:
      'Compare structural flexibility, energy specs, incentives, warranty response times, and HOA obligations against Pulte, Lennar, Shea, and Toll Brothers. Dr. Duffy\'s builder comparison matrix grades each category using inspection and warranty data gathered from past clients. Visit multiple model parks, request spec sheets, and review independent home-inspection reports. Objective comparisons drive confident decisions.',
    researchDetail:
      'Woodside averages 0.7 warranty claims per home in year one—lower than Lennar\'s 1.1 in similar price tiers.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 34,
    category: 'education',
    question: 'What questions should buyers ask at a Woodside model?',
    answer:
      'Concentrate on structural cut-off dates, included features, HOA dues, lot premiums, build timeline, inspection access, and incentive requirements. Request energy ratings, design studio calendars, and sample option price lists. Dr. Duffy equips clients with a 23-point checklist covering these details. The right questions expose hidden costs and timeline risks.',
    researchDetail:
      'Always confirm whether soft water loops, landscaping, appliances, and window coverings are included—policies differ by community and elevation.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 35,
    category: 'education',
    question: 'How do elevations differ from floor plans?',
    answer:
      'Elevations change exterior styling—stucco, stone, rooflines—while floor plans dictate interior layout. Elevations can adjust window placement, parapet heights, and covered entry depth, affecting natural light and curb appeal. Dr. Duffy reviews HOA color palettes and elevation premiums so buyers grasp costs and sun impacts. Pick elevations that balance style with climate performance.',
    researchDetail:
      'South-facing lots perform best with elevations featuring deeper overhangs; Dr. Duffy models sun paths for each candidate lot.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 36,
    category: 'education',
    question: 'What should first-time buyers know about Woodside?',
    answer:
      'Expect a structured timeline, energy-efficient construction, and curated design support, but budget for window coverings, backyard completion, and appliances in some communities. Builder reps work for Woodside, so having Dr. Duffy on your side ensures independent advice and inspections. Thorough preparation prevents surprise costs. Bring an expert to every appointment.',
    researchDetail:
      'Post-close essentials like landscaping, window treatments, and ceiling fans typically run $18K–$25K in recent Sunstone closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 37,
    category: 'education',
    question: 'How do buyers evaluate upgrade budgets?',
    answer:
      'Separate structural necessities from design finishes, then allocate funds to high-value categories like flooring, cabinetry, and electrical. Dr. Duffy\'s appraisal models estimate ROI on each upgrade to avoid over-investing. Focus on surfaces and lighting that elevate daily living and future resale appeal. Keep a contingency fund for design studio surprises.',
    researchDetail:
      'Appraisers credit roughly 50–70 cents on the dollar for premium upgrades in kitchens and baths.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 38,
    category: 'market',
    question: 'What maintenance advantages accompany new construction?',
    answer:
      'New Woodside homes provide warranty-backed HVAC, plumbing, roofing, and appliances, minimizing unexpected repairs for the first 5–10 years. Energy-efficient materials lower long-term costs and improve comfort. Dr. Duffy compares maintenance projections to resale options over a decade to highlight savings. Use the savings to build reserves or pay down principal faster.',
    researchDetail:
      'Dr. Duffy recommends budgeting 1% of purchase price annually for maintenance on new builds versus 2–3% for older inventory.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 39,
    category: 'education',
    question: 'How does Dr. Duffy add value in the Woodside buying process?',
    answer:
      'Dr. Duffy delivers independent research on specs, incentives, warranty responsiveness, and competing builders; she\'s closed 500+ new construction deals totaling $127M+. She coordinates inspections, negotiates upgrades, and keeps builds on schedule without representing the builder. Her expertise gives buyers confidence in every decision. Engage her early to leverage data-driven support.',
    researchDetail:
      'Her private database tracks superintendent contacts, inspection findings, and warranty response times for every Woodside community.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 40,
    category: 'process',
    question: 'How can buyers stay informed during construction?',
    answer:
      'Woodside\'s portal delivers weekly progress updates, but Dr. Duffy supplements with site visits, drone photos, 3D scans, and milestone checklists. She coordinates meetings with superintendents to resolve issues quickly. Transparent communication keeps builds on schedule and stress low. Establish an update cadence from day one.',
    researchDetail:
      'Matterport scans at framing preserve locations of wiring, plumbing, and blocking for future reference.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 1,
    category: 'company',
    question: 'How large is Woodside Homes' footprint in Las Vegas right now?',
    answer:
      \'Woodside is actively building in Sunstone, Cadence, Summerlin West, and North Las Vegas enclaves, capturing about 7% of 2024 Clark County permits. Their presence spans price points from low $500s to mid $600s in those master plans. Dr. Duffy tracks release calendars so buyers know when new phases drop before they hit the MLS. Use that footprint to compare commute times, schools, and HOA costs.',
    researchDetail:
      'Clark County recorded 612 Woodside closings between 2020 and 2024, with Cadence delivering the highest absorption.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 2,
    category: 'company',
    question: 'How does Woodside\'s Life-Inspired Design show up in real floor plans?',
    answer:
      'In Sunstone\'s Aries model you\'ll find 12-foot stacking sliders, extended drop zones, and flex rooms near the foyer—features built from homeowner interviews. Those ergonomics outperform many Lennar and Pulte layouts Dr. Duffy benchmarks for clients. Touring with her furniture templates reveals how daily routines actually flow through these spaces. Compare your lifestyle needs to the design cues before locking a lot.',
    researchDetail:
      'Aries includes a 12′ x 8′ stacking slider, a mudroom bench with storage, and an optional prep kitchen highlighted during Dr. Duffy\'s walkthroughs.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 3,
    category: 'specs',
    question: 'How do Woodside HERS scores compare to other Vegas builders?',
    answer:
      'Sunstone\'s Lyra and Virgo models usually test in the low 50s, while 2010-era resales hover around 80 and Lennar\'s latest Skye Canyon series near 60. Lower HERS means you\'ll spend hundreds less per year on NV Energy bills. Dr. Duffy models those numbers so buyers can weigh lifetime costs against other builders. Bring those projections into appraisal and resale conversations.',
    researchDetail:
      'A December 2024 Lyra quick move-in posted HERS 52, projecting $1,230 annual savings versus a similar 2005 resale.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 4,
    category: 'process',
    question: 'What\'s the most realistic build timeline buyers should plan for?',
    answer:
      'Woodside quotes 6–8 months, but Dr. Duffy\'s 2024 clients averaged roughly 205 days from structural lock to keys. Only two closings slipped more than two weeks, usually during monsoon storms. She builds contingency calendars for rate locks, lease ends, and movers so you stay ahead of surprises. Align your financing strategy with that real-world cadence.',
    researchDetail:
      'Typical milestone timing: pre-drywall week 12, drywall complete week 19, trims by week 23—validated by Dr. Duffy\'s onsite checklists.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 5,
    category: 'process',
    question: 'How responsive is Woodside\'s warranty team compared with competitors?',
    answer:
      'Warranty tickets averaged 5–6 business days to resolution in 2024, beating Lennar\'s 7+ day metro average and matching Tri Pointe\'s speed. Dr. Duffy maintains escalation contacts with every superintendent to shorten repair times when needed. Knowing those metrics gives buyers confidence beyond marketing promises. Keep the service portal bookmarked and document any issues promptly.',
    researchDetail:
      'Two HVAC condensate problems escalated by Dr. Duffy in 2024 were resolved within 72 hours through Woodside Customer Care.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 6,
    category: 'specs',
    question: 'Do Woodside homes beat the Energy Star standard or just meet it?',
    answer:
      'They exceed Energy Star 3.1 with R-38 attic insulation, R-13 walls, radiant barriers, 16-SEER HVAC, and tankless water heaters tuned for 110°F summers. Competitors like Toll Brothers sometimes require upgrade packages for the same specs. Dr. Duffy validates each feature against Clark County codes before you sign. Factor utility savings into your total cost-of-ownership analysis.',
    researchDetail:
      'TechShield radiant barrier is standard in Sunstone but optional in certain Cadence townhomes—Dr. Duffy confirms inclusion before contract.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 7,
    category: 'specs',
    question: 'What smart-home infrastructure is included up front?',
    answer:
      'Expect Cat6 runs, smart thermostats, Wi-Fi garage openers, and security prewires, with upgrades allowing full Control4 or Alarm.com automation. Planning low-voltage during framing costs far less than retrofitting later. Dr. Duffy brings in trusted integrators to compare builder pricing with third-party quotes. Decide on automation stacks before drywall goes up.',
    researchDetail:
      'Prewire bundles installed at build time average $1.80 per square foot; post-close retrofits can double that cost.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 8,
    category: 'specs',
    question: 'How desert-ready are Woodside\'s building materials?',
    answer:
      'Insulated garage doors, smart irrigation, low-water landscaping, and heat-reflective roof designs are engineered for Mojave conditions. Woodside\'s overhangs and attic ventilation keep attic temps up to 30°F cooler than older inventory. Dr. Duffy cross-checks spec sheets with Clark County updates so nothing slips through. Durable materials protect comfort and resale value.',
    researchDetail:
      'Sunstone elevations leverage low-slope roofs and soffit vents to reduce headload versus 1990s Northwest resales.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 9,
    category: 'floorplans',
    question: 'How does Woodside\'s multi-gen design compare to Lennar\'s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar\'s suites can feel isolated or share HVAC without zoning. Dr. Duffy evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Duffy verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 10,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Duffy\'s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside\'s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Duffy walks through.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 11,
    category: 'pricing',
    question: 'How does Dr. Duffy model pricing scenarios for hesitant buyers?',
    answer:
      'She builds side-by-side comparisons with base price, structural upgrades, design packages, incentives, taxes, HOA dues, and expected utilities. That spreadsheet updates live as new incentives publish. Buyers get a transparent "true cost" sheet before they sign.',
    researchDetail:
      'Her pricing model references builder option sheets, lender quotes, tax calculators, and NV Energy projections for each plan.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 12,
    category: 'pricing',
    question: 'How does Dr. Duffy test incentive packages for hidden trade-offs?',
    answer:
      'She compares APR and lender fees with and without incentives, then checks closing statements from prior Woodside buyers. If a credit disappears, she renegotiates or shifts lenders. Incentives become a math equation, not a marketing headline.',
    researchDetail:
      'Closing disclosure archives reveal where incentives cannibalized other credits—insights Dr. Duffy uses to negotiate revisions.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 13,
    category: 'pricing',
    question: 'What equity forecasts does Dr. Duffy provide before contract?',
    answer:
      'She projects five-year appreciation using GLVAR comps, HOA reserves, amenity build-out status, and job-growth forecasts. Buyers see best, base, and conservative equity paths. That analysis makes long-term value part of the initial decision, not hindsight.',
    researchDetail:
      'Forecast models incorporate Moody\'s employment data, GLVAR price trends, and HOA reserve projections stored in Dr. Duffy\'s analytics suite.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 14,
    category: 'pricing',
    question: 'How does Dr. Duffy coach buyers through appraisal contingencies?',
    answer:
      'She reviews MLS pendings, builder closings, and option spend ratios to estimate appraisal risk. If risk is high, she positions backup comps, requests option credits, or strategizes appraisal reconsiderations. Buyers enter contract knowing exactly how to guard against value gaps.',
    researchDetail:
      'Her appraisal toolkit includes pre-written reconsideration templates and comp packages that align with VA, FHA, and conventional guidelines.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 15,
    category: 'market',
    question: 'How does Dr. Duffy monitor resale performance for future exit strategies?',
    answer:
      'She tracks MLS resale data monthly, noting days on market, list-to-sale ratios, price-per-foot shifts, and buyer feedback trends. Those insights feed into exit strategy plans she shares with current buyers. You purchase with a resale roadmap already mapped out.',
    researchDetail:
      'Her resale dashboard covers 2020–present transactions for every Woodside community, color-coded by appreciation tiers.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 16,
    category: 'market',
    question: 'How does Dr. Duffy help investors evaluate Woodside rental potential?',
    answer:
      'She analyzes rental comps, HOA leasing caps, property management fees, and prospective tenant pools for each community. Investors receive cash-flow projections with conservative vacancy rates and maintenance reserves. Decision-making stays data-driven, not speculative.',
    researchDetail:
      'Rental worksheets pull from LVRMLS leases, AirDNA short-term metrics where allowed, and SNWA utility averages.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 17,
    category: 'communities',
    question: 'How does Dr. Duffy match buyers to the right Woodside community?',
    answer:
      'Her intake process evaluates commute requirements, school needs, lifestyle amenities, and future growth preferences. She then overlays those criteria with Sunstone, Cadence, and Summerlin data. Buyers tour only the communities that truly fit their goals.',
    researchDetail:
      'Community scorecards rate each neighborhood on seven metrics—from HOA health to trail networks—compiled by Dr. Duffy.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 18,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate HOA documents for Woodside buyers?',
    answer:
      'She reviews covenants, budgets, reserve studies, and rental caps with a focus on long-term sustainability. Any red flags—like underfunded reserves or strict design limits—get flagged before contract. You enter with eyes wide open.',
    researchDetail:
      'Sunstone HOA reserves currently sit above 90% funded; Dr. Duffy verifies numbers in annual filings prior to buyer commitments.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 19,
    category: 'communities',
    question: 'How does Dr. Duffy incorporate commute analytics into community decisions?',
    answer:
      'She runs live drive tests at the buyer\'s actual rush-hour schedule, logs Waze and NDOT updates, and tracks upcoming road projects. That data informs lot orientation and community selection. Commute comfort becomes a quantified metric, not a guess.',
    researchDetail:
      'NDOT project timelines and average travel times get stored in her commute dashboard for Sunstone, Cadence, and Summerlin.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 20,
    category: 'communities',
    question: 'How does Dr. Duffy prep buyers for future amenity rollouts?',
    answer:
      'She confirms amenity budgets, construction schedules, and staffing plans directly with HOA boards and developer meetings. Buyers know when pools, parks, or co-working spaces truly open. That transparency protects against overpromised features.',
    researchDetail:
      'HOA meeting minutes documenting amenity timelines are saved in her digital client binders for reference.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 21,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate school pathways for growing families?',
    answer:
      'She maps zoning boundaries, magnet/charter applications, and private-school commute times, then aligns them with each buyer\'s goals. Education becomes part of the site-selection matrix. No buyer is surprised by rezoning after moving in.',
    researchDetail:
      'She monitors CCSD zoning proposals and charter board approvals, storing PDFs in each client\'s planning portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 22,
    category: 'process',
    question: 'How does Dr. Duffy keep builders accountable during construction?',
    answer:
      'She maintains spreadsheet trackers with milestone dates, superintendent commitments, and punch-list items. Weekly updates compare promised progress with actual site photos. Escalations happen fast if timelines slip.',
    researchDetail:
      'Milestone trackers log framing, mechanical, drywall, cabinets, and final clean dates alongside superintendent sign-offs.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 23,
    category: 'process',
    question: 'How does she assist with design studio overwhelm?',
    answer:
      'Before appointments she curates mood boards, resale-friendly palettes, and cost ladders keyed to each buyer\'s budget. During the session she tracks totals in real time, calling out selections that hurt appraisals. Buyers leave with curated design packages instead of impulse picks.',
    researchDetail:
      'Design spreadsheets include line-by-line pricing with notes on resale impact and maintenance considerations.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 24,
    category: 'process',
    question: 'How does Dr. Duffy prepare buyers for move-in orientation?',
    answer:
      'She provides a walk-through checklist covering appliance demos, warranty contacts, smart-home setup, and punch-list verification. Each orientation gets recorded so buyers can reference builder explanations later. Move-in day feels organized, not chaotic.',
    researchDetail:
      'Orientation checklists list 68 inspection points, from sprinkler zones to smart-thermostat programming, all signed off at closing.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 25,
    category: 'process',
    question: 'What post-close support does Dr. Duffy offer Woodside owners?',
    answer:
      'She schedules 30-day and 11-month warranty check-ins, connects owners with vetted landscapers and tech integrators, and keeps valuation updates on file. Her buyers stay plugged into community resources and equity forecasts long after they get keys.',
    researchDetail:
      'Warranty checklists include photos and issue logs uploaded to Woodside\'s portal with superintendent acknowledgment.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 26,
    category: 'market',
    question: 'How does she differentiate speculative hype from actual demand?',
    answer:
      'By tracking MLS absorption, permit filings, employment reports, and rental occupancy, Dr. Duffy spots real demand drivers. She shares those dashboards with clients so they can sense when markets soften or heat up. Decisions lean on hard numbers, not sales pitches.',
    researchDetail:
      'Her demand dashboard pairs GLVAR absorption rates with Nevada DETR employment forecasts for each submarket.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 27,
    category: 'market',
    question: 'How does Dr. Duffy support buyers negotiating lot premiums?',
    answer:
      'She compares premium pricing history, viewshed analytics, and resale comps to show which premiums return value. If a lot doesn\'t justify the premium, she finds alternatives or negotiates concessions. Buyers leverage evidence, not emotion.',
    researchDetail:
      'Lot premium logs track price deltas versus final appraised value for more than 80 Woodside contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 28,
    category: 'market',
    question: 'What rental safeguards does she recommend for Woodside investors?',
    answer:
      'She reviews HOA short-term rules, secures landlord insurance quotes, and outlines cash reserves for vacancy and repairs. Investors also get introductions to vetted property managers familiar with Woodside warranties. Passive income stays protected.',
    researchDetail:
      'Her landlord readiness guide details HOA rental caps, SNWA utility averages, and expected maintenance allowances per community.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 29,
    category: 'education',
    question: 'How does Dr. Duffy teach first-time buyers the new construction process?',
    answer:
      'She hosts onboarding sessions covering financing, structural deadlines, inspections, warranty, and move-in logistics. Each buyer receives a timeline dashboard and glossary so unfamiliar terms never become roadblocks. Education is proactive, not reactionary.',
    researchDetail:
      'Onboarding packets include an 18-step roadmap with milestone checklists tailored to Woodside\'s build cadence.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 30,
    category: 'education',
    question: 'How does she help buyers balance dream upgrades with resale reality?',
    answer:
      'By ranking upgrades into "must-have," "nice-to-have," and "personal indulgence" categories, then showing how each affects appraisals and resale demand. Buyers can still personalize, but they do so with clear insight into future ROI. Luxury wants stay aligned with equity goals.',
    researchDetail:
      'Upgrade scorecards grade selections on cost, maintenance, and appraisal credit so buyers see trade-offs instantly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 31,
    category: 'education',
    question: 'How does Dr. Duffy help buyers compare Woodside to resale alternatives?',
    answer:
      'She builds total cost-of-ownership comparisons factoring upgrade budgets, utilities, maintenance, and financing scenarios. Resale tours follow alongside new construction so buyers experience both paths. The final decision comes from informed contrast, not speculation.',
    researchDetail:
      'Comparison worksheets combine MLS comps, utility estimates, and projected maintenance for 10-year horizons.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 32,
    category: 'education',
    question: 'How does she vet third-party contractors who finish Woodside homes?',
    answer:
      'Dr. Duffy maintains a vetted vendor list for landscaping, window coverings, technology integration, and home maintenance. Vendors must carry proper licensing, insurance, and Woodside familiarity before joining her roster. Buyers plug into trusted resources immediately after close.',
    researchDetail:
      'Vendor scorecards log license verification dates, insurance certificates, and client satisfaction ratings.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 33,
    category: 'education',
    question: 'How does Dr. Duffy prevent surprise costs during closing?',
    answer:
      'She pre-audits closing statements, cross-referencing incentive agreements, proration tables, and rate-lock fees. Any discrepancy gets flagged before signing. Buyers sit at the closing table knowing every line item is accurate.',
    researchDetail:
      'Closing audit sheets compare loan estimates with final disclosures to ensure incentives and credits carry through.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 34,
    category: 'process',
    question: 'How does she manage inspection follow-ups so nothing slips?',
    answer:
      'Each inspection finding enters a shared tracker with due dates and superintendent acknowledgments. Dr. Duffy verifies completion personally or through third-party inspectors. Buyers never wonder whether punch-list items were addressed.',
    researchDetail:
      'Inspection follow-up tracker links photos, superintendent responses, and completion timestamps for accountability.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 35,
    category: 'process',
    question: 'What communication cadence does Dr. Duffy establish with builders?',
    answer:
      'She sets weekly email updates, biweekly field visits, and milestone calls with superintendents at contract signing. Those cadences go into writing so everyone stays aligned. Buyers enjoy transparent, predictable communication for the entire build.',
    researchDetail:
      'Communication templates summarize progress, photos, and next steps in a consistent format shared with buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 36,
    category: 'market',
    question: 'How does Dr. Duffy help buyers plan for market shifts after closing?',
    answer:
      'She provides annual valuation check-ins, refinance reviews, and rental strategy updates. Buyers know when equity milestones or rate drops make sense to act on. Homeownership becomes a managed asset, not a static purchase.',
    researchDetail:
      'Annual equity reports combine current MLS comps, amortization progress, and utility savings totals from Dr. Duffy\'s databases.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 37,
    category: 'market',
    question: 'How does she incorporate regional economic data into the buying decision?',
    answer:
      'Dr. Duffy tracks job growth, tourism metrics, and corporate relocations to gauge housing demand. She overlays those indicators with Woodside release schedules so buyers buy into strength, not softness. It\'s macroeconomics applied directly to your lot decision.',
    researchDetail:
      'Her economic dashboard blends Moody\'s Analytics employment forecasts with LVCVA tourism stats and Las Vegas Convention pipeline updates.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 38,
    category: 'education',
    question: 'How does Dr. Duffy keep buyers confident from contract to close?',
    answer:
      'She backs every step with research—option ROI, inspection data, incentive math, commute analytics, and equity forecasts. Buyers know facts before they sign, not after. Confidence comes from having a dedicated research partner throughout the journey.',
    researchDetail:
      'Clients receive a digital binder housing every checklist, report, and timeline update for reference long after closing.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 1,
    category: 'company',
    question: 'How much of Clark County\'s new-home activity does Woodside represent in 2025?',
    answer:
      'Year-to-date Woodside accounts for about 6.8% of Clark County single-family permits, trailing only Lennar and Pulte. Activity clusters around Sunstone, Cadence, and Vireo in Summerlin West. Dr. Duffy monitors permit logs weekly so clients can anticipate releases and lot premiums. Pair permits with absorption rates to time your purchase.',
    researchDetail:
      'Clark County Planning Commission issued 148 Woodside permits between Jan–Apr 2025 versus 162 in the same 2024 window, suggesting incentive sweeteners may surface.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 2,
    category: 'company',
    question: 'How does Woodside\'s corporate ownership translate into Las Vegas build quality?',
    answer:
      'Sekisui House\'s 75-year sustainability program governs Las Vegas specs—think SHAWOOD-inspired insulation targets, waste recycling goals, and third-party energy audits. Dr. Duffy compares corporate QA manuals across builders to reveal where Woodside outperforms regional competitors. Deep institutional backing also keeps construction crews stable, even when labor markets tighten.',
    researchDetail:
      'Sekisui mandates quarterly sustainability audits; Sunstone crews recycled 72% of construction waste in 2024 according to reports Dr. Duffy reviews.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 3,
    category: 'company',
    question: 'How does Life-Inspired Design outperform Lennar\'s Next Gen layouts?',
    answer:
      'Life-Inspired plans emphasize sight lines, storage, and indoor-outdoor flow, while Lennar\'s Next Gen suites often sacrifice pantry space and loft functionality. Dr. Duffy overlays plan schematics to show Woodside kitchens averaging 18% more counter frontage and smoother circulation. Touring with her annotated floor plans helps you visualize real-life routines.',
    researchDetail:
      "Aries' pantry offers 54 cubic feet of storage versus Lennar's comparable 41 cubic feet—measurements taken during Dr. Duffy's walkthroughs.",
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 4,
    category: 'specs',
    question: 'How do Woodside HERS scores impact actual NV Energy bills?',
    answer:
      'A Sunstone Lyra testing at HERS 52 typically lands near $160/month during peak summer, while a HERS 75 resale can exceed $250. Dr. Duffy builds energy models using NV Energy tier rates so buyers can budget accurately. Lower loads cushion against future rate hikes and boost resale marketing.',
    researchDetail:
      'NV Energy\'s 2025 Tier 2 rate is 13.4¢/kWh; Dr. Duffy\'s spreadsheet shows Lyra owners using 1,200 kWh/month stay within Tier 2 thanks to efficient shells.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 5,
    category: 'specs',
    question: 'Does Woodside offer solar-ready infrastructure?',
    answer:
      'Sunstone and Cadence communities pre-install rooftop conduit, 200A panels, and structural bracing for 3.0 psf solar arrays. Lennar often includes full solar, while Toll Brothers leaves it entirely post-close. Dr. Duffy tracks NV Energy interconnection steps and incentives so you can plan financing. Solar readiness trims install costs when you decide to add panels.',
    researchDetail:
      'Electrical diagrams show solar conduit from attic to panel with dedicated disconnects—details Dr. Duffy reviews during plan check.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 6,
    category: 'specs',
    question: 'What HVAC specs differentiate Woodside from Pulte in the desert?',
    answer:
      'Woodside installs 16-SEER two-stage condensers with ECM motors, programmable thermostats, and MERV-11 filtration as standard, while Pulte often starts at 14-SEER single-stage unless upgraded. Dr. Duffy\'s HVAC comparison grid details equipment brands, warranties, and zoned-thermostat options. Superior HVAC lowers bills and enhances indoor-air quality.',
    researchDetail:
      'Sunstone systems use Lennox ML17XC1 condensers with 5-year parts warranties extendable to 10 years—documents Dr. Duffy secures for buyers.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 7,
    category: 'specs',
    question: 'What structural engineering resists extreme temperature swings?',
    answer:
      'Plans call for 2x6 exterior walls in select models, R-19 batts, R-38 attic insulation, and TechShield radiant barriers to reduce heat gain by up to 30°F. Dr. Duffy cross-checks structural load calculations and insulation schedules to confirm compliance. These envelopes outperform many Shea or Tri Pointe builds in the same price tier.',
    researchDetail:
      'Filing documents show R-19 batt insulation in 2x6 walls plus R-38 blown insulation meeting 2021 IECC standards—validated through Dr. Duffy\'s pre-drywall inspections.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 8,
    category: 'specs',
    question: 'How robust is Woodside\'s low-voltage prewire package?',
    answer:
      'Cat6 runs to bedrooms, offices, and media walls plus RG6 coax and security rough-ins come standard, with optional conduit for future AV. Toll Brothers charges extra for similar infrastructure. Dr. Duffy inventories low-voltage drops during pre-drywall so buyers know exactly what\'s installed. Wiring early avoids expensive retrofits.',
    researchDetail:
      'Prewire diagrams allocate 1.25-inch conduit from media wall to attic for AV cabling—Dr. Duffy photographs placements for client records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 9,
    category: 'specs',
    question: 'How do Woodside kitchens compare to Tri Pointe\'s designer offerings?',
    answer:
      'Woodside includes 42-inch uppers, soft-close hinges, and six pendant-ready circuits standard, while Tri Pointe often reserves those for upgrades. Butcher-block extensions, waterfall counters, and dual ovens price competitively in Woodside\'s studio. Dr. Duffy tracks SKU-level costs to help buyers allocate upgrade funds wisely.',
    researchDetail:
      'Virgo\'s waterfall island edge costs around $3,200—roughly 15% less than Tri Pointe\'s comparable upgrade list.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 10,
    category: 'specs',
    question: 'How expansive are Woodside\'s covered patios in current releases?',
    answer:
      'Standard loggias span roughly 12x10 feet with options to extend another 4–8 feet depending on lot depth. Structural tie-ins support sliders, privacy screens, and outdoor kitchens. Dr. Duffy models sun angles so buyers know midday conditions before pouring decks. Compare patio footage when evaluating builder options.',
    researchDetail:
      'Capella patio extensions add 120 square feet (12x10 to 12x20) for about $7,800—priced via builder structural sheets.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 11,
    category: 'floorplans',
    question: 'How does Woodside\'s multi-gen design compare to Lennar\'s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar\'s suites can feel isolated or share HVAC without zoning. Dr. Duffy evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Duffy verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 12,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Duffy\'s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside\'s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Duffy walks through.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 13,
    category: 'pricing',
    question: 'How do price-per-square-foot figures compare by community right now?',
    answer:
      'As of May 2025 Sunstone averages ~$258/ft², Cadence ~$244/ft², and Summerlin Vireo ~$282/ft² for Woodside resales. Lennar and Pulte hover within ±$10/ft² but typically offer fewer structural options. Dr. Duffy\'s dashboards update weekly so buyers negotiate with current data. Evaluate cost per foot alongside build quality.',
    researchDetail:
      'GLVAR closed sales Jan–Apr 2025 confirm Sunstone Woodside resales averaging $258/ft²—data stored in Dr. Duffy\'s market notebooks.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 14,
    category: 'pricing',
    question: 'How aggressive are current buy-down programs compared to late 2024?',
    answer:
      'Q2 2025 incentives still yield 2–3 point buy-downs but require quick move-in closings or tight loan timelines; late 2024 offered more relaxed locks. Dr. Duffy negotiates stacked credits—combining buydowns with appliance or landscaping packages—when inventory rises. Always review the latest incentive matrix before signing.',
    researchDetail:
      'May 2025 incentive sheets show 2-point permanent plus 1-point temporary buy-down on quick move-ins with 30-day closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 15,
    category: 'pricing',
    question: 'How do property taxes vary across Woodside communities?',
    answer:
      'Sunstone\'s effective tax rate is about 0.72% of assessed value with no SIDs, Cadence is near 0.79% plus low SIDs, and Summerlin enclaves hover around 0.74% with village fees. Dr. Duffy calculates monthly escrows so buyers understand total housing cost. SIDs/LIDs must be factored into affordability projections.',
    researchDetail:
      'Cadence SID statements show ~$45/month remaining on 20-year amortizations—data pulled from the Clark County Treasurer portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 16,
    category: 'pricing',
    question: 'How do extended rate locks work with Woodside\'s preferred lenders?',
    answer:
      'Extended locks up to 360 days typically require a 1% lock fee credited at closing if you proceed, with float-down options in the final 60 days. Non-preferred lenders may lack construction-length locks, exposing you to rate volatility. Dr. Duffy models the cost of locking early versus shorter locks to hedge your exposure.',
    researchDetail:
      'Woodside Mortgage\'s 360-day lock charges 1% upfront, refundable if the builder delays beyond 30 days past the lock—terms documented in lender summaries Dr. Duffy reviews.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 17,
    category: 'pricing',
    question: 'Can VA buyers stack Woodside incentives effectively?',
    answer:
      'Yes—preferred lenders pair VA loans with buy-downs and closing credits while respecting VA funding rules. Dr. Duffy cross-checks appraisals to guard against value gaps created by large incentives. Planning rate locks and appraisals in sync keeps VA deals smooth.',
    researchDetail:
      'In 2024 Dr. Duffy closed four Cadence VA purchases combining 2-point buy-downs with $7K in builder-paid closing costs—documented in lender worksheets.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 18,
    category: 'market',
    question: 'How does Woodside appreciate versus Shea or Toll Brothers over five years?',
    answer:
      'Sunstone Woodside resales gained 31% since 2020, Shea\'s Spur Cross 28%, and Toll Brothers' Mira Villa around 24%, all beating the Clark County average of 22%. Energy efficiency and HOA quality sustain buyer demand even when rates rise. Dr. Duffy stress-tests appreciation scenarios using GLVAR comps and employment forecasts.',
    researchDetail:
      \'GLVAR data confirms average $102K equity gains on $520K Sunstone purchases between 2020 and 2024—numbers Dr. Duffy plugs into her projection models.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 19,
    category: 'communities',
    question: 'Which Woodside communities will release new lots soon?',
    answer:
      'Sunstone Phase 3 launches in late Q2 2025 with 42 north-facing lots, while Cadence continues rolling releases each quarter. Summerlin\'s Vireo has limited inventory and may see a final release later in 2025. Dr. Duffy\'s builder contacts flag these drops before sales offices go public. Being early lets you secure premium orientations.',
    researchDetail:
      'Dr. Duffy maintains a private calendar of superintendent release dates, deposit requirements, and lot premiums for every Woodside site.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 20,
    category: 'communities',
    question: 'What amenities distinguish Woodside neighborhoods from competitors?',
    answer:
      'Sunstone delivers a 4,000 sq ft amenity hub, pools, fitness rooms, co-working, and 15 miles of trails; Cadence offers a 50-acre park and splash pads; Summerlin adds golf and clubhouses. Lennar\'s Skye Canyon emphasizes athletic amenities, while Toll Brothers leans toward boutique clubs. Dr. Duffy tours each amenity set so the lifestyle match is deliberate.',
    researchDetail:
      'Sunstone\'s amenity center is funded and scheduled to open mid-2025, with staffing already budgeted in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 21,
    category: 'communities',
    question: 'How do HOA dues compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence charges around $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Duffy models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 22,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Duffy drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 23,
    category: 'communities',
    question: 'How do school options stack up for Woodside buyers?',
    answer:
      'Sunstone feeds Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus CCSD schools; Summerlin provides magnet and private options. A K-8 charter is planned inside Sunstone for 2026. Dr. Duffy compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 24,
    category: 'process',
    question: 'How should buyers stage deposit releases to preserve cash?',
    answer:
      'Woodside typically collects deposits in phases—contract, structural lock, and design studio—totaling $10K–$20K. Staggering deposits keeps liquidity available for appraisal gaps or rate-lock fees. Dr. Duffy\'s payment calendar outlines every draw before buyers sign.',
    researchDetail:
      'Average Sunstone deposits total around $15K; schedules are detailed in purchase agreements Dr. Duffy reviews line by line.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 25,
    category: 'process',
    question: 'What pre-approval documents should buyers prepare at lot reservation?',
    answer:
      'Bring a DU/LP approval, last two paystubs, two months of bank statements, and documentation for contingent sales. Preferred lenders convert pre-quals to full approvals once documents are ready. Dr. Duffy audits paperwork before tours to ensure buyers can reserve lots instantly.',
    researchDetail:
      'Preferred lender checklists highlight missing bank statements as the top reason lot reservations get delayed—insight from Dr. Duffy\'s lender partners.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 26,
    category: 'process',
    question: 'How do design studio upgrade costs compare to post-close renovations?',
    answer:
      'Structural electrical, plumbing, and cabinetry upgrades cost 30–40% less during construction than post-close retrofits. Decorative lighting or hardware can wait until after closing. Dr. Duffy\'s ROI planner ranks upgrades by appraisal impact so you deploy funds strategically.',
    researchDetail:
      'Structured wiring additions price at $250 per drop during framing versus $450+ for post-close retrofits—figures tracked by Dr. Duffy.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 27,
    category: 'process',
    question: 'What inspection rights should buyers insist on when signing?',
    answer:
      'Ensure the contract explicitly permits third-party inspections at pre-drywall, mechanical completion, and final walk; some builders limit access. Dr. Duffy negotiates inspection clauses before deposits go hard to protect transparency. Keep documentation of every clause in writing.',
    researchDetail:
      'Woodside contracts reference inspection rights in Section 12—Dr. Duffy reviews and initials each clause with clients.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 28,
    category: 'process',
    question: 'How frequently should buyers expect construction updates beyond the portal?',
    answer:
      'Woodside posts weekly portal updates, but Dr. Duffy schedules biweekly site visits, drone footage, and milestone checklists for accuracy. She also sets standing calls with superintendents to resolve issues proactively. Consistent updates prevent surprises at closing.',
    researchDetail:
      'Dr. Duffy\'s update template pairs portal notes with date-stamped photos, verifying progress and creating permanent records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 29,
    category: 'market',
    question: 'How do quick move-in marketing blasts differ from Dr. Duffy\'s inventory sheets?',
    answer:
      'Builder blasts highlight publicly available specs, often after insiders claim top lots; Dr. Duffy\'s sheets list every under-construction home, canceled contracts, and future releases. Her data reveals inventory before general marketing, giving clients first-mover advantage. Early access can secure view lots or premium elevations.',
    researchDetail:
      'In March 2025 Dr. Duffy reported two Sunstone quick move-ins 48 hours before Woodside\'s marketing email—both reserved by her clients immediately.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 30,
    category: 'market',
    question: 'What appraisal buffer should buyers maintain when adding upgrades?',
    answer:
      'Maintain at least a 5% buffer between contract price and appraisal to accommodate heavy upgrades without risking value gaps. Dr. Duffy pre-reviews pending comps and upgrade allowances before clients finalize design studio choices. Avoid over-customizing beyond your neighborhood\'s resale ceiling.',
    researchDetail:
      'Recent appraisals credited roughly 60 cents per dollar on kitchen/bath upgrades; Dr. Duffy retains anonymized appraisal packets to guide decisions.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 31,
    category: 'market',
    question: 'How do maintenance reserves for new builds compare to 15-year-old resales?',
    answer:
      'New Woodside homes typically require 1% of value annually for maintenance reserves; 15-year-old resales demand closer to 2.5% due to HVAC, roof, and appliance replacement cycles. Dr. Duffy\'s 10-year maintenance models quantify the difference so budgets stay realistic. Lower reserves free cash for savings or upgrades.',
    researchDetail:
      'Dr. Duffy\'s maintenance spreadsheets show new Woodside owners averaging $5,800 annually on $580K homes versus $14,000 for similar resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 32,
    category: 'education',
    question: 'How does Dr. Duffy\'s comparison matrix keep builder evaluations objective?',
    answer:
      'Her matrix scores Woodside, Lennar, Pulte, Tri Pointe, Toll Brothers, and Shea across energy specs, structural flexibility, incentives, warranty response, and HOA health. Scores draw from inspection reports, homeowner interviews, and service logs—not marketing. Clients customize the matrix to their priorities so decisions stay research-driven.',
    researchDetail:
      'Latest matrix ranks Woodside 4.5/5 for energy efficiency while Lennar scores 3.8/5—data Dr. Duffy updates quarterly.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 33,
    category: 'education',
    question: 'Which questions uncover hidden costs in builder fine print?',
    answer:
      'Ask how long incentives last, whether lot premiums adjust with views, what\'s included in landscaping, which appliances are standard, and how HOAs treat rentals. Dr. Duffy\'s 23-point checklist flushes out fees and restrictions that sales reps often gloss over. Armed with answers, you negotiate from strength.',
    researchDetail:
      'In 2024 Dr. Duffy saved a client $4,200 by catching a duplicated landscape fee hidden in the options list—thanks to the checklist.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 34,
    category: 'education',
    question: 'How do elevation choices influence heat gain and energy bills?',
    answer:
      'Elevations with deeper overhangs, recessed windows, and contrasting stucco reduce solar gain on south/west exposures. Dr. Duffy runs sun-path simulations to recommend elevations that minimize cooling loads. Form and function go hand-in-hand—choose aesthetics that help your energy budget.',
    researchDetail:
      'Simulations show Aries Elevation C cuts solar heat gain by 12% versus Elevation A on south-facing lots—Dr. Duffy\'s modeling data.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 35,
    category: 'education',
    question: 'How should first-time buyers budget for post-close essentials?',
    answer:
      'Set aside $20K–$25K for backyard landscaping, window coverings, appliances (if excluded), and ceiling fans. Dr. Duffy obtains vendor bids before closing so new owners have accurate figures. Planning ahead prevents credit-card splurges after move-in.',
    researchDetail:
      'Average 2024 Sunstone buyers spent $22,700 on post-close essentials—based on invoices tracked in Dr. Duffy\'s files.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 36,
    category: 'education',
    question: 'Which upgrades deliver the strongest appraisal impact?',
    answer:
      'Continuous flooring, quartz counters, upgraded cabinetry, and primary bath finishes typically earn the highest appraisal credit. Decorative lighting or hardware swaps can wait. Dr. Duffy\'s ROI tool prioritizes upgrades so you don\'t overinvest in low-return items.',
    researchDetail:
      'Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024 Sunstone resales—figures kept in Dr. Duffy\'s appraisal library.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 37,
    category: 'education',
    question: 'How does Dr. Duffy leverage superintendent relationships to benefit buyers?',
    answer:
      'She maintains direct contacts with every superintendent, attends pre-construction meetings, and logs punch-list deadlines in shared trackers. Escalations happen fast without waiting for portal queues. That insider access keeps builds on schedule and issues resolved quickly.',
    researchDetail:
      'Dr. Duffy resolved a framing oversight within 48 hours by contacting the Sunstone superintendent she\'d worked with on prior builds—documented in her project journal.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 38,
    category: 'process',
    question: 'How do you ensure builder update portals match job-site reality?',
    answer:
      'Dr. Duffy cross-checks portal notes with on-site photos, drone footage, and third-party inspection reports. Any discrepancies trigger superintendent follow-ups with written corrective action. Keeping builders accountable reduces closing-day surprises.',
    researchDetail:
      'Her update template pairs portal entries with timestamped field photos and inspector notes for every milestone.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 39,
    category: 'market',
    question: 'How does real-time inventory tracking give buyers negotiation leverage?',
    answer:
      'Dr. Duffy updates spreadsheets every Friday with spec homes, cancellations, and future releases so she knows when the builder needs movement. Armed with data, she secures extras like appliance packages or landscaping credits. Negotiating with facts beats reacting to sales rhetoric.',
    researchDetail:
      'March 2025 data showing eight Sunstone quick move-ins led directly to stacked incentives for Dr. Duffy\'s buyers—tracked in her inventory notes.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 40,
    category: 'market',
    question: 'How can buyers model long-term value using real numbers, not hype?',
    answer:
      'Combine appreciation trends, HOA strength, energy savings, and incentive value to forecast five-year equity. Dr. Duffy\'s spreadsheets stress-test scenarios using GLVAR comps, utility data, and amortization schedules. Quantitative projections replace guesswork so decisions stay grounded.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024 with average $102K resale gains—data Dr. Duffy builds into her equity models.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 1,
    category: 'company',
    question: 'Why do relocation buyers seek Dr. Duffy\'s guidance on Woodside specifically?',
    answer:
      'Relocation clients lean on Dr. Duffy because she keeps a proprietary database of 500+ new construction closings, including every Woodside superintendent, designer, and warranty lead. She benchmarks lifestyle perks, commute realities, and HOA rules before you even tour. That prework saves days of guesswork for families arriving from out of state.',
    researchDetail:
      'Dr. Duffy\'s relocation matrix cross-references school scores, hospital commute times, and HOA reserves for each active Woodside neighborhood.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 5,
    order: 2,
    category: 'company',
    question: 'How does Dr. Duffy verify Woodside\'s build quality beyond brochures?',
    answer:
      'She performs independent field audits, pulling county inspection logs, warranty claims, and third-party reports to validate builder claims. Those findings feed into her comparison charts so buyers see objective data. It\'s buyer-side research—not marketing—from someone who has walked every construction phase.',
    researchDetail:
      'Clark County\'s online inspection portal shows pass/fail notes; Dr. Duffy archives them for each Woodside phase to spot recurring issues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 3,
    category: 'company',
    question: 'What makes Woodside\'s sales process smoother when Dr. Duffy is involved?',
    answer:
      'Her relationships with sales counselors and superintendents remove friction—appointments get scheduled faster, structural deadlines stay clear, and escalation paths open immediately. Buyers still sign directly with Woodside, but Dr. Duffy keeps the builder accountable at every step. It\'s a buyer advocate working alongside the onsite team.',
    researchDetail:
      'Dr. Duffy stores escalation contact trees for each community so buyers reach decision-makers within hours, not days.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 4,
    category: 'specs',
    question: 'How does Dr. Duffy audit energy specs to protect buyer budgets?',
    answer:
      'She reviews mechanical schedules, HERS certificates, and NV Energy usage projections for every plan. Those numbers feed a 10-year cost-of-ownership model comparing Woodside to resale options. Buyers see how efficiency lowers total monthly spend, which often justifies higher upfront pricing.',
    researchDetail:
      'Energy models in Dr. Duffy\'s workbook use NV Energy tiered rates, builder-provided kWh estimates, and insulation specs verified during pre-drywall.',
    cta: `Let's compare all your options - call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 5,
    category: 'specs',
    question: 'How does Dr. Duffy confirm smart-home tech works out of the box?',
    answer:
      'She coordinates low-voltage walkthroughs at pre-drywall to verify Cat6 drops, conduit locations, and panel terminations. After closing, her tech partners perform activation checks so Wi-Fi thermostats, smart garages, and security prewires go live without surprises. Buyer convenience stays front and center.',
    researchDetail:
      'Pre-drywall punch lists include photos of each low-voltage drop, signed off by the superintendent and stored in the client\'s portal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 6,
    category: 'specs',
    question: 'What structural details does Dr. Duffy document during inspections?',
    answer:
      'She photographs framing connections, anchor bolts, moisture barriers, and insulation coverage during third-party inspections. Any variance from plans goes into a correction log shared with the superintendent. That documentation protects warranties and future resale confidence.',
    researchDetail:
      'Her inspection binder includes labeled photos of sill plate anchors, roof truss hangers, and HVAC duct sealing for each buyer.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 7,
    category: 'specs',
    question: 'How does Dr. Duffy compare Woodside\'s kitchens to other builders from a cooking perspective?',
    answer:
      'Beyond listing finishes, she measures counter frontage, storage cubic footage, and appliance clearance for each plan. Then she contrasts the data with Lennar, Pulte, and Tri Pointe models so culinary buyers know which layout supports their workflow. It\'s ergonomics backed by tape-measure research.',
    researchDetail:
      'Her kitchen worksheet records island length, pantry volume, and fridge clearance for every model toured.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 8,
    category: 'specs',
    question: 'What does Dr. Duffy evaluate in Woodside\'s desert engineering package?',
    answer:
      'She inspects attic ventilation, radiant barrier coverage, stucco expansion joints, and garage insulation to confirm desert-ready execution. Those findings get compared with Clark County code baselines and competitor specs. Buyers see where Woodside excels and where upgrades might help.',
    researchDetail:
      'Inspection logs note temperature differentials between attic and living space to verify radiant barrier performance.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 9,
    category: 'floorplans',
    question: 'How does Dr. Duffy personalize floor-plan tours for each household?',
    answer:
      'She arrives with lifestyle questionnaires, furniture dimensions, and work-from-home needs compiled from discovery calls. During tours she overlays those needs onto plan options, capturing video and commentary for replay. Buyers leave knowing exactly how each space can flex for their family.',
    researchDetail:
      'Her plan playbooks include annotated diagrams showing desk placement, storage solutions, and traffic patterns specific to each client.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 5,
    order: 10,
    category: 'floorplans',
    question: 'Why does Dr. Duffy track option pricing down to the SKU level?',
    answer:
      'Because builder pricing shifts quarterly, she maintains historical logs of every structural and design option selected by clients. That data reveals which upgrades hold value and which ones inflate appraisals. Buyers decide upgrades with clarity instead of guesswork.',
    researchDetail:
      'Dr. Duffy\'s option ledger lists cost deltas for sliders, gen suites, and design packages dating back five years.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 11,
    category: 'floorplans',
    question: 'How does Dr. Duffy vet indoor/outdoor flow for entertainers?',
    answer:
      'She measures slider widths, patio depth, and kitchen pass-through lines while noting prevailing wind and sun angles. Her clients receive patio staging layouts showing how many guests the space can host comfortably. Entertaining becomes a planned experience, not an afterthought.',
    researchDetail:
      'Sun studies Dr. Duffy runs in Sunstone show evening shade coverage on north-facing patios extending 75% of the yard.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 12,
    category: 'floorplans',
    question: 'What structural pitfalls does Dr. Duffy help buyers avoid post-cutoff?',
    answer:
      'She flags commonly forgotten items—soft water loops, hose bibs, floor outlets, bathroom blocking—that cannot be added cheaply later. Clients sign off on a structural checklist before the day-21 deadline. That diligence eliminates costly change orders after framing.',
    researchDetail:
      'Her structural checklist covers 42 line items, including accessible shower blocking and EV conduit placement.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 13,
    category: 'pricing',
    question: 'How does Dr. Duffy model pricing scenarios for hesitant buyers?',
    answer:
      'She builds side-by-side comparisons with base price, structural upgrades, design packages, incentives, taxes, HOA dues, and expected utilities. That spreadsheet updates live as new incentives publish. Buyers get a transparent "true cost" sheet before they sign.',
    researchDetail:
      'Her pricing model references builder option sheets, lender quotes, tax calculators, and NV Energy projections for each plan.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 14,
    category: 'pricing',
    question: 'How does Dr. Duffy test incentive packages for hidden trade-offs?',
    answer:
      'She compares APR and lender fees with and without incentives, then checks closing statements from prior Woodside buyers. If a credit disappears, she renegotiates or shifts lenders. Incentives become a math equation, not a marketing headline.',
    researchDetail:
      'Closing disclosure archives reveal where incentives cannibalized other credits—insights Dr. Duffy uses to negotiate revisions.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 15,
    category: 'pricing',
    question: 'What equity forecasts does Dr. Duffy provide before contract?',
    answer:
      'She projects five-year appreciation using GLVAR comps, HOA reserves, amenity build-out status, and job-growth forecasts. Buyers see best, base, and conservative equity paths. That analysis makes long-term value part of the initial decision, not hindsight.',
    researchDetail:
      'Forecast models incorporate Moody\'s employment data, GLVAR price trends, and HOA reserve projections stored in Dr. Duffy\'s analytics suite.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 16,
    category: 'pricing',
    question: 'How does Dr. Duffy coach buyers through appraisal contingencies?',
    answer:
      'She reviews MLS pendings, builder closings, and option spend ratios to estimate appraisal risk. If risk is high, she positions backup comps, requests option credits, or strategizes appraisal reconsiderations. Buyers enter contract knowing exactly how to guard against value gaps.',
    researchDetail:
      'Her appraisal toolkit includes pre-written reconsideration templates and comp packages that align with VA, FHA, and conventional guidelines.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 17,
    category: 'market',
    question: 'How does Dr. Duffy monitor resale performance for future exit strategies?',
    answer:
      'She tracks MLS resale data monthly, noting days on market, list-to-sale ratios, price-per-foot shifts, and buyer feedback trends. Those insights feed into exit strategy plans she shares with current buyers. You purchase with a resale roadmap already mapped out.',
    researchDetail:
      'Her resale dashboard covers 2020–present transactions for every Woodside community, color-coded by appreciation tiers.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 18,
    category: 'market',
    question: 'How does Dr. Duffy help investors evaluate Woodside rental potential?',
    answer:
      'She analyzes rental comps, HOA leasing caps, property management fees, and prospective tenant pools for each community. Investors receive cash-flow projections with conservative vacancy rates and maintenance reserves. Decision-making stays data-driven, not speculative.',
    researchDetail:
      'Rental worksheets pull from LVRMLS leases, AirDNA short-term metrics where allowed, and SNWA utility averages.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 19,
    category: 'communities',
    question: 'How does Dr. Duffy match buyers to the right Woodside community?',
    answer:
      'Her intake process evaluates commute requirements, school needs, lifestyle amenities, and future growth preferences. She then overlays those criteria with Sunstone, Cadence, and Summerlin data. Buyers tour only the communities that truly fit their goals.',
    researchDetail:
      'Community scorecards rate each neighborhood on seven metrics—from HOA health to trail networks—compiled by Dr. Duffy.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 20,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate HOA documents for Woodside buyers?',
    answer:
      'She reviews covenants, budgets, reserve studies, and rental caps with a focus on long-term sustainability. Any red flags—like underfunded reserves or strict design limits—get flagged before contract. You enter with eyes wide open.',
    researchDetail:
      'Sunstone HOA reserves currently sit above 90% funded; Dr. Duffy verifies numbers in annual filings prior to buyer commitments.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 21,
    category: 'communities',
    question: 'How does Dr. Duffy incorporate commute analytics into community decisions?',
    answer:
      'She runs live drive tests at the buyer\'s actual rush-hour schedule, logs Waze and NDOT updates, and tracks upcoming road projects. That data informs lot orientation and community selection. Commute comfort becomes a quantified metric, not a guess.',
    researchDetail:
      'NDOT project timelines and average travel times get stored in her commute dashboard for Sunstone, Cadence, and Summerlin.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 22,
    category: 'communities',
    question: 'How does Dr. Duffy prep buyers for future amenity rollouts?',
    answer:
      'She confirms amenity budgets, construction schedules, and staffing plans directly with HOA boards and developer meetings. Buyers know when pools, parks, or co-working spaces truly open. That transparency protects against overpromised features.',
    researchDetail:
      'HOA meeting minutes documenting amenity timelines are saved in her digital client binders for reference.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 23,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate school pathways for growing families?',
    answer:
      'She maps zoning boundaries, magnet/charter applications, and private-school commute times, then aligns them with each buyer\'s goals. Education becomes part of the site-selection matrix. No buyer is surprised by rezoning after moving in.',
    researchDetail:
      'She monitors CCSD zoning proposals and charter board approvals, storing PDFs in each client\'s planning portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 24,
    category: 'process',
    question: 'How does Dr. Duffy keep builders accountable during construction?',
    answer:
      'She maintains spreadsheet trackers with milestone dates, superintendent commitments, and punch-list items. Weekly updates compare promised progress with actual site photos. Escalations happen fast if timelines slip.',
    researchDetail:
      'Milestone trackers log framing, mechanical, drywall, cabinets, and final clean dates alongside superintendent sign-offs.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 25,
    category: 'process',
    question: 'How does she assist with design studio overwhelm?',
    answer:
      'Before appointments she curates mood boards, resale-friendly palettes, and cost ladders keyed to each buyer\'s budget. During the session she tracks totals in real time, calling out selections that hurt appraisals. Buyers leave with curated design packages instead of impulse picks.',
    researchDetail:
      'Design spreadsheets include line-by-line pricing with notes on resale impact and maintenance considerations.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 26,
    category: 'process',
    question: 'How does Dr. Duffy prepare buyers for move-in orientation?',
    answer:
      'She provides a walk-through checklist covering appliance demos, warranty contacts, smart-home setup, and punch-list verification. Each orientation gets recorded so buyers can reference builder explanations later. Move-in day feels organized, not chaotic.',
    researchDetail:
      'Orientation checklists list 68 inspection points, from sprinkler zones to smart-thermostat programming, all signed off at closing.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 27,
    category: 'process',
    question: 'What post-close support does Dr. Duffy offer Woodside owners?',
    answer:
      'She schedules 30-day and 11-month warranty check-ins, connects owners with vetted landscapers and tech integrators, and keeps valuation updates on file. Her buyers stay plugged into community resources and equity forecasts long after they get keys.',
    researchDetail:
      'Warranty checklists include photos and issue logs uploaded to Woodside\'s portal with superintendent acknowledgment.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 5,
    order: 28,
    category: 'market',
    question: 'How does she differentiate speculative hype from actual demand?',
    answer:
      'By tracking MLS absorption, permit filings, employment reports, and rental occupancy, Dr. Duffy spots real demand drivers. She shares those dashboards with clients so they can sense when markets soften or heat up. Decisions lean on hard numbers, not sales pitches.',
    researchDetail:
      'Her demand dashboard pairs GLVAR absorption rates with Nevada DETR employment forecasts for each submarket.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 29,
    category: 'market',
    question: 'How does Dr. Duffy support buyers negotiating lot premiums?',
    answer:
      'She compares premium pricing history, viewshed analytics, and resale comps to show which premiums return value. If a lot doesn\'t justify the premium, she finds alternatives or negotiates concessions. Buyers leverage evidence, not emotion.',
    researchDetail:
      'Lot premium logs track price deltas versus final appraised value for more than 80 Woodside contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 30,
    category: 'market',
    question: 'What rental safeguards does she recommend for Woodside investors?',
    answer:
      'She reviews HOA short-term rules, secures landlord insurance quotes, and outlines cash reserves for vacancy and repairs. Investors also get introductions to vetted property managers familiar with Woodside warranties. Passive income stays protected.',
    researchDetail:
      'Her landlord readiness guide details HOA rental caps, SNWA utility averages, and expected maintenance allowances per community.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 31,
    category: 'education',
    question: 'How does Dr. Duffy teach first-time buyers the new construction process?',
    answer:
      'She hosts onboarding sessions covering financing, structural deadlines, inspections, warranty, and move-in logistics. Each buyer receives a timeline dashboard and glossary so unfamiliar terms never become roadblocks. Education is proactive, not reactionary.',
    researchDetail:
      'Onboarding packets include an 18-step roadmap with milestone checklists tailored to Woodside\'s build cadence.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 32,
    category: 'education',
    question: 'How does she help buyers balance dream upgrades with resale reality?',
    answer:
      'By ranking upgrades into "must-have," "nice-to-have," and "personal indulgence" categories, then showing how each affects appraisals and resale demand. Buyers can still personalize, but they do so with clear insight into future ROI. Luxury wants stay aligned with equity goals.',
    researchDetail:
      'Upgrade scorecards grade selections on cost, maintenance, and appraisal credit so buyers see trade-offs instantly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 33,
    category: 'education',
    question: 'How does Dr. Duffy help buyers compare Woodside to resale alternatives?',
    answer:
      'She builds total cost-of-ownership comparisons factoring upgrade budgets, utilities, maintenance, and financing scenarios. Resale tours follow alongside new construction so buyers experience both paths. The final decision comes from informed contrast, not speculation.',
    researchDetail:
      'Comparison worksheets combine MLS comps, utility estimates, and projected maintenance for 10-year horizons.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 34,
    category: 'education',
    question: 'How does she vet third-party contractors who finish Woodside homes?',
    answer:
      'Dr. Duffy maintains a vetted vendor list for landscaping, window coverings, technology integration, and home maintenance. Vendors must carry proper licensing, insurance, and Woodside familiarity before joining her roster. Buyers plug into trusted resources immediately after close.',
    researchDetail:
      'Vendor scorecards log license verification dates, insurance certificates, and client satisfaction ratings.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 35,
    category: 'education',
    question: 'How does Dr. Duffy prevent surprise costs during closing?',
    answer:
      'She pre-audits closing statements, cross-referencing incentive agreements, proration tables, and rate-lock fees. Any discrepancy gets flagged before signing. Buyers sit at the closing table knowing every line item is accurate.',
    researchDetail:
      'Closing audit sheets compare loan estimates with final disclosures to ensure incentives and credits carry through.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 36,
    category: 'process',
    question: 'How does she manage inspection follow-ups so nothing slips?',
    answer:
      'Each inspection finding enters a shared tracker with due dates and superintendent acknowledgments. Dr. Duffy verifies completion personally or through third-party inspectors. Buyers never wonder whether punch-list items were addressed.',
    researchDetail:
      'Inspection follow-up tracker links photos, superintendent responses, and completion timestamps for accountability.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 37,
    category: 'process',
    question: 'What communication cadence does Dr. Duffy establish with builders?',
    answer:
      'She sets weekly email updates, biweekly field visits, and milestone calls with superintendents at contract signing. Those cadences go into writing so everyone stays aligned. Buyers enjoy transparent, predictable communication for the entire build.',
    researchDetail:
      'Communication templates summarize progress, photos, and next steps in a consistent format shared with buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 5,
    order: 38,
    category: 'market',
    question: 'How does Dr. Duffy help buyers plan for market shifts after closing?',
    answer:
      'She provides annual valuation check-ins, refinance reviews, and rental strategy updates. Buyers know when equity milestones or rate drops make sense to act on. Homeownership becomes a managed asset, not a static purchase.',
    researchDetail:
      'Annual equity reports combine current MLS comps, amortization progress, and utility savings totals from Dr. Duffy\'s databases.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 39,
    category: 'market',
    question: 'How does she incorporate regional economic data into the buying decision?',
    answer:
      'Dr. Duffy tracks job growth, tourism metrics, and corporate relocations to gauge housing demand. She overlays those indicators with Woodside release schedules so buyers buy into strength, not softness. It\'s macroeconomics applied directly to your lot decision.',
    researchDetail:
      'Her economic dashboard blends Moody\'s Analytics employment forecasts with LVCVA tourism stats and Las Vegas Convention pipeline updates.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 5,
    order: 40,
    category: 'education',
    question: 'How does Dr. Duffy keep buyers confident from contract to close?',
    answer:
      'She backs every step with research—option ROI, inspection data, incentive math, commute analytics, and equity forecasts. Buyers know facts before they sign, not after. Confidence comes from having a dedicated research partner throughout the journey.',
    researchDetail:
      'Clients receive a digital binder housing every checklist, report, and timeline update for reference long after closing.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 1,
    category: 'company',
    question: 'How much of Clark County\'s new-home activity does Woodside represent in 2025?',
    answer:
      'Year-to-date Woodside accounts for about 6.8% of Clark County single-family permits, trailing only Lennar and Pulte. Activity clusters around Sunstone, Cadence, and Vireo in Summerlin West. Dr. Duffy monitors permit logs weekly so clients can anticipate releases and lot premiums. Pair permits with absorption rates to time your purchase.',
    researchDetail:
      'Clark County Planning Commission issued 148 Woodside permits between Jan–Apr 2025 versus 162 in the same 2024 window, suggesting incentive sweeteners may surface.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 6,
    order: 2,
    category: 'company',
    question: 'How does Woodside\'s corporate ownership translate into Las Vegas build quality?',
    answer:
      'Sekisui House\'s 75-year sustainability program governs Las Vegas specs—think SHAWOOD-inspired insulation targets, waste recycling goals, and third-party energy audits. Dr. Duffy compares corporate QA manuals across builders to reveal where Woodside outperforms regional competitors. Deep institutional backing also keeps construction crews stable, even when labor markets tighten.',
    researchDetail:
      'Sekisui mandates quarterly sustainability audits; Sunstone crews recycled 72% of construction waste in 2024 according to reports Dr. Duffy reviews.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 3,
    category: 'company',
    question: 'How does Life-Inspired Design outperform Lennar\'s Next Gen layouts?',
    answer:
      'Life-Inspired plans emphasize sight lines, storage, and indoor-outdoor flow, while Lennar\'s Next Gen suites often sacrifice pantry space and loft functionality. Dr. Duffy overlays plan schematics to show Woodside kitchens averaging 18% more counter frontage and smoother circulation. Touring with her annotated floor plans helps you visualize real-life routines.',
    researchDetail:
      "Aries' pantry offers 54 cubic feet of storage versus Lennar's comparable 41 cubic feet—measurements taken during Dr. Duffy's walkthroughs.",
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 4,
    category: 'specs',
    question: 'How do Woodside HERS scores impact actual NV Energy bills?',
    answer:
      'A Sunstone Lyra testing at HERS 52 typically lands near $160/month during peak summer, while a HERS 75 resale can exceed $250. Dr. Duffy builds energy models using NV Energy tier rates so buyers can budget accurately. Lower loads cushion against future rate hikes and boost resale marketing.',
    researchDetail:
      'NV Energy\'s 2025 Tier 2 rate is 13.4¢/kWh; Dr. Duffy\'s spreadsheet shows Lyra owners using 1,200 kWh/month stay within Tier 2 thanks to efficient shells.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 5,
    category: 'specs',
    question: 'Does Woodside offer solar-ready infrastructure?',
    answer:
      'Sunstone and Cadence communities pre-install rooftop conduit, 200A panels, and structural bracing for 3.0 psf solar arrays. Lennar often includes full solar, while Toll Brothers leaves it entirely post-close. Dr. Duffy tracks NV Energy interconnection steps and incentives so you can plan financing. Solar readiness trims install costs when you decide to add panels.',
    researchDetail:
      'Electrical diagrams show solar conduit from attic to panel with dedicated disconnects—details Dr. Duffy reviews during plan check.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 6,
    category: 'specs',
    question: 'What HVAC specs differentiate Woodside from Pulte in the desert?',
    answer:
      'Woodside installs 16-SEER two-stage condensers with ECM motors, programmable thermostats, and MERV-11 filtration as standard, while Pulte often starts at 14-SEER single-stage unless upgraded. Dr. Duffy\'s HVAC comparison grid details equipment brands, warranties, and zoned-thermostat options. Superior HVAC lowers bills and enhances indoor-air quality.',
    researchDetail:
      'Sunstone systems use Lennox ML17XC1 condensers with 5-year parts warranties extendable to 10 years—documents Dr. Duffy secures for buyers.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 7,
    category: 'specs',
    question: 'What structural engineering resists extreme temperature swings?',
    answer:
      'Plans call for 2x6 exterior walls in select models, R-19 batts, R-38 attic insulation, and TechShield radiant barriers to reduce heat gain by up to 30°F. Dr. Duffy cross-checks structural load calculations and insulation schedules to confirm compliance. These envelopes outperform many Shea or Tri Pointe builds in the same price tier.',
    researchDetail:
      'Filing documents show R-19 batt insulation in 2x6 walls plus R-38 blown insulation meeting 2021 IECC standards—validated through Dr. Duffy\'s pre-drywall inspections.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 8,
    category: 'specs',
    question: 'How robust is Woodside\'s low-voltage prewire package?',
    answer:
      'Cat6 runs to bedrooms, offices, and media walls plus RG6 coax and security rough-ins come standard, with optional conduit for future AV. Toll Brothers charges extra for similar infrastructure. Dr. Duffy inventories low-voltage drops during pre-drywall so buyers know exactly what\'s installed. Wiring early avoids expensive retrofits.',
    researchDetail:
      'Prewire diagrams allocate 1.25-inch conduit from media wall to attic for AV cabling—Dr. Duffy photographs placements for client records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 9,
    category: 'specs',
    question: 'How do Woodside kitchens compare to Tri Pointe\'s designer offerings?',
    answer:
      'Woodside includes 42-inch uppers, soft-close hinges, and six pendant-ready circuits standard, while Tri Pointe often reserves those for upgrades. Butcher-block extensions, waterfall counters, and dual ovens price competitively in Woodside\'s studio. Dr. Duffy tracks SKU-level costs to help buyers allocate upgrade funds wisely.',
    researchDetail:
      'Virgo\'s waterfall island edge costs around $3,200—roughly 15% less than Tri Pointe\'s comparable upgrade list.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 6,
    order: 10,
    category: 'specs',
    question: 'How expansive are Woodside\'s covered patios in current releases?',
    answer:
      'Standard loggias span roughly 12x10 feet with options to extend another 4–8 feet depending on lot depth. Structural tie-ins support sliders, privacy screens, and outdoor kitchens. Dr. Duffy models sun angles so buyers know midday conditions before pouring decks. Compare patio footage when evaluating builder options.',
    researchDetail:
      'Capella patio extensions add 120 square feet (12x10 to 12x20) for about $7,800—priced via builder structural sheets.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 11,
    category: 'floorplans',
    question: 'How does Woodside\'s multi-gen design compare to Lennar\'s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar\'s suites can feel isolated or share HVAC without zoning. Dr. Duffy evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Duffy verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 12,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Duffy\'s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside\'s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Duffy walks through.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 13,
    category: 'pricing',
    question: 'How do price-per-square-foot figures compare by community right now?',
    answer:
      'As of May 2025 Sunstone averages ~$258/ft², Cadence ~$244/ft², and Summerlin Vireo ~$282/ft² for Woodside resales. Lennar and Pulte hover within ±$10/ft² but typically offer fewer structural options. Dr. Duffy\'s dashboards update weekly so buyers negotiate with current data. Evaluate cost per foot alongside build quality.',
    researchDetail:
      'GLVAR closed sales Jan–Apr 2025 confirm Sunstone Woodside resales averaging $258/ft²—data stored in Dr. Duffy\'s market notebooks.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 14,
    category: 'pricing',
    question: 'How aggressive are current buy-down programs compared to late 2024?',
    answer:
      'Q2 2025 incentives still yield 2–3 point buy-downs but require quick move-in closings or tight loan timelines; late 2024 offered more relaxed locks. Dr. Duffy negotiates stacked credits—combining buydowns with appliance or landscaping packages—when inventory rises. Always review the latest incentive matrix before signing.',
    researchDetail:
      'May 2025 incentive sheets show 2-point permanent plus 1-point temporary buy-down on quick move-ins with 30-day closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 15,
    category: 'pricing',
    question: 'How do property taxes vary across Woodside communities?',
    answer:
      'Sunstone\'s effective tax rate is about 0.72% of assessed value with no SIDs, Cadence is near 0.79% plus low SIDs, and Summerlin enclaves hover around 0.74% with village fees. Dr. Duffy calculates monthly escrows so buyers understand total housing cost. SIDs/LIDs must be factored into affordability projections.',
    researchDetail:
      'Cadence SID statements show ~$45/month remaining on 20-year amortizations—data pulled from the Clark County Treasurer portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 16,
    category: 'pricing',
    question: 'How do extended rate locks work with Woodside\'s preferred lenders?',
    answer:
      'Extended locks up to 360 days typically require a 1% lock fee credited at closing if you proceed, with float-down options in the final 60 days. Non-preferred lenders may lack construction-length locks, exposing you to rate volatility. Dr. Duffy models the cost of locking early versus shorter locks to hedge your exposure.',
    researchDetail:
      'Woodside Mortgage\'s 360-day lock charges 1% upfront, refundable if the builder delays beyond 30 days past the lock—terms documented in lender summaries Dr. Duffy reviews.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 17,
    category: 'pricing',
    question: 'Can VA buyers stack Woodside incentives effectively?',
    answer:
      'Yes—preferred lenders pair VA loans with buy-downs and closing credits while respecting VA funding rules. Dr. Duffy cross-checks appraisals to guard against value gaps created by large incentives. Planning rate locks and appraisals in sync keeps VA deals smooth.',
    researchDetail:
      'In 2024 Dr. Duffy closed four Cadence VA purchases combining 2-point buy-downs with $7K in builder-paid closing costs—documented in lender worksheets.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 18,
    category: 'market',
    question: 'How does Woodside appreciate versus Shea or Toll Brothers over five years?',
    answer:
      'Sunstone Woodside resales gained 31% since 2020, Shea\'s Spur Cross 28%, and Toll Brothers' Mira Villa around 24%, all beating the Clark County average of 22%. Energy efficiency and HOA quality sustain buyer demand even when rates rise. Dr. Duffy stress-tests appreciation scenarios using GLVAR comps and employment forecasts.',
    researchDetail:
      \'GLVAR data confirms average $102K equity gains on $520K Sunstone purchases between 2020 and 2024—numbers Dr. Duffy plugs into her projection models.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 19,
    category: 'communities',
    question: 'Which Woodside communities will release new lots soon?',
    answer:
      'Sunstone Phase 3 launches in late Q2 2025 with 42 north-facing lots, while Cadence continues rolling releases each quarter. Summerlin\'s Vireo has limited inventory and may see a final release later in 2025. Dr. Duffy\'s builder contacts flag these drops before sales offices go public. Being early lets you secure premium orientations.',
    researchDetail:
      'Dr. Duffy maintains a private calendar of superintendent release dates, deposit requirements, and lot premiums for every Woodside site.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 6,
    order: 20,
    category: 'communities',
    question: 'What amenities distinguish Woodside neighborhoods from competitors?',
    answer:
      'Sunstone delivers a 4,000 sq ft amenity hub, pools, fitness rooms, co-working, and 15 miles of trails; Cadence offers a 50-acre park and splash pads; Summerlin adds golf and clubhouses. Lennar\'s Skye Canyon emphasizes athletic amenities, while Toll Brothers leans toward boutique clubs. Dr. Duffy tours each amenity set so the lifestyle match is deliberate.',
    researchDetail:
      'Sunstone\'s amenity center is funded and scheduled to open mid-2025, with staffing already budgeted in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 21,
    category: 'communities',
    question: 'How do HOA dues compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence charges around $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Duffy models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 22,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Duffy drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 23,
    category: 'communities',
    question: 'How do school options stack up for Woodside buyers?',
    answer:
      'Sunstone feeds Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus CCSD schools; Summerlin provides magnet and private options. A K-8 charter is planned inside Sunstone for 2026. Dr. Duffy compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 24,
    category: 'process',
    question: 'How should buyers stage deposit releases to preserve cash?',
    answer:
      'Woodside typically collects deposits in phases—contract, structural lock, and design studio—totaling $10K–$20K. Staggering deposits keeps liquidity available for appraisal gaps or rate-lock fees. Dr. Duffy\'s payment calendar outlines every draw before buyers sign.',
    researchDetail:
      'Average Sunstone deposits total around $15K; schedules are detailed in purchase agreements Dr. Duffy reviews line by line.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 25,
    category: 'process',
    question: 'What pre-approval documents should buyers prepare at lot reservation?',
    answer:
      'Bring a DU/LP approval, last two paystubs, two months of bank statements, and documentation for contingent sales. Preferred lenders convert pre-quals to full approvals once documents are ready. Dr. Duffy audits paperwork before tours to ensure buyers can reserve lots instantly.',
    researchDetail:
      'Preferred lender checklists highlight missing bank statements as the top reason lot reservations get delayed—insight from Dr. Duffy\'s lender partners.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 26,
    category: 'process',
    question: 'How do design studio upgrade costs compare to post-close renovations?',
    answer:
      'Structural electrical, plumbing, and cabinetry upgrades cost 30–40% less during construction than post-close retrofits. Decorative lighting or hardware can wait until after closing. Dr. Duffy\'s ROI planner ranks upgrades by appraisal impact so you deploy funds strategically.',
    researchDetail:
      'Structured wiring additions price at $250 per drop during framing versus $450+ for post-close retrofits—figures tracked by Dr. Duffy.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 27,
    category: 'process',
    question: 'What inspection rights should buyers insist on when signing?',
    answer:
      'Ensure the contract explicitly permits third-party inspections at pre-drywall, mechanical completion, and final walk; some builders limit access. Dr. Duffy negotiates inspection clauses before deposits go hard to protect transparency. Keep documentation of every clause in writing.',
    researchDetail:
      'Woodside contracts reference inspection rights in Section 12—Dr. Duffy reviews and initials each clause with clients.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 28,
    category: 'process',
    question: 'How frequently should buyers expect construction updates beyond the portal?',
    answer:
      'Woodside posts weekly portal updates, but Dr. Duffy schedules biweekly site visits, drone footage, and milestone checklists for accuracy. She also sets standing calls with superintendents to resolve issues proactively. Consistent updates prevent surprises at closing.',
    researchDetail:
      'Dr. Duffy\'s update template pairs portal notes with date-stamped photos, verifying progress and creating permanent records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 29,
    category: 'market',
    question: 'How do quick move-in marketing blasts differ from Dr. Duffy\'s inventory sheets?',
    answer:
      'Builder blasts highlight publicly available specs, often after insiders claim top lots; Dr. Duffy\'s sheets list every under-construction home, canceled contracts, and future releases. Her data reveals inventory before general marketing, giving clients first-mover advantage. Early access can secure view lots or premium elevations.',
    researchDetail:
      'In March 2025 Dr. Duffy reported two Sunstone quick move-ins 48 hours before Woodside\'s marketing email—both reserved by her clients immediately.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 6,
    order: 30,
    category: 'market',
    question: 'What appraisal buffer should buyers maintain when adding upgrades?',
    answer:
      'Maintain at least a 5% buffer between contract price and appraisal to accommodate heavy upgrades without risking value gaps. Dr. Duffy pre-reviews pending comps and upgrade allowances before clients finalize design studio choices. Avoid over-customizing beyond your neighborhood\'s resale ceiling.',
    researchDetail:
      'Recent appraisals credited roughly 60 cents per dollar on kitchen/bath upgrades; Dr. Duffy retains anonymized appraisal packets to guide decisions.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 31,
    category: 'market',
    question: 'How do maintenance reserves for new builds compare to 15-year-old resales?',
    answer:
      'New Woodside homes typically require 1% of value annually for maintenance reserves; 15-year-old resales demand closer to 2.5% due to HVAC, roof, and appliance replacement cycles. Dr. Duffy\'s 10-year maintenance models quantify the difference so budgets stay realistic. Lower reserves free cash for savings or upgrades.',
    researchDetail:
      'Dr. Duffy\'s maintenance spreadsheets show new Woodside owners averaging $5,800 annually on $580K homes versus $14,000 for similar resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 32,
    category: 'education',
    question: 'How does Dr. Duffy\'s comparison matrix keep builder evaluations objective?',
    answer:
      'Her matrix scores Woodside, Lennar, Pulte, Tri Pointe, Toll Brothers, and Shea across energy specs, structural flexibility, incentives, warranty response, and HOA health. Scores draw from inspection reports, homeowner interviews, and service logs—not marketing. Clients customize the matrix to their priorities so decisions stay research-driven.',
    researchDetail:
      'Latest matrix ranks Woodside 4.5/5 for energy efficiency while Lennar scores 3.8/5—data Dr. Duffy updates quarterly.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 33,
    category: 'education',
    question: 'Which questions uncover hidden costs in builder fine print?',
    answer:
      'Ask how long incentives last, whether lot premiums adjust with views, what\'s included in landscaping, which appliances are standard, and how HOAs treat rentals. Dr. Duffy\'s 23-point checklist flushes out fees and restrictions that sales reps often gloss over. Armed with answers, you negotiate from strength.',
    researchDetail:
      'In 2024 Dr. Duffy saved a client $4,200 by catching a duplicated landscape fee hidden in the options list—thanks to the checklist.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 34,
    category: 'education',
    question: 'How do elevation choices influence heat gain and energy bills?',
    answer:
      'Elevations with deeper overhangs, recessed windows, and contrasting stucco reduce solar gain on south/west exposures. Dr. Duffy runs sun-path simulations to recommend elevations that minimize cooling loads. Form and function go hand-in-hand—choose aesthetics that help your energy budget.',
    researchDetail:
      'Simulations show Aries Elevation C cuts solar heat gain by 12% versus Elevation A on south-facing lots—Dr. Duffy\'s modeling data.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 35,
    category: 'education',
    question: 'How should first-time buyers budget for post-close essentials?',
    answer:
      'Set aside $20K–$25K for backyard landscaping, window coverings, appliances (if excluded), and ceiling fans. Dr. Duffy obtains vendor bids before closing so new owners have accurate figures. Planning ahead prevents credit-card splurges after move-in.',
    researchDetail:
      'Average 2024 Sunstone buyers spent $22,700 on post-close essentials—based on invoices tracked in Dr. Duffy\'s files.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 36,
    category: 'education',
    question: 'Which upgrades deliver the strongest appraisal impact?',
    answer:
      'Continuous flooring, quartz counters, upgraded cabinetry, and primary bath finishes typically earn the highest appraisal credit. Decorative lighting or hardware swaps can wait. Dr. Duffy\'s ROI tool prioritizes upgrades so you don\'t overinvest in low-return items.',
    researchDetail:
      'Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024 Sunstone resales—figures kept in Dr. Duffy\'s appraisal library.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 37,
    category: 'education',
    question: 'How does Dr. Duffy leverage superintendent relationships to benefit buyers?',
    answer:
      'She maintains direct contacts with every superintendent, attends pre-construction meetings, and logs punch-list deadlines in shared trackers. Escalations happen fast without waiting for portal queues. That insider access keeps builds on schedule and issues resolved quickly.',
    researchDetail:
      'Dr. Duffy resolved a framing oversight within 48 hours by contacting the Sunstone superintendent she\'d worked with on prior builds—documented in her project journal.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 38,
    category: 'process',
    question: 'How do you ensure builder update portals match job-site reality?',
    answer:
      'Dr. Duffy cross-checks portal notes with on-site photos, drone footage, and third-party inspection reports. Any discrepancies trigger superintendent follow-ups with written corrective action. Keeping builders accountable reduces closing-day surprises.',
    researchDetail:
      'Her update template pairs portal entries with timestamped field photos and inspector notes for every milestone.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 6,
    order: 39,
    category: 'market',
    question: 'How does real-time inventory tracking give buyers negotiation leverage?',
    answer:
      'Dr. Duffy updates spreadsheets every Friday with spec homes, cancellations, and future releases so she knows when the builder needs movement. Armed with data, she secures extras like appliance packages or landscaping credits. Negotiating with facts beats reacting to sales rhetoric.',
    researchDetail:
      'March 2025 data showing eight Sunstone quick move-ins led directly to stacked incentives for Dr. Duffy\'s buyers—tracked in her inventory notes.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 6,
    order: 40,
    category: 'market',
    question: 'How can buyers model long-term value using real numbers, not hype?',
    answer:
      'Combine appreciation trends, HOA strength, energy savings, and incentive value to forecast five-year equity. Dr. Duffy\'s spreadsheets stress-test scenarios using GLVAR comps, utility data, and amortization schedules. Quantitative projections replace guesswork so decisions stay grounded.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024 with average $102K resale gains—data Dr. Duffy builds into her equity models.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 1,
    category: 'company',
    question: 'Why do relocation buyers seek Dr. Duffy\'s guidance on Woodside specifically?',
    answer:
      'Relocation clients lean on Dr. Duffy because she keeps a proprietary database of 500+ new construction closings, including every Woodside superintendent, designer, and warranty lead. She benchmarks lifestyle perks, commute realities, and HOA rules before you even tour. That prework saves days of guesswork for families arriving from out of state.',
    researchDetail:
      'Dr. Duffy\'s relocation matrix cross-references school scores, hospital commute times, and HOA reserves for each active Woodside neighborhood.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 7,
    order: 2,
    category: 'company',
    question: 'How does Dr. Duffy verify Woodside\'s build quality beyond brochures?',
    answer:
      'She performs independent field audits, pulling county inspection logs, warranty claims, and third-party reports to validate builder claims. Those findings feed into her comparison charts so buyers see objective data. It\'s buyer-side research—not marketing—from someone who has walked every construction phase.',
    researchDetail:
      'Clark County\'s online inspection portal shows pass/fail notes; Dr. Duffy archives them for each Woodside phase to spot recurring issues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 3,
    category: 'company',
    question: 'What makes Woodside\'s sales process smoother when Dr. Duffy is involved?',
    answer:
      'Her relationships with sales counselors and superintendents remove friction—appointments get scheduled faster, structural deadlines stay clear, and escalation paths open immediately. Buyers still sign directly with Woodside, but Dr. Duffy keeps the builder accountable at every step. It\'s a buyer advocate working alongside the onsite team.',
    researchDetail:
      'Dr. Duffy stores escalation contact trees for each community so buyers reach decision-makers within hours, not days.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 4,
    category: 'specs',
    question: 'How does Dr. Duffy audit energy specs to protect buyer budgets?',
    answer:
      'She reviews mechanical schedules, HERS certificates, and NV Energy usage projections for every plan. Those numbers feed a 10-year cost-of-ownership model comparing Woodside to resale options. Buyers see how efficiency lowers total monthly spend, which often justifies higher upfront pricing.',
    researchDetail:
      'Energy models in Dr. Duffy\'s workbook use NV Energy tiered rates, builder-provided kWh estimates, and insulation specs verified during pre-drywall.',
    cta: `Let's compare all your options - call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 5,
    category: 'specs',
    question: 'How does Dr. Duffy confirm smart-home tech works out of the box?',
    answer:
      'She coordinates low-voltage walkthroughs at pre-drywall to verify Cat6 drops, conduit locations, and panel terminations. After closing, her tech partners perform activation checks so Wi-Fi thermostats, smart garages, and security prewires go live without surprises. Buyer convenience stays front and center.',
    researchDetail:
      'Pre-drywall punch lists include photos of each low-voltage drop, signed off by the superintendent and stored in the client\'s portal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 6,
    category: 'specs',
    question: 'What structural details does Dr. Duffy document during inspections?',
    answer:
      'She photographs framing connections, anchor bolts, moisture barriers, and insulation coverage during third-party inspections. Any variance from plans goes into a correction log shared with the superintendent. That documentation protects warranties and future resale confidence.',
    researchDetail:
      'Her inspection binder includes labeled photos of sill plate anchors, roof truss hangers, and HVAC duct sealing for each buyer.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 7,
    category: 'specs',
    question: 'How does Dr. Duffy compare Woodside\'s kitchens to other builders from a cooking perspective?',
    answer:
      'Beyond listing finishes, she measures counter frontage, storage cubic footage, and appliance clearance for each plan. Then she contrasts the data with Lennar, Pulte, and Tri Pointe models so culinary buyers know which layout supports their workflow. It\'s ergonomics backed by tape-measure research.',
    researchDetail:
      'Her kitchen worksheet records island length, pantry volume, and fridge clearance for every model toured.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 8,
    category: 'specs',
    question: 'What does Dr. Duffy evaluate in Woodside\'s desert engineering package?',
    answer:
      'She inspects attic ventilation, radiant barrier coverage, stucco expansion joints, and garage insulation to confirm desert-ready execution. Those findings get compared with Clark County code baselines and competitor specs. Buyers see where Woodside excels and where upgrades might help.',
    researchDetail:
      'Inspection logs note temperature differentials between attic and living space to verify radiant barrier performance.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 9,
    category: 'floorplans',
    question: 'How does Dr. Duffy personalize floor-plan tours for each household?',
    answer:
      'She arrives with lifestyle questionnaires, furniture dimensions, and work-from-home needs compiled from discovery calls. During tours she overlays those needs onto plan options, capturing video and commentary for replay. Buyers leave knowing exactly how each space can flex for their family.',
    researchDetail:
      'Her plan playbooks include annotated diagrams showing desk placement, storage solutions, and traffic patterns specific to each client.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 7,
    order: 10,
    category: 'floorplans',
    question: 'Why does Dr. Duffy track option pricing down to the SKU level?',
    answer:
      'Because builder pricing shifts quarterly, she maintains historical logs of every structural and design option selected by clients. That data reveals which upgrades hold value and which ones inflate appraisals. Buyers decide upgrades with clarity instead of guesswork.',
    researchDetail:
      'Dr. Duffy\'s option ledger lists cost deltas for sliders, gen suites, and design packages dating back five years.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 11,
    category: 'floorplans',
    question: 'How does Dr. Duffy vet indoor/outdoor flow for entertainers?',
    answer:
      'She measures slider widths, patio depth, and kitchen pass-through lines while noting prevailing wind and sun angles. Her clients receive patio staging layouts showing how many guests the space can host comfortably. Entertaining becomes a planned experience, not an afterthought.',
    researchDetail:
      'Sun studies Dr. Duffy runs in Sunstone show evening shade coverage on north-facing patios extending 75% of the yard.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 12,
    category: 'floorplans',
    question: 'What structural pitfalls does Dr. Duffy help buyers avoid post-cutoff?',
    answer:
      'She flags commonly forgotten items—soft water loops, hose bibs, floor outlets, bathroom blocking—that cannot be added cheaply later. Clients sign off on a structural checklist before the day-21 deadline. That diligence eliminates costly change orders after framing.',
    researchDetail:
      'Her structural checklist covers 42 line items, including accessible shower blocking and EV conduit placement.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 13,
    category: 'pricing',
    question: 'How does Dr. Duffy model pricing scenarios for hesitant buyers?',
    answer:
      'She builds side-by-side comparisons with base price, structural upgrades, design packages, incentives, taxes, HOA dues, and expected utilities. That spreadsheet updates live as new incentives publish. Buyers get a transparent "true cost" sheet before they sign.',
    researchDetail:
      'Her pricing model references builder option sheets, lender quotes, tax calculators, and NV Energy projections for each plan.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 14,
    category: 'pricing',
    question: 'How does Dr. Duffy test incentive packages for hidden trade-offs?',
    answer:
      'She compares APR and lender fees with and without incentives, then checks closing statements from prior Woodside buyers. If a credit disappears, she renegotiates or shifts lenders. Incentives become a math equation, not a marketing headline.',
    researchDetail:
      'Closing disclosure archives reveal where incentives cannibalized other credits—insights Dr. Duffy uses to negotiate revisions.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 15,
    category: 'pricing',
    question: 'What equity forecasts does Dr. Duffy provide before contract?',
    answer:
      'She projects five-year appreciation using GLVAR comps, HOA reserves, amenity build-out status, and job-growth forecasts. Buyers see best, base, and conservative equity paths. That analysis makes long-term value part of the initial decision, not hindsight.',
    researchDetail:
      'Forecast models incorporate Moody\'s employment data, GLVAR price trends, and HOA reserve projections stored in Dr. Duffy\'s analytics suite.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 16,
    category: 'pricing',
    question: 'How does Dr. Duffy coach buyers through appraisal contingencies?',
    answer:
      'She reviews MLS pendings, builder closings, and option spend ratios to estimate appraisal risk. If risk is high, she positions backup comps, requests option credits, or strategizes appraisal reconsiderations. Buyers enter contract knowing exactly how to guard against value gaps.',
    researchDetail:
      'Her appraisal toolkit includes pre-written reconsideration templates and comp packages that align with VA, FHA, and conventional guidelines.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 17,
    category: 'market',
    question: 'How does Dr. Duffy monitor resale performance for future exit strategies?',
    answer:
      'She tracks MLS resale data monthly, noting days on market, list-to-sale ratios, price-per-foot shifts, and buyer feedback trends. Those insights feed into exit strategy plans she shares with current buyers. You purchase with a resale roadmap already mapped out.',
    researchDetail:
      'Her resale dashboard covers 2020–present transactions for every Woodside community, color-coded by appreciation tiers.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 18,
    category: 'market',
    question: 'How does Dr. Duffy help investors evaluate Woodside rental potential?',
    answer:
      'She analyzes rental comps, HOA leasing caps, property management fees, and prospective tenant pools for each community. Investors receive cash-flow projections with conservative vacancy rates and maintenance reserves. Decision-making stays data-driven, not speculative.',
    researchDetail:
      'Rental worksheets pull from LVRMLS leases, AirDNA short-term metrics where allowed, and SNWA utility averages.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 19,
    category: 'communities',
    question: 'How does Dr. Duffy match buyers to the right Woodside community?',
    answer:
      'Her intake process evaluates commute requirements, school needs, lifestyle amenities, and future growth preferences. She then overlays those criteria with Sunstone, Cadence, and Summerlin data. Buyers tour only the communities that truly fit their goals.',
    researchDetail:
      'Community scorecards rate each neighborhood on seven metrics—from HOA health to trail networks—compiled by Dr. Duffy.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 20,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate HOA documents for Woodside buyers?',
    answer:
      'She reviews covenants, budgets, reserve studies, and rental caps with a focus on long-term sustainability. Any red flags—like underfunded reserves or strict design limits—get flagged before contract. You enter with eyes wide open.',
    researchDetail:
      'Sunstone HOA reserves currently sit above 90% funded; Dr. Duffy verifies numbers in annual filings prior to buyer commitments.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 21,
    category: 'communities',
    question: 'How does Dr. Duffy incorporate commute analytics into community decisions?',
    answer:
      'She runs live drive tests at the buyer\'s actual rush-hour schedule, logs Waze and NDOT updates, and tracks upcoming road projects. That data informs lot orientation and community selection. Commute comfort becomes a quantified metric, not a guess.',
    researchDetail:
      'NDOT project timelines and average travel times get stored in her commute dashboard for Sunstone, Cadence, and Summerlin.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 22,
    category: 'communities',
    question: 'How does Dr. Duffy prep buyers for future amenity rollouts?',
    answer:
      'She confirms amenity budgets, construction schedules, and staffing plans directly with HOA boards and developer meetings. Buyers know when pools, parks, or co-working spaces truly open. That transparency protects against overpromised features.',
    researchDetail:
      'HOA meeting minutes documenting amenity timelines are saved in her digital client binders for reference.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 23,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate school pathways for growing families?',
    answer:
      'She maps zoning boundaries, magnet/charter applications, and private-school commute times, then aligns them with each buyer\'s goals. Education becomes part of the site-selection matrix. No buyer is surprised by rezoning after moving in.',
    researchDetail:
      'She monitors CCSD zoning proposals and charter board approvals, storing PDFs in each client\'s planning portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 24,
    category: 'process',
    question: 'How does Dr. Duffy keep builders accountable during construction?',
    answer:
      'She maintains spreadsheet trackers with milestone dates, superintendent commitments, and punch-list items. Weekly updates compare promised progress with actual site photos. Escalations happen fast if timelines slip.',
    researchDetail:
      'Milestone trackers log framing, mechanical, drywall, cabinets, and final clean dates alongside superintendent sign-offs.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 25,
    category: 'process',
    question: 'How does she assist with design studio overwhelm?',
    answer:
      'Before appointments she curates mood boards, resale-friendly palettes, and cost ladders keyed to each buyer\'s budget. During the session she tracks totals in real time, calling out selections that hurt appraisals. Buyers leave with curated design packages instead of impulse picks.',
    researchDetail:
      'Design spreadsheets include line-by-line pricing with notes on resale impact and maintenance considerations.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 26,
    category: 'process',
    question: 'How does Dr. Duffy prepare buyers for move-in orientation?',
    answer:
      'She provides a walk-through checklist covering appliance demos, warranty contacts, smart-home setup, and punch-list verification. Each orientation gets recorded so buyers can reference builder explanations later. Move-in day feels organized, not chaotic.',
    researchDetail:
      'Orientation checklists list 68 inspection points, from sprinkler zones to smart-thermostat programming, all signed off at closing.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 27,
    category: 'process',
    question: 'What post-close support does Dr. Duffy offer Woodside owners?',
    answer:
      'She schedules 30-day and 11-month warranty check-ins, connects owners with vetted landscapers and tech integrators, and keeps valuation updates on file. Her buyers stay plugged into community resources and equity forecasts long after they get keys.',
    researchDetail:
      'Warranty checklists include photos and issue logs uploaded to Woodside\'s portal with superintendent acknowledgment.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 7,
    order: 28,
    category: 'market',
    question: 'How does she differentiate speculative hype from actual demand?',
    answer:
      'By tracking MLS absorption, permit filings, employment reports, and rental occupancy, Dr. Duffy spots real demand drivers. She shares those dashboards with clients so they can sense when markets soften or heat up. Decisions lean on hard numbers, not sales pitches.',
    researchDetail:
      'Her demand dashboard pairs GLVAR absorption rates with Nevada DETR employment forecasts for each submarket.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 29,
    category: 'market',
    question: 'How does Dr. Duffy support buyers negotiating lot premiums?',
    answer:
      'She compares premium pricing history, viewshed analytics, and resale comps to show which premiums return value. If a lot doesn\'t justify the premium, she finds alternatives or negotiates concessions. Buyers leverage evidence, not emotion.',
    researchDetail:
      'Lot premium logs track price deltas versus final appraised value for more than 80 Woodside contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 30,
    category: 'market',
    question: 'What rental safeguards does she recommend for Woodside investors?',
    answer:
      'She reviews HOA short-term rules, secures landlord insurance quotes, and outlines cash reserves for vacancy and repairs. Investors also get introductions to vetted property managers familiar with Woodside warranties. Passive income stays protected.',
    researchDetail:
      'Her landlord readiness guide details HOA rental caps, SNWA utility averages, and expected maintenance allowances per community.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 31,
    category: 'education',
    question: 'How does Dr. Duffy teach first-time buyers the new construction process?',
    answer:
      'She hosts onboarding sessions covering financing, structural deadlines, inspections, warranty, and move-in logistics. Each buyer receives a timeline dashboard and glossary so unfamiliar terms never become roadblocks. Education is proactive, not reactionary.',
    researchDetail:
      'Onboarding packets include an 18-step roadmap with milestone checklists tailored to Woodside\'s build cadence.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 32,
    category: 'education',
    question: 'How does she help buyers balance dream upgrades with resale reality?',
    answer:
      'By ranking upgrades into "must-have," "nice-to-have," and "personal indulgence" categories, then showing how each affects appraisals and resale demand. Buyers can still personalize, but they do so with clear insight into future ROI. Luxury wants stay aligned with equity goals.',
    researchDetail:
      'Upgrade scorecards grade selections on cost, maintenance, and appraisal credit so buyers see trade-offs instantly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 33,
    category: 'education',
    question: 'How does Dr. Duffy help buyers compare Woodside to resale alternatives?',
    answer:
      'She builds total cost-of-ownership comparisons factoring upgrade budgets, utilities, maintenance, and financing scenarios. Resale tours follow alongside new construction so buyers experience both paths. The final decision comes from informed contrast, not speculation.',
    researchDetail:
      'Comparison worksheets combine MLS comps, utility estimates, and projected maintenance for 10-year horizons.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 34,
    category: 'education',
    question: 'How does she vet third-party contractors who finish Woodside homes?',
    answer:
      'Dr. Duffy maintains a vetted vendor list for landscaping, window coverings, technology integration, and home maintenance. Vendors must carry proper licensing, insurance, and Woodside familiarity before joining her roster. Buyers plug into trusted resources immediately after close.',
    researchDetail:
      'Vendor scorecards log license verification dates, insurance certificates, and client satisfaction ratings.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 35,
    category: 'education',
    question: 'How does Dr. Duffy prevent surprise costs during closing?',
    answer:
      'She pre-audits closing statements, cross-referencing incentive agreements, proration tables, and rate-lock fees. Any discrepancy gets flagged before signing. Buyers sit at the closing table knowing every line item is accurate.',
    researchDetail:
      'Closing audit sheets compare loan estimates with final disclosures to ensure incentives and credits carry through.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 36,
    category: 'process',
    question: 'How does she manage inspection follow-ups so nothing slips?',
    answer:
      'Each inspection finding enters a shared tracker with due dates and superintendent acknowledgments. Dr. Duffy verifies completion personally or through third-party inspectors. Buyers never wonder whether punch-list items were addressed.',
    researchDetail:
      'Inspection follow-up tracker links photos, superintendent responses, and completion timestamps for accountability.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 37,
    category: 'process',
    question: 'What communication cadence does Dr. Duffy establish with builders?',
    answer:
      'She sets weekly email updates, biweekly field visits, and milestone calls with superintendents at contract signing. Those cadences go into writing so everyone stays aligned. Buyers enjoy transparent, predictable communication for the entire build.',
    researchDetail:
      'Communication templates summarize progress, photos, and next steps in a consistent format shared with buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 7,
    order: 38,
    category: 'market',
    question: 'How does Dr. Duffy help buyers plan for market shifts after closing?',
    answer:
      'She provides annual valuation check-ins, refinance reviews, and rental strategy updates. Buyers know when equity milestones or rate drops make sense to act on. Homeownership becomes a managed asset, not a static purchase.',
    researchDetail:
      'Annual equity reports combine current MLS comps, amortization progress, and utility savings totals from Dr. Duffy\'s databases.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 39,
    category: 'market',
    question: 'How does she incorporate regional economic data into the buying decision?',
    answer:
      'Dr. Duffy tracks job growth, tourism metrics, and corporate relocations to gauge housing demand. She overlays those indicators with Woodside release schedules so buyers buy into strength, not softness. It\'s macroeconomics applied directly to your lot decision.',
    researchDetail:
      'Her economic dashboard blends Moody\'s Analytics employment forecasts with LVCVA tourism stats and Las Vegas Convention pipeline updates.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 7,
    order: 40,
    category: 'education',
    question: 'How does Dr. Duffy keep buyers confident from contract to close?',
    answer:
      'She backs every step with research—option ROI, inspection data, incentive math, commute analytics, and equity forecasts. Buyers know facts before they sign, not after. Confidence comes from having a dedicated research partner throughout the journey.',
    researchDetail:
      'Clients receive a digital binder housing every checklist, report, and timeline update for reference long after closing.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 1,
    category: 'company',
    question: 'How much of Clark County\'s new-home activity does Woodside represent in 2025?',
    answer:
      'Year-to-date Woodside accounts for about 6.8% of Clark County single-family permits, trailing only Lennar and Pulte. Activity clusters around Sunstone, Cadence, and Vireo in Summerlin West. Dr. Duffy monitors permit logs weekly so clients can anticipate releases and lot premiums. Pair permits with absorption rates to time your purchase.',
    researchDetail:
      'Clark County Planning Commission issued 148 Woodside permits between Jan–Apr 2025 versus 162 in the same 2024 window, suggesting incentive sweeteners may surface.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 8,
    order: 2,
    category: 'company',
    question: 'How does Woodside\'s corporate ownership translate into Las Vegas build quality?',
    answer:
      'Sekisui House\'s 75-year sustainability program governs Las Vegas specs—think SHAWOOD-inspired insulation targets, waste recycling goals, and third-party energy audits. Dr. Duffy compares corporate QA manuals across builders to reveal where Woodside outperforms regional competitors. Deep institutional backing also keeps construction crews stable, even when labor markets tighten.',
    researchDetail:
      'Sekisui mandates quarterly sustainability audits; Sunstone crews recycled 72% of construction waste in 2024 according to reports Dr. Duffy reviews.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 3,
    category: 'company',
    question: 'How does Life-Inspired Design outperform Lennar\'s Next Gen layouts?',
    answer:
      'Life-Inspired plans emphasize sight lines, storage, and indoor-outdoor flow, while Lennar\'s Next Gen suites often sacrifice pantry space and loft functionality. Dr. Duffy overlays plan schematics to show Woodside kitchens averaging 18% more counter frontage and smoother circulation. Touring with her annotated floor plans helps you visualize real-life routines.',
    researchDetail:
      "Aries' pantry offers 54 cubic feet of storage versus Lennar's comparable 41 cubic feet—measurements taken during Dr. Duffy's walkthroughs.",
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 4,
    category: 'specs',
    question: 'How do Woodside HERS scores impact actual NV Energy bills?',
    answer:
      'A Sunstone Lyra testing at HERS 52 typically lands near $160/month during peak summer, while a HERS 75 resale can exceed $250. Dr. Duffy builds energy models using NV Energy tier rates so buyers can budget accurately. Lower loads cushion against future rate hikes and boost resale marketing.',
    researchDetail:
      'NV Energy\'s 2025 Tier 2 rate is 13.4¢/kWh; Dr. Duffy\'s spreadsheet shows Lyra owners using 1,200 kWh/month stay within Tier 2 thanks to efficient shells.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 5,
    category: 'specs',
    question: 'Does Woodside offer solar-ready infrastructure?',
    answer:
      'Sunstone and Cadence communities pre-install rooftop conduit, 200A panels, and structural bracing for 3.0 psf solar arrays. Lennar often includes full solar, while Toll Brothers leaves it entirely post-close. Dr. Duffy tracks NV Energy interconnection steps and incentives so you can plan financing. Solar readiness trims install costs when you decide to add panels.',
    researchDetail:
      'Electrical diagrams show solar conduit from attic to panel with dedicated disconnects—details Dr. Duffy reviews during plan check.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 6,
    category: 'specs',
    question: 'What HVAC specs differentiate Woodside from Pulte in the desert?',
    answer:
      'Woodside installs 16-SEER two-stage condensers with ECM motors, programmable thermostats, and MERV-11 filtration as standard, while Pulte often starts at 14-SEER single-stage unless upgraded. Dr. Duffy\'s HVAC comparison grid details equipment brands, warranties, and zoned-thermostat options. Superior HVAC lowers bills and enhances indoor-air quality.',
    researchDetail:
      'Sunstone systems use Lennox ML17XC1 condensers with 5-year parts warranties extendable to 10 years—documents Dr. Duffy secures for buyers.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 7,
    category: 'specs',
    question: 'What structural engineering resists extreme temperature swings?',
    answer:
      'Plans call for 2x6 exterior walls in select models, R-19 batts, R-38 attic insulation, and TechShield radiant barriers to reduce heat gain by up to 30°F. Dr. Duffy cross-checks structural load calculations and insulation schedules to confirm compliance. These envelopes outperform many Shea or Tri Pointe builds in the same price tier.',
    researchDetail:
      'Filing documents show R-19 batt insulation in 2x6 walls plus R-38 blown insulation meeting 2021 IECC standards—validated through Dr. Duffy\'s pre-drywall inspections.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 8,
    category: 'specs',
    question: 'How robust is Woodside\'s low-voltage prewire package?',
    answer:
      'Cat6 runs to bedrooms, offices, and media walls plus RG6 coax and security rough-ins come standard, with optional conduit for future AV. Toll Brothers charges extra for similar infrastructure. Dr. Duffy inventories low-voltage drops during pre-drywall so buyers know exactly what\'s installed. Wiring early avoids expensive retrofits.',
    researchDetail:
      'Prewire diagrams allocate 1.25-inch conduit from media wall to attic for AV cabling—Dr. Duffy photographs placements for client records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 9,
    category: 'specs',
    question: 'How do Woodside kitchens compare to Tri Pointe\'s designer offerings?',
    answer:
      'Woodside includes 42-inch uppers, soft-close hinges, and six pendant-ready circuits standard, while Tri Pointe often reserves those for upgrades. Butcher-block extensions, waterfall counters, and dual ovens price competitively in Woodside\'s studio. Dr. Duffy tracks SKU-level costs to help buyers allocate upgrade funds wisely.',
    researchDetail:
      'Virgo\'s waterfall island edge costs around $3,200—roughly 15% less than Tri Pointe\'s comparable upgrade list.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 8,
    order: 10,
    category: 'specs',
    question: 'How expansive are Woodside\'s covered patios in current releases?',
    answer:
      'Standard loggias span roughly 12x10 feet with options to extend another 4–8 feet depending on lot depth. Structural tie-ins support sliders, privacy screens, and outdoor kitchens. Dr. Duffy models sun angles so buyers know midday conditions before pouring decks. Compare patio footage when evaluating builder options.',
    researchDetail:
      'Capella patio extensions add 120 square feet (12x10 to 12x20) for about $7,800—priced via builder structural sheets.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 11,
    category: 'floorplans',
    question: 'How does Woodside\'s multi-gen design compare to Lennar\'s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar\'s suites can feel isolated or share HVAC without zoning. Dr. Duffy evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Duffy verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 12,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Duffy\'s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside\'s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Duffy walks through.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 13,
    category: 'pricing',
    question: 'How do price-per-square-foot figures compare by community right now?',
    answer:
      'As of May 2025 Sunstone averages ~$258/ft², Cadence ~$244/ft², and Summerlin Vireo ~$282/ft² for Woodside resales. Lennar and Pulte hover within ±$10/ft² but typically offer fewer structural options. Dr. Duffy\'s dashboards update weekly so buyers negotiate with current data. Evaluate cost per foot alongside build quality.',
    researchDetail:
      'GLVAR closed sales Jan–Apr 2025 confirm Sunstone Woodside resales averaging $258/ft²—data stored in Dr. Duffy\'s market notebooks.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 14,
    category: 'pricing',
    question: 'How aggressive are current buy-down programs compared to late 2024?',
    answer:
      'Q2 2025 incentives still yield 2–3 point buy-downs but require quick move-in closings or tight loan timelines; late 2024 offered more relaxed locks. Dr. Duffy negotiates stacked credits—combining buydowns with appliance or landscaping packages—when inventory rises. Always review the latest incentive matrix before signing.',
    researchDetail:
      'May 2025 incentive sheets show 2-point permanent plus 1-point temporary buy-down on quick move-ins with 30-day closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 15,
    category: 'pricing',
    question: 'How do property taxes vary across Woodside communities?',
    answer:
      'Sunstone\'s effective tax rate is about 0.72% of assessed value with no SIDs, Cadence is near 0.79% plus low SIDs, and Summerlin enclaves hover around 0.74% with village fees. Dr. Duffy calculates monthly escrows so buyers understand total housing cost. SIDs/LIDs must be factored into affordability projections.',
    researchDetail:
      'Cadence SID statements show ~$45/month remaining on 20-year amortizations—data pulled from the Clark County Treasurer portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 16,
    category: 'pricing',
    question: 'How do extended rate locks work with Woodside\'s preferred lenders?',
    answer:
      'Extended locks up to 360 days typically require a 1% lock fee credited at closing if you proceed, with float-down options in the final 60 days. Non-preferred lenders may lack construction-length locks, exposing you to rate volatility. Dr. Duffy models the cost of locking early versus shorter locks to hedge your exposure.',
    researchDetail:
      'Woodside Mortgage\'s 360-day lock charges 1% upfront, refundable if the builder delays beyond 30 days past the lock—terms documented in lender summaries Dr. Duffy reviews.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 17,
    category: 'pricing',
    question: 'Can VA buyers stack Woodside incentives effectively?',
    answer:
      'Yes—preferred lenders pair VA loans with buy-downs and closing credits while respecting VA funding rules. Dr. Duffy cross-checks appraisals to guard against value gaps created by large incentives. Planning rate locks and appraisals in sync keeps VA deals smooth.',
    researchDetail:
      'In 2024 Dr. Duffy closed four Cadence VA purchases combining 2-point buy-downs with $7K in builder-paid closing costs—documented in lender worksheets.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 18,
    category: 'market',
    question: 'How does Woodside appreciate versus Shea or Toll Brothers over five years?',
    answer:
      'Sunstone Woodside resales gained 31% since 2020, Shea\'s Spur Cross 28%, and Toll Brothers' Mira Villa around 24%, all beating the Clark County average of 22%. Energy efficiency and HOA quality sustain buyer demand even when rates rise. Dr. Duffy stress-tests appreciation scenarios using GLVAR comps and employment forecasts.',
    researchDetail:
      \'GLVAR data confirms average $102K equity gains on $520K Sunstone purchases between 2020 and 2024—numbers Dr. Duffy plugs into her projection models.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 19,
    category: 'communities',
    question: 'Which Woodside communities will release new lots soon?',
    answer:
      'Sunstone Phase 3 launches in late Q2 2025 with 42 north-facing lots, while Cadence continues rolling releases each quarter. Summerlin\'s Vireo has limited inventory and may see a final release later in 2025. Dr. Duffy\'s builder contacts flag these drops before sales offices go public. Being early lets you secure premium orientations.',
    researchDetail:
      'Dr. Duffy maintains a private calendar of superintendent release dates, deposit requirements, and lot premiums for every Woodside site.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 8,
    order: 20,
    category: 'communities',
    question: 'What amenities distinguish Woodside neighborhoods from competitors?',
    answer:
      'Sunstone delivers a 4,000 sq ft amenity hub, pools, fitness rooms, co-working, and 15 miles of trails; Cadence offers a 50-acre park and splash pads; Summerlin adds golf and clubhouses. Lennar\'s Skye Canyon emphasizes athletic amenities, while Toll Brothers leans toward boutique clubs. Dr. Duffy tours each amenity set so the lifestyle match is deliberate.',
    researchDetail:
      'Sunstone\'s amenity center is funded and scheduled to open mid-2025, with staffing already budgeted in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 21,
    category: 'communities',
    question: 'How do HOA dues compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence charges around $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Duffy models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 22,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Duffy drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 23,
    category: 'communities',
    question: 'How do school options stack up for Woodside buyers?',
    answer:
      'Sunstone feeds Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus CCSD schools; Summerlin provides magnet and private options. A K-8 charter is planned inside Sunstone for 2026. Dr. Duffy compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 24,
    category: 'process',
    question: 'How should buyers stage deposit releases to preserve cash?',
    answer:
      'Woodside typically collects deposits in phases—contract, structural lock, and design studio—totaling $10K–$20K. Staggering deposits keeps liquidity available for appraisal gaps or rate-lock fees. Dr. Duffy\'s payment calendar outlines every draw before buyers sign.',
    researchDetail:
      'Average Sunstone deposits total around $15K; schedules are detailed in purchase agreements Dr. Duffy reviews line by line.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 25,
    category: 'process',
    question: 'What pre-approval documents should buyers prepare at lot reservation?',
    answer:
      'Bring a DU/LP approval, last two paystubs, two months of bank statements, and documentation for contingent sales. Preferred lenders convert pre-quals to full approvals once documents are ready. Dr. Duffy audits paperwork before tours to ensure buyers can reserve lots instantly.',
    researchDetail:
      'Preferred lender checklists highlight missing bank statements as the top reason lot reservations get delayed—insight from Dr. Duffy\'s lender partners.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 26,
    category: 'process',
    question: 'How do design studio upgrade costs compare to post-close renovations?',
    answer:
      'Structural electrical, plumbing, and cabinetry upgrades cost 30–40% less during construction than post-close retrofits. Decorative lighting or hardware can wait until after closing. Dr. Duffy\'s ROI planner ranks upgrades by appraisal impact so you deploy funds strategically.',
    researchDetail:
      'Structured wiring additions price at $250 per drop during framing versus $450+ for post-close retrofits—figures tracked by Dr. Duffy.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 27,
    category: 'process',
    question: 'What inspection rights should buyers insist on when signing?',
    answer:
      'Ensure the contract explicitly permits third-party inspections at pre-drywall, mechanical completion, and final walk; some builders limit access. Dr. Duffy negotiates inspection clauses before deposits go hard to protect transparency. Keep documentation of every clause in writing.',
    researchDetail:
      'Woodside contracts reference inspection rights in Section 12—Dr. Duffy reviews and initials each clause with clients.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 28,
    category: 'process',
    question: 'How frequently should buyers expect construction updates beyond the portal?',
    answer:
      'Woodside posts weekly portal updates, but Dr. Duffy schedules biweekly site visits, drone footage, and milestone checklists for accuracy. She also sets standing calls with superintendents to resolve issues proactively. Consistent updates prevent surprises at closing.',
    researchDetail:
      'Dr. Duffy\'s update template pairs portal notes with date-stamped photos, verifying progress and creating permanent records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 29,
    category: 'market',
    question: 'How do quick move-in marketing blasts differ from Dr. Duffy\'s inventory sheets?',
    answer:
      'Builder blasts highlight publicly available specs, often after insiders claim top lots; Dr. Duffy\'s sheets list every under-construction home, canceled contracts, and future releases. Her data reveals inventory before general marketing, giving clients first-mover advantage. Early access can secure view lots or premium elevations.',
    researchDetail:
      'In March 2025 Dr. Duffy reported two Sunstone quick move-ins 48 hours before Woodside\'s marketing email—both reserved by her clients immediately.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 8,
    order: 30,
    category: 'market',
    question: 'What appraisal buffer should buyers maintain when adding upgrades?',
    answer:
      'Maintain at least a 5% buffer between contract price and appraisal to accommodate heavy upgrades without risking value gaps. Dr. Duffy pre-reviews pending comps and upgrade allowances before clients finalize design studio choices. Avoid over-customizing beyond your neighborhood\'s resale ceiling.',
    researchDetail:
      'Recent appraisals credited roughly 60 cents per dollar on kitchen/bath upgrades; Dr. Duffy retains anonymized appraisal packets to guide decisions.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 31,
    category: 'market',
    question: 'How do maintenance reserves for new builds compare to 15-year-old resales?',
    answer:
      'New Woodside homes typically require 1% of value annually for maintenance reserves; 15-year-old resales demand closer to 2.5% due to HVAC, roof, and appliance replacement cycles. Dr. Duffy\'s 10-year maintenance models quantify the difference so budgets stay realistic. Lower reserves free cash for savings or upgrades.',
    researchDetail:
      'Dr. Duffy\'s maintenance spreadsheets show new Woodside owners averaging $5,800 annually on $580K homes versus $14,000 for similar resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 32,
    category: 'education',
    question: 'How does Dr. Duffy\'s comparison matrix keep builder evaluations objective?',
    answer:
      'Her matrix scores Woodside, Lennar, Pulte, Tri Pointe, Toll Brothers, and Shea across energy specs, structural flexibility, incentives, warranty response, and HOA health. Scores draw from inspection reports, homeowner interviews, and service logs—not marketing. Clients customize the matrix to their priorities so decisions stay research-driven.',
    researchDetail:
      'Latest matrix ranks Woodside 4.5/5 for energy efficiency while Lennar scores 3.8/5—data Dr. Duffy updates quarterly.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 33,
    category: 'education',
    question: 'Which questions uncover hidden costs in builder fine print?',
    answer:
      'Ask how long incentives last, whether lot premiums adjust with views, what\'s included in landscaping, which appliances are standard, and how HOAs treat rentals. Dr. Duffy\'s 23-point checklist flushes out fees and restrictions that sales reps often gloss over. Armed with answers, you negotiate from strength.',
    researchDetail:
      'In 2024 Dr. Duffy saved a client $4,200 by catching a duplicated landscape fee hidden in the options list—thanks to the checklist.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 34,
    category: 'education',
    question: 'How do elevation choices influence heat gain and energy bills?',
    answer:
      'Elevations with deeper overhangs, recessed windows, and contrasting stucco reduce solar gain on south/west exposures. Dr. Duffy runs sun-path simulations to recommend elevations that minimize cooling loads. Form and function go hand-in-hand—choose aesthetics that help your energy budget.',
    researchDetail:
      'Simulations show Aries Elevation C cuts solar heat gain by 12% versus Elevation A on south-facing lots—Dr. Duffy\'s modeling data.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 35,
    category: 'education',
    question: 'How should first-time buyers budget for post-close essentials?',
    answer:
      'Set aside $20K–$25K for backyard landscaping, window coverings, appliances (if excluded), and ceiling fans. Dr. Duffy obtains vendor bids before closing so new owners have accurate figures. Planning ahead prevents credit-card splurges after move-in.',
    researchDetail:
      'Average 2024 Sunstone buyers spent $22,700 on post-close essentials—based on invoices tracked in Dr. Duffy\'s files.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 36,
    category: 'education',
    question: 'Which upgrades deliver the strongest appraisal impact?',
    answer:
      'Continuous flooring, quartz counters, upgraded cabinetry, and primary bath finishes typically earn the highest appraisal credit. Decorative lighting or hardware swaps can wait. Dr. Duffy\'s ROI tool prioritizes upgrades so you don\'t overinvest in low-return items.',
    researchDetail:
      'Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024 Sunstone resales—figures kept in Dr. Duffy\'s appraisal library.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 37,
    category: 'education',
    question: 'How does Dr. Duffy leverage superintendent relationships to benefit buyers?',
    answer:
      'She maintains direct contacts with every superintendent, attends pre-construction meetings, and logs punch-list deadlines in shared trackers. Escalations happen fast without waiting for portal queues. That insider access keeps builds on schedule and issues resolved quickly.',
    researchDetail:
      'Dr. Duffy resolved a framing oversight within 48 hours by contacting the Sunstone superintendent she\'d worked with on prior builds—documented in her project journal.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 38,
    category: 'process',
    question: 'How do you ensure builder update portals match job-site reality?',
    answer:
      'Dr. Duffy cross-checks portal notes with on-site photos, drone footage, and third-party inspection reports. Any discrepancies trigger superintendent follow-ups with written corrective action. Keeping builders accountable reduces closing-day surprises.',
    researchDetail:
      'Her update template pairs portal entries with timestamped field photos and inspector notes for every milestone.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 8,
    order: 39,
    category: 'market',
    question: 'How does real-time inventory tracking give buyers negotiation leverage?',
    answer:
      'Dr. Duffy updates spreadsheets every Friday with spec homes, cancellations, and future releases so she knows when the builder needs movement. Armed with data, she secures extras like appliance packages or landscaping credits. Negotiating with facts beats reacting to sales rhetoric.',
    researchDetail:
      'March 2025 data showing eight Sunstone quick move-ins led directly to stacked incentives for Dr. Duffy\'s buyers—tracked in her inventory notes.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 8,
    order: 40,
    category: 'market',
    question: 'How can buyers model long-term value using real numbers, not hype?',
    answer:
      'Combine appreciation trends, HOA strength, energy savings, and incentive value to forecast five-year equity. Dr. Duffy\'s spreadsheets stress-test scenarios using GLVAR comps, utility data, and amortization schedules. Quantitative projections replace guesswork so decisions stay grounded.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024 with average $102K resale gains—data Dr. Duffy builds into her equity models.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 1,
    category: 'company',
    question: 'Why do relocation buyers seek Dr. Duffy\'s guidance on Woodside specifically?',
    answer:
      'Relocation clients lean on Dr. Duffy because she keeps a proprietary database of 500+ new construction closings, including every Woodside superintendent, designer, and warranty lead. She benchmarks lifestyle perks, commute realities, and HOA rules before you even tour. That prework saves days of guesswork for families arriving from out of state.',
    researchDetail:
      'Dr. Duffy\'s relocation matrix cross-references school scores, hospital commute times, and HOA reserves for each active Woodside neighborhood.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 9,
    order: 2,
    category: 'company',
    question: 'How does Dr. Duffy verify Woodside\'s build quality beyond brochures?',
    answer:
      'She performs independent field audits, pulling county inspection logs, warranty claims, and third-party reports to validate builder claims. Those findings feed into her comparison charts so buyers see objective data. It\'s buyer-side research—not marketing—from someone who has walked every construction phase.',
    researchDetail:
      'Clark County\'s online inspection portal shows pass/fail notes; Dr. Duffy archives them for each Woodside phase to spot recurring issues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 3,
    category: 'company',
    question: 'What makes Woodside\'s sales process smoother when Dr. Duffy is involved?',
    answer:
      'Her relationships with sales counselors and superintendents remove friction—appointments get scheduled faster, structural deadlines stay clear, and escalation paths open immediately. Buyers still sign directly with Woodside, but Dr. Duffy keeps the builder accountable at every step. It\'s a buyer advocate working alongside the onsite team.',
    researchDetail:
      'Dr. Duffy stores escalation contact trees for each community so buyers reach decision-makers within hours, not days.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 4,
    category: 'specs',
    question: 'How does Dr. Duffy audit energy specs to protect buyer budgets?',
    answer:
      'She reviews mechanical schedules, HERS certificates, and NV Energy usage projections for every plan. Those numbers feed a 10-year cost-of-ownership model comparing Woodside to resale options. Buyers see how efficiency lowers total monthly spend, which often justifies higher upfront pricing.',
    researchDetail:
      'Energy models in Dr. Duffy\'s workbook use NV Energy tiered rates, builder-provided kWh estimates, and insulation specs verified during pre-drywall.',
    cta: `Let's compare all your options - call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 5,
    category: 'specs',
    question: 'How does Dr. Duffy confirm smart-home tech works out of the box?',
    answer:
      'She coordinates low-voltage walkthroughs at pre-drywall to verify Cat6 drops, conduit locations, and panel terminations. After closing, her tech partners perform activation checks so Wi-Fi thermostats, smart garages, and security prewires go live without surprises. Buyer convenience stays front and center.',
    researchDetail:
      'Pre-drywall punch lists include photos of each low-voltage drop, signed off by the superintendent and stored in the client\'s portal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 6,
    category: 'specs',
    question: 'What structural details does Dr. Duffy document during inspections?',
    answer:
      'She photographs framing connections, anchor bolts, moisture barriers, and insulation coverage during third-party inspections. Any variance from plans goes into a correction log shared with the superintendent. That documentation protects warranties and future resale confidence.',
    researchDetail:
      'Her inspection binder includes labeled photos of sill plate anchors, roof truss hangers, and HVAC duct sealing for each buyer.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 7,
    category: 'specs',
    question: 'How does Dr. Duffy compare Woodside\'s kitchens to other builders from a cooking perspective?',
    answer:
      'Beyond listing finishes, she measures counter frontage, storage cubic footage, and appliance clearance for each plan. Then she contrasts the data with Lennar, Pulte, and Tri Pointe models so culinary buyers know which layout supports their workflow. It\'s ergonomics backed by tape-measure research.',
    researchDetail:
      'Her kitchen worksheet records island length, pantry volume, and fridge clearance for every model toured.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 8,
    category: 'specs',
    question: 'What does Dr. Duffy evaluate in Woodside\'s desert engineering package?',
    answer:
      'She inspects attic ventilation, radiant barrier coverage, stucco expansion joints, and garage insulation to confirm desert-ready execution. Those findings get compared with Clark County code baselines and competitor specs. Buyers see where Woodside excels and where upgrades might help.',
    researchDetail:
      'Inspection logs note temperature differentials between attic and living space to verify radiant barrier performance.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 9,
    category: 'floorplans',
    question: 'How does Dr. Duffy personalize floor-plan tours for each household?',
    answer:
      'She arrives with lifestyle questionnaires, furniture dimensions, and work-from-home needs compiled from discovery calls. During tours she overlays those needs onto plan options, capturing video and commentary for replay. Buyers leave knowing exactly how each space can flex for their family.',
    researchDetail:
      'Her plan playbooks include annotated diagrams showing desk placement, storage solutions, and traffic patterns specific to each client.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 9,
    order: 10,
    category: 'floorplans',
    question: 'Why does Dr. Duffy track option pricing down to the SKU level?',
    answer:
      'Because builder pricing shifts quarterly, she maintains historical logs of every structural and design option selected by clients. That data reveals which upgrades hold value and which ones inflate appraisals. Buyers decide upgrades with clarity instead of guesswork.',
    researchDetail:
      'Dr. Duffy\'s option ledger lists cost deltas for sliders, gen suites, and design packages dating back five years.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 11,
    category: 'floorplans',
    question: 'How does Dr. Duffy vet indoor/outdoor flow for entertainers?',
    answer:
      'She measures slider widths, patio depth, and kitchen pass-through lines while noting prevailing wind and sun angles. Her clients receive patio staging layouts showing how many guests the space can host comfortably. Entertaining becomes a planned experience, not an afterthought.',
    researchDetail:
      'Sun studies Dr. Duffy runs in Sunstone show evening shade coverage on north-facing patios extending 75% of the yard.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 12,
    category: 'floorplans',
    question: 'What structural pitfalls does Dr. Duffy help buyers avoid post-cutoff?',
    answer:
      'She flags commonly forgotten items—soft water loops, hose bibs, floor outlets, bathroom blocking—that cannot be added cheaply later. Clients sign off on a structural checklist before the day-21 deadline. That diligence eliminates costly change orders after framing.',
    researchDetail:
      'Her structural checklist covers 42 line items, including accessible shower blocking and EV conduit placement.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 13,
    category: 'pricing',
    question: 'How does Dr. Duffy model pricing scenarios for hesitant buyers?',
    answer:
      'She builds side-by-side comparisons with base price, structural upgrades, design packages, incentives, taxes, HOA dues, and expected utilities. That spreadsheet updates live as new incentives publish. Buyers get a transparent "true cost" sheet before they sign.',
    researchDetail:
      'Her pricing model references builder option sheets, lender quotes, tax calculators, and NV Energy projections for each plan.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 14,
    category: 'pricing',
    question: 'How does Dr. Duffy test incentive packages for hidden trade-offs?',
    answer:
      'She compares APR and lender fees with and without incentives, then checks closing statements from prior Woodside buyers. If a credit disappears, she renegotiates or shifts lenders. Incentives become a math equation, not a marketing headline.',
    researchDetail:
      'Closing disclosure archives reveal where incentives cannibalized other credits—insights Dr. Duffy uses to negotiate revisions.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 15,
    category: 'pricing',
    question: 'What equity forecasts does Dr. Duffy provide before contract?',
    answer:
      'She projects five-year appreciation using GLVAR comps, HOA reserves, amenity build-out status, and job-growth forecasts. Buyers see best, base, and conservative equity paths. That analysis makes long-term value part of the initial decision, not hindsight.',
    researchDetail:
      'Forecast models incorporate Moody\'s employment data, GLVAR price trends, and HOA reserve projections stored in Dr. Duffy\'s analytics suite.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 16,
    category: 'pricing',
    question: 'How does Dr. Duffy coach buyers through appraisal contingencies?',
    answer:
      'She reviews MLS pendings, builder closings, and option spend ratios to estimate appraisal risk. If risk is high, she positions backup comps, requests option credits, or strategizes appraisal reconsiderations. Buyers enter contract knowing exactly how to guard against value gaps.',
    researchDetail:
      'Her appraisal toolkit includes pre-written reconsideration templates and comp packages that align with VA, FHA, and conventional guidelines.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 17,
    category: 'market',
    question: 'How does Dr. Duffy monitor resale performance for future exit strategies?',
    answer:
      'She tracks MLS resale data monthly, noting days on market, list-to-sale ratios, price-per-foot shifts, and buyer feedback trends. Those insights feed into exit strategy plans she shares with current buyers. You purchase with a resale roadmap already mapped out.',
    researchDetail:
      'Her resale dashboard covers 2020–present transactions for every Woodside community, color-coded by appreciation tiers.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 18,
    category: 'market',
    question: 'How does Dr. Duffy help investors evaluate Woodside rental potential?',
    answer:
      'She analyzes rental comps, HOA leasing caps, property management fees, and prospective tenant pools for each community. Investors receive cash-flow projections with conservative vacancy rates and maintenance reserves. Decision-making stays data-driven, not speculative.',
    researchDetail:
      'Rental worksheets pull from LVRMLS leases, AirDNA short-term metrics where allowed, and SNWA utility averages.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 19,
    category: 'communities',
    question: 'How does Dr. Duffy match buyers to the right Woodside community?',
    answer:
      'Her intake process evaluates commute requirements, school needs, lifestyle amenities, and future growth preferences. She then overlays those criteria with Sunstone, Cadence, and Summerlin data. Buyers tour only the communities that truly fit their goals.',
    researchDetail:
      'Community scorecards rate each neighborhood on seven metrics—from HOA health to trail networks—compiled by Dr. Duffy.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 20,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate HOA documents for Woodside buyers?',
    answer:
      'She reviews covenants, budgets, reserve studies, and rental caps with a focus on long-term sustainability. Any red flags—like underfunded reserves or strict design limits—get flagged before contract. You enter with eyes wide open.',
    researchDetail:
      'Sunstone HOA reserves currently sit above 90% funded; Dr. Duffy verifies numbers in annual filings prior to buyer commitments.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 21,
    category: 'communities',
    question: 'How does Dr. Duffy incorporate commute analytics into community decisions?',
    answer:
      'She runs live drive tests at the buyer\'s actual rush-hour schedule, logs Waze and NDOT updates, and tracks upcoming road projects. That data informs lot orientation and community selection. Commute comfort becomes a quantified metric, not a guess.',
    researchDetail:
      'NDOT project timelines and average travel times get stored in her commute dashboard for Sunstone, Cadence, and Summerlin.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 22,
    category: 'communities',
    question: 'How does Dr. Duffy prep buyers for future amenity rollouts?',
    answer:
      'She confirms amenity budgets, construction schedules, and staffing plans directly with HOA boards and developer meetings. Buyers know when pools, parks, or co-working spaces truly open. That transparency protects against overpromised features.',
    researchDetail:
      'HOA meeting minutes documenting amenity timelines are saved in her digital client binders for reference.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 23,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate school pathways for growing families?',
    answer:
      'She maps zoning boundaries, magnet/charter applications, and private-school commute times, then aligns them with each buyer\'s goals. Education becomes part of the site-selection matrix. No buyer is surprised by rezoning after moving in.',
    researchDetail:
      'She monitors CCSD zoning proposals and charter board approvals, storing PDFs in each client\'s planning portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 24,
    category: 'process',
    question: 'How does Dr. Duffy keep builders accountable during construction?',
    answer:
      'She maintains spreadsheet trackers with milestone dates, superintendent commitments, and punch-list items. Weekly updates compare promised progress with actual site photos. Escalations happen fast if timelines slip.',
    researchDetail:
      'Milestone trackers log framing, mechanical, drywall, cabinets, and final clean dates alongside superintendent sign-offs.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 25,
    category: 'process',
    question: 'How does she assist with design studio overwhelm?',
    answer:
      'Before appointments she curates mood boards, resale-friendly palettes, and cost ladders keyed to each buyer\'s budget. During the session she tracks totals in real time, calling out selections that hurt appraisals. Buyers leave with curated design packages instead of impulse picks.',
    researchDetail:
      'Design spreadsheets include line-by-line pricing with notes on resale impact and maintenance considerations.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 26,
    category: 'process',
    question: 'How does Dr. Duffy prepare buyers for move-in orientation?',
    answer:
      'She provides a walk-through checklist covering appliance demos, warranty contacts, smart-home setup, and punch-list verification. Each orientation gets recorded so buyers can reference builder explanations later. Move-in day feels organized, not chaotic.',
    researchDetail:
      'Orientation checklists list 68 inspection points, from sprinkler zones to smart-thermostat programming, all signed off at closing.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 27,
    category: 'process',
    question: 'What post-close support does Dr. Duffy offer Woodside owners?',
    answer:
      'She schedules 30-day and 11-month warranty check-ins, connects owners with vetted landscapers and tech integrators, and keeps valuation updates on file. Her buyers stay plugged into community resources and equity forecasts long after they get keys.',
    researchDetail:
      'Warranty checklists include photos and issue logs uploaded to Woodside\'s portal with superintendent acknowledgment.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 9,
    order: 28,
    category: 'market',
    question: 'How does she differentiate speculative hype from actual demand?',
    answer:
      'By tracking MLS absorption, permit filings, employment reports, and rental occupancy, Dr. Duffy spots real demand drivers. She shares those dashboards with clients so they can sense when markets soften or heat up. Decisions lean on hard numbers, not sales pitches.',
    researchDetail:
      'Her demand dashboard pairs GLVAR absorption rates with Nevada DETR employment forecasts for each submarket.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 29,
    category: 'market',
    question: 'How does Dr. Duffy support buyers negotiating lot premiums?',
    answer:
      'She compares premium pricing history, viewshed analytics, and resale comps to show which premiums return value. If a lot doesn\'t justify the premium, she finds alternatives or negotiates concessions. Buyers leverage evidence, not emotion.',
    researchDetail:
      'Lot premium logs track price deltas versus final appraised value for more than 80 Woodside contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 30,
    category: 'market',
    question: 'What rental safeguards does she recommend for Woodside investors?',
    answer:
      'She reviews HOA short-term rules, secures landlord insurance quotes, and outlines cash reserves for vacancy and repairs. Investors also get introductions to vetted property managers familiar with Woodside warranties. Passive income stays protected.',
    researchDetail:
      'Her landlord readiness guide details HOA rental caps, SNWA utility averages, and expected maintenance allowances per community.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 31,
    category: 'education',
    question: 'How does Dr. Duffy teach first-time buyers the new construction process?',
    answer:
      'She hosts onboarding sessions covering financing, structural deadlines, inspections, warranty, and move-in logistics. Each buyer receives a timeline dashboard and glossary so unfamiliar terms never become roadblocks. Education is proactive, not reactionary.',
    researchDetail:
      'Onboarding packets include an 18-step roadmap with milestone checklists tailored to Woodside\'s build cadence.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 32,
    category: 'education',
    question: 'How does she help buyers balance dream upgrades with resale reality?',
    answer:
      'By ranking upgrades into "must-have," "nice-to-have," and "personal indulgence" categories, then showing how each affects appraisals and resale demand. Buyers can still personalize, but they do so with clear insight into future ROI. Luxury wants stay aligned with equity goals.',
    researchDetail:
      'Upgrade scorecards grade selections on cost, maintenance, and appraisal credit so buyers see trade-offs instantly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 33,
    category: 'education',
    question: 'How does Dr. Duffy help buyers compare Woodside to resale alternatives?',
    answer:
      'She builds total cost-of-ownership comparisons factoring upgrade budgets, utilities, maintenance, and financing scenarios. Resale tours follow alongside new construction so buyers experience both paths. The final decision comes from informed contrast, not speculation.',
    researchDetail:
      'Comparison worksheets combine MLS comps, utility estimates, and projected maintenance for 10-year horizons.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 34,
    category: 'education',
    question: 'How does she vet third-party contractors who finish Woodside homes?',
    answer:
      'Dr. Duffy maintains a vetted vendor list for landscaping, window coverings, technology integration, and home maintenance. Vendors must carry proper licensing, insurance, and Woodside familiarity before joining her roster. Buyers plug into trusted resources immediately after close.',
    researchDetail:
      'Vendor scorecards log license verification dates, insurance certificates, and client satisfaction ratings.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 35,
    category: 'education',
    question: 'How does Dr. Duffy prevent surprise costs during closing?',
    answer:
      'She pre-audits closing statements, cross-referencing incentive agreements, proration tables, and rate-lock fees. Any discrepancy gets flagged before signing. Buyers sit at the closing table knowing every line item is accurate.',
    researchDetail:
      'Closing audit sheets compare loan estimates with final disclosures to ensure incentives and credits carry through.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 36,
    category: 'process',
    question: 'How does she manage inspection follow-ups so nothing slips?',
    answer:
      'Each inspection finding enters a shared tracker with due dates and superintendent acknowledgments. Dr. Duffy verifies completion personally or through third-party inspectors. Buyers never wonder whether punch-list items were addressed.',
    researchDetail:
      'Inspection follow-up tracker links photos, superintendent responses, and completion timestamps for accountability.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 37,
    category: 'process',
    question: 'What communication cadence does Dr. Duffy establish with builders?',
    answer:
      'She sets weekly email updates, biweekly field visits, and milestone calls with superintendents at contract signing. Those cadences go into writing so everyone stays aligned. Buyers enjoy transparent, predictable communication for the entire build.',
    researchDetail:
      'Communication templates summarize progress, photos, and next steps in a consistent format shared with buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 9,
    order: 38,
    category: 'market',
    question: 'How does Dr. Duffy help buyers plan for market shifts after closing?',
    answer:
      'She provides annual valuation check-ins, refinance reviews, and rental strategy updates. Buyers know when equity milestones or rate drops make sense to act on. Homeownership becomes a managed asset, not a static purchase.',
    researchDetail:
      'Annual equity reports combine current MLS comps, amortization progress, and utility savings totals from Dr. Duffy\'s databases.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 39,
    category: 'market',
    question: 'How does she incorporate regional economic data into the buying decision?',
    answer:
      'Dr. Duffy tracks job growth, tourism metrics, and corporate relocations to gauge housing demand. She overlays those indicators with Woodside release schedules so buyers buy into strength, not softness. It\'s macroeconomics applied directly to your lot decision.',
    researchDetail:
      'Her economic dashboard blends Moody\'s Analytics employment forecasts with LVCVA tourism stats and Las Vegas Convention pipeline updates.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 9,
    order: 40,
    category: 'education',
    question: 'How does Dr. Duffy keep buyers confident from contract to close?',
    answer:
      'She backs every step with research—option ROI, inspection data, incentive math, commute analytics, and equity forecasts. Buyers know facts before they sign, not after. Confidence comes from having a dedicated research partner throughout the journey.',
    researchDetail:
      'Clients receive a digital binder housing every checklist, report, and timeline update for reference long after closing.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 1,
    category: 'company',
    question: 'How much of Clark County\'s new-home activity does Woodside represent in 2025?',
    answer:
      'Year-to-date Woodside accounts for about 6.8% of Clark County single-family permits, trailing only Lennar and Pulte. Activity clusters around Sunstone, Cadence, and Vireo in Summerlin West. Dr. Duffy monitors permit logs weekly so clients can anticipate releases and lot premiums. Pair permits with absorption rates to time your purchase.',
    researchDetail:
      'Clark County Planning Commission issued 148 Woodside permits between Jan–Apr 2025 versus 162 in the same 2024 window, suggesting incentive sweeteners may surface.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 10,
    order: 2,
    category: 'company',
    question: 'How does Woodside\'s corporate ownership translate into Las Vegas build quality?',
    answer:
      'Sekisui House\'s 75-year sustainability program governs Las Vegas specs—think SHAWOOD-inspired insulation targets, waste recycling goals, and third-party energy audits. Dr. Duffy compares corporate QA manuals across builders to reveal where Woodside outperforms regional competitors. Deep institutional backing also keeps construction crews stable, even when labor markets tighten.',
    researchDetail:
      'Sekisui mandates quarterly sustainability audits; Sunstone crews recycled 72% of construction waste in 2024 according to reports Dr. Duffy reviews.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 3,
    category: 'company',
    question: 'How does Life-Inspired Design outperform Lennar\'s Next Gen layouts?',
    answer:
      'Life-Inspired plans emphasize sight lines, storage, and indoor-outdoor flow, while Lennar\'s Next Gen suites often sacrifice pantry space and loft functionality. Dr. Duffy overlays plan schematics to show Woodside kitchens averaging 18% more counter frontage and smoother circulation. Touring with her annotated floor plans helps you visualize real-life routines.',
    researchDetail:
      "Aries' pantry offers 54 cubic feet of storage versus Lennar's comparable 41 cubic feet—measurements taken during Dr. Duffy's walkthroughs.",
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 4,
    category: 'specs',
    question: 'How do Woodside HERS scores impact actual NV Energy bills?',
    answer:
      'A Sunstone Lyra testing at HERS 52 typically lands near $160/month during peak summer, while a HERS 75 resale can exceed $250. Dr. Duffy builds energy models using NV Energy tier rates so buyers can budget accurately. Lower loads cushion against future rate hikes and boost resale marketing.',
    researchDetail:
      'NV Energy\'s 2025 Tier 2 rate is 13.4¢/kWh; Dr. Duffy\'s spreadsheet shows Lyra owners using 1,200 kWh/month stay within Tier 2 thanks to efficient shells.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 5,
    category: 'specs',
    question: 'Does Woodside offer solar-ready infrastructure?',
    answer:
      'Sunstone and Cadence communities pre-install rooftop conduit, 200A panels, and structural bracing for 3.0 psf solar arrays. Lennar often includes full solar, while Toll Brothers leaves it entirely post-close. Dr. Duffy tracks NV Energy interconnection steps and incentives so you can plan financing. Solar readiness trims install costs when you decide to add panels.',
    researchDetail:
      'Electrical diagrams show solar conduit from attic to panel with dedicated disconnects—details Dr. Duffy reviews during plan check.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 6,
    category: 'specs',
    question: 'What HVAC specs differentiate Woodside from Pulte in the desert?',
    answer:
      'Woodside installs 16-SEER two-stage condensers with ECM motors, programmable thermostats, and MERV-11 filtration as standard, while Pulte often starts at 14-SEER single-stage unless upgraded. Dr. Duffy\'s HVAC comparison grid details equipment brands, warranties, and zoned-thermostat options. Superior HVAC lowers bills and enhances indoor-air quality.',
    researchDetail:
      'Sunstone systems use Lennox ML17XC1 condensers with 5-year parts warranties extendable to 10 years—documents Dr. Duffy secures for buyers.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 7,
    category: 'specs',
    question: 'What structural engineering resists extreme temperature swings?',
    answer:
      'Plans call for 2x6 exterior walls in select models, R-19 batts, R-38 attic insulation, and TechShield radiant barriers to reduce heat gain by up to 30°F. Dr. Duffy cross-checks structural load calculations and insulation schedules to confirm compliance. These envelopes outperform many Shea or Tri Pointe builds in the same price tier.',
    researchDetail:
      'Filing documents show R-19 batt insulation in 2x6 walls plus R-38 blown insulation meeting 2021 IECC standards—validated through Dr. Duffy\'s pre-drywall inspections.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 8,
    category: 'specs',
    question: 'How robust is Woodside\'s low-voltage prewire package?',
    answer:
      'Cat6 runs to bedrooms, offices, and media walls plus RG6 coax and security rough-ins come standard, with optional conduit for future AV. Toll Brothers charges extra for similar infrastructure. Dr. Duffy inventories low-voltage drops during pre-drywall so buyers know exactly what\'s installed. Wiring early avoids expensive retrofits.',
    researchDetail:
      'Prewire diagrams allocate 1.25-inch conduit from media wall to attic for AV cabling—Dr. Duffy photographs placements for client records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 9,
    category: 'specs',
    question: 'How do Woodside kitchens compare to Tri Pointe\'s designer offerings?',
    answer:
      'Woodside includes 42-inch uppers, soft-close hinges, and six pendant-ready circuits standard, while Tri Pointe often reserves those for upgrades. Butcher-block extensions, waterfall counters, and dual ovens price competitively in Woodside\'s studio. Dr. Duffy tracks SKU-level costs to help buyers allocate upgrade funds wisely.',
    researchDetail:
      'Virgo\'s waterfall island edge costs around $3,200—roughly 15% less than Tri Pointe\'s comparable upgrade list.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 10,
    order: 10,
    category: 'specs',
    question: 'How expansive are Woodside\'s covered patios in current releases?',
    answer:
      'Standard loggias span roughly 12x10 feet with options to extend another 4–8 feet depending on lot depth. Structural tie-ins support sliders, privacy screens, and outdoor kitchens. Dr. Duffy models sun angles so buyers know midday conditions before pouring decks. Compare patio footage when evaluating builder options.',
    researchDetail:
      'Capella patio extensions add 120 square feet (12x10 to 12x20) for about $7,800—priced via builder structural sheets.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 11,
    category: 'floorplans',
    question: 'How does Woodside\'s multi-gen design compare to Lennar\'s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar\'s suites can feel isolated or share HVAC without zoning. Dr. Duffy evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Duffy verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 12,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Duffy\'s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside\'s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Duffy walks through.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 13,
    category: 'pricing',
    question: 'How do price-per-square-foot figures compare by community right now?',
    answer:
      'As of May 2025 Sunstone averages ~$258/ft², Cadence ~$244/ft², and Summerlin Vireo ~$282/ft² for Woodside resales. Lennar and Pulte hover within ±$10/ft² but typically offer fewer structural options. Dr. Duffy\'s dashboards update weekly so buyers negotiate with current data. Evaluate cost per foot alongside build quality.',
    researchDetail:
      'GLVAR closed sales Jan–Apr 2025 confirm Sunstone Woodside resales averaging $258/ft²—data stored in Dr. Duffy\'s market notebooks.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 14,
    category: 'pricing',
    question: 'How aggressive are current buy-down programs compared to late 2024?',
    answer:
      'Q2 2025 incentives still yield 2–3 point buy-downs but require quick move-in closings or tight loan timelines; late 2024 offered more relaxed locks. Dr. Duffy negotiates stacked credits—combining buydowns with appliance or landscaping packages—when inventory rises. Always review the latest incentive matrix before signing.',
    researchDetail:
      'May 2025 incentive sheets show 2-point permanent plus 1-point temporary buy-down on quick move-ins with 30-day closings.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 15,
    category: 'pricing',
    question: 'How do property taxes vary across Woodside communities?',
    answer:
      'Sunstone\'s effective tax rate is about 0.72% of assessed value with no SIDs, Cadence is near 0.79% plus low SIDs, and Summerlin enclaves hover around 0.74% with village fees. Dr. Duffy calculates monthly escrows so buyers understand total housing cost. SIDs/LIDs must be factored into affordability projections.',
    researchDetail:
      'Cadence SID statements show ~$45/month remaining on 20-year amortizations—data pulled from the Clark County Treasurer portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 16,
    category: 'pricing',
    question: 'How do extended rate locks work with Woodside\'s preferred lenders?',
    answer:
      'Extended locks up to 360 days typically require a 1% lock fee credited at closing if you proceed, with float-down options in the final 60 days. Non-preferred lenders may lack construction-length locks, exposing you to rate volatility. Dr. Duffy models the cost of locking early versus shorter locks to hedge your exposure.',
    researchDetail:
      'Woodside Mortgage\'s 360-day lock charges 1% upfront, refundable if the builder delays beyond 30 days past the lock—terms documented in lender summaries Dr. Duffy reviews.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 17,
    category: 'pricing',
    question: 'Can VA buyers stack Woodside incentives effectively?',
    answer:
      'Yes—preferred lenders pair VA loans with buy-downs and closing credits while respecting VA funding rules. Dr. Duffy cross-checks appraisals to guard against value gaps created by large incentives. Planning rate locks and appraisals in sync keeps VA deals smooth.',
    researchDetail:
      'In 2024 Dr. Duffy closed four Cadence VA purchases combining 2-point buy-downs with $7K in builder-paid closing costs—documented in lender worksheets.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 18,
    category: 'market',
    question: 'How does Woodside appreciate versus Shea or Toll Brothers over five years?',
    answer:
      'Sunstone Woodside resales gained 31% since 2020, Shea\'s Spur Cross 28%, and Toll Brothers' Mira Villa around 24%, all beating the Clark County average of 22%. Energy efficiency and HOA quality sustain buyer demand even when rates rise. Dr. Duffy stress-tests appreciation scenarios using GLVAR comps and employment forecasts.',
    researchDetail:
      \'GLVAR data confirms average $102K equity gains on $520K Sunstone purchases between 2020 and 2024—numbers Dr. Duffy plugs into her projection models.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 19,
    category: 'communities',
    question: 'Which Woodside communities will release new lots soon?',
    answer:
      'Sunstone Phase 3 launches in late Q2 2025 with 42 north-facing lots, while Cadence continues rolling releases each quarter. Summerlin\'s Vireo has limited inventory and may see a final release later in 2025. Dr. Duffy\'s builder contacts flag these drops before sales offices go public. Being early lets you secure premium orientations.',
    researchDetail:
      'Dr. Duffy maintains a private calendar of superintendent release dates, deposit requirements, and lot premiums for every Woodside site.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 10,
    order: 20,
    category: 'communities',
    question: 'What amenities distinguish Woodside neighborhoods from competitors?',
    answer:
      'Sunstone delivers a 4,000 sq ft amenity hub, pools, fitness rooms, co-working, and 15 miles of trails; Cadence offers a 50-acre park and splash pads; Summerlin adds golf and clubhouses. Lennar\'s Skye Canyon emphasizes athletic amenities, while Toll Brothers leans toward boutique clubs. Dr. Duffy tours each amenity set so the lifestyle match is deliberate.',
    researchDetail:
      'Sunstone\'s amenity center is funded and scheduled to open mid-2025, with staffing already budgeted in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 21,
    category: 'communities',
    question: 'How do HOA dues compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence charges around $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Duffy models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence\'s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 22,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Duffy drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 23,
    category: 'communities',
    question: 'How do school options stack up for Woodside buyers?',
    answer:
      'Sunstone feeds Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus CCSD schools; Summerlin provides magnet and private options. A K-8 charter is planned inside Sunstone for 2026. Dr. Duffy compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 24,
    category: 'process',
    question: 'How should buyers stage deposit releases to preserve cash?',
    answer:
      'Woodside typically collects deposits in phases—contract, structural lock, and design studio—totaling $10K–$20K. Staggering deposits keeps liquidity available for appraisal gaps or rate-lock fees. Dr. Duffy\'s payment calendar outlines every draw before buyers sign.',
    researchDetail:
      'Average Sunstone deposits total around $15K; schedules are detailed in purchase agreements Dr. Duffy reviews line by line.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 25,
    category: 'process',
    question: 'What pre-approval documents should buyers prepare at lot reservation?',
    answer:
      'Bring a DU/LP approval, last two paystubs, two months of bank statements, and documentation for contingent sales. Preferred lenders convert pre-quals to full approvals once documents are ready. Dr. Duffy audits paperwork before tours to ensure buyers can reserve lots instantly.',
    researchDetail:
      'Preferred lender checklists highlight missing bank statements as the top reason lot reservations get delayed—insight from Dr. Duffy\'s lender partners.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 26,
    category: 'process',
    question: 'How do design studio upgrade costs compare to post-close renovations?',
    answer:
      'Structural electrical, plumbing, and cabinetry upgrades cost 30–40% less during construction than post-close retrofits. Decorative lighting or hardware can wait until after closing. Dr. Duffy\'s ROI planner ranks upgrades by appraisal impact so you deploy funds strategically.',
    researchDetail:
      'Structured wiring additions price at $250 per drop during framing versus $450+ for post-close retrofits—figures tracked by Dr. Duffy.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 27,
    category: 'process',
    question: 'What inspection rights should buyers insist on when signing?',
    answer:
      'Ensure the contract explicitly permits third-party inspections at pre-drywall, mechanical completion, and final walk; some builders limit access. Dr. Duffy negotiates inspection clauses before deposits go hard to protect transparency. Keep documentation of every clause in writing.',
    researchDetail:
      'Woodside contracts reference inspection rights in Section 12—Dr. Duffy reviews and initials each clause with clients.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 28,
    category: 'process',
    question: 'How frequently should buyers expect construction updates beyond the portal?',
    answer:
      'Woodside posts weekly portal updates, but Dr. Duffy schedules biweekly site visits, drone footage, and milestone checklists for accuracy. She also sets standing calls with superintendents to resolve issues proactively. Consistent updates prevent surprises at closing.',
    researchDetail:
      'Dr. Duffy\'s update template pairs portal notes with date-stamped photos, verifying progress and creating permanent records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 29,
    category: 'market',
    question: 'How do quick move-in marketing blasts differ from Dr. Duffy\'s inventory sheets?',
    answer:
      'Builder blasts highlight publicly available specs, often after insiders claim top lots; Dr. Duffy\'s sheets list every under-construction home, canceled contracts, and future releases. Her data reveals inventory before general marketing, giving clients first-mover advantage. Early access can secure view lots or premium elevations.',
    researchDetail:
      'In March 2025 Dr. Duffy reported two Sunstone quick move-ins 48 hours before Woodside\'s marketing email—both reserved by her clients immediately.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 10,
    order: 30,
    category: 'market',
    question: 'What appraisal buffer should buyers maintain when adding upgrades?',
    answer:
      'Maintain at least a 5% buffer between contract price and appraisal to accommodate heavy upgrades without risking value gaps. Dr. Duffy pre-reviews pending comps and upgrade allowances before clients finalize design studio choices. Avoid over-customizing beyond your neighborhood\'s resale ceiling.',
    researchDetail:
      'Recent appraisals credited roughly 60 cents per dollar on kitchen/bath upgrades; Dr. Duffy retains anonymized appraisal packets to guide decisions.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 31,
    category: 'market',
    question: 'How do maintenance reserves for new builds compare to 15-year-old resales?',
    answer:
      'New Woodside homes typically require 1% of value annually for maintenance reserves; 15-year-old resales demand closer to 2.5% due to HVAC, roof, and appliance replacement cycles. Dr. Duffy\'s 10-year maintenance models quantify the difference so budgets stay realistic. Lower reserves free cash for savings or upgrades.',
    researchDetail:
      'Dr. Duffy\'s maintenance spreadsheets show new Woodside owners averaging $5,800 annually on $580K homes versus $14,000 for similar resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 32,
    category: 'education',
    question: 'How does Dr. Duffy\'s comparison matrix keep builder evaluations objective?',
    answer:
      'Her matrix scores Woodside, Lennar, Pulte, Tri Pointe, Toll Brothers, and Shea across energy specs, structural flexibility, incentives, warranty response, and HOA health. Scores draw from inspection reports, homeowner interviews, and service logs—not marketing. Clients customize the matrix to their priorities so decisions stay research-driven.',
    researchDetail:
      'Latest matrix ranks Woodside 4.5/5 for energy efficiency while Lennar scores 3.8/5—data Dr. Duffy updates quarterly.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 33,
    category: 'education',
    question: 'Which questions uncover hidden costs in builder fine print?',
    answer:
      'Ask how long incentives last, whether lot premiums adjust with views, what\'s included in landscaping, which appliances are standard, and how HOAs treat rentals. Dr. Duffy\'s 23-point checklist flushes out fees and restrictions that sales reps often gloss over. Armed with answers, you negotiate from strength.',
    researchDetail:
      'In 2024 Dr. Duffy saved a client $4,200 by catching a duplicated landscape fee hidden in the options list—thanks to the checklist.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 34,
    category: 'education',
    question: 'How do elevation choices influence heat gain and energy bills?',
    answer:
      'Elevations with deeper overhangs, recessed windows, and contrasting stucco reduce solar gain on south/west exposures. Dr. Duffy runs sun-path simulations to recommend elevations that minimize cooling loads. Form and function go hand-in-hand—choose aesthetics that help your energy budget.',
    researchDetail:
      'Simulations show Aries Elevation C cuts solar heat gain by 12% versus Elevation A on south-facing lots—Dr. Duffy\'s modeling data.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 35,
    category: 'education',
    question: 'How should first-time buyers budget for post-close essentials?',
    answer:
      'Set aside $20K–$25K for backyard landscaping, window coverings, appliances (if excluded), and ceiling fans. Dr. Duffy obtains vendor bids before closing so new owners have accurate figures. Planning ahead prevents credit-card splurges after move-in.',
    researchDetail:
      'Average 2024 Sunstone buyers spent $22,700 on post-close essentials—based on invoices tracked in Dr. Duffy\'s files.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 36,
    category: 'education',
    question: 'Which upgrades deliver the strongest appraisal impact?',
    answer:
      'Continuous flooring, quartz counters, upgraded cabinetry, and primary bath finishes typically earn the highest appraisal credit. Decorative lighting or hardware swaps can wait. Dr. Duffy\'s ROI tool prioritizes upgrades so you don\'t overinvest in low-return items.',
    researchDetail:
      'Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024 Sunstone resales—figures kept in Dr. Duffy\'s appraisal library.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 37,
    category: 'education',
    question: 'How does Dr. Duffy leverage superintendent relationships to benefit buyers?',
    answer:
      'She maintains direct contacts with every superintendent, attends pre-construction meetings, and logs punch-list deadlines in shared trackers. Escalations happen fast without waiting for portal queues. That insider access keeps builds on schedule and issues resolved quickly.',
    researchDetail:
      'Dr. Duffy resolved a framing oversight within 48 hours by contacting the Sunstone superintendent she\'d worked with on prior builds—documented in her project journal.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 38,
    category: 'process',
    question: 'How do you ensure builder update portals match job-site reality?',
    answer:
      'Dr. Duffy cross-checks portal notes with on-site photos, drone footage, and third-party inspection reports. Any discrepancies trigger superintendent follow-ups with written corrective action. Keeping builders accountable reduces closing-day surprises.',
    researchDetail:
      'Her update template pairs portal entries with timestamped field photos and inspector notes for every milestone.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 10,
    order: 39,
    category: 'market',
    question: 'How does real-time inventory tracking give buyers negotiation leverage?',
    answer:
      'Dr. Duffy updates spreadsheets every Friday with spec homes, cancellations, and future releases so she knows when the builder needs movement. Armed with data, she secures extras like appliance packages or landscaping credits. Negotiating with facts beats reacting to sales rhetoric.',
    researchDetail:
      'March 2025 data showing eight Sunstone quick move-ins led directly to stacked incentives for Dr. Duffy\'s buyers—tracked in her inventory notes.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 10,
    order: 40,
    category: 'market',
    question: 'How can buyers model long-term value using real numbers, not hype?',
    answer:
      'Combine appreciation trends, HOA strength, energy savings, and incentive value to forecast five-year equity. Dr. Duffy\'s spreadsheets stress-test scenarios using GLVAR comps, utility data, and amortization schedules. Quantitative projections replace guesswork so decisions stay grounded.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024 with average $102K resale gains—data Dr. Duffy builds into her equity models.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 1,
    category: 'company',
    question: 'Why do relocation buyers seek Dr. Duffy\'s guidance on Woodside specifically?',
    answer:
      'Relocation clients lean on Dr. Duffy because she keeps a proprietary database of 500+ new construction closings, including every Woodside superintendent, designer, and warranty lead. She benchmarks lifestyle perks, commute realities, and HOA rules before you even tour. That prework saves days of guesswork for families arriving from out of state.',
    researchDetail:
      'Dr. Duffy\'s relocation matrix cross-references school scores, hospital commute times, and HOA reserves for each active Woodside neighborhood.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 11,
    order: 2,
    category: 'company',
    question: 'How does Dr. Duffy verify Woodside\'s build quality beyond brochures?',
    answer:
      'She performs independent field audits, pulling county inspection logs, warranty claims, and third-party reports to validate builder claims. Those findings feed into her comparison charts so buyers see objective data. It\'s buyer-side research—not marketing—from someone who has walked every construction phase.',
    researchDetail:
      'Clark County\'s online inspection portal shows pass/fail notes; Dr. Duffy archives them for each Woodside phase to spot recurring issues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 3,
    category: 'company',
    question: 'What makes Woodside\'s sales process smoother when Dr. Duffy is involved?',
    answer:
      'Her relationships with sales counselors and superintendents remove friction—appointments get scheduled faster, structural deadlines stay clear, and escalation paths open immediately. Buyers still sign directly with Woodside, but Dr. Duffy keeps the builder accountable at every step. It\'s a buyer advocate working alongside the onsite team.',
    researchDetail:
      'Dr. Duffy stores escalation contact trees for each community so buyers reach decision-makers within hours, not days.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 4,
    category: 'specs',
    question: 'How does Dr. Duffy audit energy specs to protect buyer budgets?',
    answer:
      'She reviews mechanical schedules, HERS certificates, and NV Energy usage projections for every plan. Those numbers feed a 10-year cost-of-ownership model comparing Woodside to resale options. Buyers see how efficiency lowers total monthly spend, which often justifies higher upfront pricing.',
    researchDetail:
      'Energy models in Dr. Duffy\'s workbook use NV Energy tiered rates, builder-provided kWh estimates, and insulation specs verified during pre-drywall.',
    cta: `Let's compare all your options - call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 5,
    category: 'specs',
    question: 'How does Dr. Duffy confirm smart-home tech works out of the box?',
    answer:
      'She coordinates low-voltage walkthroughs at pre-drywall to verify Cat6 drops, conduit locations, and panel terminations. After closing, her tech partners perform activation checks so Wi-Fi thermostats, smart garages, and security prewires go live without surprises. Buyer convenience stays front and center.',
    researchDetail:
      'Pre-drywall punch lists include photos of each low-voltage drop, signed off by the superintendent and stored in the client\'s portal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 6,
    category: 'specs',
    question: 'What structural details does Dr. Duffy document during inspections?',
    answer:
      'She photographs framing connections, anchor bolts, moisture barriers, and insulation coverage during third-party inspections. Any variance from plans goes into a correction log shared with the superintendent. That documentation protects warranties and future resale confidence.',
    researchDetail:
      'Her inspection binder includes labeled photos of sill plate anchors, roof truss hangers, and HVAC duct sealing for each buyer.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 7,
    category: 'specs',
    question: 'How does Dr. Duffy compare Woodside\'s kitchens to other builders from a cooking perspective?',
    answer:
      'Beyond listing finishes, she measures counter frontage, storage cubic footage, and appliance clearance for each plan. Then she contrasts the data with Lennar, Pulte, and Tri Pointe models so culinary buyers know which layout supports their workflow. It\'s ergonomics backed by tape-measure research.',
    researchDetail:
      'Her kitchen worksheet records island length, pantry volume, and fridge clearance for every model toured.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 8,
    category: 'specs',
    question: 'What does Dr. Duffy evaluate in Woodside\'s desert engineering package?',
    answer:
      'She inspects attic ventilation, radiant barrier coverage, stucco expansion joints, and garage insulation to confirm desert-ready execution. Those findings get compared with Clark County code baselines and competitor specs. Buyers see where Woodside excels and where upgrades might help.',
    researchDetail:
      'Inspection logs note temperature differentials between attic and living space to verify radiant barrier performance.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 9,
    category: 'floorplans',
    question: 'How does Dr. Duffy personalize floor-plan tours for each household?',
    answer:
      'She arrives with lifestyle questionnaires, furniture dimensions, and work-from-home needs compiled from discovery calls. During tours she overlays those needs onto plan options, capturing video and commentary for replay. Buyers leave knowing exactly how each space can flex for their family.',
    researchDetail:
      'Her plan playbooks include annotated diagrams showing desk placement, storage solutions, and traffic patterns specific to each client.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 11,
    order: 10,
    category: 'floorplans',
    question: 'Why does Dr. Duffy track option pricing down to the SKU level?',
    answer:
      'Because builder pricing shifts quarterly, she maintains historical logs of every structural and design option selected by clients. That data reveals which upgrades hold value and which ones inflate appraisals. Buyers decide upgrades with clarity instead of guesswork.',
    researchDetail:
      'Dr. Duffy\'s option ledger lists cost deltas for sliders, gen suites, and design packages dating back five years.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 11,
    category: 'floorplans',
    question: 'How does Dr. Duffy vet indoor/outdoor flow for entertainers?',
    answer:
      'She measures slider widths, patio depth, and kitchen pass-through lines while noting prevailing wind and sun angles. Her clients receive patio staging layouts showing how many guests the space can host comfortably. Entertaining becomes a planned experience, not an afterthought.',
    researchDetail:
      'Sun studies Dr. Duffy runs in Sunstone show evening shade coverage on north-facing patios extending 75% of the yard.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 12,
    category: 'floorplans',
    question: 'What structural pitfalls does Dr. Duffy help buyers avoid post-cutoff?',
    answer:
      'She flags commonly forgotten items—soft water loops, hose bibs, floor outlets, bathroom blocking—that cannot be added cheaply later. Clients sign off on a structural checklist before the day-21 deadline. That diligence eliminates costly change orders after framing.',
    researchDetail:
      'Her structural checklist covers 42 line items, including accessible shower blocking and EV conduit placement.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 13,
    category: 'pricing',
    question: 'How does Dr. Duffy model pricing scenarios for hesitant buyers?',
    answer:
      'She builds side-by-side comparisons with base price, structural upgrades, design packages, incentives, taxes, HOA dues, and expected utilities. That spreadsheet updates live as new incentives publish. Buyers get a transparent "true cost" sheet before they sign.',
    researchDetail:
      'Her pricing model references builder option sheets, lender quotes, tax calculators, and NV Energy projections for each plan.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 14,
    category: 'pricing',
    question: 'How does Dr. Duffy test incentive packages for hidden trade-offs?',
    answer:
      'She compares APR and lender fees with and without incentives, then checks closing statements from prior Woodside buyers. If a credit disappears, she renegotiates or shifts lenders. Incentives become a math equation, not a marketing headline.',
    researchDetail:
      'Closing disclosure archives reveal where incentives cannibalized other credits—insights Dr. Duffy uses to negotiate revisions.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 15,
    category: 'pricing',
    question: 'What equity forecasts does Dr. Duffy provide before contract?',
    answer:
      'She projects five-year appreciation using GLVAR comps, HOA reserves, amenity build-out status, and job-growth forecasts. Buyers see best, base, and conservative equity paths. That analysis makes long-term value part of the initial decision, not hindsight.',
    researchDetail:
      'Forecast models incorporate Moody\'s employment data, GLVAR price trends, and HOA reserve projections stored in Dr. Duffy\'s analytics suite.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 16,
    category: 'pricing',
    question: 'How does Dr. Duffy coach buyers through appraisal contingencies?',
    answer:
      'She reviews MLS pendings, builder closings, and option spend ratios to estimate appraisal risk. If risk is high, she positions backup comps, requests option credits, or strategizes appraisal reconsiderations. Buyers enter contract knowing exactly how to guard against value gaps.',
    researchDetail:
      'Her appraisal toolkit includes pre-written reconsideration templates and comp packages that align with VA, FHA, and conventional guidelines.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 17,
    category: 'market',
    question: 'How does Dr. Duffy monitor resale performance for future exit strategies?',
    answer:
      'She tracks MLS resale data monthly, noting days on market, list-to-sale ratios, price-per-foot shifts, and buyer feedback trends. Those insights feed into exit strategy plans she shares with current buyers. You purchase with a resale roadmap already mapped out.',
    researchDetail:
      'Her resale dashboard covers 2020–present transactions for every Woodside community, color-coded by appreciation tiers.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 18,
    category: 'market',
    question: 'How does Dr. Duffy help investors evaluate Woodside rental potential?',
    answer:
      'She analyzes rental comps, HOA leasing caps, property management fees, and prospective tenant pools for each community. Investors receive cash-flow projections with conservative vacancy rates and maintenance reserves. Decision-making stays data-driven, not speculative.',
    researchDetail:
      'Rental worksheets pull from LVRMLS leases, AirDNA short-term metrics where allowed, and SNWA utility averages.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 19,
    category: 'communities',
    question: 'How does Dr. Duffy match buyers to the right Woodside community?',
    answer:
      'Her intake process evaluates commute requirements, school needs, lifestyle amenities, and future growth preferences. She then overlays those criteria with Sunstone, Cadence, and Summerlin data. Buyers tour only the communities that truly fit their goals.',
    researchDetail:
      'Community scorecards rate each neighborhood on seven metrics—from HOA health to trail networks—compiled by Dr. Duffy.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 20,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate HOA documents for Woodside buyers?',
    answer:
      'She reviews covenants, budgets, reserve studies, and rental caps with a focus on long-term sustainability. Any red flags—like underfunded reserves or strict design limits—get flagged before contract. You enter with eyes wide open.',
    researchDetail:
      'Sunstone HOA reserves currently sit above 90% funded; Dr. Duffy verifies numbers in annual filings prior to buyer commitments.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 21,
    category: 'communities',
    question: 'How does Dr. Duffy incorporate commute analytics into community decisions?',
    answer:
      'She runs live drive tests at the buyer\'s actual rush-hour schedule, logs Waze and NDOT updates, and tracks upcoming road projects. That data informs lot orientation and community selection. Commute comfort becomes a quantified metric, not a guess.',
    researchDetail:
      'NDOT project timelines and average travel times get stored in her commute dashboard for Sunstone, Cadence, and Summerlin.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 22,
    category: 'communities',
    question: 'How does Dr. Duffy prep buyers for future amenity rollouts?',
    answer:
      'She confirms amenity budgets, construction schedules, and staffing plans directly with HOA boards and developer meetings. Buyers know when pools, parks, or co-working spaces truly open. That transparency protects against overpromised features.',
    researchDetail:
      'HOA meeting minutes documenting amenity timelines are saved in her digital client binders for reference.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 23,
    category: 'communities',
    question: 'How does Dr. Duffy evaluate school pathways for growing families?',
    answer:
      'She maps zoning boundaries, magnet/charter applications, and private-school commute times, then aligns them with each buyer\'s goals. Education becomes part of the site-selection matrix. No buyer is surprised by rezoning after moving in.',
    researchDetail:
      'She monitors CCSD zoning proposals and charter board approvals, storing PDFs in each client\'s planning portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 24,
    category: 'process',
    question: 'How does Dr. Duffy keep builders accountable during construction?',
    answer:
      'She maintains spreadsheet trackers with milestone dates, superintendent commitments, and punch-list items. Weekly updates compare promised progress with actual site photos. Escalations happen fast if timelines slip.',
    researchDetail:
      'Milestone trackers log framing, mechanical, drywall, cabinets, and final clean dates alongside superintendent sign-offs.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 25,
    category: 'process',
    question: 'How does she assist with design studio overwhelm?',
    answer:
      'Before appointments she curates mood boards, resale-friendly palettes, and cost ladders keyed to each buyer\'s budget. During the session she tracks totals in real time, calling out selections that hurt appraisals. Buyers leave with curated design packages instead of impulse picks.',
    researchDetail:
      'Design spreadsheets include line-by-line pricing with notes on resale impact and maintenance considerations.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 26,
    category: 'process',
    question: 'How does Dr. Duffy prepare buyers for move-in orientation?',
    answer:
      'She provides a walk-through checklist covering appliance demos, warranty contacts, smart-home setup, and punch-list verification. Each orientation gets recorded so buyers can reference builder explanations later. Move-in day feels organized, not chaotic.',
    researchDetail:
      'Orientation checklists list 68 inspection points, from sprinkler zones to smart-thermostat programming, all signed off at closing.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 27,
    category: 'process',
    question: 'What post-close support does Dr. Duffy offer Woodside owners?',
    answer:
      'She schedules 30-day and 11-month warranty check-ins, connects owners with vetted landscapers and tech integrators, and keeps valuation updates on file. Her buyers stay plugged into community resources and equity forecasts long after they get keys.',
    researchDetail:
      'Warranty checklists include photos and issue logs uploaded to Woodside\'s portal with superintendent acknowledgment.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 11,
    order: 28,
    category: 'market',
    question: 'How does she differentiate speculative hype from actual demand?',
    answer:
      'By tracking MLS absorption, permit filings, employment reports, and rental occupancy, Dr. Duffy spots real demand drivers. She shares those dashboards with clients so they can sense when markets soften or heat up. Decisions lean on hard numbers, not sales pitches.',
    researchDetail:
      'Her demand dashboard pairs GLVAR absorption rates with Nevada DETR employment forecasts for each submarket.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 29,
    category: 'market',
    question: 'How does Dr. Duffy support buyers negotiating lot premiums?',
    answer:
      'She compares premium pricing history, viewshed analytics, and resale comps to show which premiums return value. If a lot doesn\'t justify the premium, she finds alternatives or negotiates concessions. Buyers leverage evidence, not emotion.',
    researchDetail:
      'Lot premium logs track price deltas versus final appraised value for more than 80 Woodside contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 30,
    category: 'market',
    question: 'What rental safeguards does she recommend for Woodside investors?',
    answer:
      'She reviews HOA short-term rules, secures landlord insurance quotes, and outlines cash reserves for vacancy and repairs. Investors also get introductions to vetted property managers familiar with Woodside warranties. Passive income stays protected.',
    researchDetail:
      'Her landlord readiness guide details HOA rental caps, SNWA utility averages, and expected maintenance allowances per community.',
    cta: `Let's compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 31,
    category: 'education',
    question: 'How does Dr. Duffy teach first-time buyers the new construction process?',
    answer:
      'She hosts onboarding sessions covering financing, structural deadlines, inspections, warranty, and move-in logistics. Each buyer receives a timeline dashboard and glossary so unfamiliar terms never become roadblocks. Education is proactive, not reactionary.',
    researchDetail:
      'Onboarding packets include an 18-step roadmap with milestone checklists tailored to Woodside\'s build cadence.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 32,
    category: 'education',
    question: 'How does she help buyers balance dream upgrades with resale reality?',
    answer:
      'By ranking upgrades into "must-have," "nice-to-have," and "personal indulgence" categories, then showing how each affects appraisals and resale demand. Buyers can still personalize, but they do so with clear insight into future ROI. Luxury wants stay aligned with equity goals.',
    researchDetail:
      'Upgrade scorecards grade selections on cost, maintenance, and appraisal credit so buyers see trade-offs instantly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 33,
    category: 'education',
    question: 'How does Dr. Duffy help buyers compare Woodside to resale alternatives?',
    answer:
      'She builds total cost-of-ownership comparisons factoring upgrade budgets, utilities, maintenance, and financing scenarios. Resale tours follow alongside new construction so buyers experience both paths. The final decision comes from informed contrast, not speculation.',
    researchDetail:
      'Comparison worksheets combine MLS comps, utility estimates, and projected maintenance for 10-year horizons.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 34,
    category: 'education',
    question: 'How does she vet third-party contractors who finish Woodside homes?',
    answer:
      'Dr. Duffy maintains a vetted vendor list for landscaping, window coverings, technology integration, and home maintenance. Vendors must carry proper licensing, insurance, and Woodside familiarity before joining her roster. Buyers plug into trusted resources immediately after close.',
    researchDetail:
      'Vendor scorecards log license verification dates, insurance certificates, and client satisfaction ratings.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 35,
    category: 'education',
    question: 'How does Dr. Duffy prevent surprise costs during closing?',
    answer:
      'She pre-audits closing statements, cross-referencing incentive agreements, proration tables, and rate-lock fees. Any discrepancy gets flagged before signing. Buyers sit at the closing table knowing every line item is accurate.',
    researchDetail:
      'Closing audit sheets compare loan estimates with final disclosures to ensure incentives and credits carry through.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 36,
    category: 'process',
    question: 'How does she manage inspection follow-ups so nothing slips?',
    answer:
      'Each inspection finding enters a shared tracker with due dates and superintendent acknowledgments. Dr. Duffy verifies completion personally or through third-party inspectors. Buyers never wonder whether punch-list items were addressed.',
    researchDetail:
      'Inspection follow-up tracker links photos, superintendent responses, and completion timestamps for accountability.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 37,
    category: 'process',
    question: 'What communication cadence does Dr. Duffy establish with builders?',
    answer:
      'She sets weekly email updates, biweekly field visits, and milestone calls with superintendents at contract signing. Those cadences go into writing so everyone stays aligned. Buyers enjoy transparent, predictable communication for the entire build.',
    researchDetail:
      'Communication templates summarize progress, photos, and next steps in a consistent format shared with buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 11,
    order: 38,
    category: 'market',
    question: 'How does Dr. Duffy help buyers plan for market shifts after closing?',
    answer:
      'She provides annual valuation check-ins, refinance reviews, and rental strategy updates. Buyers know when equity milestones or rate drops make sense to act on. Homeownership becomes a managed asset, not a static purchase.',
    researchDetail:
      'Annual equity reports combine current MLS comps, amortization progress, and utility savings totals from Dr. Duffy\'s databases.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 11,
    order: 39,
    category: 'market',
    question: 'How does Dr. Duffy benchmark resale projections for Woodside homes?',
    answer:
      'She charts five-year resale comps across Sunstone, Cadence, and Skye Canyon, adjusting for elevation, lot size, and upgrade tiers. Clients receive best-case, base-case, and conservative outlooks, so they understand equity swing ranges before committing. That realism keeps buy decisions grounded.',
    researchDetail:
      'Resale dashboards combine GLVAR MLS data, Builder Trade-in program stats, and rental absorption trends updated quarterly.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
]

export function getFaqsByCategory(categories: FaqCategory[], iterations?: number[]): FaqEntry[] {
  return faqs
    .filter((faq) => categories.includes(faq.category))
    .filter((faq) => !iterations || iterations.includes(faq.iteration))
    .sort((a, b) => {
      if (a.iteration === b.iteration) {
        return a.order - b.order
      }
      return a.iteration - b.iteration
    })
}

export function getFaqsByIteration(iteration: number): FaqEntry[] {
  return faqs.filter((faq) => faq.iteration === iteration).sort((a, b) => a.order - b.order)
}
