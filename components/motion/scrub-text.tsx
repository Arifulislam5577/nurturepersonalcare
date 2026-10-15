'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

type ScrubTextProps = {
  children: ReactNode
  as?: 'h2' | 'p'
  id?: string
  className?: string
}

export function ScrubText({ children, as: Tag = 'p', id, className }: ScrubTextProps) {
  const elementRef = useRef<HTMLElement | null>(null)

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element || !isMotionAllowed()) return

      SplitText.create(element, {
        type: 'words',
        autoSplit: true,
        onSplit: (split) =>
          gsap.fromTo(
            split.words,
            { opacity: 0.42 },
            {
              opacity: 1,
              ease: 'none',
              stagger: 0.1,
              scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 45%',
                scrub: true,
              },
            },
          ),
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
    >
      {children}
    </Tag>
  )
}
