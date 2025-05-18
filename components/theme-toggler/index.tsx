'use client'

import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { MoonIcon, SunIcon } from 'lucide-react'

type ThemeTogglerProps = { className?: string }

export const ThemeToggler = ({ className }: ThemeTogglerProps) => {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon' className={className}>
          <SunIcon className='scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
          <MoonIcon className='absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuCheckboxItem
          checked={theme === 'system'}
          onCheckedChange={() => setTheme('system')}
        >
          System
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={theme === 'dark'}
          onCheckedChange={() => setTheme('dark')}
        >
          Dark
        </DropdownMenuCheckboxItem>

        <DropdownMenuCheckboxItem
          checked={theme === 'light'}
          onCheckedChange={() => setTheme('light')}
        >
          Light
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
