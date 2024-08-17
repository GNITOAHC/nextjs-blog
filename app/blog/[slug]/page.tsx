'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

// prettier-ignore
export default function RedirectToPost({ params, }: { params: { slug: string } }) {
  const { push } = useRouter()

  useEffect(() => {
    push(`/posts/${params.slug}`)
  }, [])

  return <p></p>
}
