import withSlugs from 'rehype-slug'
import withToc from '@stefanprobst/rehype-extract-toc'
import withTocExport from '@stefanprobst/rehype-extract-toc/mdx'
import { compile } from '@mdx-js/mdx'
import rehypeKatex from 'rehype-katex'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'

function logtoc(node: any) {
  const log = (node: any, idx: number) => {
    if (!node) return
    const indent = '  '.repeat(idx)
    node.forEach((n: any) => {
      if (!n.children) {
        console.log(indent, n.value, n.id)
      } else {
        console.log(indent, n.value, n.id)
        log(n.children, idx + 1)
      }
    })
  }
  log(node, 0)
}

function tocToList(node: any) {
  const list: { depth: number; id: string; value: string }[] = []
  const iter = (node: any, idx: number) => {
    if (!node) return
    node.forEach((n: any) => {
      if (!n.children) list.push({ depth: idx, id: n.id, value: n.value })
      else {
        list.push({ depth: idx, id: n.id, value: n.value })
        iter(n.children, idx + 1)
      }
    })
  }
  iter(node, 0)
  return list
}

export async function getToc(source: string) {
  const file = await compile(source, {
    rehypePlugins: [
      rehypeKatex,
      withSlugs,
      withToc,
      withTocExport,
      /** Optionally, provide a custom name for the export. */
      // [withTocExport, { name: 'toc' }],
    ],
    remarkPlugins: [remarkGfm, remarkMath],
  })

  if (!file.data.toc) return null
  // return tocToList(file.data.toc)
  return file.data.toc

  // console.log('file.data.toc: ')
  // if (!file.data.toc) {
  //   console.log(file.data.toc)
  // } else {
  //   logtoc(file.data.toc)
  // }

  // return file.data.toc
}
