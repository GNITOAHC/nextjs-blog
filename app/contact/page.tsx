import React from 'react'
import DetailPage from '../components/DetailPage'

function LinkBox({ url, display }: { url: string; display: string }) {
  return (
    <div className="border border-gray-200 rounded-md p-3">
      <a href={url} target="_blank" rel="noopener noreferrer">
        {display}
      </a>
    </div>
  )
}

export default function Home() {
  return (
    <DetailPage pageName="CONTACT ME">
      <div className="flex flex-col justify-center items-center h-full">
        <section className="flex flex-col">
          <div>
            LinkedIn
            <LinkBox
              url={'https://www.linkedin.com/in/chaoting-chen/'}
              display={'www.linkedin.com/in/chaoting-chen/'}
            />
          </div>
          <div>
            GitHub
            <LinkBox
              url={'https://github.com/gnitoahc'}
              display={'github.com/gnitoahc'}
            />
          </div>
          <div>
            Mail
            <LinkBox
              url={'mailto:chaotingchen10@gmail.com'}
              display={'chaotingchen10@gmail.com'}
            />
          </div>
        </section>
      </div>
    </DetailPage>
  )
}
