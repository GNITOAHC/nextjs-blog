import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */

import Motion from '@/app/components/Motion'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Chaoting Chen',
  description: 'Developer',
}

function HomePage({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-0 sm:p-2 h-full">
      <div className="h-full w-full flex justify-center sm:rounded-3xl backdrop-blur-3xl bg-white/30 border-foreground border-solid border-0 sm:border-[1px] overflow-scroll">
        <div className="w-[90%] sm:w-4/6 flex flex-col justify-items-center items-center">
          <Header />
          <div className="relative flex flex-col flex-grow w-full">
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Motion>
          <ThemeProvider>
            <HomePage>{children}</HomePage>
          </ThemeProvider>
        </Motion>
      </body>
    </html>
  )
}
