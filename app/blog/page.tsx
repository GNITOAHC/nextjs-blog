import Link from 'next/link'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts, Post } from 'contentlayer/generated'
import React from 'react'

function PostCard(post: Post) {
  return (
    <div className="mb-8">
      <h2 className="mb-1 text-xl">
        <Link
          href={post.url}
          className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
        >
          {post.title}
        </Link>
      </h2>
      <time dateTime={post.date} className="mb-2 block text-xs text-white">
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
      <div className="text-sm mb-3">{post.summary}</div>
      {/* <div */}
      {/*   className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0" */}
      {/*   dangerouslySetInnerHTML={{ __html: post.body.html }} */}
      {/* /> */}
    </div>
  )
}

function PostList() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
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
