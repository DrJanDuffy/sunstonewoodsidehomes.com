import Link from 'next/link'

import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
  SERVICE_AREAS,
} from '@/lib/site'

const footerNav = [
  { href: '/models', label: 'Home Plans' },
  { href: '/buyers-guide', label: 'Buyer Journey' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/communities', label: 'Communities' },
  { href: '/financing', label: 'Financing' },
  { href: '/contact', label: 'Contact' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background/95 py-10 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">
            Dr. Janet Duffy Realty
          </p>
          <p className="text-sm text-muted-foreground">
            Dedicated to guiding homebuyers through Sunstone, Summerlin, and the
            Greater Las Vegas Valley with data-driven strategy and concierge
            service.
          </p>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Contact</p>
          <div className="space-y-1 text-sm text-muted-foreground">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="block font-semibold text-primary transition hover:text-primary/80"
            >
              {CONTACT_EMAIL}
            </a>
            <Link
              href={CONTACT_PHONE_LINK}
              className="block font-semibold text-foreground transition hover:text-primary"
            >
              {CONTACT_PHONE}
            </Link>
            <p>{CONTACT_ADDRESS}</p>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Buyer Tools</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-semibold text-foreground">Service Areas</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SERVICE_AREAS.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl flex-wrap justify-between gap-3 px-4 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Dr. Janet Duffy. All rights reserved.</p>
        <p>Equal Housing Opportunity • License #S.0199999</p>
      </div>
    </footer>
  )
}

