'use client'

import { Menu, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/cn'
import { navigation } from '@/lib/content/navigation'
import { site } from '@/lib/content/site'

import logo from '@/public/images/nurture-logo-cream.png'

const HIDE_AFTER_PX = 200

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let frameId = 0

    const update = () => {
      frameId = 0
      const scrollY = window.scrollY
      if (Math.abs(scrollY - lastScrollY) < 6) return
      setIsHidden(scrollY > HIDE_AFTER_PX && scrollY > lastScrollY)
      lastScrollY = scrollY
    }
    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(update)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMenuOpen])

  const isVisible = isMenuOpen || !isHidden

  return (
    <header
      className={cn(
        'fixed inset-x-frame top-frame z-50 text-cream transition-transform duration-700 ease-card',
        !isVisible && '-translate-y-28',
      )}
    >
      <div
        className={cn(
          'overflow-clip rounded-2xl bg-linear-to-b from-bark/70 to-bark/45 backdrop-blur-glass lg:rounded-full',
          isMenuOpen && 'from-forest to-forest',
        )}
      >
        <div className="flex h-16 items-center justify-between gap-6 pr-3 pl-6 lg:h-18 lg:pl-8">
          <Link
            href="#top"
            scroll={false}
            className="shrink-0"
            aria-label={`${site.name}, back to top`}
          >
            <Image src={logo} alt="" className="h-8 w-auto lg:h-9" priority />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className="group block py-3 t-label text-cream/70 transition-colors hover:text-cream"
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

          <div className="flex items-center gap-5">
            <Link
              href={navigation.shop.href}
              className="hidden items-center gap-2 t-label text-cream/80 transition-opacity hover:opacity-70 lg:flex"
            >
              <ShoppingBag className="size-4" aria-hidden="true" />
              {navigation.shop.label}
            </Link>
            <span className="hidden h-5 w-px bg-cream/25 lg:block" aria-hidden="true" />
            <Link
              href={navigation.contact.href}
              scroll={false}
              className="hidden min-h-11 items-center rounded-full bg-cream px-5 t-button text-bark transition-colors duration-500 hover:bg-cream/15 hover:text-cream sm:inline-flex"
            >
              {navigation.contact.label}
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full text-cream lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              {isMenuOpen ? (
                <X className="size-6" aria-hidden="true" />
              ) : (
                <Menu className="size-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          hidden={!isMenuOpen}
          className="border-t border-cream/10 px-6 pt-4 pb-8 lg:hidden"
          data-lenis-prevent=""
        >
          <ul>
            {[...navigation.links, navigation.shop, navigation.contact].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  scroll={link.href.startsWith('#') ? false : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-14 items-center t-h3 text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
