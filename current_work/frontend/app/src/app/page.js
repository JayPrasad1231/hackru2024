// src/app/page.js (or wherever your Home component is)
'use client';

import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const fullText = 'Welcome to Gambling Guru!';

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-8xl font-bold text-white">
        {fullText.substring(0, fullText.indexOf("Gambling Guru!"))}
        <span className="text-red-400">
          {fullText.substring(fullText.indexOf("Gambling Guru!"))}
        </span>
      </h1>
    </div>
  );
};

export default LandingPage;
