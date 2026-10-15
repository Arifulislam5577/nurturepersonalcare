import Image from 'next/image'
import Link from 'next/link'

import { mission } from '@/lib/content/mission'

import { DrawPath } from '@/components/motion/draw-path'
import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'
import { ScrubText } from '@/components/motion/scrub-text'

export function Mission() {
  const [lead, statement] = mission.statement

  return (
    <section
      id="about"
      aria-labelledby="mission-title"
      className="frame mt-frame bg-bark py-16 text-cream md:py-24 lg:py-32"
    >
      <div className="main-container flex flex-col gap-12 lg:gap-22">
        <ScrubText as="h2" id="mission-title" className="t-h3">
          <span className="block lg:pl-40">{lead}</span>
          <span className="block">{statement}</span>
        </ScrubText>

        <div className="relative flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <Reveal className="lg:w-80">
            <p className="t-body-l">{mission.body}</p>
          </Reveal>

          <DrawPath
            className="pointer-events-none absolute top-24 left-16 hidden h-96 w-150 text-cream/60 lg:block"
            viewBox="0 0 600 380"
            d="M8 6C30 190 120 330 300 360C430 382 540 330 592 250"
          />

          <div className="relative z-10 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-6">
            <ImageReveal className="relative aspect-4/5 w-full overflow-hidden rounded-card bg-sand sm:w-80 lg:w-106">
              <Image
                src={mission.primaryImage.src}
                alt={mission.primaryImage.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 424px, (min-width: 640px) 320px, 100vw"
                className="object-cover"
              />
            </ImageReveal>
            <div className="flex flex-col justify-between gap-8 sm:w-50">
              <ImageReveal className="relative aspect-5/6 w-full overflow-hidden rounded-card bg-sand">
                <Image
                  src={mission.secondaryImage.src}
                  alt={mission.secondaryImage.alt}
                  fill
                  placeholder="blur"
                  sizes="200px"
                  className="object-cover"
                />
              </ImageReveal>
              <Link
                href={mission.action.href}
                scroll={false}
                className="self-start t-button underline decoration-cream/40 underline-offset-8 transition-colors hover:decoration-cream"
              >
                {mission.action.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
