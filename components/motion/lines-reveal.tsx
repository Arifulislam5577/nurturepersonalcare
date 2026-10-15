'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

type LinesRevealProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'p'
  id?: string
  className?: string
  trigger?: 'load' | 'view'
  delay?: number
}

export function LinesReveal({
  children,
  as: Tag = 'h2',
  id,
  className,
  trigger = 'view',
  delay = 0,
}: LinesRevealProps) {
  const elementRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element || !isMotionAllowed()) return

      SplitText.create(element, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: (split) => {
          gsap.set(element, { opacity: 1 })
          return gsap.from(split.lines, {
            yPercent: 115,
            duration: 1.3,
            ease: 'expo.out',
            stagger: 0.1,
            delay,
            scrollTrigger:
              trigger === 'view' ? { trigger: element, start: 'top 90%', once: true } : undefined,
          })
        },
      })
    },
    { scope: elementRef },
  )

  return (
    <Tag
      ref={(node: HTMLElement | null) => {
        elementRef.current = node
      }}
      id={id}
      className={className}
      data-lines=""
    >
      {children}
    </Tag>
  )
}
