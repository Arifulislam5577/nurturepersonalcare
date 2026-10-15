import { ArrowUpRight, BookOpen, Headset, Leaf, Store, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { notFound } from '@/lib/content/not-found'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

type HelpLinkId = (typeof notFound.help.links)[number]['id']

const helpIcons = {
  shop: Store,
  about: BookOpen,
  'science-hub': Leaf,
  contact: Headset,
} as const satisfies Record<HelpLinkId, LucideIcon>

export function NotFoundHelp() {
  return (
    <section aria-labelledby="not-found-help-title" className="mt-frame py-16 text-bark md:py-24">
      <div className="main-container flex flex-col gap-8 md:gap-12">
        <div className="flex flex-col gap-3">
          <LinesReveal id="not-found-help-title" className="t-h3">
            {notFound.help.title}
          </LinesReveal>
          <Reveal>
            <p className="t-body-l text-bark/65">{notFound.help.description}</p>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          isStaggered
          distance={24}
          className="grid gap-3 md:grid-cols-2 xl:grid-cols-4"
        >
          {notFound.help.links.map((link) => {
            const Icon = helpIcons[link.id]
            return (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="flex min-h-15 items-center gap-3 rounded-full px-5 py-3 ring-1 ring-bark/15 transition-[background-color,scale] duration-300 ring-inset hover:scale-103 hover:bg-bark/4"
                >
                  <Icon strokeWidth={1.5} className="size-6 shrink-0" aria-hidden="true" />
                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="t-label text-bark/55">{link.label}</span>
                    <span className="t-body">{link.title}</span>
                  </span>
                  <ArrowUpRight strokeWidth={1.5} className="size-6 shrink-0" aria-hidden="true" />
                </Link>
              </li>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
