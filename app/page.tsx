import Link from 'next/link'

import { models } from '@/lib/models'
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_HOURS,
} from '@/lib/site'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 pb-16">
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(29,78,216,0.18),_rgba(15,23,42,0))]" />
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Limited Time $20K Savings
            </span>
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Capella at Sunstone — single-story luxury in Northwest Las Vegas
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl">
              Explore Woodside Homes’ newest collection of one-level residences with
              premium finishes, energy efficiency, and sweeping mountain views. Book a
              private tour to experience move-in ready homes and designer model plans today.
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
          <div className="flex-1 rounded-3xl border border-border bg-background/70 p-6 backdrop-blur">
            <h2 className="text-xl font-semibold text-foreground">
              Sales Center &amp; Contact
            </h2>
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
        </div>
      </section>

      <section id="models" className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Three designer single-story plans to explore
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Start with the floor plan that fits your lifestyle, then request design packages
            and availability details curated for your move-in timeline.
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
              From discovery sessions to closing day, Dr. Janet Duffy keeps every step
              transparent, organized, and aligned with your goals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
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
                body: 'Tour Capella and surrounding communities with curated sheets that align plans, pricing, and incentives.',
                cta: { href: '/communities', label: 'Preview communities' },
              },
              {
                title: '3. Offer to Closing',
                body: 'Tap into verified lender partners, detailed cost breakdowns, and closing checklists to keep the process seamless.',
                cta: { href: '/financing', label: 'View financing guide' },
              },
            ].map((step) => (
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
              Live at the intersection of desert tranquility and city convenience with curated finishes
              crafted by Woodside Homes.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
              {[
                'Single-story living near Mt. Charleston and Lee Canyon.',
                'Energy-efficient features engineered for the Las Vegas climate.',
                'Covered patios, flex rooms, and designer-curated finish packages.',
                'Connected master-plan lifestyle with mountain-view backdrops.',
              ].map((item) => (
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
                  {[
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
                      description:
                        'Minutes to Smith’s Marketplace, everyday conveniences, and local eateries.',
                    },
                  ].map((highlight) => (
                  <li key={highlight.title} className="rounded-2xl border border-border/60 p-4">
                    <h4 className="text-base font-semibold text-foreground">{highlight.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{highlight.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-dashed border-border/70 bg-background/50 p-6 text-sm text-muted-foreground">
              <p>
                Directions: Located within the Sunstone master-plan off the US-95 and Skye Canyon Park Drive,
                just minutes from Mt. Charleston recreation.
              </p>
            </div>
          </div>
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

