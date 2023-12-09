declare module 'blog' {
  export interface Post {
    metadata: Metadata
    slug: string
    content: string
  }

  export interface Metadata {
    title: string
    date: string
    lastEdit: string
    summary: string
  }
}
