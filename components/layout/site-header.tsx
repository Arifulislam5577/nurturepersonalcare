import { ShoppingBag } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { navigation } from '@/lib/content/navigation'
import { site } from '@/lib/content/site'

import logo from '@/public/images/nurture-logo-cream.png'

export function SiteHeader() {
  return (
    <header className="absolute inset-x-frame top-frame z-40 text-cream">
      <div className="flex h-20 items-center justify-between gap-6 px-5 md:h-24 md:px-8 lg:grid lg:grid-cols-3">
        <Link href="/" className="shrink-0 justify-self-start" aria-label={`${site.name} home`}>
          <Image src={logo} alt="" className="h-9 w-auto md:h-11" priority />
        </Link>

        <nav aria-label="Main" className="hidden justify-self-center lg:block">
          <ul className="flex items-center gap-10">
            {navigation.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group block py-3 t-label text-cream/85 transition-colors hover:text-cream"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block transition-transform duration-500 ease-card group-hover:-translate-y-full">
                      {link.label}
                    </span>
                    <span
                      className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-card group-hover:translate-y-0"
                      aria-hidden="true"
                    >
                      {link.label}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-6 justify-self-end lg:flex">
          <Link
            href={navigation.cart.href}
            className="flex items-center gap-2 t-label text-cream transition-opacity hover:opacity-70"
          >
            <ShoppingBag className="size-4" aria-hidden="true" />
            {navigation.cart.label}
          </Link>
          <span className="h-6 w-px bg-cream/30" aria-hidden="true" />
          <Link
            href={navigation.contact.href}
            className="inline-flex min-h-12 items-center rounded-full bg-cream px-6 t-button text-bark transition-colors duration-500 hover:bg-cream/15 hover:text-cream"
          >
            {navigation.contact.label}
          </Link>
        </div>
      </div>
    </header>
  )
}
