'use client'

import { Button } from '@ui/button'
import { Input } from '@ui/input'
import { Label } from '@ui/label'
import { useActionState, useEffect } from 'react'
import { signUpWithCredentials } from '@users/actions'
import { useRouter } from 'next/navigation'
import { Loader2Icon } from 'lucide-react'

export const SignUpCredentialsForm = () => {
  const router = useRouter()

  const [state, formAction, isPending] = useActionState(signUpWithCredentials, undefined)

  useEffect(() => {
    if (state?.success) {
      router.push('/sign-in')
    }
  }, [router, state?.success])

  return (
    <form action={formAction} className='space-y-6'>
      <div className='space-y-1'>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' name='name' autoComplete='name' required disabled={isPending} />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='email'>Email</Label>
        <Input type='email' id='email' name='email' autoComplete='email' required disabled={isPending} />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          name='password'
          autoComplete='current-password'
          required
          disabled={isPending}
        />
      </div>

      <div className='space-y-1'>
        <Label htmlFor='confirmPassword'>Confirm Password</Label>
        <Input
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          autoComplete='current-password'
          required
          disabled={isPending}
        />
      </div>

      {state?.error && <p className='text-destructive text-center text-sm leading-none font-medium'>{state.error}</p>}

      <Button className='w-full' disabled={isPending}>
        {isPending ? <Loader2Icon className='animate-spin' /> : 'Sign Up'}
      </Button>
    </form>
  )
}
