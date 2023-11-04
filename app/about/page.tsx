import React from 'react'
import DetailPage from '../components/DetailPage'

export default function Home() {
  return (
    <DetailPage pageName="ABOUT ME">
      <div className="flex flex-col justify-center items-center h-full">
        Coming soon ...
        <a href="/resume.pdf" download="resume.pdf" className="underline text-white">
          v Download CV first v
        </a>
      </div>
    </DetailPage>
  )
}
