import React from 'react'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import CustomMDX from '@/app/components/CustomMDX'
import { getBlogPosts } from '@/lib/db/blog'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) return

  return {
    title: `${post.metadata.title} | Tim Chen`,
    description: post.metadata.summary,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-fit py-8 h-full overflow-y-scroll overflow-x-scroll font-sans prose prose-invert">
      <div className="mb-8 text-center">
        <time
          dateTime={post.metadata.lastEdit ?? post.metadata.date}
          className="mb-1 text-xs text-sky-50"
        >
          {format(
            parseISO(post.metadata.lastEdit ?? post.metadata.date),
            'LLLL d, yyyy'
          )}
        </time>
        <h1 className="text-3xl font-bold text-white">{post.metadata.title}</h1>
      </div>
      <CustomMDX source={post.content} />
    </article>
  )
}
