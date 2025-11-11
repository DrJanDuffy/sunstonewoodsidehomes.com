import type { Metadata } from 'next'

import MoveInReadyBrowser from './_components/move-in-ready-browser'
import { FaqSection } from '@/components/faq-section'
import { getFaqsByCategory } from '@/lib/faqs'

export const metadata: Metadata = {
  title: 'Move-In Ready Homes | Sunstone Woodside by Dr. Jan Duffy',
  description:
    'Filter designer-curated move-in-ready homes across Cadence, Sunstone, and Summerlin with concierge guidance from Dr. Jan Duffy.',
}

const moveInReadyFaqs = getFaqsByCategory(['specs'], [1, 2, 3, 4, 5])

export default function MoveInReadyIndexPage() {
  return (
    <>
      <MoveInReadyBrowser />
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <FaqSection
          title="Woodside Specification & Technology FAQs"
          faqs={moveInReadyFaqs}
          className="mt-12"
        />
      </div>
    </>
  )
}
