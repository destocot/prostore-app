import { PrismaClient } from '../lib/generated/prisma'
import seedData from './seed-data.json'
import { auth } from '../lib/auth'

const prisma = new PrismaClient()

async function truncate() {
  const tablenames = await prisma.$queryRaw<
    Array<{ tablename: string }>
  >`SELECT tablename FROM pg_tables WHERE schemaname='public'`

  const tables = tablenames
    .map(({ tablename }) => tablename)
    .filter((name) => name !== '_prisma_migrations')
    .map((name) => `"public"."${name}"`)
    .join(', ')

  await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tables} CASCADE;`)
}

async function main() {
  await truncate()

  const ADMIN_IDS = []

  for (const user of seedData.users) {
    const res = await auth.api.signUpEmail({
      body: {
        name: user.name,
        email: user.email,
        password: user.password,
      },
    })

    if (user.role === 'ADMIN') ADMIN_IDS.push(+res.user.id)
  }
  await prisma.user.updateMany({
    where: { id: { in: ADMIN_IDS } },
    data: { role: 'ADMIN' },
  })

  await prisma.product.createMany({ data: seedData.products })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
