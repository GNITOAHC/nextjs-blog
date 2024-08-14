'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeIcon({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const matchMedia = window.matchMedia('(prefers-color-scheme: dark)')
    const prefersDarkMode = matchMedia.matches

    if (prefersDarkMode) setTheme('dark')
    else setTheme('light')

    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (theme == 'dark') {
    return (
      <button onClick={() => setTheme('light')}>
        <Moon className={className} />
      </button>
    )
  }
  return (
    <button onClick={() => setTheme('dark')}>
      <Sun className={className} />
    </button>
  )
}
