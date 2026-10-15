import { formulation } from '@/lib/content/formulation'

import { SectionIntro } from '@/components/home/section-intro'
import { Reveal } from '@/components/motion/reveal'

export function Formulation() {
  return (
    <section
      id="standard"
      aria-labelledby="formulation-title"
      className="frame mt-frame bg-leaf py-24 text-ink md:py-36"
    >
      <div className="main-container">
        <SectionIntro
          id="formulation-title"
          eyebrow={formulation.eyebrow}
          title={formulation.title}
          tone="brand"
        />

        <Reveal as="ol" isStaggered className="mt-14 md:mt-20">
          {formulation.items.map((item, index) => (
            <li
              key={item.id}
              className="grid gap-4 border-t border-ink/20 py-10 md:grid-cols-12 md:gap-8 md:py-14"
            >
              <span className="font-mono text-sm font-medium md:col-span-2" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-title font-semibold md:col-span-4">{item.title}</h3>
              <p className="text-lead text-ink/80 md:col-span-6">{item.description}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
