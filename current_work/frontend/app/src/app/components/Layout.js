// src/app/components/Layout.js
'use client'; // Add this line to mark the file as a client component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const buttonData = [
  { label: "Intro to Sports Betting", path: "/ev" },
  { label: "Odds and Probability", path: "/matched" },
  { label: "EV Betting", path: "/arbitrage" },
  { label: "EV Betting Part 2!", path: "/lowHold" },
  { label: "Arbitrage", path: "/vip" },
  { label: "Free & Bonus Bets", path: "/test" },
  { label: "Bankroll Management", path: "/kellycriterion" },
  { label: "Final EV Lesson!", path: "/moreEV" },
  { label: "Account Health", path: "/acctHealth" },
  { label: "Advanced Sports Betting", path: "/advanced" },
  { label: "Authors", path: "/authors" },
];

const Layout = ({ children }) => {
  const router = useRouter();
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div className="flex min-h-screen bg-gray-900">
      {/* Hamburger icon */}
      <div
        className="relative"
        onMouseEnter={() => setNavVisible(true)}  // Show on hover
        onMouseLeave={() => setNavVisible(false)} // Hide on mouse leave
      >
        <div
          className="cursor-pointer bg-stone-900 p-2 rounded-lg"
          onClick={toggleNav}
        >
          <div className="bg-red-400 h-1 w-6 mb-1"></div>
          <div className="bg-red-400 h-1 w-6 mb-1"></div>
          <div className="bg-red-400 h-1 w-6"></div>
        </div>

        {/* Navbar */}
        {isNavVisible && (
          <div className="absolute left-0 top-0 bg-stone-900 p-4 w-60 rounded-lg shadow-lg z-50"> {/* Increased width to w-60 */}
            <button className="font-bold text-2xl text-red-400 rounded mb-4" onClick={() => router.push('/')}>
              Gambling Guru
            </button>
            <div className="flex flex-col gap-2">
              {buttonData.map((button, index) => (
                <button
                  key={index}
                  className="text-stone-900 bg-red-400 p-3 rounded-lg w-full" // Full width for buttons
                  onClick={() => router.push(button.path)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Main content area */}
      <div className="flex-1 p-6">{children}</div>
    </div>
  );
};

export default Layout;
