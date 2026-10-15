import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

import { cn } from '@/lib/cn'
import { contact } from '@/lib/content/contact'
import { site } from '@/lib/content/site'

import { LinesReveal } from '@/components/motion/lines-reveal'
import { Reveal } from '@/components/motion/reveal'
import { MagneticLink } from '@/components/ui/magnetic-link'

type ContactDetail = {
  id: string
  label: string
  value: string
  href?: string
  icon: LucideIcon
}

const contactDetails: readonly ContactDetail[] = [
  {
    id: 'email',
    label: contact.emailLabel,
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
  },
  {
    id: 'phone',
    label: contact.phoneLabel,
    value: site.phone.label,
    href: site.phone.href,
    icon: Phone,
  },
  { id: 'location', label: contact.locationLabel, value: site.location, icon: MapPin },
  { id: 'reply', label: contact.replyLabel, value: site.replyTime, icon: Clock },
]

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="frame mt-frame bg-leaf py-24 text-ink md:py-36"
    >
      <div className="main-container grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="flex items-center gap-3 eyebrow">
            <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
            {contact.eyebrow}
          </p>
          <LinesReveal id="contact-title" className="mt-5 text-display font-semibold">
            {contact.title}
          </LinesReveal>
          <Reveal className="mt-8 flex flex-col items-start gap-8">
            <p className="max-w-lg text-lead text-ink/80">{contact.description}</p>
            <div className="flex flex-wrap gap-3">
              <MagneticLink href={`mailto:${site.email}`} label="Email us" />
              <MagneticLink href={site.phone.href} label="Call us" variant="paper" />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Reveal as="ul" isStaggered distance={24} className="grid gap-3 sm:grid-cols-2">
            {contactDetails.map((detail) => {
              const Icon = detail.icon
              return (
                <li
                  key={detail.id}
                  className={cn(
                    'rounded-card bg-white/35 p-6',
                    detail.id === 'email' && 'sm:col-span-2',
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                  <p className="mt-6 eyebrow text-ink/70">{detail.label}</p>
                  {detail.href ? (
                    <Link
                      href={detail.href}
                      className="mt-2 block font-semibold underline-offset-4 hover:underline"
                    >
                      {detail.value}
                    </Link>
                  ) : (
                    <p className="mt-2 font-semibold">{detail.value}</p>
                  )}
                </li>
              )
            })}
          </Reveal>
          <Reveal className="mt-3 rounded-card bg-ink p-8 text-paper">
            <h3 className="text-xl font-semibold tracking-tight">{contact.partnersTitle}</h3>
            <p className="mt-4 text-paper/75">{contact.partners}</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
