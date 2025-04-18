import React from 'react'
import { ThemeIcon } from './ThemeIcon'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { Dropdown } from './header/dropdown'

function NavItem({
  title,
  url,
  className,
}: {
  title: string
  url: string
  className?: string
}) {
  return (
    <Link
      href={url}
      className={cn(
        'flex items-center text-foreground hover:scale-110 duration-300',
        className
      )}
    >
      <p className="text-base font-medium" title={title}>
        {title}
      </p>
    </Link>
  )
}

export function Header() {
  return (
    <div className="px-0 py-1 m-0 mb-4 w-full flex items-center justify-between md:justify-start">
      <div className="w-full flex flex-1 items-center justify-between space-x-3">
        <nav className="flex space-x-3">
          <Link
            href="/"
            className="text-base font-medium text-foreground hover:text-accent"
          >
            ChaoTing
          </Link>
        </nav>

        <nav className="hidden md:flex items-center space-x-5 md:ml-12 h-12">
          <NavItem
            title="Posts"
            url="/posts/"
            className="bg-linear-to-bl bg-clip-text hover:text-transparent from-[#178F47] to-[#DFDB77]"
          />
          <NavItem
            title="Projects"
            url="/projects/"
            className="bg-linear-to-bl bg-clip-text hover:text-transparent from-[#379CF8] to-[#FF97CF]"
          />
          <NavItem
            title="About"
            url="/about/"
            className="bg-linear-to-bl bg-clip-text hover:text-transparent from-[#F47E11] to-[#F42424]"
          />

          <div className="w-4 h-4 items-center grid">
            <ThemeIcon className="w-4 h-4" />
          </div>
        </nav>
      </div>

      <nav className="flex md:hidden items-center md:ml-12 h-12 space-x-3">
        <div className="w-4 h-4 items-center grid">
          <ThemeIcon className="w-4 h-4" />
        </div>
        <Dropdown className="w-4 h-4 items-center grid" />
      </nav>
    </div>
  )
}

// bg-neutral-100/50
