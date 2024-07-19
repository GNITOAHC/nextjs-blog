import React from 'react'
import * as runtime from 'react/jsx-runtime'
import { evaluate, type EvaluateOptions } from '@mdx-js/mdx'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import Image from 'next/image'
let parse = require('ascii-math')
let hljsCurl = require('highlightjs-curl')

function Code({ children, ...props }: any) {
  hljs.registerLanguage('curl', hljsCurl)
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

type TableData = {
  headers: string[]
  rows: string[][]
}
function Table({ data }: { data: TableData }) {
  const detectCode = (str: string) => {
    const regex = /`([^`]+)`/g
    const match = regex.exec(str)
    return match ? <Code>{str.replaceAll('`', '')}</Code> : str
  }

  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex: number) => (
        <td key={cellIndex}>{detectCode(cell)}</td>
      ))}
    </tr>
  ))

  return (
    <div className="w-full overflow-y-scroll">
      <table className="w-full">
        <thead>
          <tr>{headers}</tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

const components = {
  code: Code,
  Image: (props: any) => (
    <div style={{ position: 'relative', height: props.height }}>
      <Image
        src={props.src}
        alt={props.alt}
        fill
        style={{
          objectFit: 'contain', // cover, contain, none
        }}
        className={`p-0 m-0 ${props.className ?? ''}`}
      />
    </div>
  ),
  a: ({ children, href }: any) => {
    return (
      <a
        href={href}
        className="hover:text-sky-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  },
  Table: Table,
  Math: (props: any) => {
    const str = parse(props.children).toString()
    return (
      <>
        <br />
        <span
          className="text-center block"
          dangerouslySetInnerHTML={{
            __html: str,
          }}
        />
        <br />
      </>
    )
  },
  Inline: (props: any) => {
    const str = parse(props.children).toString()
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: str,
        }}
      />
    )
  },
}

export default async function CustomMDX(props: {
  source: string
  components?: any
}) {
  // Run the compiled code
  const { default: MDXContent } = await evaluate(props.source, {
    ...(runtime as EvaluateOptions),
  })

  return (
    <MDXContent components={{ ...components, ...(props.components || {}) }} />
  )
}
