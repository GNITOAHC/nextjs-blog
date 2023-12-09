import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import Image from 'next/image'

function Code({ children, ...props }: any) {
  const lang = props.className?.replace('language-', '')

  if (!props.className) return <code>{children}</code>

  const code = hljs.highlight(children, { language: lang }).value

  return (
    <code
      {...props}
      dangerouslySetInnerHTML={{
        __html: code,
      }}
    />
  )
}

const components = {
  code: Code,
  Image: (props: any) => (
    <Image
      src={props.src}
      alt={props.alt}
      height={props.height ?? 200}
      width={props.width ?? 200}
      className={props.className}
    />
  ),
}

export default async function CustomMDX(props: {
  source: string
  components?: any
}) {
  return (
    <MDXRemote
      source={props.source}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
