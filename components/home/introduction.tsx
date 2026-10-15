import Image from 'next/image'

import { introduction } from '@/lib/content/introduction'

import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'
import { ScrubText } from '@/components/motion/scrub-text'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Introduction() {
  return (
    <section
      id="about"
      aria-labelledby="introduction-title"
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container grid gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <h2 id="introduction-title" className="flex items-center gap-3 eyebrow text-slate">
            <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
            {introduction.eyebrow}
          </h2>
          <ScrubText
            text={introduction.statement}
            className="mt-8 text-title font-medium md:text-headline md:font-semibold"
          />
        </div>

        <div className="flex flex-col gap-8 lg:col-span-4 lg:col-start-9 lg:pt-16">
          <ImageReveal className="relative aspect-4/5 overflow-hidden rounded-card bg-mist/30">
            <Image
              src={introduction.image.src}
              alt={introduction.image.alt}
              fill
              placeholder="blur"
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover"
            />
          </ImageReveal>
          <Reveal className="flex flex-col items-start gap-6">
            <p className="text-lead text-slate">{introduction.body}</p>
            <MagneticLink href={introduction.action.href} label={introduction.action.label} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
