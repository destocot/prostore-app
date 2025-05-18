import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex h-dvh flex-col items-center justify-center'>
      <Image src='/images/logo.svg' alt='Good Spring Logo' height={45} width={45} priority />

      <div className='space-y-4 rounded-md p-4 text-center shadow-md'>
        <h1 className='text-3xl font-bold'>Not Found</h1>
        <p className='text-destructive capitalize'>Could not find requested page</p>
        <Button variant='outline' asChild>
          <Link href='/'>Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
