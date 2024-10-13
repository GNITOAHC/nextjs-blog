import React from 'react'
import hljs from 'highlight.js'
let parse = require('ascii-math')
let hljsCurl = require('highlightjs-curl')

function Code({ children, ...props }: any) {
  hljs.registerLanguage('curl', hljsCurl)
  const lang = props.className?.replace('language-', '')

  if (!props.className) return <code>{children}</code>

  let code
  try {
    code = hljs.highlight(children, { language: lang }).value
  } catch (e) {
    return <code>{children}</code>
  }

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

export const components = {
  pre: (props: any) => {
    return (
      <pre className="text-sm">{props.children}</pre>
    )
  },
  code: Code,
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
  img: (props: any) => {
    return (
      <span className="w-full flex justify-center">
        <img
          src={props.src}
          alt={props.alt}
          title={props.title}
          className="max-w-full md:max-w-[80%] rounded"
        />
      </span>
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
