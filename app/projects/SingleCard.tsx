import React from 'react'
import Link from 'next/link'
import { ExternalLinkIcon } from 'lucide-react'
import { getColor } from './projects'

type Props = {
  title: string
  description: string
  url: string
  content: React.ReactNode
  className: string
  topics: string[]
  languages: string[]
}

export default function SingleCard(prop: Props) {
  return (
    <article className={prop.className}>
      <div>
        <Link href={prop.url} className="flex flex-row items-center">
          {prop.title}
          &nbsp;
          <ExternalLinkIcon className="h-4 w-4" />
        </Link>
        {/* <div className="my-2 text-sm text-secondary-foreground">{prop.description}</div> */}
      </div>
      <div>
        <div className="my-2 text-sm">{prop.content}</div>
        <div className="flex flex-wrap">
          {prop.topics &&
            prop.topics.map((t: any, idx: any) => {
              return (
                <span
                  className="rounded-md bg-accent/30 text-accent-foreground w-max mr-2 p-[2px] text-xs"
                  key={idx}
                >
                  {t}
                </span>
              )
            })}
        </div>
      </div>
      <div>
        {prop.languages &&
          prop.languages.map((lang, idx) => {
            const langColor = getColor(lang)
            return (
              <span key={idx} className="mr-2">
                <span
                  className={`h-3 w-3 border inline-block relative rounded-lg ${langColor}`}
                />{' '}
                <span>{lang}</span>
              </span>
            )
          })}
      </div>
    </article>
  )
}
