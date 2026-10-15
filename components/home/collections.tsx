import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { collections } from '@/lib/content/collections'

import { SectionIntro } from '@/components/home/section-intro'
import { Reveal } from '@/components/motion/reveal'

export function Collections() {
  return (
    <section
      id="collections"
      aria-labelledby="collections-title"
      className="frame mt-frame bg-ink py-24 text-paper md:py-36"
    >
      <div className="main-container">
        <SectionIntro
          id="collections-title"
          eyebrow={collections.eyebrow}
          title={collections.title}
          tone="dark"
        />

        <Reveal as="ul" isStaggered className="mt-14 grid gap-3 md:mt-20 md:grid-cols-2">
          {collections.items.map((collection) => (
            <li key={collection.id}>
              <article className="group relative flex aspect-4/5 flex-col justify-end overflow-hidden rounded-card p-6 md:p-10 lg:aspect-square">
                <Image
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-ink via-ink/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative">
                  <h3 className="text-title font-semibold">{collection.title}</h3>
                  <p className="mt-4 max-w-md text-paper/80">{collection.description}</p>
                  <Link
                    href={collection.action.href}
                    className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-paper py-2 pr-2 pl-6 text-sm font-semibold text-ink after:absolute after:inset-0"
                  >
                    {collection.action.label}
                    <span className="grid size-9 place-items-center rounded-full bg-leaf transition-transform duration-500 ease-out-expo group-hover:rotate-45">
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </span>
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
