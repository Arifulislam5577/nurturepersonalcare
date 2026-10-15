import Image from 'next/image'

import { team } from '@/lib/content/team'

import { SectionIntro } from '@/components/home/section-intro'
import { ImageReveal } from '@/components/motion/image-reveal'
import { Reveal } from '@/components/motion/reveal'

export function Team() {
  return (
    <section aria-labelledby="team-title" className="frame mt-frame bg-mist/35 py-24 md:py-36">
      <div className="main-container grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionIntro
              id="team-title"
              eyebrow={team.eyebrow}
              title={team.title}
              description={team.description}
            />
          </div>
        </div>

        <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
          {team.members.map((member, index) => (
            <li key={member.id} className={index === 1 ? 'sm:mt-24' : undefined}>
              <article>
                <ImageReveal className="relative aspect-3/4 overflow-hidden rounded-card bg-white">
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
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{member.name}</h3>
                  <p className="mt-2 eyebrow text-slate">{member.role}</p>
                </Reveal>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
