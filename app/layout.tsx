import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'SCAVENGER - Finding the right equipment doesn\'t have to be complicated',
  description: 'Brand agnostic equipment sourcing with technical expertise and project management support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=BBH+Bartle&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={montserrat.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

