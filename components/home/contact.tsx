import Image from 'next/image'
import Link from 'next/link'

import { contact } from '@/lib/content/contact'
import { site } from '@/lib/content/site'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Parallax } from '@/components/motion/parallax'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="frame mt-frame bg-forest py-24 text-cream md:py-32 lg:py-40"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Parallax className="absolute inset-0 scale-115">
          <Image
            src={contact.image.src}
            alt=""
            fill
            placeholder="blur"
            sizes="100vw"
            className="object-cover"
          />
        </Parallax>
      </div>
      <div className="absolute inset-0 bg-forest/85" aria-hidden="true" />

      <div className="relative main-container flex flex-col items-center gap-12 text-center md:gap-14">
        <div className="flex max-w-xl flex-col items-center gap-4">
          <LinesReveal id="contact-title" className="t-h1">
            {contact.title}
          </LinesReveal>
          <Reveal>
            <p className="t-body-l text-cream/75">{contact.description}</p>
          </Reveal>
          <Reveal>
            <p className="mt-2 t-body text-cream/60">{contact.partners}</p>
          </Reveal>
        </div>

        <Reveal className="flex flex-wrap justify-center">
          <MagneticLink href={`mailto:${site.email}`} label={contact.emailAction} variant="cream" />
          <MagneticLink href={site.phone.href} label={contact.phoneAction} />
        </Reveal>

        <Reveal>
          <ul className="flex flex-col items-center gap-3 t-label text-cream/70 sm:flex-row sm:gap-8">
            <li>
              <Link href={`mailto:${site.email}`} className="transition-colors hover:text-cream">
                {site.email}
              </Link>
            </li>
            <li>
              <Link href={site.phone.href} className="transition-colors hover:text-cream">
                {site.phone.label}
              </Link>
            </li>
            <li>{site.location}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
