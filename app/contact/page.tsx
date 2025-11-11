import type { Metadata } from 'next'
import Link from 'next/link'

import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SALES_HOURS,
} from '@/lib/site'

const reasons = [
  'Schedule a private tour of Capella model homes.',
  'Request move-in ready inventory updates.',
  'Review incentive stacking and design studio budgets.',
  'Coordinate relocation services and utility setup.',
]

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Sunstone Woodside Home Concierge',
  description:
    'Call or message Dr. Jan Duffy to book Sunstone tours, preview move-in ready homes, and plan your Las Vegas relocation support.',
}

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-16 px-4 py-16">
      <header className="space-y-4 text-center sm:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Contact
        </p>
        <h1 className="text-balance text-4xl font-bold text-foreground sm:text-5xl">
          Let’s plan your next move together
        </h1>
        <p className="text-lg text-muted-foreground">
          Reach out by phone, email, or complete the concierge form below to begin your
          personalized Capella at Sunstone experience.
        </p>
      </header>

      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6 rounded-3xl border border-border bg-card/70 p-8 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Concierge request form</h2>
          <p className="text-sm text-muted-foreground">
            Tell us who will be joining the journey, your target move-in date, and any must-haves.
            Dr. Duffy’s team will respond within one business day.
          </p>
          <form
            action={`mailto:${CONTACT_EMAIL}`}
            method="post"
            className="grid gap-4 text-sm text-foreground"
          >
            <label className="flex flex-col gap-2">
              <span>Full name</span>
              <input
                name="name"
                type="text"
                placeholder="Alex Martinez"
                className="rounded-lg border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Email</span>
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                className="rounded-lg border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                placeholder="(555) 123-4567"
                className="rounded-lg border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span>Preferred move-in timeframe</span>
              <select
                name="timeline"
                className="rounded-lg border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="next-60-days">Next 60 days</option>
                <option value="3-6-months">3–6 months</option>
                <option value="6-12-months">6–12 months</option>
                <option value="research-phase">Just starting research</option>
              </select>
            </label>
            <label className="flex flex-col gap-2">
              <span>How can we help?</span>
              <textarea
                name="message"
                rows={4}
                placeholder="Tell us about the homes, floor plans, or financing guidance you need."
                className="rounded-lg border border-border bg-background px-3 py-2 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
            >
              Send concierge request
            </button>
          </form>
        </div>
        <aside className="space-y-6 rounded-3xl border border-dashed border-border/70 bg-background/60 p-6 text-sm text-muted-foreground">
          <h2 className="text-base font-semibold text-foreground">Visit the sales center</h2>
          <p>{CONTACT_ADDRESS}</p>
          <p>Hours: {SALES_HOURS}</p>
          <Link
            href={CONTACT_PHONE_LINK}
            className="inline-flex items-center font-semibold text-primary transition hover:text-primary/80"
          >
            Call {CONTACT_PHONE}
          </Link>
          <p>
            Email:{' '}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-foreground transition hover:text-primary"
            >
              {CONTACT_EMAIL}
            </a>
          </p>
          <div className="border-t border-border/60 pt-4">
            <h3 className="text-xs uppercase tracking-[0.25em] text-primary">Top requests</h3>
            <ul className="mt-2 space-y-2">
              {reasons.map((reason) => (
                <li key={reason}>• {reason}</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  )
}

