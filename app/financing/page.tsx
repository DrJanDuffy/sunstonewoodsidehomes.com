import type { Metadata } from 'next'
import Link from 'next/link'
import Script from 'next/script'

import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'New Construction Financing Strategies | Sunstone Woodside',
  description:
    'Compare lender partners, rate lock tactics, and incentive stacking strategies for Capella at Sunstone buyers with Dr. Jan Duffy.',
}

const lenderPartners = [
  {
    name: 'Summit Peak Mortgage',
    focus: 'New construction financing, extended rate locks, builder incentive coordination.',
    contact: `mailto:${CONTACT_EMAIL}?subject=Summit%20Peak%20Mortgage%20Intro`,
  },
  {
    name: 'Desert Equity Lending',
    focus: 'Bridge loans and equity strategies for buyers moving within Las Vegas.',
    contact: `mailto:${CONTACT_EMAIL}?subject=Desert%20Equity%20Lending%20Intro`,
  },
  {
    name: 'Silver State Home Loans',
    focus: 'VA, FHA, and first-time buyer programs with Sunstone familiarity.',
    contact: `mailto:${CONTACT_EMAIL}?subject=Silver%20State%20Home%20Loans%20Intro`,
  },
]

const financingSteps = [
  {
    title: 'Clarify budget & incentives',
    detail:
      'Pair base pricing with premiums, design dollars, and current builder incentives. Dr. Duffy can model “all-in” cost projections for each plan.',
  },
  {
    title: 'Select the right loan product',
    detail:
      'Evaluate conventional, jumbo, VA, or buy-down programs aligned with your timeline and lifestyle plans.',
  },
  {
    title: 'Lock with confidence',
    detail:
      'Coordinate with lenders who offer extended rate locks, float-down options, and construction draw expertise for a stress-free close.',
  },
]

const resources = [
  {
    title: 'Cost worksheet',
    description:
      'Side-by-side comparison of Aries, Taurus, and Virgo plans with structural and design allowances.',
  },
  {
    title: 'Monthly payment planner',
    description:
      'Model payments across rate scenarios, property taxes, HOA, and insurance for a realistic budget.',
  },
  {
    title: 'Closing timeline',
    description:
      'Track deposits, appraisal dates, and final walkthroughs to stay ahead of key milestones.',
  },
]

const conciergeSupport = [
  'Coordinate builder paperwork, option deposits, and closing timelines.',
  'Review incentive updates weekly to secure the best credit mix for your loan.',
  'Align lender deadlines with construction milestones to avoid rush fees.',
]

const faqs = [
  {
    question: 'Which loan products fit Sunstone or Cadence quick move-in homes?',
    answer:
      'Conventional loans with buydowns are most common, but VA and FHA financing remain strong options for Henderson and Northwest Las Vegas buyers. Dr. Duffy pairs you with lenders experienced in extended locks and incentive stacking for Woodside Homes.',
  },
  {
    question: 'When should I lock my interest rate on a new construction home?',
    answer:
      'Lock once structural options are final and the construction timeline is confirmed. For six-month builds, many clients lock 90–120 days out with float-down provisions. Dr. Duffy reviews market updates and coordinates with lender partners so you lock at the optimal time.',
  },
  {
    question: 'Can I use existing equity for the down payment or closing costs?',
    answer:
      'Yes. Bridge loans, HELOCs, or recast programs can free equity from your current home. Dr. Duffy collaborates with lending partners to structure proceeds so you stay competitive without rushing your sale.',
  },
]

export default function FinancingPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
      <header className="space-y-4 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Financing Strategy
        </p>
        <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
          Align your financing with Capella’s build timelines
        </h1>
        <p className="text-lg text-muted-foreground">
          New construction purchases require proactive planning. Dr. Duffy collaborates with
          lender partners who understand builder incentives, construction milestones, and rate
          lock strategies unique to Sunstone.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        {financingSteps.map((step) => (
          <article
            key={step.title}
            className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-foreground">{step.title}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{step.detail}</p>
          </article>
        ))}
      </section>

      <section id="partners" className="rounded-3xl border border-border bg-background/70 p-8 shadow-lg">
        <h2 className="text-2xl font-semibold text-foreground">Preferred lending partners</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          These lenders provide quick-response pre-approvals, community-specific appraisals, and
          transparent rate-lock options. Introductions are coordinated through Dr. Duffy to keep
          communications streamlined.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {lenderPartners.map((partner) => (
            <div key={partner.name} className="rounded-2xl border border-border/60 p-4">
              <h3 className="text-base font-semibold text-foreground">{partner.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{partner.focus}</p>
              <a
                href={partner.contact}
                className="mt-4 inline-flex items-center text-sm font-semibold text-primary transition hover:text-primary/80"
              >
                Request introduction &rsaquo;
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="flex h-full flex-col rounded-3xl border border-dashed border-border/70 bg-background/50 p-6 text-sm text-muted-foreground"
          >
            <h3 className="text-base font-semibold text-foreground">{resource.title}</h3>
            <p className="mt-2 flex-1">{resource.description}</p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(resource.title)}%20Request`}
              className="mt-6 inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
            >
              Email me this &rsaquo;
            </a>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-background p-8 text-center sm:p-12">
        <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
          Need a second opinion on your financing plan?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">
          Dr. Duffy can review lender estimates, compare incentive scenarios, and help you stage a
          win-ready offer that preserves cash flow and negotiation power.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}?subject=Financing%20Strategy%20Session`}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
        >
          Request a financing session
        </a>
      </section>

      <section className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">Concierge support</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Dr. Duffy provides comprehensive support to ensure a smooth financing process.
        </p>
        <ul className="mt-6 space-y-3">
          {conciergeSupport.map((item, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="mr-3 h-5 w-5 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">Financing FAQs</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Answers to financing questions we hear most from Sunstone and Cadence buyers navigating new
          construction timelines.
        </p>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="rounded-2xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground"
            >
              <summary className="cursor-pointer text-base font-semibold text-foreground">
                {faq.question}
              </summary>
              <p className="mt-3 leading-relaxed">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <Script id="schema-financing-faq" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        })}
      </Script>
    </div>
  )
}

