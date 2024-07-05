import React from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
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
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
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
  return (
    <MDXRemote
      source={props.source}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}
