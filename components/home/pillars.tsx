import { HeartHandshake, MapPin, Sprout, type LucideIcon } from 'lucide-react'

import { pillars } from '@/lib/content/pillars'

import { SectionIntro } from '@/components/home/section-intro'
import { Reveal } from '@/components/motion/reveal'

type PillarId = (typeof pillars.items)[number]['id']

const pillarIcons = {
  'south-african': MapPin,
  'plant-powered': Sprout,
  purposeful: HeartHandshake,
} as const satisfies Record<PillarId, LucideIcon>

export function Pillars() {
  return (
    <section
      id="why-nurture"
      aria-labelledby="pillars-title"
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container">
        <SectionIntro
          id="pillars-title"
          eyebrow={pillars.eyebrow}
          title={pillars.title}
          isCentered
        />

        <Reveal as="ul" isStaggered className="mt-14 grid gap-3 md:mt-20 md:grid-cols-3">
          {pillars.items.map((pillar) => {
            const Icon = pillarIcons[pillar.id]
            return (
              <li
                key={pillar.id}
                className="group flex flex-col rounded-card bg-paper p-8 ring-1 ring-ink/5 transition-colors duration-500 hover:bg-ink hover:text-paper md:p-10"
              >
                <span className="grid size-14 place-items-center rounded-full bg-leaf text-ink transition-transform duration-500 ease-out-expo group-hover:-rotate-12">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-16 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-4 text-slate transition-colors duration-500 group-hover:text-paper/75">
                  {pillar.description}
                </p>
              </li>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
