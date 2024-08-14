'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

type ThemeCompProps = {
  children: React.ReactNode
  theme: string
}

export function ThemeComp(props: ThemeCompProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  if (resolvedTheme === props.theme) {
    return <>{props.children}</>
  }

  return null
}
