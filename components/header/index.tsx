import Image from 'next/image'
import Link from 'next/link'
import { Menu } from '../menu'

export const Header = () => {
  return (
    <header className='h-20 border-b'>
      <div className='container flex h-full items-center justify-between py-4'>
        <Link href='/' className='flex items-center'>
          <Image src='/images/logo.svg' alt='Prostore Logo' height={45} width={45} priority />
          <span className='ml-3 hidden text-2xl font-bold lg:inline'>Prostore</span>
        </Link>

        <Menu />
      </div>
    </header>
  )
}
