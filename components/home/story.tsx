import { Sprout } from 'lucide-react'

import { story } from '@/lib/content/story'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="frame mt-frame bg-paper py-16 text-bark md:py-24 lg:py-32"
    >
      <div className="main-container">
        <div className="flex flex-col items-center gap-6 text-center">
          <Reveal>
            <p className="tag-pill bg-sand">{story.eyebrow}</p>
          </Reveal>
          <LinesReveal id="story-title" className="max-w-4xl t-h1">
            {story.title}
          </LinesReveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl t-body-l text-bark/60">{story.lead}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 border-t border-bark/10 pt-10 md:mt-24 lg:grid-cols-12">
          <h3 className="t-label text-bark/60 lg:col-span-3">{story.subtitle}</h3>
          <Reveal
            isStaggered
            className="space-y-6 t-body-l text-bark/75 lg:col-span-8 lg:col-start-5"
          >
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
          </Reveal>
        </div>

        <Reveal as="ul" isStaggered className="mt-16 grid gap-3 md:mt-24 md:grid-cols-2 md:gap-6">
          {story.statements.map((statement) => (
            <li
              key={statement.id}
              className="flex flex-col gap-10 rounded-card bg-forest p-8 text-cream md:p-10 lg:gap-16"
            >
              <h3 className="t-label text-cream/60">{statement.title}</h3>
              <p className="t-h4">{statement.description}</p>
            </li>
          ))}
        </Reveal>
      </div>

      <div className="mt-16 md:mt-24">
        <h3 className="sr-only">{story.valuesTitle}</h3>
        <div className="main-container">
          <p className="t-label text-bark/60" aria-hidden="true">
            {story.valuesTitle}
          </p>
        </div>
        <div className="mt-6 overflow-hidden mask-x-from-90% mask-x-to-100%">
          <div className="flex w-max animate-ticker">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="flex shrink-0 items-center"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {story.values.map((value) => (
                  <li key={value} className="flex items-center gap-10 pr-10 t-h2 whitespace-nowrap">
                    {value}
                    <Sprout className="size-7 stroke-1 text-leaf" aria-hidden="true" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
