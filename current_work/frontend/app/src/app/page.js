// src/app/page.js (or wherever your Home component is)
'use client';

import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [text, setText] = useState('');
  const fullText = 'Weelcome to Gambling Guru!';
  const typingDelay = 60; // delay between typing letters

  useEffect(() => {
    let index = 0;

    const typeText = () => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
        setTimeout(typeText, typingDelay);
      }
    };

    typeText();

    // Cleanup function to avoid memory leaks
    return () => {
      setText(''); // reset text on unmount
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-9xl font-bold text-white">
        {text.substring(0, text.indexOf("Gambling Guru!"))}
        <span className="text-red-400">
          {text.substring(text.indexOf("Gambling Guru!"))}
        </span>
      </h1>
    </div>
  );
};

export default LandingPage;
