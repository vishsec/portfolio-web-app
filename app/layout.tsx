import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vishwajit | personal portfolio',
  description: 'Vishwajit is a full stack dev',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>

      <body className={`${inter.className} bg-slate-900 text-gray-950 relative 
      pt-28 sm:pt-39 h-[5000px]`}>
        
        <ActiveSectionContextProvider>
        <Header />                   
        {children}
        <Toaster position='top-right'/>                   
        </ActiveSectionContextProvider>
        
        </body>
    </html>
  )
}
