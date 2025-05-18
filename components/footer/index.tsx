export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='h-14 border-t'>
      <div className='text-muted-foreground flex h-full items-center justify-center px-4 py-4 md:px-8'>
        &copy; {currentYear} Good Spring. All rights reserved.
      </div>
    </footer>
  )
}
