'use client'

import React from 'react'
import { cn } from '@/lib/utils'

export default function DetailPage({
  pageName,
  children,
  className,
}: {
  pageName: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <main className="p-2 h-full">
      <div className="h-full w-full rounded-3xl backdrop-blur-3xl overflow-visible">
        <h1 className="m-0 p-0 absolute -right-7 -top-10 text-9xl text-slate-300 z-0">
          {pageName}
        </h1>
        <div className=" bg-white/20 h-full w-full relative rounded-3xl border-white border-solid border-[1px] overflow-y-hidden">
          <button
            onClick={() => history.back()}
            className="absolute p-5 float-left hidden sm:block"
          >
            {'<'}
          </button>
          <div className={cn('h-full w-full px-8', className)}>{children}</div>
        </div>
      </div>
    </main>
  )
}
