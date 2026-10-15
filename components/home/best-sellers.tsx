import { products } from '@/lib/content/products'

import { ProductArc } from '@/components/home/product-arc'
import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function BestSellers() {
  return (
    <section
      id="shop"
      aria-labelledby="best-sellers-title"
      className="frame mt-frame bg-forest pt-16 pb-16 text-cream md:pt-24 md:pb-20 lg:pt-30 lg:pb-24"
    >
      <div className="main-container flex flex-col items-center gap-6">
        <div className="flex max-w-3xl flex-col items-center gap-5 text-center">
          <Reveal>
            <p className="tag-pill bg-cream text-bark">{products.eyebrow}</p>
          </Reveal>
          <LinesReveal id="best-sellers-title" className="t-h1">
            {products.title}
          </LinesReveal>
        </div>
        <Reveal distance={80} className="w-full">
          <ProductArc />
        </Reveal>
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-8 bg-linear-to-r from-forest/70 to-transparent md:w-24"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-20 w-8 bg-linear-to-l from-forest/70 to-transparent md:w-24"
        aria-hidden="true"
      />
    </section>
  )
}
