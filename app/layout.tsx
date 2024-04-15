import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'

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
    <html lang="en">

      <body className={`${inter.className} bg-slate-900 text-gray-950 relative h-[5000px]
      pt-28 sm:pt-39`}>
        
        <Header />
        {children}
        </body>
    </html>
  )
}
