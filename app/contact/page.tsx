'use client'
import React from 'react'
import DetailPage from '../components/DetailPage'
import emailjs from '@emailjs/browser'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

async function sendMail(textMessage: string) {
  if (textMessage === '') {
    window.alert('Please leave some comments')
    return
  }
  const promptValue = window.prompt(
    'Do you want to leave your email ? (or empty to continue)'
  )

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    console.log(
      'emailjs error: either SERVICE_ID, TEMPLATE_ID or PUBLIC_KEY is not set.'
    )
    return
  }

  try {
    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      { message: textMessage, from: promptValue },
      PUBLIC_KEY
    )
  } catch (err) {
    console.log('emailjs error: ', err)
  }

  window.alert('Sended')
}

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
  const [textMessage, setTextMessage] = React.useState('')
  return (
    <DetailPage pageName="CONTACT ME">
      <div className="flex flex-col justify-center items-center h-full relative gap-y-[15%]">
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
        <section className="flex flex-col md:flex-row w-[70%] max-h-[30%] justify-center items-center">
          <div className="flex w-full overflow-y-scroll bg-opacity-90 rounded-3xl shadow backdrop-blur-lg justify-between px-4">
            <textarea
              /* type="text" */
              onChange={(event) => setTextMessage(event.target.value)}
              value={textMessage}
              placeholder="Email me directly"
              className="min-w-[97%] max-w-fit h-10 max-h-28 min-h-[2.5rem] bg-transparent p-2"
            />
            <button
              onClick={() => {
                sendMail(textMessage)
                setTextMessage('')
              }}
            >
              {'>'}
            </button>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          textarea:focus {
            outline: none;
          }
        `}
      </style>
    </DetailPage>
  )
}
