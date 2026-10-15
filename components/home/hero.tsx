import Image from 'next/image'

import { hero } from '@/lib/content/hero'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="frame mt-frame bg-bark text-cream"
      data-hero-frame=""
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-bark/30" aria-hidden="true" />
      <div
        className="absolute inset-y-0 left-1/2 w-86 -translate-x-1/2 border-x border-cream/15 bg-black/10 backdrop-blur-glass md:w-140 xl:w-172"
        aria-hidden="true"
      />

      <div className="relative main-container flex min-h-svh flex-col items-center justify-center gap-12 pt-32 pb-16 text-center md:gap-16">
        <div className="flex flex-col items-center gap-6">
          <Reveal delay={0.3}>
            <p className="tag-pill bg-cream/15 text-cream backdrop-blur-glass">{hero.eyebrow}</p>
          </Reveal>
          <LinesReveal as="h1" id="hero-title" trigger="load" delay={0.5} className="t-display">
            {hero.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </LinesReveal>
          <Reveal delay={0.8} distance={40}>
            <p className="max-w-xl t-body-l text-cream/85">{hero.description}</p>
          </Reveal>
        </div>
        <Reveal delay={1} distance={30}>
          <MagneticLink href={hero.action.href} label={hero.action.label} />
        </Reveal>
      </div>
    </section>
  )
}
