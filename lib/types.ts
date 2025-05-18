import type { Product as PrismaProduct } from '@/lib/generated/prisma'

export interface Product extends Omit<PrismaProduct, 'price' | 'rating'> {
  price: string
  rating: string
}
