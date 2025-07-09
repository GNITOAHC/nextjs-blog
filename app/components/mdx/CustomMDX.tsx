import React from 'react'
import * as runtime from 'react/jsx-runtime'
import { evaluate, type EvaluateOptions } from '@mdx-js/mdx'
import remarkGfm from 'remark-gfm' // GitHub Flavored Markdown (tables, strikethrough, etc.)
import remarkMath from 'remark-math' // Turn $$ into math tag
import rehypeKatex from 'rehype-katex' // Render math tag
import withSlugs from 'rehype-slug'
import { components } from './mdxcomp'

export async function CustomMDX(props: { source: string; components?: any }) {
  // Run the compiled code
  const { default: MDXContent } = await evaluate(props.source, {
    ...(runtime as EvaluateOptions),
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [rehypeKatex, withSlugs],
  })

  return (
    <MDXContent components={{ ...components, ...(props.components || {}) }} />
  )
}
