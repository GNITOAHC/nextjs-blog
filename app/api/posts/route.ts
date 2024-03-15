import { NextResponse } from 'next/server'
import { getBlogPosts } from '@/lib/db/blog'
import { compareDesc } from 'date-fns'

export async function GET() {
  const posts = getBlogPosts().sort((a, b) =>
    compareDesc(
      new Date(a.metadata.lastEdit ?? a.metadata.date),
      new Date(b.metadata.lastEdit ?? b.metadata.date)
    )
  )
  return NextResponse.json(posts)
}
