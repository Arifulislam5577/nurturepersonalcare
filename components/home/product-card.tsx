import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { cn } from '@/lib/cn'
import type { products } from '@/lib/content/products'
import { formatPrice } from '@/lib/format-price'

type Product = (typeof products.items)[number]

type ProductCardProps = {
  product: Product
  isActive: boolean
}

export function ProductCard({ product, isActive }: ProductCardProps) {
  return (
    <article className="group relative flex h-107.5 w-78 flex-col justify-between gap-4 overflow-clip rounded-card bg-sand p-5 text-bark shadow-xl shadow-black/15 select-none">
      <Link
        href={product.href}
        className="absolute inset-0 z-10 rounded-card"
        draggable={false}
        tabIndex={isActive ? 0 : -1}
        aria-label={`${product.name}, ${formatPrice(product.priceCents)}`}
      />

      <div className="pointer-events-none relative z-0 flex items-center justify-between">
        <span className="rounded-full bg-white px-3 py-2 t-label">{product.tag}</span>
        <span className="grid size-8 place-items-center rounded-full bg-white transition-transform duration-500 ease-card group-hover:rotate-45">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </div>

      <div
        className={cn(
          'pointer-events-none relative mx-auto aspect-square w-full overflow-hidden rounded-lg bg-paper transition-transform duration-500 ease-card',
          isActive ? 'scale-105' : 'scale-100',
        )}
        aria-hidden="true"
      >
        <Image
          src={product.image.src}
          alt=""
          fill
          placeholder="blur"
          sizes="272px"
          draggable={false}
          className="scale-110 object-cover object-center transition-transform duration-500 ease-card group-hover:scale-118"
        />
      </div>

      <div className="pointer-events-none relative z-0 flex items-end justify-between gap-3 font-medium uppercase">
        <p className="max-w-52 leading-tight">{product.name}</p>
        <p className="whitespace-nowrap">{formatPrice(product.priceCents)}</p>
      </div>
    </article>
  )
}
