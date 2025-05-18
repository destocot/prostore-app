import { createAuthClient } from 'better-auth/react'
import { baseUrl } from '@/lib/utils'
import { adminClient, inferAdditionalFields } from 'better-auth/client/plugins'
import { auth } from './auth'

const authClient = createAuthClient({
  baseURL: baseUrl,
  plugins: [inferAdditionalFields<typeof auth>(), adminClient()],
})

export const { useSession } = authClient
