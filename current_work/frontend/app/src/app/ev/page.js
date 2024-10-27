'use client';

import React from 'react';

export default function Introduction() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Lesson 1: Introduction to Sports Betting</h1>
        <p className="text-xl mb-8 text-center">Types of Markets (Types of Bets)</p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Course Introduction</h2>
          <p>Welcome to the course on how to make money through sports betting. In this course, we'll explore Positive Expected Value Betting and Arbitrage Betting strategies.</p>
          <p>Lesson 1 is designed to provide a primer for newcomers to sports betting and introduce the types of markets available. If you're already familiar with this information, feel free to move on to Lesson 2.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Types of Bets</h2>
          <h3 className="text-xl font-semibold mt-6">Moneyline</h3>
          <p>A moneyline bet is the simplest type of bet, where you choose who you think will win the game. For example, if you bet on the Chiefs' moneyline, you're betting that the Chiefs will win the game.</p>

          <h3 className="text-xl font-semibold mt-6">Totals (Over/Unders)</h3>
          <p>Totals represent the total number of points expected in a game. The line is often set in increments of 0.5 to prevent ties. For example:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>If the total is set at 40.5, you can bet on either over 40.5 points or under 40.5 points.</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6">Spreads</h3>
          <p>Spreads are point-based bets on either team’s expected margin of victory or defeat. For instance, if Illinois’ spread is -7.5 and Penn State's is +7.5:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Betting on Illinois at -7.5 means you believe they’ll win by 8 or more points.</li>
            <li>Betting on Penn State at +7.5 means you believe they’ll lose by no more than 7 points.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mt-6">Player Prop Bets</h3>
          <p>Player propositions (props) focus on individual players' stats, such as total passing yards or points scored. For example, betting on Patrick Mahomes to exceed 285.5 passing yards.</p>
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mt-6">Parlays</h3>
          <p>Parlays combine multiple bets, known as legs, into a single wager. All legs must be successful for the parlay to win. Types of parlays include:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Normal Parlays: Betting on multiple games.</li>
            <li>Same Game Parlays: Betting on multiple outcomes in one game.</li>
            <li>Same Game Parlay Plus: Combining same-game bets with bets on other games.</li>
          </ul>
        </section>

        <section className="mb-12">
          <img 
            src="/parlay.png" 
            alt="Screenshot of Sports Betting Introduction" 
            className="w-full h-auto rounded-lg shadow-lg mb-8"
          />
        </section>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mt-6">Pushes and "Hit"</h3>
          <p>A push occurs if the outcome matches the set line exactly (e.g., the total points exactly equals the over/under line). This results in a refund of the stake. A bet "hits" when it wins.</p>
        </section>

        <footer className="text-center mt-10">
          <p>In Lesson 2, we’ll explore how to apply these bets in ways that maximize your chances of winning.</p>
        </footer>
      </div>
    </div>
  );
}
