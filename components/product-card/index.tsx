import Link from 'next/link'
import Image from 'next/image'
import { StarIcon } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ProductPrice } from '@/components/product-price'
import type { Product } from '@/lib/types'

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className='hover:ring-ring relative py-3 transition hover:ring-1'>
      <CardHeader className='justify-center px-3'>
        <Image src={product.images[0]} alt={product.name} width={300} height={300} priority />
      </CardHeader>

      <CardContent className='h-full px-3'>
        <div className='grid h-full gap-4'>
          <div className='h-full space-y-2'>
            <span className='text-xs'>{product.brand}</span>

            <Link href={`/products/${product.slug}`}>
              <h2 className='text-sm font-medium'>{product.name}</h2>
              <span className='absolute inset-0 z-10' />
            </Link>
          </div>

          <div className='flex items-center justify-between gap-2'>
            <p className='flex items-center gap-2'>
              {product.rating} <StarIcon size={16} className='fill-yellow-400' />
            </p>

            {product.stock > 0 ? (
              <ProductPrice value={+product.price} />
            ) : (
              <p className='text-destructive'>OOS</p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
