import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */

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
      <body className="bg-black overflow-clip relative h-screen font-mono">
        <div
          style={{
            width: 554.69,
            height: 520.02,
            transform: 'rotate(-13.48deg)',
            transformOrigin: '0 0',
            background:
              'linear-gradient(162deg, #DDFFFF 0%, rgba(84.93, 183.45, 254.79, 0.94) 70%, rgba(34, 56.10, 255, 0.94) 100%)',
            boxShadow: '0px 10px 180px #E1CDFA',
            borderRadius: 9999,
            zIndex: -1,
          }}
          className="absolute -top-[5%] -left-[10%] max-w-[100vw]"
        />

        {children}
      </body>
    </html>
  )
}
