"use client"
import { collection } from "firebase/firestore";
import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from "./firebase";
import ChatRow from "./ChatRow";
import { TrashIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  const {data: session} = useSession();
  const [chats, loading, error] = useCollection(
    session && collection(db, "users", session.user?.email!, "chats")
  )
  return (
    <div className="flex flex-col 2x h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                <div>
                    {/* model selection */}
                </div>
                {
                  chats?.docs.map(chat => (
                    <ChatRow key={chat.id} id={chat.id} />
                  ))
                }
            </div>
        </div>
        {session && (<img 
          src={session.user?.image!} 
          className="w-12 h-12 rounded-full mx-auto mb-2 hover:opacity-50 cursor-pointer"
          alt="profile"
          onClick={() => signOut()} 
           />)}
    </div>
  )
}

export default Sidebar