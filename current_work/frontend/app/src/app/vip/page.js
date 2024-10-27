'use client'

import { useRouter } from "next/navigation";



export default function VIP() {
    const router = useRouter()
    
    return (
      <div className="bg-stone-900 shadow-2xl">
          <div className="flex items-center justify-between p-4">
              <button className="font-bold text-2xl text-red-400 rounded" onClick={() => router.push('/')}>Home</button>
              <button className="font-bold text-2xl text-red-400 rounded" onClick={() => router.push('/')}>Gambling Guru</button>
          </div>
        
        <div className="flex items-center justify-center min-h-screen bg-stone-800">
          <h1 className="text-2xl font-bold">Welcome to the VIP Page!</h1>
        </div>
      </div>
    );
}