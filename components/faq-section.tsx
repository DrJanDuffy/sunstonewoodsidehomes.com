import { cn } from '@/lib/utils'
import type { FaqEntry } from '@/lib/faqs'

type FaqSectionProps = {
  id?: string
  title: string
  faqs: FaqEntry[]
  className?: string
  limit?: number
  showMoreHref?: string
}

export function FaqSection({ id, title, faqs, className, limit, showMoreHref }: FaqSectionProps) {
  const items = limit && limit > 0 ? faqs.slice(0, limit) : faqs

  if (!items.length) {
    return null
  }

  return (
    <section
      id={id}
      className={cn('space-y-6 rounded-3xl border border-border bg-card/70 p-8 shadow-sm', className)}
    >
      <div className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Faq Library</p>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">
          Every answer is rooted in field research Dr. Duffy conducts for Las Vegas Woodside buyers. Use these insights to
          benchmark specifications, incentives, and timelines before you tour.
        </p>
      </div>
      <div className="space-y-6">
        {items.map((faq) => (
          <article
            key={`${faq.iteration}-${faq.order}`}
            className="rounded-2xl border border-border/70 bg-background/80 p-6 shadow-sm"
          >
            <header className="space-y-1">
              <h3 className="text-lg font-semibold text-foreground">Q: {faq.question}</h3>
            </header>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">A: {faq.answer}</p>
            <p className="mt-3 text-sm font-semibold text-foreground">
              Research Detail:{' '}
              <span className="font-normal text-muted-foreground">{faq.researchDetail}</span>
            </p>
            <p className="mt-2 text-sm font-semibold text-primary">
              For More Info:{' '}
              <span className="font-normal text-foreground hover:text-primary/80 transition">{faq.cta}</span>
            </p>
          </article>
        ))}
      </div>
      {showMoreHref ? (
        <div>
          <a
            href={showMoreHref}
            className="inline-flex items-center justify-center rounded-full border border-input px-5 py-2 text-sm font-semibold text-foreground transition hover:bg-muted"
          >
            View all FAQs
          </a>
        </div>
      ) : null}
    </section>
  )
}

