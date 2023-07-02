"use client"
import NewChat from "./NewChat"
import { useSession, signOut } from "next-auth/react"

function Sidebar() {
  const {data: session} = useSession();
  return (
    <div className="flex flex-col 2x h-screen">
        <div className="flex-1">
            <div>
                <NewChat />
                <div>
                    {/* model selection */}
                </div>
                {/* chat list */}
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