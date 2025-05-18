import { auth } from '@/lib/auth'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card'
import { SignInCredentialsForm } from '@users/components/sign-in-credentials-form'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = { title: 'Sign In' }

interface PageProps {
  searchParams: Promise<{ callbackUrl: string }>
}

export default async function Page({ searchParams }: PageProps) {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  const callbackUrl = (await searchParams).callbackUrl ?? '/'

  if (session) {
    redirect(callbackUrl)
  }

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='justify-center gap-3'>
        <Link href='/' className='mx-auto'>
          <Image src='/images/logo.svg' alt='Good Spring Logo' height={45} width={45} priority />
        </Link>

        <CardTitle className='text-center'>Sign In</CardTitle>

        <CardDescription className='text-center'>Sign in to your account.</CardDescription>
      </CardHeader>

      <CardContent>
        <SignInCredentialsForm callbackUrl={callbackUrl} />
      </CardContent>

      <CardFooter className='justify-center'>
        <p className='text-muted-foreground text-center text-sm'>
          Don&apos;t have an account?{' '}
          <Link href='/sign-up' className='hover:text-foreground transition-colors'>
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
