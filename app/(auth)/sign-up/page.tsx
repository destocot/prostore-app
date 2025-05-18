import { auth } from '@/lib/auth'
import { SignUpCredentialsForm } from '@users/components/sign-up-credentials-form'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@ui/card'
import type { Metadata } from 'next'
import { headers } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = { title: 'Sign Up' }

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })
  if (session) redirect('/')

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader className='justify-center gap-3'>
        <Link href='/' className='mx-auto'>
          <Image src='/images/logo.svg' alt='Prostore Logo' height={45} width={45} priority />
        </Link>

        <CardTitle className='text-center'>Create Account</CardTitle>

        <CardDescription className='text-center'>Enter your information below to sign up.</CardDescription>
      </CardHeader>

      <CardContent>
        <SignUpCredentialsForm />
      </CardContent>

      <CardFooter className='justify-center'>
        <p className='text-muted-foreground text-center text-sm'>
          Already have an account?{' '}
          <Link href='/sign-in' className='hover:text-foreground transition-colors'>
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  )
}
