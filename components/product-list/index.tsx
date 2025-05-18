import type { Product } from '@/lib/types'
import { ProductCard } from '@/components/product-card'

interface ProductList {
  data: Array<Product>
  title?: string
}

export const ProductList = ({ data, title }: ProductList) => {
  return (
    <div className='space-y-4'>
      <h2 className='text-2xl font-bold lg:text-3xl'>{title}</h2>

      {data.length > 0 ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {data.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p className='text-muted-foreground capitalize'>No products found</p>
        </div>
      )}
    </div>
  )
}
