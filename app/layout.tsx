
import type { Metadata } from 'next'
import { Montserrat, Source_Sans_3 } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import './globals.css'

const headingFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  weight: ['400', '500', '600', '700'],
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://sunstonewoodsidehomes.com'),
  title: {
    default: 'Dr. Janet Duffy | Las Vegas Real Estate Advisor',
    template: '%s | Dr. Janet Duffy Realty',
  },
  description:
    'Work with Dr. Janet Duffy for tailored Las Vegas real estate guidance. Unlock equity insights, discover show-ready listings, and secure high-performing investments.',
  keywords: [
    'Dr. Janet Duffy',
    'Las Vegas real estate',
    'Sunstone Woodside Homes',
    'buy home Las Vegas',
    'sell home Las Vegas',
    'Las Vegas investment property',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Dr. Janet Duffy | Las Vegas Real Estate Advisor',
    description:
      'Strategic buying, selling, and investment guidance for Sunstone, Summerlin, and the Las Vegas Valley.',
    url: 'https://sunstonewoodsidehomes.com',
    siteName: 'Dr. Janet Duffy Real Estate',
    locale: 'en_US',
    type: 'website',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Janet Duffy | Las Vegas Real Estate Advisor',
    description:
      'Personalized Las Vegas real estate strategies for buyers, sellers, and investors.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1HCM0VVVP8"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1HCM0VVVP8');
          `}
        </Script>
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}