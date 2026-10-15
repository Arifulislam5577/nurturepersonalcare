import Image from 'next/image'
import Link from 'next/link'

import { footer } from '@/lib/content/footer'
import { site } from '@/lib/content/site'

import logo from '@/public/images/nurture-logo-cream.png'

export function SiteFooter() {
  return (
    <footer className="frame my-frame bg-bark pt-20 pb-10 text-cream md:pt-32 md:pb-12">
      <div className="main-container flex flex-col items-center gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-14 text-center md:gap-20">
          <Link href="#top" scroll={false} aria-label={`${site.name}, back to top`}>
            <Image src={logo} alt="" className="h-24 w-auto md:h-32 xl:h-36" />
          </Link>
          <p className="max-w-md t-body text-cream/65">{site.summary}</p>
        </div>

        <nav
          aria-label="Footer"
          className="grid w-full max-w-5xl gap-12 text-center sm:grid-cols-2 sm:gap-8 lg:grid-cols-4"
        >
          {footer.columns.map((column) => (
            <div key={column.id} className="flex flex-col items-center gap-5">
              <h2 className="font-medium tracking-wide uppercase">{column.title}</h2>
              <ul className="flex flex-col items-center gap-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      scroll={link.href.startsWith('#') ? false : undefined}
                      className="font-light text-cream/65 transition-colors hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col items-center gap-5">
            <h2 className="font-medium tracking-wide uppercase">Get in touch</h2>
            <ul className="flex flex-col items-center gap-2 font-light text-cream/65">
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
          </div>
        </nav>

        <div className="flex w-full flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 t-label text-cream/50 sm:flex-row">
          <p>
            © {footer.copyrightYear} {site.legalName}. {footer.copyright}
          </p>
          <p>Proudly South African</p>
        </div>
      </div>
    </footer>
  )
}
