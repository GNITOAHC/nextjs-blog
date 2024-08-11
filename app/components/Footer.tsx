import React from 'react'

export function Footer() {
  return (
    <footer className="py-8">
      <nav className="mb-3">
        <a href="/tags" className="hover:text-accent">
          Tags
        </a>
      </nav>
      <div className="flex items-center justify-between">
        <span className="text-xs">© 2024 ChaoTing, Chen</span>
        <span className="text-xs">Powered by NextJs</span>
      </div>
    </footer>
  )
}
