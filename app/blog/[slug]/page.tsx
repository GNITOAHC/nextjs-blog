import { allPosts } from 'contentlayer/generated'
import type { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './blog.css'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata | undefined> {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) return

  return {
    title: `${post.title} | Tim Chen`,
    description: post.summary,
  }
}
// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // Add a custom component.
  // MyComponent: () => <div>Hello World!</div>,
  // Image: () => <img src="/me.jpg" height={300} width={300} alt={"me"} className="rounded-full" />,
  Image: (props) => <Image {...props} />,
}

export default function Page({ params }: { params: { slug: string } }) {
  // Find the post for the current page.
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  // 404 if the post does not exist.
  if (!post) notFound()

  // Parse the MDX file via the useMDXComponent hook.
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <article className="mx-auto max-w-fit py-8 h-full overflow-y-scroll overflow-x-scroll font-sans">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-sky-50">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold text-white">{post.title}</h1>
      </div>
      {/* <div className="[&>*]:mb-3 [&>*:last-child]:mb-0" dangerouslySetInnerHTML={{ __html: post.body.html }} /> */}
      <MDXContent components={mdxComponents} />
    </article>
  )
}
