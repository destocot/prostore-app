import { cn } from '@/lib/utils'

interface ProductPriceProps {
  value: number
  className?: string
}

export const ProductPrice = ({ value, className }: ProductPriceProps) => {
  const stringValue = value.toFixed(2)
  const [int, dec] = stringValue.split('.')

  return (
    <p className={cn('text-2xl', className)}>
      <span className='align-super text-xs'>$</span>
      {int}
      <span className='align-super text-xs'>.{dec}</span>
    </p>
  )
}
