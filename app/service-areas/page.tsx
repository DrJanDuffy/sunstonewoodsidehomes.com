import Link from 'next/link'

import { serviceAreas } from '@/lib/service-areas'
import { CONTACT_EMAIL } from '@/lib/site'

export default function ServiceAreasIndexPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 py-16">
      <header className="space-y-4 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Service Areas
        </p>
        <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
          Your guide to Northwest Las Vegas living
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore Dr. Janet Duffy’s core markets—Sunstone, Summerlin, Skye Canyon, and
          surrounding Northwest Las Vegas communities. Compare lifestyle, amenities, pricing, and
          buyer insights before you tour.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        {serviceAreas.map((area) => (
          <article
            key={area.slug}
            className="flex h-full flex-col rounded-3xl border border-border bg-card/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold text-foreground">{area.name}</h2>
            <p className="mt-3 text-sm text-muted-foreground">{area.headline}</p>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {area.keyHighlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
            <div className="mt-auto flex flex-col gap-2 pt-6">
              <Link
                href={`/service-areas/${area.slug}`}
                className="inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
              >
                Explore {area.name} &rsaquo;
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(area.tourCta.mailSubject)}`}
                className="inline-flex items-center text-sm font-semibold text-foreground transition hover:text-primary"
              >
                {area.tourCta.label}
              </a>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}

