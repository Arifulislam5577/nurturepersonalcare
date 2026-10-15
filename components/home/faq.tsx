import { Plus } from 'lucide-react'

import { faqs } from '@/lib/content/faqs'

import { SectionIntro } from '@/components/home/section-intro'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="frame mt-frame bg-ink py-24 text-paper md:py-36"
    >
      <div className="main-container grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-10 lg:sticky lg:top-32">
            <SectionIntro
              id="faq-title"
              eyebrow={faqs.eyebrow}
              title={faqs.title}
              description={faqs.description}
              tone="dark"
            />
            <MagneticLink href={faqs.action.href} label={faqs.action.label} variant="leaf" />
          </div>
        </div>

        <Reveal isStaggered distance={24} className="border-t border-paper/15 lg:col-span-7">
          {faqs.items.map((faq) => (
            <details key={faq.id} className="group border-b border-paper/15">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium tracking-tight transition-colors hover:text-leaf md:text-xl [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-paper/20 transition-[transform,background-color,color] duration-500 ease-out-expo group-open:rotate-45 group-open:bg-leaf group-open:text-ink">
                  <Plus className="size-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="max-w-2xl pb-8 text-paper/70">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
