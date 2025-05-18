import { Loader2Icon } from 'lucide-react'

export default function Loading() {
  return (
    <div className='flex h-dvh items-center justify-center'>
      <Loader2Icon className='animate-spin' size={64} />
    </div>
  )
}
