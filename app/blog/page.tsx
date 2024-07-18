import React from 'react'
import { Posts } from './Posts'
import { getBlogPosts } from '@/lib/db/blog'
import { compareDesc } from 'date-fns'

export default function Home() {
  const posts = getBlogPosts().sort((a, b) =>
    compareDesc(
      new Date(a.metadata.lastEdit ?? a.metadata.date),
      new Date(b.metadata.lastEdit ?? b.metadata.date)
    )
  )

  return (
    <main className="h-full relative overflow-y-hidden">
      <Posts posts={posts} />
    </main>
  )
}
