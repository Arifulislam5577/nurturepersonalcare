import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { products } from '@/lib/content/products'
import { formatPrice } from '@/lib/format-price'

type Product = (typeof products.items)[number]

type ProductCardProps = {
  product: Product
  isActive: boolean
}

export function ProductCard({ product, isActive }: ProductCardProps) {
  return (
    <article className="group relative flex h-107.5 w-78 flex-col justify-between overflow-clip rounded-card bg-sand p-6 text-bark shadow-xl shadow-black/15 select-none">
      <div
        className="pointer-events-none absolute inset-0 transition-transform duration-500 ease-card group-hover:-translate-y-2 group-hover:scale-104"
        aria-hidden="true"
      >
        <Image
          src={product.image.src}
          alt=""
          fill
          placeholder="blur"
          sizes="312px"
          draggable={false}
          className="object-cover"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-sand via-sand/70 to-transparent"
        aria-hidden="true"
      />

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

      <div className="pointer-events-none relative z-0 flex items-end justify-between gap-3 font-medium uppercase">
        <p className="max-w-52 leading-tight">{product.name}</p>
        <p className="whitespace-nowrap">{formatPrice(product.priceCents)}</p>
      </div>
    </article>
  )
}
