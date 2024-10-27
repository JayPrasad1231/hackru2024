// src/app/page.js (or wherever your Home component is)
'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Layout from '../layout'; // Correct relative import path

export default function Home() {
  const router = useRouter();
  const [odds, setOdds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selectedType, setSelectedType] = useState("h2h"); // Default type set to h2h

  useEffect(() => {
    const fetchOdds = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/fetch_odds');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setOdds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOdds();
  }, []);

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const selectedTeamData = odds ? odds.find(team => team.teamName === selectedTeam) : null;

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900">
      <h1 className="text-2xl font-bold text-white mb-4">Sports Odds</h1>
      <div className="flex justify-center gap-4 mb-4">
        <select
          className="bg-stone-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="">Select a Team</option>
          {odds && odds.map((team, index) => (
            <option key={index} value={team.teamName}>{team.teamName}</option>
          ))}
        </select>
        <select
          className="bg-stone-700 text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          value={selectedType}
          onChange={handleTypeChange}
        >
          <option value="h2h">H2H Odds</option>
          <option value="spread">Spread Odds</option>
        </select>
      </div>
      <div className="flex justify-center flex-wrap gap-4">
        {loading ? (
          <p className="text-white">Loading odds...</p>
        ) : error ? (
          <p className="text-red-400">Error: {error}</p>
        ) : selectedTeamData ? (
          <div className="bg-stone-800 p-6 rounded-lg shadow-lg w-80">
            <div className="bg-red-400 rounded-lg flex items-center justify-center px-2 h-12 mb-4">
              <h2 className="text-white text-lg font-bold mb-0 text-center">
                {selectedTeamData.teamName}: {selectedType === "h2h" ? "H2H" : "Spread"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {(selectedType === "h2h" ? selectedTeamData.h2h : selectedTeamData.spread)?.map((oddsData, index) => (
                <div key={index} className="bg-stone-700 p-4 rounded-lg shadow">
                  <h3 className="text-red-400 font-semibold">{oddsData.first}</h3>
                  <p className="text-white">
                    {selectedType === "h2h" 
                      ? `Odds: ${oddsData.second}`
                      : `Spread: ${oddsData.third}, Odds: ${oddsData.second}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-white">Please select a team to see the odds.</p>
        )}
      </div>
    </div>
  );
}
