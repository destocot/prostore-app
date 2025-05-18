import { ProductImages } from '@products/components/product-images'
import { ProductPrice } from '@products/components/product-price'
import { Badge } from '@ui/badge'
import { Button } from '@ui/button'
import { Card, CardContent } from '@ui/card'
import { prisma } from '@/lib/prisma'
import { Product } from '@/lib/types'
import { notFound } from 'next/navigation'

async function findOneProductBySlug({ slug }: { slug: string }) {
  return (await prisma.product.findUnique({
    where: { slug: slug },
  })) as unknown as Product | null
}

type PageProps = { params: Promise<{ slug: string }> }

export default async function Page({ params }: PageProps) {
  const slug = (await params).slug

  const product = await findOneProductBySlug({ slug })
  if (!product) notFound()

  return (
    <section>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
        <div className='col-span-2'>
          <ProductImages images={product.images} />
        </div>
        <div className='col-span-2'>
          <div className='flex flex-col gap-y-4'>
            <p>
              {product.brand} {product.category}
            </p>

            <h1 className='text-xl font-bold lg:text-2xl'>{product.name}</h1>

            <p>
              {product.rating} of {product.numReviews} reviews
            </p>

            <div className='flex flex-col gap-2 sm:flex-row sm:items-center'>
              <div className='grid w-28 place-items-center rounded-full bg-green-50 px-3 py-1.5 dark:bg-green-900'>
                <ProductPrice
                  value={+product.price}
                  className='font-medium tracking-wider text-green-700 dark:text-green-200'
                />
              </div>
            </div>
          </div>

          <div className='mt-8'>
            <p className='font-semibold'>Description</p>
            <p>{product.description}</p>
          </div>
        </div>

        <div className='col-span-1'>
          <Card className='py-4'>
            <CardContent className='space-y-4 px-4'>
              <div className='flex justify-between'>
                <p className='font-semibold'>Price</p>
                <ProductPrice value={+product.price} />
              </div>

              <div className='flex justify-between'>
                <p className='font-semibold'>Status</p>
                {product.stock > 0 ? (
                  <Badge variant='outline'>In Stock</Badge>
                ) : (
                  <Badge variant='destructive'>OOS</Badge>
                )}
              </div>

              {product.stock > 0 && (
                <div className='flex items-center justify-center'>
                  <Button className='w-full'>Add to Cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
