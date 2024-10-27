'use client';

export default function ArbitrageBettingBasics() {
  return (
    <div className="bg-stone-900 text-stone-100 min-h-screen p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Lesson 5: Arbitrage Betting Basics – Ensuring Risk-Free Profit
        </h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">What is Arbitrage?</h2>
          <p>
            Arbitrage is the strategy of earning a risk-free profit by exploiting discrepancies between sportsbook odds.
            This can happen if one sportsbook incorrectly sets its lines. By betting on both sides of the line, 
            you can ensure a guaranteed profit regardless of the outcome.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Example of Arbitrage Betting</h2>
          <p>
            Imagine we bet on both the over and under 0.5 goals in a game. If the player scores, the over hits;
            if the player doesn’t score, the under hits. Regardless, one side of the bet wins, providing risk-free profit.
          </p>
          <p className="mt-4">
            Let’s break down an example:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>Over 0.5 goals: +145 odds, $100 stake → potential profit = $145</li>
            <li>Under 0.5 goals: -134 odds, $140 stake → potential payout = $104.47</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculating Potential Profit</h2>
          <p>
            In this scenario, let’s consolidate our potential outcomes:
          </p>
          <ul className="list-disc ml-8 my-4">
            <li>
              If the <strong>over</strong> hits, we win $145, but lose $140 on the under – for a net profit of $5.
            </li>
            <li>
              If the <strong>under</strong> hits, we win $104.47, but lose $100 on the over – for a net profit of $4.47.
            </li>
          </ul>
          <p>
            This means no matter the result, we secure a minimum profit of $4.47.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Calculating Percentage Profit</h2>
          <p>
            To calculate the percentage profit:
          </p>
          <p className="bg-stone-700 p-4 rounded my-4">
            Percentage Profit = (Guaranteed Profit / Total Stake) * 100
          </p>
          <p>
            Here, we have $4.47 profit on a total stake of $240 (100 on over, 140 on under).
          </p>
          <p className="bg-stone-700 p-4 rounded my-4">
            4.47 / 240 = 1.86%
          </p>
          <p>
            While small, consistent profits like this can compound over time to grow your bankroll for larger opportunities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Important Considerations</h2>
          <p>
            Always check the terms and conditions of sportsbooks. For moneylines, spreads, and totals, 
            one side of the bet must hit, ensuring a secure arbitrage opportunity. However, player props 
            might not always provide the same guarantee. 
          </p>
          <p className="mt-4">
            For example, in MLB, if you bet on a player getting a hit, but that player doesn’t start, 
            will the bet void? Knowing this information is crucial to avoid unexpected risks.
          </p>
        </section>
      </div>
    </div>
  );
}
