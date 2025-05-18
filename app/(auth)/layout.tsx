export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main className='h-dvh'>
      <div className='grid h-full place-items-center'>{children}</div>
    </main>
  )
}
