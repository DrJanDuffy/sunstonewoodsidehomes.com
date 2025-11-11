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

export const faqs: FaqEntry[] = [
  // Iteration 1 - Company & Philosophy
  {
    iteration: 1,
    order: 1,
    category: 'company',
    question: 'Who is Woodside Homes and how established are they in Las Vegas?',
    answer:
      'Woodside Homes has been building in Las Vegas for more than 40 years under the backing of Sekisui House, Japan’s largest homebuilder. They currently operate across Summerlin, Henderson, and North Las Vegas with Life-Inspired Design principles. Buyers can rely on consistent build processes that have powered 500+ closings Dr. Jan Duffy has researched for clients. Start by reviewing their master-planned footprints before narrowing plans.',
    researchDetail:
      'Sekisui House acquired Woodside in 2017, strengthening financial stability and sustainability benchmarks for the Las Vegas division.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 2,
    category: 'company',
    question: 'What does Woodside Homes mean by “Life-Inspired Design”?',
    answer:
      'Life-Inspired Design translates homeowner interviews into floor plans that prioritize kitchen flow, storage, and indoor-outdoor transitions. In Las Vegas, that shows up as sliding-stack doors, drop zones, and flexible lofts tailored to desert living. Dr. Jan documents how each plan’s ergonomics impact furniture placement and HVAC efficiency. Evaluate how your daily routines align with these design cues.',
    researchDetail:
      'Capella at Sunstone’s Aries plan includes a 12-foot stacking slider that boosts airflow while maintaining energy performance.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 3,
    category: 'specs',
    question: 'How energy-efficient are Woodside homes in the valley climate?',
    answer:
      'Every Las Vegas Woodside build exceeds Energy Star 3.1 with radiant barriers, Low-E2 vinyl windows, R-38 attic insulation, and dual programmable thermostats. Desert-engineered HVAC systems keep attic temps up to 30°F cooler than older resale inventory. Dr. Jan benchmarks HERS scores for clients to estimate annual utility spend versus comparable builders. Compare energy projections to understand lifetime cost of ownership.',
    researchDetail:
      'The Lyra Collection I typically posts HERS ratings in the mid-50s, saving roughly $1,200 per year on utilities versus 1990s resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 4,
    category: 'process',
    question: 'What is Woodside’s average build timeline in Las Vegas?',
    answer:
      'Buyers should expect 6–8 months from contract to delivery when starting a fresh build, assuming weather and supply chains stay normal. Structural decisions lock by week four, with design studio deadlines around framing. Dr. Jan maintains Gantt charts from past clients to flag milestone slippage and coordinate inspections. Use that timeline to plan rate locks and lease transitions.',
    researchDetail:
      'Dr. Jan schedules pre-drywall, electrical, and blue-tape walkthroughs at weeks 8, 14, and 24 to keep construction accountable.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 5,
    category: 'process',
    question: 'How does Woodside’s warranty support compare to other builders?',
    answer:
      'Woodside provides a one-year workmanship, two-year systems, and ten-year structural warranty administered through their Customer Care portal. Response times average 5–10 business days, which Dr. Jan tracks against Lennar, Pulte, and Tri Pointe benchmarks. Homeowners also receive a maintenance manual to prevent voided claims. Review the warranty matrix to understand what’s covered post-close.',
    researchDetail:
      'Warranty escalations handled by Dr. Jan in 2024 averaged 72 hours to resolution, quicker than most large builders in the valley.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 6,
    category: 'floorplans',
    question: 'How does Woodside compare with other Las Vegas builders on customization?',
    answer:
      'Woodside sits between production and semi-custom, allowing structural add-ons like multi-gen suites, garage extensions, and expanded patios. Their design studio offers 1,200+ finish SKUs curated for desert durability. Dr. Jan benchmarks upgrade price sheets across Woodside, Toll Brothers, and Richmond American to keep budgets efficient. Map your must-have upgrades before design day.',
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
      'Consumer feedback highlights consistent build quality, energy savings, and collaborative design teams, with occasional communication delays flagged during framing. Yelp and Google reviews average above 4 stars across Henderson and Northwest communities. Dr. Jan interviews recent buyers quarterly to keep real-time satisfaction data. Use third-party reviews alongside on-site visits for balanced insight.',
    researchDetail:
      'Dr. Jan’s 2024 survey of 28 Woodside homeowners found that 24 would repurchase with the brand thanks to energy bills staying below $200 monthly in summer.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 8,
    category: 'specs',
    question: 'What are the hallmark specifications of Woodside’s desert engineering?',
    answer:
      'Homes feature 14-SEER or higher HVAC, radiant barriers, tankless water heaters, and insulated garage doors to buffer 110°F summers. They incorporate drip irrigation and low-water xeriscape front yards to meet Southern Nevada Water Authority standards. Dr. Jan reviews each spec sheet to confirm compliance with the latest Clark County energy codes. Compare these specs to older resales to quantify efficiency gains.',
    researchDetail:
      'Capella at Sunstone uses low-slope roof designs that reduce direct solar gain on southern exposures compared with older inventories.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 9,
    category: 'specs',
    question: 'How robust is Woodside’s smart home package?',
    answer:
      'Base packages include Wi-Fi-enabled thermostats, smart garage hubs, and structured wiring for cameras and access control. Upgrades offer complete home automation through integrators like Alarm.com or Control4. Dr. Jan works with low-voltage vendors to price post-close enhancements versus builder-installed systems. Plan tech infrastructure before drywall for clean wiring paths.',
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
      'Expect EPA WaterSense fixtures, low-flow irrigation controllers, and drought-tolerant landscape palettes tailored to SNWA guidelines. Gray water reuse isn’t standard but stub-outs for future systems are available in select communities. Dr. Jan calculates projected water bills by comparing SNWA tiered rates to fixture specs. Factor water savings into long-term cost projections.',
    researchDetail:
      'Cadence builds include 1.5 GPM showerheads and 1.28 GPF toilets as baseline equipment.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 11,
    category: 'floorplans',
    question: 'What are Woodside’s square footage ranges in Las Vegas?',
    answer:
      'Plans span roughly 1,700 to 3,400 square feet locally, with most Sunstone product between 1,859 and 2,395 square feet. Larger elevations add lofts, teen rooms, or multi-gen suites. Dr. Jan aligns square footage with price-per-foot data to guide budget decisions. Compare plan footprints to lifestyle needs and furniture dimensions.',
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
      'Buyers can add bedrooms, dens, or retreat spaces, shift primary suites downstairs, and upgrade kitchen islands or butler’s pantries. Covered patio extensions and 12-foot sliders create strong indoor-outdoor flow. Dr. Jan preps option worksheets to keep custom choices within appraisal guardrails. Prioritize structural options early since they lock fast.',
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
      'Yes, cores feature continuous kitchen, dining, and great room zones with 9′–10′ ceilings, oversized islands, and walk-in pantries. Flex rooms often sit near entries for offices or lounge space. Dr. Jan maps furniture layouts to confirm traffic flow and sight lines for clients. Evaluate storage and appliance zones to match daily routines.',
    researchDetail:
      'The Aries plan’s 12-foot kitchen island supports dual dishwashers as an upgrade for large households.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 14,
    category: 'floorplans',
    question: 'How do indoor-outdoor living features compare?',
    answer:
      'Standard packages include covered loggias, paver patios, and gas stub-outs for outdoor kitchens. Some communities allow full-width patio extensions and pool-ready electrical. Dr. Jan coordinates landscape architects to design desert-friendly backyards that align with HOA guidelines. Plan shading, turf, and hardscape early to control costs.',
    researchDetail:
      'Sunstone HOA permits pergolas up to 12 feet deep without extra engineering when attached to the home.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 15,
    category: 'floorplans',
    question: 'What’s the difference between building and buying move-in ready?',
    answer:
      'Move-in ready inventory carries designer-selected finishes and can close in 30–60 days, while a ground-up build takes 6–8 months but offers full customization. Price premiums for quick move-ins average $10–$18 per square foot depending on upgrades. Dr. Jan compares equity projections for both paths to guide timing and budget. Decide based on lease end dates and personalization priorities.',
    researchDetail:
      'Quick move-ins in Cadence often include $25,000 or more in upgrades rolled into the published price.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 16,
    category: 'pricing',
    question: 'What’s the current price range for Woodside homes in Las Vegas?',
    answer:
      'Entry pricing begins around $509,990 for 2–3 bedroom plans, with most Sunstone and Cadence offerings stretching into the mid-$600s when fully optioned. Premium lots or larger models exceed $650,000. Dr. Jan runs price-per-foot comparisons against Tri Pointe, Lennar, and Shea to confirm value. Budget for structural and design upgrades on top of base pricing.',
    researchDetail:
      'Average option spend across Dr. Jan’s 2024 Woodside buyers totaled roughly 12% of base price.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 17,
    category: 'pricing',
    question: 'How do incentives work with Woodside?',
    answer:
      'Incentives shift monthly but may include rate buy-downs, design credits, or closing-cost contributions when using preferred lenders. In late 2024, buy-downs hit 2–3 points with up to $12,500 in design studio credit. Dr. Jan tracks incentive sheets weekly to negotiate stackable savings where possible. Confirm final numbers before contract signing.',
    researchDetail:
      'Builder-paid closing costs typically require using Woodside Mortgage or partner lenders—Dr. Jan compares APRs before you commit.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 18,
    category: 'pricing',
    question: 'What financing options complement Woodside purchases?',
    answer:
      'Preferred lenders offer extended rate locks (up to 360 days) and float-down clauses designed for new construction. Conventional 5% down loans dominate, with VA loans common in Cadence and Skye Canyon. Dr. Jan models monthly payments across lender scenarios, factoring HOA dues and property taxes. Lock strategy should align with build milestones.',
    researchDetail:
      'Rate caps often require a 1% deposit credited at closing; Dr. Jan ensures refund clauses if the build cancels.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 19,
    category: 'pricing',
    question: 'How do Woodside closing costs compare?',
    answer:
      'Expect 2–3% of the purchase price, though incentives often offset half when using builder partners. Title and escrow are usually handled by Equity Title or First American depending on community. Dr. Jan audits settlement statements to catch duplicate fees or under-applied credits. Budget reserves to cover prepaid taxes and insurance.',
    researchDetail:
      'Buyers using non-preferred lenders should plan an extra $2,500–$3,500 in closing costs that Woodside would otherwise cover.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 20,
    category: 'market',
    question: 'What’s the long-term value outlook for Woodside communities?',
    answer:
      'Communities like Sunstone and Cadence have posted resale appreciation of 6–9% annually since 2020, outpacing older Northwest inventory. Energy-efficient construction reduces operating costs, enhancing total value. Dr. Jan compiles resale comps to estimate five-year equity growth across plans. Evaluate HOA health, amenity build-out, and regional job growth when forecasting.',
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
      'Active communities include Capella and Lyra in Sunstone (Northwest), several Cadence enclaves in Henderson, and Vireo in Summerlin. Each offers distinct amenities, school zones, and commute patterns. Dr. Jan cross-references builder release calendars to pinpoint upcoming phases. Tour multiple sites to compare lot orientations and lifestyle fits.',
    researchDetail:
      'Sunstone’s next phase releases in late Q2 2025 with 42 lots backing trail corridors and greenbelts.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 1,
    order: 22,
    category: 'communities',
    question: 'What community amenities accompany Woodside neighborhoods?',
    answer:
      'Expect master-planned perks like pools, fitness centers, parks, trails, and resident events. Sunstone offers a 4,000-square-foot amenity center and 15 miles of trails, while Cadence Central Park spans 50 acres with splash pads. Dr. Jan evaluates HOA budgets and amenity completion timelines for clients. Align amenities with your day-to-day routine.',
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
      'Fees range from $40–$110 monthly depending on amenity load, master-planned obligations, and maintenance services. Sunstone hovers near $75 monthly, Cadence near $40 plus quarterly charges, and Summerlin enclaves trend higher with resort-style amenities. Dr. Jan models total housing costs including HOA dues and SIDs. Review fee escalation clauses before purchasing.',
    researchDetail:
      'Cadence’s landscape assessment covers front-yard upkeep, saving owners $120–$150 per month in landscape contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 24,
    category: 'communities',
    question: 'What commutes can buyers expect from Woodside locations?',
    answer:
      'Sunstone sits 25 minutes from the Strip via US-95, Cadence is 20 minutes to the airport via I-215, and Summerlin drops to 15 minutes from Downtown Summerlin employers. Dr. Jan maps traffic trends at peak hours to set realistic commute expectations. Test routes at your actual work schedule before finalizing a lot.',
    researchDetail:
      'Spur Cross (another builder) adds eight minutes to the Strip compared with Sunstone, illustrating why lot selection matters.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 25,
    category: 'communities',
    question: 'What schools serve Woodside communities?',
    answer:
      'Sunstone feeds into Bozarth Elementary, Escobedo Middle, and Centennial High, while Cadence offers access to Lake Mead Christian Academy plus Clark County public schools. Summerlin provides magnet and private options. Dr. Jan provides ratings and commute times to align school choices with lifestyle. Verify rezoning plans before selecting a lot.',
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
      'The journey runs through consultation, community selection, lot reservation, structural choices, design studio, construction milestones, inspections, and closing. Dr. Jan project-manages each phase with checklists and calendar reminders. She handles builder communications to keep timelines on track. Clarify each step before signing your purchase agreement.',
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
      'Woodside requires lender pre-approval letters plus proof of funds for down payment and closing costs. Preferred lenders can issue same-day pre-approvals tailored to builder requirements. Dr. Jan reviews debt-to-income ratios and reserves to ensure approvals align with structural upgrades. Secure pre-approval before reserving a lot to avoid delays.',
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
      'You’ll meet designers to select cabinets, flooring, counters, lighting, and more, typically within 2–4 weeks of contract. Appointments last 4–6 hours across two sessions. Dr. Jan attends or zooms in to keep budgets on track and flag resale-friendly selections. Prepare inspiration boards and cost ceilings beforehand.',
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
      'Woodside allows third-party inspections at critical phases—pre-drywall, mechanical, and final walk. Dr. Jan coordinates licensed inspectors and attends alongside clients. Issues get documented in builder portals with completion deadlines before closing. Schedule inspections early to secure preferred slots.',
    researchDetail:
      'Pre-drywall checklists typically highlight nail plate protection, HVAC duct sealing, and window flashing—areas Dr. Jan double-checks.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 30,
    category: 'process',
    question: 'Are move-in ready homes available frequently?',
    answer:
      'Woodside maintains a rotating inventory of quick move-ins at Cadence, Sunstone, and Summerlin with delivery windows from immediate occupancy to 60 days. They blend designer finishes with competitive pricing to keep absorption steady. Dr. Jan updates an inventory spreadsheet weekly to match buyers with move-in options. Monitor releases closely; desirable lots move fast.',
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
      'New Woodside homes offer lower maintenance, energy savings, and modern layouts compared to 1990s resales that may need $40K+ in updates. Resales offer immediate occupancy and mature landscaping. Dr. Jan builds cost-of-ownership models to weigh both paths. Decide based on budget, timeline, and design expectations.',
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
      'Resale demand stays healthy thanks to energy efficiency, open layouts, and amenity-rich communities. Inventory turns roughly every 28 days in Sunstone, faster than the 42-day metro average. Dr. Jan tracks MLS absorption to predict future equity potential. Consider supply and demand trends when choosing plans and elevations.',
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
      'Compare build quality, energy specs, customization flexibility, HOA obligations, and incentive packages across builders like Pulte, Lennar, and Toll Brothers. Dr. Jan maintains comparison matrices grading structural options, warranty responsiveness, and cost per square foot. Use model walkthroughs and inspection histories to inform decisions. Objective comparisons prevent regret.',
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
      'Focus on structural cutoffs, included features, HOA fees, lot premiums, build timeline, warranty response times, and current incentives. Ask for spec sheets, energy ratings, and design studio appointment windows. Dr. Jan supplies a 23-point checklist to clients before builder tours. Thorough questions reveal hidden costs and timeline risks.',
    researchDetail:
      'Always clarify whether landscaping, appliances, and window coverings are included—policies vary by community and elevation.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 35,
    category: 'education',
    question: 'How do elevations differ from floor plans?',
    answer:
      'Elevations change exterior aesthetics—stucco patterns, stone, rooflines—while the floor plan defines interior layout. Elevation pricing ranges $3,500–$12,000 depending on detail. Dr. Jan reviews CCRs to ensure HOA approval and confirms structural differences tied to elevations. Choose elevations that align with resale appeal and sun exposure.',
    researchDetail:
      'South-facing lots benefit from elevations with deeper overhangs to reduce heat gain—Dr. Jan models sun paths for clients.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 36,
    category: 'education',
    question: 'What should first-time buyers know about Woodside?',
    answer:
      'First-time buyers appreciate the structured process, predictable build timeline, and energy savings, but need to budget for window treatments, backyard completion, and appliances in some communities. Dr. Jan mentors first-timers through financing, design selections, and inspections. Education up front prevents surprise costs. Attend model tours with a detailed checklist.',
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
      'Start by separating structural upgrades (must decide early) from design finishes. Allocate funds to items with ROI—cabinetry, flooring, electrical prewires, and primary bath enhancements. Dr. Jan’s spreadsheets forecast total costs against appraisal limits to avoid low-value overages. Prioritize lifestyle and resale benefits.',
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
      'New Woodside homes reduce surprise repairs thanks to new HVAC, plumbing, roofing, and warranty coverage. Energy-efficient materials lower utility spend and extend lifespan of equipment. Dr. Jan compares maintenance projections to resale options for a 10-year horizon. Use savings to plan future upgrades or pay down principal faster.',
    researchDetail:
      'Dr. Jan recommends budgeting 1% of purchase price annually for maintenance on new builds versus 2–3% for older resales.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 39,
    category: 'education',
    question: 'How does Dr. Jan add value in the Woodside buying process?',
    answer:
      'Dr. Jan performs independent research on Woodside specs, tracks incentives, compares competing builders, and negotiates upgrade credits for clients. Her 500+ new construction closings give insight into build quality and timeline management. She’s not affiliated with Woodside; she represents buyers exclusively. Engage her early to leverage data-driven guidance.',
    researchDetail:
      'Dr. Jan maintains a private database of superintendent contacts, warranty response times, and inspection findings for every Woodside community.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 1,
    order: 40,
    category: 'process',
    question: 'How can buyers stay informed during construction?',
    answer:
      'Woodside provides weekly portal updates, but Dr. Jan supplements with site visits, photo documentation, and milestone checklists. She also schedules meetings with superintendents to resolve issues quickly. Transparent communication keeps builds on schedule and minimizes surprise delays. Plan a cadence of updates from contract to close.',
    researchDetail:
      'Dr. Jan uses Matterport scans at framing to document wiring, plumbing, and blocking for future reference.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  // Iteration 2 - Enhanced details with market data
  {
    iteration: 2,
    order: 1,
    category: 'company',
    question: 'Who is Woodside Homes and how established are they in Las Vegas?',
    answer:
      'Woodside Homes has delivered neighborhoods across Summerlin, Henderson, and North Las Vegas for over 40 years, now backed by Sekisui House’s $20B global portfolio. They accounted for roughly 7% of new-home permits pulled in Clark County in 2024. Dr. Jan Duffy tracks permit filings and release schedules to guide lot selection for her clients. Start your research by mapping active Woodside enclaves inside each master plan.',
    researchDetail:
      'Clark County permit data confirms 612 Woodside closings between 2020–2024, with the highest absorption in Cadence.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 2,
    order: 2,
    category: 'company',
    question: 'What does Woodside Homes mean by “Life-Inspired Design”?',
    answer:
      'The philosophy converts homeowner focus-group data into ergonomic layouts—think wider kitchen work triangles, drop zones, and indoor-outdoor transitions sized for Las Vegas entertaining. Models like Aries and Virgo at Sunstone align kitchens, great rooms, and patios to maximize airflow without sacrificing energy performance. Dr. Jan documents traffic patterns from walkthroughs so buyers understand livability beyond floor plans. Compare your daily routines with these lifestyle touch points.',
    researchDetail:
      'Virgo’s sliding glass wall measures 12′ x 8′, boosting cross-breeze while keeping radiant heat exposure low.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 3,
    category: 'specs',
    question: 'How energy-efficient are Woodside homes in the valley climate?',
    answer:
      'Woodside exceeds Energy Star 3.1 with R-38 attic insulation, R-13 walls, Low-E2 vinyl windows, radiant barriers, and 16-SEER HVAC tuned for triple-digit summers. HERS scores hover in the low 50s, outperforming typical 1990s resales by 25+ points. Dr. Jan calculates annual utility projections using NV Energy rate data to quantify savings. Evaluate these numbers against competing builders before finalizing.',
    researchDetail:
      'A Sunstone Lyra quick move-in tested at HERS 52 in December 2024—projected to save $1,230 annually versus a comparable 2005 resale.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 4,
    category: 'process',
    question: 'What is Woodside’s average build timeline in Las Vegas?',
    answer:
      'New builds typically span 6–7.5 months from contract to closing, with framing delivered around week 12 and drywall complete by week 19. Supply-chain delays eased in 2024, though monsoon season can add a week or two. Dr. Jan maintains milestone trackers and superintendent contacts to keep timelines realistic. Align rate locks and lease end dates with this schedule.',
    researchDetail:
      'Dr. Jan’s 2024 clients averaged 205 days from structural lock to keys, with only two delays exceeding 14 days.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 5,
    category: 'process',
    question: 'How does Woodside’s warranty support compare to other builders?',
    answer:
      'The one/two/ten-year warranty structure mirrors industry leaders, with portal-based requests and local superintendents handling dispatch. Average response time in 2024 ran 5.6 days, beating Lennar and Pulte’s 7+ day averages. Dr. Jan surveys homeowners quarterly to validate service levels and escalation pathways. Review the warranty manual before closing so you know coverage boundaries.',
    researchDetail:
      'Two HVAC condensate issues escalated by Dr. Jan in 2024 were resolved in under 72 hours via the local customer care team.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 6,
    category: 'floorplans',
    question: 'How does Woodside compare with other Las Vegas builders on customization?',
    answer:
      'Woodside’s semi-custom flexibility lets buyers add gen suites, 3-car tandem garages, multi-slide doors, or extended patios—options national builders often limit. The design studio catalogs desert-friendly surfaces from Daltile, Mohawk, and Silestone. Dr. Jan benchmarks upgrade pricing against Toll Brothers and Tri Pointe so you invest where it matters. Rank structural must-haves early because they lock fast.',
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
      'Public reviews average 4.2 stars across Google and Yelp, spotlighting build quality and energy savings; criticisms typically mention communication gaps during framing. JD Power’s 2024 New-Home Builder Study placed them above the metro average for customer satisfaction. Dr. Jan interviews homeowners quarterly to keep unbiased sentiment data. Balance online reviews with onsite observations and warranty histories.',
    researchDetail:
      'Dr. Jan’s 2024 homeowner survey (28 responses) found 86% would repurchase with Woodside, citing lower energy bills and practical layouts.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 8,
    category: 'specs',
    question: 'What are the hallmark specifications of Woodside’s desert engineering?',
    answer:
      'Expect tech-shield radiant barriers, soffit vents, insulated garage doors, 2x6 exterior walls in select plans, drip irrigation with smart controllers, and tankless water heaters. These specs reduce attic heat gain up to 30°F and cut water usage by up to 30%. Dr. Jan validates spec sheets against Clark County code updates before you commit. Use specs to gauge lifetime operating costs.',
    researchDetail:
      'TechShield radiant barrier is standard in Sunstone, while certain Cadence townhomes list it as an upgrade—Dr. Jan confirms before contract.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 9,
    category: 'specs',
    question: 'How robust is Woodside’s smart home package?',
    answer:
      'Standard kits include Wi-Fi thermostats, smart garage operators, Cat6 wiring, and security prewires, with upgrades expanding to Alarm.com or Control4 automation. Many buyers add lighting and shade control during framing to avoid retrofit costs. Dr. Jan coordinates low-voltage vendors to compare builder pricing versus third-party installers. Plan your automation stack before drywall.',
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
      'WaterSense fixtures, low-flow irrigation controllers, drip landscaping, and recirculating hot-water loops minimize consumption. Many lots use xeriscape front yards meeting SNWA Turf Rebate guidelines. Dr. Jan estimates monthly water budgets using tiered SNWA rates so buyers anticipate ongoing costs. Include water savings when comparing to older resales.',
    researchDetail:
      'Cadence homes deliver 1.5 GPM showerheads and 1.28 GPF toilets, keeping average usage under SNWA tier-two thresholds.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 11,
    category: 'floorplans',
    question: 'What are Woodside’s square footage ranges in Las Vegas?',
    answer:
      'Current plans run from roughly 1,700 sq ft cottages to over 3,400 sq ft two-story homes, with Sunstone’s core lineup between 1,859 and 2,395 sq ft. Larger options add lofts or multi-gen suites for extended families. Dr. Jan aligns square footage with price-per-foot trends to keep budgets realistic. Choose models that fit both space needs and HVAC efficiency.',
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
      'Buyers can add bedrooms, flex rooms, garage bump-outs, patio extensions, or pocket offices depending on community. Structural upgrades close by week three, while design finishes finalize later. Dr. Jan preps structural budget sheets so clients know upgrade ROI before committing. Better to invest in structural modifications up front than retrofit later.',
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
      'Great rooms, kitchens, and dining areas connect through oversized islands, with ceiling heights of 9′–10′ and optional beams. Flex rooms often sit near entries for offices or lounge space. Dr. Jan tests furniture placement during model tours to confirm flow, especially with multi-slide doors. Confirm the plan supports your work-from-home and entertaining habits.',
    researchDetail:
      'Aries’ great room spans 18′ x 16′—large enough for dual seating zones without crowding.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 14,
    category: 'floorplans',
    question: 'How do indoor-outdoor living features compare?',
    answer:
      'Covered loggias, pavers, gas stub-outs, and prewired fans come standard; upgrades extend patios, add fireplaces, or install multi-slide doors. Communities enforce design guidelines, so planning early prevents change-order issues. Dr. Jan partners with landscape architects to budget pool or turf installs within HOA standards. Use sun studies to orient patios effectively.',
    researchDetail:
      'Sunstone HOA allows 600 sq ft of artificial turf with no secondary approval; Cadence caps turf at 40% of the rear yard.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 15,
    category: 'floorplans',
    question: 'What’s the difference between building and buying move-in ready?',
    answer:
      'Move-in ready homes close within 30–60 days and usually list 3–5% above base to cover upgrades and lot premiums; ground-up builds take longer but allow full personalization. Dr. Jan models total costs—including carry costs and option spend—to determine which fits your timing and equity goals. Consider lease expiration, rate trends, and customization appetite.',
    researchDetail:
      'QMI inventory in Q1 2025 shows $28K average in included upgrades rolled into pricing.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 16,
    category: 'pricing',
    question: 'What’s the current price range for Woodside homes in Las Vegas?',
    answer:
      'Entry pricing starts around $509,990 for smaller plans; most Sunstone and Cadence builds run $560K–$630K after structural and design options. Premium lots or Summerlin product can exceed $650K. Dr. Jan cross-checks price-per-foot numbers with competitors to confirm value. Budget 10–15% above base for upgrades if you want designer-level finishes.',
    researchDetail:
      'Average sale price for Dr. Jan’s 2024 Woodside buyers was $598,400, inclusive of options and lot premiums.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 17,
    category: 'pricing',
    question: 'How do incentives work with Woodside?',
    answer:
      'Incentives rotate monthly, typically featuring interest-rate buy-downs, closing-cost credits, or design allowances when you use preferred lenders. Q4 2024 incentives peaked at 3-point rate reductions plus $12,500 design credits. Dr. Jan negotiates stackable savings—often combining design credit with closing-cost help on quick move-ins. Always obtain the final incentive sheet before signing.',
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
      'Conventional 5% down loans dominate, but preferred lenders offer extended locks up to 360 days with float-down features. VA buyers remain strong in Cadence and Sunstone due to low fees. Dr. Jan compares APRs across builder-affiliated and independent lenders to ensure incentives don’t hide higher costs. Lock when structural decisions finalize to avoid rate volatility.',
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
      'Plan on 2–3% of purchase price; preferred lender credits often offset 1–2% when you follow their program. Title/escrow typically routes through Equity Title or First American. Dr. Jan scrutinizes settlement statements to catch duplicate fees or misapplied credits. Keep reserves for prepaid taxes, insurance, and potential rate-lock extension fees.',
    researchDetail:
      'Using an outside lender can add $2,500–$3,500 in costs because builder credits usually vanish—Dr. Jan weighs savings versus flexibility.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 20,
    category: 'market',
    question: 'What’s the long-term value outlook for Woodside communities?',
    answer:
      'Since 2020, Sunstone and Cadence resale comps show 6–9% annual appreciation, outpacing the Clark County single-family average of roughly 5%. Energy-efficient builds and master-planned amenities bolster resale demand. Dr. Jan compiles MLS absorption data to forecast equity by plan, elevation, and location. Factor HOA reserves, amenity completion, and regional job growth into value projections.',
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
      'Active sites include Capella and Lyra at Sunstone (Northwest), multiple Cadence enclaves in Henderson, and Vireo in Summerlin West. New phases planned for late 2025 will extend offerings toward Skye Hills. Dr. Jan reviews land-use filings and builder investor calls to anticipate upcoming releases. Compare each community’s amenities, SID balances, and school zones before deciding.',
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
      'Sunstone offers a 4,000 sq ft community hub, pools, fitness areas, and 15 miles of trails; Cadence features a 50-acre Central Park, splash pads, and free wifi in public spaces. Summerlin enclaves add golf access and clubhouses. Dr. Jan inspects HOA budgets and staffing to ensure promised amenities deliver on schedule. Align amenity packages with your lifestyle priorities.',
    researchDetail:
      'Sunstone’s amenity center is funded and expected to open mid-2025, with staffing already included in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 23,
    category: 'communities',
    question: 'How do HOA fees compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence averages $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month with club access. Some communities also carry SIDs or LIDs. Dr. Jan models total housing costs, including HOA and special assessments, before clients commit. Verify CCRs for fee escalation clauses.',
    researchDetail:
      'Cadence’s landscape assessment covers front-yard maintenance, saving owners $120–$150 monthly in landscaping contracts.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 24,
    category: 'communities',
    question: 'What commute times can buyers expect from Woodside locations?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add 10 minutes during weekday rush hours. Dr. Jan conducts live commute tests with clients at their expected schedules. Factor in future road expansions like the 215 Beltway.',
    researchDetail:
      'Centennial Hills Hospital commute from Sunstone is under 10 minutes—highlighting appeal for healthcare professionals.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 25,
    category: 'communities',
    question: 'What schools serve Woodside communities?',
    answer:
      'Sunstone zones to Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus new charter options; Summerlin provides magnet and private programs. A K-8 charter is planned inside Sunstone for 2026. Dr. Jan supplies district ratings, boundary maps, and private-school commute times. Confirm planned rezoning before choosing a lot.',
    researchDetail:
      'The planned charter within Sunstone already secured funding, boosting future resale desirability for families.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 26,
    category: 'process',
    question: 'What are the steps in buying a Woodside home?',
    answer:
      'Consultation, community tour, lot reservation, structural selections, design studio, construction milestones, inspections, and closing form the core journey. Woodside asks buyers to sign purchase agreements within 24 hours of reserving a lot. Dr. Jan manages the timeline with checklist-driven project management and builder coordination. Clarify expectations at each stage before you place deposits.',
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
      'Builders require lender pre-approval letters plus documentation of down payment and closing funds. Preferred lenders can issue same-day approvals calibrated to Woodside’s DTI thresholds. Dr. Jan reviews credit scores, reserves, and rate options before you commit. Getting pre-approved first prevents losing your preferred lot.',
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
      'Sessions usually occur within 2–4 weeks of contract and run 4–6 hours across two visits. Designers walk you through cabinets, flooring, counters, lighting, and plumbing curated for desert durability. Dr. Jan attends in person or via video to keep upgrades on budget and resale-friendly. Arrive with inspiration photos, sample swatches, and a prioritized wish list.',
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
      'Woodside allows third-party inspections at pre-drywall, mechanical completion, and final walk stages. Reports feed into the builder portal with deadlines for corrections before closing. Dr. Jan coordinates licensed inspectors and attends each milestone to advocate for buyers. Schedule inspections early to secure prime slots.',
    researchDetail:
      'Pre-drywall inspections often flag nail plate protection, window flashing, and HVAC duct sealing—focus areas Dr. Jan monitors closely.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 30,
    category: 'process',
    question: 'Are move-in ready homes available frequently?',
    answer:
      'There’s a rotating inventory with completion windows from immediate occupancy to 60 days out, especially in Cadence and Sunstone. These homes bundle popular upgrades like quartz counters and extended tile, usually priced 3–5% above base. Dr. Jan updates inventory spreadsheets weekly to match buyers with upcoming deliveries. Secure interest quickly—high-demand lots move within days.',
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
      'New Woodside homes offer lower maintenance, modern layouts, and energy savings compared with 1990s resales that may need $40K+ in upgrades. Resales offer immediate move-in and mature landscaping. Dr. Jan builds total cost-of-ownership models—including utilities and maintenance—to guide decisions. Weigh timeline, customization, and long-term costs for your household.',
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
      'Demand stays healthy thanks to energy efficiency, open plans, and amenity-rich settings—Sunstone inventory turned in 28 days on average during 2024. That’s faster than Clark County’s 42-day single-family average. Dr. Jan monitors MLS absorption to forecast equity growth by plan and elevation. Favor west-facing lots or amenity-adjacent parcels for stronger resale.',
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
      'Compare structural flexibility, energy specs, incentives, warranty response times, and HOA obligations against Pulte, Lennar, Shea, and Toll Brothers. Dr. Jan’s builder comparison matrix grades each category using inspection and warranty data gathered from past clients. Visit multiple model parks, request spec sheets, and review independent home-inspection reports. Objective comparisons drive confident decisions.',
    researchDetail:
      'Woodside averages 0.7 warranty claims per home in year one—lower than Lennar’s 1.1 in similar price tiers.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 34,
    category: 'education',
    question: 'What questions should buyers ask at a Woodside model?',
    answer:
      'Concentrate on structural cut-off dates, included features, HOA dues, lot premiums, build timeline, inspection access, and incentive requirements. Request energy ratings, design studio calendars, and sample option price lists. Dr. Jan equips clients with a 23-point checklist covering these details. The right questions expose hidden costs and timeline risks.',
    researchDetail:
      'Always confirm whether soft water loops, landscaping, appliances, and window coverings are included—policies differ by community and elevation.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 35,
    category: 'education',
    question: 'How do elevations differ from floor plans?',
    answer:
      'Elevations change exterior styling—stucco, stone, rooflines—while floor plans dictate interior layout. Elevations can adjust window placement, parapet heights, and covered entry depth, affecting natural light and curb appeal. Dr. Jan reviews HOA color palettes and elevation premiums so buyers grasp costs and sun impacts. Pick elevations that balance style with climate performance.',
    researchDetail:
      'South-facing lots perform best with elevations featuring deeper overhangs; Dr. Jan models sun paths for each candidate lot.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 36,
    category: 'education',
    question: 'What should first-time buyers know about Woodside?',
    answer:
      'Expect a structured timeline, energy-efficient construction, and curated design support, but budget for window coverings, backyard completion, and appliances in some communities. Builder reps work for Woodside, so having Dr. Jan on your side ensures independent advice and inspections. Thorough preparation prevents surprise costs. Bring an expert to every appointment.',
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
      'Separate structural necessities from design finishes, then allocate funds to high-value categories like flooring, cabinetry, and electrical. Dr. Jan’s appraisal models estimate ROI on each upgrade to avoid over-investing. Focus on surfaces and lighting that elevate daily living and future resale appeal. Keep a contingency fund for design studio surprises.',
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
      'New Woodside homes provide warranty-backed HVAC, plumbing, roofing, and appliances, minimizing unexpected repairs for the first 5–10 years. Energy-efficient materials lower long-term costs and improve comfort. Dr. Jan compares maintenance projections to resale options over a decade to highlight savings. Use the savings to build reserves or pay down principal faster.',
    researchDetail:
      'Dr. Jan recommends budgeting 1% of purchase price annually for maintenance on new builds versus 2–3% for older inventory.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 39,
    category: 'education',
    question: 'How does Dr. Jan add value in the Woodside buying process?',
    answer:
      'Dr. Jan delivers independent research on specs, incentives, warranty responsiveness, and competing builders; she’s closed 500+ new-construction deals totaling $127M+. She coordinates inspections, negotiates upgrades, and keeps builds on schedule without representing the builder. Her expertise gives buyers confidence in every decision. Engage her early to leverage data-driven support.',
    researchDetail:
      'She maintains direct escalation contacts with Woodside superintendents, warranty managers, and design leaders in every community.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 2,
    order: 40,
    category: 'process',
    question: 'How can buyers stay informed during construction?',
    answer:
      'Woodside’s portal delivers weekly progress updates, but Dr. Jan supplements with site visits, drone photos, 3D scans, and milestone checklists. She coordinates meetings with superintendents to resolve issues quickly. Transparent communication keeps builds on schedule and stress low. Establish an update cadence from day one.',
    researchDetail:
      'Matterport scans at framing preserve locations of wiring, plumbing, and blocking for future reference.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 1,
    category: 'company',
    question: 'How large is Woodside Homes’ footprint in Las Vegas right now?',
    answer:
      'Woodside is actively building in Sunstone, Cadence, Summerlin West, and North Las Vegas enclaves, capturing about 7% of 2024 Clark County permits. Their presence spans price points from low $500s to mid $600s in those master plans. Dr. Jan Duffy tracks release calendars so buyers know when new phases drop before they hit the MLS. Use that footprint to compare commute times, schools, and HOA costs.',
    researchDetail:
      'Clark County recorded 612 Woodside closings between 2020 and 2024, with Cadence delivering the highest absorption.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 2,
    category: 'company',
    question: 'How does Woodside’s Life-Inspired Design show up in real floor plans?',
    answer:
      'In Sunstone’s Aries model you’ll find 12-foot stacking sliders, extended drop zones, and flex rooms near the foyer—features built from homeowner interviews. Those ergonomics outperform many Lennar and Pulte layouts Dr. Jan benchmarks for clients. Touring with her furniture templates reveals how daily routines actually flow through these spaces. Compare your lifestyle needs to the design cues before locking a lot.',
    researchDetail:
      'Aries includes a 12′ x 8′ stacking slider, a mudroom bench with storage, and an optional prep kitchen highlighted during Dr. Jan’s walkthroughs.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 3,
    category: 'specs',
    question: 'How do Woodside HERS scores compare to other Vegas builders?',
    answer:
      'Sunstone’s Lyra and Virgo models usually test in the low 50s, while 2010-era resales hover around 80 and Lennar’s latest Skye Canyon series near 60. Lower HERS means you’ll spend hundreds less per year on NV Energy bills. Dr. Jan models those numbers so buyers can weigh lifetime costs against other builders. Bring those projections into appraisal and resale conversations.',
    researchDetail:
      'A December 2024 Lyra quick move-in posted HERS 52, projecting $1,230 annual savings versus a similar 2005 resale.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 4,
    category: 'process',
    question: 'What’s the most realistic build timeline buyers should plan for?',
    answer:
      'Woodside quotes 6–8 months, but Dr. Jan’s 2024 clients averaged roughly 205 days from structural lock to keys. Only two closings slipped more than two weeks, usually during monsoon storms. She builds contingency calendars for rate locks, lease ends, and movers so you stay ahead of surprises. Align your financing strategy with that real-world cadence.',
    researchDetail:
      'Typical milestone timing: pre-drywall week 12, drywall complete week 19, trims by week 23—validated by Dr. Jan’s onsite checklists.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 5,
    category: 'process',
    question: 'How responsive is Woodside’s warranty team compared with competitors?',
    answer:
      'Warranty tickets averaged 5–6 business days to resolution in 2024, beating Lennar’s 7+ day metro average and matching Tri Pointe’s speed. Dr. Jan maintains escalation contacts with every superintendent to shorten repair times when needed. Knowing those metrics gives buyers confidence beyond marketing promises. Keep the service portal bookmarked and document any issues promptly.',
    researchDetail:
      'Two HVAC condensate problems escalated by Dr. Jan in 2024 were resolved within 72 hours through Woodside Customer Care.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 6,
    category: 'specs',
    question: 'Do Woodside homes beat the Energy Star standard or just meet it?',
    answer:
      'They exceed Energy Star 3.1 with R-38 attic insulation, R-13 walls, radiant barriers, 16-SEER HVAC, and tankless water heaters tuned for 110°F summers. Competitors like Toll Brothers sometimes require upgrade packages for the same specs. Dr. Jan validates each feature against Clark County codes before you sign. Factor utility savings into your total cost-of-ownership analysis.',
    researchDetail:
      'TechShield radiant barrier is standard in Sunstone but optional in certain Cadence townhomes—Dr. Jan confirms inclusion before contract.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 7,
    category: 'specs',
    question: 'What smart-home infrastructure is included up front?',
    answer:
      'Expect Cat6 runs, smart thermostats, Wi-Fi garage openers, and security prewires, with upgrades allowing full Control4 or Alarm.com automation. Planning low-voltage during framing costs far less than retrofitting later. Dr. Jan brings in trusted integrators to compare builder pricing with third-party quotes. Decide on automation stacks before drywall goes up.',
    researchDetail:
      'Prewire bundles installed at build time average $1.80 per square foot; post-close retrofits can double that cost.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 8,
    category: 'specs',
    question: 'How desert-ready are Woodside’s building materials?',
    answer:
      'Insulated garage doors, smart irrigation, low-water landscaping, and heat-reflective roof designs are engineered for Mojave conditions. Woodside’s overhangs and attic ventilation keep attic temps up to 30°F cooler than older inventory. Dr. Jan cross-checks spec sheets with Clark County updates so nothing slips through. Durable materials protect comfort and resale value.',
    researchDetail:
      'Sunstone elevations leverage low-slope roofs and soffit vents to reduce headload versus 1990s Northwest resales.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 9,
    category: 'floorplans',
    question: 'How do Woodside’s floor-plan sizes stack up across communities?',
    answer:
      'Sunstone ranges 1,859–2,395 sq ft, Cadence stretches to 2,700 sq ft, and Summerlin releases reach beyond 3,400 sq ft. Dr. Jan pairs those footprints with price-per-foot metrics so budgets stay realistic. Consider how extra lofts or gen suites impact energy loads and furniture planning. Square footage is important, but usable space matters more.',
    researchDetail:
      'The Adair plan hits 2,289 sq ft with an optional fourth bedroom for roughly $15,000 above the base configuration.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 10,
    category: 'floorplans',
    question: 'How flexible are layout options compared with Lennar or Pulte?',
    answer:
      'Woodside lets you add gen suites, garage extensions, pocket offices, and 12-foot sliders—structural changes many national builders restrict. Dr. Jan’s option worksheets rank ROI so you invest in upgrades that appraise well. Lock structural decisions by day 21 to avoid last-minute compromises. Flexibility today means better resale narratives tomorrow.',
    researchDetail:
      'Sunstone gen-suite packages cost $24K–$28K and include kitchenette rough-ins—a semi-custom perk at this price point.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 11,
    category: 'floorplans',
    question: 'Are the open-concept spaces genuinely functional or just marketing speak?',
    answer:
      'Great rooms span up to 18′ x 16′ with 10′ ceilings, and kitchens feature 12′ islands sized for dual dishwashers. Dr. Jan sketches furniture placements during tours to confirm sightlines and circulation for each household. Functionality drives resale value more than glossy brochures. Evaluate appliance zones, pantry storage, and media wall placement in person.',
    researchDetail:
      'Aries’ great room comfortably supports two seating zones, verified with Dr. Jan’s staging templates.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 12,
    category: 'floorplans',
    question: 'How do indoor/outdoor transitions compare to other builders?',
    answer:
      'Woodside’s multi-slide doors, covered loggias, gas stubs, and patio extensions stack up well against Lennar and Pulte offerings. Some communities allow pool-ready electrical and extended patios, provided HOA guidelines are met. Dr. Jan vets those rules and partners with landscape architects to design compliant backyards. Capture shading, turf allowances, and gas lines early.',
    researchDetail:
      'Sunstone permits 600 sq ft of turf without extra approval, while Cadence caps turf at 40% of rear yard area.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 13,
    category: 'floorplans',
    question: 'Build-to-order vs move-in ready—how do costs shake out?',
    answer:
      'Quick move-ins close in 30–60 days and typically list 3–5% above base with designer finishes baked in. Ground-up builds take longer but let you control every structural and design choice. Dr. Jan models total cost—including lease overlap and rate locks—so you see the real difference. Choose based on timing, customization appetite, and equity projections.',
    researchDetail:
      'Q1 2025 Sunstone quick move-ins averaged $28K in included upgrades rolled into published pricing.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 14,
    category: 'pricing',
    question: 'Where is Woodside pricing today compared with Lennar or Tri Pointe?',
    answer:
      'Woodside’s entry point is about $510K, with most Sunstone and Cadence homes landing $560K–$630K after upgrades. Tri Pointe’s comparable plans often start $10K–$15K higher, while Lennar undercuts but limits structural flexibility. Dr. Jan cross-checks price-per-foot data weekly to confirm value. Analyze total cost, not just base price.',
    researchDetail:
      'Dr. Jan’s 2024 Woodside clients averaged $598,400 contract price inclusive of options and lot premiums.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 15,
    category: 'pricing',
    question: 'What Woodside incentives are realistic right now?',
    answer:
      'Rate buy-downs up to three points, $12K design credits, or $7K closing-cost help are typical when using preferred lenders. Quick move-ins sometimes layer extra credits to keep inventory turning. Dr. Jan negotiates stackable savings by timing offers around builder inventory pushes. Verify the incentive sheet before you sign the purchase agreement.',
    researchDetail:
      'Late 2024 incentives granted 3-point buy-downs plus $12,500 design credits on select Cadence releases.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 16,
    category: 'pricing',
    question: 'How do preferred lender rates compare to outside lenders?',
    answer:
      'Preferred lender APRs can sit slightly higher, but the incentives and extended locks often offset the difference. Dr. Jan runs side-by-side APR and payment scenarios so you see the net impact. Sometimes an outside lender still wins once credits vanish. Let the math—not a sales pitch—drive the decision.',
    researchDetail:
      'Extended 360-day locks usually require a 1% fee applied to closing; Dr. Jan ensures refund clauses if delays exceed the lock.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 17,
    category: 'pricing',
    question: 'What’s the full closing-cost picture with and without builder incentives?',
    answer:
      'With incentives, closing costs can drop to roughly 1%–1.5% of purchase price; without them, plan on 2%–3%. Dr. Jan audits settlement statements to catch duplicate fees, misapplied credits, or missing prorations. She often recovers $1K–$2K just by verifying escrow line items. Budget reserves for prepaid taxes, insurance, and possible rate-lock extensions.',
    researchDetail:
      'Using outside lenders typically adds $2,500–$3,500 in costs because builder credits vanish.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 18,
    category: 'pricing',
    question: 'How resilient is Woodside appreciation versus the broader market?',
    answer:
      'Sunstone and Cadence Woodside resales appreciated 6–9% annually since 2020, beating the Clark County single-family average near 5%. Energy efficiency and amenity-rich plans drive buyer demand even in high-rate cycles. Dr. Jan compiles MLS absorption and price-per-foot trends to forecast five-year equity. Strong HOA reserves also support long-term value.',
    researchDetail:
      'Four Sunstone Woodside resales from 2021 resold in 2024 with $102K average gains despite elevated interest rates.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 19,
    category: 'communities',
    question: 'Which Woodside communities will release new lots soon?',
    answer:
      'Sunstone Phase 3 launches in late Q2 2025 with 42 north-facing lots, while Cadence continues rolling releases each quarter. Summerlin’s Vireo has limited inventory and may see a final release later in 2025. Dr. Jan’s builder contacts flag these drops before sales offices go public. Being early lets you secure premium orientations.',
    researchDetail:
      'Dr. Jan maintains a private calendar of superintendent release dates, deposit requirements, and lot premiums for every Woodside site.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 20,
    category: 'communities',
    question: 'What amenities distinguish Woodside neighborhoods from competitors?',
    answer:
      'Sunstone delivers a 4,000 sq ft amenity hub, pools, fitness rooms, co-working, and 15 miles of trails; Cadence offers a 50-acre park and splash pads; Summerlin adds golf and clubhouses. Lennar’s Skye Canyon emphasizes athletic amenities, while Toll Brothers leans toward boutique clubs. Dr. Jan tours each amenity set so the lifestyle match is deliberate.',
    researchDetail:
      'Sunstone’s amenity center is funded and scheduled to open mid-2025, with staffing already budgeted in HOA dues.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 21,
    category: 'communities',
    question: 'How do HOA dues compare across Woodside communities?',
    answer:
      'Sunstone runs about $75/month plus a $35 master fee, Cadence charges around $40/month plus quarterly landscape dues, and Summerlin enclaves can exceed $110/month. Some communities also carry SIDs or LIDs that affect monthly payments. Dr. Jan models total housing costs, including HOA and special assessments, before clients commit. Understand escalation clauses before signing.',
    researchDetail:
      'Cadence’s landscape assessment covers front-yard maintenance, saving many owners $120–$150 monthly compared to private crews.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 22,
    category: 'communities',
    question: 'What commute times can buyers expect from each Woodside location?',
    answer:
      'Sunstone sits 25–28 minutes from the Strip via US-95, Cadence averages about 20 minutes to the airport via I-215, and Summerlin homes reach Downtown Summerlin employers in under 15 minutes. Peak traffic can add ten extra minutes, so Dr. Jan drives routes at your expected schedule. Plan around future 215 Beltway improvements too.',
    researchDetail:
      'Centennial Hills Medical Center is under ten minutes from Sunstone, making it a top pick for medical professionals.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 23,
    category: 'communities',
    question: 'How do school options stack up for Woodside buyers?',
    answer:
      'Sunstone feeds Bozarth ES, Escobedo MS, and Centennial HS; Cadence offers Lake Mead Christian Academy plus CCSD schools; Summerlin provides magnet and private options. A K-8 charter is planned inside Sunstone for 2026. Dr. Jan compiles boundary maps, ratings, and commute times so education goals guide the lot decision. Verify future rezoning with the district.',
    researchDetail:
      'The planned Sunstone charter already secured funding, boosting family demand and future resale appeal.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 24,
    category: 'process',
    question: 'Which steps should buyers expect from contract to closing?',
    answer:
      'From consultation you move to community tour, lot reservation, structural choices, design studio, construction milestones, inspections, and closing. Woodside requires contract signatures within 24 hours of reserving a lot. Dr. Jan runs the project with checklist-driven milestones and builder coordination. Clarity upfront avoids rushed decisions later.',
    researchDetail:
      'Lot reservation deposits generally start at $1,000 and stay refundable for 48 hours if you decide not to proceed.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 25,
    category: 'process',
    question: 'Why secure pre-approval before touring models?',
    answer:
      'Pre-approval letters and verified funds let you lock desirable lots immediately and unlock incentives. Preferred lenders produce tailored approvals the same day when needed. Dr. Jan reviews those numbers to ensure structural upgrades fit your budget. Without pre-approval, prime lots often go to buyers who arrive prepared.',
    researchDetail:
      'Preferred lender incentives typically require a 680+ score, though 620–679 buyers can qualify with reduced credits.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 26,
    category: 'process',
    question: 'What should buyers expect during the design studio experience?',
    answer:
      'Design sessions occur within two to four weeks of contract and last 4–6 hours across two appointments. Designers guide you through cabinets, flooring, counters, lighting, and plumbing curated for desert durability. Dr. Jan attends or video conferences to keep selections on budget and appraisal-friendly. Bring inspiration boards and prioritize must-haves.',
    researchDetail:
      'Flooring upgrades run $6–$18 per square foot; focusing on great rooms and kitchens delivers the strongest ROI.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 27,
    category: 'process',
    question: 'How do inspection rights differ from other builders?',
    answer:
      'Woodside allows third-party inspections at pre-drywall, mechanical completion, and final walk, whereas some builders limit access. Reports feed into the customer portal with deadlines for fixes before closing. Dr. Jan coordinates licensed inspectors and attends each milestone to advocate for buyers. Scheduling early ensures you secure prime slots.',
    researchDetail:
      'Pre-drywall inspections frequently flag nail plate protection, window flashing, and HVAC duct sealing—items Dr. Jan double-checks onsite.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 28,
    category: 'process',
    question: 'How frequently does Woodside release quick move-in inventory?',
    answer:
      'Expect rotating batches of six to twelve homes per community with 30–60 day closings. They arrive with popular finishes like quartz, extended tile, and upgraded lighting priced into the home. Dr. Jan maintains weekly spreadsheets so clients can reserve before public blasts. Act fast—desirable orientations sell within hours.',
    researchDetail:
      'March–May 2025 features eight Sunstone quick move-ins in the mid-$600Ks with $30K+ of upgrades included.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 29,
    category: 'market',
    question: 'New build versus resale—how should buyers weigh maintenance?',
    answer:
      'New Woodside homes offer warranty-backed systems, Energy Star efficiency, and modern layouts, reducing surprise repairs compared with 1990s resales that often need $40K+ in updates. Resales deliver immediate occupancy and mature landscaping but higher utility costs. Dr. Jan models ten-year cost-of-ownership for both paths so decisions stay objective.',
    researchDetail:
      'Dr. Jan advises budgeting 1% of purchase price annually for maintenance on new builds versus 2–3% for older inventory.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 30,
    category: 'market',
    question: 'How resilient are Woodside resales in the MLS?',
    answer:
      'Sunstone and Cadence Woodside homes averaged 28 days on market in 2024, outpacing the Clark County average of 42 days. Energy efficiency, modern layouts, and strong HOAs keep buyer demand robust even during rate hikes. Dr. Jan studies absorption and price-per-foot trends to forecast equity. Picking the right lot and elevation further protects resale value.',
    researchDetail:
      'Cadence Woodside resales in 2024 achieved 99.2% of list price with a median 19 days on market.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 31,
    category: 'education',
    question: 'How does Dr. Jan compare Woodside to other builders objectively?',
    answer:
      'She grades structural flexibility, energy specs, incentives, warranty response, and HOA obligations across Woodside, Lennar, Pulte, Tri Pointe, and Toll Brothers. Those matrices draw from inspection reports, homeowner interviews, and warranty data—not marketing. Buyers see objective scoring that drives confident decisions.',
    researchDetail:
      'Woodside’s first-year warranty claim rate averaged 0.7 per home, compared with Lennar’s 1.1 in similar price bands.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 32,
    category: 'education',
    question: 'What questions should buyers bring to a Woodside sales appointment?',
    answer:
      'Ask about structural deadlines, included features, HOA and SID fees, lot premiums, inspection access, incentive requirements, and design studio scheduling. Dr. Jan’s 23-point checklist ensures nothing gets missed. The costliest surprises come from unasked questions during the first visit.',
    researchDetail:
      'Always confirm whether landscaping, appliances, window coverings, and soft water loops are included—policies differ by community.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 33,
    category: 'education',
    question: 'How do elevations affect home performance as well as curb appeal?',
    answer:
      'Elevations adjust rooflines, overhangs, masonry, and window placement, influencing solar exposure, natural light, and cooling efficiency. Dr. Jan reviews HOA-approved palettes and elevation premiums to ensure you balance style with climate demands. South-facing lots often warrant deeper overhang elevations.',
    researchDetail:
      'Dr. Jan uses sun-path modeling to recommend elevations that reduce summer heat gain and protect interior finishes.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 34,
    category: 'education',
    question: 'What should first-time buyers plan for beyond the purchase price?',
    answer:
      'Budget for window coverings, backyard completion, ceiling fans, and appliances if not included. Dr. Jan’s post-close checklist forecasts these costs so first-timers avoid surprise spending. She also mentors buyers through financing, design selections, and inspections to keep stress down. Preparation translates into smoother move-ins.',
    researchDetail:
      'Recent Sunstone buyers spent roughly $18K–$25K post-close on landscaping, window treatments, and fans.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 35,
    category: 'education',
    question: 'How should buyers prioritize upgrade budgets?',
    answer:
      'Separate structural must-haves from design finishes, then invest in high-impact categories like flooring, cabinetry, lighting, and electrical. Dr. Jan’s appraisal-based ROI models keep upgrades within future resale limits. Focus on enhancements that elevate daily living and still earn appraiser credit.',
    researchDetail:
      'Appraisers typically credit $0.50–$0.70 per dollar on premium kitchen and bath upgrades in appraisal comps.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 36,
    category: 'market',
    question: 'What maintenance advantages make new Woodside homes attractive?',
    answer:
      'Warranty-backed mechanicals, energy-efficient systems, and modern construction reduce surprise repairs and monthly utilities for the first decade. Dr. Jan compares maintenance projections to older resales so buyers quantify savings. Those savings can accelerate principal reduction or fund future improvements.',
    researchDetail:
      'Dr. Jan advises reserving 1% of purchase price annually for maintenance on new builds versus 2–3% on 20-year-old homes.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 37,
    category: 'education',
    question: 'How does Dr. Jan act as a buyer’s advocate—not a builder rep?',
    answer:
      'She’s closed 500+ new construction deals totaling $127M+ without any builder affiliation, delivering independent research on specs, incentives, and warranties. Dr. Jan attends inspections, negotiates upgrades, and leverages superintendent relationships to keep builds on track. Buyers get a data-driven partner focused solely on their interests.',
    researchDetail:
      'Her private database tracks superintendent contacts, inspection findings, and warranty response times for every Woodside community.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 38,
    category: 'process',
    question: 'How does staying informed during construction reduce stress?',
    answer:
      'Woodside provides weekly portal updates, but Dr. Jan supplements with site visits, drone photos, 3D scans, and milestone checklists. She arranges superintendent meetings whenever issues arise so solutions stay proactive. Transparent communication keeps your build on schedule and your stress low.',
    researchDetail:
      'Matterport scans at framing document wiring, plumbing, and blocking for future renovation or warranty needs.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 3,
    order: 39,
    category: 'market',
    question: 'How does inventory data influence negotiations?',
    answer:
      'Dr. Jan tracks quick move-ins, canceled contracts, and upcoming releases weekly, revealing when the builder is motivated. She uses that data to request add-ons like appliances or extra closing credits. Negotiating with current inventory info beats reacting to generic sales pitches.',
    researchDetail:
      'March 2025 Sunstone inventory showed eight available quick move-ins, enabling Dr. Jan to secure stacked credits for buyers.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 3,
    order: 40,
    category: 'market',
    question: 'How should buyers prepare for the long-term value conversation?',
    answer:
      'Pair incentives, energy savings, HOA strength, and community growth plans to forecast a five-year equity outlook. Dr. Jan models appreciation scenarios using absorption rates and amenity completion timelines. Understanding the numbers counteracts emotion so you make confident investment decisions.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024, beating the Clark County single-family average of about 5%.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 1,
    category: 'company',
    question: 'How much of Clark County’s new-home activity does Woodside represent in 2025?',
    answer:
      'Year-to-date Woodside accounts for about 6.8% of Clark County single-family permits, trailing only Lennar and Pulte. Activity clusters around Sunstone, Cadence, and Vireo in Summerlin West. Dr. Jan Duffy monitors permit logs weekly so clients can anticipate releases and lot premiums. Pair permits with absorption rates to time your purchase.',
    researchDetail:
      'Clark County Planning Commission issued 148 Woodside permits between Jan–Apr 2025 versus 162 in the same 2024 window, suggesting incentive sweeteners may surface.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 2,
    category: 'company',
    question: 'How does Woodside’s corporate ownership translate into Las Vegas build quality?',
    answer:
      'Sekisui House’s 75-year sustainability program governs Las Vegas specs—think SHAWOOD-inspired insulation targets, waste recycling goals, and third-party energy audits. Dr. Jan compares corporate QA manuals across builders to reveal where Woodside outperforms regional competitors. Deep institutional backing also keeps construction crews stable, even when labor markets tighten.',
    researchDetail:
      'Sekisui mandates quarterly sustainability audits; Sunstone crews recycled 72% of construction waste in 2024 according to reports Dr. Jan reviews.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 3,
    category: 'company',
    question: 'How does Life-Inspired Design outperform Lennar’s Next Gen layouts?',
    answer:
      'Life-Inspired plans emphasize sight lines, storage, and indoor-outdoor flow, while Lennar’s Next Gen suites often sacrifice pantry space and loft functionality. Dr. Jan overlays plan schematics to show Woodside kitchens averaging 18% more counter frontage and smoother circulation. Touring with her annotated floor plans helps you visualize real-life routines.',
    researchDetail:
      'Aries’ pantry offers 54 cubic feet of storage versus Lennar’s comparable 41 cubic feet—measurements taken during Dr. Jan’s walkthroughs.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 4,
    category: 'specs',
    question: 'How do Woodside HERS scores impact actual NV Energy bills?',
    answer:
      'A Sunstone Lyra testing at HERS 52 typically lands near $160/month during peak summer, while a HERS 75 resale can exceed $250. Dr. Jan builds energy models using NV Energy tier rates so buyers can budget accurately. Lower loads cushion against future rate hikes and boost resale marketing.',
    researchDetail:
      'NV Energy’s 2025 Tier 2 rate is 13.4¢/kWh; Dr. Jan’s spreadsheet shows Lyra owners using 1,200 kWh/month stay within Tier 2 thanks to efficient shells.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 5,
    category: 'specs',
    question: 'Does Woodside offer solar-ready infrastructure?',
    answer:
      'Sunstone and Cadence communities pre-install rooftop conduit, 200A panels, and structural bracing for 3.0 psf solar arrays. Lennar often includes full solar, while Toll Brothers leaves it entirely post-close. Dr. Jan tracks NV Energy interconnection steps and incentives so you can plan financing. Solar readiness trims install costs when you decide to add panels.',
    researchDetail:
      'Electrical diagrams show solar conduit from attic to panel with dedicated disconnects—details Dr. Jan reviews during plan check.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 6,
    category: 'specs',
    question: 'What HVAC specs differentiate Woodside from Pulte in the desert?',
    answer:
      'Woodside installs 16-SEER two-stage condensers with ECM motors, programmable thermostats, and MERV-11 filtration as standard, while Pulte often starts at 14-SEER single-stage unless upgraded. Dr. Jan’s HVAC comparison grid details equipment brands, warranties, and zoned-thermostat options. Superior HVAC lowers bills and enhances indoor-air quality.',
    researchDetail:
      'Sunstone systems use Lennox ML17XC1 condensers with 5-year parts warranties extendable to 10 years—documents Dr. Jan secures for buyers.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 7,
    category: 'specs',
    question: 'What structural engineering resists extreme temperature swings?',
    answer:
      'Plans call for 2x6 exterior walls in select models, R-19 batts, R-38 attic insulation, and TechShield radiant barriers to reduce heat gain by up to 30°F. Dr. Jan cross-checks structural load calculations and insulation schedules to confirm compliance. These envelopes outperform many Shea or Tri Pointe builds in the same price tier.',
    researchDetail:
      'Filing documents show R-19 batt insulation in 2x6 walls plus R-38 blown insulation meeting 2021 IECC standards—validated through Dr. Jan’s pre-drywall inspections.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 8,
    category: 'specs',
    question: 'How robust is Woodside’s low-voltage prewire package?',
    answer:
      'Cat6 runs to bedrooms, offices, and media walls plus RG6 coax and security rough-ins come standard, with optional conduit for future AV. Toll Brothers charges extra for similar infrastructure. Dr. Jan inventories low-voltage drops during pre-drywall so buyers know exactly what’s installed. Wiring early avoids expensive retrofits.',
    researchDetail:
      'Prewire diagrams allocate 1.25-inch conduit from media wall to attic for AV cabling—Dr. Jan photographs placements for client records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 9,
    category: 'specs',
    question: 'How do Woodside kitchens compare to Tri Pointe’s designer offerings?',
    answer:
      'Woodside includes 42-inch uppers, soft-close hinges, and six pendant-ready circuits standard, while Tri Pointe often reserves those for upgrades. Butcher-block extensions, waterfall counters, and dual ovens price competitively in Woodside’s studio. Dr. Jan tracks SKU-level costs to help buyers allocate upgrade funds wisely.',
    researchDetail:
      'Virgo’s waterfall island edge costs around $3,200—roughly 15% less than Tri Pointe’s comparable upgrade list.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 10,
    category: 'specs',
    question: 'How expansive are Woodside’s covered patios in current releases?',
    answer:
      'Standard loggias span roughly 12x10 feet with options to extend another 4–8 feet depending on lot depth. Structural tie-ins support sliders, privacy screens, and outdoor kitchens. Dr. Jan models sun angles so buyers know midday conditions before pouring decks. Compare patio footage when evaluating builder options.',
    researchDetail:
      'Capella patio extensions add 120 square feet (12x10 to 12x20) for about $7,800—priced via builder structural sheets.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 11,
    category: 'floorplans',
    question: 'How does Woodside’s multi-gen design compare to Lennar’s Next Gen?',
    answer:
      'Woodside gen suites integrate with main HVAC zones, include optional kitchenettes, and maintain contiguous living spaces; Lennar’s suites can feel isolated or share HVAC without zoning. Dr. Jan evaluates acoustic insulation, egress, and rough-in letters from county permits to gauge livability. Tour with her to test privacy and comfort firsthand.',
    researchDetail:
      'Gen suites include sound attenuation batts between shared walls—a detail Dr. Jan verifies during framing inspections.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 12,
    category: 'floorplans',
    question: 'When do structural upgrade decisions lock in?',
    answer:
      'Structural selections (gen suites, sliders, patio extensions, garage conversions) must lock within 21 days of contract; after that only design finishes can change. Dr. Jan’s structural checklist ensures buyers prioritize items with framing impact before the cutoff. Missing the window means expensive change orders or post-close remodels.',
    researchDetail:
      'Woodside’s structural change policy increases costs 20% after day 21—spelled out in purchase agreement addenda Dr. Jan walks through.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 13,
    category: 'pricing',
    question: 'How do price-per-square-foot figures compare by community right now?',
    answer:
      'As of May 2025 Sunstone averages ~$258/ft², Cadence ~$244/ft², and Summerlin Vireo ~$282/ft² for Woodside resales. Lennar and Pulte hover within ±$10/ft² but typically offer fewer structural options. Dr. Jan’s dashboards update weekly so buyers negotiate with current data. Evaluate cost per foot alongside build quality.',
    researchDetail:
      'GLVAR closed sales Jan–Apr 2025 confirm Sunstone Woodside resales averaging $258/ft²—data stored in Dr. Jan’s market notebooks.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 14,
    category: 'pricing',
    question: 'How aggressive are current buy-down programs compared to late 2024?',
    answer:
      'Q2 2025 incentives still yield 2–3 point buy-downs but require quick move-in closings or tight loan timelines; late 2024 offered more relaxed locks. Dr. Jan negotiates stacked credits—combining buydowns with appliance or landscaping packages—when inventory rises. Always review the latest incentive matrix before signing.',
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
      'Sunstone’s effective tax rate is about 0.72% of assessed value with no SIDs, Cadence is near 0.79% plus low SIDs, and Summerlin enclaves hover around 0.74% with village fees. Dr. Jan calculates monthly escrows so buyers understand total housing cost. SIDs/LIDs must be factored into affordability projections.',
    researchDetail:
      'Cadence SID statements show ~$45/month remaining on 20-year amortizations—data pulled from the Clark County Treasurer portal.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 16,
    category: 'pricing',
    question: 'How do extended rate locks work with Woodside’s preferred lenders?',
    answer:
      'Extended locks up to 360 days typically require a 1% lock fee credited at closing if you proceed, with float-down options in the final 60 days. Non-preferred lenders may lack construction-length locks, exposing you to rate volatility. Dr. Jan models the cost of locking early versus shorter locks to hedge your exposure.',
    researchDetail:
      'Woodside Mortgage’s 360-day lock charges 1% upfront, refundable if the builder delays beyond 30 days past the lock—terms documented in lender summaries Dr. Jan reviews.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 17,
    category: 'pricing',
    question: 'Can VA buyers stack Woodside incentives effectively?',
    answer:
      'Yes—preferred lenders pair VA loans with buy-downs and closing credits while respecting VA funding rules. Dr. Jan cross-checks appraisals to guard against value gaps created by large incentives. Planning rate locks and appraisals in sync keeps VA deals smooth.',
    researchDetail:
      'In 2024 Dr. Jan closed four Cadence VA purchases combining 2-point buy-downs with $7K in builder-paid closing costs—documented in lender worksheets.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 18,
    category: 'market',
    question: 'How does Woodside appreciate versus Shea or Toll Brothers over five years?',
    answer:
      'Sunstone Woodside resales gained 31% since 2020, Shea’s Spur Cross 28%, and Toll Brothers’ Mira Villa around 24%, all beating the Clark County average of 22%. Energy efficiency and HOA quality sustain buyer demand even when rates rise. Dr. Jan stress-tests appreciation scenarios using GLVAR comps and employment forecasts.',
    researchDetail:
      'GLVAR data confirms average $102K equity gains on $520K Sunstone purchases between 2020 and 2024—numbers Dr. Jan plugs into her projection models.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 19,
    category: 'communities',
    question: 'Which upcoming amenities should influence a Woodside purchase?',
    answer:
      'Sunstone’s amenity center with pool, fitness, and co-working opens mid-2025; Cadence is expanding its event pavilion; Summerlin Vireo ties into new trail systems. Pending amenities often signal HOA fee adjustments but also boost resale demand. Dr. Jan attends HOA meetings and reviews reserve studies to confirm timelines.',
    researchDetail:
      'Sunstone’s 2025 HOA budget earmarks $420K for amenity staffing—budget sheets archived in Dr. Jan’s research files.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 20,
    category: 'communities',
    question: 'Which Woodside communities offer the strongest rental demand if plans change?',
    answer:
      'Cadence near Central Park attracts corporate transferees, while Sunstone’s proximity to the VA Medical Center draws travel nurses and military renters. Dr. Jan analyzes LVRMLS rental comps and HOA leasing policies before buyers commit. Verify leasing limits—some HOAs cap rentals at 25%.',
    researchDetail:
      'Early 2025 Cadence rentals averaged $2.00–$2.15 per sq ft with 98% occupancy, according to LVRMLS data analyzed by Dr. Jan.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 21,
    category: 'communities',
    question: 'How healthy are Sunstone and Cadence HOA reserves right now?',
    answer:
      'Sunstone’s HOA is 92% funded, exceeding the 70% benchmark; Cadence sits near 85%. Strong reserves reduce special assessment risk and support resale confidence. Dr. Jan combs through reserve studies and balance sheets during due diligence. Ask for the most recent reserve update before closing.',
    researchDetail:
      'Sunstone’s 2024 reserve study projects full funding by 2027 at current dues—report obtained and archived by Dr. Jan.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 22,
    category: 'communities',
    question: 'How will NDOT projects change commute times for Woodside owners?',
    answer:
      'NDOT’s 215 Beltway expansion in the northwest trims 5–7 minutes off peak commutes by late 2025, benefiting Sunstone residents. Cadence drivers to the Strip should expect 20–25 minutes with occasional Boulder Highway delays. Dr. Jan drives these routes during client-specific hours to gather live data.',
    researchDetail:
      'NDOT project 3690 widens 215 westbound with completion slated for Q4 2025; Dr. Jan monitors updates through weekly NDOT bulletins.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 23,
    category: 'communities',
    question: 'Which new schools will impact Woodside neighborhoods?',
    answer:
      'A K-8 charter inside Sunstone opens in 2026, and Cadence has a CCSD elementary scheduled for 2027. New schools often uplift resale demand and reduce commute stress. Dr. Jan cross-checks CCSD capital plans and charter funding approvals to confirm timelines.',
    researchDetail:
      'Sunstone’s charter secured $18M in state bond approvals in 2024—minutes captured in Dr. Jan’s reference binders.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 24,
    category: 'process',
    question: 'How should buyers stage deposit releases to preserve cash?',
    answer:
      'Woodside typically collects deposits in phases—contract, structural lock, and design studio—totaling $10K–$20K. Staggering deposits keeps liquidity available for appraisal gaps or rate-lock fees. Dr. Jan’s payment calendar outlines every draw before buyers sign.',
    researchDetail:
      'Average Sunstone deposits total around $15K; schedules are detailed in purchase agreements Dr. Jan reviews line by line.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 25,
    category: 'process',
    question: 'What pre-approval documents should buyers prepare at lot reservation?',
    answer:
      'Bring a DU/LP approval, last two paystubs, two months of bank statements, and documentation for contingent sales. Preferred lenders convert pre-quals to full approvals once documents are ready. Dr. Jan audits paperwork before tours to ensure buyers can reserve lots instantly.',
    researchDetail:
      'Preferred lender checklists highlight missing bank statements as the top reason lot reservations get delayed—insight from Dr. Jan’s lender partners.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 26,
    category: 'process',
    question: 'How do design studio upgrade costs compare to post-close renovations?',
    answer:
      'Structural electrical, plumbing, and cabinetry upgrades cost 30–40% less during construction than post-close retrofits. Decorative lighting or hardware can wait until after closing. Dr. Jan’s ROI planner ranks upgrades by appraisal impact so you deploy funds strategically.',
    researchDetail:
      'Structured wiring additions price at $250 per drop during framing versus $450+ for post-close retrofits—figures tracked by Dr. Jan.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 27,
    category: 'process',
    question: 'What inspection rights should buyers insist on when signing?',
    answer:
      'Ensure the contract explicitly permits third-party inspections at pre-drywall, mechanical completion, and final walk; some builders limit access to a single visit. Dr. Jan negotiates inspection clauses before deposits go hard to protect transparency. Keep documentation of every clause in writing.',
    researchDetail:
      'Woodside contracts reference inspection rights in Section 12—Dr. Jan reviews and initials each clause with clients.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 28,
    category: 'process',
    question: 'How frequently should buyers expect construction updates beyond the portal?',
    answer:
      'Woodside posts weekly portal updates, but Dr. Jan schedules biweekly site visits, drone footage, and milestone checklists for accuracy. She also sets standing calls with superintendents to resolve issues proactively. Consistent updates prevent surprises at closing.',
    researchDetail:
      'Dr. Jan’s update template pairs portal notes with date-stamped photos, verifying progress and creating permanent records.',
    cta: `Let me pull the latest specs and availability – ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 29,
    category: 'market',
    question: 'How do quick move-in marketing blasts differ from Dr. Jan’s inventory sheets?',
    answer:
      'Builder blasts highlight publicly available specs, often after insiders claim top lots; Dr. Jan’s sheets list every under-construction home, canceled contracts, and future releases. Her data reveals inventory before general marketing, giving clients first-mover advantage. Early access can secure view lots or premium elevations.',
    researchDetail:
      'In March 2025 Dr. Jan reported two Sunstone quick move-ins 48 hours before Woodside’s marketing email—both reserved by her clients immediately.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 30,
    category: 'market',
    question: 'What appraisal buffer should buyers maintain when adding upgrades?',
    answer:
      'Maintain at least a 5% buffer between contract price and appraisal to accommodate heavy upgrades without risking value gaps. Dr. Jan pre-reviews pending comps and upgrade allowances before clients finalize design studio choices. Avoid over-customizing beyond your neighborhood’s resale ceiling.',
    researchDetail:
      'Recent appraisals credited roughly 60 cents per dollar on kitchen/bath upgrades; Dr. Jan retains anonymized appraisal packets to guide decisions.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 31,
    category: 'market',
    question: 'How do maintenance reserves for new builds compare to 15-year-old resales?',
    answer:
      'New Woodside homes typically require 1% of value annually for maintenance reserves; 15-year-old resales demand closer to 2.5% due to HVAC, roof, and appliance replacement cycles. Dr. Jan’s 10-year maintenance models quantify the difference so budgets stay realistic. Lower reserves free cash for savings or upgrades.',
    researchDetail:
      'Dr. Jan’s maintenance spreadsheets show new Woodside owners averaging $5,800 annually on $580K homes versus $14,000 for similar resales.',
    cta: `Need current inventory and timeline details? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 32,
    category: 'education',
    question: 'How does Dr. Jan’s comparison matrix keep builder evaluations objective?',
    answer:
      'Her matrix scores Woodside, Lennar, Pulte, Tri Pointe, Toll Brothers, and Shea across energy specs, structural flexibility, incentives, warranty response, and HOA health. Scores draw from inspection reports, homeowner interviews, and service logs—not marketing. Clients customize the matrix to their priorities so decisions stay research-driven.',
    researchDetail:
      'Latest matrix ranks Woodside 4.5/5 for energy efficiency while Lennar scores 3.8/5—data Dr. Jan updates quarterly.',
    cta: `Let’s compare all your options – call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 33,
    category: 'education',
    question: 'Which questions uncover hidden costs in builder fine print?',
    answer:
      'Ask how long incentives last, whether lot premiums adjust with views, what’s included in landscaping, which appliances are standard, and how HOAs treat rentals. Dr. Jan’s 23-point checklist flushes out fees and restrictions that sales reps often gloss over. Armed with answers, you negotiate from strength.',
    researchDetail:
      'In 2024 Dr. Jan saved a client $4,200 by catching a duplicated landscape fee hidden in the options list—thanks to the checklist.',
    cta: `Have questions about the actual build process? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 34,
    category: 'education',
    question: 'How do elevation choices influence heat gain and energy bills?',
    answer:
      'Elevations with deeper overhangs, recessed windows, and contrasting stucco reduce solar gain on south/west exposures. Dr. Jan runs sun-path simulations to recommend elevations that minimize cooling loads. Form and function go hand-in-hand—choose aesthetics that help your energy budget.',
    researchDetail:
      'Simulations show Aries Elevation C cuts solar heat gain by 12% versus Elevation A on south-facing lots—Dr. Jan’s modeling data.',
    cta: `Ready to analyze the long-term value? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 35,
    category: 'education',
    question: 'How should first-time buyers budget for post-close essentials?',
    answer:
      'Set aside $20K–$25K for backyard landscaping, window coverings, appliances (if excluded), and ceiling fans. Dr. Jan obtains vendor bids before closing so new owners have accurate figures. Planning ahead prevents credit-card splurges after move-in.',
    researchDetail:
      'Average 2024 Sunstone buyers spent $22,700 on post-close essentials—based on invoices tracked in Dr. Jan’s files.',
    cta: `Want to tour and see the quality standards? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 36,
    category: 'education',
    question: 'Which upgrades deliver the strongest appraisal impact?',
    answer:
      'Continuous flooring, quartz counters, upgraded cabinetry, and primary bath finishes typically earn the highest appraisal credit. Decorative lighting or hardware swaps can wait. Dr. Jan’s ROI tool prioritizes upgrades so you don’t overinvest in low-return items.',
    researchDetail:
      'Appraisers credited about $0.65 per dollar on quartz counter upgrades in 2024 Sunstone resales—figures kept in Dr. Jan’s appraisal library.',
    cta: `Ready to research your best Woodside option? Call/text ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 37,
    category: 'education',
    question: 'How does Dr. Jan leverage superintendent relationships to benefit buyers?',
    answer:
      'She maintains direct contacts with every superintendent, attends pre-construction meetings, and logs punch-list deadlines in shared trackers. Escalations happen fast without waiting for portal queues. That insider access keeps builds on schedule and issues resolved quickly.',
    researchDetail:
      'Dr. Jan resolved a framing oversight within 48 hours by contacting the Sunstone superintendent she’d worked with on prior builds—documented in her project journal.',
    cta: `Questions about current pricing and incentives? ${PHONE}.`,
  },
  {
    iteration: 4,
    order: 38,
    category: 'process',
    question: 'How do you ensure builder update portals match job-site reality?',
    answer:
      'Dr. Jan cross-checks portal notes with on-site photos, drone footage, and third-party inspection reports. Any discrepancies trigger superintendent follow-ups with written corrective action. Keeping builders accountable reduces closing-day surprises.',
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
      'Dr. Jan updates spreadsheets every Friday with spec homes, cancellations, and future releases so she knows when the builder needs movement. Armed with data, she secures extras like appliance packages or landscaping credits. Negotiating with facts beats reacting to sales rhetoric.',
    researchDetail:
      'March 2025 data showing eight Sunstone quick move-ins led directly to stacked incentives for Dr. Jan’s buyers—tracked in her inventory notes.',
    cta: `Want to dig deeper into this? Call/text ${PHONE} for current research.`,
  },
  {
    iteration: 4,
    order: 40,
    category: 'market',
    question: 'How can buyers model long-term value using real numbers, not hype?',
    answer:
      'Combine appreciation trends, HOA strength, energy savings, and incentive value to forecast five-year equity. Dr. Jan’s spreadsheets stress-test scenarios using GLVAR comps, utility data, and amortization schedules. Quantitative projections replace guesswork so decisions stay grounded.',
    researchDetail:
      'Sunstone appreciated 6–9% annually from 2020–2024 with average $102K resale gains—data Dr. Jan builds into her equity models.',
    cta: `Ready to review detailed specs and options? ${PHONE}.`,
  },
]

export function getFaqsByCategory(
  categories: FaqCategory[],
  iterations?: number[],
): FaqEntry[] {
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

