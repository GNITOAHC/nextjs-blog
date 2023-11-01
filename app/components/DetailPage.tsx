import React from 'react'

export default function DetailPage({
  pageName,
  children,
}: {
  pageName: string
  children: React.ReactNode
}) {
  return (
    <main className="p-5 h-full">
      <div className="h-full w-full rounded-3xl backdrop-blur-3xl overflow-visible">
        <h1 className="m-0 p-0 absolute -right-2 -top-6 text-9xl text-slate-300 z-0">
          {pageName}
        </h1>
        <div className="absolute left-5 top-5 bg-white/50 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-3xl border-white border-solid border-[1px]">
          {children}
        </div>
      </div>
    </main>
  )
}
