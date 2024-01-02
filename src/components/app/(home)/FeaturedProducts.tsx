'use client'

import { ProductCard } from '@/components/ProductCard'
import { ProductsResponse } from '@/lib/types'

type Props = ProductsResponse

export function FeaturedProductsSection({ products }: Props) {
  return (
    <section className="mx-auto max-w-screen-xl px-10 py-10 md:px-0 md:py-20">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-[10px] text-center">
          <span className="text-xl text-secondary-gray">Featured Products</span>
          <h1 className="text-2xl font-bold uppercase">Bestseller products</h1>
          <span className="text-sm text-secondary-gray">
            Problems trying to resolve the conflict between
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[30px] p-6 md:gap-y-[15px]">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
