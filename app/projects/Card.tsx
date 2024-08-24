import React from 'react'
import type { ProjectType } from './projects'
import { getApiContent } from './projects'
import SingleCard from './SingleCard'
import { CustomMDX } from '@/app/components/mdx/CustomMDX'

type Props = {
  p: ProjectType
  className: string
  sourceFromGitHub: ProjectType['type']
}

export default async function StandardCards(props: Props) {
  const { p, className, sourceFromGitHub } = props

  let data = null
  if (sourceFromGitHub == 'GitHub') data = await getApiContent(p.api!)

  // console.log('Title: ', p.title, 'From GitHub: ', sourceFromGitHub)

  const desc = data != null ? data.description : p.description!
  const topics = data != null ? data.topics : p.topics!
  const languages = data != null ? [data.language] : p.languages!

  // console.log('Desc: ', desc, 'Topics: ', topics, 'Languages: ', languages)

  const content = (
    <>
      <div className="prose">
        <CustomMDX source={p.content} />
      </div>
    </>
  )

  return (
    <SingleCard
      title={p.title}
      description={desc}
      url={p.url}
      content={content}
      className={className}
      topics={topics}
      languages={languages}
    />
  )
}
