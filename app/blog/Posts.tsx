'use client'
import React from 'react'
import type { Post } from 'blog'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'
import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

function PostCard({ post }: { post: Post }) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={`/blog/${post.slug}`}
          className="text-blue-400 hover:text-blue-900"
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

function PostList({ posts, query }: { posts: Post[]; query: string }) {
  const filter = query != '' ? true : false
  const filterFunc = (post: Post) => {
    if (!filter) return true
    if (post.metadata.title.toLowerCase().includes(query.toLowerCase())) {
      return true
    }
    if (post.metadata.summary.toLowerCase().includes(query.toLowerCase())) {
      return true
    }
    return false
  }
  return (
    <div className="mx-auto max-w-xl py-8">
      {posts.filter(filterFunc).map((post, idx) => (
        <PostCard key={idx} post={post} />
      ))}
    </div>
  )
}

export function Posts({ posts }: { posts: Post[] }) {
  const [showInput, setShowInput] = React.useState<boolean>(false)
  const [query, setQuery] = React.useState<string>('')
  const toggle = () => {
    setShowInput(showInput ? false : true)
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <h1 className="p-8 text-center text-2xl text-white sticky top-0">
          Welcome to my blog
        </h1>
        <Button variant="ghost" size="icon" onClick={() => toggle()}>
          <Search className="w-4 h-4" />
        </Button>
        {showInput && (
          <input
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            className="max-w-xs bg-secondary rounded-md focus:outline-none p-1"
          />
        )}
      </div>
      <div className="flex flex-col bottom-0 py-8 h-[calc(100%-6rem)] items-center overflow-y-scroll">
        <PostList posts={posts} query={query} />
      </div>
    </>
  )
}
