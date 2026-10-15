'use client'

import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { cn } from '@/lib/cn'
import { navigation } from '@/lib/content/navigation'
import { site } from '@/lib/content/site'

import logo from '@/public/images/nurture-logo.png'

const HIDE_AFTER_PX = 160

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let frameId = 0

    const update = () => {
      frameId = 0
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 24)
      setIsHidden(scrollY > HIDE_AFTER_PX && scrollY > lastScrollY)
      lastScrollY = scrollY
    }
    const handleScroll = () => {
      if (!frameId) frameId = requestAnimationFrame(update)
    }

    update()
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
        'fixed inset-x-0 top-0 z-50 pt-frame transition-transform duration-700 ease-out-expo',
        !isVisible && '-translate-y-full',
      )}
    >
      <div className="main-container">
        <div
          className={cn(
            'flex items-center justify-between gap-6 rounded-full py-2 pr-2 pl-5 transition-[background-color,box-shadow] duration-500',
            isScrolled || isMenuOpen
              ? 'bg-white/90 shadow-lg ring-1 shadow-ink/5 ring-ink/5 backdrop-blur-xl'
              : 'bg-white/75 backdrop-blur-md',
          )}
        >
          <Link
            href="#top"
            scroll={false}
            className="shrink-0"
            aria-label={`${site.name}, back to top`}
          >
            <Image src={logo} alt="" className="h-9 w-auto" priority />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    scroll={false}
                    className="rounded-full px-4 py-2.5 text-sm font-medium text-slate transition-colors hover:bg-ink/5 hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={navigation.contact.href}
              scroll={false}
              className="hidden min-h-11 items-center rounded-full bg-ink px-5 text-sm font-semibold text-paper transition-colors hover:bg-lagoon sm:inline-flex"
            >
              {navigation.contact.label}
            </Link>
            <button
              type="button"
              className="grid size-11 place-items-center rounded-full bg-leaf text-ink lg:hidden"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            >
              {isMenuOpen ? (
                <X className="size-5" aria-hidden="true" />
              ) : (
                <Menu className="size-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        <nav
          id="mobile-menu"
          aria-label="Mobile"
          hidden={!isMenuOpen}
          className="mt-2 rounded-card bg-ink p-3 text-paper shadow-2xl lg:hidden"
          data-lenis-prevent=""
        >
          <ul>
            {[...navigation.links, navigation.contact].map((link) => (
              <li key={link.href} className="border-b border-paper/10 last:border-none">
                <Link
                  href={link.href}
                  scroll={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex min-h-14 items-center px-4 text-title font-medium"
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
