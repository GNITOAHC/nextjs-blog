import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="p-5 h-full">
      <div className="glass-background">
        <div className="ml-[10%] mt-[5%] w-[50%] h-[50%] max-h-96 bg-white/10 rounded-3xl border-2 border-indigo-50 backdrop-blur">
          Tim Chen
        </div>

        <div className="h-[5%]" />

        <section className="flex flex-col justify-center gap-4 text-white items-center top-[50%] md:flex-row">
          {[
            ['ABOUT ME', '/about'],
            ['PROJECTS', '/projects'],
            ['BLOG', '/blog'],
            ['CONTACT ME', '/contact'],
          ].map(([text, href]) => (
            <Link
              key={text}
              href={href}
              className="text-4xl font-bold hover:underline"
            >
              {text}
            </Link>
          ))}
        </section>
      </div>
    </main>
  )
}
