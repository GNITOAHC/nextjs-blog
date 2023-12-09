import fs from 'fs'
import path from 'path'
import type { Metadata, Post } from 'blog'

function getFiles(dir: string, fileType: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === fileType)
}

function parseMDXFrontmatter(fileContent: string) {
  // Regex to match frontmatter block
  const frontmatterRegex: RegExp = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  const frontMatterBlock = match![1]
  // Remove frontmatter block from file content
  const content = fileContent.replace(frontmatterRegex, '').trim()
  // Split frontmatter block into lines
  const frontMatterLines = frontMatterBlock.trim().split('\n')
  const metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes
    metadata[key.trim() as keyof Metadata] = value
  })

  return { metadata: metadata as Metadata, content }
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseMDXFrontmatter(rawContent)
}

function getMDXData(dir: string): Post[] {
  let mdxFiles = getFiles(dir, '.mdx')
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))
    return {
      metadata,
      slug,
      content,
    } as Post
  })
}

export function getBlogPosts(): Post[] {
  return getMDXData(path.join(process.cwd(), 'content'))
}
