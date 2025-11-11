import Link from 'next/link'

import { CONTACT_PHONE, CONTACT_PHONE_LINK, CONTACT_EMAIL } from '@/lib/site'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/models', label: 'Home Plans' },
  { href: '/move-in-ready', label: 'Move-In Ready' },
  { href: '/buyers-guide', label: 'Buyer Journey' },
  { href: '/communities', label: 'Communities' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/financing', label: 'Financing' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteHeader() {
  return (
    <header className="border-b border-border/60 bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-5 sm:flex-nowrap sm:gap-6">
        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-foreground transition hover:text-primary"
          >
            Sunstone Woodside | Homes by Dr. Jan Duffy
          </Link>
          <p className="text-sm text-muted-foreground">
            Las Vegas new construction concierge service
          </p>
        </div>
        <nav className="order-2 flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground sm:order-none sm:w-auto sm:flex-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 justify-end">
          <div className="flex flex-col text-right text-xs text-muted-foreground sm:text-sm">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-semibold text-primary transition hover:text-primary/80"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href={CONTACT_PHONE_LINK}
              className="font-semibold text-foreground transition hover:text-primary"
            >
              {CONTACT_PHONE}
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

