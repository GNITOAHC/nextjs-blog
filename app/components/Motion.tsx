'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Motion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  React.useEffect(() => {
    const bgBlue1 = document.getElementById('bgblue1')
    if (!bgBlue1) return
    if (pathname === '/') {
      bgBlue1.style.top = '-5%'
      bgBlue1.style.left = '-10%'
    } else if (pathname.startsWith('/blog/') || pathname.startsWith('/about')) {
      bgBlue1.style.top = '-150%'
      bgBlue1.style.left = '-150%'
    } else {
      bgBlue1.style.top = '70%'
      bgBlue1.style.left = '-10%'
    }

    const bgYellow1 = document.getElementById('bgyellow1')
    if (!bgYellow1) return
    if (pathname === '/') {
      bgYellow1.style.top = '-150%'
      bgYellow1.style.right = '-150%'
    } else if (pathname.startsWith('/blog/') || pathname.startsWith('/about')) {
      bgYellow1.style.top = '-150%'
      bgYellow1.style.right = '-150%'
    } else {
      bgYellow1.style.top = '-45%'
      bgYellow1.style.right = '-45%'
    }

    const bgPink1 = document.getElementById('bgpink1')
    if (!bgPink1) return
    if (pathname === '/') {
      bgPink1.style.top = '-150%'
      bgPink1.style.right = '-150%'
    } else if (pathname.startsWith('/blog/') || pathname.startsWith('/about')) {
      bgPink1.style.top = '-35%'
      bgPink1.style.right = '-35%'
    } else {
      bgPink1.style.top = '-150%'
      bgPink1.style.right = '-150%'
    }
  }, [pathname])

  return (
    <div className="overflow-x-clip overflow-y-hidden relative h-[100dvh] font-mono">
      <div
        id="bgblue1"
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
        className="absolute -top-[5%] -left-[10%] ease-in-out duration-500"
      />

      <div
        id="bgyellow1"
        style={{
          width: 686,
          height: 686,
          transform: 'rotate(41.03deg)',
          transformOrigin: '0 0',
          background:
            'linear-gradient(162deg, #EAFFDD 0%, rgba(254.79, 227.61, 84.93, 0.94) 55%, rgba(255, 100.30, 34, 0.94) 100%)',
          boxShadow: '0px 10px 180px #E1CDFA',
          borderRadius: 9999,
        }}
        className="absolute -top-[150%] -right-[150%] ease-in-out duration-500"
      />

      <div
        id="bgpink1"
        style={{
          width: 513.14,
          height: 513.14,
          transform: 'rotate(41.03deg)',
          transformOrigin: '0 0',
          background:
            'linear-gradient(162deg, #B2CDA1 0%, #F0C2C2 0%, rgba(222.49, 171.87, 193.13, 0.94) 55%, rgba(185.05, 133.32, 189.55, 0.94) 100%)',
          boxShadow: '0px 10px 180px #E1CDFA',
          borderRadius: 9999,
        }}
        className="absolute -top-[150%] -right-[150%] ease-in-out duration-500"
      />

      {children}
    </div>
  )
}
