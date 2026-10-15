import { story } from '@/lib/content/story'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Story() {
  return (
    <section
      id="story"
      aria-labelledby="story-title"
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container">
        <p className="flex items-center gap-3 eyebrow text-slate">
          <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
          {story.eyebrow}
        </p>
        <LinesReveal id="story-title" className="mt-5 max-w-5xl text-display font-semibold">
          {story.title}
        </LinesReveal>
        <Reveal delay={0.1}>
          <p className="mt-10 max-w-3xl font-serif text-title text-lagoon italic">{story.lead}</p>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-ink/10 pt-12 lg:grid-cols-12">
          <h3 className="text-2xl font-semibold tracking-tight lg:col-span-4">{story.subtitle}</h3>
          <Reveal
            isStaggered
            className="space-y-6 text-lead text-slate lg:col-span-7 lg:col-start-6"
          >
            {story.paragraphs.map((paragraph) => (
              <p key={paragraph.id}>{paragraph.text}</p>
            ))}
          </Reveal>
        </div>

        <Reveal as="ul" isStaggered className="mt-20 grid gap-3 md:grid-cols-2">
          {story.statements.map((statement) => (
            <li key={statement.id} className="rounded-card bg-ink p-8 text-paper md:p-12">
              <h3 className="eyebrow text-mist">{statement.title}</h3>
              <p className="mt-6 text-2xl leading-snug font-medium tracking-tight">
                {statement.description}
              </p>
            </li>
          ))}
        </Reveal>

        <div className="mt-20">
          <h3 className="eyebrow text-slate">{story.valuesTitle}</h3>
          <Reveal as="ul" isStaggered distance={20} className="mt-6 flex flex-wrap gap-3">
            {story.values.map((value) => (
              <li
                key={value}
                className="rounded-full border border-ink/15 px-6 py-3 text-xl font-medium tracking-tight transition-colors hover:border-leaf hover:bg-leaf"
              >
                {value}
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
