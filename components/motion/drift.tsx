'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type DriftProps = {
  children: ReactNode
  className?: string
  distance: number
}

export function Drift({ children, className, distance }: DriftProps) {
  const layerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const layer = layerRef.current
      if (!layer || !isMotionAllowed()) return

      const media = gsap.matchMedia()
      media.add('(min-width: 64rem)', () => {
        gsap.fromTo(
          layer,
          { y: distance },
          {
            y: -distance,
            ease: 'none',
            scrollTrigger: { trigger: layer, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        )
      })
      return () => media.revert()
    },
    { scope: layerRef },
  )

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  )
}
