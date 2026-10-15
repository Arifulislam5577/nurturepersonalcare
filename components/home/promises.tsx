import { Droplets, HeartHandshake, MapPin, Sprout, type LucideIcon } from 'lucide-react'
import Image from 'next/image'

import { cn } from '@/lib/cn'
import { promises } from '@/lib/content/promises'

import { Drift } from '@/components/motion/drift'
import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'
import { ScrubText } from '@/components/motion/scrub-text'
import { MagneticLink } from '@/components/ui/magnetic-link'

type PromiseId = (typeof promises.items)[number]['id']

const promiseIcons = {
  'natural-excellence': Sprout,
  'clean-methods': Droplets,
  'made-local': MapPin,
  purposeful: HeartHandshake,
} as const satisfies Record<PromiseId, LucideIcon>

const promiseLayouts = {
  'natural-excellence': { position: 'lg:top-56 lg:left-0', distance: 60 },
  'clean-methods': { position: 'lg:top-20 lg:left-1/4', distance: 30 },
  'made-local': { position: 'lg:bottom-0 lg:left-1/2', distance: 90 },
  purposeful: { position: 'lg:top-150 lg:right-0', distance: 45 },
} as const satisfies Record<PromiseId, { position: string; distance: number }>

export function Promises() {
  return (
    <section
      id="standard"
      aria-labelledby="promises-title"
      className="frame mt-frame bg-forest py-16 text-cream md:py-24 lg:py-32"
    >
      <div className="main-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-2xl flex-col gap-8">
            <Sprout className="size-11 stroke-1 text-cream" aria-hidden="true" />
            <ScrubText as="h2" id="promises-title" className="t-h3">
              <span className="block">{promises.title}</span>
              <span className="block">{promises.intro}</span>
            </ScrubText>
          </div>
          <Reveal className="shrink-0">
            <MagneticLink href={promises.action.href} label={promises.action.label} />
          </Reveal>
        </div>

        <div className="relative mt-12 grid gap-3 sm:grid-cols-2 md:mt-20 lg:mt-22 lg:block lg:h-260">
          <ImageReveal className="relative aspect-4/5 overflow-hidden rounded-frame bg-sand sm:col-span-2 lg:absolute lg:inset-y-0 lg:left-1/2 lg:aspect-auto lg:w-2/3 lg:-translate-x-1/2">
            <Image
              src={promises.image.src}
              alt={promises.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>

          {promises.items.map((item) => {
            const Icon = promiseIcons[item.id]
            const layout = promiseLayouts[item.id]
            return (
              <Drift
                key={item.id}
                distance={layout.distance}
                className={cn('lg:absolute lg:w-78', layout.position)}
              >
                <article className="flex h-full flex-col items-center gap-10 rounded-card bg-bark/25 px-6 py-8 text-center ring-1 ring-cream/10 backdrop-blur-frost ring-inset lg:gap-14">
                  <span className="grid size-20 place-items-center rounded-full bg-cream/8 lg:size-25">
                    <Icon className="size-9 stroke-1 lg:size-10" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-3">
                    <h3 className="t-h4">
                      {item.title[0]} <br className="hidden lg:block" />
                      {item.title[1]}
                    </h3>
                    <p className="t-body text-cream/68">{item.description}</p>
                  </div>
                </article>
              </Drift>
            )
          })}
        </div>
      </div>
    </section>
  )
}
