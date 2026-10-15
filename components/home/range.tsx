import { products } from '@/lib/content/products'

import { ProductRange } from '@/components/home/product-range'
import { SectionIntro } from '@/components/home/section-intro'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Range() {
  return (
    <section
      id="range"
      aria-labelledby="range-title"
      className="frame mt-frame bg-white py-24 md:py-36"
    >
      <div className="main-container">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            id="range-title"
            eyebrow={products.eyebrow}
            title={products.title}
            description={products.description}
          />
          <Reveal className="shrink-0">
            <MagneticLink
              href={products.action.href}
              label={products.action.label}
              variant="leaf"
            />
          </Reveal>
        </div>
        <ProductRange />
      </div>
    </section>
  )
}
