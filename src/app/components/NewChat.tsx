"use client"
import { PlusIcon } from "@heroicons/react/24/solid"
import { db } from "./firebase";
import { useRouter } from "next/navigation";
import { getServerSession } from 'next-auth';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession, signOut } from "next-auth/react"

function NewChat() {

  const router = useRouter();
  const {data: session} = useSession();

  const createNewChat = async ()  => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),{
          userId: session?.user?.email!,
          createAt: serverTimestamp()
      }
    );
    router.push(`/chat/${doc.id}`)
  }

  return (
    <div onClick={createNewChat} className="border border-gray-700 newChat-row">
        <PlusIcon  className="h-4 w-4"/>
        <p>NewChat</p>
    </div>
  )
}

export default NewChat