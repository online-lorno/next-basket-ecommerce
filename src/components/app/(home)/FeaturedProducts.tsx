'use client'

import { ProductListGrid } from '@/components/ProductListGrid'
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

        <ProductListGrid products={products} />
      </div>
    </section>
  )
}
