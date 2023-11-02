// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string' },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (content) => `/blog/${content._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })
