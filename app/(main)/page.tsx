import { ProductList } from '@/components/product-list'
import { prisma } from '@/lib/prisma'
import { LATEST_PRODUCTS_TAKE } from '@/lib/utils'
import type { Product } from '@/lib/types'

async function findAllProducts() {
  return (await prisma.product.findMany({
    take: LATEST_PRODUCTS_TAKE,
    orderBy: { createdAt: 'desc' },
  })) as unknown as Array<Product>
}

export default async function Page() {
  const products = await findAllProducts()

  return <ProductList data={products} title='Newest Arrivals' />
}
