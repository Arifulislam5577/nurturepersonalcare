import { Check } from 'lucide-react'
import Image from 'next/image'

import { hero } from '@/lib/content/hero'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Parallax } from '@/components/motion/parallax'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="frame mt-frame min-h-svh bg-ink text-white"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Parallax className="absolute inset-0 scale-115">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="animate-hero-zoom object-cover"
          />
        </Parallax>
      </div>
      <div
        className="absolute inset-0 bg-linear-to-t from-ink via-ink/45 to-ink/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-ink/85 via-ink/50 to-transparent lg:w-3/4"
        aria-hidden="true"
      />

      <div className="relative main-container flex min-h-svh flex-col justify-end pt-40 pb-8">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 eyebrow text-mist backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-leaf" aria-hidden="true" />
            {hero.eyebrow}
          </p>
        </Reveal>

        <LinesReveal
          as="h1"
          id="hero-title"
          trigger="load"
          delay={0.2}
          className="mt-6 max-w-5xl text-display font-semibold"
        >
          {hero.title.lead}{' '}
          <span className="font-serif font-normal text-mist italic">{hero.title.accent}</span>
        </LinesReveal>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal delay={0.5} className="max-w-xl">
            <p className="text-lead text-white/85">{hero.description}</p>
          </Reveal>
          <Reveal delay={0.65} className="flex flex-wrap gap-3">
            <MagneticLink
              href={hero.primaryAction.href}
              label={hero.primaryAction.label}
              variant="leaf"
            />
            <MagneticLink
              href={hero.secondaryAction.href}
              label={hero.secondaryAction.label}
              variant="glass"
            />
          </Reveal>
        </div>

        <Reveal
          as="ul"
          isStaggered
          delay={0.8}
          distance={16}
          className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/80"
        >
          {hero.promises.map((promise) => (
            <li key={promise} className="flex items-center gap-2">
              <Check className="size-4 text-leaf" aria-hidden="true" />
              {promise}
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
