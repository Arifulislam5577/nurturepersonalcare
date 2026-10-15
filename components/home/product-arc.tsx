'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
} from 'react'

import { products } from '@/lib/content/products'
import { formatPrice } from '@/lib/format-price'

import { ProductCard } from '@/components/home/product-card'
import { MagneticLink } from '@/components/ui/magnetic-link'

type Slot = { x: number; y: number; rotate: number }

const SLOTS: readonly Slot[] = [
  { x: 0, y: 0, rotate: 0 },
  { x: 359, y: 26, rotate: 8.77 },
  { x: 711, y: 113, rotate: 18.83 },
  { x: 1033, y: 243, rotate: 25.05 },
]
const LAST_VISIBLE_OFFSET = 3
const SWIPE_THRESHOLD_PX = 50

const stepButtonClass =
  'grid size-11 place-items-center rounded-full border border-cream/60 text-cream transition-colors duration-300 hover:bg-cream hover:text-forest'

function getOffset(index: number, position: number, count: number): number {
  const distance = (((index - position) % count) + count) % count
  return distance > Math.floor(count / 2) ? distance - count : distance
}

function getSlotStyle(offset: number): CSSProperties {
  const steps = Math.abs(offset)
  const direction = Math.sign(offset)
  const lastSlot = SLOTS[SLOTS.length - 1] ?? { x: 0, y: 0, rotate: 0 }
  const slot = SLOTS[steps] ?? {
    x: lastSlot.x + 320 * (steps - SLOTS.length + 1),
    y: lastSlot.y + 130 * (steps - SLOTS.length + 1),
    rotate: lastSlot.rotate,
  }
  const isVisible = steps <= LAST_VISIBLE_OFFSET

  return {
    transform: `translate(${slot.x * direction}px, ${slot.y}px) rotate(${slot.rotate * direction}deg)`,
    opacity: isVisible ? 1 : 0,
    zIndex: 100 - steps,
    pointerEvents: isVisible ? 'auto' : 'none',
  }
}

export function ProductArc() {
  const [position, setPosition] = useState(0)
  const swipeRef = useRef({ isTracking: false, hasSwiped: false, startX: 0, startY: 0 })
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const previousOffsetsRef = useRef<number[] | null>(null)
  const count = products.items.length
  const activeIndex = ((position % count) + count) % count
  const activeProduct = products.items[activeIndex]

  useLayoutEffect(() => {
    const previousOffsets = previousOffsetsRef.current
    const nextOffsets = products.items.map((_, index) => getOffset(index, position, count))
    previousOffsetsRef.current = nextOffsets
    if (!previousOffsets) return

    itemRefs.current.forEach((item, index) => {
      const previous = previousOffsets[index]
      const next = nextOffsets[index]
      if (!item || previous === undefined || next === undefined) return
      if (Math.abs(next - previous) <= 1) return

      const entry = getSlotStyle(next + Math.sign(next))
      item.style.transition = 'none'
      item.style.transform = String(entry.transform)
      item.style.opacity = '0'
      void item.offsetWidth
      item.style.transition = ''
      const target = getSlotStyle(next)
      item.style.transform = String(target.transform)
      item.style.opacity = String(target.opacity)
    })
  }, [position, count])

  useEffect(() => {
    const handlePointerUp = (event: PointerEvent) => {
      const swipe = swipeRef.current
      if (!swipe.isTracking) return
      swipe.isTracking = false
      const deltaX = event.clientX - swipe.startX
      const deltaY = event.clientY - swipe.startY
      if (Math.abs(deltaX) > SWIPE_THRESHOLD_PX && Math.abs(deltaX) > Math.abs(deltaY)) {
        swipe.hasSwiped = true
        setPosition((current) => current + (deltaX < 0 ? 1 : -1))
      }
    }
    const handlePointerCancel = () => {
      swipeRef.current.isTracking = false
    }

    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('pointercancel', handlePointerCancel)
    return () => {
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('pointercancel', handlePointerCancel)
    }
  }, [])

  const handleClickCapture = (event: MouseEvent<HTMLUListElement>) => {
    const swipe = swipeRef.current
    if (swipe.hasSwiped) {
      swipe.hasSwiped = false
      event.preventDefault()
      event.stopPropagation()
      return
    }
    if (event.detail === 0 || !(event.target instanceof Element)) return

    const card = event.target.closest<HTMLElement>('[data-index]')
    const index = Number(card?.dataset.index)
    if (!card || Number.isNaN(index)) return

    const offset = getOffset(index, position, count)
    if (offset !== 0) {
      event.preventDefault()
      event.stopPropagation()
      setPosition((current) => current + Math.sign(offset))
    }
  }

  return (
    <div className="flex w-full flex-col items-center">
      <div className="relative h-72 w-78 md:h-140 lg:h-157">
        <div className="absolute inset-0 origin-top scale-62 md:scale-80 lg:scale-100">
          <ul
            aria-roledescription="carousel"
            aria-label="Best sellers"
            className="absolute top-4 left-0 h-107.5 w-78 touch-pan-y lg:top-20"
            onPointerDown={(event) => {
              swipeRef.current = {
                isTracking: true,
                hasSwiped: false,
                startX: event.clientX,
                startY: event.clientY,
              }
            }}
            onDragStart={(event) => event.preventDefault()}
            onClickCapture={handleClickCapture}
          >
            {products.items.map((product, index) => {
              const offset = getOffset(index, position, count)
              return (
                <li
                  key={product.id}
                  ref={(node) => {
                    itemRefs.current[index] = node
                  }}
                  data-index={index}
                  aria-hidden={offset !== 0}
                  className="absolute inset-0 cursor-grab transition-[transform,opacity] duration-800 ease-arc will-change-transform"
                  style={getSlotStyle(offset)}
                >
                  <ProductCard product={product} isActive={offset === 0} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      <div className="relative z-10 flex items-center gap-1">
        <button
          type="button"
          className={stepButtonClass}
          aria-label="Previous product"
          onClick={() => setPosition((current) => current - 1)}
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>
        <MagneticLink href={products.action.href} label={products.action.label} />
        <button
          type="button"
          className={stepButtonClass}
          aria-label="Next product"
          onClick={() => setPosition((current) => current + 1)}
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>

      {activeProduct ? (
        <div
          className="mt-10 flex max-w-xl flex-col items-center gap-3 text-center"
          aria-live="polite"
        >
          <p className="t-label text-cream/60">{activeProduct.collection}</p>
          <h3 className="t-h4">{activeProduct.name}</h3>
          {activeProduct.description ? (
            <p className="t-body text-cream/68">{activeProduct.description}</p>
          ) : null}
          <p className="flex items-baseline gap-3 font-mono">
            <span>
              <span className="sr-only">Sale price </span>
              {formatPrice(activeProduct.priceCents)}
            </span>
            <s className="text-sm text-cream/50">
              <span className="sr-only">Original price </span>
              {formatPrice(activeProduct.originalPriceCents)}
            </s>
          </p>
        </div>
      ) : null}
    </div>
  )
}
