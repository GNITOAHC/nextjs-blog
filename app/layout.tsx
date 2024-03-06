import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */

import Motion from '@/app/components/Motion'

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Chaoting Chen',
  description: 'Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Motion>{children}</Motion>
      </body>
    </html>
  )
}
