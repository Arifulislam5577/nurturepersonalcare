'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type DrawPathProps = {
  d: string
  viewBox: string
  className?: string
}

export function DrawPath({ d, viewBox, className }: DrawPathProps) {
  const pathRef = useRef<SVGPathElement>(null)

  useGSAP(
    () => {
      const path = pathRef.current
      if (!path || !isMotionAllowed()) return

      const length = path.getTotalLength()
      gsap.fromTo(
        path,
        { strokeDasharray: length, strokeDashoffset: length },
        {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: { trigger: path, start: 'top 85%', end: 'bottom 40%', scrub: true },
        },
      )
    },
    { scope: pathRef },
  )

  return (
    <svg className={className} viewBox={viewBox} fill="none" aria-hidden="true">
      <path
        ref={pathRef}
        d={d}
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
