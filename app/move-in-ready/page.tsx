import type { Metadata } from 'next'

import MoveInReadyBrowser from './_components/move-in-ready-browser'

export const metadata: Metadata = {
  title: 'Move-In Ready Homes | Sunstone Woodside by Dr. Jan Duffy',
  description:
    'Filter designer-curated move-in-ready homes across Cadence, Sunstone, and Summerlin with concierge guidance from Dr. Jan Duffy.',
}

export default function MoveInReadyIndexPage() {
  return <MoveInReadyBrowser />
}
