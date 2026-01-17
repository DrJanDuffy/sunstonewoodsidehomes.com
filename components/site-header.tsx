import Link from 'next/link'

import { CONTACT_PHONE, CONTACT_PHONE_LINK } from '@/lib/site'

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
    <header className="glass-effect sticky top-0 z-50 border-b border-accent/20 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-4 px-4 py-5 sm:flex-nowrap sm:gap-6">
        <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:gap-6">
          <Link
            href={CONTACT_PHONE_LINK}
            className="text-lg font-semibold tracking-tight text-foreground luxury-hover transition-colors hover:text-accent"
          >
            {CONTACT_PHONE}
          </Link>
        </div>
        <nav className="order-2 flex w-full flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground sm:order-none sm:w-auto sm:flex-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="luxury-hover transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 justify-end">
          <Link
            href={CONTACT_PHONE_LINK}
            className="text-sm font-semibold text-foreground luxury-hover transition-colors hover:text-accent sm:text-base"
          >
            {CONTACT_PHONE}
          </Link>
        </div>
      </div>
    </header>
  )
}

