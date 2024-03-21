import React from 'react'
import DetailPage from '../components/DetailPage'
import { getProjects, getApiContent } from './projects'
import type { ProjectType } from './projects'
import CustomMDX from '@/app/components/CustomMDX'
import StandardCard from './StandardCard'
import SingleCard from './SingleCard'

type Props = {
  p: ProjectType
  className: string
}

async function GitHubCard({ p, className }: Props) {
  const data = await getApiContent(p.api!)
  const content = (
    <div className="prose prose-invert">
      <CustomMDX source={p.content} />
    </div>
  )

  return (
    <SingleCard
      title={p.title}
      description={data.description}
      url={p.url}
      content={content}
      languages={[data.language]}
      topics={data.topics}
      className={className}
    />
  )
}

export default async function Home() {
  let projects = getProjects()
  return (
    <DetailPage pageName="PROJECTS" className="h-full overflow-auto">
      <div className="h-1/3 flex items-center">
        <p className="flex justify-center">
          <img
            src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+my+projects!&center=true&width=360&height=30"
            alt="Welcome to my projects!"
          />
        </p>
      </div>
      <div className="flex flex-wrap w-full">
        {projects.map((p, idx) => {
          return (
            <div className="p-4 w-full md:w-1/2" key={idx}>
              {p.type == 'GitHub' ? (
                <GitHubCard p={p} className="p2 border rounded-md" />
              ) : (
                <StandardCard p={p} className="p2 border rounded-md" />
              )}
            </div>
          )
        })}
      </div>
    </DetailPage>
  )
}
