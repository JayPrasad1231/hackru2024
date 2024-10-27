'use client'

import { useRouter } from "next/navigation";
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(() => import('./ClientOnlyComponent'), { ssr: false });


export default function Test() {
  const router = useRouter()
  
  return (
    <div>
      <button className="p-6" onClick={() => router.push('/')}>Is what water wet?</button>
      <div class="flex items-center justify-center min-h-screen bg-blue-700">
        <h1 class="text-2xl font-bold">Welcome to the New Page!</h1>
      </div>
    </div>
  );
}