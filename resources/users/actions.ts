'use server'

import { parse, ValiError } from 'valibot'
import { SignInUserSchema, SignUpUserSchema } from '@users/validators'
import { auth } from '@/lib/auth'
import { APIError } from 'better-auth/api'
import { headers } from 'next/headers'

type SignInWithCredentialsState = { success: true; error: null } | { success: false; error: string } | undefined

export async function signInWithCredentials(
  prevState: SignInWithCredentialsState,
  formData: FormData,
): Promise<SignInWithCredentialsState> {
  const values = Object.fromEntries(formData.entries())

  try {
    const payload = parse(SignInUserSchema, values)

    await auth.api.signInEmail({
      body: {
        email: payload.email,
        password: payload.password,
      },
    })

    return { success: true, error: null }
  } catch (err) {
    if (err instanceof ValiError) {
      return { success: false, error: err.issues[0].message }
    }

    if (err instanceof APIError) {
      return { success: false, error: err.message }
    }

    console.error('[signInWithCredentials]', err)

    return { success: false, error: 'Internal Server Error' }
  }
}

export async function signOut() {
  await auth.api.signOut({
    headers: await headers(),
  })
}

type SignUpWithCredentialsState = { success: true; error: null } | { success: false; error: string } | undefined

export async function signUpWithCredentials(prevState: SignUpWithCredentialsState, formData: FormData) {
  const values = Object.fromEntries(formData.entries())

  try {
    const payload = parse(SignUpUserSchema, values)

    await auth.api.signUpEmail({
      body: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    })

    return { success: true, error: null }
  } catch (err) {
    if (err instanceof ValiError) {
      return { success: false, error: err.issues[0].message }
    }

    if (err instanceof APIError) {
      return { success: false, error: err.message }
    }

    console.error('[signUpWithCredentials]', err)

    return { success: false, error: 'Internal Server Error' }
  }
}
