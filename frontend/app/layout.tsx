import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Person App',
  description: 'Made By Tahsin Ayman',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <div className='hidden'>
          <div className="bg-error"></div>
          <div className="bg-success"></div>
          <div className="bg-warning"></div>
          <div className="bg-info"></div>
        </div>
      </body>
    </html>
  )
}
