import Image from 'next/image'

import { team } from '@/lib/content/team'

import { ImageReveal } from '@/components/motion/image-reveal'
import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Team() {
  return (
    <section
      aria-labelledby="team-title"
      className="frame mt-frame bg-bark py-16 text-cream md:py-24 lg:py-32"
    >
      <div className="main-container grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex flex-col items-start gap-6 lg:sticky lg:top-32">
            <Reveal>
              <p className="tag-pill bg-cream/10">{team.eyebrow}</p>
            </Reveal>
            <LinesReveal id="team-title" className="t-h1">
              {team.title}
            </LinesReveal>
            <Reveal>
              <p className="max-w-md t-body-l text-cream/68">{team.description}</p>
            </Reveal>
          </div>
        </div>

        <ul className="grid gap-10 sm:grid-cols-2 sm:gap-6 lg:col-span-7">
          {team.members.map((member, index) => (
            <li key={member.id} className={index === 1 ? 'sm:mt-32' : undefined}>
              <article>
                <ImageReveal className="relative aspect-3/4 overflow-hidden rounded-card bg-sand">
                  <Image
                    src={member.image.src}
                    alt={member.image.alt}
                    fill
                    placeholder="blur"
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top"
                  />
                </ImageReveal>
                <Reveal distance={20}>
                  <h3 className="mt-6 t-h5">{member.name}</h3>
                  <p className="mt-2 t-label text-cream/60">{member.role}</p>
                </Reveal>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
