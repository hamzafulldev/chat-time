"use client"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="text-5xl">Welcome to chat Time</div>
        <div>
          {JSON.stringify(session.data?.user)}
        </div>
        <button className="bg-white py-2 px-4 text-black rounded-lg" onClick={() => signIn()}>Sign In</button>
      </div>

    </div>
  );
}
