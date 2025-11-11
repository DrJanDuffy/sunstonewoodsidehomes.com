'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'

import { moveInReadyHomes } from '@/lib/move-in-ready'
import { CONTACT_EMAIL } from '@/lib/site'
import { cn } from '@/lib/utils'

const priceBands = [
  { id: 'all', label: 'All Prices', test: (_price: number) => true },
  { id: 'under-500', label: 'Under $500K', test: (price: number) => price < 500_000 },
  {
    id: '500-600',
    label: '$500K–$600K',
    test: (price: number) => price >= 500_000 && price < 600_000,
  },
  { id: '600-plus', label: '$600K+', test: (price: number) => price >= 600_000 },
]

const bedOptions = [
  { id: 'all', label: 'All Beds', min: 0 },
  { id: '2-plus', label: '2+ Beds', min: 2 },
  { id: '3-plus', label: '3+ Beds', min: 3 },
  { id: '4-plus', label: '4+ Beds', min: 4 },
]

const specs = (home: (typeof moveInReadyHomes)[number]) => [
  home.beds,
  home.baths,
  home.garage,
  home.squareFeet,
]

const parsePrice = (price: string) => Number(price.replace(/[^0-9]/g, ''))
const parseBeds = (beds: string) => parseInt(beds, 10) || 0

export default function MoveInReadyIndexPage() {
  const [selectedCommunity, setSelectedCommunity] = useState<string>('all')
  const [selectedPriceBand, setSelectedPriceBand] = useState<string>('all')
  const [selectedBeds, setSelectedBeds] = useState<string>('all')

  const communities = useMemo(() => {
    const unique = Array.from(new Set(moveInReadyHomes.map((home) => home.community)))
    return ['all', ...unique]
  }, [])

  const filteredHomes = useMemo(() => {
    return moveInReadyHomes.filter((home) => {
      const priceValue = parsePrice(home.price)
      const bedCount = parseBeds(home.beds)
      const priceBand = priceBands.find((band) => band.id === selectedPriceBand) ?? priceBands[0]
      const bedBand = bedOptions.find((option) => option.id === selectedBeds) ?? bedOptions[0]

      const matchesCommunity =
        selectedCommunity === 'all' || home.community === selectedCommunity
      const matchesPrice = priceBand.test(priceValue)
      const matchesBeds = bedCount >= bedBand.min

      return matchesCommunity && matchesPrice && matchesBeds
    })
  }, [selectedBeds, selectedCommunity, selectedPriceBand])

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16">
      <header className="space-y-4 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Move-In Ready Collection
        </p>
        <h1 className="text-balance text-4xl font-semibold text-foreground sm:text-5xl">
          Designer-curated homes ready when you are
        </h1>
        <p className="text-lg text-muted-foreground">
          Explore quick move-in homes across Cadence, Sunstone, and Summerlin. Filter by community,
          price, or bedroom count to find the home that aligns with your timeline.
        </p>
      </header>

      <section className="space-y-6 rounded-3xl border border-border/70 bg-card/70 p-6 shadow-sm">
        <FilterGroup
          label="Community"
          options={communities.map((value) => ({
            id: value,
            label: value === 'all' ? 'All Communities' : value,
          }))}
          value={selectedCommunity}
          onChange={setSelectedCommunity}
        />
        <FilterGroup
          label="Price"
          options={priceBands.map((band) => ({ id: band.id, label: band.label }))}
          value={selectedPriceBand}
          onChange={setSelectedPriceBand}
        />
        <FilterGroup
          label="Bedrooms"
          options={bedOptions.map((option) => ({ id: option.id, label: option.label }))}
          value={selectedBeds}
          onChange={setSelectedBeds}
        />
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-foreground">
            {filteredHomes.length} home{filteredHomes.length === 1 ? '' : 's'} available
          </h2>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Move-In%20Ready%20Collection%20Inquiry`}
            className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            Request personalized list
          </a>
        </div>

        {filteredHomes.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-background/70 p-8 text-sm text-muted-foreground">
            No homes match your filters right now. Try adjusting the filters or email Dr. Duffy for
            upcoming releases.
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredHomes.map((home) => (
              <article
                key={home.slug}
                className="flex h-full flex-col rounded-3xl border border-border bg-card/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  <span>{home.status}</span>
                  <span>{home.collection}</span>
                </div>
                <div className="mt-4 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {home.city} | {home.community}
                  </p>
                  <h3 className="text-2xl font-semibold text-foreground">
                    {home.planName} <span className="text-sm text-muted-foreground">{home.lot}</span>
                  </h3>
                  <p className="text-lg font-semibold text-primary">Starting at {home.price}</p>
                </div>
                <ul className="mt-4 flex flex-wrap gap-3 text-sm text-muted-foreground">
                  {specs(home).map((spec) => (
                    <li
                      key={spec}
                      className="rounded-full border border-border/70 bg-background/70 px-3 py-1"
                    >
                      {spec}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted-foreground">{home.description}</p>
                <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
                  <Link
                    href={`/move-in-ready/${home.slug}`}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 sm:w-auto"
                  >
                    View details
                  </Link>
                  <a
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(home.mailSubject)}`}
                    className="inline-flex w-full items-center justify-center rounded-full border border-input px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted sm:w-auto"
                  >
                    Ask about availability
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

type FilterGroupProps = {
  label: string
  options: { id: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold text-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onChange(option.id)}
            className={cn(
              'rounded-full border px-3 py-1 text-sm font-medium transition',
              value === option.id
                ? 'border-primary bg-primary/10 text-primary'
                : 'border-border/70 bg-background/70 text-muted-foreground hover:border-primary/60 hover:text-foreground',
            )}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  )
}
