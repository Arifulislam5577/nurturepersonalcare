'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { useEffect } from 'react'

import { lenisStore } from '@/lib/lenis-store'

gsap.registerPlugin(ScrollTrigger)

export function SmoothScroll(): null {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true, anchors: true })
    lenis.on('scroll', ScrollTrigger.update)
    lenisStore.instance = lenis

    return () => {
      lenisStore.instance = null
      lenis.destroy()
    }
  }, [])

  return null
}
