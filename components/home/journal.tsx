import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { journal } from '@/lib/content/journal'

import { SectionIntro } from '@/components/home/section-intro'
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
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            id="journal-title"
            eyebrow={journal.eyebrow}
            title={journal.title}
            description={journal.description}
          />
          <Reveal className="shrink-0">
            <MagneticLink href={journal.action.href} label={journal.action.label} />
          </Reveal>
        </div>

        <Reveal as="ul" isStaggered className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6">
          {journal.posts.map((post) => (
            <li key={post.id}>
              <article className="group relative">
                <div className="relative aspect-16/10 overflow-hidden rounded-card bg-paper">
                  <Image
                    src={post.image.src}
                    alt={post.image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                  />
                </div>
                <time dateTime={post.publishedAt} className="mt-6 block eyebrow text-slate">
                  {dateFormatter.format(new Date(post.publishedAt))}
                </time>
                <h3 className="mt-3 text-xl leading-snug font-semibold tracking-tight">
                  <Link
                    href={post.href}
                    className="decoration-leaf decoration-2 underline-offset-4 group-hover:underline after:absolute after:inset-0"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 text-slate">{post.excerpt}</p>
                <span
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                  aria-hidden="true"
                >
                  Read more
                  <ArrowUpRight className="size-4 transition-transform group-hover:rotate-45" />
                </span>
              </article>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
