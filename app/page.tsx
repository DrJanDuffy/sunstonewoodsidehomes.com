import Link from 'next/link'

import { models } from '@/lib/models'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_HOURS,
} from '@/lib/site'

const highlightStats = [
  { value: '$42K+', label: 'Average buyer incentives negotiated in 2024' },
  { value: '37', label: 'Private model tours hosted this year' },
  { value: '14', label: 'Days saved versus market-average closings' },
  { value: '100%', label: 'Five-star reviews from Sunstone homeowners' },
]

const buyerSteps = [
  {
    title: '1. Strategy Consultation',
    body: 'Outline timelines, financing goals, and wish-list priorities with Dr. Duffy’s market intel.',
    cta: {
      href: `mailto:${CONTACT_EMAIL}?subject=Buyer%20Consultation%20Request`,
      label: 'Schedule consultation',
    },
  },
  {
    title: '2. Community + Plan Match',
    body: 'Tour Capella and nearby communities with curated sheets that align plans, pricing, and incentives.',
    cta: { href: '/communities', label: 'Preview communities' },
  },
  {
    title: '3. Offer to Closing',
    body: 'Tap into verified lenders, detailed cost breakdowns, and closing checklists to keep the process seamless.',
    cta: { href: '/financing', label: 'View financing guide' },
  },
]

const communityAdvantages = [
  'Single-story living near Mt. Charleston and Lee Canyon.',
  'Energy-efficient features engineered for the Las Vegas climate.',
  'Covered patios, flex rooms, and designer-curated finish packages.',
  'Connected master-plan lifestyle with mountain-view backdrops.',
]

const lifestyleHighlights = [
  {
    title: 'Trail Network',
    description:
      'Immediate access to Sunstone’s hiking and biking paths for dawn-to-dusk adventures.',
  },
  {
    title: 'Local Parks',
    description:
      'Gather at nearby community parks with shaded play areas and dog-friendly lawns.',
  },
  {
    title: 'Shopping & Dining',
    description: 'Minutes to Smith’s Marketplace, everyday conveniences, and local eateries.',
  },
]

const testimonials = [
  {
    quote:
      'Dr. Duffy negotiated design credits we didn’t even know existed and had us under contract in under a week.',
    name: 'Kara & Devin M.',
    detail: 'Relocated from Southern California',
  },
  {
    quote:
      'Her weekly construction updates with photos kept us calm. Closing was the smoothest we’ve ever experienced.',
    name: 'Michelle R.',
    detail: 'Second-home buyer, Capella Aries Plan',
  },
  {
    quote:
      'We toured Sunstone, Summerlin, and Skye Canyon. Janet’s insights made the decision obvious and confident.',
    name: 'Marcus & Lena T.',
    detail: 'First-time buyers',
  },
]

const conciergeServices = [
  {
    title: 'Design studio playbooks',
    description:
      'Plan selections before your appointment with curated palettes, budget guidance, and upgrade ROI tips.',
  },
  {
    title: 'Weekly construction check-ins',
    description:
      'Receive photo updates, milestone reminders, and punch-list prep so you never miss a walkthrough detail.',
  },
  {
    title: 'Relocation logistics',
    description:
      'Coordinate movers, utilities, school registration, and HOA introductions through our concierge roster.',
  },
  {
    title: 'Post-close care',
    description:
      'Stay connected with warranty reminders, landscape partners, and quarterly valuation snapshots.',
  },
]

const buildTimeline = [
  { label: 'Week 1–2', detail: 'Secure homesite, finalize structural options, and order appraisal.' },
  { label: 'Week 3–6', detail: 'Design studio selections, lender lock strategy, and permitting.' },
  { label: 'Month 2–5', detail: 'Framing to drywall walkthroughs with proactive punch-list reviews.' },
  { label: 'Month 6', detail: 'Orientation, blue-tape inspection, and closing-day concierge support.' },
]

