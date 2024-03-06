import fs from 'fs'
import path from 'path'

function getFile(dir: string, fileName: string): string {
  return fs
    .readdirSync(dir)
    .filter((file) => path.basename(file) === fileName)[0]
}

function getContent(filePath: string): string {
  return fs.readFileSync(filePath, 'utf-8')
}

export function aboutmeContent(): string {
  const dir = path.join(process.cwd(), 'app', 'about')
  let mdxFile = getFile(dir, 'readme.mdx')
  let content = getContent(path.join(dir, mdxFile))
  // console.log(content)
  return content
}
