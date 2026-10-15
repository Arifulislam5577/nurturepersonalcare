import Image from 'next/image'

import { testimonial } from '@/lib/content/testimonial'

import { ImageReveal } from '@/components/motion/image-reveal'
import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Testimonial() {
  return (
    <section
      aria-labelledby="testimonial-title"
      className="frame mt-frame bg-sand py-16 text-bark md:py-24 lg:py-32"
    >
      <div className="main-container flex flex-col items-center gap-12 md:gap-20">
        <LinesReveal id="testimonial-title" className="text-center t-h1">
          {testimonial.title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </LinesReveal>

        <Reveal className="w-full max-w-5xl">
          <figure className="grid gap-6 rounded-frame bg-white p-4 md:grid-cols-2 md:p-6">
            <div className="flex flex-col justify-between gap-10 p-2 md:p-6">
              <div className="flex flex-col gap-6">
                <p className="t-label text-bark/55">{testimonial.product}</p>
                <blockquote>
                  <p className="t-h4">{testimonial.quote}</p>
                </blockquote>
              </div>
              <figcaption className="flex flex-col gap-1">
                <span className="font-medium">{testimonial.name}</span>
                <span className="t-label text-bark/55">{testimonial.location}</span>
              </figcaption>
            </div>
            <ImageReveal className="relative aspect-4/5 overflow-hidden rounded-card bg-sand">
              <Image
                src={testimonial.image.src}
                alt={testimonial.image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 768px) 480px, 100vw"
                className="object-cover"
              />
            </ImageReveal>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