const resourceHighlights = [
  {
    title: 'Buyer Journey Roadmap',
    description: 'Step-by-step milestones, checklists, and curated partner intros.',
    href: '/buyers-guide',
  },
  {
    title: 'Financing Playbook',
    description: 'Compare loan structures, rate-lock strategies, and incentive stacking tips.',
    href: '/financing',
  },
  {
    title: 'Community Preview',
    description: 'Discover lifestyle perks, trail maps, and nearby amenities for Sunstone living.',
    href: '/communities',
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#d9e3df] via-background to-[#f4efe4] pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(15,76,92,0.18),_rgba(8,19,26,0))]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Limited Time $20K Savings
            </span>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Capella at Sunstone — single-story luxury in Northwest Las Vegas
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Explore Woodside Homes’ newest collection of one-level residences with premium finishes,
              energy efficiency, and sweeping mountain views. Book a private tour to experience
              move-in ready homes and designer model plans today.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-start">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Capella%20at%20Sunstone%20Tour%20Request`}
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90"
              >
                Book a tour
              </a>
              <a
                href="#models"
                className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
              >
                View home plans
              </a>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-3xl border border-border/70 bg-card/80 p-6 shadow-lg backdrop-blur">
              <h2 className="text-xl font-semibold text-foreground">Sales Center &amp; Contact</h2>
              <p className="mt-2 text-sm text-muted-foreground">{CONTACT_ADDRESS}</p>
              <dl className="mt-6 space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <dt className="text-muted-foreground">Hours</dt>
                  <dd className="font-medium text-foreground">{SALES_HOURS}</dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="text-muted-foreground">Phone</dt>
                  <dd>
                    <Link
                      href={CONTACT_PHONE_LINK}
                      className="font-semibold text-primary transition hover:text-primary/80"
                    >
                      {CONTACT_PHONE}
                    </Link>
                  </dd>
                </div>
                <div className="flex items-start gap-3">
                  <dt className="text-muted-foreground">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-semibold text-primary transition hover:text-primary/80"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
              <p className="mt-4 text-xs uppercase tracking-wide text-muted-foreground">
                Equal Housing Opportunity • Brokered by Sunstone Woodside Homes
              </p>
            </div>
            <div className="hidden rounded-3xl border border-dashed border-border/70 bg-background/70 p-6 text-sm text-muted-foreground shadow-sm lg:block">
              <p className="font-semibold text-foreground">Design gallery coming soon</p>
              <p className="mt-1">
                Reserve your spot to receive professional photography, model walkthrough videos, and
                design studio palettes as soon as they are released.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Capella%20Media%20Preview`}
                className="mt-4 inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
              >
                Join the media list &rsaquo;
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-4 rounded-3xl border border-border/60 bg-card/80 p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {highlightStats.map((stat) => (
            <div key={stat.label} className="space-y-1 rounded-2xl border border-border/50 bg-background/70 p-4">
              <p className="text-2xl font-semibold text-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="models" className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Three designer single-story plans to explore
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Start with the floor plan that fits your lifestyle, then request design packages and
            availability details curated for your move-in timeline.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {models.map((model) => (
            <article
              key={model.slug}
              className="flex h-full flex-col rounded-3xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-sm text-muted-foreground">
                <span>{model.priceFrom}</span>
                <span className="mx-2 text-border">|</span>
                <span>{model.size}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{model.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{model.headline}</p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>{model.beds}</li>
                <li>{model.baths}</li>
                <li>{model.garage}</li>
              </ul>
              <Link
                href={`/models/${model.slug}`}
                className="mt-auto inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
              >
                View plan details &rsaquo;
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/buyers-guide"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            See the buyer journey
          </Link>
          <Link
            href="/communities"
            className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
          >
            Explore Sunstone living
          </Link>
        </div>
      </section>

      <section className="bg-muted/20 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Navigate the homebuyer experience with confidence
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              From discovery sessions to closing day, Dr. Janet Duffy keeps every step transparent,
              organized, and aligned with your goals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {buyerSteps.map((step) => (
              <article
                key={step.title}
                className="flex h-full flex-col rounded-3xl border border-border bg-background/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{step.body}</p>
                <Link
                  href={step.cta.href}
                  className="mt-6 inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
                >
                  {step.cta.label} &rsaquo;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-background/70 p-8 shadow-lg">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Why buyers choose Capella at Sunstone
            </h2>
            <p className="mt-3 text-base text-muted-foreground">
              Live at the intersection of desert tranquility and city convenience with curated finishes crafted by
              Woodside Homes.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {communityAdvantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Capella%20Preview%20Appointment`}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Reserve a preview appointment
            </a>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Lifestyle perks</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Step outside to explore desert trails, neighborhood parks, and local shopping hubs.
              </p>
              <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
                {lifestyleHighlights.map((highlight) => (
                  <li key={highlight.title} className="rounded-2xl border border-border/60 p-4">
                    <h4 className="text-base font-semibold text-foreground">{highlight.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{highlight.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-dashed border-border/70 bg-background/50 p-6 text-sm text-muted-foreground">
              <p>
                Directions: Located within the Sunstone master-plan off the US-95 and Skye Canyon Park Drive, just minutes
                from Mt. Charleston recreation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#0f4c5c] via-[#102c38] to-[#08131a] py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Buyer testimonials
            </p>
            <h2 className="text-3xl font-semibold sm:text-4xl">
              Concierge guidance loved by Las Vegas homeowners
            </h2>
            <p className="text-base text-[#cfe2d9]">
              Hear how Sunstone buyers leveraged Dr. Duffy’s strategy, partner network, and construction monitoring to move
              with total confidence.
            </p>
          </div>
          <div className="flex-1 grid gap-4 sm:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="h-full rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-[#e9f2ee]"
              >
                <p className="italic leading-relaxed">“{testimonial.quote}”</p>
                <footer className="mt-4">
                  <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                  <p className="text-xs text-[#cfe2d9]">{testimonial.detail}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Concierge-level support from first tour to final walkthrough
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Choose the services that match your pace, lifestyle, and preferred level of involvement.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {conciergeServices.map((service) => (
            <article key={service.title} className="rounded-3xl border border-border bg-card/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/10 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
              Construction timeline at a glance
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Understand key milestones so you can plan travel, design studio visits, and financing with ease.
            </p>
          </div>
          <ol className="relative mx-auto mt-10 max-w-3xl space-y-6 border-l border-border/80 pl-6">
            {buildTimeline.map((item) => (
              <li key={item.label} className="space-y-1">
                <span className="absolute -left-[10px] mt-1 inline-flex h-3 w-3 rounded-full border-2 border-primary bg-background" />
                <p className="text-sm font-semibold text-primary">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Essential resources for Sunstone buyers
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Dive deeper into the journey with curated guides covering financing, relocation, and community life.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {resourceHighlights.map((resource) => (
            <article
              key={resource.title}
              className="flex h-full flex-col rounded-3xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-foreground">{resource.title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{resource.description}</p>
              <Link
                href={resource.href}
                className="mt-6 inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
              >
                Explore &rsaquo;
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Imagine life on one level
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Share your preferred move-in timeline and discover incentives tailored to your household.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Capella%20at%20Sunstone%20Consultation`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Email Dr. Duffy
          </a>
          <Link
            href={CONTACT_PHONE_LINK}
            className="inline-flex items-center justify-center rounded-full border border-input px-6 py-3 text-base font-semibold text-foreground transition hover:bg-muted"
          >
            Call {CONTACT_PHONE}
          </Link>
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          Serving Capella at Sunstone, Summerlin, and Greater Las Vegas with integrity and equal housing commitment.
        </p>
      </section>
    </div>
  )
}

