import React from 'react'
import { Linkedin, Github, AtSign } from 'lucide-react'
import { ThemeComp } from '@/app/components/ThemeComp'

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full pb-8 pt-16">
      <h1 className="text-5xl">Chaoting</h1>
      <div className="flex mb-5 space-x-3">
        <a href="mailto:chaotingchen10@gmail.com">
          <AtSign />
        </a>
        <a href="https://github.com/gnitoahc">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/chaoting-chen">
          <Linkedin />
        </a>
      </div>
      <p className="w-full justify-start my-5">
        <ThemeComp theme="light">
          <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+chaoting.xyz!&center=true&width=360&height=30&color=0a173b" />
        </ThemeComp>
        <ThemeComp theme="dark">
          <img src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+chaoting.xyz!&center=true&width=360&height=30" />
        </ThemeComp>
      </p>
      <p>
        I’m a 21-year-old computer science student passionate about technology,
        programming, and innovation. Currently, I’m based in Taipei/Taiwan,
        where I’m pursuing my degree and exploring the vast world of software
        development.
      </p>
    </div>
  )
}
