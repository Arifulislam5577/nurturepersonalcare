import Image from 'next/image'
import Link from 'next/link'

import { collections } from '@/lib/content/collections'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Collections() {
  return (
    <section
      id="collections"
      aria-labelledby="collections-title"
      className="frame mt-frame bg-sand py-16 text-bark md:py-24 lg:py-32"
    >
      <div className="main-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col items-start gap-5 lg:col-span-7">
            <Reveal>
              <p className="tag-pill bg-white">{collections.eyebrow}</p>
            </Reveal>
            <LinesReveal id="collections-title" className="t-h1">
              {collections.title}
            </LinesReveal>
          </div>
          <Reveal className="lg:col-span-4 lg:col-start-9">
            <p className="t-body-l text-bark/70">{collections.body}</p>
          </Reveal>
        </div>

        <Reveal as="ul" isStaggered className="mt-12 grid gap-3 md:mt-20 md:grid-cols-2 md:gap-6">
          {collections.items.map((collection) => (
            <li key={collection.id}>
              <article className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden rounded-card p-6 text-cream md:p-8 lg:aspect-square xl:p-10">
                <Image
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-card group-hover:scale-104"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-bark/85 via-bark/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex flex-col gap-4">
                  <p className="t-label text-cream/70">{collection.eyebrow}</p>
                  <h3 className="t-h3">{collection.title}</h3>
                  <p className="max-w-md t-body text-cream/75">{collection.description}</p>
                  <Link
                    href={collection.action.href}
                    className="mt-2 self-start t-button underline decoration-cream/40 underline-offset-8 transition-colors group-hover:decoration-cream after:absolute after:inset-0"
                  >
                    {collection.action.label}
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
