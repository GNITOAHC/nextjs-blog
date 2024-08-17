'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RedirectToPost() {
  const { push } = useRouter()

  useEffect(() => {
    push('/posts')
  }, [])

  return <p></p>
}
