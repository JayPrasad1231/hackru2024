'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation'

const buttonData = [
  { label: "Kelley Criterion", path: "/test" },
  { label: "EV Betting Tips", path: "/test" },
  { label: "Matched Betting Tips", path: "/test" },
  { label: "Arbitrage Betting", path: "/test" },
  { label: "Low Hold Betting", path: "/test" },
  { label: "VIP Program", path: "/test" },
  { label: "Authors", path: "/test" },
];

export default function Home() {
  const router = useRouter()
  
  return (
    <div className="flex justify-left bg-stone-900 p-6 gap-4 shadow-2xl">
      {buttonData.map((button, index) => (
        <button
          key={index}
          className="text-stone-900 bg-red-400 p-3 rounded-lg"
          onClick={() => router.push(button.path)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}
