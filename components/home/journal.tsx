import Image from 'next/image'
import Link from 'next/link'

import { journal } from '@/lib/content/journal'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

const dateFormatter = new Intl.DateTimeFormat('en-ZA', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
})

export function Journal() {
  return (
    <section
      id="journal"
      aria-labelledby="journal-title"
      className="frame mt-frame bg-paper py-16 text-bark md:py-24 lg:py-32"
    >
      <div className="main-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col items-start gap-5">
            <Reveal>
              <p className="tag-pill bg-sand">{journal.eyebrow}</p>
            </Reveal>
            <LinesReveal id="journal-title" className="t-h1">
              {journal.title}
            </LinesReveal>
            <Reveal>
              <p className="t-body-l text-bark/65">{journal.description}</p>
            </Reveal>
          </div>
          <Reveal className="shrink-0">
            <MagneticLink
              href={journal.action.href}
              label={journal.action.label}
              variant="outline"
            />
          </Reveal>
        </div>

        <Reveal as="ul" isStaggered className="mt-12 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6">
          {journal.posts.map((post) => (
            <li key={post.id}>
              <article className="group relative flex flex-col gap-4">
                <div className="relative aspect-4/3 overflow-hidden rounded-card bg-sand">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-card group-hover:scale-104"
                  />
                </div>
                <time dateTime={post.publishedAt} className="mt-2 t-label text-bark/55">
                  {dateFormatter.format(new Date(post.publishedAt))}
                </time>
                <h3 className="t-h5">
                  <Link href={post.href} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <p className="t-body text-bark/65">{post.excerpt}</p>
                <span
                  className="self-start t-button underline decoration-bark/30 underline-offset-8 transition-colors group-hover:decoration-bark"
                  aria-hidden="true"
                >
                  Read more
                </span>
              </article>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
