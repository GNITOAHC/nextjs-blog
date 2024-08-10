import React from 'react'
import { ThemeIcon } from './ThemeIcon'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'

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
    <a
      href={url}
      className={cn(
        'flex items-center text-foreground hover:scale-110 duration-300',
        className
      )}
    >
      <p className="text-base font-medium" title={title}>
        {title}
      </p>
    </a>
  )
}

export function Header() {
  return (
    <div className="px-0 py-1 m-0 mb-4 w-full flex items-center justify-between md:justify-start">
      <div className="w-full flex flex-1 items-center justify-between space-x-3">
        <nav className="flex space-x-3">
          <a
            href="/"
            className="text-base font-medium text-foreground hover:text-gray-900"
          >
            ChaoTing
          </a>
        </nav>

        <nav className="hidden md:flex items-center space-x-5 md:ml-12 h-12">
          <NavItem
            title="Posts"
            url="/posts/"
            className="bg-gradient-to-bl bg-clip-text hover:text-transparent from-[#178F47] to-[#DFDB77]"
          />
          <NavItem
            title="Projects"
            url="/projects/"
            className="bg-gradient-to-bl bg-clip-text hover:text-transparent from-[#379CF8] to-[#FF97CF]"
          />
          <NavItem
            title="About"
            url="/about/"
            className="bg-gradient-to-bl bg-clip-text hover:text-transparent from-[#F47E11] to-[#F42424]"
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
        <div className="group/qq">
          <div className="w-4 h-4 items-center grid">
            <Menu className="w-4 h-4" />
          </div>
          <div className="fixed z-50 rounded-md group-hover/qq:visible invisible m-0 p-0 right-0 sm:right-[16%] w-fit overflow-auto transition-opacity cursor-default bg-neutral-100/50">
            <ul className="flex space-y-2 mt-2 flex-col items-end w-full px-6 py-1 mx-auto overflow-visible list-none text-left">
              <li className="mt-1">
                <a
                  className="flex items-center text-gray-500 hover:text-sky-50"
                  href="/posts/"
                >
                  Posts
                </a>
              </li>
              <li className="mt-1">
                <a
                  className="flex items-center text-gray-500 hover:text-sky-50"
                  href="/projects/"
                >
                  Projects
                </a>
              </li>
              <li className="mt-1">
                <a
                  className="flex items-center text-gray-500 hover:text-sky-50"
                  href="/resume/"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

// bg-neutral-100/50
