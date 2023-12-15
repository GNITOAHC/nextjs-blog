import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { getBlogPosts } from '@/lib/db/blog'
import type { Post } from 'blog'
import React from 'react'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.metadata.title}
        </Link>
      </h2>
      <time
        dateTime={post.metadata.lastEdit ?? post.metadata.date}
        className="mb-2 block text-xs text-white"
      >
        {format(
          parseISO(post.metadata.lastEdit ?? post.metadata.date),
          'LLLL d, yyyy'
        )}
      </time>
      <div className="text-sm mb-3">{post.metadata.summary}</div>
    </div>
  )
}

function PostList() {
  const posts = getBlogPosts().sort((a, b) =>
    compareDesc(
      new Date(a.metadata.lastEdit ?? a.metadata.date),
      new Date(b.metadata.lastEdit ?? b.metadata.date)
    )
  )

  return (
    <div className="mx-auto max-w-xl py-8">
      {/* <h1 className="mb-8 text-center text-2xl font-black"> */}
      {/*   Next.js + Contentlayer Example */}
      {/* </h1> */}
      {posts.map((post, idx) => (
        <PostCard key={idx} {...post} />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="h-full relative overflow-y-hidden">
      <h1 className="p-8 text-center text-2xl text-white sticky top-0">
        Welcome to my blog
      </h1>
      <div className="flex flex-col bottom-0 py-8 h-[calc(100%-6rem)] items-center overflow-y-scroll">
        <PostList />
      </div>
    </main>
  )
}
