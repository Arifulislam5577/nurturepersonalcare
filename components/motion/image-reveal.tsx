'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef, type ReactNode } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, useGSAP)

type ImageRevealProps = {
  children: ReactNode
  className?: string
}

export function ImageReveal({ children, className }: ImageRevealProps) {
  const frameRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const frame = frameRef.current
      if (!frame || !isMotionAllowed()) return

      const image = frame.querySelector('img')
      const timeline = gsap.timeline({
        scrollTrigger: { trigger: frame, start: 'top 88%', once: true },
      })
      timeline.fromTo(
        frame,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.4, ease: 'expo.inOut' },
      )
      if (image) {
        timeline.fromTo(image, { scale: 1.3 }, { scale: 1, duration: 2, ease: 'expo.out' }, 0.1)
      }
    },
    { scope: frameRef },
  )

  return (
    <div ref={frameRef} className={className} data-image-reveal="">
      {children}
    </div>
  )
}
