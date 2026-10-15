import { Leaf } from 'lucide-react'

import { marquee } from '@/lib/content/marquee'

export function MarqueeBand() {
  return (
    <section aria-label={marquee.label} className="frame mt-frame bg-leaf py-7 text-ink md:py-9">
      <div className="main-container">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              className="flex shrink-0 items-center"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {marquee.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-8 pr-8 text-title font-semibold whitespace-nowrap"
                >
                  {item}
                  <Leaf className="size-7 text-ink/70" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  )
}
