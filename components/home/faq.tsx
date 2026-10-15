import { Plus } from 'lucide-react'

import { faqs } from '@/lib/content/faqs'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="frame mt-frame bg-forest py-16 text-cream md:py-24 lg:py-32"
    >
      <div className="main-container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-32">
            <Reveal>
              <p className="tag-pill bg-cream text-bark">{faqs.eyebrow}</p>
            </Reveal>
            <LinesReveal id="faq-title" className="t-h1">
              {faqs.title}
            </LinesReveal>
            <Reveal>
              <p className="max-w-sm t-body-l text-cream/68">{faqs.description}</p>
            </Reveal>
            <Reveal>
              <MagneticLink href={faqs.action.href} label={faqs.action.label} className="-ml-2" />
            </Reveal>
          </div>
        </div>

        <Reveal isStaggered distance={24} className="border-t border-cream/15 lg:col-span-7">
          {faqs.items.map((faq) => (
            <details key={faq.id} className="group border-b border-cream/15">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 t-h5 transition-opacity hover:opacity-75 [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-cream/30 transition-[transform,background-color,color] duration-500 ease-card group-open:rotate-45 group-open:bg-cream group-open:text-forest">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-8 t-body text-cream/68">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
