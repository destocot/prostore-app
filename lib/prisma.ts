import { neonConfig } from '@neondatabase/serverless'
import { PrismaClient } from '../lib/generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

neonConfig.webSocketConstructor = ws

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL })

const globalForPrisma = global as unknown as { prisma: PrismaClient }

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({ adapter }).$extends({
    result: {
      product: {
        price: {
          needs: { price: true },
          compute: (product) => {
            return String(product.price)
          },
        },
        rating: {
          needs: { rating: true },
          compute: (product) => {
            return String(product.rating)
          },
        },
      },
    },
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
