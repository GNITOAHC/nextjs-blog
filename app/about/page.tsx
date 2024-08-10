import React from 'react'
import CustomMDX from '../components/CustomMDX'
// prettier-ignore
// import {Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineContent, TimelineDescription, TimelineTitle, TimelineTime, TimelineIcon} from '@/components/ui/Timeline'

/*
 * _e.g._: export const data = [[ '2023-01-01', 'Title', 'Description' ], [ '2023-01-02', 'Title', 'Description' ]]
 * <TimelineComp data={{ list: data }} />
 */
// const TimelineComp = ({ data }: { data: { list: string[][] } }) => {
//   return (
//     <>
//       <br />
//       <Timeline className="not-prose">
//         {data.list.map((item, idx) => {
//           return (
//             <TimelineItem key={idx}>
//               {idx + 1 != data.list.length && <TimelineConnector />}
//               <TimelineHeader>
//                 <TimelineTime>{item[0]}</TimelineTime>
//                 <TimelineIcon />
//                 <TimelineTitle>{item[1]}</TimelineTitle>
//               </TimelineHeader>
//               <TimelineContent>
//                 <TimelineDescription>{item[2]}</TimelineDescription>
//               </TimelineContent>
//             </TimelineItem>
//           )
//         })}
//       </Timeline>
//     </>
//   )
// }

export default async function Page() {
  const data = await fetch(
    'https://raw.githubusercontent.com/GNITOAHC/GNITOAHC/main/README.md'
  )
  const content = await data.text()

  return (
    <div className="flex-1 w-full prose">
      <div className="w-full flex justify-center">
        <a href="/resume.pdf" className="underline">v Download CV here v</a>
      </div>
      <CustomMDX source={content} />
    </div>
  )
}
