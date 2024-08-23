'use client'
import React from 'react'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import { ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type TocCompProps = {
  toc: Toc | null
  className?: string
}

const children = (node: Toc) => {
  return (
    <ul>
      {node.map((child) => {
        return (
          <li key={child.id} className="pl-4">
            <a href={`#${child.id}`} className="hover:text-sky-200">
              {child.value}
            </a>
            {child.children && children(child.children)}
          </li>
        )
      })}
    </ul>
  )
}

export function TocComp(props: TocCompProps) {
  const { toc, className } = props

  if (!toc) return

  return (
    <aside className={cn('not-prose', className)} id="toc-aside">
      <h2 className="text-lg font-bold mb-4">Table of Contents</h2>
      <nav className="overflow-y-scroll max-h-[439px]">{children(toc)}</nav>
    </aside>
  )
}

export function DropdownToc(props: TocCompProps) {
  const { toc, className } = props

  const [open, setOpen] = React.useState(false)
  React.useEffect(() => {
    const tocarrow = document.getElementById('tocarrow')
    if (!tocarrow) return
    tocarrow.style.transform = open ? 'rotate(180deg)' : 'rotate(0deg)'
  }, [open])

  if (!toc) return

  return (
    <aside className={cn('not-prose', className)} id="toc-aside">
      <div className="flex items-center gap-x-2">
        <h2 className="text-lg font-bold">Table of Contents</h2>
        <button
          onClick={() => setOpen(!open)}
          className="h-4 w-4 items-center grid"
        >
          <ArrowDown className="w-4 h-4 duration-150" id="tocarrow" />
        </button>
      </div>
      {open && (
        <nav className="overflow-y-scroll max-h-[439px]">{children(toc)}</nav>
      )}
    </aside>
  )
}
