import './globals.css'
import type { Metadata } from 'next'
/* import { Inter } from 'next/font/google' */

import Motion from '@/app/components/Motion'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { CurrentPrefix } from '@/app/components/DetailPage'
import { ThemeProvider } from '@/app/components/providers/ThemeProvider'

import { cn } from '@/lib/utils'

import Script from 'next/script' // For Google Adsense Root Domain Verification
const GoogleAdsense: React.FC = () => {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2003667605915500"
      crossOrigin="anonymous"
    />
  )
}

/* const inter = Inter({ subsets: ['latin'] }) */

export const metadata: Metadata = {
  title: 'Chaoting Chen',
  description: 'Developer',
}

function _HomePage({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-0 sm:p-2 h-full">
      <div className="h-full w-full flex justify-center sm:rounded-3xl backdrop-blur-3xl from-white/30 to-background bg-gradient-to-b border-foreground border-solid border-0 sm:border-[1px] overflow-scroll">
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

function HomePage({ children }: { children: React.ReactNode }) {
  const sizeAndAlign = 'h-full w-full flex justify-center relative'
  const backgroundGradient = 'from-white/30 to-background bg-gradient-to-b'
  const border = 'border-foreground border-solid border-0 sm:border-[1px]'
  const round = 'sm:rounded-3xl'
  const overflow = 'overflow-scroll'

  return (
    <main className="p-0 sm:p-2 h-full">
      <div className="h-full w-full backdrop-blur-3xl sm:rounded-3xl overflow-visible">
        <h1 className="m-0 p-0 absolute -right-7 -top-10 text-9xl text-slate-300/50 z-0">
          <CurrentPrefix />
        </h1>
        {/* prettier-ignore */}
        <div className={cn(sizeAndAlign, backgroundGradient, border, round, overflow)}>
          <div className="w-[90%] max-w-full md:px-24 lg:px-32 flex flex-col justify-items-center items-center">
            <Header />
            <div className="relative flex flex-col flex-grow w-full">
              {children}
              <Footer />
            </div>
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
      <GoogleAdsense />
    </html>
  )
}
