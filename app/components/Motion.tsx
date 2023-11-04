'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import './motion.css'

export default function Motion({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  React.useEffect(() => {
    const bgBlue1 = document.getElementById('bgblue1')
    if (!bgBlue1) return
    if (pathname === '/') {
      bgBlue1.style.top = '-5%'
      bgBlue1.style.left = '-10%'
    } else {
      bgBlue1.style.top = '70%'
      bgBlue1.style.left = '-10%'
    }

    const bgYellow1 = document.getElementById('bgyellow1')
    if (!bgYellow1) return
    if (pathname === '/') {
      bgYellow1.style.top = '-150%'
      bgYellow1.style.right = '-150%'
    } else {
      bgYellow1.style.top = '-45%'
      bgYellow1.style.right = '-45%'
    }
  }, [pathname])

  return (
    <div className="overflow-x-clip overflow-y-hidden relative h-screen font-mono">
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
        className="absolute -top-[5%] -left-[10%] max-w-[100vw]"
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
        className={'absolute -top-[150%] -right-[150%]'}
      />

      {children}
    </div>
  )
}
