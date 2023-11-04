import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Card() {
  return (
    <div className="flex flex-col h-full text-white p-8 justify-around">
      <section className="flex flex-col lg:flex-row justify-center items-center gap-6">
        <Image
          src="/me.jpg"
          alt="me"
          width={150}
          height={150}
          priority={true}
          className="rounded-full h-25 w-25"
        />
        <p className="text-2xl lg:text-4xl">Tim Chen</p>
      </section>
      <section className="flex flex-col items-end">
        <p className="text-xl sm:text-2xl lg:text-3xl">
          National ChengChi University
        </p>
        <p className="text-xl sm:text-2xl lg:text-3xl">Computer Science</p>
      </section>
    </div>
  )
}

export default function Home() {
  return (
    <main className="p-5 h-full">
      <div className="glass-background">
        <div className="mx-[10%] mt-[5%] w-[80%] md:w-[50%] h-min-[50%] max-h-fit bg-white/10 rounded-3xl border-2 border-indigo-50 backdrop-blur">
          <Card />
        </div>

        <div className="h-[10%]" />

        <section className="flex flex-col justify-center gap-4 text-white items-center top-[50%] md:flex-row">
          <Link
            href="/about"
            className="homepage-links bg-gradient-to-bl from-[#178F47] to-[#DFDB77]"
          >
            ABOUT ME
          </Link>
          <Link
            href="/projects"
            className="homepage-links bg-gradient-to-b from-[#379CF8] to-[#FF97CF]"
          >
            PROJECTS
          </Link>
          <Link
            href="/blog"
            className="homepage-links bg-gradient-to-r from-[#F47E11] to-[#F42424]"
          >
            BLOG
          </Link>
          <Link
            href="/contact"
            className="homepage-links bg-gradient-to-bl from-[#59847E] to-[#ADD8F7]"
          >
            CONTACT ME
          </Link>
        </section>
      </div>
    </main>
  )
}
