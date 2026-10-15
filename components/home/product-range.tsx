'use client'

import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { cn } from '@/lib/cn'
import { products } from '@/lib/content/products'
import { formatPrice } from '@/lib/format-price'

type FilterId = (typeof products.filters)[number]['id']

export function ProductRange() {
  const [activeFilter, setActiveFilter] = useState<FilterId>('all')

  const visibleProducts = products.items.filter(
    (product) =>
      activeFilter === 'all' || product.categories.some((category) => category === activeFilter),
  )

  return (
    <>
      <div
        role="group"
        aria-label="Filter products by collection"
        className="mt-12 flex flex-wrap gap-2"
      >
        {products.filters.map((filter) => {
          const isActive = filter.id === activeFilter
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'min-h-11 rounded-full px-5 text-sm font-semibold transition-colors duration-300',
                isActive
                  ? 'bg-ink text-paper'
                  : 'bg-paper text-slate ring-1 ring-ink/10 hover:bg-mist/40',
              )}
            >
              {filter.label}
            </button>
          )
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {`Showing ${visibleProducts.length} products`}
      </p>

      <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.map((product) => (
          <li key={product.id}>
            <article className="group relative flex h-full flex-col rounded-card bg-paper p-3 ring-1 ring-ink/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-ink/10">
              <div className="relative aspect-square overflow-hidden rounded-xl bg-white">
                <Image
                  src={product.image.src}
                  alt={product.image.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-out-expo group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full bg-leaf px-3 py-1.5 eyebrow text-ink">
                  Sale
                </span>
              </div>
              <div className="flex flex-1 flex-col px-2 pt-5 pb-2">
                <p className="eyebrow text-slate">{product.type}</p>
                <h3 className="mt-2 text-lg leading-snug font-semibold tracking-tight">
                  {product.name}
                </h3>
                <p className="mt-auto flex items-baseline gap-3 pt-5">
                  <span className="font-mono font-medium text-ink">
                    <span className="sr-only">Sale price </span>
                    {formatPrice(product.priceCents)}
                  </span>
                  <s className="font-mono text-sm text-slate">
                    <span className="sr-only">Original price </span>
                    {formatPrice(product.originalPriceCents)}
                  </s>
                </p>
                <Link
                  href={product.href}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold after:absolute after:inset-0"
                >
                  View product
                  <ArrowUpRight
                    className="size-4 transition-transform group-hover:rotate-45"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </>
  )
}
