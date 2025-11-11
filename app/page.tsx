import Link from 'next/link'

const CONTACT_EMAIL = 'DrDuffySells@SunstoneWoodsideHomes.com'

const services = [
  {
    title: 'Sell for Maximum Equity',
    description:
      'List with a data-backed pricing strategy, concierge staging, and Sunstone buyer demand insights.',
    cta: 'Request a valuation',
    href: `mailto:${CONTACT_EMAIL}?subject=Sunstone%20Home%20Valuation`,
  },
  {
    title: 'Find Your Next Home',
    description:
      'Unlock private tours, curated new construction options, and neighborhood comparisons across the Las Vegas Valley.',
    cta: 'Start a home search',
    href: `mailto:${CONTACT_EMAIL}?subject=Las%20Vegas%20Home%20Search`,
  },
  {
    title: 'Invest With Confidence',
    description:
      'Evaluate rental income, cash flow, and appreciation potential for Sunstone and Greater Las Vegas properties.',
    cta: 'Schedule an investment review',
    href: `mailto:${CONTACT_EMAIL}?subject=Las%20Vegas%20Investment%20Consultation`,
  },
]

const neighborhoodHighlights = [
  {
    name: 'Sunstone by Woodside Homes',
    detail:
      'Smart-home ready floor plans, energy efficiency, and master-planned amenities minutes from Red Rock Canyon.',
  },
  {
    name: 'Summerlin',
    detail:
      'Top-ranked schools, village parks, and luxury retail at Downtown Summerlin with quick Strip access.',
  },
  {
    name: 'Northwest Las Vegas',
    detail:
      'Gated communities, larger lot sizes, and convenient proximity to the 215 Beltway for daily commutes.',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/10 via-background to-background pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.2),_rgba(15,23,42,0))]" />
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 text-center lg:flex-row lg:items-start lg:text-left">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
              Las Vegas Real Estate Expertise
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Move with confidence alongside Dr. Janet Duffy
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Personalized strategies for Sunstone, Summerlin, and the entire
              Las Vegas Valley. From unlocking equity to securing high-performing
              investments, Dr. Duffy brings doctoral-level research and local
              market savvy to every transaction.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Private%20Consultation%20Request`}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Book a consultation
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
              >
                Explore services
              </a>
            </div>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-3">
              <span>Brokered by Sunstone Woodside Homes</span>
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground sm:inline-block" />
              <span>Fair Housing Compliant • License #S.0199999</span>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-border bg-background/60 p-6 backdrop-blur lg:max-w-sm">
            <h2 className="text-xl font-semibold text-foreground">
              Ready when you are
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your goals and ideal move timeline. Dr. Duffy will call within one
              business day with next steps tailored to your needs.
            </p>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <dt className="font-semibold text-foreground">Consultations</dt>
                <dd className="text-muted-foreground">Virtual or in-home, 7 days a week</dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="font-semibold text-foreground">Buyer Services</dt>
                <dd className="text-muted-foreground">
                  Private tours, lender introductions, relocation playbooks
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="font-semibold text-foreground">Seller Services</dt>
                <dd className="text-muted-foreground">
                  Pricing analytics, staging concierge, national exposure
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="font-semibold text-foreground">Investors</dt>
                <dd className="text-muted-foreground">
                  Rental comps, ROI projections, property management referrals
                </dd>
              </div>
            </dl>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Las%20Vegas%20Real%20Estate%20Inquiry`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-primary bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20"
            >
              Email Dr. Duffy &rsaquo;
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Guidance for every stage of ownership
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tailored plans for sellers, buyers, and investors across the Las Vegas
            Valley with a laser focus on your desired outcome.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">
                {service.description}
              </p>
              <a
                href={service.href}
                className="mt-6 inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
              >
                {service.cta} &rsaquo;
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
                Data-driven decisions backed by local insight
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Dr. Duffy blends academic research with hands-on market expertise to
                clarify comps, navigate contingencies, and protect your timeline. Expect
                weekly status updates, proactive negotiation strategies, and transparent
                communication from list to close.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Seller net sheets and buyer cost analyses tailored to your financing
                  plan.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Preferred network of inspectors, stagers, lenders, and contractors.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Secure digital document signing with milestone alerts and reminders.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-background p-8 shadow-lg">
              <h3 className="text-xl font-semibold text-foreground">
                Neighborhood spotlights
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Explore lifestyle, amenities, and projected appreciation across the most
                desirable Northwest Las Vegas communities.
              </p>
              <ul className="mt-6 space-y-5">
                {neighborhoodHighlights.map((item) => (
                  <li key={item.name} className="rounded-2xl border border-border/60 p-4">
                    <h4 className="text-base font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Neighborhood%20Discovery%20Session`}
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Plan a neighborhood tour
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Let&apos;s tailor your next move
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Share your goals—relocation, upsizing, downsizing, or building a portfolio—and
          receive a custom roadmap curated for the Las Vegas market.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Meet%20Dr.%20Duffy`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Email Dr. Duffy
          </a>
          <Link
            href="tel:+17025551234"
            className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
          >
            Call (702) 555-1234
          </Link>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Serving Sunstone Woodside Homes, Summerlin, and Greater Las Vegas with integrity
          and equal housing commitment.
        </p>
      </section>
    </div>
  )
}
