'use client'

import { gsap } from 'gsap'
import { ArrowUpRight, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useId, useRef, useState, type MouseEvent } from 'react'

import { cn } from '@/lib/cn'
import { navigation } from '@/lib/content/navigation'
import { site } from '@/lib/content/site'
import { lenisStore } from '@/lib/lenis-store'

type PanelSize = { width: number; height: number }

const TOGGLE_SIZE_PX = 44
const EDGE_GAP_PX = 16
const LARGE_SCREEN_PX = 1024
const MEDIUM_SCREEN_PX = 768
const HERO_ID = 'top'
const TOGGLE_ZONE_PX = 80

const panelLinks = [navigation.home, ...navigation.links, navigation.contact]

const contactLinks = [
  { label: site.email, href: `mailto:${site.email}` },
  { label: site.phone.label, href: site.phone.href },
  { label: navigation.cart.label, href: navigation.cart.href },
]

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value))
}

export function NavbarCornerPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [size, setSize] = useState<PanelSize>({ width: 0, height: 0 })
  const menuId = useId()
  const pathname = usePathname()

  const anchorRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLButtonElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)
  const isOpenRef = useRef(false)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)

  const measure = useCallback((): PanelSize => {
    const anchor = anchorRef.current
    if (!anchor) return { width: 0, height: 0 }
    const anchorBox = anchor.getBoundingClientRect()
    const viewportWidth = window.innerWidth
    const reach = anchorBox.right - EDGE_GAP_PX

    let width = reach
    if (viewportWidth >= LARGE_SCREEN_PX) width = clamp(viewportWidth * 0.32, 360, 460)
    else if (viewportWidth >= MEDIUM_SCREEN_PX) width = viewportWidth * 0.5

    return {
      width: Math.round(Math.min(width, reach)),
      height: Math.round(window.innerHeight - anchorBox.top * 2),
    }
  }, [])

  const animatePanel = useCallback((shouldOpen: boolean, next: PanelSize) => {
    const panel = panelRef.current
    const overlay = overlayRef.current
    if (!panel || !overlay) return

    const items = gsap.utils.toArray<HTMLElement>('[data-panel-item]', panel)
    const extras = gsap.utils.toArray<HTMLElement>('[data-panel-extra]', panel)
    const lines = gsap.utils.toArray<HTMLElement>('[data-panel-line]', panel)
    timelineRef.current?.kill()

    timelineRef.current = shouldOpen
      ? gsap
          .timeline({ defaults: { duration: 0.5 } })
          .set(panel, { visibility: 'visible' }, 0)
          .set([...items, ...extras], { y: '-2rem', opacity: 0 }, 0)
          .set(lines, { scaleX: 0 }, 0)
          .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, 0)
          .to(panel, { width: next.width, height: next.height, ease: 'power1.out' }, 0)
          .to(items, { y: 0, opacity: 1, stagger: 0.05 }, 0)
          .to(lines, { scaleX: 1, stagger: 0.05, ease: 'power2.out' }, 0.15)
          .to(extras, { y: 0, opacity: 1, stagger: 0.05 }, 0.2)
      : gsap
          .timeline({ defaults: { duration: 0.5 } })
          .to([...items, ...extras], { y: '-2rem', opacity: 0, stagger: 0.03, duration: 0.3 }, 0)
          .to(overlay, { autoAlpha: 0 }, 0)
          .to(panel, { width: TOGGLE_SIZE_PX, height: TOGGLE_SIZE_PX, ease: 'power1.inOut' }, 0)
          .set(panel, { visibility: 'hidden' })

    if (prefersReducedMotion()) timelineRef.current.progress(1)
  }, [])

  const setOpen = useCallback(
    (shouldOpen: boolean) => {
      if (shouldOpen === isOpenRef.current) return
      isOpenRef.current = shouldOpen
      const next = measure()
      setSize(next)
      setIsOpen(shouldOpen)
      animatePanel(shouldOpen, next)
    },
    [animatePanel, measure],
  )

  const showCursor = useCallback((isVisible: boolean) => {
    gsap.to(cursorRef.current, {
      autoAlpha: isVisible ? 1 : 0,
      scale: isVisible ? 1 : 0.5,
      duration: 0.25,
      ease: 'power2.out',
    })
  }, [])

  useEffect(
    () => () => {
      timelineRef.current?.kill()
    },
    [],
  )

  useEffect(() => {
    const hero = document.getElementById(HERO_ID)
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry) setIsPastHero(!entry.isIntersecting)
      },
      { rootMargin: `-${TOGGLE_ZONE_PX}px 0px 0px 0px` },
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    const main = document.getElementById('main')
    if (main) main.inert = isOpen
    if (isOpen) lenisStore.instance?.stop()
    else lenisStore.instance?.start()
  }, [isOpen])

  useEffect(() => {
    const cursor = cursorRef.current
    if (!isOpen || !cursor) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return
      setOpen(false)
      toggleRef.current?.focus()
    }

    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.22, ease: 'power3.out' })
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.22, ease: 'power3.out' })
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') {
        showCursor(false)
        return
      }
      moveX(event.clientX)
      moveY(event.clientY)
      const target = event.target instanceof Element ? event.target : null
      showCursor(!target?.closest('[data-menu-keep]'))
    }
    const handlePointerLeave = () => showCursor(false)
    const handleResize = () => {
      if (timelineRef.current?.isActive()) return
      const next = measure()
      setSize(next)
      gsap.set(panelRef.current, { width: next.width, height: next.height })
    }

    gsap.set(cursor, { xPercent: -50, yPercent: -50 })
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('pointermove', handlePointerMove)
    document.documentElement.addEventListener('pointerleave', handlePointerLeave)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('pointermove', handlePointerMove)
      document.documentElement.removeEventListener('pointerleave', handlePointerLeave)
      window.removeEventListener('resize', handleResize)
      showCursor(false)
    }
  }, [isOpen, measure, setOpen, showCursor])

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) {
      setOpen(false)
      return
    }
    event.preventDefault()
    setOpen(false)
    lenisStore.instance?.start()
    const target = document.getElementById(href.slice(1))
    if (!target) return
    if (lenisStore.instance) lenisStore.instance.scrollTo(target, { duration: 1.4 })
    else target.scrollIntoView()
  }

  const isToggleVisible = isOpen || isPastHero

  return (
    <div>
      <button
        ref={overlayRef}
        type="button"
        tabIndex={-1}
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className="invisible fixed inset-0 z-50 bg-bark/55 opacity-0 backdrop-blur-xs pointer-fine:cursor-none"
      />

      <div
        ref={anchorRef}
        data-menu-keep=""
        className={cn(
          'fixed top-7.5 right-8 z-60 size-11 transition-[opacity,scale] duration-500 ease-card md:top-9.5 md:right-11 lg:top-8 lg:right-8',
          isToggleVisible
            ? 'scale-100 opacity-100'
            : 'pointer-events-none scale-75 opacity-0 max-lg:pointer-events-auto max-lg:scale-100 max-lg:opacity-100',
        )}
      >
        <div
          ref={panelRef}
          id={menuId}
          inert={!isOpen}
          className="invisible absolute top-0 right-0 size-11 overflow-hidden rounded-lg bg-forest/90 text-cream ring-1 ring-cream/12 backdrop-blur-md"
        >
          <div
            style={{ width: size.width || undefined, height: size.height || undefined }}
            className="absolute top-0 right-0"
          >
            <nav
              aria-label="Menu"
              className="@container flex h-full flex-col justify-between px-6 pt-18 pb-8 sm:pr-12 sm:pb-10 sm:pl-10"
            >
              <ul className="flex flex-col gap-4">
                {panelLinks.map((link) => (
                  <li key={link.href} data-panel-item="">
                    <Link
                      href={link.href}
                      scroll={link.href.startsWith('#') ? false : undefined}
                      onClick={(event) => handleLinkClick(event, link.href)}
                      className="group/link flex flex-col gap-3 rounded-sm text-4xl font-light tracking-tight text-cream/50 transition-colors duration-200 select-none hover:text-cream sm:gap-4 @sm:text-5xl"
                    >
                      <span className="flex items-center justify-between gap-4">
                        <span className="min-w-0 origin-left truncate transition-transform duration-200 group-hover/link:scale-105">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          strokeWidth={1.5}
                          className="size-6 shrink-0 transition-[transform,color] duration-200 group-hover/link:translate-x-1 group-hover/link:text-leaf"
                          aria-hidden="true"
                        />
                      </span>
                      <span
                        aria-hidden="true"
                        data-panel-line=""
                        className="block h-px w-full origin-left bg-cream/15"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="flex w-fit flex-col gap-1">
                <p data-panel-extra="" className="mb-4 t-label text-cream/60 sm:mb-6">
                  Get in touch
                </p>
                <ul className="flex flex-col gap-1">
                  {contactLinks.map((contact) => (
                    <li key={contact.href} data-panel-extra="">
                      <Link
                        href={contact.href}
                        className="group/contact relative flex items-center gap-2 overflow-hidden pr-4 text-cream sm:gap-0"
                      >
                        <ArrowUpRight
                          className="size-3.5 shrink-0 origin-left text-leaf transition-transform duration-200 sm:scale-0 sm:group-hover/contact:scale-100"
                          aria-hidden="true"
                        />
                        <span className="transition-transform duration-200 sm:-translate-x-3.5 sm:group-hover/contact:translate-x-1">
                          {contact.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <button
          ref={toggleRef}
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls={menuId}
          onClick={() => setOpen(!isOpenRef.current)}
          className={cn(
            'absolute inset-0 z-10 grid cursor-pointer place-items-center rounded-lg backdrop-blur-md transition-colors duration-300',
            isOpen ? 'bg-transparent' : 'bg-forest/85 ring-1 ring-cream/12',
          )}
        >
          <span aria-hidden="true" className="relative block h-2.5 w-5">
            <span
              className={cn(
                'absolute inset-x-0 top-0 h-0.5 bg-cream transition-transform duration-400 ease-out motion-reduce:transition-none',
                isOpen && 'translate-y-1 rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute inset-x-0 bottom-0 h-0.5 bg-cream transition-transform duration-400 ease-out motion-reduce:transition-none',
                isOpen && '-translate-y-1 -rotate-45',
              )}
            />
          </span>
        </button>
      </div>

      <span
        ref={cursorRef}
        aria-hidden="true"
        className="pointer-events-none invisible fixed top-0 left-0 z-60 grid size-14 place-items-center rounded-full bg-leaf text-bark opacity-0"
      >
        <X className="size-5" />
      </span>
    </div>
  )
}
