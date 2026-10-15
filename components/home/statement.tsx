import Image from 'next/image'

import { statement } from '@/lib/content/statement'

import { Reveal } from '@/components/motion/reveal'

export function Statement() {
  return (
    <section
      aria-labelledby="statement-title"
      className="frame mt-frame bg-bark py-16 text-cream md:py-24 lg:py-32"
    >
      <div className="main-container">
        <h2 id="statement-title" className="sr-only">
          {statement.sentence}
        </h2>
        <div className="flex flex-col items-center gap-4 t-h2 md:gap-5" aria-hidden="true">
          {statement.rows.map((row) => (
            <Reveal
              key={row.id}
              isStaggered
              distance={30}
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
            >
              {row.parts.map((part) =>
                part.kind === 'word' ? (
                  <span key={part.id} className="text-center">
                    {part.text}
                  </span>
                ) : (
                  <span
                    key={part.id}
                    className="relative block h-16 w-24 shrink-0 overflow-hidden rounded-full bg-sand md:h-21.5 md:w-31"
                  >
                    <Image
                      src={part.src}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="124px"
                      className="object-cover"
                    />
                  </span>
                ),
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
