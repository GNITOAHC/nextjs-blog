import React from 'react'
import { getPostsTags, getPosts } from '@/lib/db/posts'
import { cache } from 'react'
import TagsFilter from './TagsFilter'

const postsTags = cache(() => getPostsTags())
const allPosts = cache(() => getPosts())

export default function Page() {
  const tags = postsTags()
  const posts = allPosts()

  return (
    <div className="h-full flex flex-col items-center gap-y-4">
      <h2 className="text-2xl">Tags page</h2>
      <TagsFilter tags={tags} posts={posts} />
    </div>
  )
}
