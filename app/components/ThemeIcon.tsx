'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeIcon({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
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
