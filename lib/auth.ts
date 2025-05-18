import { betterAuth, BetterAuthOptions } from 'better-auth'
import { prismaAdapter } from 'better-auth/adapters/prisma'
import { prisma } from '../lib/prisma'
import { hashPassword, verifyPassword } from '../lib/bcrypt'
import { admin } from 'better-auth/plugins'
import { nextCookies } from 'better-auth/next-js'

const options = {
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    minPasswordLength: 6,
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  user: {
    additionalFields: {
      role: {
        type: ['USER', 'ADMIN'],
        required: false,
        defaultValue: 'USER',
        input: false,
      },
    },
  },
  session: {
    expiresIn: 60 * 60 * 24 * 30,
  },
  advanced: {
    database: {
      useNumberId: true,
    },
  },
  plugins: [
    nextCookies(),
    admin({
      defaultRole: 'USER',
      adminRoles: ['ADMIN'],
    }),
  ],
} satisfies BetterAuthOptions

export const auth = betterAuth({
  ...options,
  plugins: [...(options.plugins ?? [])],
})
