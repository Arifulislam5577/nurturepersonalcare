import type { Metadata } from 'next'

import { notFound } from '@/lib/content/not-found'

import { NotFoundHelp } from '@/components/not-found/not-found-help'
import { NotFoundHero } from '@/components/not-found/not-found-hero'

export const metadata: Metadata = {
  title: notFound.meta.title,
  description: notFound.meta.description,
  robots: { index: false, follow: true },
}

export default function NotFoundPage() {
  return (
    <>
      <NotFoundHero />
      <NotFoundHelp />
    </>
  )
}
