// 'use client'
import React from 'react'
import type { ProjectType } from './projects'
// import { serialize } from 'next-mdx-remote/serialize'
// import { MDXRemote } from 'next-mdx-remote'
// import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import SingleCard from './SingleCard'
import { CustomMDX } from '@/app/components/mdx/CustomMDX'

type Props = {
  p: ProjectType
  className: string
}

export default function StandardCards({ p, className }: Props) {
  // const [serializedSource, setSerializedSource] =
  //   React.useState<
  //     MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>
  //   >()
  // React.useEffect(() => {
  //   const get = async () => {
  //     const serialized = await serialize(p.content, {
  //       mdxOptions: {
  //         development: process.env.NODE_ENV === 'development',
  //       },
  //     })
  //     setSerializedSource(serialized)
  //   }
  //   get()
  // }, [p.content])

  // const content = (
  //   <>
  //     <div className="prose prose-invert">
  //       {serializedSource && (
  //         <MDXRemote {...serializedSource} components={{}} />
  //       )}
  //     </div>
  //   </>
  // )

  const content = (
    <>
      <div className="prose prose-invert">
        <CustomMDX source={p.content} />
      </div>
    </>
  )

  return (
    <SingleCard
      title={p.title}
      description={p.description!}
      url={p.url}
      content={content}
      className={className}
      topics={p.topics!}
      languages={p.languages!}
    />
  )
}
