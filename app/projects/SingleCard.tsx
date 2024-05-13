import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
    <Card className={prop.className}>
      <CardHeader>
        <CardTitle className="">
          <Link href={prop.url} className="flex flex-row items-center">
            {prop.title}
            &nbsp;
            <ExternalLinkIcon className="h-4 w-4" />
          </Link>
        </CardTitle>
        <CardDescription>{prop.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-2 line-clamp-2 min-h-24 hover:line-clamp-none">
          {prop.content}
        </div>
        <div className="flex flex-wrap">
          {prop.topics &&
            prop.topics.map((t: any, idx: any) => {
              return (
                <span
                  className="rounded-lg bg-blue-900 w-max mr-2 p-1 text-xs"
                  key={idx}
                >
                  {t}
                </span>
              )
            })}
        </div>
      </CardContent>
      <CardFooter>
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
      </CardFooter>
    </Card>
  )
}
