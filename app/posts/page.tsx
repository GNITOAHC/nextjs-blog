import React from 'react'
import { Posts } from './Posts'
import { getPosts } from '@/lib/db/posts'
import { compareDesc } from '@/lib/utils'

export default function Home() {
  const posts = getPosts().sort((a, b) =>
    compareDesc(
      new Date(a.metadata.lastEdit ?? a.metadata.date),
      new Date(b.metadata.lastEdit ?? b.metadata.date)
    )
  )

  return (
    <main className="h-full flex flex-col items-center">
      <h1 className="sticky top-0 text-2xl py-8">Welcome to my blog posts</h1>
      <Posts posts={posts} />
    </main>
  )
}
