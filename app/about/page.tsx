import React from 'react'
import DetailPage from '../components/DetailPage'
import CustomMDX from '@/app/components/CustomMDX'
import { aboutmeContent } from './data'

export default function Home() {
  const content = aboutmeContent()

  return (
    <DetailPage pageName="ABOUT ME">
      <div className="flex flex-col justify-center items-center h-full w-full pb-8 pt-16">
        <div className="h-full min-w-[70%] prose prose-invert overflow-y-scroll">
          <CustomMDX source={content} />
        </div>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="underline text-white"
        >
          v Download CV here v
        </a>
      </div>
    </DetailPage>
  )
}
