import type { Metadata } from 'next'
import DetailPage from '../components/DetailPage'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my thoughts on software development, design, and more.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DetailPage pageName="BLOG">{children}</DetailPage>
}
