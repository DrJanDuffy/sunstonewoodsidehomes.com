import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Script from 'next/script'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="theme"
        >
          <div className="flex min-h-screen flex-col bg-background text-foreground">
            <main className="flex-1">{children}</main>
            <footer className="border-t border-border bg-background/95 py-6 backdrop-blur supports-[backdrop-filter]:bg-background/75">
              <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-4 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-sm text-muted-foreground">
                  Contact Dr. Janet Duffy for Las Vegas real estate guidance.
                </p>
                <a
                  href="mailto:DrDuffySells@SunstoneWoodsideHomes.com"
                  className="text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  DrDuffySells@SunstoneWoodsideHomes.com
                </a>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
