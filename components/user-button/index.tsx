import Link from 'next/link'
import { auth } from '@/lib/auth'
import { signOut } from '@users/actions'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@ui/dropdown-menu'
import { headers } from 'next/headers'
import { Button } from '@ui/button'
import { UserIcon } from 'lucide-react'

export const UserButton = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return (
      <Button asChild>
        <Link href='/sign-in'>
          <UserIcon />
          Sign In
        </Link>
      </Button>
    )
  }

  const initial = session.user.name.charAt(0).toLocaleUpperCase() || '?'
  //const imgSrc = `https://avatar.vercel.sh/${session.user?.name}.svg?text=${firstInital}`;

  return (
    <div className='flex items-center gap-2'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className='flex items-center'>
            <Button variant='secondary' size='icon' className='rounded-full'>
              {initial}
            </Button>
          </div>
        </DropdownMenuTrigger>

        <DropdownMenuContent className='w-56' align='end' forceMount>
          <DropdownMenuLabel className='font-normal'>
            <div className='flex flex-col gap-y-1'>
              <p className='text-sm leading-none font-medium'>{session.user.name}</p>

              <p className='text-muted-foreground text-sm leading-none'>{session.user.email}</p>
            </div>
          </DropdownMenuLabel>

          <DropdownMenuItem className='mb-1 p-0'>
            <form action={signOut} className='w-full'>
              <Button variant='ghost' size='sm' className='flex w-full justify-start'>
                Sign Out
              </Button>
            </form>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
