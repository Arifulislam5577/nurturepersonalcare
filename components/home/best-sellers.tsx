import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { bestSellers } from '@/lib/content/best-sellers'
import { formatPrice } from '@/lib/format-price'

import { SectionIntro } from '@/components/home/section-intro'
import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function BestSellers() {
  return (
    <section
      id="best-sellers"
      aria-labelledby="best-sellers-title"
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            id="best-sellers-title"
            eyebrow={bestSellers.eyebrow}
            title={bestSellers.title}
            description={bestSellers.description}
          />
          <Reveal className="shrink-0">
            <MagneticLink href={bestSellers.action.href} label={bestSellers.action.label} />
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-10 md:mt-20 md:grid-cols-3 md:gap-6">
          {bestSellers.items.map((product, index) => (
            <li key={product.id}>
              <article className="group relative">
                <ImageReveal className="relative aspect-4/5 overflow-hidden rounded-card bg-paper">
                  <Image
                    src={product.image.src}
                    alt={product.image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 eyebrow text-ink backdrop-blur">
                    No. {String(index + 1).padStart(2, '0')}
                  </span>
                </ImageReveal>
                <Reveal distance={24}>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-tight">{product.name}</h3>
                    <p className="font-mono text-sm font-medium whitespace-nowrap text-lagoon">
                      {formatPrice(product.priceCents)}
                    </p>
                  </div>
                  <p className="mt-3 text-slate">{product.description}</p>
                  <Link
                    href={product.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold underline decoration-leaf decoration-2 underline-offset-8 after:absolute after:inset-0"
                  >
                    View product
                    <ArrowUpRight
                      className="size-4 transition-transform group-hover:rotate-45"
                      aria-hidden="true"
                    />
                  </Link>
                </Reveal>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
