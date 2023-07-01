import React from 'react'
import { BeakerIcon, BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/solid'

export default function HomePage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center px-2 h-screen text-white'>
        <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
        <div className='flex text-center space-x-2'>
            <div>
            <div className='flex flex-col items-center justify-center mb-5'>
              <SunIcon className="h-8 w-8" />
              <h2 className="d">Examples</h2>
            </div>
            <div className='space-y-2'>
                <p className='infoText'>Explain quantum computing in simple terms</p>
                <p className='infoText'>Got any creative ideas for a 10 year old’s birthday?</p>
                <p className='infoText'>How do I make an HTTP request in Javascript?</p>
            </div>
            </div>
            
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                <BoltIcon className="h-8 w-8" />
                <h2 className="d">Capabilities</h2>
              </div>
              <div className='space-y-2'>
                  <p className='infoText'>Remembers what user said earlier in the conversation</p>
                  <p className='infoText'>Allows user to provide follow-up corrections</p>
                  <p className='infoText'>Trained to decline inappropriate requests</p>
              </div>
            </div>
            <div>
              <div className='flex flex-col items-center justify-center mb-5'>
                <ExclamationTriangleIcon className="h-8 w-8" />
                <h2 className="d">Limitations</h2>
              </div>
              <div className='space-y-2'>
                  <p className='infoText'>May occasionally generate incorrect information</p>
                  <p className='infoText'>May occasionally produce harmful instructions or biased content</p>
                  <p className='infoText'>Limited knowledge of world and events after 2021</p>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}
