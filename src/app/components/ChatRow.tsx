import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline'
import { collection, deleteDoc, doc, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from './firebase'

type Props ={
    id: string
}
function ChatRow({id }: Props) {
    const pathName = usePathname()
    const router = useRouter()
    const [active, setActive] = useState(false)
    const {data: session} = useSession()
    const [messages] = useCollection(query(
        collection(db,"users", session?.user?.email!,'chats',id,'messages'),
        orderBy('createdAt','asc')
    ))
    const deleteChat = async () => {
        await deleteDoc(doc(db, "users",session?.user?.email!,'chats',id))
        router.replace('/')
    }
    useEffect(() => {
        if(!pathName) return;
        setActive(pathName.includes(id))

    },[pathName])
  return (
    <Link href={`/chat/${id}`} className={`newChat-row justify-center ${active && 'bg-gray-700/50'}`}>
        <ChatBubbleLeftIcon className='h-5 w-5' />
        <p className='flex-1 hideen md:inline-flex truncate'>{messages?.docs[messages?.docs.length - 1]?.data().text || "New Chat"}</p>
        <TrashIcon className='h-5 w-5 text-gray-700 hover:text-red-700' onClick={deleteChat} />
    </Link>
  )
}

export default ChatRow