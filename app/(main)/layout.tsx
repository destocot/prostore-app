import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100dvh-5rem-3.5rem)]'>
        <div className='container h-full py-4 md:py-8'>{children}</div>
      </main>
      <Footer />
    </>
  )
}
