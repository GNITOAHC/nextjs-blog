'use client'
import React from 'react'
import emailjs from '@emailjs/browser'
import { SendHorizonal } from 'lucide-react'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY

async function sendMail(textMessage: string) {
  if (textMessage === '') {
    window.alert('Please leave some comments')
    return
  }
  const promptValue = window.prompt(
    'Leave your mail to get reply. (empty to continue)'
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

// function LinkBox({ url, display }: { url: string; display: string }) {
//   return (
//     <div className="border border-gray-200 rounded-md p-3">
//       <a href={url} target="_blank" rel="noopener noreferrer">
//         {display}
//       </a>
//     </div>
//   )
// }

export default function Home() {
  const [textMessage, setTextMessage] = React.useState('')
  return (
    <>
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex w-full bg-opacity-90 rounded-3xl shadow backdrop-blur-lg justify-between px-4">
          <textarea
            /* type="text" */
            onChange={(event) => setTextMessage(event.target.value)}
            value={textMessage}
            placeholder="Email me directly"
            className="w-[97%] h-36 md:h-24 min-h-[2.5rem] bg-transparent p-2"
          />
          <button
            onClick={() => {
              sendMail(textMessage)
              setTextMessage('')
            }}
          >
            <SendHorizonal className="w-4 h-4" />
          </button>
        </div>
      </div>
      <style jsx>
        {`
          textarea:focus {
            outline: none;
          }
        `}
      </style>
    </>
  )
}
