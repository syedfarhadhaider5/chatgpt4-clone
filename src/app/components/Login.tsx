"use client"
import Image from 'next/image'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"


function Login() {
  return (
    <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center mb-3'>
        <Image 
            src={"https://uploads-ssl.webflow.com/621396eaae0610d2e24c450e/63d01548c5b3156b13a40e1f_ChatGPT-Feature-1200x900.png"}
            width={300}
            height={300}
            alt='logo'
        />
        <button className='text-white text-3xl animate-pulse' onClick={() => signIn('google')}>SignIn with Chatgpt</button>
    </div>
  )
}

export default Login