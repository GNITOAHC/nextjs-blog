'use client'
import { useEffect, use } from 'react'
import { useRouter } from 'next/navigation'

// prettier-ignore
export default function RedirectToPost(props: { params: Promise<{ slug: string }> }) {
  const params = use(props.params);
  const { push } = useRouter()

  useEffect(() => {
    push(`/posts/${params.slug}`)
  }, [])

  return <p></p>
}
