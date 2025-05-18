'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ProductImagesProps {
  images: Array<string>
}

export const ProductImages = ({ images }: ProductImagesProps) => {
  const [current, setCurrent] = useState(0)

  const handleClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <div className='space-y-4'>
      <Image
        src={images[current]}
        alt='Product Image'
        width={1000}
        height={1000}
        className='object-cover object-center'
      />

      <div className='flex gap-x-2'>
        {images.map((image, i) => (
          <div
            key={i}
            onClick={handleClick.bind(null, i)}
            className={cn(
              'ring-ring/50 cursor-pointer overflow-hidden rounded-md ring-1 hover:ring-orange-600',
              {
                'ring-orange-500': current === i,
              },
            )}
          >
            <Image
              src={image}
              alt='Product Image'
              width={100}
              height={100}
              className='object-cover object-center'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
