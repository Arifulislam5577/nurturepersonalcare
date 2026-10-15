import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Manrope } from 'next/font/google'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { site } from '@/lib/content/site'
import { MOTION_READY_CLASS } from '@/lib/is-motion-allowed'

import { SiteFooter } from '@/components/layout/site-footer'
import { SiteHeader } from '@/components/layout/site-header'
import { SmoothScroll } from '@/components/motion/smooth-scroll'

import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

const motionScript = `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('${MOTION_READY_CLASS}')`

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    siteName: site.name,
    locale: 'en_ZA',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#26362a',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en-ZA"
      className={`${manrope.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <Link
          href="#main"
          scroll={false}
          className="fixed top-3 left-3 z-60 -translate-y-24 rounded-full bg-bark px-5 py-3 t-button text-cream transition-transform focus-visible:translate-y-0"
        >
          Skip to content
        </Link>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <SmoothScroll />
      </body>
    </html>
  )
}
