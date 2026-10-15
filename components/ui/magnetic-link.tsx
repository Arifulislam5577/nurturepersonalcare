'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'

import { cn } from '@/lib/cn'
import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(useGSAP)

const variants = {
  ink: 'bg-ink text-paper',
  paper: 'bg-paper text-ink',
  leaf: 'bg-leaf text-ink',
  glass: 'border border-white/30 bg-white/10 text-white backdrop-blur-md',
} as const

const iconVariants = {
  ink: 'bg-leaf text-ink',
  paper: 'bg-ink text-paper',
  leaf: 'bg-ink text-paper',
  glass: 'bg-white text-ink',
} as const

type MagneticLinkProps = {
  href: string
  label: string
  variant?: keyof typeof variants
  className?: string
}

export function MagneticLink({ href, label, variant = 'ink', className }: MagneticLinkProps) {
  const linkRef = useRef<HTMLAnchorElement>(null)
  const isHashLink = href.startsWith('#')

  useGSAP(
    () => {
      const link = linkRef.current
      const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
      if (!link || !canHover || !isMotionAllowed()) return

      const moveX = gsap.quickTo(link, 'x', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })
      const moveY = gsap.quickTo(link, 'y', { duration: 0.8, ease: 'elastic.out(1, 0.4)' })

      const handlePointerMove = (event: PointerEvent) => {
        const bounds = link.getBoundingClientRect()
        moveX((event.clientX - bounds.left - bounds.width / 2) * 0.3)
        moveY((event.clientY - bounds.top - bounds.height / 2) * 0.35)
      }
      const handlePointerLeave = () => {
        moveX(0)
        moveY(0)
      }

      link.addEventListener('pointermove', handlePointerMove)
      link.addEventListener('pointerleave', handlePointerLeave)

      return () => {
        link.removeEventListener('pointermove', handlePointerMove)
        link.removeEventListener('pointerleave', handlePointerLeave)
      }
    },
    { scope: linkRef },
  )

  return (
    <Link
      ref={linkRef}
      href={href}
      scroll={isHashLink ? false : undefined}
      className={cn(
        'group inline-flex min-h-12 items-center gap-3 rounded-full py-2 pr-2 pl-6 text-sm font-semibold tracking-tight transition-[background-color,color] duration-300',
        variants[variant],
        className,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-500 ease-out-expo group-hover:-translate-y-full">
          {label}
        </span>
        <span
          className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-out-expo group-hover:translate-y-0"
          aria-hidden="true"
        >
          {label}
        </span>
      </span>
      <span
        className={cn(
          'grid size-9 place-items-center rounded-full transition-transform duration-500 ease-out-expo group-hover:rotate-45',
          iconVariants[variant],
        )}
      >
        <ArrowUpRight className="size-4" aria-hidden="true" />
      </span>
    </Link>
  )
}
