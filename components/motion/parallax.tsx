'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type ParallaxProps = {
  children: ReactNode
  className?: string
  shiftPercent?: number
}

export function Parallax({ children, className, shiftPercent = 8 }: ParallaxProps) {
  const layerRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const layer = layerRef.current
      const parent = layer?.parentElement
      if (!layer || !parent || !isMotionAllowed()) return

      gsap.fromTo(
        layer,
        { yPercent: -shiftPercent },
        {
          yPercent: shiftPercent,
          ease: 'none',
          scrollTrigger: { trigger: parent, start: 'top bottom', end: 'bottom top', scrub: true },
        },
      )
    },
    { scope: layerRef },
  )

  return (
    <div ref={layerRef} className={className}>
      {children}
    </div>
  )
}
