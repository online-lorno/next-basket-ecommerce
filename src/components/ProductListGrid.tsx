'use client'

import { ProductCard } from './ProductCard'
import { Product } from '@/lib/types'

type Props = {
  products: Product[]
}

export function ProductListGrid({ products }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-x-[30px] gap-y-[30px] p-6 md:gap-y-[15px]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
