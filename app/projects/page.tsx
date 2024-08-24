import React from 'react'
import { getProjects } from './projects'
import StandardCard from './Card'

export default async function Home() {
  let projects = getProjects()
  const className: string = 'p2 rouded-md'
  return (
    <>
      <div className="flex items-center my-5">
        <p className="flex justify-center">
          <img
            src="https://readme-typing-svg.herokuapp.com/?lines=Welcome+to+my+projects!&center=true&width=360&height=30"
            alt="Welcome to my projects!"
          />
        </p>
      </div>
      <div className="flex flex-col w-full">
        {projects.map((p, idx) => {
          return (
            <div key={idx}>
              <div className="p-4 w-full" key={idx}>
                <StandardCard
                  p={p}
                  className={className}
                  sourceFromGitHub={p.type}
                />
              </div>
              {idx < projects.length - 1 && <hr className="border-gray-800" />}
            </div>
          )
        })}
      </div>
    </>
  )
}
