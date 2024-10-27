'use client'

import { useRouter } from "next/navigation";



export default function Matched() {
  const router = useRouter()
  
  return (
    <div className="">
        <div className="flex items-center justify-between p-4">
            <button className="font-bold text-2xl text-red-400 rounded" onClick={() => router.push('/')}>Home</button>
            <button className="font-bold text-2xl text-red-400 rounded" onClick={() => router.push('/')}>Gambling Guru</button>
        </div>
      
      <div className="flex items-center justify-center min-h-screen bg-black">
        <h1 className="text-2xl font-bold">Welcome to the New Page!</h1>
      </div>
    </div>
  );
}