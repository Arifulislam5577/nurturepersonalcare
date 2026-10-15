import Link from 'next/link'

import { notFound } from '@/lib/content/not-found'

import { Reveal } from '@/components/motion/reveal'

export function NotFoundHero() {
  return (
    <section
      id="top"
      aria-labelledby="not-found-title"
      className="frame mt-frame bg-forest pt-36 pb-16 text-center text-cream md:pt-44 md:pb-24 xl:pt-48 xl:pb-32"
    >
      <div className="main-container flex flex-col items-center gap-6 md:gap-8">
        <Reveal delay={0.1} distance={20}>
          <p className="tag-pill bg-cream text-bark">{notFound.eyebrow}</p>
        </Reveal>

        <Reveal delay={0.2} distance={80}>
          <p
            className="bg-linear-to-b from-cream to-cream/0 bg-clip-text t-code text-transparent select-none"
            aria-hidden="true"
          >
            {notFound.code}
          </p>
        </Reveal>

        <div className="flex flex-col items-center gap-3">
          <Reveal delay={0.4} distance={60}>
            <h1 id="not-found-title" className="max-w-3xl t-h2">
              {notFound.title}
            </h1>
          </Reveal>
          <Reveal delay={0.5} distance={60}>
            <p className="max-w-xl t-body-l text-cream/70">{notFound.description}</p>
          </Reveal>
        </div>

        <Reveal
          delay={0.6}
          distance={40}
          className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href={notFound.homeAction.href}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-cream px-5 t-button text-bark transition-colors duration-500 hover:bg-cream/85 sm:w-auto"
          >
            {notFound.homeAction.label}
          </Link>
          <Link
            href={notFound.shopAction.href}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-full px-5 t-button text-cream ring-1 ring-cream transition-[background-color,scale] duration-300 ring-inset hover:scale-105 hover:bg-cream/8 sm:w-auto"
          >
            {notFound.shopAction.label}
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
