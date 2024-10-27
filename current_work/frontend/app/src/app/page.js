// src/app/page.js (or wherever your Home component is)
'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Layout from './layout'; // Correct relative import path

export default function Home() {
  const router = useRouter();
  const [odds, setOdds] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTeam, setSelectedTeam] = useState("");

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

  const selectedTeamData = odds ? odds.find(team => team.teamName === selectedTeam) : null;

  return (
    <div>
      <div className="flex justify-center flex-wrap gap-4 p-4">
        <select
          className="bg-stone-700 text-white p-2 rounded-lg"
          value={selectedTeam}
          onChange={handleTeamChange}
        >
          <option value="">Select a Team</option>
          {odds && odds.map((team, index) => (
            <option key={index} value={team.teamName}>{team.teamName}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-center flex-wrap gap-4 p-4">
        {loading ? (
          <p>Loading odds...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : selectedTeamData ? (
          <div className="bg-stone-800 p-4 rounded-lg shadow-lg w-80">
            <h2 className="text-white text-lg font-bold mb-2">{selectedTeamData.teamName}</h2>
            <div className="mb-4">
              <h3 className="text-red-400 font-semibold">H2H Odds:</h3>
              <ul>
                {selectedTeamData.h2h.map((h2hOdds, h2hIndex) => (
                  <li key={h2hIndex} className="text-white">
                    {h2hOdds.first}: {h2hOdds.second}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p>Please select a team to see the odds.</p>
        )}
      </div>
    </div>
  );
}
