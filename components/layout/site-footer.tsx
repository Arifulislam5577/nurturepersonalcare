import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { footer } from '@/lib/content/footer'
import { site } from '@/lib/content/site'

import logo from '@/public/images/nurture-logo.png'

export function SiteFooter() {
  return (
    <footer className="frame my-frame bg-ink text-paper">
      <div className="main-container pt-20 pb-8 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="inline-block rounded-card bg-white px-5 py-4">
              <Image src={logo} alt={site.legalName} className="h-14 w-auto" />
            </div>
            <p className="mt-8 max-w-sm text-paper/70">{site.summary}</p>
          </div>

          <nav aria-label="Footer" className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {footer.columns.map((column) => (
              <div key={column.id}>
                <h2 className="eyebrow text-mist">{column.title}</h2>
                <ul className="mt-5 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        scroll={link.href.startsWith('#') ? false : undefined}
                        className="text-paper/75 transition-colors hover:text-leaf"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="lg:col-span-4">
            <h2 className="eyebrow text-mist">Contact</h2>
            <ul className="mt-5 space-y-4">
              <li>
                <Link
                  href={site.phone.href}
                  className="flex items-center gap-3 text-paper/75 transition-colors hover:text-leaf"
                >
                  <Phone className="size-4 text-leaf" aria-hidden="true" />
                  {site.phone.label}
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-paper/75 transition-colors hover:text-leaf"
                >
                  <Mail className="size-4 shrink-0 text-leaf" aria-hidden="true" />
                  {site.email}
                </Link>
              </li>
              <li className="flex items-center gap-3 text-paper/75">
                <MapPin className="size-4 text-leaf" aria-hidden="true" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <p
          className="mt-20 bg-linear-to-r from-leaf via-lagoon to-mist bg-clip-text text-center text-wordmark font-bold text-transparent select-none"
          aria-hidden="true"
        >
          nurture
        </p>

        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-paper/10 pt-6 text-sm text-paper/55 sm:flex-row">
          <p>
            © {footer.copyrightYear} {site.legalName}. {footer.copyright}
          </p>
          <p>Proudly South African</p>
        </div>
      </div>
    </footer>
  )
}
