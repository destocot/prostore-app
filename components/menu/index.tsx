import Link from 'next/link'
import { ThemeToggler } from '@/components/theme-toggler'
import { Button } from '@/components/ui/button'
import { EllipsisVerticalIcon, ShoppingCartIcon } from 'lucide-react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { UserButton } from '@/components/user-button'

export const Menu = () => {
  return (
    <>
      <nav className='hidden gap-x-2 md:flex'>
        <ThemeToggler />

        <Button variant='ghost' asChild>
          <Link href='/cart'>
            <ShoppingCartIcon />
            Cart
          </Link>
        </Button>

        <UserButton />
      </nav>

      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger asChild>
            <EllipsisVerticalIcon />
          </SheetTrigger>

          <SheetContent className='w-2/5'>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            <div className='flex flex-col gap-4 p-4'>
              <div>
                <ThemeToggler className='w-auto border-none bg-transparent px-3 py-2 shadow-none' />
              </div>

              <SheetClose asChild>
                <Button variant='ghost' className='justify-start' asChild>
                  <Link href='/cart'>
                    <ShoppingCartIcon />
                    Cart
                  </Link>
                </Button>
              </SheetClose>

              <UserButton />
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}
