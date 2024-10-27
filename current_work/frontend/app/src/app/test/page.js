'use client'

import { useRouter } from "next/router";

export default function Test() {
  const router = useRouter()
  
  return (
    <div>
      <button class="p-6" onClick={() => router.push('/')}>Is what water wet?</button>
      <div className="flex items-center justify-center min-h-screen bg-blue-700">
        <h1 className="text-2xl font-bold">Welcome to the New Page!</h1>
      </div>
    </div>
  );
}