// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (content) => `/blog/${content._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'css-variables',
          /* theme: 'github-dark', */
          keepBackground: true,
          /* onVisitLine(node) { */
          /*   // Prevent lines from collapsing in `display: grid` mode, and allow empty */
          /*   // lines to be copy/pasted */
          /*   if (node.children.length === 0) { */
          /*     node.children = [{ type: 'text', value: ' ' }]; */
          /*   } */
          /* }, */
          /* onVisitHighlightedLine(node) { */
          /*   node.properties.className.push('line--highlighted'); */
          /* }, */
          /* onVisitHighlightedWord(node) { */
          /*   node.properties.className = ['word--highlighted']; */
          /* }, */
        },
      ],
    ],
  },
})
