'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

import { cn } from '@/lib/cn'
import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(useGSAP)

const variants = {
  glass: 'bg-cream/24 text-cream backdrop-blur-glass hover:bg-cream/55 hover:text-bark',
  cream: 'bg-cream text-bark hover:bg-cream/10 hover:text-cream',
  forest: 'bg-forest text-cream hover:bg-forest/85',
  outline: 'border border-bark/20 text-bark hover:bg-bark hover:text-cream',
} as const

type MagneticLinkProps = {
  href: string
  label: string
  variant?: keyof typeof variants
  className?: string
}

export function MagneticLink({ href, label, variant = 'glass', className }: MagneticLinkProps) {
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const linkRef = useRef<HTMLAnchorElement>(null)
  const isHashLink = href.startsWith('#')

  useGSAP(
    () => {
      const wrapper = wrapperRef.current
      const link = linkRef.current
      const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      if (!wrapper || !link || !canHover || !isMotionAllowed()) return

      const moveX = gsap.quickTo(link, 'x', { duration: 0.7, ease: 'power3.out' })
      const moveY = gsap.quickTo(link, 'y', { duration: 0.7, ease: 'power3.out' })

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = wrapper.getBoundingClientRect()
        moveX((event.clientX - bounds.left - bounds.width / 2) * 0.3)
        moveY((event.clientY - bounds.top - bounds.height / 2) * 0.3)
      }
      const handlePointerLeave = () => {
        moveX(0)
        moveY(0)
      }

      wrapper.addEventListener('pointermove', handlePointerMove)
      wrapper.addEventListener('pointerleave', handlePointerLeave)
      return () => {
        wrapper.removeEventListener('pointermove', handlePointerMove)
        wrapper.removeEventListener('pointerleave', handlePointerLeave)
      }
    },
    { scope: wrapperRef },
  )

  return (
    <span ref={wrapperRef} className={cn('inline-block p-2', className)}>
      <Link
        ref={linkRef}
        href={href}
        scroll={isHashLink ? false : undefined}
        className={cn(
          'group inline-flex min-h-12 items-center rounded-full px-5 py-4 t-button transition-[background-color,color] duration-500 ease-card',
          variants[variant],
        )}
      >
        <span className="relative block overflow-hidden">
          <span className="block transition-transform duration-500 ease-card group-hover:-translate-y-full">
            {label}
          </span>
          <span
            className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-card group-hover:translate-y-0"
            aria-hidden="true"
          >
            {label}
          </span>
        </span>
      </Link>
    </span>
  )
}
