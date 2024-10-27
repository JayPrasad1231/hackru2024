'use client'

import { useRouter } from "next/navigation";



export default function Ev() {
  const router = useRouter()
  
  return (
    <div>
      <button className="p-6" onClick={() => router.push('/')}>Is what water wet?</button>
      <div className="flex items-center justify-center min-h-screen bg-blue-700">
        <h1 className="text-2xl font-bold">Welcome to the EV Page!</h1>
      </div>
    </div>
  );
}