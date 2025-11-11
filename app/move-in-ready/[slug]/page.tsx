import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Script from 'next/script'

import {
  getMoveInReadyHomeBySlug,
  moveInReadyHomes,
} from '@/lib/move-in-ready'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'

const baseUrl = 'https://www.sunstonewoodsidehomes.com'

const specs = (home: (typeof moveInReadyHomes)[number]) => [
  { label: 'Bedrooms', value: home.beds },
  { label: 'Bathrooms', value: home.baths },
  { label: 'Garage', value: home.garage },
  { label: 'Square Feet', value: home.squareFeet },
]

const parsePrice = (price: string) => Number(price.replace(/[^0-9]/g, ''))

export async function generateStaticParams() {
  return moveInReadyHomes.map((home) => ({ slug: home.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const home = getMoveInReadyHomeBySlug(slug)

  if (!home) {
    return {
      title: 'Move-in ready home not found',
      description: 'This move-in ready residence could not be located.',
    }
  }

  return {
    title: `${home.planName} ${home.lot} | ${home.community}`,
    description: `${home.planName} ${home.lot} in ${home.community} is ready for move-in at ${home.price} with ${home.beds}, ${home.baths}, and ${home.squareFeet}.`,
  }
}

export default async function MoveInReadyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const home = getMoveInReadyHomeBySlug(slug)

  if (!home) {
    notFound()
  }

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12 px-4 py-16">
      <Script
        id={`schema-move-in-ready-${home.slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: `${home.planName} ${home.lot}`,
          description: home.description,
          sku: home.slug,
          brand: {
            '@type': 'Brand',
            name: 'Sunstone Woodside | Homes by Dr. Jan Duffy',
          },
          offers: {
            '@type': 'Offer',
            price: parsePrice(home.price),
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: `${baseUrl}/move-in-ready/${home.slug}`,
          },
        })}
      </Script>
      <nav className="text-sm text-muted-foreground">
        <Link href="/move-in-ready" className="hover:text-primary">
          Move-In Ready
        </Link>{' '}
        / <span className="text-foreground">{home.planName}</span>
      </nav>

      <header className="space-y-6 rounded-3xl border border-border/70 bg-card/70 p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {home.status}
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-foreground sm:text-5xl">
              {home.planName} <span className="text-lg text-muted-foreground">{home.lot}</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              {home.city} | {home.community}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
              Starting at
            </p>
            <p className="text-3xl font-semibold text-primary">{home.price}</p>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {specs(home).map((item) => (
            <li key={item.label} className="rounded-2xl border border-border/70 bg-background/70 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">{item.value}</p>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(home.mailSubject)}`}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Ask about this home
          </a>
          <Link
            href={CONTACT_PHONE_LINK}
            className="inline-flex items-center justify-center rounded-full border border-input px-5 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            Call {CONTACT_PHONE}
          </Link>
        </div>
      </header>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Why you will love it</h2>
          <p className="mt-3 text-sm text-muted-foreground">{home.description}</p>
          <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
            {home.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-primary" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </article>
        <aside className="space-y-4 rounded-3xl border border-dashed border-border/70 bg-background/70 p-6 text-sm text-muted-foreground">
          <h3 className="text-base font-semibold text-foreground">Neighborhood snapshot</h3>
          <p>
            Minutes from Cadence Central Park amenities, top-rated charter schools, and freeway
            access—or explore Sunstone trails if you are touring the Northwest valley listings.
          </p>
          <div className="rounded-2xl border border-border/70 bg-card/70 p-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Imaging your furniture? Ask Dr. Duffy for the full design studio spec sheet and floor plan PDFs.
          </div>
        </aside>
      </section>

      <section className="rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-foreground">Concierge notes</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Dr. Duffy guides your contract, design review, and closing with a proven checklist.
        </p>
        <ul className="mt-6 grid gap-4 text-sm text-muted-foreground md:grid-cols-2">
          {home.conciergeNotes.map((note) => (
            <li key={note} className="rounded-2xl border border-border/70 bg-background/70 p-4">
              {note}
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-dashed border-border/70 bg-background/70 p-6 text-sm text-muted-foreground">
        <h3 className="text-base font-semibold text-foreground">Ready to reserve {home.planName}?</h3>
        <p className="mt-2">
          Email{' '}
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(home.mailSubject)}`}
            className="font-semibold text-primary transition hover:text-primary/80"
          >
            {CONTACT_EMAIL}
          </a>{' '}
          to secure a private tour window or request a same-day video walk-through.
        </p>
      </section>
    </div>
  )
}
