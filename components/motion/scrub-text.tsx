'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useRef } from 'react'

import { isMotionAllowed } from '@/lib/is-motion-allowed'

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP)

type ScrubTextProps = {
  text: string
  className?: string
}

export function ScrubText({ text, className }: ScrubTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)

  useGSAP(
    () => {
      const paragraph = paragraphRef.current
      if (!paragraph || !isMotionAllowed()) return

      SplitText.create(paragraph, {
        type: 'words',
        autoSplit: true,
        onSplit: (split) =>
          gsap.fromTo(
            split.words,
            { opacity: 0.16 },
            {
              opacity: 1,
              ease: 'none',
              stagger: 0.12,
              scrollTrigger: {
                trigger: paragraph,
                start: 'top 82%',
                end: 'bottom 48%',
                scrub: true,
              },
            },
          ),
      })
    },
    { scope: paragraphRef },
  )

  return (
    <p ref={paragraphRef} className={className}>
      {text}
    </p>
  )
}
