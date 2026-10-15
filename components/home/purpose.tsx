import { MapPin } from 'lucide-react'
import Image from 'next/image'

import { purpose } from '@/lib/content/purpose'

import { SectionIntro } from '@/components/home/section-intro'
import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Purpose() {
  return (
    <section
      aria-labelledby="purpose-title"
      className="frame mt-frame bg-ink py-24 text-paper md:py-36"
    >
      <div className="main-container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <ImageReveal className="relative aspect-square overflow-hidden rounded-card bg-slate">
          <Image
            src={purpose.image.src}
            alt={purpose.image.alt}
            fill
            placeholder="blur"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </ImageReveal>

        <div>
          <SectionIntro
            id="purpose-title"
            eyebrow={purpose.eyebrow}
            title={purpose.title}
            tone="dark"
          />
          <Reveal>
            <p className="mt-8 text-lead text-paper/75">{purpose.body}</p>
          </Reveal>
          <Reveal as="ul" isStaggered distance={16} className="mt-10 flex flex-wrap gap-3">
            {purpose.places.map((place) => (
              <li
                key={place}
                className="flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm"
              >
                <MapPin className="size-4 text-leaf" aria-hidden="true" />
                {place}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
