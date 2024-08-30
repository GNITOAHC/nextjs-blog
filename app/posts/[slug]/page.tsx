import React from 'react'
import { notFound } from 'next/navigation'
import { CustomMDX, getToc } from '@/app/components/mdx'
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
import { TocComp, DropdownToc } from './Toc'

export default async function Page({ params }: { params: { slug: string } }) {
  const post = getPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const toc = await getToc(post.content)

  return (
    <article className="mx-auto w-full py-8 h-full font-sans">
      <div className="mb-8 text-center">
        <time
          dateTime={post.metadata.lastEdit ?? post.metadata.date}
          className="mb-1 text-xs"
        >
          {formatDate(post.metadata.lastEdit ?? post.metadata.date)}
        </time>
        <h1 className="text-3xl font-bold">{post.metadata.title}</h1>
      </div>
      <div className="prose flex flex-col xl:flex-row-reverse gap-y-8 xl:gap-y-0 gap-x-8">
        <div className="hidden xl:block w-[20%]">
          <TocComp toc={toc} className="sticky top-5" />
        </div>
        <div className="xl:hidden block w-full">
          <DropdownToc toc={toc} className="sticky top-5" />
        </div>
        <div className="w-full xl:w-[80%]">
          <CustomMDX source={post.content} />
        </div>
      </div>
    </article>
  )
}
