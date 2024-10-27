// src/app/components/Layout.js
'use client'; // Add this line to mark the file as a client component

import React from 'react';
import { useRouter } from 'next/navigation';

const buttonData = [
  { label: "Intro to Sports Betting", path: "/ev" },
  { label: "Odds and Probability", path: "/matched" },
  { label: "EV Betting", path: "/arbitrage" },
  { label: "EV Betting Part 2!", path: "/lowHold" },
  { label: "Arbitrage", path: "/vip" },
  { label: "Free & Bonus Bets", path: "/test" },
  { label: "Bankroll Management", path: "/kellycriterion"},
  { label: "Final EV Lesson!", path: "/moreEV"},
  { label: "Account Health", path: "/acctHealth"},
  { label: "Advanced Sports Betting", path: "/advanced"},
  { label: "Authors", path: "/authors" },
];

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div >
      <div className="flex justify-between bg-stone-900 p-4 gap-4 shadow-2xl">
        <div className="flex gap-4">
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
        <button className="font-bold text-2xl text-red-400 rounded" onClick={() => router.push('/')}>Gambling Guru</button>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
