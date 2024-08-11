import React from 'react'
import { notFound } from 'next/navigation'
import CustomMDX from '@/app/components/CustomMDX'
import { getPosts } from '@/lib/db/posts'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) return

  return {
    title: `${post.metadata.title} | Tim Chen`,
    description: post.metadata.summary,
  }
}

import { formatDate } from '@/lib/utils'
export default function Page({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto w-full py-8 h-full overflow-y-scroll overflow-x-scroll font-sans">
      <div className="mb-8 text-center">
        <time
          dateTime={post.metadata.lastEdit ?? post.metadata.date}
          className="mb-1 text-xs"
        >
          {formatDate(post.metadata.lastEdit ?? post.metadata.date)}
        </time>
        <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
      </div>
      <div className="prose">
        <CustomMDX source={post.content} />
      </div>
    </article>
  )
}
