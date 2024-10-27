'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'


export default function Home() {
  const router = useRouter()
  
  return (
    <div class="flex justify-between bg-violet-500 p-6">
      <p class="text-red-300">YOOOO</p>
      <p>BRUHH</p>
      <p>emacs</p>

      <button class="text-violet-900 bg-green-400 p-3" onClick={() => router.push('/test')}>
        PUSH ME BRUH
      </button>

    </div>
  );
}
