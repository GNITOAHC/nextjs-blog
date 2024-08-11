'use client'
import { Post } from '@/lib/db/posts'
import React from 'react'

// prettier-ignore
const Month = [ '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ]
function formatDate(date: string) {
  const [year, month, day] = date.split('-')
  return `${Month[Number(month)]} ${Number(day)}, ${year}`
}

type PostCardProps = {
  selectedTag: Set<string>
  posts: Post[]
  query: string
}
function PostCard(props: PostCardProps) {
  const { selectedTag, posts, query } = props
  if (selectedTag.size == 0 && query == '') {
    return <></>
  }
  function filterFunc(post: Post): boolean {
    if (
      post.metadata.summary &&
      query &&
      post.metadata.summary.toLowerCase().includes(query.toLowerCase())
    ) {
      return true
    }
    for (const tag of Array.from(selectedTag)) {
      if (!post.metadata.tags) return false
      if (post.metadata.tags.includes(tag)) {
        return true
      }
    }
    return false
  }
  return (
    <div>
      {posts.filter(filterFunc).map((post, idx) => (
        <div key={idx}>
          <h2 className="mb-1 text-xl">
            <a
              href={`/posts/${post.slug}`}
              className="text-blue-400 hover:text-blue-900"
            >
              {post.metadata.title}
            </a>
          </h2>
          <time
            dateTime={post.metadata.lastEdit ?? post.metadata.date}
            className="mb-2 block text-xs text-foreground"
          >
            {formatDate(post.metadata.lastEdit ?? post.metadata.date)}
          </time>
          <div className="text-sm mb-3">{post.metadata.summary}</div>
        </div>
      ))}
    </div>
  )
}

type TagsFilterProps = {
  tags: string[]
  posts: Post[]
}
export default function TagsFilter(props: TagsFilterProps) {
  const { tags, posts } = props
  const [selectedTag, setSelectedTag] = React.useState<Set<string>>(new Set())
  const [notSelectedTag, setNotSelectedTag] = React.useState<Set<string>>(
    new Set(tags)
  )
  const [query, setQuery] = React.useState<string>('')

  function toggleTag(tag: string) {
    if (selectedTag.has(tag)) {
      selectedTag.delete(tag)
      setSelectedTag(new Set(selectedTag))
      notSelectedTag.add(tag)
      setNotSelectedTag(new Set(notSelectedTag))
    } else {
      selectedTag.add(tag)
      setSelectedTag(new Set(selectedTag))
      notSelectedTag.delete(tag)
      setNotSelectedTag(new Set(notSelectedTag))
    }
  }

  return (
    <div className="h-full w-full flex flex-col items-center">
      <input
        type="text"
        className="w-[80%] border-amber-400 border-2 rounded-md bg-transparent mb-4"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="w-full md:max-w-max grid grid-cols-3 md:grid-cols-4 items-center gap-3 mb-4">
        {Array.from(selectedTag).map((tag, idx) => {
          return (
            <button
              key={idx}
              onClick={() => toggleTag(tag)}
              className="bg-[#d6d6d6] text-black px-2 py-1 rounded"
            >
              {tag}
            </button>
          )
        })}
        {Array.from(notSelectedTag).map((tag, idx) => {
          return (
            <button
              key={idx}
              onClick={() => toggleTag(tag)}
              className="px-2 py-1 rounded"
            >
              {tag}
            </button>
          )
        })}
      </div>
      <div className="w-full">
        <PostCard selectedTag={selectedTag} posts={posts} query={query} />
      </div>
    </div>
  )
}
