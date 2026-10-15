'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type RevealProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'ul' | 'ol'
  isStaggered?: boolean
  delay?: number
  distance?: number
}

export function Reveal({
  children,
  className,
  as: Tag = 'div',
  isStaggered = false,
  delay = 0,
  distance = 48,
}: RevealProps) {
  const elementRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element || !isMotionAllowed()) return

      const targets = isStaggered ? Array.from(element.children) : [element]
      gsap.fromTo(
        targets,
        { opacity: 0, y: distance },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'expo.out',
          delay,
          stagger: isStaggered ? 0.1 : 0,
          scrollTrigger: { trigger: element, start: 'top 88%', once: true },
        },
      )
    },
    { scope: elementRef },
  )

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        elementRef.current = node
      }}
      className={className}
      data-reveal=""
      data-stagger={isStaggered ? '' : undefined}
    >
      {children}
    </Tag>
  )
}
