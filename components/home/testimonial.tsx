import { Quote } from 'lucide-react'

import { testimonial } from '@/lib/content/testimonial'

import { Reveal } from '@/components/motion/reveal'

export function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="frame mt-frame bg-lagoon py-24 text-white md:py-36"
    >
      <div className="main-container">
        <h2 id="testimonial-title" className="flex items-center justify-center gap-3 eyebrow">
          <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
          {testimonial.eyebrow}
        </h2>
        <Reveal>
          <figure className="mx-auto mt-12 max-w-5xl text-center">
            <Quote className="mx-auto size-12 text-mist" aria-hidden="true" />
            <blockquote className="mt-8">
              <p className="font-serif text-title italic md:text-headline">“{testimonial.quote}”</p>
            </blockquote>
            <figcaption className="mt-12">
              <span className="block text-lg font-semibold">{testimonial.name}</span>
              <span className="mt-2 block eyebrow text-white/80">{testimonial.location}</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
