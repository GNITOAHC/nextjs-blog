'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Menu } from 'lucide-react'
import Link from 'next/link'

export function Dropdown({ className }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div ref={dropdownRef}>
      <button className={className} onClick={() => setIsOpen(!isOpen)}>
        <Menu className="w-4 h-4" />
      </button>
      {isOpen && (
        <div className="fixed md:hidden rounded-md m-0 mt-2 p-0 right-2 w-fit bg-neutral-100/60 z-10">
          <ul className="flex space-y-2 flex-col items-end w-full px-6 py-1 mx-auto overflow-visible list-none text-left">
            {['posts', 'projects', 'about'].map((item: string) => {
              return (
                <li className="mt-1" key={item}>
                  <Link
                    className="flex items-center text-gray-500 hover:text-sky-50"
                    href={`/${item}/`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
