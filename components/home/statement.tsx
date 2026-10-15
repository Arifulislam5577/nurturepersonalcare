import Image from 'next/image'

import { statement } from '@/lib/content/statement'

import { Reveal } from '@/components/motion/reveal'

export function Statement() {
  return (
    <section
      aria-labelledby="statement-title"
      className="frame mt-frame bg-lagoon py-24 text-white md:py-36"
    >
      <div className="main-container">
        <h2 id="statement-title" className="sr-only">
          {statement.sentence}
        </h2>
        <div
          className="flex flex-col items-center gap-3 text-headline font-semibold md:gap-4"
          aria-hidden="true"
        >
          {statement.rows.map((row) => (
            <Reveal
              key={row.id}
              isStaggered
              className="flex flex-wrap items-center justify-center gap-3 md:gap-5"
            >
              {row.parts.map((part) =>
                part.kind === 'word' ? (
                  <span key={part.id} className="text-center">
                    {part.text}
                  </span>
                ) : (
                  <span
                    key={part.id}
                    className="relative block h-16 w-24 shrink-0 overflow-hidden rounded-full bg-white md:h-pill-height md:w-pill-width"
                  >
                    <Image
                      src={part.src}
                      alt=""
                      fill
                      placeholder="blur"
                      sizes="136px"
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
